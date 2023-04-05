# Changelog

## Unreleased

## 7.7.0 - (December 6, 2022)

* Fixed
  * Fixed clipping issue of test pages on dev-site.
  * Fixed scroll issue of doc pages with longer content.

* Changed
  * Update wdio snapshot to fix build.

## 7.6.1 - (June 22, 2022)

* Changed
  * Updated WDIO screenshots.

## 7.6.0 - (February 14, 2022)

* Changed
  * Revert limiting upper Node version to 14.

## 7.5.0 - (February 8, 2022)

* Added
  * Added Node 14 support

## 7.4.2 - (December 14, 2021)

* Changed
  * Minor dependency version bump

## 7.4.1 - (December 3, 2021)

* Fixed
  * Add support for Windows file path separator.

## 7.4.0 - (October 28, 2021)

* Fixed
  * Reverted "Bootstrap terra-dev-site entry to allow for optimized chunking" due to IE incompatibility

## 7.3.0 - (October 12, 2021)

* Changed
  * Removed unnecessary TODOs

## 7.2.0 - (October 7, 2021)

* Added
  * Dev site will now validate relative urls.

## 7.1.0 - (September 28, 2021)

* Changed
  * Bootstrap terra-dev-site entry to allow for optimized chunking.

## 7.0.1 - (September 1, 2021)

* Fixed
  * Fixed bug where redirect script was not being included at the requested basepath.

## 7.0.0 - (August 31, 2021)

* Added
  * Added support for webpack 5.

* Breaking
  * Remove the ability to include test evidence, this is covered now by a separate site report.
  * Update minimum node version to node 10.
  * Update react-docgen to ^5.3.0. This is a breaking change as react-docgen only supports node 8.10 and up.
  * Use MDX instead of Marked to load markdown files.
  * Remove `pagesConfig` option from site config. This was never used by consumers.
  * Remove `hotReloading` option from site config. There is no reason to disable it through terra dev site config.
  * The available themes are now pulled from the terra-theme.config file via the webpack global variable `TERRA_THEME_CONFIG`.
    * As a result, `themes` has been removed from site config.
    * `TERRA_THEME_CONFIG` is only available in terra-toolkit v6.1.0.
  * `locales` has been removed from site config. As of 6.23 Locales are pulled from the global `TERRA_AGGREGATED_LOCALES` variable provided by terra-toolkit v5.21.0.
  * Changed to a scoped package. `terra-dev-site` -> `@cerner/terra-dev-site`.
  * terra-dev-site now configured directly with the webpack config.
  * Config changed to better align with terra-application (see the config map in the upgrade guide).
  * Dependency on terra-toolkit removed.
  * No longer offering webpack config to extend, use the webpack plugin.
  * Removed export for DirectorySwitcherPlugin and LocalPackageAlias Plugin.

* Changed
  * Terra-dev-site fully converted to a webpack plugin.
  * dev-site-config folder removed, intermediate build files no longer written to disk.
  * Secondary navigation removed in favor of terra-application secondary navigation layout.
  * All content now wrapped in a page.
  * Consume terra-cli for releasing.
  * Updated props table to better format types, defaults and description.

## 6.39.2 - (August 26, 2021)

* Changed
  * Minor dependency version bump

## 6.39.1 - (August 11, 2021)

* Fixed
  * Add @cerner/terra-polyfill dependency.

## 6.39.0 - (August 11, 2021)

* Fixed
  * Fix props table to not fail when a filename is required.

* Changed
  * Migrated documentation to terra-application-docs.
  * Included terra-polyfill imports with dev-site application.

## 6.38.0 - (July 15, 2021)

* Added
  * Added `browser` to `resolve.mainFields` in webpack.config.js to support modern syntax for older browsers.

## 6.37.0 - (June 23, 2021)

* Fixed
  * Fix scoped package namespaces.

## 6.36.2 - (June 11, 2021)

* Fixed
  * Rollback supported node versions to remain passive.

## 6.36.1 - (June 11, 2021)

* Fixed
  * Ignore docker_images folder when publishing.

## 6.36.0 - (June 8, 2021)

* Changed
  * Updated to use terra-functional-testing
  * Upgraded to node 12

## 6.35.0 - (May 25, 2021)

* Fixed
  * Honor appConfig title as it was entered.

## 6.34.1 - (March 26, 2021)

* Fixed
  * Added back the loaders that are needed due to the terra-toolkit removal

## 6.34.0 - (March 26, 2021)

* Removed
  * Removed terra-toolkit from peer dependency

* Changed
  * Updated wdio screenshots to fix main build

* Changed
  * Updated `keycode-js` to `v3.1.0`

* Changed
  * Updated to use terra-open-source-scripts to release the project

## 6.33.0 - (December 1, 2020)

* Changed
  * Updated browserslist-config-terra to @cerner/browserslist-config-terra

## 6.32.0 - (November 17, 2020)

* Fixed
  * Fixed build failures due to the react/sort-comp rule

* Changed
  * Added new data attributes to be compatible with terra-functional-testing

## 6.31.0 - (October 20, 2020)

* Changed
  * Remove defaulting to devtool: source-map when in production with no devtool enabled. This was causing slow builds for large projects.

## 6.30.0 - (September 11, 2020)

* Changed
  * Updated to auto release from travis-ci

## 6.29.0 - (August 25, 2020)

* Added
  * Added missing themeable variables

## 6.28.1 - (August 18, 2020)

* Changed
  * oops forgot to re-compile before releasing. We should really get automated releases for our non mono repos....

## 6.28.0 - (August 18, 2020)

* Changed
  * Expose status overlay provider from terra-application.

* Fixed
  * Fixed propsTable to have unique selector for styles
  * Fixed unique id generation and initial mount focus.
  * Update Changelog Formatting

## 6.27.0 - (August 4, 2020)

* Changed
  * Add additional keyboard navigation options to CollapsingNavigationMenu

## 6.26.0 - (July 21, 2020)

* Changed
  * Add wdio tests for additional themes, update travis ci config.

* Removed
  * Removed toggle backgrounds tab and functionality from example loader

* Added
  * Added CSS display tab and functionality to example loader

## 6.25.0 - (July 7, 2020)

* Fixed
  * Fixed devSitePropsTable.js to show `required` in propsTable for custom required props.

* Changed
  * Add theme support
  * Changed default branch from master to main.

## 6.24.0 - (June 16, 2020)

* Changed
  * Update docker-compose file to retain shell history.

## 6.23.0 - (June 9, 2020)

* Changed
  * Changed the error in devSitePropsTable.js when it can't find a source to be more informative.
  * Updated eslint-config-terra to @cerner/eslint-config-terra ^4.0.0
  * Removed the locale configuration in favor of using the global `TERRA_AGGREGATED_LOCALES` variable provided by terra-toolkit v5.21.0.

## 6.22.0 - (June 2, 2020)

* Fixed
  * Fixed failed to read sessionStorage Property error when the access is denied.

* Changed
  * Updated terra-form-select dependency to ^6.0.0

## 6.21.0 - (May 26, 2020)

* Fixed
  * `Secondary Nav Menu` scrolling down when selecting items through spacebar.
  * Fixed some WDIO tests to be more reliable.

## 6.20.0 - (May 5, 2020)

* Added
  * Added WDIO tests.

* Changed
  * Updated condition for `Secondary Nav item` to scroll when not visible.
  * Re-organized terra-dev-site docs for consumption through terra-ui.

## 6.19.0 - (April 28, 2020)

* Fixed
  * Secondary nav item should not jump when item is visible.

## 6.18.0 - (April 23, 2020)

* Added
  * Added Source Code Badge inline with npm badge, which will only be displayed if the property `repository` with sub property `url` is specified in the package.json file.

* Changed
  * Allow the use of terra-toolkit v6 as a peer dependency.
  * Update terra-toolkit link references to terra-toolkit-boneyard.

## 6.17.0 - (April 21, 2020)

* Fixed
  * Correctly apply the --terra-dev-site-icon-link-background-image theme variable.

## 6.16.0 - (April 14, 2020)

* Changed
  * Consolidated example component.
  * Use new theme context strategy for example component.

## 6.15.0 - (March 17, 2020)

* Changed
  * No longer aggregate the dev-site test theme.

* Added
  * Added clinical-lowlight-theme

* Fixed
  * css and scss files are supported by the codeblock loader.

## 6.14.0 - (February 25, 2020)

* Changed
  * Now consume navigation and overlay from terra-application. Navigation prompts will now be honored across navigations tabs.

* Added
  * Add plugin imports to getting started example configuration.

## 6.13.0 - (February 13, 2020)

* Changed
  * Removed rehype-prism as a dependency. Added prism-react-renderer. Code highlighting is now performed client side as performing it as part of the build was non-performant.

## 6.12.0 - (January 28, 2020)

* Changed
  * Update copyright to include 2020

## 6.11.0 - (January 17, 2020)

* Changed
  * Dev toolbar theme and locale changes are applied globally, to avoid theme issues.

## 6.10.0 - (January 7, 2020)

* Changed
  * Code examples can be expanded by default.
  * Update WDIO screenshots.
  * Update terra-toolkit dependency to ^5.18.0.

* Removed
  * Remove non-existent site.config option 'filterSideMenu'. This option was removed in v6.0.0 release.

## 6.9.0 - (December 10, 2019)

* Changed
  * Raw routes now prevent the default navigation prompt check.
  * Updated docker dev environment

* Fixed
  * Update md loader regex to accept either a forward slash or a backslash.

## 6.8.0 - (November 12, 2019)

* Added
  * Secondary navigation now scrolls to the current selected item

## 6.7.0 - (November 1, 2019)

* Fixed
  * Fixed broken urls in the docs.

* Changed
  * Remove markdown styles to look more like 'terra'.

## 6.6.0 - (October 30, 2019)

* Fixed
  * Deployed site relative urls not appropriately generated.
  * Use the static renderDescription method in example template component.
  * Hot reloading did not function correctly when resolving a relatively aliased path.

## 6.5.0 - (October 8, 2019)

* Changed
  * Updated WDIO screenshots.
  * Use a custom loader to load md files at build time.

* Added
  * Support MDX syntax in .mdx files.

* Removed
  * Removed the ability to explicitly configure bidirectionality in app configuration.
  * Bidirectionality is _always_ supported.

## 6.4.0 - (September 19, 2019)

* Added
  * Added en-CA translations.

## 6.3.0 - (September 16, 2019)

* Changed
  * Updated `commander` to `v3.0.1`
  * Terra-dev-site now looks to the webpack resolve extensions to add to the files pulled in when the site is generated.
  * Provide a webpack plugin for consumption vs a webpack config.

## 6.2.0 - (August 30, 2019)

* Changed
  * Updated Object.assign syntax to Object spread syntax
  * Updated `keycode-js` to `V2.0.1`
  * auto focus the search field

* Fixed
  * locale override was not being applied.

## 6.1.1 - (August 13, 2019)

* Fixed
  * Add height 100% to main tag for raw pages.

## 6.1.0 - (August 13, 2019)

* Fixed
  * Add back github icon for old site passivity.
  * Scroll to location if an anchor is present.
  * Log error boundary error to console.
  * Add missing keys to status views.
  * Generation succeeds with an empty section.

* Changed
  * Remove div containing status view to center component.
  * Resolver plugins now allow more types of requires for hot reloading.
  * Raw routes are wrapped in main.

* Removed (considered non breaking)
  * Removed the webpackAliasOptions and monoRepo config sections from site.config. These were unused in any known repo and added complexity.

## 6.0.0 - (July 30, 2019)

* Breaking
  * Removed the hide option from navigation.config
  * Removed the theme imports option from site.conf. Themes should be aggregated by webpack.
  * Changed extension config option in site.conf to expect content launched from a disclosure manager.
  * The Browser router is now used instead of the hash router.
  * Secondary nav filter has been replaced by site search.
  * logo config removed.
  * WDIO config removed.

* Changed
  * Updated fs-extra dependency to ^8.0.0
  * Updated babel-eslint dev-dependency to ^10.0.1
  * Added mixin pattern rule in package.json.

* Added
  * consumed terra-application 1.x.x and terra-application-navigation 1.x.x packages
  * add devTools to display a development toolbar that allows switching between locales and themes.
  * new collapsible side navigation
  * added a site search.
  * added support for application switching
  * dev-site is now code split for faster loading

## 5.0.0 - (May 31, 2019)

* Changed
  * Removed browser.refresh before hook
  * Removed theme plugin
  * Upgraded to terra-toolkit v5
  * Upgraded various other dependencies.

## 4.1.0 - (May 31, 2019)

* Changed
  * Updated stylelint-config-terra to ^3.0.0
  * Updated stylelint to ^10.0.1

* Added
  * headHtml added to config.

* Changed
  * Log warning if side-effects globs are not resolved to something.

## 4.0.0 - (April 12, 2019)

* Changed
  * Upgrade terra-base version to 5.0.0

## 3.4.1 - (April 12, 2019)

* Changed
  * Downgrade terra-base version to 4.0.0

## 3.4.0 - (April 12, 2019)

* Changed
  * Added an env to override the default locale at webpack time.
  * Updated terra-base version to 5.0.0

* Removed
  * Dependency on terra-app-delegate package
  * Dependency on terra-i18n package

## 3.3.0 - (March 26, 2019)

* Changed
  * Updated react/react-dom to latest stable minor release

## 3.2.1 - (March 22, 2019)

* Added
  * Added alt text to app logo image
  * Added alt text to placeholder image

## 3.2.0 - (March 13, 2019)

* Added
  * Added theme variable `--terra-dev-site-content-background-color`. Defaults to `transparent`.

## 3.1.0 - (February 8, 2019)

* Fixed
  * Fixed an issue with searching for components with a string that ends in a regular expression character.

## 3.0.0 - (January 28, 2019)

* Changed
  * Consume latest major versions of terra dependencies. These major versions updated CSS Custom properties and require no code changes.

## 2.9.0 - (January 2, 2019)

* Added
  * Add DevSiteRoutingMenu to add ability to filter the navigation side menu by component name.
  * Add site.config option 'filterSideMenu' to use new DevSiteRoutingMenu. Defaults to false to use legacy RoutingMenu

## 2.8.0 - (December 14, 2018)

* Fixed
  * Fix evidence page generation logic to handle `tests/wdio/**/snapshots_/` path

## 2.7.0 - (December 3, 2018)

* Changed
  * Updated version of terra-application-layout to 3.0.0

* Added
  * Momentum scrolling to the site-content wrapper
  * Added dependency to terra-app-delegate to prevent transitive dependency issues

## 2.6.1 - (October 16, 2018)

* Changed
  * Fix page generation logic when source or dist options are not provided when using the generatePages configuration option

## 2.6.0 - (October 8, 2018)

* Changed
  * Updated linters and linter plugins to latest release

* Added
  * Ability to display test evidence parsed from the snapshots directory

## 2.5.0 - (September 5, 2018)

* Changed
  * Bumped minimum react peerDependency version from ^16.2.0 to ^16.4.2
  * Bumped minimum react-dom peerDependency version from ^16.2.0 to ^16.4.2

## 2.4.0 - (August 29, 2018)

* Fixed
  * Fix page generation error when source or dist options are not provided when using the generatePages configuration option

## 2.3.0 - (August 21, 2018)

* Changed
  * No auto selection at Tiny viewport
  * Match Node Env in Heroku to Served Assets

## 2.2.0 - (July 25, 2018)

* Changed
  * Use new tt-heroku-serve-static script to fix heroku builds
  * Added support for repository field not existing in package.json

## 2.1.0 - (July 10, 2018)

* Changed
  * Update minimum version of terra-toolkit

## 2.0.0 - (June 26, 2018)

* Breaking Change
  * Update to use terra-toolkit v4 and move from a dependency to a peer dependency

* Changed
  * Changing Page config to use POSIX path separator instead of Windows

## 1.3.0 - (June 15, 2018)

* Changed
  * Prod webpack config produces source maps

## 1.2.2 - (June 12, 2018)

* Fixed
  * Side Effects api didn't allow for the absense of .js extensions.

## 1.2.1 - (June 12, 2018)

* Fixed
  * Updated some paths and regexs to work in Windows.

## 1.2.0 - (June 12, 2018)

* Changed
  * Added Side effects api
  * Update the initial locale to be the `lang` attribute value and then uses the default language to opens up the ability to enable locale switching for testing of webpack builds.
  * Added the ability to enable New Relic Instrumentation.

## 1.1.0 - (June 5, 2018)

* Updates
  * Dependency updates

## 1.0.0 - (May 23, 2018)

* Breaking Change
  * Hot reloading (for most cases).
  * Fully dynamic page generation, beyond just site pages and tests.
  * More intelligent defaults, it's possible to enable terra-dev-site with zero config.
  * First class markdown document support.
  * Eliminate the need check-in the generated config.
  * Auto aliasing for mono-repo packages.
  * Favicon support.

## 0.6.0 - (May 8, 2018)

* Changed
  * Updated to use terra-application-layout v2.0.0

## 0.5.0 - (April 24, 2018)

* Breaking Changed
  * Webpack 4
  * Consume terra-toolkit v3
  * See [upgrade guide](https://github.com/cerner/terra-dev-site/blob/main/docs/TerraDevSiteUpgradeGuide-v0.5.0.md).

## 0.4.2 - (April 16, 2018)

* Changed
  * Load config into index.jsx statically instead of dynamically.

## 0.4.1 - (April 11, 2018)

* Changed
  * Removed express service script.

## 0.4.0 - (April 11, 2018)

* Fixed
  * Fixed issue where themes provided in site.config.js wouldn't render in utility menu

## 0.3.0 - (March 28, 2018)

* Changed
  * Consume terra-application-layout, remove custom layout
  * Consume RoutingMenu from terra-application-layout
  * A GitHub link extension can be added through config.

## 0.2.0 - (March 2, 2018)

* Added
  * Add generate-config bin script for quick access to the generate-component-config script

* Changed
  * Updated the default the search paths for test examples to search for `.example.jsx` to allow for more flexible file structure for test examples.
  * Remove the last layer of sub-navigation for non-test pages that should have nested navigation but only one page exists

## 0.1.0 - (February 26, 2018)

* Breaking
  * Renamed to terra-dev-site

## 2.0.0-RC.6 - (February 23, 2018)

* Fixed
  * Upgrade to react 16
  * Make the generate-component-config script compatible for windows devices
  * Added Jest Tests

## 2.0.0-RC.5 - (February 15, 2018)

* Fixed
  * Fix raw route from failing when no navigation is passed in.

## 2.0.0-RC.4 - (February 15, 2018)

* Added
  * Add support in generateComponentConfig for creating configuration from a terra repository that was installed as a package

* Changed
  * Update to React 16
  * Update webpack.config to only pass one globally defined DefinePlugin variable
  * Expose terra-framework-application-header extensions prop. To use this prop, add an extensions key to the navigation object in the navigation.config

* Fixed
  * Fix ES5 and ES6 module clashing in the site configurations
  * Fix Home page styling
  * Fix sub navigation creation to check if a a single site page contains additional sub navigation
  * Allow for custom Home pages
  * Update theming-plugin to only output themeable-variables.json in the root directory  * Generate routes and navigation for component configuration not containing sub-nav

```json
// config that does not contain the 'pages' or 'tests' keys
{
  name: 'Component',
  path: '/component',
  component: Component,
}
```

* Removed
  * Remove subtitle site config options to align with the coming Application Name Components
  * In navigation.config, removed `isStatic` key option in favor of only using `hasSubNav` key

## 2.0.0-RC.3 - (February 1, 2018)

* Changed
  * Set the default componentConfigPath to be the default generated-component-config output location.

* Fixed
  * Updates the site components to use Css Modules
  * Update webpack.config to allow for package-level testing
  * Update the application menu to display the correct navigation links at small sizes

## 2.0.0-RC.2 - (January 29, 2018)

* Changed
  * Emily broke bi-di with the previous releease, this one fixes it.

## 2.0.0-RC.1 - (January 29, 2018)

* Changed
  * Create additional raw test routes to keep tests at modular level.
  * In the generate-component-config, sort the found files to be in alphabetical order for navigation

* Fixed
  * Set the `hideBidiUtility` default prop to be false as mapped to the site config

## 2.0.0-RC.0 - (January 26, 2018)

Major Version Bump
Terra-dev-site has been enhanced from a site that displays docs, examples and tests of component packages contained
within the terra-core repository to be a package that dynamically builds a react-hash-routed site based on site
configuration, navigation configuration and component configuration.

Provides the following script:

* generate-component-config: generates the component configuration needed to build the site.

Provides the following default configuration:

* site.config.js: must supply the componentConfigPath
* navigation.config.js
* webpack.config.js
* webpack.prod.config.js

* Changed
  * Package dependencies
  * themeing-plugin.js was updated to be compatible on windows devices

* Removed
  * scr/examples
  * scr/assests
  * cerner-mock-theme.scss
  * themeable-variables.json
  * postcss.config.js

## 1.22.0 - (January 18, 2018)

* Changed
  * Add context to selectable list example

* Added
  * Add terra-form-radio components

## 1.21.0 - (January 5, 2018)

* Added
  * Added badge mock theme

* Changed
  * Update site and button examples to use V2
  * Fixed broken image in arrange example

## 1.20.0 - (December 5, 2017)

* Added
  * Add terra-time-input mock theme styles and 12 hour input examples.
  * Added styles for terra-modal content displaying div.

* Changed
  * Minor version bump
  * Place site header background on a parent div, instead of collapsible.

## 1.19.0 - (November 28, 2017)

* Changed
  * Minor version bump

## 1.18.0 - (November 16, 2017)

* Added
  * Add terra-form-checkbox components
  * Add terra-form-textarea components
  * Add terra-form-field components
  * Add terra-mock-theme styles

## 1.17.0 - (November 7, 2017)

* Changed
  * Minor version bump

## 1.16.0 - (October 31, 2017)

* Changed
  * Minor version bump

## 1.15.0 - (October 24, 2017)

* Changed
  * Lock webpack-dev-server at last version supporting IE10 (1.7.1)
  * Uplift site header to use collapsible menu view
  * Removing verbose build scripts and related files

## 1.14.0 - (October 12, 2017)

* Updated
  * Updated select component example with disabled options support
  * Updated content-container site examples to use appropriate header and content.
  * Updated webpack config to align with webpack 3 documentation

## 1.13.0 - (October 6, 2017)

* Changed
  * Minor version bump
  * Updated terra-toggle examples

## 1.12.0 - (September 26, 2017)

* Fixed
  * Updating theming-plugin match regex to allow for multiple fallback values.

* Added
  * Selectable Table Test Routes

* Changed
  * Break out list examples into their own pages.
  * Break out static and themeable icon examples into their own pages

## 1.11.0 - (September 19, 2017)

* Changed
  * Updated ArrangeAlignment to generate Ids with `_.uniqueId()`.
  * Fixed scroll reset to account for theme provider

* Fixed
  * Fixed title misspelling.
  * Bidi display of label-value pairs of input examples

## 1.10.0 - (September 12, 2017)

* Changed
  * Minor version bump

## 1.9.0 - (September 7, 2017)

* Changed
  * Minor version bump

## 1.8.0 - (September 5, 2017)

* Added
  * Added ThemeProvider component examples

## 1.7.0 - (August 31, 2017)

* Added
  * Added line-height styles to site-nav
  * Fixed prop-types error for invalid data type in search field examples

* Changed
  * Updated various examples to use `span` instead of `p` elements in sample content
  * Added ThemeProvider component examples
  * Added new relic script

## 1.6.0 - (August 15, 2017)

* Changed
  * Update site to use slide panel
  * Break out form component examples into their own packages

## 1.5.0 - (August 8, 2017)

* Changed
  * Display input and submission values for DatePicker, Form, SearchField and TimeInput examples.

## 1.4.0 - (August 1, 2017)

* Changed
  * Minor version bump

## 1.3.0 - (August 1, 2017)

* Added
  * Added new example to display date picker and popup inside modal.
  * Add test links for the Markdown component

* Changed
  * Updated PropsTable rendering to include component title for packages that contain multiple components.

## 1.2.0 - (July 26, 2017)

* Changed
  * Converted component to use CSS modules
  * Updated Search Field example to demonstrate onInvalidSearch.
  * Add Model Manager Test Link

## 1.1.0 - (July 18, 2017)

* Added
  * Added new feature terra-overlay to site page

* Changed
  * Moved DatePickers and TimeInput examples into their own files.

## 1.0.0 - (June 28, 2017)

* Initial stable release
