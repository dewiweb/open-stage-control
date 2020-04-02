# CSS Tips

## Inline syntax

For simple use cases, the `css` property can be written as a HTML inline styles (without any CSS selector). CSS rules will apply to the widget element.

```css
opacity: 0.5; /* make the widget's transparent */
font-size: 120%; /* increase font-size */
```


## Selector syntax

CSS selectors can be used to apply styles to specific elements:

```css
:host {
    /* style for the widget element
       & { } also works (deprecated)
    */
}

.label {
    /* style for the .label elements */
}

> .label {
    /* style for the direct child .label element */
}

```

!!! warning ""
    Mixing Inline and Selector syntaxes doesn't work, once you use selectors, you have to use the `:host` selector to target the widget element.

## Extra css classes: `class`

This non-standard css property can be used to add custom css classes to the widget element: `class: my-custom-class;`
Multiple classes can be added (one per `class` statement). Custom classes are always added to the widget's root element, css selectors are ignored.

!!! warning ""
    Using class names that are already used in the app can be hazardous. In order to avoid that, custom class names should be prefixed with something uncommon and preferably cool, such as `xxx-myclass` or `crispy-seitan-myclass`.

## Layering: `z-index`

Z-Axis ordering can be set using the `z-index` rule. Absolutely positionned widgets (when `top` or `left` is different from `auto`) have `z-index:10;` by default.

## Layering: `pointer-events`

To make a widget ignore interactions (ie to be able to click through it), add `pointer-events:none;`.

!!! note ""
    This is always ignored when the editor is enabled.

## Responsive sizing

In most cases, using percentages in `height` and `width` will do. CSS `calc()` function can help in some cases (set the corresponding property to `auto` to avoid conflicts):

```css
:host {

    width: calc(100% - 100rem);

}
```

Media queries can also be used:

```css
@media screen and (min-width: 768px) {

    :host {

        /* style the widget if the screen is bigger than 768px */

    }

}
```


## Size units

- use `rem` instead of `px` (`px` values will not scale when zooming), except for media queries
- use `%` for font-size


## CSS Variables

CSS Variables declared in the  [default theme](https://github.com/jean-emmanuel/open-stage-control/blob/master/src/scss/themes/default.scss) can be overriden. Some widgets also use specific CSS variables (mostly to define colors) documented on their respective pages.

## Other tips

#### Use the inspector

Hit `F12` to open the developers tools panel. The html/css inspector helps retreiving the class names needed to style specific parts of the widgets.

#### Panel's background-color

This works for panel, strip and tabs:

```css
> .panel {
    background-color: red;
}
```
