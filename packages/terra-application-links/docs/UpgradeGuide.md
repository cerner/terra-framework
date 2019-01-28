# Terra Application Links Upgrade Guide
## Changes from version 4 to version 5
### Changes to CSS Custom Properties

#### Renamed
| Previous | New |
|-|-|
| --terra-application-tabs-spacer-width | --terra-application-links-tabs-wrapper-padding-left |
| --terra-application-tabs-spacer-width | --terra-application-links-tabs-wrapper-padding-right |
| --terra-application-tabs-spacer-width | --terra-application-links-tabs-container-padding-left |
| --terra-application-tabs-spacer-width | --terra-application-links-tabs-container-padding-right |
| --terra-application-tabs-menu-arrow-left-margin | --terra-application-links-tabs-menu-arrow-margin-left |
| --terra-application-tabs-collapsed-color | --terra-application-links-tabs-collapsed-color |
| --terra-application-tabs-collapsed-font-size | --terra-application-links-tabs-collapsed-font-size |
| --terra-application-tabs-collapsed-padding-bottom | --terra-application-links-tabs-collapsed-padding-bottom |
| --terra-application-tabs-collapsed-padding-left | --terra-application-links-tabs-collapsed-padding-left |
| --terra-application-tabs-collapsed-padding-right | --terra-application-links-tabs-collapsed-padding-right |
| --terra-application-tabs-collapsed-padding-top | --terra-application-links-tabs-collapsed-padding-top |
| --terra-application-tabs-collapsed-hover-background-color | --terra-application-links-tabs-collapsed-hover-background-color |
| --terra-application-tabs-collapsed-selected-background-color | --terra-application-links-tabs-collapsed-selected-background-color |
| --terra-application-tabs-collapsed-selected-border-left | --terra-application-links-tabs-collapsed-selected-border-left |
| --terra-application-tabs-collapsed-selected-font-weight | --terra-application-links-tabs-collapsed-selected-font-weight |
| --terra-application-tabs-collapsed-selected-padding-left | --terra-application-links-tabs-collapsed-selected-padding-left |
| --terra-application-tabs-collapsed-selected-background-image | --terra-application-links-tabs-collapsed-selected-before-background-image |
| --terra-application-tabs-collapsed-focus-box-shadow | --terra-application-links-tabs-collapsed-active-focus-box-shadow |
| --terra-application-tabs-menu-content-background-color | --terra-application-links-tabs-menu-content-background-color |
| --terra-application-tabs-menu-content-color | --terra-application-links-tabs-menu-content-color |
| --terra-application-tabs-menu-list-padding-bottom | --terra-application-links-tabs-menu-list-padding-bottom |
| --terra-application-tabs-menu-list-padding-top | --terra-application-links-tabs-menu-list-padding-top |

#### Added
* --terra-application-links-tabs-tab-color
* --terra-application-links-tabs-tab-font-size
* --terra-application-links-tabs-tab-font-weight
* --terra-application-links-tabs-tab-line-height
* --terra-application-links-tabs-tab-text-transform
* --terra-application-links-tabs-tab-transition-duration
* --terra-application-links-tabs-tab-transition-timing-function
* --terra-application-links-tabs-tab-width
* --terra-application-links-tabs-tab-divider-before-background-color
* --terra-application-links-tabs-tab-divider-before-background-image
* --terra-application-links-tabs-tab-divider-before-border-left
* --terra-application-links-tabs-tab-divider-before-border-right
* --terra-application-links-tabs-tab-divider-before-width
* --terra-application-links-tabs-tab-background-color
* --terra-application-links-tabs-tab-background-position
* --terra-application-links-tabs-tab-background-size
* --terra-application-links-tabs-tab-box-shadow
* --terra-application-links-tabs-tab-position-left
* --terra-application-links-tabs-tab-padding-left
* --terra-application-links-tabs-tab-padding-right
* --terra-application-links-tabs-tab-hover-background-color
* --terra-application-links-tabs-tab-selected-font-weight
* --terra-application-links-tabs-tab-selected-text-shadow
* --terra-application-links-tabs-tab-selected-divider-before-background-color
* --terra-application-links-tabs-tab-selected-divider-before-background-image
* --terra-application-links-tabs-tab-selected-divider-before-border-left-color
* --terra-application-links-tabs-tab-selected-divider-before-border-right-color
* --terra-application-links-tabs-tab-selected-background-color
* --terra-application-links-tabs-tab-selected-background-image
* --terra-application-links-tabs-tab-selected-background-size
* --terra-application-links-tabs-tab-selected-box-shadow
* --terra-application-links-tabs-tab-active-focus-background-color
* --terra-application-links-tabs-tab-active-focus-box-shadow
* --terra-application-links-tabs-tab-selected-active-focus-background-color
* --terra-application-links-tabs-tab-selected-active-focus-box-shadow
* --terra-application-links-tabs-collapsed-active-focus-background-color

#### Removed
* --terra-application-tabs-background-position
* --terra-application-tabs-background-size
* --terra-application-tabs-border-right
* --terra-application-tabs-box-shadow
* --terra-application-tabs-color
* --terra-application-tabs-font-size
* --terra-application-tabs-line-height
* --terra-application-tabs-text-transform
* --terra-application-tabs-transition-duration
* --terra-application-tabs-transition-timing
* --terra-application-tab-width
* --terra-application-tabs-hover-background-color
* --terra-application-tabs-hover-background-color
* --terra-application-tabs-selected-background-image
* --terra-application-tabs-active-background-size
* --terra-application-tabs-focus-box-shadow
* --terra-application-tabs-border-left
* --terra-application-tabs-box-shadow
* --terra-application-tabs-first-child-focus-box-shadow
