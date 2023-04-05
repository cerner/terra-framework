# custom-property-no-duplicate-declaration

Disallows a custom property to be declared more than once with a different fallback value.

## Options

`boolean`: `true`

The following patterns are considered violations:

```css
a {
  /*    Custom Property ↓             ↓ Value    */
  color: var(--terra-example-color, #000);
}

.anchor {
  /*    Custom Property ↓             ↓ Value    */
  color: var(--terra-example-color, #111);
}
```

The following patterns are *not* considered violations:

```css
a {
  /*    Custom Property ↓             ↓ Value    */
  color: var(--terra-example-color, #000);
}

.anchor {
  /*    Custom Property ↓             ↓ Value    */
  color: var(--terra-example-color, #000);
}
```
