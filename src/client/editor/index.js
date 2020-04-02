var {updateWidget, incrementWidget} = require('./data-workers'),
    keyboardJS = require('keyboardjs'),
    {diff, diffToWidget} = require('./diff'),
    widgetManager = require('../managers/widgets'),
    {deepCopy} = require('../utils'),
    {defaults} = require('../widgets/'),
    macOs = (navigator.platform || '').match('Mac'),
    UiSelectArea = require('../ui/ui-selectarea'),
    UiInspector = require('../ui/ui-inspector'),
    UiTree = require('../ui/ui-tree'),
    UiDragResize = require('../ui/ui-dragresize'),
    {leftUiSidePanel, rightUiSidePanel} = require('../ui/'),
    ipc = require('../ipc'),
    sessionManager

const HISTORY_SIZE = 50

class Editor {

    constructor() {

        this.inspector = new UiInspector({selector: '#osc-inspector'})
        this.inspector.on('update', (event)=>{

            var {propName, value} = event,
                newWidgets = []

            for (var w of this.selectedWidgets) {
                if (propName === 'address' && value === '') {
                    // special case
                    w.props[propName] = '/' + w.props.id
                } else if (propName === 'label' && value === true) {
                    w.props[propName] = 'auto'
                } else {
                    w.props[propName] = value !== '' ? value : deepCopy(defaults[w.props.type][propName].value)
                }
                newWidgets.push(updateWidget(w, {changedProps: [propName], preventSelect: this.selectedWidgets.length > 1}))
            }

            this.pushHistory()

            if (newWidgets.length > 1) this.select(newWidgets)

        })


        this.widgetTree = new UiTree({selector: '#osc-tree'})
        this.widgetTree.on('sorted', (event)=>{

            var {widget, oldIndex, newIndex} = event,
                propName = widget.props.tabs.length ? 'tabs' : 'widgets'

            if (widget.props[propName].length < 2) return

            widget.props[propName].splice(newIndex, 0, widget.props[propName].splice(oldIndex, 1)[0])

            var indices = [newIndex, oldIndex]
            if (Math.abs(oldIndex - newIndex) > 1) {
                for (var i = Math.min(newIndex, oldIndex) + 1; i < Math.max(newIndex, oldIndex); i++) {
                    indices.push(i)
                }
            }

            var container = updateWidget(widget, {removedIndexes: indices, addedIndexes: indices, preventSelect: true})

            this.pushHistory({removedIndexes: indices, addedIndexes: indices})
            this.select(container.children[newIndex])

        })

        this.oscContainer = DOM.get('#osc-container')[0]



        this.widgetDragResize = new UiDragResize({})
        this.widgetDragResize.on('move', (e)=>{
            var left  =  Math.round(e.left / GRIDWIDTH) * GRIDWIDTH,
                top  =  Math.round(e.top / GRIDWIDTH) * GRIDWIDTH
            var dX = left - e.initLeft,
                dY = top - e.initTop
            this.moveWidget(dX, dY)
        })
        this.widgetDragResize.on('resize', (e)=>{
            var width  =  Math.round(e.width / GRIDWIDTH) * GRIDWIDTH,
                height  =  Math.round(e.height / GRIDWIDTH) * GRIDWIDTH
            var dX = width - e.initWidth,
                dY = height - e.initHeight
            this.resizeWidget(dX, dY)
        })

        this.selectedWidgets = []

        this.clipboard = null
        this.idClipboard = null
        ipc.on('clipboard', (data)=>{
            this.clipboard = data.clipboard
            this.idClipboard = data.idClipboard
        })


        this.enabled = false
        this.grid = true

        this.unsavedSession = false
        window.onbeforeunload = ()=>{
            if (editor.unsavedSession) return true
        }
        
        this.history = []
        this.historyState = -1
        this.historySession = null

        this.mousePosition = {}
        this.mouveMoveHandler = this.mouseMove.bind(this)
        this.mouveLeaveHandler = this.mouseLeave.bind(this)

        keyboardJS.withContext('editing', ()=>{

            var combos = [
                'mod + z',
                'mod + y',
                'mod + shift + z',
                'mod + c',
                'mod + x',
                'mod + v',
                'mod + shift + v',
                macOs ? 'backspace' : 'delete',
                'alt + up',
                'alt + down',
                'alt + right',
                'alt + left',
                'up',
                'down',
                'right',
                'left',
                'mod + shift + a',
                'mod + a',
                'mod + up',
                'mod + down',
                'mod + left',
                'mod + right',
                'f2'
            ]

            for (let c of combos) {
                keyboardJS.bind(c, (e)=>{
                    this.handleKeyboard(c, e)
                })
            }

        })

        this.selectarea = new UiSelectArea('[data-widget]:not(.not-editable)', (elements)=>{

            elements = elements.map(e => widgetManager.getWidgetByElement(e, ':not(.not-editable)')).filter(e => e)

            for (var i in elements) {
                this.select(elements[i], {multi:true, fromLasso:true})
            }
            this.select(this.selectedWidgets)

        })


    }

    handleKeyboard(combo, e){

        if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT')) return

        e.preventDefault()

        switch (combo) {

            case 'mod + z':
                this.undo()
                break

            case 'mod + y':
            case 'mod + shift + z':
                this.redo()
                break

            case 'mod + c':
                this.copyWidget()
                break

            case 'mod + x':
                this.cutWidget()
                break

            case 'mod + v':
                this.pasteWidget(this.mousePosition.x, this.mousePosition.y, false)
                break

            case 'mod + shift + v':
                this.pasteWidget(this.mousePosition.x, this.mousePosition.y, true)
                break

            case 'backspace':
            case 'delete':
                this.deleteWidget()
                break

            case 'alt + up':
            case 'alt + down':
            case 'alt + right':
            case 'alt + left':
                if (!this.selectedWidgets.length) return

                if (this.selectedWidgets[0].props.height === undefined && e.key.match(/Arrow(Up|Down)/)) return
                if (this.selectedWidgets[0].props.width === undefined && e.key.match(/Arrow(Left|Right)/)) return

                var deltaW = e.key === 'ArrowLeft' ? -GRIDWIDTH : e.key === 'ArrowRight' ? GRIDWIDTH : 0,
                    deltaH = e.key === 'ArrowUp' ? -GRIDWIDTH : e.key === 'ArrowDown' ? GRIDWIDTH : 0

                if (e.shiftKey) {
                    deltaW *= 5
                    deltaH *= 5
                }

                this.resizeWidget(deltaW, deltaH)

                break

            case 'up':
            case 'down':
            case 'right':
            case 'left':
                if (!this.selectedWidgets.length) return

                if (this.selectedWidgets[0].props.top === undefined && e.key.match(/Arrow(Up|Down)/)) return
                if (this.selectedWidgets[0].props.left === undefined && e.key.match(/Arrow(Left|Right)/)) return

                var deltaX = e.key === 'ArrowLeft' ? -GRIDWIDTH : e.key === 'ArrowRight' ? GRIDWIDTH : 0,
                    deltaY = e.key === 'ArrowUp' ? -GRIDWIDTH : e.key === 'ArrowDown' ? GRIDWIDTH : 0

                if (e.shiftKey) {
                    deltaX *= 5
                    deltaY *= 5
                }

                this.moveWidget(deltaX, deltaY)

                break

            case 'mod + shift + a':
                if (!this.selectedWidgets.length) return
                this.unselect()
                this.selectedWidgets = []
                this.inspector.clear()
                break

            case 'mod + a':
                if (!this.selectedWidgets.length) return

                var curWidget1 = this.selectedWidgets[0]

                if (curWidget1.parent !== widgetManager) {
                    this.select([...curWidget1.parent.children])
                }
                break

            case 'mod + up':
            case 'mod + down':
            case 'mod + right':
            case 'mod + left':
                if (!this.selectedWidgets.length) return

                var curWidget = this.selectedWidgets[0],
                    toSelect = null

                if (e.key === 'ArrowUp' && curWidget.parent !== widgetManager) {

                    toSelect = curWidget.parent

                } else if (e.key === 'ArrowDown') {

                    let toSelectList = [...curWidget.children]

                    if (toSelectList && toSelectList.length) {
                        toSelectList.sort((a,b) => a.container.offsetLeft>b.container.offsetLeft)
                        toSelect = toSelectList[0]
                        if (toSelect.container.classList.contains('not-editable')) {
                            toSelect = null
                        }
                    }

                }
                else if((e.key == 'ArrowLeft') || (e.key == 'ArrowRight')){

                    if (curWidget.parent === widgetManager) return

                    let toSelectList = [...curWidget.parent.children]

                    if (toSelectList && toSelectList.length) {
                        toSelectList.sort((a,b) => a.container.offsetLeft > b.container.offsetLeft)
                        var idx = toSelectList.indexOf(curWidget)
                        if (idx >= 0) {
                            var nextIdx = (idx + (e.key === 'ArrowLeft' ? -1 : 1 ) + toSelectList.length) % toSelectList.length
                            toSelect = toSelectList[nextIdx]
                        }
                    }
                }

                if (toSelect) {
                    this.select(toSelect)
                }

                break

        }


    }

    toggleGrid() {

        this.grid = !this.grid

        GRIDWIDTH = this.grid ? 10 : 1

        document.documentElement.style.setProperty('--grid-width', GRIDWIDTH)
        document.body.classList.toggle('no-grid', GRIDWIDTH == 1)

    }

    enable() {

        if (READ_ONLY || sessionManager.session === null) return

        this.enabled = true

        document.body.classList.add('editor-enabled')

        this.widgetTree.updateTree(this.selectedWidgets)

        leftUiSidePanel.enable()
        rightUiSidePanel.enable()

        keyboardJS.setContext('editing')

        this.oscContainer.addEventListener('mousemove', this.mouveMoveHandler)
        this.oscContainer.addEventListener('mouseleave', this.mouveLeaveHandler)

        this.selectarea.enable()

    }

    disable() {


        this.unselect()
        this.selectedWidgets = []

        document.body.classList.remove('editor-enabled')

        keyboardJS.setContext('global')

        this.oscContainer.removeEventListener('mousemove', this.mouveMoveHandler)
        this.oscContainer.removeEventListener('mouseleave', this.mouveLeaveHandler)

        leftUiSidePanel.disable()
        rightUiSidePanel.disable()
        this.widgetTree.clear()
        this.inspector.clear()

        this.selectarea.disable()

        this.enabled = false

    }


    unselect() {

        this.widgetDragResize.clear()
        this.inspector.clear()

        DOM.each(document, '.editing', (element)=>{
            element.classList.remove('editing')
        })

        this.widgetTree.select([])

    }

    select(widget, options={}){

        if (!this.enabled) return

        if (Array.isArray(widget)) {

            this.selectedWidgets = widget

        } else if (options.multi) {

            var sameLevel = false

            while (!sameLevel && widget.parent !== widgetManager) {
                let test = true
                for (var w of this.selectedWidgets) {
                    if (w.parent !== widget.parent) test = false
                }
                sameLevel = test
                if (!sameLevel) widget = widget.parent
            }

            if (!this.selectedWidgets.includes(widget) && sameLevel) {

                this.selectedWidgets.push(widget)

            } else if (sameLevel && !options.fromLasso){

                this.selectedWidgets.splice(this.selectedWidgets.indexOf(widget), 1)

            }

        } else {

            this.selectedWidgets = [widget]

        }

        if (!options.fromLasso) this.unselect()

        if (this.selectedWidgets.length > 0 && !options.fromLasso) {

            this.inspector.inspect(this.selectedWidgets)
            this.createSelectionBlock()

        } else {

            this.inspector.clear()

        }

    }


    createSelectionBlock(){

        for (let widget of this.selectedWidgets) {
            DOM.each(document, `[data-widget="${widget.hash}"]`, (item)=>{
                item.classList.add('editing')
            })
        }
        this.widgetTree.select(this.selectedWidgets)
        this.widgetDragResize.create(this.selectedWidgets)

    }

    mouseMove(e) {

        this.mousePosition.x = Math.round((e.offsetX + e.target.scrollLeft) / (GRIDWIDTH * PXSCALE)) * GRIDWIDTH,
        this.mousePosition.y = Math.round((e.offsetY + e.target.scrollTop)  / (GRIDWIDTH * PXSCALE)) * GRIDWIDTH

    }

    mouseLeave(e) {

        this.mousePosition = {}

    }

    copyWidget() {

        if (!this.selectedWidgets.length) return
        if (this.selectedWidgets[0].getProp('type') === 'root') return

        this.clipboard = deepCopy(this.selectedWidgets.map((w)=>w.props))
        this.idClipboard = this.selectedWidgets[0].getProp('id')

        ipc.send('clipboard', {
            clipboard: this.clipboard,
            idClipboard: this.idClipboard
        })

    }

    cutWidget() {

        this.copyWidget()
        this.deleteWidget()

    }

    pasteWidget(x, y, increment) {

        if (!this.selectedWidgets.length || this.clipboard === null) return
        if (
            this.selectedWidgets[0].childrenType === undefined ||
            this.clipboard[0].type === 'tab' && this.selectedWidgets[0].childrenType === 'widget' ||
            this.clipboard[0].type !== 'tab' && this.selectedWidgets[0].childrenType === 'tab'
        ) return

        var pastedData = deepCopy(this.clipboard),
            minTop = Infinity,
            minLeft = Infinity

        if (increment) {
            pastedData = pastedData.map(x=>incrementWidget(x))
        }


        if (x !== undefined) {

            for (let i in pastedData) {

                if (!isNaN(pastedData[i]).top && pastedData[i].top < minTop) {
                    minTop = pastedData[i].top
                }

                if (!isNaN(pastedData[i]).left && pastedData[i].left < minLeft) {
                    minLeft = pastedData[i].left
                }

            }

            for (let i in pastedData) {

                if (!isNaN(pastedData[i].left)) pastedData[i].left = pastedData[i].left - minLeft + x
                if (!isNaN(pastedData[i].top)) pastedData[i].top  = pastedData[i].top - minTop + y

            }

        }


        // paste data

        var store = this.clipboard[0].type === 'tab' ? 'tabs' : 'widgets'

        this.selectedWidgets[0].props[store] = this.selectedWidgets[0].props[store] || []
        this.selectedWidgets[0].props[store] = this.selectedWidgets[0].props[store].concat(pastedData)

        var indexes = {addedIndexes: []}
        for (let i = 0; i < pastedData.length; i++) {
            indexes.addedIndexes.push(this.selectedWidgets[0].props[store].length - 1 - i )
        }

        updateWidget(this.selectedWidgets[0], indexes)

        this.pushHistory(indexes)

    }

    pasteWidgetAsClone(x, y) {

        if (!this.selectedWidgets.length || this.clipboard === null) return
        if (!this.idClipboard || !widgetManager.getWidgetById(this.idClipboard).length) return

        if (
            this.selectedWidgets[0].childrenType === undefined ||
            this.clipboard[0].type === 'tab' ||
            this.clipboard[0].type !== 'tab' && this.selectedWidgets[0].childrenType === 'tab'
        ) return

        var clone = {type: 'clone', widgetId: this.idClipboard},
            pastedData = deepCopy(this.clipboard)

        clone.width = pastedData[0].width
        clone.height = pastedData[0].height


        if (x !== undefined) {

            clone.left = x
            clone.top  = y

        }

        this.selectedWidgets[0].props.widgets = this.selectedWidgets[0].props.widgets || []
        this.selectedWidgets[0].props.widgets.push(clone)

        var indexes = {addedIndexes: [this.selectedWidgets[0].props.widgets.length -1]}

        updateWidget(this.selectedWidgets[0], indexes)
        this.pushHistory(indexes)

    }


    deleteWidget() {

        if (!this.selectedWidgets.length) return
        if (this.selectedWidgets[0].getProp('type') === 'root') return

        var type = this.selectedWidgets[0].props.type == 'tab' ? 'tab' : 'widget',
            parent = this.selectedWidgets[0].parent,
            index = this.selectedWidgets.map(w => parent.children.indexOf(w)).sort((a,b)=>{return b-a}),
            removedIndexes = []

        if (type === 'widget') {
            for (let i of index) {
                removedIndexes.push(i)
                parent.props.widgets.splice(i,1)
            }
        } else {
            for (let i of index) {
                removedIndexes.push(i)
                parent.props.tabs.splice(i,1)
            }
        }

        var container = updateWidget(parent, {preventSelect: true, removedIndexes})
        if (container.children.length) {
            this.select(container.children[Math.min(index.pop(), container.children.length - 1)])
        } else {
            this.select(container)
        }
        this.pushHistory({removedIndexes})

    }

    resizeWidget(deltaW, deltaH, ui) {

        if (!this.selectedWidgets.length) return

        var newWidgets = []

        for (var i = 0; i < this.selectedWidgets.length; i++) {

            let w = this.selectedWidgets[i],
                nW, nH

            if (i === 0 && ui) {
                nW = ui.originalSize.width + deltaW
                nH = ui.originalSize.height + deltaH

            } else {
                nW = w.container.offsetWidth + deltaW
                nH = w.container.offsetHeight + deltaH
            }

            if (w.props.width !== undefined && w.parent.getProp('layout') !== 'vertical') {
                var newWidth = Math.max(nW, GRIDWIDTH) / PXSCALE
                if (typeof w.props.width === 'string' && w.props.width.indexOf('%') > -1) {
                    w.props.width = (100 * PXSCALE * newWidth / w.container.parentNode.offsetWidth).toFixed(2) + '%'
                } else {
                    w.props.width = newWidth
                }
            }

            if (w.props.height !== undefined && w.parent.getProp('layout') !== 'horizontal') {
                var newHeight = Math.max(nH, GRIDWIDTH) / PXSCALE
                if (typeof w.props.height === 'string' && w.props.height.indexOf('%') > -1) {
                    w.props.height = (100 * PXSCALE * newHeight / w.container.parentNode.offsetHeight).toFixed(2) + '%'
                } else {
                    w.props.height = newHeight
                }
            }

            if (w.props.width !== undefined || w.props.height !== undefined) newWidgets.push(updateWidget(w, {changedProps: ['width', 'height'], preventSelect: this.selectedWidgets.length > 1}))

        }

        this.pushHistory()

        if (newWidgets.length > 1) this.select(newWidgets, {preventSelect: this.selectedWidgets.length > 1})

    }

    moveWidget(deltaX, deltaY) {

        if (!this.selectedWidgets.length) return

        var newWidgets = []

        for (var w of this.selectedWidgets) {

            var newTop = Math.max(parseInt(w.container.offsetTop) / PXSCALE + deltaY, 0)
            if (typeof w.props.top === 'string' && w.props.top.indexOf('%') > -1) {
                w.props.top = (100 * PXSCALE * newTop / w.container.parentNode.offsetHeight).toFixed(2) + '%'
            } else {
                w.props.top = newTop
            }
            var newLeft = Math.max(parseInt(w.container.offsetLeft) / PXSCALE + deltaX, 0)
            if (typeof w.props.left === 'string' && w.props.left.indexOf('%') > -1) {
                w.props.left = (100 * PXSCALE * newLeft / w.container.parentNode.offsetWidth).toFixed(2) + '%'
            } else {
                w.props.left = newLeft
            }

            newWidgets.push(updateWidget(w, {changedProps: ['top', 'left'], preventSelect: this.selectedWidgets.length > 1}))

        }

        this.pushHistory()

        if (newWidgets.length > 1) this.select(newWidgets)

    }



    pushHistory(indexes) {

        this.unsavedSession = true

        if (this.historyState > -1) {
            this.history.splice(0, this.historyState + 1)
            this.historyState = -1
        }

        var d = diff.diff(this.historySession, sessionManager.session.getRoot())

        if (d) {
            diff.patch(this.historySession, deepCopy(d))
            this.history.unshift([deepCopy(d), indexes])
            if (this.history.length > HISTORY_SIZE) this.history.pop()
        }

    }

    clearHistory() {

        this.history = []
        this.historyState = -1
        this.historySession = deepCopy(sessionManager.session.getRoot())

    }

    undo() {

        if (this.historyState === this.history.length - 1) return

        this.historyState += 1

        var [patch, indexes] = this.history[this.historyState],
            d1 = deepCopy(patch),
            d2 = deepCopy(patch)

        diff.unpatch(this.historySession, d1)
        diff.unpatch(sessionManager.session.getRoot(), d2)

        this.updateWidgetFromPatch(patch, indexes ? {
            addedIndexes: deepCopy(indexes.removedIndexes),
            removedIndexes: deepCopy(indexes.addedIndexes),
        } : undefined)

    }

    redo() {

        if (this.historyState === -1) return

        var [patch, indexes] = this.history[this.historyState],
            d1 = deepCopy(patch),
            d2 = deepCopy(patch)

        diff.patch(this.historySession, d1)
        diff.patch(sessionManager.session.getRoot(), d2)

        this.updateWidgetFromPatch(patch, indexes ? {
            addedIndexes: deepCopy(indexes.addedIndexes),
            removedIndexes: deepCopy(indexes.removedIndexes),
        } : undefined)

        this.historyState -= 1

    }

    updateWidgetFromPatch(patch, indexes) {

        var [widget, subpatch] = diffToWidget(widgetManager.getWidgetById('root')[0], patch),
            options = {}

        if (indexes) {
            options = {...indexes}
        } else {
            options.changedProps = Object.keys(subpatch)
            options.reuseChildren = false
        }

        updateWidget(widget, options)

        if (this.selectedWidgets[0] && !widgetManager.widgets[this.selectedWidgets[0].hash]) {
            this.unselect()
            this.selectedWidgets = []
            this.inspector.clear()
        } else if (this.selectedWidgets[0]) {
            this.widgetDragResize.create(this.selectedWidgets)
        }

    }




}

var editor = new Editor()

module.exports = editor

require('./context-menu')
sessionManager = require('../managers/session/')
