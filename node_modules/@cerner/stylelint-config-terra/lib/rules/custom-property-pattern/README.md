# custom-property-pattern

Requires custom properties defined within var functions to contain only alphanumeric characters and hyphens.

## Options

`boolean`: `true`

The following patterns are considered violations:

```css
a { background-color: var(--terra-Example-color); }
```
```css
a { background-color: var(--terra_example_color); }
```

The following patterns are *not* considered violations:

```css
a { color: var(--terra-example-color); }
```
