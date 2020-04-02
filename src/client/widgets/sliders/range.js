var {clip} = require('../utils'),
    Fader = require('./fader'),
    html = require('nanohtml')

var faderDefaults = Fader.defaults()._props()

class Range extends Fader {

    static description() {

        return 'A fader with two heads for setting a range.'

    }

    constructor(options) {

        options.multitouch = true

        super({...options, html: html`
            <canvas></canvas>
        `})

        this.faders = [
            new Fader({props:{
                ...faderDefaults,
                pips:false,
                visible: false,
                horizontal:this.getProp('horizontal'),
                default:this.getProp('default').length === 2 ? this.getProp('default')[0] : this.getProp('range').min,
                snap:this.getProp('snap'),
                spring:this.getProp('spring'),
                range:this.getProp('range'),
                decimals:this.getProp('decimals'),
                logScale:this.getProp('logScale'),
                sensitivity:this.getProp('sensitivity'),
            }, parent: this}),
            new Fader({props:{
                ...faderDefaults,
                pips:false,
                visible: false,
                horizontal:this.getProp('horizontal'),
                default:this.getProp('default').length === 2 ? this.getProp('default')[1] : this.getProp('range').max,
                snap:this.getProp('snap'),
                spring:this.getProp('spring'),
                range:this.getProp('range'),
                decimals:this.getProp('decimals'),
                logScale:this.getProp('logScale'),
                sensitivity:this.getProp('sensitivity'),
            }, parent: this})
        ]


        this.on('change',(e)=>{

            if (e.widget == this) return

            e.stopPropagation = true

            var v = [
                this.faders[0].getValue(),
                this.faders[1].getValue()
            ]

            this.setValue(v, e.options)

        })

        this.touchMap = {}

        this.setValue([
            this.faders[0].rangeValsMin,
            this.faders[1].rangeValsMax
        ])

    }

    resizeHandle(event){

        super.resizeHandle(event)

        for (var f of this.faders) {
            f.width = this.width
            f.height = this.height
            f.gaugePadding = this.gaugePadding
        }

    }

    draginitHandle(e) {

        var id

        if (!this.touchMap[e.pointerId]) {

            var ndiff, diff = -1

            for (var i in this.faders) {

                if (Object.values(this.touchMap).indexOf(i) != -1) continue

                var coord = this.faders[i].percentToCoord(this.faders[i].valueToPercent(this.faders[i].value)) - (this.getProp('horizontal') ? -1 : 1) * (i == 0 ? -20 : 20)

                ndiff = this.getProp('horizontal')?
                    Math.abs(e.offsetX - coord) :
                    Math.abs(e.offsetY - coord)

                if (diff == -1 || ndiff < diff) {
                    id = i
                    diff = ndiff
                }

            }

            this.touchMap[e.pointerId] = id


        } else if (e.traversing) {

            id = this.touchMap[e.pointerId]

        }

        if (!id) return

        for (var f of this.faders) {
            f.percent = clip(f.percent,[
                f.valueToPercent(f.rangeValsMin),
                f.valueToPercent(f.rangeValsMax)
            ])
        }


        e.stopPropagation = true
        this.faders[id].trigger('draginit', e)

    }

    dragHandle(e) {

        var i = this.touchMap[e.pointerId]

        if (!i) return

        if (this.getProp('touchAddress')) {
            this.sendValue({
                address: this.getProp('touchAddress'),
                v: [parseInt(i), 1],
            })
        }

        if (e.shiftKey) {
            this.faders[0].trigger('drag', e)
            this.faders[1].trigger('drag', e)
        } else {
            this.faders[i].trigger('drag', e)
        }

    }

    dragendHandle(e) {

        var i = this.touchMap[e.pointerId]

        if (!i) return

        e.stopPropagation = true
        this.faders[i].trigger('dragend', e)


        if (this.getProp('touchAddress')) {
            this.sendValue({
                address: this.getProp('touchAddress'),
                v: [parseInt(i), 0],
            })
        }

        delete this.touchMap[e.pointerId]

    }

    setValue(v, options={}) {

        if (!v || !v.length || v.length!=2) return


        this.faders[0].rangeValsMax = v[1]
        this.faders[1].rangeValsMin = v[0]

        if (!options.dragged) {
            this.faders[0].setValue(v[0])
            this.faders[1].setValue(v[1])
        }
        this.value = [
            this.faders[0].getValue(),
            this.faders[1].getValue()
        ]


        if (options.send) this.sendValue()
        if (options.sync) this.changed(options)

        this.batchDraw()

    }

    draw() {


        var width = this.getProp('horizontal') ? this.height : this.width,
            height = !this.getProp('horizontal') ? this.height : this.width,
            fader = this.faders[0]

        var d = Math.round(fader.percentToCoord(fader.valueToPercent(this.faders[this.getProp('horizontal')?0:1].value))),
            d2 = Math.round(fader.percentToCoord(fader.valueToPercent(this.faders[this.getProp('horizontal')?1:0].value))),
            m = this.getProp('horizontal') ? this.height / 2 : this.width / 2,
            dashed = this.getProp('dashed'),
            compact = this.getProp('design') === 'compact'

        this.clear()

        if (this.getProp('pips') && !compact) m -= 10 * PXSCALE

        // sharp border trick
        if (compact) {
            if (width % 2 && parseInt(m) === m) m -= 0.5
        } else {
            if (width % 2 && parseInt(m) !== m) m -= 0.5
        }


        this.ctx.strokeStyle = this.gaugeGradient || this.cssVars.colorFill

        if (compact) {
            this.ctx.lineWidth = Math.round(width - this.gaugePadding * 2)
        } else {
            this.ctx.lineWidth = 2 * PXSCALE
        }


        if (dashed) this.ctx.setLineDash([PXSCALE, PXSCALE])


        if (this.cssVars.alphaFillOff) {
            // gaugo off
            this.ctx.globalAlpha = this.cssVars.alphaFillOff
            this.ctx.beginPath()
            this.ctx.moveTo(m, height - this.gaugePadding)
            this.ctx.lineTo(m, this.gaugePadding)
            this.ctx.stroke()
        }


        if (this.cssVars.alphaFillOn) {
            // gaugo on
            this.ctx.globalAlpha = this.cssVars.alphaFillOn
            this.ctx.beginPath()
            this.ctx.moveTo(m, d)
            this.ctx.lineTo(m, d2)
            this.ctx.stroke()
        }

        if (dashed) this.ctx.setLineDash([])

        if (compact) {

            // stroke

            this.ctx.globalAlpha = this.cssVars.alphaStroke
            this.ctx.strokeStyle = this.cssVars.colorStroke

            this.ctx.beginPath()
            this.ctx.moveTo(0, 0)
            this.ctx.lineTo(width, 0)
            this.ctx.lineTo(width, height)
            this.ctx.lineTo(0, height)
            this.ctx.closePath()
            this.ctx.lineWidth = 2 * PXSCALE
            this.ctx.stroke()


            // flat knob

            this.ctx.globalAlpha = 1
            this.ctx.fillStyle = this.cssVars.colorFill

            this.ctx.beginPath()
            this.ctx.rect(this.gaugePadding, Math.min(d, height - this.gaugePadding - PXSCALE), width - this.gaugePadding * 2, PXSCALE)
            this.ctx.fill()

            // extra knob
            this.ctx.beginPath()
            this.ctx.rect(this.gaugePadding, Math.min(d2, height - this.gaugePadding - PXSCALE), width - this.gaugePadding * 2, PXSCALE)
            this.ctx.fill()


            this.clearRect = [0, 0, width, height]


        } else if (this.getProp('design') === 'default') {

            for (let _d of [d, d2]) {

                if (this.cssVars.alphaStroke) {

                    this.ctx.globalAlpha = 1
                    this.ctx.fillStyle = this.cssVars.colorPanel

                    this.ctx.beginPath()
                    this.ctx.rect(m - 6 * PXSCALE, _d - 10 * PXSCALE, 12 * PXSCALE, 20 * PXSCALE)
                    this.ctx.fill()

                    this.ctx.globalAlpha = this.cssVars.alphaStroke
                    this.ctx.strokeStyle = this.cssVars.colorStroke
                    this.ctx.lineWidth = PXSCALE

                    this.ctx.beginPath()
                    this.ctx.rect(m - 5.5 * PXSCALE, _d - 9.5 * PXSCALE, 11 * PXSCALE, 19 * PXSCALE)
                    this.ctx.stroke()

                }

                this.ctx.globalAlpha = 1
                this.ctx.fillStyle = this.cssVars.colorWidget

                this.ctx.beginPath()
                this.ctx.rect(m - 3 * PXSCALE, _d, 6 * PXSCALE, PXSCALE)
                this.ctx.fill()

            }

            this.clearRect = [m - 10 * PXSCALE, this.gaugePadding - 10 * PXSCALE, 20 * PXSCALE, height - 2 * this.gaugePadding + 20 * PXSCALE]

        } else {

            this.ctx.globalAlpha = 1
            this.ctx.fillStyle = this.cssVars.colorFill

            this.ctx.beginPath()
            this.ctx.arc(m, d, 3 * PXSCALE, 0, 2 * Math.PI)
            this.ctx.fill()

            // extra knob
            this.ctx.beginPath()
            this.ctx.arc(m, d2, 3 * PXSCALE, 0, 2 * Math.PI)
            this.ctx.fill()


            if (this.cssVars.alphaStroke) {
                this.ctx.globalAlpha = this.cssVars.alphaStroke
                this.ctx.fillStyle = this.cssVars.colorFill

                this.ctx.beginPath()
                this.ctx.arc(m, d, 10 * PXSCALE, 0, 2 * Math.PI)
                this.ctx.fill()

                // extra knob
                this.ctx.beginPath()
                this.ctx.arc(m, d2, 10 * PXSCALE, 0, 2 * Math.PI)
                this.ctx.fill()
            }

            this.clearRect = [m - 11 * PXSCALE, this.gaugePadding - 11 * PXSCALE, 22 * PXSCALE, height - 2 * this.gaugePadding + 22 * PXSCALE]

        }

        if (this.getProp('pips')) {
            this.ctx.globalAlpha = 1
            this.ctx.drawImage(this.pips, 0, 0)
            if (!compact) this.clearRect = [this.clearRect, [m + 10 * PXSCALE, 0, 10 * PXSCALE + this.pipsTextSize, height]]
        }


    }

    onRemove() {

        this.faders[0].onRemove()
        this.faders[1].onRemove()
        super.onRemove()

    }

}


Range.dynamicProps = Range.prototype.constructor.dynamicProps
    .filter(n => !['spring', 'decimals'].includes(n))


module.exports = Range
