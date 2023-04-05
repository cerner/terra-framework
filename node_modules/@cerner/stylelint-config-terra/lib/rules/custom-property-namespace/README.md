# custom-property-namespace

Requires custom properties defined within var functions to be prefixed with a namespace.

## Options

`boolean`: `true`

By default the rule will find the nearest package.json and extract the package name.

The following patterns are considered violations:

Example of the nearest package.json
```json
{
  "name": "terra-example"
}
```
```css
/* Is not prefixed with the namespace. */
a {  color: var(--terra-color); }
```

The following patterns are *not* considered violations:

```css
/*          namespace ↓               */
a { color: var(--terra-example-color); }
```

## Optional secondary options

### `namespace`

`string`

A custom namespace. If not specified the name in the nearest package.json will be used.

Example:
```json
[
  true,
  {
    "namespace": "terra-component"
  }
]
```

```css
a { color: var(--terra-component-color); }
```
