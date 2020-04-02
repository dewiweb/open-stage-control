const iOS = require('../ui/ios')
const macOs = (navigator.platform || '').match('Mac')

var longTouchTimer = false,
    clearLongTouchTimer = function() {
        if (longTouchTimer) {
            clearTimeout(longTouchTimer)
            longTouchTimer = false
        }
    }

if (macOs) {
    // on macOs, ctrl+click generates a contextmenu event
    // that should be interpreted as a rightclick
    document.body.addEventListener('contextmenu', (event)=>{
        event.preventDefault()
        DOM.dispatchEvent(event.target, 'fast-right-click', event)
    })
} else {
    document.body.setAttribute('oncontextmenu', 'return false')
}

function mouseToFastClick(event) {

    if (event.touchPunch) return
    if (event.sourceCapabilities && event.sourceCapabilities.firesTouchEvents) return
    if (event.button == 2) event.preventDefault()

    var e = event

    var name = event.button == 2 ? 'fast-right-click' : 'fast-click'

    DOM.dispatchEvent(e.target, name, e)

}

function touchToFastClick(event) {

    var e = event.changedTouches[0]

    DOM.dispatchEvent(e.target, 'fast-click', e)

    if (e.preventOriginalEvent) event.preventDefault()

    longTouchTimer = setTimeout(()=>{

        var off = DOM.offset(e.target)

        e.offsetX = e.pageX - off.left
        e.offsetY = e.pageY - off.top

        DOM.dispatchEvent(e.target, 'fast-right-click', e)

        clearLongTouchTimer()

    }, 600)

}

if (!iOS) document.addEventListener('mousedown', mouseToFastClick, true)
document.addEventListener('touchstart', touchToFastClick, {passive: false, capture: true})


DOM.addEventListener(document, 'touchend touchmove touchcancel', clearLongTouchTimer)
