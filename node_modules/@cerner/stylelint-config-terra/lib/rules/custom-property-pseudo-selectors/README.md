# custom-property-pseudo-selectors

Requires custom properties defined within var functions to include all ancestor pseudo selectors in order.

Identifiers may be placed between selectors, but the selectors must appear in order.

## Options

`boolean`: `true`

The following patterns are considered violations:

```css
a:hover {
  /* Does not contain the hover pseudo selector */
  color: var(--terra-example-color);
}
```
```css
/* Wrong order                               ↓     ↓ */
a:hover:focus { color: var(--terra-example-focus-hover-color); }
```

The following patterns are *not* considered violations:

```css
/*                                    ↓ */
a:hover { color: var(--terra-example-hover-color); }
```
```css
.one:hover {
  .two:focus {
    /*                               ↓         ↓ */
    color: var(--terra-example-one-hover-two-focus-color);
  }
}
```
