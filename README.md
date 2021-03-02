# affixing-header

Wrap your header in this to get it to reveal itself in a detached state on scroll up. Elegantly handles the transition back to the top of the page.

## Usage

```html
<affixing-header :height="80">
  <desktop-header>...</desktop-header>
</affixing-header>
```
```css
.desktop-header {

  /* Fill the height of the affixing-header */
  height: 100%;

  /* Make the header text white at the top of the page */
  color: white;
  background: transparent;
}

/* Switch to inverterd styling when detached */
.show-background .desktop-header {
  color: black;
  background: white;
}
```

## Props

These are options you can pass to `makeBoilerplate`.  See the [source code](config/boilerplate.coffee) for defaults.

| Name | Default | Description |
| -------- | ----------- |
| `height` | `undefined` | The height of the header as an integer. |
| `offset` | `0` | Adjusts the `top` of the header by this amount when at the top of the page.  Useful when the site has a notification bar above the header; you would set this value to the height of the notification bar. |
| `no-offset-when-detached` | `false` | When `false`, if there is an offset, the header respects the `offset` when detached (aka, when you have scrolled down the page a ways and then scrolled back up).  This is useful for notification bars that don't hide on scrol.  When `true`, the header has a `top` of `0` when it's detached. |
| `reveal-transition` | `"translate"` | How the header enters when detached.  Supports "translate" and "fade". |
| `force-background` | `false` | Forces `show-background` class. |
| `force-reveal` | `false` | Forces reveal of detached state. |


