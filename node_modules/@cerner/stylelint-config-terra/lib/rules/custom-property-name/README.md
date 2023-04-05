# custom-property-name

Requires custom properties defined within var functions to be suffixed with the style property name.

```css
/*                               ↓ Property name */
a { color: var(--terra-example-color, #000); }
```

## Options

`boolean`: `true`

The following patterns are considered violations:

```css
a { background-image: var(--terra-example-icon, #000); }
```

The following patterns are *not* considered violations:

```css
a { background-image: var(--terra-example-background-image, #000); }
```
