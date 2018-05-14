# Terra Theme Provider

The theme provider component provides a theme to Terra UI components rendered within it via CSS custom properties a.k.a CSS variables. This is accomplished by setting a CSS class which contains defined CSS custom properties for the specified theme on the DOM element that wraps the children rendered by the theme provider.

If you need to theme styles on to the `html` or `body` elements applied in terra-base, you can set the `isGlobalTheme` prop on the theme provider component. This will set the CSS class generated from the `themeName` prop on the `html` element.

*Note:*
* Apps should only use the `isGlobalTheme` prop on one theme provider component.
* The CSS custom properties applied via the theme provided only works in browsers which have native support for CSS custom properties.

### Theme Names
The theme provider component offers a set of first class terra theme names via `ThemeProvider.Opts.Themes`.
These are intended to be used with the `themeName` prop:

`<ThemeProvider themeName={ThemeProvider.Opts.Themes.CONSUMER}>`

The following themes are available via `ThemeProvider.Opts.Themes`

* `CONSUMER` Theme for consumer user experience
* `MOCK` Theme for mock testing

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-theme-provider`
