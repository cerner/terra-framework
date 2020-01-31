# Terra Theme Provider

The theme provider component provides a theme to Terra UI components via CSS custom properties a.k.a CSS variables. This is accomplished by setting a CSS class, generated from the `themeName` prop, which contains defined CSS custom properties for the specified theme on the `html` element.

*Note:*
* The CSS custom properties applied via the theme provided only works in browsers which have native support for CSS custom properties.

## Theme Names
The theme provider component offers a set of first class terra theme names via `ThemeProvider.Opts.Themes`.
These are intended to be used with the `themeName` prop:

`<ThemeProvider themeName={ThemeProvider.Opts.Themes.CONSUMER}>`

The following themes are available via `ThemeProvider.Opts.Themes`

* `CONSUMER` Theme for consumer user experience
* `MOCK` Theme for mock testing

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-theme-provider`

<!-- AUTO-GENERATED-CONTENT:START Peer Dependencies -->
## Peer Dependencies

This component requires the following peer dependencies be installed in your app for the component to properly function.

| Peer Dependency | Version |
|-|-|
| react | ^16.8.5 |
| react-dom | ^16.8.5 |

<!-- AUTO-GENERATED-CONTENT:END -->

