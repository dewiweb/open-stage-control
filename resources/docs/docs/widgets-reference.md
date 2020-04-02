

# Widget reference

<div class="accordion" data-category="generic" markdown="1">

<h4 class="accordionlink" id="generic_properties"><a class="headerlink" href="#generic_properties">Generic properties</a></h3>
<div class="accordion-description">Properties shared by all widgets</div>

| property | type |default | description |
| --- | --- | --- | --- |
| <h4 id="type">type<a class="headerlink" href="#type" title="Permanent link">#</a></h4> | `string` | <code>"auto"</code> |  |
| <h4 id="id">id<a class="headerlink" href="#id" title="Permanent link">#</a></h4> | `string` | <code>"auto"</code> | Widgets sharing the same `id` will act as clones and update each other's value(s) without sending extra osc messages. |
| <h4 id="linkId">linkId<a class="headerlink" href="#linkId" title="Permanent link">#</a></h4> | `string`&vert;<br/>`array` | <code>""</code> | Widgets sharing the same `linkId` update each other's value(s) AND send their respective osc messages.<br/><br/>When prefixed with >>, the `linkId` will make the widget act as a master (sending but not receiving)<br/><br/>When prefixed with <<, the `linkId` will make the widget act as a slave (receiving but not sending) |
| <h4 class="thead2" id="geometry">geometry<a class="headerlink" href="#geometry" title="Permanent link">#</a></h4> ||||
| <h4 id="left">left<i class="dynamic-prop-icon" title="dynamic"></i><a class="headerlink" href="#left" title="Permanent link">#</a></h4> | `number`&vert;<br/>`string` | <code>"auto"</code> | When both top and left are set to auto, the widget is positioned according to the normal flow of the page (from left to right, by order of creation).<br/><br/>Otherwise, the widget will be absolutely positioned |
| <h4 id="top">top<i class="dynamic-prop-icon" title="dynamic"></i><a class="headerlink" href="#top" title="Permanent link">#</a></h4> | `number`&vert;<br/>`percentage` | <code>"auto"</code> | When both top and left are set to auto, the widget is positioned according to the normal flow of the page (from left to right, by order of creation).<br/><br/>Otherwise, the widget will be absolutely positioned |
| <h4 id="width">width<i class="dynamic-prop-icon" title="dynamic"></i><a class="headerlink" href="#width" title="Permanent link">#</a></h4> | `number`&vert;<br/>`percentage` | <code>"auto"</code> |  |
| <h4 id="height">height<i class="dynamic-prop-icon" title="dynamic"></i><a class="headerlink" href="#height" title="Permanent link">#</a></h4> | `number`&vert;<br/>`percentage` | <code>"auto"</code> |  |
| <h4 class="thead2" id="style">style<a class="headerlink" href="#style" title="Permanent link">#</a></h4> ||||
| <h4 id="label">label<i class="dynamic-prop-icon" title="dynamic"></i><a class="headerlink" href="#label" title="Permanent link">#</a></h4> | `string`&vert;<br/>`boolean` | <code>"auto"</code> | Set to `false` to hide completely<br/><br/>Insert icons using the prefix ^ followed by the icon's name : ^play, ^pause, etc (see https://fontawesome.com/icons?d=gallery&s=solid&m=free) |
| <h4 id="color">color<i class="dynamic-prop-icon" title="dynamic"></i><a class="headerlink" href="#color" title="Permanent link">#</a></h4> | `string` | <code>"auto"</code> | Defines the widget's accent color (css variable `--custom-color`). Must be a valid CSS color. Set to "auto" to inherit from parent widget. |
| <h4 id="css">css<i class="dynamic-prop-icon" title="dynamic"></i><a class="headerlink" href="#css" title="Permanent link">#</a></h4> | `string` | <code>""</code> | CSS rules. See <a href="https://openstagecontrol.ammd.net/docs/css-tips/">documentation</a>. |
| <h4 class="thead2" id="value">value<a class="headerlink" href="#value" title="Permanent link">#</a></h4> ||||
| <h4 id="default">default<a class="headerlink" href="#default" title="Permanent link">#</a></h4> | `*` | <code>""</code> | If set, the widget will be initialized with this value when the session is loaded. |
| <h4 id="value">value<i class="dynamic-prop-icon" title="dynamic"></i><a class="headerlink" href="#value" title="Permanent link">#</a></h4> | `*` | <code>""</code> | Define the widget's value depending on other widget's values / properties using property inheritance and property maths |
| <h4 class="thead2" id="osc">osc<a class="headerlink" href="#osc" title="Permanent link">#</a></h4> ||||
| <h4 id="precision">precision<i class="dynamic-prop-icon" title="dynamic"></i><a class="headerlink" href="#precision" title="Permanent link">#</a></h4> | `integer`&vert;<br/>`string` | <code>2</code> | Defines the number of decimals to display and to send.<br/><br/>Set to `0` to send integers only.<br/><br/>Data type can be specified by appending a valid osc type tag to the precision value, for example : `3d` will make the widget send double precision numbers rounded to three decimals |
| <h4 id="address">address<i class="dynamic-prop-icon" title="dynamic"></i><a class="headerlink" href="#address" title="Permanent link">#</a></h4> | `string` | <code>"auto"</code> | OSC address for sending messages, it must start with a / |
| <h4 id="preArgs">preArgs<i class="dynamic-prop-icon" title="dynamic"></i><a class="headerlink" href="#preArgs" title="Permanent link">#</a></h4> | `*`&vert;<br/>`array` | <code>""</code> | A value or array of values that will be prepended to the OSC messages.<br/><br/>Values can be defined as objects if the osc type tag needs to be specified: `{type: "i", value: 1}` |
| <h4 id="target">target<i class="dynamic-prop-icon" title="dynamic"></i><a class="headerlink" href="#target" title="Permanent link">#</a></h4> | `string`&vert;<br/>`array`&vert;<br/>`null` | <code>""</code> | This defines the targets of the widget's OSC messages<br/>- A `string` or `array` of strings formatted as follow: `ip:port` or `["ip:port"]`<br/>- If midi is enabled, targets can be `midi:device_name`<br/>- The special item `"self"` can be used to refer to the emitting client directly.<br/>- If no target is set, messages can still be sent if the server has default targets<br/>- The server's default targets can be bypassed by setting one of the items to `null` |
| <h4 id="bypass">bypass<i class="dynamic-prop-icon" title="dynamic"></i><a class="headerlink" href="#bypass" title="Permanent link">#</a></h4> | `boolean` | <code>false</code> | Set to `true` to prevent the widget from sending any osc message |</div>

## Sliders


<div class="accordion" data-category="Sliders" markdown="1">

<h4 class="accordionlink" id="fader"><a class="headerlink" href="#fader">fader</a></h3>
<div class="accordion-description">Vertical / horizontal slider.</div>

| property | type |default | description |
| --- | --- | --- | --- |
| <h4 class="thead2" id="fader_style">style<a class="headerlink" href="#fader_style" title="Permanent link">#</a></h4> ||||
| <h4 id="fader_css">css<i class="dynamic-prop-icon" title="dynamic"></i><a class="headerlink" href="#fader_css" title="Permanent link">#</a></h4> | `string` | <code>""</code> | Available CSS variables:<br/>- `--color-gauge: color;`<br/>- `--color-knob: color;`<br/>- `--color-pips: color;`<br/>- `--gauge-opacity: number;`<br/>- `--gauge-width: number;` (2-16, requires a manual resize to take effect) |
| <h4 class="thead2" id="fader_fader">fader<a class="headerlink" href="#fader_fader" title="Permanent link">#</a></h4> ||||
| <h4 id="fader_horizontal">horizontal<a class="headerlink" href="#fader_horizontal" title="Permanent link">#</a></h4> | `boolean` | <code>false</code> | Set to `true` to display the fader horizontally |
| <h4 id="fader_alignRight">alignRight<a class="headerlink" href="#fader_alignRight" title="Permanent link">#</a></h4> | `boolean` | <code>false</code> | Set to `true` to invert the pip's and fader's position |
| <h4 id="fader_pips">pips<a class="headerlink" href="#fader_pips" title="Permanent link">#</a></h4> | `boolean` | <code>true</code> | Set to `false` to hide the scale |
| <h4 id="fader_input">input<a class="headerlink" href="#fader_input" title="Permanent link">#</a></h4> | `boolean` | <code>true</code> | Set to `false` to hide the built-in input |
| <h4 id="fader_meter">meter<a class="headerlink" href="#fader_meter" title="Permanent link">#</a></h4> | `boolean` | <code>false</code> | Set to true to display a vu-meter next in the fader<br/>- the meter's `id` will be the same as the widget's with `/meter` appended to it<br/>- the meter's `address` will be the same as the widget's with `/meter` appended to it |
| <h4 id="fader_compact">compact<a class="headerlink" href="#fader_compact" title="Permanent link">#</a></h4> | `boolean` | <code>false</code> | Set to `true` to display a compact alternative for the widget. If `input` is `true`, the input can be focused with a right-click (mouse only). Disables `pips` when enabled. |
| <h4 id="fader_dashed">dashed<a class="headerlink" href="#fader_dashed" title="Permanent link">#</a></h4> | `boolean` | <code>false</code> | Set to `true` to display a dashed gauge |
| <h4 id="fader_snap">snap<a class="headerlink" href="#fader_snap" title="Permanent link">#</a></h4> | `boolean` | <code>false</code> | By default, dragging the widget will modify it's value starting from its last value. Setting this to `true` will make it snap directly to the mouse/touch position |
| <h4 id="fader_spring">spring<i class="dynamic-prop-icon" title="dynamic"></i><a class="headerlink" href="#fader_spring" title="Permanent link">#</a></h4> | `boolean` | <code>false</code> | When set to `true`, the widget will go back to its `default` value when released |
| <h4 id="fader_doubleTap">doubleTap<a class="headerlink" href="#fader_doubleTap" title="Permanent link">#</a></h4> | `boolean` | <code>false</code> | Set to `true` to make the fader reset to its `default` value when receiving a double tap.<br/><br/>Can also be an osc address, in which case the widget will just send an osc message (`/<doubleTap> <preArgs>`) |
| <h4 id="fader_range">range<a class="headerlink" href="#fader_range" title="Permanent link">#</a></h4> | `object` | <code>\{<br/>&nbsp;"min": 0,<br/>&nbsp;"max": 1<br/>}</code> | Defines the breakpoints of the fader's scale:<br/>- keys can be percentages and/or `min` / `max`<br/>- values can be `number` or `object` if a custom label is needed<br/><br/>Example: (`{min:{"-inf": 0}, "50%": 0.25, max: {"+inf": 1}}`) |
| <h4 id="fader_logScale">logScale<a class="headerlink" href="#fader_logScale" title="Permanent link">#</a></h4> | `boolean`&vert;<br/>`number` | <code>false</code> | Set to `true` to use logarithmic scale (base 10). Set to a `number` to define the logarithm's base. |
| <h4 id="fader_sensitivity">sensitivity<i class="dynamic-prop-icon" title="dynamic"></i><a class="headerlink" href="#fader_sensitivity" title="Permanent link">#</a></h4> | `number` | <code>1</code> | Defines the fader's sensitivity when `snap` is `false`  |
| <h4 id="fader_steps">steps<i class="dynamic-prop-icon" title="dynamic"></i><a class="headerlink" href="#fader_steps" title="Permanent link">#</a></h4> | `string`&vert;<br/>`number`&vert;<br/>`array` | <code>""</code> | Restricts the widget's value:<br/>- `auto`: use values defined in `range`<br/>- `number`: define a number of evenly spaced steps<br/>- `array`: use arbitrary values |
| <h4 id="fader_unit">unit<a class="headerlink" href="#fader_unit" title="Permanent link">#</a></h4> | `string` | <code>""</code> | Unit will be appended to the displayed widget's value (it doesn't affect osc messages) |
| <h4 id="fader_origin">origin<a class="headerlink" href="#fader_origin" title="Permanent link">#</a></h4> | `number` | <code>"auto"</code> | Defines the starting point's value of the fader's gauge |
| <h4 class="thead2" id="fader_osc">osc<a class="headerlink" href="#fader_osc" title="Permanent link">#</a></h4> ||||
| <h4 id="fader_touchAddress">touchAddress<a class="headerlink" href="#fader_touchAddress" title="Permanent link">#</a></h4> | `string` | <code>""</code> | OSC address for touched state messages: `/touchAddress [preArgs] 0/1` |
| <h4 id="fader_meterAddress">meterAddress<a class="headerlink" href="#fader_meterAddress" title="Permanent link">#</a></h4> | `string` | <code>""</code> | OSC address for the built-in meter |</div>




<div class="accordion" data-category="Sliders" markdown="1">

<h4 class="accordionlink" id="knob"><a class="headerlink" href="#knob">knob</a></h3>
<div class="accordion-description">Rotative knob slider.</div>

| property | type |default | description |
| --- | --- | --- | --- |
| <h4 class="thead2" id="knob_style">style<a class="headerlink" href="#knob_style" title="Permanent link">#</a></h4> ||||
| <h4 id="knob_css">css<i class="dynamic-prop-icon" title="dynamic"></i><a class="headerlink" href="#knob_css" title="Permanent link">#</a></h4> | `string` | <code>""</code> | Available CSS variables:<br/>- `--color-gauge: color;`<br/>- `--color-knob: color;`<br/>- `--color-pips: color;` |
| <h4 class="thead2" id="knob_knob">knob<a class="headerlink" href="#knob_knob" title="Permanent link">#</a></h4> ||||
| <h4 id="knob_pips">pips<a class="headerlink" href="#knob_pips" title="Permanent link">#</a></h4> | `boolean` | <code>false</code> | Set to `true` to show the scale's breakpoints |
| <h4 id="knob_input">input<a class="headerlink" href="#knob_input" title="Permanent link">#</a></h4> | `boolean` | <code>true</code> | Set to `false` to hide the built-in input |
| <h4 id="knob_compact">compact<a class="headerlink" href="#knob_compact" title="Permanent link">#</a></h4> | `boolean` | <code>false</code> | Set to `true` to display a compact alternative for the widget. If `input` is `true`, the input can be focused with a right-click (mouse only). Disables `pips` when enabled. |
| <h4 id="knob_dashed">dashed<a class="headerlink" href="#knob_dashed" title="Permanent link">#</a></h4> | `boolean` | <code>false</code> | Set to `true` to display a dashed gauge |
| <h4 id="knob_angle">angle<a class="headerlink" href="#knob_angle" title="Permanent link">#</a></h4> | `number` | <code>270</code> | Defines the angle's width of the knob, in degrees |
| <h4 id="knob_snap">snap<a class="headerlink" href="#knob_snap" title="Permanent link">#</a></h4> | `boolean` | <code>false</code> | By default, dragging the widget will modify it's value starting from its last value. Setting this to `true` will make it snap directly to the mouse/touch position |
| <h4 id="knob_spring">spring<i class="dynamic-prop-icon" title="dynamic"></i><a class="headerlink" href="#knob_spring" title="Permanent link">#</a></h4> | `boolean` | <code>false</code> | When set to `true`, the widget will go back to its `default` value when released |
| <h4 id="knob_doubleTap">doubleTap<a class="headerlink" href="#knob_doubleTap" title="Permanent link">#</a></h4> | `boolean` | <code>false</code> | Set to `true` to make the knob reset to its `default` value when receiving a double tap.<br/><br/>Can also be an osc address, in which case the widget will just send an osc message (`/<doubleTap> <preArgs>`) |
| <h4 id="knob_range">range<a class="headerlink" href="#knob_range" title="Permanent link">#</a></h4> | `object` | <code>\{<br/>&nbsp;"min": 0,<br/>&nbsp;"max": 1<br/>}</code> | Defines the breakpoints of the fader's scale:<br/>- keys can be percentages and/or `min` / `max`<br/>- values can be `number` or `object` if a custom label is needed<br/><br/>Example: (`{min:{"-inf": 0}, "50%": 0.25, max: {"+inf": 1}}`) |
| <h4 id="knob_logScale">logScale<a class="headerlink" href="#knob_logScale" title="Permanent link">#</a></h4> | `boolean`&vert;<br/>`number` | <code>false</code> | Set to `true` to use logarithmic scale (base 10). Set to a `number` to define the logarithm's base. |
| <h4 id="knob_sensitivity">sensitivity<i class="dynamic-prop-icon" title="dynamic"></i><a class="headerlink" href="#knob_sensitivity" title="Permanent link">#</a></h4> | `number` | <code>1</code> | Defines the knob's sensitivity when `snap` is `false`  |
| <h4 id="knob_steps">steps<i class="dynamic-prop-icon" title="dynamic"></i><a class="headerlink" href="#knob_steps" title="Permanent link">#</a></h4> | `string`&vert;<br/>`number`&vert;<br/>`array` | <code>""</code> | Restricts the widget's value:<br/>- `auto`: use values defined in `range`<br/>- `number`: define a number of evenly spaced steps<br/>- `array`: use arbitrary values |
| <h4 id="knob_unit">unit<a class="headerlink" href="#knob_unit" title="Permanent link">#</a></h4> | `string` | <code>""</code> | Unit will be appended to the displayed widget's value (it doesn't affect osc messages) |
| <h4 id="knob_origin">origin<a class="headerlink" href="#knob_origin" title="Permanent link">#</a></h4> | `number` | <code>"auto"</code> | Defines the starting point's value of the knob's gauge |
| <h4 class="thead2" id="knob_osc">osc<a class="headerlink" href="#knob_osc" title="Permanent link">#</a></h4> ||||
| <h4 id="knob_touchAddress">touchAddress<a class="headerlink" href="#knob_touchAddress" title="Permanent link">#</a></h4> | `string` | <code>""</code> | OSC address for touched state messages: `/touchAddress [preArgs] 0/1` |</div>




<div class="accordion" data-category="Sliders" markdown="1">

<h4 class="accordionlink" id="encoder"><a class="headerlink" href="#encoder">encoder</a></h3>
<div class="accordion-description">A knob that sends a relative direction infomation instead of an absolute value.</div>

| property | type |default | description |
| --- | --- | --- | --- |
| <h4 class="thead2" id="encoder_encoder">encoder<a class="headerlink" href="#encoder_encoder" title="Permanent link">#</a></h4> ||||
| <h4 id="encoder_compact">compact<a class="headerlink" href="#encoder_compact" title="Permanent link">#</a></h4> | `boolean` | <code>false</code> | Set to `true` to display a compact alternative for the widget. |
| <h4 id="encoder_ticks">ticks<a class="headerlink" href="#encoder_ticks" title="Permanent link">#</a></h4> | `number` | <code>360</code> | defines the granularity / verbosity of the encoder (number of step for a 360° arc) |
| <h4 id="encoder_back">back<a class="headerlink" href="#encoder_back" title="Permanent link">#</a></h4> | `*` | <code>-1</code> | Defines which value is sent when rotating the encoder anticlockwise |
| <h4 id="encoder_forth">forth<a class="headerlink" href="#encoder_forth" title="Permanent link">#</a></h4> | `*` | <code>1</code> | Defines which value is sent when rotating the encoder clockwise |
| <h4 id="encoder_release">release<a class="headerlink" href="#encoder_release" title="Permanent link">#</a></h4> | `number` | <code>""</code> | Defines which value is sent when releasing the encoder:<br/>- Set to `null` to send send no argument in the osc message<br/>- Can be an `object` if the type needs to be specified |
| <h4 id="encoder_snap">snap<a class="headerlink" href="#encoder_snap" title="Permanent link">#</a></h4> | `boolean` | <code>false</code> | By default, dragging the widget will modify it's value starting from its last value. Setting this to `true` will make it snap directly to the mouse/touch position |
| <h4 id="encoder_doubleTap">doubleTap<a class="headerlink" href="#encoder_doubleTap" title="Permanent link">#</a></h4> | `boolean` | <code>false</code> | Set to `true` to make the fader reset to its `default` value when receiving a double tap.<br/><br/>Can also be an osc address, in which case the widget will just send an osc message (`/<doubleTap> <preArgs>`) |
| <h4 class="thead2" id="encoder_osc">osc<a class="headerlink" href="#encoder_osc" title="Permanent link">#</a></h4> ||||
| <h4 id="encoder_touchAddress">touchAddress<a class="headerlink" href="#encoder_touchAddress" title="Permanent link">#</a></h4> | `string` | <code>""</code> | OSC address for touched state messages: `/touchAddress [preArgs] 0/1` |</div>




<div class="accordion" data-category="Sliders" markdown="1">

<h4 class="accordionlink" id="range"><a class="headerlink" href="#range">range</a></h3>
<div class="accordion-description">A fader with two heads for setting a range.</div>

| property | type |default | description |
| --- | --- | --- | --- |
| <h4 class="thead2" id="range_style">style<a class="headerlink" href="#range_style" title="Permanent link">#</a></h4> ||||
| <h4 id="range_css">css<i class="dynamic-prop-icon" title="dynamic"></i><a class="headerlink" href="#range_css" title="Permanent link">#</a></h4> | `string` | <code>""</code> | Available CSS variables:<br/>- `--color-gauge: color;`<br/>- `--color-knob: color;`<br/>- `--color-pips: color;`<br/>- `--gauge-opacity: number;` |
| <h4 class="thead2" id="range_range">range<a class="headerlink" href="#range_range" title="Permanent link">#</a></h4> ||||
| <h4 id="range_range">range<a class="headerlink" href="#range_range" title="Permanent link">#</a></h4> | `object` | <code>\{<br/>&nbsp;"min": 0,<br/>&nbsp;"max": 1<br/>}</code> | See fader's `range` |
| <h4 id="range_horizontal">horizontal<a class="headerlink" href="#range_horizontal" title="Permanent link">#</a></h4> | `boolean` | <code>false</code> | See fader's `horizontal` |
| <h4 id="range_alignRight">alignRight<a class="headerlink" href="#range_alignRight" title="Permanent link">#</a></h4> | `boolean` | <code>false</code> | See fader's `alignRight` |
| <h4 id="range_input">input<a class="headerlink" href="#range_input" title="Permanent link">#</a></h4> | `boolean` | <code>true</code> | See fader's `input` |
| <h4 id="range_compact">compact<a class="headerlink" href="#range_compact" title="Permanent link">#</a></h4> | `boolean` | <code>false</code> | See fader's `compact` |
| <h4 id="range_pips">pips<a class="headerlink" href="#range_pips" title="Permanent link">#</a></h4> | `boolean` | <code>true</code> | See fader's `pips` |
| <h4 id="range_snap">snap<a class="headerlink" href="#range_snap" title="Permanent link">#</a></h4> | `boolean` | <code>false</code> | See fader's `snap` |
| <h4 id="range_spring">spring<a class="headerlink" href="#range_spring" title="Permanent link">#</a></h4> | `boolean` | <code>false</code> | See fader's `spring` |
| <h4 id="range_logScale">logScale<a class="headerlink" href="#range_logScale" title="Permanent link">#</a></h4> | `boolean` | <code>false</code> | See fader's `logScale` |
| <h4 id="range_sensitivity">sensitivity<a class="headerlink" href="#range_sensitivity" title="Permanent link">#</a></h4> | `number` | <code>1</code> | See fader's `sensitivity` |
| <h4 class="thead2" id="range_osc">osc<a class="headerlink" href="#range_osc" title="Permanent link">#</a></h4> ||||
| <h4 id="range_touchAddress">touchAddress<a class="headerlink" href="#range_touchAddress" title="Permanent link">#</a></h4> | `string` | <code>""</code> | See fader's `touchAddress` |
| <h4 id="range_split">split<a class="headerlink" href="#range_split" title="Permanent link">#</a></h4> | `boolean`&vert;<br/>`object` | <code>false</code> | Set to `true` to send separate osc messages for `low` and `high` handles. The `address` will be the same as the widget's with `/low` or `/high` appended to it<br/><br/>Can be set as an object to specify a different `address` : `['/osc_address_low', '/osc_address_high']`<br/><br/>Note: the widget will only respond to its original osc address, not to the splitted version |</div>



## Buttons


<div class="accordion" data-category="Buttons" markdown="1">

<h4 class="accordionlink" id="toggle"><a class="headerlink" href="#toggle">toggle</a></h3>
<div class="accordion-description">On / off button.</div>

| property | type |default | description |
| --- | --- | --- | --- |
| <h4 class="thead2" id="toggle_toggle">toggle<a class="headerlink" href="#toggle_toggle" title="Permanent link">#</a></h4> ||||
| <h4 id="toggle_doubleTap">doubleTap<a class="headerlink" href="#toggle_doubleTap" title="Permanent link">#</a></h4> | `boolean` | <code>false</code> | Set to `true` to make the button require a double tap to be toggled instead of a single tap |
| <h4 id="toggle_led">led<a class="headerlink" href="#toggle_led" title="Permanent link">#</a></h4> | `boolean` | <code>false</code> | Set to `true` to display the toggle's state with a led |
| <h4 id="toggle_on">on<i class="dynamic-prop-icon" title="dynamic"></i><a class="headerlink" href="#toggle_on" title="Permanent link">#</a></h4> | `*` | <code>1</code> | Set to `null` to send send no argument in the osc message<br/><br/>Can be an `object` if the type needs to be specified (see preArgs) |
| <h4 id="toggle_off">off<i class="dynamic-prop-icon" title="dynamic"></i><a class="headerlink" href="#toggle_off" title="Permanent link">#</a></h4> | `*` | <code>0</code> | Set to `null` to send send no argument in the osc message<br/><br/>Can be an `object` if the type needs to be specified (see preArgs) |</div>




<div class="accordion" data-category="Buttons" markdown="1">

<h4 class="accordionlink" id="push"><a class="headerlink" href="#push">push</a></h3>
<div class="accordion-description">On / off button that turns off when released.</div>

| property | type |default | description |
| --- | --- | --- | --- |
| <h4 class="thead2" id="push_push">push<a class="headerlink" href="#push_push" title="Permanent link">#</a></h4> ||||
| <h4 id="push_doubleTap">doubleTap<a class="headerlink" href="#push_doubleTap" title="Permanent link">#</a></h4> | `boolean` | <code>false</code> | Set to `true` to make the button require a double tap to be pushed instead of a single tap |
| <h4 id="push_on">on<i class="dynamic-prop-icon" title="dynamic"></i><a class="headerlink" href="#push_on" title="Permanent link">#</a></h4> | `*` | <code>1</code> | Set to `null` to send send no argument in the osc message<br/><br/>Can be an `object` if the type needs to be specified (see preArgs) |
| <h4 id="push_off">off<i class="dynamic-prop-icon" title="dynamic"></i><a class="headerlink" href="#push_off" title="Permanent link">#</a></h4> | `*` | <code>0</code> | Set to `null` to send send no argument in the osc message<br/><br/>Can be an `object` if the type needs to be specified (see preArgs) |
| <h4 id="push_norelease">norelease<i class="dynamic-prop-icon" title="dynamic"></i><a class="headerlink" href="#push_norelease" title="Permanent link">#</a></h4> | `boolean` | <code>false</code> | Set to `true` to prevent sending any osc message when releasing the button |</div>




<div class="accordion" data-category="Buttons" markdown="1">

<h4 class="accordionlink" id="switch"><a class="headerlink" href="#switch">switch</a></h3>
<div class="accordion-description">Value selector button.</div>

| property | type |default | description |
| --- | --- | --- | --- |
| <h4 class="thead2" id="switch_switch">switch<a class="headerlink" href="#switch_switch" title="Permanent link">#</a></h4> ||||
| <h4 id="switch_horizontal">horizontal<a class="headerlink" href="#switch_horizontal" title="Permanent link">#</a></h4> | `boolean` | <code>false</code> | Set to `true` to display values horizontally |
| <h4 id="switch_showValues">showValues<a class="headerlink" href="#switch_showValues" title="Permanent link">#</a></h4> | `boolean` | <code>false</code> | If values is an object, set to `true` to display both values and labels instead of labels only |
| <h4 id="switch_values">values<a class="headerlink" href="#switch_values" title="Permanent link">#</a></h4> | `array`&vert;<br/>`object` | <code>\{<br/>&nbsp;"Value 1": 1,<br/>&nbsp;"Value 2": 2<br/>}</code> | `Array` of possible values to switch between : `[1,2,3]`<br/><br/>`Object` of `"label":value` pairs. Numeric labels must be prepended or appended with a white space (or any other non-numeric character) otherwise the order of the values won't be kept |
| <h4 id="switch_traversing">traversing<a class="headerlink" href="#switch_traversing" title="Permanent link">#</a></h4> | `boolean` | <code>true</code> | Set to `false` to disable traversing gestures |</div>




<div class="accordion" data-category="Buttons" markdown="1">

<h4 class="accordionlink" id="dropdown"><a class="headerlink" href="#dropdown">dropdown</a></h3>
<div class="accordion-description">Native dropdown menu.</div>

| property | type |default | description |
| --- | --- | --- | --- |
| <h4 class="thead2" id="dropdown_dropdown">dropdown<a class="headerlink" href="#dropdown_dropdown" title="Permanent link">#</a></h4> ||||
| <h4 id="dropdown_values">values<i class="dynamic-prop-icon" title="dynamic"></i><a class="headerlink" href="#dropdown_values" title="Permanent link">#</a></h4> | `array`&vert;<br/>`object` | <code>\{<br/>&nbsp;"Value 1": 1,<br/>&nbsp;"Value 2": 2<br/>}</code> | `Array` of possible values to switch between : `[1,2,3]`<br/><br/>`Object` of label:value pairs. Numeric labels must be prepended or appended with a white space (or any other non-numeric character) otherwise the order of the values won't be kept<br/><br/>An empty option will always be prepended to values (sends an osc message without any value); it can be hidden by adding `option:first-child{display:none}` to the widget's `css` |</div>




<div class="accordion" data-category="Buttons" markdown="1">

<h4 class="accordionlink" id="menu"><a class="headerlink" href="#menu">menu</a></h3>
<div class="accordion-description">Drag and drop menu with a circular or grid layout.</div>

| property | type |default | description |
| --- | --- | --- | --- |
| <h4 class="thead2" id="menu_menu">menu<a class="headerlink" href="#menu_menu" title="Permanent link">#</a></h4> ||||
| <h4 id="menu_size">size<i class="dynamic-prop-icon" title="dynamic"></i><a class="headerlink" href="#menu_size" title="Permanent link">#</a></h4> | `number`&vert;<br/>`array` | <code>200</code> | - If `circular` is `true`: diameter (in px)<br/>- If `circular` is `false`: square size or `[width, height]` array |
| <h4 id="menu_circular">circular<i class="dynamic-prop-icon" title="dynamic"></i><a class="headerlink" href="#menu_circular" title="Permanent link">#</a></h4> | `boolean` | <code>true</code> | Defines whether the menu should be rendered in a circle or in a box |
| <h4 id="menu_vertical">vertical<i class="dynamic-prop-icon" title="dynamic"></i><a class="headerlink" href="#menu_vertical" title="Permanent link">#</a></h4> | `boolean`&vert;<br/>`number` | <code>false</code> | If `circular` is `false`, set this to `true` for vertical layout<br/><br/>Ignored when `grid` is `true` |
| <h4 id="menu_grid">grid<i class="dynamic-prop-icon" title="dynamic"></i><a class="headerlink" href="#menu_grid" title="Permanent link">#</a></h4> | `boolean`&vert;<br/>`number` | <code>false</code> | - If `circular` is `false`, set this to `true` for grid layout<br/>- Can be a `number` to define the number of columns |
| <h4 id="menu_toggle">toggle<a class="headerlink" href="#menu_toggle" title="Permanent link">#</a></h4> | `boolean` | <code>false</code> | Set to `true` to make the menu stay opened after mouse/touch release |
| <h4 id="menu_doubleTap">doubleTap<a class="headerlink" href="#menu_doubleTap" title="Permanent link">#</a></h4> | `boolean` | <code>false</code> | Set to `true` to make the menu require a double tap to be opened instead of a single tap |
| <h4 id="menu_values">values<i class="dynamic-prop-icon" title="dynamic"></i><a class="headerlink" href="#menu_values" title="Permanent link">#</a></h4> | `array`&vert;<br/>`object` | <code>\{<br/>&nbsp;"Value 1": 1,<br/>&nbsp;"Value 2": 2<br/>}</code> | `Array` of possible values to switch between : `[1,2,3]`<br/><br/>`Object` of label:value pairs. Numeric labels must be prepended or appended with a white space (or any other non-numeric character) otherwise the order of the values won't be kept |
| <h4 id="menu_weights">weights<a class="headerlink" href="#menu_weights" title="Permanent link">#</a></h4> | `array` | <code>""</code> | `Array` of `number` defining the weights of each value in `values`<br/><br/>Ignored when `grid` is `true` |</div>



## Pads


<div class="accordion" data-category="Pads" markdown="1">

<h4 class="accordionlink" id="xy"><a class="headerlink" href="#xy">xy</a></h3>
<div class="accordion-description">Two-dimensional slider.</div>

| property | type |default | description |
| --- | --- | --- | --- |
| <h4 class="thead2" id="xy_style">style<a class="headerlink" href="#xy_style" title="Permanent link">#</a></h4> ||||
| <h4 id="xy_css">css<i class="dynamic-prop-icon" title="dynamic"></i><a class="headerlink" href="#xy_css" title="Permanent link">#</a></h4> | `string` | <code>""</code> | Available CSS variables:<br/>- `--background: background;`: sets the dragging area's background<br/>- `--pips-color: color;`<br/>- `--pips-opacity: number;`<br/>- `--point-opacity: number;` |
| <h4 class="thead2" id="xy_xy">xy<a class="headerlink" href="#xy_xy" title="Permanent link">#</a></h4> ||||
| <h4 id="xy_pointSize">pointSize<a class="headerlink" href="#xy_pointSize" title="Permanent link">#</a></h4> | `integer` | <code>20</code> | Defines the points' size |
| <h4 id="xy_snap">snap<a class="headerlink" href="#xy_snap" title="Permanent link">#</a></h4> | `boolean` | <code>false</code> | By default, the points are dragged from their initial position.<br/><br/>If set to `true`, touching anywhere on the widget's surface will make them snap to the touching coordinates |
| <h4 id="xy_spring">spring<a class="headerlink" href="#xy_spring" title="Permanent link">#</a></h4> | `boolean` | <code>false</code> | When set to `true`, the widget will go back to its default value when released |
| <h4 id="xy_pips">pips<a class="headerlink" href="#xy_pips" title="Permanent link">#</a></h4> | `boolean` | <code>true</code> | Set to `false` to hide the scale |
| <h4 id="xy_rangeX">rangeX<a class="headerlink" href="#xy_rangeX" title="Permanent link">#</a></h4> | `object` | <code>\{<br/>&nbsp;"min": 0,<br/>&nbsp;"max": 1<br/>}</code> | Defines the min and max values for the x axis |
| <h4 id="xy_rangeY">rangeY<a class="headerlink" href="#xy_rangeY" title="Permanent link">#</a></h4> | `object` | <code>\{<br/>&nbsp;"min": 0,<br/>&nbsp;"max": 1<br/>}</code> | Defines the min and max values for the y axis |
| <h4 id="xy_logScaleX">logScaleX<a class="headerlink" href="#xy_logScaleX" title="Permanent link">#</a></h4> | `boolean`&vert;<br/>`number` | <code>false</code> | Set to `true` to use logarithmic scale for the x axis (base 10). Set to a `number` to define the logarithm's base. |
| <h4 id="xy_logScaleY">logScaleY<a class="headerlink" href="#xy_logScaleY" title="Permanent link">#</a></h4> | `boolean`&vert;<br/>`number` | <code>false</code> | Set to `true` to use logarithmic scale for the y axis (base 10). Set to a `number` to define the logarithm's base. |
| <h4 id="xy_input">input<a class="headerlink" href="#xy_input" title="Permanent link">#</a></h4> | `boolean` | <code>true</code> | Set to false to hide the built-in input widget |
| <h4 id="xy_doubleTap">doubleTap<a class="headerlink" href="#xy_doubleTap" title="Permanent link">#</a></h4> | `boolean`&vert;<br/>`string` | <code>false</code> | Set to `true` to make the fader reset to its default value when receiving a double tap.<br/><br/>Can also be an osc address, which case the widget will just send an osc message: `/<doubleTap> <preArgs>` |
| <h4 id="xy_sensitivity">sensitivity<a class="headerlink" href="#xy_sensitivity" title="Permanent link">#</a></h4> | `number` | <code>1</code> | Defines the pad's sensitivity when `snap` is `false`  |
| <h4 class="thead2" id="xy_osc">osc<a class="headerlink" href="#xy_osc" title="Permanent link">#</a></h4> ||||
| <h4 id="xy_touchAddress">touchAddress<a class="headerlink" href="#xy_touchAddress" title="Permanent link">#</a></h4> | `string` | <code>""</code> | OSC address for touched state messages: `/touchAddress [preArgs] 0/1`) |
| <h4 id="xy_split">split<a class="headerlink" href="#xy_split" title="Permanent link">#</a></h4> | `boolean`&vert;<br/>`object` | <code>false</code> | Set to `true` to send separate osc messages for each point's x and y axis. The address will be the same as the widget's with `/x` or `/y` appended to it<br/><br/>Can be set as an `object` to specify a different address : ['/osc_address_x', '/osc_address_y']<br/><br/>Note: the widget will only respond to its original osc address, not to the splitted version |</div>




<div class="accordion" data-category="Pads" markdown="1">

<h4 class="accordionlink" id="rgb"><a class="headerlink" href="#rgb">rgb</a></h3>
<div class="accordion-description">Color picker with optional alpha slider.</div>

| property | type |default | description |
| --- | --- | --- | --- |
| <h4 class="thead2" id="rgb_rgb">rgb<a class="headerlink" href="#rgb_rgb" title="Permanent link">#</a></h4> ||||
| <h4 id="rgb_snap">snap<a class="headerlink" href="#rgb_snap" title="Permanent link">#</a></h4> | `boolean` | <code>false</code> | By default, the points are dragged from their initial position.<br/><br/>If set to `true`, touching anywhere on the widget's surface will make them snap to the touching coordinates |
| <h4 id="rgb_spring">spring<a class="headerlink" href="#rgb_spring" title="Permanent link">#</a></h4> | `boolean` | <code>false</code> | When set to `true`, the widget will go back to its default value when released |
| <h4 id="rgb_range">range<a class="headerlink" href="#rgb_range" title="Permanent link">#</a></h4> | `object` | <code>\{<br/>&nbsp;"min": 0,<br/>&nbsp;"max": 255<br/>}</code> | Defines the widget's output scale. |
| <h4 id="rgb_input">input<a class="headerlink" href="#rgb_input" title="Permanent link">#</a></h4> | `boolean` | <code>true</code> | Set to `false` to hide the built-in input widget |
| <h4 id="rgb_alpha">alpha<a class="headerlink" href="#rgb_alpha" title="Permanent link">#</a></h4> | `boolean` | <code>false</code> | Set to `true` to enable alpha channel |
| <h4 class="thead2" id="rgb_osc">osc<a class="headerlink" href="#rgb_osc" title="Permanent link">#</a></h4> ||||
| <h4 id="rgb_split">split<a class="headerlink" href="#rgb_split" title="Permanent link">#</a></h4> | `boolean`&vert;<br/>`object` | <code>false</code> | Set to `true` to send separate osc messages for for r and g & b. The address will be the same as the widget's with `/r`, `/g` or `/b` appended to it<br/><br/>Can be set as an `object` to specify a different address : `['/r', '/g', 'b']`<br/><br/>Note: the widget will only respond to its original osc address, not to the splitted version |</div>




<div class="accordion" data-category="Pads" markdown="1">

<h4 class="accordionlink" id="multixy"><a class="headerlink" href="#multixy">multixy</a></h3>
<div class="accordion-description">Multi-point XY pad.</div>

| property | type |default | description |
| --- | --- | --- | --- |
| <h4 class="thead2" id="multixy_style">style<a class="headerlink" href="#multixy_style" title="Permanent link">#</a></h4> ||||
| <h4 id="multixy_css">css<i class="dynamic-prop-icon" title="dynamic"></i><a class="headerlink" href="#multixy_css" title="Permanent link">#</a></h4> | `string` | <code>""</code> | Available CSS variables:<br/>- `--background: background;`: sets the dragging area's background<br/>- `--pips-color: color;`<br/>- `--pips-opacity: number;`<br/>- `--color-text: point-color;`<br/><br/>Pads can be targetted individually with the .pad-X selector (where X is the pad's index) |
| <h4 class="thead2" id="multixy_multi xy">multi xy<a class="headerlink" href="#multixy_multi xy" title="Permanent link">#</a></h4> ||||
| <h4 id="multixy_points">points<a class="headerlink" href="#multixy_points" title="Permanent link">#</a></h4> | `integer`&vert;<br/>`array` | <code>2</code> | Defines the number of points on the pad<br/><br/>Can be an array of strings that will be used as labels for the points (ex: `['A', 'B']`) |
| <h4 class="thead2" id="multixy_xy">xy<a class="headerlink" href="#multixy_xy" title="Permanent link">#</a></h4> ||||
| <h4 id="multixy_pointSize">pointSize<a class="headerlink" href="#multixy_pointSize" title="Permanent link">#</a></h4> | `integer` | <code>20</code> | Defines the points' size |
| <h4 id="multixy_snap">snap<a class="headerlink" href="#multixy_snap" title="Permanent link">#</a></h4> | `boolean` | <code>false</code> | By default, the points are dragged from their initial position.<br/><br/>If set to `true`, touching anywhere on the widget's surface will make them snap to the touching coordinates |
| <h4 id="multixy_spring">spring<a class="headerlink" href="#multixy_spring" title="Permanent link">#</a></h4> | `boolean` | <code>false</code> | When set to `true`, the widget will go back to its default value when released |
| <h4 id="multixy_pips">pips<a class="headerlink" href="#multixy_pips" title="Permanent link">#</a></h4> | `boolean` | <code>true</code> | Set to `false` to hide the scale |
| <h4 id="multixy_rangeX">rangeX<a class="headerlink" href="#multixy_rangeX" title="Permanent link">#</a></h4> | `object` | <code>\{<br/>&nbsp;"min": 0,<br/>&nbsp;"max": 1<br/>}</code> | Defines the min and max values for the x axis |
| <h4 id="multixy_rangeY">rangeY<a class="headerlink" href="#multixy_rangeY" title="Permanent link">#</a></h4> | `object` | <code>\{<br/>&nbsp;"min": 0,<br/>&nbsp;"max": 1<br/>}</code> | Defines the min and max values for the y axis |
| <h4 id="multixy_logScaleX">logScaleX<a class="headerlink" href="#multixy_logScaleX" title="Permanent link">#</a></h4> | `boolean`&vert;<br/>`number` | <code>false</code> | Set to `true` to use logarithmic scale for the x axis (base 10). Set to a `number` to define the logarithm's base. |
| <h4 id="multixy_logScaleY">logScaleY<a class="headerlink" href="#multixy_logScaleY" title="Permanent link">#</a></h4> | `boolean`&vert;<br/>`number` | <code>false</code> | Set to `true` to use logarithmic scale for the y axis (base 10). Set to a `number` to define the logarithm's base. |
| <h4 id="multixy_sensitivity">sensitivity<a class="headerlink" href="#multixy_sensitivity" title="Permanent link">#</a></h4> | `number` | <code>1</code> | Defines the pad's sensitivity when `snap` is `false`  |
| <h4 class="thead2" id="multixy_osc">osc<a class="headerlink" href="#multixy_osc" title="Permanent link">#</a></h4> ||||
| <h4 id="multixy_touchAddress">touchAddress<a class="headerlink" href="#multixy_touchAddress" title="Permanent link">#</a></h4> | `string` | <code>""</code> | OSC address for touched state messages: `/touchAddress [preArgs] 0/1` |
| <h4 id="multixy_split">split<a class="headerlink" href="#multixy_split" title="Permanent link">#</a></h4> | `boolean`&vert;<br/>`object` | <code>false</code> | Set to `true` to send separate osc messages for each point's x and y axis. The address will be the same as the widget's with `/N/x` or `/N/y` appended to it, where N is the point's id (or the point's label if points is an array)<br/><br/>Can be set as an `object` to specify a different address : `['/0/x', '/0/y', '/1/x', '/2/y']`<br/><br/>Note: the widget will only respond to its original osc address, not to the splitted version |</div>



## Matrices


<div class="accordion" data-category="Matrices" markdown="1">

<h4 class="accordionlink" id="matrix"><a class="headerlink" href="#matrix">matrix</a></h3>
<div class="accordion-description">Generic matrix for creating rows/columns of widgets.</div>

| property | type |default | description |
| --- | --- | --- | --- |
| <h4 class="thead2" id="matrix_matrix">matrix<a class="headerlink" href="#matrix_matrix" title="Permanent link">#</a></h4> ||||
| <h4 id="matrix_widgetType">widgetType<a class="headerlink" href="#matrix_widgetType" title="Permanent link">#</a></h4> | `string` | <code>"toggle"</code> | Defines the type of the widgets in the matrix |
| <h4 id="matrix_matrix">matrix<a class="headerlink" href="#matrix_matrix" title="Permanent link">#</a></h4> | `array` | <code>[<br/>&nbsp;2,<br/>&nbsp;2<br/>]</code> | Defines the number of columns and and rows in the matrix |
| <h4 id="matrix_start">start<a class="headerlink" href="#matrix_start" title="Permanent link">#</a></h4> | `integer` | <code>0</code> | First widget's index |
| <h4 id="matrix_spacing">spacing<a class="headerlink" href="#matrix_spacing" title="Permanent link">#</a></h4> | `integer` | <code>0</code> | Adds space between widgets |
| <h4 id="matrix_traversing">traversing<a class="headerlink" href="#matrix_traversing" title="Permanent link">#</a></h4> | `boolean` | <code>true</code> | Set to `false` to disable traversing gestures |
| <h4 id="matrix_border">border<a class="headerlink" href="#matrix_border" title="Permanent link">#</a></h4> | `boolean` | <code>true</code> | Set to `false` to disables the widgets' borders |
| <h4 id="matrix_props">props<i class="dynamic-prop-icon" title="dynamic"></i><a class="headerlink" href="#matrix_props" title="Permanent link">#</a></h4> | `object` | <code>\{}</code> | Defines a set of property to override the widgets' defaults.<br/><br/>Formulas in this field are resolved with an extra variable representing each widget's index: `$`<br/><br/>Note: by default, the widgets inherit from the matrix' `id` and osc properties (`id` and `address` are appended with `/$`) |</div>




<div class="accordion" data-category="Matrices" markdown="1">

<h4 class="accordionlink" id="keyboard"><a class="headerlink" href="#keyboard">keyboard</a></h3>
<div class="accordion-description">Piano keyboard.</div>

| property | type |default | description |
| --- | --- | --- | --- |
| <h4 class="thead2" id="keyboard_style">style<a class="headerlink" href="#keyboard_style" title="Permanent link">#</a></h4> ||||
| <h4 id="keyboard_css">css<i class="dynamic-prop-icon" title="dynamic"></i><a class="headerlink" href="#keyboard_css" title="Permanent link">#</a></h4> | `string` | <code>""</code> | Available CSS variables:<br/>- `--color-white:color;` (white keys color)<br/>- `--color-black:color;` (black keys color) |
| <h4 class="thead2" id="keyboard_matrix">matrix<a class="headerlink" href="#keyboard_matrix" title="Permanent link">#</a></h4> ||||
| <h4 id="keyboard_keys">keys<a class="headerlink" href="#keyboard_keys" title="Permanent link">#</a></h4> | `number` | <code>25</code> | Defines the number keys |
| <h4 id="keyboard_start">start<a class="headerlink" href="#keyboard_start" title="Permanent link">#</a></h4> | `number` | <code>48</code> | MIDI note number to start with (default is C4)<br/><br/>Standard keyboards settings are: `[25, 48]`, `[49, 36]`, `[61, 36]`, `[88, 21]` |
| <h4 id="keyboard_traversing">traversing<a class="headerlink" href="#keyboard_traversing" title="Permanent link">#</a></h4> | `boolean` | <code>true</code> | Set to `false` to disable traversing gestures |
| <h4 id="keyboard_on">on<a class="headerlink" href="#keyboard_on" title="Permanent link">#</a></h4> | `*` | <code>1</code> | Set to `null` to send send no argument in the osc message<br/><br/>Can be an `object` if the type needs to be specified (see preArgs) |
| <h4 id="keyboard_off">off<a class="headerlink" href="#keyboard_off" title="Permanent link">#</a></h4> | `*` | <code>0</code> | Set to `null` to send send no argument in the osc message<br/><br/>Can be an `object` if the type needs to be specified (see preArgs) |
| <h4 id="keyboard_toggles">toggles<a class="headerlink" href="#keyboard_toggles" title="Permanent link">#</a></h4> | `boolean` | <code>false</code> | Set to `true` to make keys bahave like toggle buttons |
| <h4 class="thead2" id="keyboard_osc">osc<a class="headerlink" href="#keyboard_osc" title="Permanent link">#</a></h4> ||||
| <h4 id="keyboard_split">split<a class="headerlink" href="#keyboard_split" title="Permanent link">#</a></h4> | `boolean`&vert;<br/>`string` | <code>false</code> | `true`: the widget's index will be appended to the matrice's osc address<br/><br/>`false`: it will be prepended to the widget's preArgs<br/><br/>`string`: will be used to define the widgets' addresses, replacing dollar signs (`$`) with their respective index (to insert the actual dollar sign, it must be escaped with a backslash (`\$`)) |</div>




<div class="accordion" data-category="Matrices" markdown="1">

<h4 class="accordionlink" id="patchbay"><a class="headerlink" href="#patchbay">patchbay</a></h3>
<div class="accordion-description">Connect inputs to outputs.</div>

| property | type |default | description |
| --- | --- | --- | --- |
| <h4 class="thead2" id="patchbay_style">style<a class="headerlink" href="#patchbay_style" title="Permanent link">#</a></h4> ||||
| <h4 id="patchbay_css">css<i class="dynamic-prop-icon" title="dynamic"></i><a class="headerlink" href="#patchbay_css" title="Permanent link">#</a></h4> | `string` | <code>""</code> | The inputs/ouputs width can be adjusted by using the  `.nodes` selector:<br/><br/>`.nodes { width: 25% }` |
| <h4 class="thead2" id="patchbay_patchbay">patchbay<a class="headerlink" href="#patchbay_patchbay" title="Permanent link">#</a></h4> ||||
| <h4 id="patchbay_inputs">inputs<a class="headerlink" href="#patchbay_inputs" title="Permanent link">#</a></h4> | `array`&vert;<br/>`object` | <code>[<br/>&nbsp;"input_1",<br/>&nbsp;"input_2"<br/>]</code> | - `Array` of input names : `['input_1', 'input_2']`<br/>- `Object` of `"label_1": "input_1"` pairs. Numeric labels must be prepended or appended with a white space (or any other non-numeric character) otherwise the order of the values won't be kept<br/><br/><br/><br/>Patchbay inputs can be connected to one or more outputs and will send messages of the following form when they are connected/disconnected: <br/><br/>`/patchbay_address input_x output_x output_y etc`<br/><br/>If no output is connected to the input, the message will be `/patchbay_address input_x`<br/><br/>The inputs values can be consumed with the property inheritance syntax: `@{patchbay_id/input_1}` returns an array of output names connected to `input_1` |
| <h4 id="patchbay_outputs">outputs<a class="headerlink" href="#patchbay_outputs" title="Permanent link">#</a></h4> | `array`&vert;<br/>`object` | <code>[<br/>&nbsp;"output_1",<br/>&nbsp;"output_2"<br/>]</code> | List of output values the inputs can connect to (see `inputs`). |</div>



## Plots


<div class="accordion" data-category="Plots" markdown="1">

<h4 class="accordionlink" id="plot"><a class="headerlink" href="#plot">plot</a></h3>
<div class="accordion-description">XY coordinates plot.</div>

| property | type |default | description |
| --- | --- | --- | --- |
| <h4 class="thead2" id="plot_plot">plot<a class="headerlink" href="#plot_plot" title="Permanent link">#</a></h4> ||||
| <h4 id="plot_rangeX">rangeX<a class="headerlink" href="#plot_rangeX" title="Permanent link">#</a></h4> | `object` | <code>\{<br/>&nbsp;"min": 0,<br/>&nbsp;"max": 1<br/>}</code> | Defines the min and max values for the x axis |
| <h4 id="plot_rangeY">rangeY<a class="headerlink" href="#plot_rangeY" title="Permanent link">#</a></h4> | `object` | <code>\{<br/>&nbsp;"min": 0,<br/>&nbsp;"max": 1<br/>}</code> | Defines the min and max values for the y axis |
| <h4 id="plot_logScaleX">logScaleX<a class="headerlink" href="#plot_logScaleX" title="Permanent link">#</a></h4> | `boolean`&vert;<br/>`number` | <code>false</code> | Set to `true` to use logarithmic scale for the x axis (base 10). Set to a `number` to define the logarithm's base. |
| <h4 id="plot_logScaleY">logScaleY<a class="headerlink" href="#plot_logScaleY" title="Permanent link">#</a></h4> | `boolean`&vert;<br/>`number` | <code>false</code> | Set to `true` to use logarithmic scale for the y axis (base 10). Set to a `number` to define the logarithm's base. |
| <h4 id="plot_origin">origin<a class="headerlink" href="#plot_origin" title="Permanent link">#</a></h4> | `number` | <code>"auto"</code> | Defines the y axis origin. Set to `false` to disable it. |
| <h4 id="plot_dots">dots<a class="headerlink" href="#plot_dots" title="Permanent link">#</a></h4> | `boolean` | <code>true</code> |  |
| <h4 id="plot_bars">bars<a class="headerlink" href="#plot_bars" title="Permanent link">#</a></h4> | `boolean` | <code>false</code> | Set to `true` to use draw bars instead (disables `logScaleX` and forces `x axis` even spacing) |
| <h4 id="plot_smooth">smooth<a class="headerlink" href="#plot_smooth" title="Permanent link">#</a></h4> | `boolean`&vert;<br/>`number` | <code>false</code> | Set to `true` to make the line smooth. Float values are also acceptable (works fine between `0` and `0.5`) |
| <h4 id="plot_pips">pips<a class="headerlink" href="#plot_pips" title="Permanent link">#</a></h4> | `boolean` | <code>true</code> | Set to `false` to hide the scale |
| <h4 class="thead2" id="plot_value">value<a class="headerlink" href="#plot_value" title="Permanent link">#</a></h4> ||||
| <h4 id="plot_value">value<i class="dynamic-prop-icon" title="dynamic"></i><a class="headerlink" href="#plot_value" title="Permanent link">#</a></h4> | `array`&vert;<br/>`string` | <code>""</code> | - `Array` of `y` values<br/>- `Array` of `[x, y]` `array` values<br/>- `String` `array`<br/>- `String` `object` to update specific coordinates only: `{0:1, 4:0}` will change the 1st and 5th points' coordinates |</div>




<div class="accordion" data-category="Plots" markdown="1">

<h4 class="accordionlink" id="eq"><a class="headerlink" href="#eq">eq</a></h3>
<div class="accordion-description">Draws frequency response between from from an array of filter objects.</div>

| property | type |default | description |
| --- | --- | --- | --- |
| <h4 class="thead2" id="eq_eq">eq<a class="headerlink" href="#eq_eq" title="Permanent link">#</a></h4> ||||
| <h4 id="eq_pips">pips<a class="headerlink" href="#eq_pips" title="Permanent link">#</a></h4> | `boolean` | <code>true</code> | Set to false to hide the scale |
| <h4 id="eq_resolution">resolution<a class="headerlink" href="#eq_resolution" title="Permanent link">#</a></h4> | `number` | <code>128</code> | Defines the number of points used to compute the frequency response |
| <h4 id="eq_rangeY">rangeY<a class="headerlink" href="#eq_rangeY" title="Permanent link">#</a></h4> | `object` | <code>\{<br/>&nbsp;"min": 0,<br/>&nbsp;"max": 1<br/>}</code> | Defines the min and max values for the y axis |
| <h4 id="eq_origin">origin<a class="headerlink" href="#eq_origin" title="Permanent link">#</a></h4> | `number`&vert;<br/>`boolean` | <code>"auto"</code> | Defines the y axis origin. Set to `false` to disable it |
| <h4 id="eq_logScaleX">logScaleX<a class="headerlink" href="#eq_logScaleX" title="Permanent link">#</a></h4> | `boolean`&vert;<br/>`number` | <code>false</code> | Set to `true` to use logarithmic scale for the x axis (base 10). Set to a `number` to define the logarithm's base. |
| <h4 id="eq_smooth">smooth<a class="headerlink" href="#eq_smooth" title="Permanent link">#</a></h4> | `boolean`&vert;<br/>`number` | <code>false</code> | Set to `true` to make the line smooth. Float values are also acceptable (works fine between `0` and `0.5`) |
| <h4 class="thead2" id="eq_value">value<a class="headerlink" href="#eq_value" title="Permanent link">#</a></h4> ||||
| <h4 id="eq_value">value<i class="dynamic-prop-icon" title="dynamic"></i><a class="headerlink" href="#eq_value" title="Permanent link">#</a></h4> | `array` | <code>""</code> | Each item must be an object with the following properties<br/>- `type`: string ("highpass", "highshelf", "lowpass", "lowshelf", "peak" or "notch")<br/>- `freq`: number (filter's resonant frequency)<br/>- `q`: number (Q factor)<br/>- `gain`: number<br/>- `on`: boolean |</div>




<div class="accordion" data-category="Plots" markdown="1">

<h4 class="accordionlink" id="visualizer"><a class="headerlink" href="#visualizer">visualizer</a></h3>
<div class="accordion-description">Display its value over time.</div>

| property | type |default | description |
| --- | --- | --- | --- |
| <h4 class="thead2" id="visualizer_visualizer">visualizer<a class="headerlink" href="#visualizer_visualizer" title="Permanent link">#</a></h4> ||||
| <h4 id="visualizer_duration">duration<a class="headerlink" href="#visualizer_duration" title="Permanent link">#</a></h4> | `number` | <code>1</code> | Defines visualization duration in seconds |
| <h4 id="visualizer_range">range<a class="headerlink" href="#visualizer_range" title="Permanent link">#</a></h4> | `object` | <code>\{<br/>&nbsp;"min": 0,<br/>&nbsp;"max": 1<br/>}</code> | Defines the min and max values for the y axis |
| <h4 id="visualizer_origin">origin<a class="headerlink" href="#visualizer_origin" title="Permanent link">#</a></h4> | `number` | <code>"auto"</code> | Defines the y axis origin. Set to `false` to disable it |
| <h4 id="visualizer_logScale">logScale<a class="headerlink" href="#visualizer_logScale" title="Permanent link">#</a></h4> | `boolean`&vert;<br/>`number` | <code>false</code> | Set to `true` to use logarithmic scale for the y axis (base 10). Set to a `number` to define the logarithm's base. |
| <h4 id="visualizer_smooth">smooth<a class="headerlink" href="#visualizer_smooth" title="Permanent link">#</a></h4> | `boolean`&vert;<br/>`number` | <code>false</code> | Set to `true` to make the line smooth. Float values are also acceptable (works fine between `0` and `0.5`) |
| <h4 id="visualizer_pips">pips<a class="headerlink" href="#visualizer_pips" title="Permanent link">#</a></h4> | `boolean` | <code>true</code> | Set to `false` to hide the scale |</div>




<div class="accordion" data-category="Plots" markdown="1">

<h4 class="accordionlink" id="led"><a class="headerlink" href="#led">led</a></h3>
<div class="accordion-description">Intensity display.</div>

| property | type |default | description |
| --- | --- | --- | --- |
| <h4 class="thead2" id="led_led">led<a class="headerlink" href="#led_led" title="Permanent link">#</a></h4> ||||
| <h4 id="led_range">range<a class="headerlink" href="#led_range" title="Permanent link">#</a></h4> | `object` | <code>\{<br/>&nbsp;"min": 0,<br/>&nbsp;"max": 1<br/>}</code> | Value to led intensity mapping range |
| <h4 id="led_logScale">logScale<a class="headerlink" href="#led_logScale" title="Permanent link">#</a></h4> | `boolean`&vert;<br/>`number` | <code>false</code> | Set to `true` to use logarithmic scale (base 10). Set to a `number` to define the logarithm's base. |</div>




<div class="accordion" data-category="Plots" markdown="1">

<h4 class="accordionlink" id="rgbled"><a class="headerlink" href="#rgbled">rgbled</a></h3>
<div class="accordion-description">Rgb / rgba color display</div>

| property | type |default | description |
| --- | --- | --- | --- |
| <h4 class="thead2" id="rgbled_value">value<a class="headerlink" href="#rgbled_value" title="Permanent link">#</a></h4> ||||
| <h4 id="rgbled_value">value<i class="dynamic-prop-icon" title="dynamic"></i><a class="headerlink" href="#rgbled_value" title="Permanent link">#</a></h4> | `array`&vert;<br/>`string` | <code>""</code> | - `Array`: `[r, g, b]` (`r`, `g` and `b` between `0` and `255`)<br/>- `Array`: `[r, g, b, alpha]` (`alpha` between `0` and `255`)<br/>- `String`: CSS color |</div>




<div class="accordion" data-category="Plots" markdown="1">

<h4 class="accordionlink" id="meter"><a class="headerlink" href="#meter">meter</a></h3>
<div class="accordion-description">Non-interactable fader.</div>

| property | type |default | description |
| --- | --- | --- | --- |
| <h4 class="thead2" id="meter_style">style<a class="headerlink" href="#meter_style" title="Permanent link">#</a></h4> ||||
| <h4 id="meter_css">css<i class="dynamic-prop-icon" title="dynamic"></i><a class="headerlink" href="#meter_css" title="Permanent link">#</a></h4> | `string` | <code>""</code> | Available CSS variables:<br/>- `--color-gauge: color;`<br/>- `--color-knob: color;`<br/>- `--color-pips: color;`<br/>- `--gauge-opacity: number;` |
| <h4 class="thead2" id="meter_meter">meter<a class="headerlink" href="#meter_meter" title="Permanent link">#</a></h4> ||||
| <h4 id="meter_range">range<a class="headerlink" href="#meter_range" title="Permanent link">#</a></h4> | `object` | <code>\{<br/>&nbsp;"min": 0,<br/>&nbsp;"max": 1<br/>}</code> | See fader's `range` |
| <h4 id="meter_logScale">logScale<a class="headerlink" href="#meter_logScale" title="Permanent link">#</a></h4> | `boolean` | <code>false</code> | See fader's `logScale` |
| <h4 id="meter_origin">origin<a class="headerlink" href="#meter_origin" title="Permanent link">#</a></h4> | `number` | <code>"auto"</code> | See fader's `origin` |
| <h4 id="meter_unit">unit<a class="headerlink" href="#meter_unit" title="Permanent link">#</a></h4> | `string` | <code>"auto"</code> | See fader's `unit` |
| <h4 id="meter_alignRight">alignRight<a class="headerlink" href="#meter_alignRight" title="Permanent link">#</a></h4> | `boolean` | <code>false</code> | See fader's `alignRight` |
| <h4 id="meter_horizontal">horizontal<a class="headerlink" href="#meter_horizontal" title="Permanent link">#</a></h4> | `boolean` | <code>false</code> | See fader's `horizontal` |
| <h4 id="meter_pips">pips<a class="headerlink" href="#meter_pips" title="Permanent link">#</a></h4> | `boolean` | <code>false</code> | See fader's `pips` |
| <h4 id="meter_dashed">dashed<a class="headerlink" href="#meter_dashed" title="Permanent link">#</a></h4> | `boolean` | <code>false</code> | See fader's `dashed` |
| <h4 id="meter_gradient">gradient<a class="headerlink" href="#meter_gradient" title="Permanent link">#</a></h4> | `array`&vert;<br/>`object` | <code>[]</code> | When set, the meter's gauge will be filled with a linear color gradient<br/>- each item must be a CSS color string.<br/>- as an `object`: each key must be a number between 0 and 1<br/>- each item must be a CSS color string.<br/><br/>Examples: `['blue', 'red']`, {'0': 'blue', '0.9': 'blue', '1': 'red'}  |</div>




<div class="accordion" data-category="Plots" markdown="1">

<h4 class="accordionlink" id="text"><a class="headerlink" href="#text">text</a></h3>
<div class="accordion-description">Display text.</div>

| property | type |default | description |
| --- | --- | --- | --- |
| <h4 class="thead2" id="text_text">text<a class="headerlink" href="#text_text" title="Permanent link">#</a></h4> ||||
| <h4 id="text_vertical">vertical<a class="headerlink" href="#text_vertical" title="Permanent link">#</a></h4> | `boolean` | <code>false</code> | Set to `true` to display the text vertically |
| <h4 id="text_wrap">wrap<a class="headerlink" href="#text_wrap" title="Permanent link">#</a></h4> | `boolean` | <code>false</code> | Set to `true` to wrap long lines automatically.<br/><br/>This will not break overflowing words by default, word-breaking can be enabled by adding `word-break: break-all;` to the `css` property |
| <h4 id="text_align">align<a class="headerlink" href="#text_align" title="Permanent link">#</a></h4> | `string` | <code>""</code> | Set to `left` or `right` to change text alignment (otherwise center) |</div>




<div class="accordion" data-category="Plots" markdown="1">

<h4 class="accordionlink" id="image"><a class="headerlink" href="#image">image</a></h3>
<div class="accordion-description">Load a image (url or base64-encoded).</div>

| property | type |default | description |
| --- | --- | --- | --- |
| <h4 class="thead2" id="image_image">image<a class="headerlink" href="#image_image" title="Permanent link">#</a></h4> ||||
| <h4 id="image_size">size<a class="headerlink" href="#image_size" title="Permanent link">#</a></h4> | `string` | <code>"cover"</code> | CSS background-size |
| <h4 id="image_position">position<a class="headerlink" href="#image_position" title="Permanent link">#</a></h4> | `string` | <code>"center"</code> | CSS background-position |
| <h4 id="image_repeat">repeat<a class="headerlink" href="#image_repeat" title="Permanent link">#</a></h4> | `string` | <code>"no-repeat"</code> | CSS background-repeat |
| <h4 id="image_border">border<a class="headerlink" href="#image_border" title="Permanent link">#</a></h4> | `boolean` | <code>true</code> | Set to `false` to disable the borders and background-color |
| <h4 id="image_cache">cache<a class="headerlink" href="#image_cache" title="Permanent link">#</a></h4> | `boolean` | <code>true</code> | Set to false to disable image caching (forces file reload when updating or editing the widget).<br/><br/>When true, sending `reload` to the widget reloads its image without changing its value |
| <h4 class="thead2" id="image_value">value<a class="headerlink" href="#image_value" title="Permanent link">#</a></h4> ||||
| <h4 id="image_value">value<i class="dynamic-prop-icon" title="dynamic"></i><a class="headerlink" href="#image_value" title="Permanent link">#</a></h4> | `string` | <code>""</code> | - File `url` or `path` (relative to the session file location by default, falling back to absolute path)<br/>- Base64 encoded image : `data:image/...` |</div>




<div class="accordion" data-category="Plots" markdown="1">

<h4 class="accordionlink" id="svg"><a class="headerlink" href="#svg">svg</a></h3>
<div class="accordion-description">Svg parser.</div>

| property | type |default | description |
| --- | --- | --- | --- |
| <h4 class="thead2" id="svg_svg">svg<a class="headerlink" href="#svg_svg" title="Permanent link">#</a></h4> ||||
| <h4 id="svg_svg">svg<i class="dynamic-prop-icon" title="dynamic"></i><a class="headerlink" href="#svg_svg" title="Permanent link">#</a></h4> | `string` | <code>""</code> | Svg xml definition:<br/>- will be wrapped in a `< svg />` element<br/>- `<path>` commands support a special percent notation (`%x` and `%y`) |
| <h4 id="svg_border">border<a class="headerlink" href="#svg_border" title="Permanent link">#</a></h4> | `boolean` | <code>true</code> | Set to `false` to disable the borders and background-color |</div>




<div class="accordion" data-category="Plots" markdown="1">

<h4 class="accordionlink" id="html"><a class="headerlink" href="#html">html</a></h3>
<div class="accordion-description">Simple HTML parser.</div>

| property | type |default | description |
| --- | --- | --- | --- |
| <h4 class="thead2" id="html_html">html<a class="headerlink" href="#html_html" title="Permanent link">#</a></h4> ||||
| <h4 id="html_html">html<i class="dynamic-prop-icon" title="dynamic"></i><a class="headerlink" href="#html_html" title="Permanent link">#</a></h4> | `string` | <code>""</code> | Allowed HTML tags:<br/><br/>&nbsp;&nbsp;h1-6, blockquote, p, a, ul, ol, nl, li,<br/><br/>&nbsp;&nbsp;b, i, strong, em, strike, code, hr, br, div,<br/><br/>&nbsp;&nbsp;table, thead, img, caption, tbody, tr, th, td, pre |
| <h4 id="html_border">border<a class="headerlink" href="#html_border" title="Permanent link">#</a></h4> | `boolean` | <code>true</code> | Set to `false` to disable the borders and background-color |</div>




<div class="accordion" data-category="Plots" markdown="1">

<h4 class="accordionlink" id="frame"><a class="headerlink" href="#frame">frame</a></h3>
<div class="accordion-description">Embed a page in a frame (local network only).</div>

| property | type |default | description |
| --- | --- | --- | --- |
| <h4 class="thead2" id="frame_style">style<a class="headerlink" href="#frame_style" title="Permanent link">#</a></h4> ||||
| <h4 id="frame_label">label<i class="dynamic-prop-icon" title="dynamic"></i><a class="headerlink" href="#frame_label" title="Permanent link">#</a></h4> | `string`&vert;<br/>`boolean` | <code>"auto"</code> | Set to `false` to hide completely<br/><br/>Insert icons using the prefix ^ followed by the icon's name : ^play, ^pause, etc<br/><br/>If set to `false`, all pointer-events will be disabled on the frame as long as the editor is enabled to ensure it can be selected |
| <h4 class="thead2" id="frame_frame">frame<a class="headerlink" href="#frame_frame" title="Permanent link">#</a></h4> ||||
| <h4 id="frame_border">border<a class="headerlink" href="#frame_border" title="Permanent link">#</a></h4> | `boolean` | <code>true</code> | Set to `false` to disable the borders and background-color |
| <h4 class="thead2" id="frame_value">value<a class="headerlink" href="#frame_value" title="Permanent link">#</a></h4> ||||
| <h4 id="frame_value">value<i class="dynamic-prop-icon" title="dynamic"></i><a class="headerlink" href="#frame_value" title="Permanent link">#</a></h4> | `string` | <code>""</code> | External web page URL. Only local URLs are allowed (starting with `http://127.0.0.1/`, `http://10.x.x.x/`, `http://192.168.x.x/`, etc) |</div>



## Containers


<div class="accordion" data-category="Containers" markdown="1">

<h4 class="accordionlink" id="panel"><a class="headerlink" href="#panel">panel</a></h3>
<div class="accordion-description">Widgets or Tabs container.</div>

| property | type |default | description |
| --- | --- | --- | --- |
| <h4 class="thead2" id="panel_panel">panel<a class="headerlink" href="#panel_panel" title="Permanent link">#</a></h4> ||||
| <h4 id="panel_scroll">scroll<a class="headerlink" href="#panel_scroll" title="Permanent link">#</a></h4> | `boolean` | <code>true</code> | Set to `false` to disable scrollbars |
| <h4 id="panel_border">border<a class="headerlink" href="#panel_border" title="Permanent link">#</a></h4> | `boolean` | <code>true</code> | By default, widgets in panels/strip have their border disabled, except for panels and strips. Set to `false` to apply this rule to the panel too |
| <h4 class="thead2" id="panel_value">value<a class="headerlink" href="#panel_value" title="Permanent link">#</a></h4> ||||
| <h4 id="panel_value">value<i class="dynamic-prop-icon" title="dynamic"></i><a class="headerlink" href="#panel_value" title="Permanent link">#</a></h4> | `integer` | <code>""</code> | Defines currently opened tab in the widget<br/><br/>A tab can be opened only by setting its parent's value |
| <h4 class="thead2" id="panel_children">children<a class="headerlink" href="#panel_children" title="Permanent link">#</a></h4> ||||
| <h4 id="panel_variables">variables<i class="dynamic-prop-icon" title="dynamic"></i><a class="headerlink" href="#panel_variables" title="Permanent link">#</a></h4> | `*` | <code>"@\{parent.variables}"</code> | Defines one or more arbitrary variables that can be inherited by children widgets |
| <h4 id="panel_widgets">widgets<a class="headerlink" href="#panel_widgets" title="Permanent link">#</a></h4> | `array` | <code>[]</code> | Each element of the array must be a widget object. A panel cannot contain widgets and tabs simultaneously. |
| <h4 id="panel_tabs">tabs<a class="headerlink" href="#panel_tabs" title="Permanent link">#</a></h4> | `array` | <code>[]</code> | Each element of the array must be a tab object. A panel cannot contain widgets and tabs simultaneously |</div>




<div class="accordion" data-category="Containers" markdown="1">

<h4 class="accordionlink" id="strip"><a class="headerlink" href="#strip">strip</a></h3>
<div class="accordion-description">Widget container that display its children in a single column or row.</div>

| property | type |default | description |
| --- | --- | --- | --- |
| <h4 class="thead2" id="strip_strip">strip<a class="headerlink" href="#strip_strip" title="Permanent link">#</a></h4> ||||
| <h4 id="strip_scroll">scroll<a class="headerlink" href="#strip_scroll" title="Permanent link">#</a></h4> | `boolean` | <code>true</code> | Set to `false` to disable scrollbars |
| <h4 id="strip_horizontal">horizontal<a class="headerlink" href="#strip_horizontal" title="Permanent link">#</a></h4> | `boolean` | <code>false</code> | Set to `true` to display widgets horizontally |
| <h4 id="strip_stretch">stretch<a class="headerlink" href="#strip_stretch" title="Permanent link">#</a></h4> | `boolean` | <code>false</code> | Set to `true` to stretch widgets evenly |
| <h4 id="strip_border">border<a class="headerlink" href="#strip_border" title="Permanent link">#</a></h4> | `boolean` | <code>true</code> | By default, widgets in panels/strip have their border disabled, except for panels and strips. Set to `false` to apply this rule to the panel too |
| <h4 id="strip_spacing">spacing<a class="headerlink" href="#strip_spacing" title="Permanent link">#</a></h4> | `integer`&vert;<br/>`percentage` | <code>0</code> | Adds space between widgets. Percents are always relative to the strips width |
| <h4 class="thead2" id="strip_children">children<a class="headerlink" href="#strip_children" title="Permanent link">#</a></h4> ||||
| <h4 id="strip_variables">variables<i class="dynamic-prop-icon" title="dynamic"></i><a class="headerlink" href="#strip_variables" title="Permanent link">#</a></h4> | `*` | <code>"@\{parent.variables}"</code> | Defines one or more arbitrary variables that can be inherited by children widgets |
| <h4 id="strip_widgets">widgets<a class="headerlink" href="#strip_widgets" title="Permanent link">#</a></h4> | `array` | <code>[]</code> | Each element of the array must be a widget object<br/>- By default, children widgets that don't have an explicit `width`/`height` set will be shrinked to respect the sizes specified by others<br/>- Adding `flex:1;` to a children's `css` will give it the ability the fill the remaining space<br/>- Multiple children can have a `flex:x;` css property (`x` will ponderate their expansion) |</div>




<div class="accordion" data-category="Containers" markdown="1">

<h4 class="accordionlink" id="modal"><a class="headerlink" href="#modal">modal</a></h3>
<div class="accordion-description">A toggle button that opens a popup panel. Cannot contain tabs directly.</div>

| property | type |default | description |
| --- | --- | --- | --- |
| <h4 class="thead2" id="modal_modal">modal<a class="headerlink" href="#modal_modal" title="Permanent link">#</a></h4> ||||
| <h4 id="modal_doubleTap">doubleTap<a class="headerlink" href="#modal_doubleTap" title="Permanent link">#</a></h4> | `boolean` | <code>false</code> | Set to `true` to make the modal require a double tap to open instead of a single tap |
| <h4 id="modal_popupLabel">popupLabel<i class="dynamic-prop-icon" title="dynamic"></i><a class="headerlink" href="#modal_popupLabel" title="Permanent link">#</a></h4> | `string` | <code>""</code> | Alternative label for the modal popup |
| <h4 id="modal_popupWidth">popupWidth<a class="headerlink" href="#modal_popupWidth" title="Permanent link">#</a></h4> | `number`&vert;<br/>`percentage` | <code>"80%"</code> | Modal popup's size |
| <h4 id="modal_popupHeight">popupHeight<a class="headerlink" href="#modal_popupHeight" title="Permanent link">#</a></h4> | `number`&vert;<br/>`percentage` | <code>"80%"</code> | Modal popup's size |
| <h4 id="modal_popupLeft">popupLeft<a class="headerlink" href="#modal_popupLeft" title="Permanent link">#</a></h4> | `number`&vert;<br/>`percentage` | <code>"auto"</code> | Modal popup's position |
| <h4 id="modal_popupTop">popupTop<a class="headerlink" href="#modal_popupTop" title="Permanent link">#</a></h4> | `number`&vert;<br/>`percentage` | <code>"auto"</code> | Modal popup's position |
| <h4 id="modal_scroll">scroll<a class="headerlink" href="#modal_scroll" title="Permanent link">#</a></h4> | `boolean` | <code>true</code> | Set to `false` to disable scrollbars |
| <h4 class="thead2" id="modal_value">value<a class="headerlink" href="#modal_value" title="Permanent link">#</a></h4> ||||
| <h4 id="modal_value">value<i class="dynamic-prop-icon" title="dynamic"></i><a class="headerlink" href="#modal_value" title="Permanent link">#</a></h4> | `integer` | <code>""</code> | Defines the modal's state:`0` for closed, `1` for opened |
| <h4 class="thead2" id="modal_children">children<a class="headerlink" href="#modal_children" title="Permanent link">#</a></h4> ||||
| <h4 id="modal_variables">variables<i class="dynamic-prop-icon" title="dynamic"></i><a class="headerlink" href="#modal_variables" title="Permanent link">#</a></h4> | `*` | <code>"@\{parent.variables}"</code> | Defines one or more arbitrary variables that can be inherited by children widgets |
| <h4 id="modal_widgets">widgets<a class="headerlink" href="#modal_widgets" title="Permanent link">#</a></h4> | `array` | <code>[]</code> | Each element of the array must be a widget object |</div>




<div class="accordion" data-category="Containers" markdown="1">

<h4 class="accordionlink" id="clone"><a class="headerlink" href="#clone">clone</a></h3>
<div class="accordion-description">Widget replication with overridable properties.</div>

| property | type |default | description |
| --- | --- | --- | --- |
| <h4 class="thead2" id="clone_clone">clone<a class="headerlink" href="#clone_clone" title="Permanent link">#</a></h4> ||||
| <h4 id="clone_widgetId">widgetId<i class="dynamic-prop-icon" title="dynamic"></i><a class="headerlink" href="#clone_widgetId" title="Permanent link">#</a></h4> | `string` | <code>""</code> | `id` of the widget to clone |
| <h4 class="thead2" id="clone_overrides">overrides<a class="headerlink" href="#clone_overrides" title="Permanent link">#</a></h4> ||||
| <h4 id="clone_props">props<a class="headerlink" href="#clone_props" title="Permanent link">#</a></h4> | `object` | <code>\{}</code> | Cloned widget's properties to override |</div>




<div class="accordion" data-category="Containers" markdown="1">

<h4 class="accordionlink" id="root"><a class="headerlink" href="#root">root</a></h3>
<div class="accordion-description">Main (unique) container</div>

| property | type |default | description |
| --- | --- | --- | --- |
| <h4 id="root_id">id<a class="headerlink" href="#root_id" title="Permanent link">#</a></h4> | `string` | <code>"root"</code> | Widgets sharing the same id will act as clones and update each other's value(s) without sending extra osc messages |
| <h4 class="thead2" id="root_value">value<a class="headerlink" href="#root_value" title="Permanent link">#</a></h4> ||||
| <h4 id="root_value">value<i class="dynamic-prop-icon" title="dynamic"></i><a class="headerlink" href="#root_value" title="Permanent link">#</a></h4> | `integer` | <code>""</code> | Defines currently opened tab in the widget<br/><br/>A tab can be opened only by setting its parent's value |
| <h4 class="thead2" id="root_children">children<a class="headerlink" href="#root_children" title="Permanent link">#</a></h4> ||||
| <h4 id="root_traversing">traversing<i class="dynamic-prop-icon" title="dynamic"></i><a class="headerlink" href="#root_traversing" title="Permanent link">#</a></h4> | `boolean` | <code>false</code> | Set to `true` to enable traversing gestures in this widget. Set to `smart` or `auto` to limit affected widgets by the type of the first touched widget |
| <h4 id="root_variables">variables<i class="dynamic-prop-icon" title="dynamic"></i><a class="headerlink" href="#root_variables" title="Permanent link">#</a></h4> | `*` | <code>\{}</code> | Defines one or more arbitrary variables that can be inherited by children widgets |
| <h4 id="root_tabs">tabs<a class="headerlink" href="#root_tabs" title="Permanent link">#</a></h4> | `array` | <code>[<br/>&nbsp;\{}<br/>]</code> | Each element of the array must be a tab object |</div>




<div class="accordion" data-category="Containers" markdown="1">

<h4 class="accordionlink" id="tab"><a class="headerlink" href="#tab">tab</a></h3>
<div class="accordion-description">Tabbed panel widget</div>

| property | type |default | description |
| --- | --- | --- | --- |
| <h4 class="thead2" id="tab_tab">tab<a class="headerlink" href="#tab_tab" title="Permanent link">#</a></h4> ||||
| <h4 id="tab_detached">detached<a class="headerlink" href="#tab_detached" title="Permanent link">#</a></h4> | `boolean` | <code>true</code> | Set to `false` if the tab contains `frame` widgets that should not be reloaded when the tab opens |
| <h4 class="thead2" id="tab_value">value<a class="headerlink" href="#tab_value" title="Permanent link">#</a></h4> ||||
| <h4 id="tab_value">value<i class="dynamic-prop-icon" title="dynamic"></i><a class="headerlink" href="#tab_value" title="Permanent link">#</a></h4> | `integer` | <code>""</code> | Defines currently opened tab in the widget<br/><br/>A tab can be opened only by setting its parent's value |
| <h4 class="thead2" id="tab_children">children<a class="headerlink" href="#tab_children" title="Permanent link">#</a></h4> ||||
| <h4 id="tab_variables">variables<i class="dynamic-prop-icon" title="dynamic"></i><a class="headerlink" href="#tab_variables" title="Permanent link">#</a></h4> | `*` | <code>"@\{parent.variables}"</code> | Defines one or more arbitrary variables that can be inherited by children widgets |
| <h4 id="tab_widgets">widgets<a class="headerlink" href="#tab_widgets" title="Permanent link">#</a></h4> | `array` | <code>[]</code> | Each element of the array must be a widget object. A tab cannot contain widgets and tabs simultaneously |
| <h4 id="tab_tabs">tabs<a class="headerlink" href="#tab_tabs" title="Permanent link">#</a></h4> | `array` | <code>[]</code> | Each element of the array must be a tab object. A tab cannot contain widgets and tabs simultaneously |</div>



## Switchers


<div class="accordion" data-category="Switchers" markdown="1">

<h4 class="accordionlink" id="state"><a class="headerlink" href="#state">state</a></h3>
<div class="accordion-description">Save and recall the state of other widgets.</div>

| property | type |default | description |
| --- | --- | --- | --- |
| <h4 class="thead2" id="state_state">state<a class="headerlink" href="#state_state" title="Permanent link">#</a></h4> ||||
| <h4 id="state_filter">filter<a class="headerlink" href="#state_filter" title="Permanent link">#</a></h4> | `string`&vert;<br/>`array` | <code>""</code> | Only save state from widgets contained in widgets designated by id. If empty, the whole session's state is saved. Switchers are always ignored.<br/>- widget id `string`<br/>- `array` of widget id strings |
| <h4 id="state_saveLabel">saveLabel<a class="headerlink" href="#state_saveLabel" title="Permanent link">#</a></h4> | `string` | <code>"Save"</code> | Label for save button |
| <h4 id="state_loadLabel">loadLabel<a class="headerlink" href="#state_loadLabel" title="Permanent link">#</a></h4> | `string` | <code>"Load"</code> | Label for load button |
| <h4 id="state_horizontal">horizontal<a class="headerlink" href="#state_horizontal" title="Permanent link">#</a></h4> | `boolean` | <code>false</code> | Set to `true` to display buttons horizontally |
| <h4 class="thead2" id="state_value">value<a class="headerlink" href="#state_value" title="Permanent link">#</a></h4> ||||
| <h4 id="state_value">value<i class="dynamic-prop-icon" title="dynamic"></i><a class="headerlink" href="#state_value" title="Permanent link">#</a></h4> | `object`&vert;<br/>`string` | <code>""</code> | - `object`: `"widget_id": VALUE` pairs<br/>- `string`: `"save"` (trigger save action), `"load"` (trigger load action) or `""` (reset value)<br/><br/><br/><br/>Note: the widget's actual value is never `"save"` or `"load"`, it's either an empty string or an object. |</div>




<div class="accordion" data-category="Switchers" markdown="1">

<h4 class="accordionlink" id="switcher"><a class="headerlink" href="#switcher">switcher</a></h3>
<div class="accordion-description">Store other widgets' values and recall them.</div>

| property | type |default | description |
| --- | --- | --- | --- |
| <h4 class="thead2" id="switcher_switcher">switcher<a class="headerlink" href="#switcher_switcher" title="Permanent link">#</a></h4> ||||
| <h4 id="switcher_linkedWidgets">linkedWidgets<a class="headerlink" href="#switcher_linkedWidgets" title="Permanent link">#</a></h4> | `string`&vert;<br/>`array` | <code>""</code> | - `String`: a widget's `id` whose state changes will be stored<br/>- `Array`: a list of widget `id` string |
| <h4 id="switcher_horizontal">horizontal<a class="headerlink" href="#switcher_horizontal" title="Permanent link">#</a></h4> | `boolean` | <code>false</code> | Set to `true` to display values horizontally |
| <h4 id="switcher_values">values<a class="headerlink" href="#switcher_values" title="Permanent link">#</a></h4> | `array`&vert;<br/>`object` | <code>\{<br/>&nbsp;"Value 1": 1,<br/>&nbsp;"Value 2": 2<br/>}</code> | Each item represents a bank that stores the values from the widgets listed in `linkedWidgets`<br/>- `Array` of possible values to switch between : `[1,2,3]`<br/>- `Object` of `"label":value` pairs. Numeric labels must be prepended or appended with a white space (or any other non-numeric character) otherwise the order of the values won't be kept |</div>




<div class="accordion" data-category="Switchers" markdown="1">

<h4 class="accordionlink" id="crossfader"><a class="headerlink" href="#crossfader">crossfader</a></h3>
<div class="accordion-description">Switcher with linear interpolation slider.</div>

| property | type |default | description |
| --- | --- | --- | --- |
| <h4 class="thead2" id="crossfader_crossfader">crossfader<a class="headerlink" href="#crossfader_crossfader" title="Permanent link">#</a></h4> ||||
| <h4 id="crossfader_linkedWidgets">linkedWidgets<a class="headerlink" href="#crossfader_linkedWidgets" title="Permanent link">#</a></h4> | `string`&vert;<br/>`array` | <code>""</code> | - `String`: a widget's `id` whose state changes will be stored<br/>- `Array`: a list of widget `id` string |
| <h4 id="crossfader_horizontal">horizontal<a class="headerlink" href="#crossfader_horizontal" title="Permanent link">#</a></h4> | `boolean` | <code>false</code> | Set to `true` to display values horizontally |</div>



## Inputs


<div class="accordion" data-category="Inputs" markdown="1">

<h4 class="accordionlink" id="input"><a class="headerlink" href="#input">input</a></h3>
<div class="accordion-description">Text input.</div>

| property | type |default | description |
| --- | --- | --- | --- |
| <h4 class="thead2" id="input_input">input<a class="headerlink" href="#input_input" title="Permanent link">#</a></h4> ||||
| <h4 id="input_vertical">vertical<a class="headerlink" href="#input_vertical" title="Permanent link">#</a></h4> | `boolean` | <code>false</code> | Set to `true` to display the text vertically |
| <h4 id="input_align">align<a class="headerlink" href="#input_align" title="Permanent link">#</a></h4> | `string` | <code>""</code> | Set to `left` or `right` to change text alignment (otherwise center) |
| <h4 id="input_unit">unit<a class="headerlink" href="#input_unit" title="Permanent link">#</a></h4> | `string` | <code>""</code> | Unit will be appended to the displayed widget's value (it doesn't affect osc messages) |
| <h4 id="input_editable">editable<a class="headerlink" href="#input_editable" title="Permanent link">#</a></h4> | `boolean` | <code>true</code> | Set to `false` to make the input non-editable |
| <h4 id="input_asYouType">asYouType<a class="headerlink" href="#input_asYouType" title="Permanent link">#</a></h4> | `boolean` | <code>false</code> | Set to `true` to make the input send its value at each keystroke |</div>




<div class="accordion" data-category="Inputs" markdown="1">

<h4 class="accordionlink" id="keys"><a class="headerlink" href="#keys">keys</a></h3>
<div class="accordion-description">Keyboard binding.</div>

| property | type |default | description |
| --- | --- | --- | --- |
| <h4 class="thead2" id="keys_keys">keys<a class="headerlink" href="#keys_keys" title="Permanent link">#</a></h4> ||||
| <h4 id="keys_binding">binding<a class="headerlink" href="#keys_binding" title="Permanent link">#</a></h4> | `string`&vert;<br/>`array` | <code>""</code> | Key combo `string` or `array` of strings (see <a href="https://github.com/RobertWHurst/KeyboardJS">KeyboardJS</a> documentation) |
| <h4 id="keys_keydown">keydown<i class="dynamic-prop-icon" title="dynamic"></i><a class="headerlink" href="#keys_keydown" title="Permanent link">#</a></h4> | `string` | <code>""</code> | This property is evaluated each time the key combo is pressed and defines the widget's own value. Formulas are given extras variables in this context:<br/>- `key`: pressed key name (usefull for handling multiple keys with a single keys widget, lowercased when referencing a character key)<br/>- `code`: pressed key code name (<a href="https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code#Code_values">full list</a>)<br/>- `ctrl`: control key state<br/>- `alt`: alt key state<br/>- `shift`: shift key state<br/>- `meta`: command/windows key state |
| <h4 id="keys_keyup">keyup<i class="dynamic-prop-icon" title="dynamic"></i><a class="headerlink" href="#keys_keyup" title="Permanent link">#</a></h4> | `string` | <code>""</code> | Same as `keydown`, but evaluated when releasing the key combo |
| <h4 id="keys_repeat">repeat<i class="dynamic-prop-icon" title="dynamic"></i><a class="headerlink" href="#keys_repeat" title="Permanent link">#</a></h4> | `boolean` | <code>true</code> | Set to `false` to prevent keydown repeats when holding the key combo pressed |</div>




<div class="accordion" data-category="Inputs" markdown="1">

<h4 class="accordionlink" id="script"><a class="headerlink" href="#script">script</a></h3>
<div class="accordion-description">Evaluates a script each time it receives a value.</div>

| property | type |default | description |
| --- | --- | --- | --- |
| <h4 class="thead2" id="script_script">script<a class="headerlink" href="#script_script" title="Permanent link">#</a></h4> ||||
| <h4 id="script_condition">condition<i class="dynamic-prop-icon" title="dynamic"></i><a class="headerlink" href="#script_condition" title="Permanent link">#</a></h4> | `string` | <code>1</code> | When the widget receives a value, if this property return a falsy value, the script property won't be evaluated. If it's non-falsy, it will be evaluated normally. Formulas are given one extra variable in this context:<br/>- `value`: the value received by the widget |
| <h4 id="script_script">script<i class="dynamic-prop-icon" title="dynamic"></i><a class="headerlink" href="#script_script" title="Permanent link">#</a></h4> | `string` | <code>""</code> | This property is evaluated each time the widget receives a value* if condition is non-falsy. Formulas are given extras variables in this context:<br/>- `value`: value received by the widget<br/>- `id`: id of the widget that triggered the script<br/>- `send(target, address, arg1, arg2, ...)`: function for sending osc messages (ignores the script's targets and the server's defaults unless `target` is `false`; ignores the script's `preArgs`)<br/>- `set(id, value)`: function for setting a widget's value<br/>- `get(id)`: function for getting a widget's value (dynamic equivalent of @{id})<br/>- `getProp(id, property)`: function for getting a widget's property value ((dynamic equivalent of @{id.property})<br/>- `httpGet(url, callback)`: function for making http requests (asynchronous "GET" request and local urls only)<br/><br/><br/><br/>* Note: `value` or `linkId` properties can be used to receive other widgets' values. The `value` property must actually change to trigger the execution, where linked widgets via `linkId` can submit the same value over and over and trigger the execution |</div>




<div class="accordion" data-category="Inputs" markdown="1">

<h4 class="accordionlink" id="gyroscope"><a class="headerlink" href="#gyroscope">gyroscope</a></h3>
<div class="accordion-description">Device motion/orientation sensor.</div>

| property | type |default | description |
| --- | --- | --- | --- |
| <h4 class="thead2" id="gyroscope_gyroscope">gyroscope<a class="headerlink" href="#gyroscope_gyroscope" title="Permanent link">#</a></h4> ||||
| <h4 id="gyroscope_frequency">frequency<a class="headerlink" href="#gyroscope_frequency" title="Permanent link">#</a></h4> | `number` | <code>30</code> | Value update frequency (updates per seconds) |
| <h4 id="gyroscope_normalize">normalize<a class="headerlink" href="#gyroscope_normalize" title="Permanent link">#</a></h4> | `boolean` | <code>true</code> | Normalize gravity related values |
| <h4 id="gyroscope_compass">compass<a class="headerlink" href="#gyroscope_compass" title="Permanent link">#</a></h4> | `boolean` | <code>false</code> | Set to `true` to return the orientation values with respect to the actual north direction of the world instead of the head direction of the device |
| <h4 id="gyroscope_screenAdjusted">screenAdjusted<a class="headerlink" href="#gyroscope_screenAdjusted" title="Permanent link">#</a></h4> | `boolean` | <code>false</code> | Set to `true` to return screen adjusted values |
| <h4 class="thead2" id="gyroscope_value">value<a class="headerlink" href="#gyroscope_value" title="Permanent link">#</a></h4> ||||
| <h4 id="gyroscope_value">value<i class="dynamic-prop-icon" title="dynamic"></i><a class="headerlink" href="#gyroscope_value" title="Permanent link">#</a></h4> | `object` | <code>""</code> | The gyroscope's value is an object containing multiple values, which can be used by other widgets via the property maths syntax<br/>- `value.do.alpha`: deviceorientation event alpha<br/>- `value.do.beta`: deviceorientation event beta<br/>- `value.do.gamma`: deviceorientation event gamma<br/>- `value.do.absolute`: deviceorientation event absolute<br/>- `value.dm.x`: devicemotion event acceleration x<br/>- `value.dm.y`: devicemotion event acceleration y<br/>- `value.dm.z`: devicemotion event acceleration z<br/>- `value.dm.gx`: devicemotion event accelerationIncludingGravity x<br/>- `value.dm.gy`: devicemotion event accelerationIncludingGravity y<br/>- `value.dm.gz`: devicemotion event accelerationIncludingGravity z<br/>- `value.dm.alpha`: devicemotion event rotationRate alpha<br/>- `value.dm.beta`: devicemotion event rotationRate beta<br/>- `value.dm.gamma`: devicemotion event rotationRate gamma |</div>




<div class="accordion" data-category="Inputs" markdown="1">

<h4 class="accordionlink" id="file"><a class="headerlink" href="#file">file</a></h3>
<div class="accordion-description">File/Folder selector (server-side).</div>

| property | type |default | description |
| --- | --- | --- | --- |
| <h4 class="thead2" id="file_input">input<a class="headerlink" href="#file_input" title="Permanent link">#</a></h4> ||||
| <h4 id="file_directory">directory<a class="headerlink" href="#file_directory" title="Permanent link">#</a></h4> | `string` | <code>"auto"</code> | Default browsing directory |
| <h4 id="file_extension">extension<a class="headerlink" href="#file_extension" title="Permanent link">#</a></h4> | `string` | <code>"*"</code> | Only display files with this extension |
| <h4 id="file_hidePath">hidePath<a class="headerlink" href="#file_hidePath" title="Permanent link">#</a></h4> | `boolean` | <code>false</code> | Set to `true` to only display the filename (the whole path will still be used as value) |
| <h4 id="file_allowDir">allowDir<a class="headerlink" href="#file_allowDir" title="Permanent link">#</a></h4> | `boolean` | <code>false</code> | Allow selecting a folder (by pressing "open" when no file is selected) |</div>




<script>
document.querySelectorAll('.thead2').forEach(function(item){
item.classList.remove('thead2')
item.closest('tr').classList.add('thead2')
})
document.querySelectorAll('.accordionlink').forEach(function(item){
item.addEventListener('click', function(e){
e.preventDefault()
var node = item.parentNode
node.classList.toggle('show')
if (node.classList.contains('show')){
history.replaceState(null, null, '#' + item.getAttribute('id'));
} else {
history.replaceState(null, null, ' ');
}
})
})
if (window.location.hash) {
document.querySelectorAll('[id='+window.location.hash.split("#")[1]+']').forEach(function(item){
item.click()
})
}
</script>

