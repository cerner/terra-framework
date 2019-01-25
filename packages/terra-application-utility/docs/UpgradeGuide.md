# Terra Application Utility Upgrade Guide
## Changes from version 1 to version 2
### Changes to CSS Custom Properties

#### Renamed
| Previous | New |
|-|-|
| --terra-application-header-utility-background-color | --terra-application-utility-header-background-color |
| --terra-application-header-utility-border-radius | --terra-application-utility-header-border-radius |
| --terra-application-header-utility-border-width | --terra-application-utility-header-border-width |
| --terra-application-header-utility-color | --terra-application-utility-header-color |
| --terra-application-header-utility-padding-left | --terra-application-utility-header-padding-left |
| --terra-application-header-utility-padding-right | --terra-application-utility-header-padding-right |
| --terra-application-header-utility-hover-background-color | --terra-application-utility-header-hover-background-color |
| --terra-application-header-utility-focus-box-shadow | --terra-application-utility-header-focus-box-shadow |
| --terra-application-header-utility-accessory-height | --terra-application-utility-header-accessory-height |
| --terra-application-header-utility-accessory-margin-right | --terra-application-utility-header-accessory-margin-right |
| --terra-application-header-utility-accessory-width | --terra-application-utility-header-accessory-width |
| --terra-application-header-utility-title-font-size | --terra-application-utility-header-title-font-size |
| --terra-application-header-utility-title-font-weight | --terra-application-utility-header-title-font-weight |
| --terra-application-header-utility-title-margin-right | --terra-application-utility-header-title-margin-right |
| --terra-application-menu-utility-background-color | --terra-application-utility-menu-background-color |
| --terra-application-menu-utility-border-right-width | --terra-application-utility-menu-border-bottom-width |
| --terra-application-menu-utility-border-left-width | --terra-application-utility-menu-border-left-width |
| --terra-application-menu-utility-border-radius | --terra-application-utility-menu-border-radius |
| --terra-application-menu-utility-border-right-width | --terra-application-utility-menu-border-right-width |
| --terra-application-menu-utility-border-top | --terra-application-utility-menu-border-top |
| --terra-application-menu-utility-color | --terra-application-utility-menu-color |
| --terra-application-menu-utility-padding-bottom | --terra-application-utility-menu-padding-bottom |
| --terra-application-menu-utility-padding-top | --terra-application-utility-menu-padding-top |
| --terra-application-menu-utility-hover-background-color | --terra-application-utility-menu-hover-background-color |
| --terra-application-menu-utility-focus-box-shadow | --terra-application-utility-menu-focus-box-shadow |
| --terra-application-menu-utility-accessory-height | --terra-application-utility-menu-accessory-height |
| --terra-application-menu-accessory-photo-margin-right | --terra-application-utility-menu-accessory-photo-margin-right |
| --terra-application-menu-utility-accessory-width | --terra-application-utility-menu-accessory-width |
| --terra-application-menu-utility-title-font-size | --terra-application-utility-menu-title-font-size |
| --terra-application-menu-utility-title-font-size | --terra-application-utility-menu-title-font-weight |
| --terra-application-menu-utility-title-margin-right | --terra-application-utility-menu-title-margin-right |
| --terra-application-header-utility-menu-background-color | --terra-application-utility-header-type-menu-background-color |
| --terra-application-menu-utility-menu-background-color | --terra-application-utility-menu-type-menu-background-color |
| --terra-application-header-utility-menu-header-font-size | --terra-application-utility-header-type-menu-header-font-size |
| --terra-application-header-utility-menu-header-font-weight | --terra-application-utility-header-type-menu-header-font-weight |
| --terra-application-header-utility-menu-header-line-height | --terra-application-utility-header-type-menu-header-line-height |
| --terra-application-header-utility-header-margin-top | --terra-application-utility-header-type-menu-header-margin-top |
| --terra-application-menu-utility-menu-header-font-size | --terra-application-utility-menu-type-menu-header-font-size |
| --terra-application-menu-utility-menu-header-font-weight | --terra-application-utility-menu-type-menu-header-font-weight |
| --terra-application-header-utility-menu-header-line-height | --terra-application-utility-menu-type-menu-header-line-height |
| --terra-application-menu-utility-header-margin-top | --terra-application-utility-menu-type-menu-header-margin-top |
| --terra-application-header-utility-header-margin-bottom | --terra-application-utility-header-type-menu-header-margin-bottom |
| --terra-application-menu-utility-header-margin-bottom | --terra-application-utility-menu-type-menu-header-margin-bottom |
| --terra-application-header-utility-menu-initial-page-header-text-margin-left | --terra-application-utility-header-type-menu-initial-page-header-text-margin-left |
| --terra-application-menu-utility-menu-initial-page-header-text-margin-left | --terra-application-utility-menu-type-menu-initial-page-header-text-margin-left |
| --terra-application-header-utility-menu-noninitial-page-header-text-margin-left | --terra-application-utility-header-type-menu-noninitial-page-header-text-margin-left |
| --terra-application-menu-utility-menu-noninitial-page-header-text-margin-left | --terra-application-utility-menu-type-menu-noninitial-page-header-text-margin-left |
| --terra-application-header-utility-menu-chevron-width | --terra-application-utility-header-type-menu-back-icon-width |
| --terra-application-menu-utility-menu-chevron-width | --terra-application-utility-menu-type-menu-back-icon-width |
| --terra-application-header-utility-menu-page-chevron-width | --terra-application-utility-header-type-menu-page-close-icon-width |
| --terra-application-menu-utility-menu-page-chevron-width | --terra-application-utility-menu-type-menu-page-close-icon-width |
| --terra-application-utility-menu-divider-border-bottom-width | --terra-application-utility-menu-divider-border-left-width |
| --terra-application-utility-menu-divider-border-bottom-right | --terra-application-utility-menu-divider-border-right-width |
| --terra-application-utility-menu-divider-border-bottom | --terra-application-utility-menu-divider-border-top |
| --terra-application-utility-menu-divider-after-border-bottom-width | --terra-application-utility-menu-divider-after-border-left-width |
| --terra-application-utility-menu-divider-after-border-bottom-right | --terra-application-utility-menu-divider-after-border-right-width |
| --terra-application-utility-menu-divider-border-after-bottom | --terra-application-utility-menu-divider-after-border-top |
| --terra-application-header-utility-menu-body-item-background-color | --terra-application-utility-header-body-item-background-color |
| --terra-application-header-utility-menu-body-item-font-color | --terra-application-utility-header-body-item-font-color |
| --terra-application-header-utility-menu-body-item-font-size | --terra-application-utility-header-body-item-font-size |
| --terra-application-header-utility-menu-body-item-margin-bottom | --terra-application-utility-header-body-item-margin-bottom |
| --terra-application-header-utility-menu-body-item-margin-top | --terra-application-utility-header-body-item-margin-top |
| --terra-application-header-utility-menu-body-item-padding-bottom | --terra-application-utility-header-body-item-padding-bottom |
| --terra-application-header-utility-menu-body-item-padding-left | --terra-application-utility-header-body-item-padding-left |
| --terra-application-header-utility-menu-body-item-padding-top | --terra-application-utility-header-body-item-padding-top |
| --terra-application-header-utility-menu-body-item-margin-left | --terra-application-utility-header-body-item-margin-left |
| --terra-application-header-utility-menu-body-item-margin-right | --terra-application-utility-header-body-item-margin-right |
| --terra-application-header-utility-menu-body-item-hover-background-color | --terra-application-utility-header-body-item-hover-background-color |
| --terra-application-header-utility-menu-body-item-focus-box-shadow | --terra-application-utility-header-body-item-focus-box-shadow |
| --terra-application-header-utility-menu-body-item-checkmark-margin-left | --terra-application-utility-header-body-item-checkmark-margin-left |
| --terra-application-header-utility-menu-body-item-checkmark-margin-right | --terra-application-utility-header-body-item-checkmark-margin-right |
| --terra-application-header-utility-menu-body-item-checkmark-width | --terra-application-utility-header-body-item-checkmark-width |
| --terra-application-header-utility-menu-body-item-chevron-margin-right | --terra-application-utility-header-body-item-chevron-margin-right |
| --terra-application-header-utility-menu-body-item-chevron-width | --terra-application-utility-header-body-item-chevron-width |
| --terra-application-header-utility-menu-footer-item-background-color | --terra-application-utility-header-footer-item-background-color |
| --terra-application-header-utility-menu-footer-item-font-color | --terra-application-utility-header-footer-item-font-color |
| --terra-application-header-utility-menu-footer-item-font-size | --terra-application-utility-header-footer-item-font-size |
| --terra-application-header-utility-menu-footer-item-margin-bottom | --terra-application-utility-header-footer-item-margin-bottom |
| --terra-application-header-utility-menu-footer-item-margin-left | --terra-application-utility-header-footer-item-margin-left |
| --terra-application-header-utility-menu-footer-item-margin-right | --terra-application-utility-header-footer-item-margin-right |
| --terra-application-menu-utility-menu-body-item-background-color | --terra-application-utility-menu-body-item-background-color |
| --terra-application-menu-utility-menu-body-item-font-color | --terra-application-utility-menu-body-item-font-color |
| --terra-application-menu-utility-menu-body-item-font-size | --terra-application-utility-menu-body-item-font-size |
| --terra-application-menu-utility-menu-body-item-margin-bottom | --terra-application-utility-menu-body-item-margin-bottom |
| --terra-application-menu-utility-menu-body-item-margin-top | --terra-application-utility-menu-body-item-margin-top |
| --terra-application-menu-utility-menu-body-item-padding-bottom | --terra-application-utility-menu-body-item-padding-bottom |
| --terra-application-menu-utility-menu-body-item-padding-left | --terra-application-utility-menu-body-item-padding-left |
| --terra-application-menu-utility-menu-body-item-padding-top | --terra-application-utility-menu-body-item-padding-top |
| --terra-application-menu-utility-menu-body-item-margin-left | --terra-application-utility-menu-body-item-margin-left |
| --terra-application-menu-utility-menu-body-item-margin-right | --terra-application-utility-menu-body-item-margin-right |
| --terra-application-menu-utility-menu-body-item-hover-background-color | --terra-application-utility-menu-body-item-hover-background-color |
| --terra-application-menu-utility-menu-body-item-focus-box-shadow | --terra-application-utility-menu-body-item-focus-box-shadow |
| --terra-application-menu-utility-menu-body-item-checkmark-margin-left | --terra-application-utility-menu-body-item-checkmark-margin-left |
| --terra-application-menu-utility-menu-body-item-checkmark-margin-right | --terra-application-utility-menu-body-item-checkmark-margin-right |
| --terra-application-menu-utility-menu-body-item-checkmark-width | --terra-application-utility-menu-body-item-checkmark-width |
| --terra-application-menu-utility-menu-body-item-chevron-margin-right | --terra-application-utility-menu-body-item-chevron-margin-right |
| --terra-application-menu-utility-menu-body-item-chevron-width | --terra-application-utility-menu-body-item-chevron-width |
| --terra-application-menu-utility-menu-footer-item-background-color | --terra-application-utility-menu-footer-item-background-color |
| --terra-application-menu-utility-menu-footer-item-font-color | --terra-application-utility-menu-footer-item-font-color |
| --terra-application-menu-utility-menu-footer-item-font-size | --terra-application-utility-menu-footer-item-font-size |
| --terra-application-menu-utility-menu-footer-item-margin-bottom | --terra-application-utility-menu-footer-item-margin-bottom |
| --terra-application-menu-utility-menu-footer-item-margin-left | --terra-application-utility-menu-footer-item-margin-left |
| --terra-application-menu-utility-utility-menu-footer-item-margin-bottom | --terra-application-utility-menu-footer-item-margin-right |

#### Added
* --terra-application-utility-header-height
* --terra-application-utility-header-justify-content
* --terra-application-utility-header-hover-icon-color
* --terra-application-utility-header-focus-background-color
* --terra-application-utility-header-focus-icon-color
* --terra-application-utility-header-icon-color
* --terra-application-utility-header-icon-width
* --terra-application-utility-menu-padding-left
* --terra-application-utility-menu-padding-right
* --terra-application-utility-menu-hover-icon-color
* --terra-application-utility-menu-focus-background-color
* --terra-application-utility-menu-focus-icon-color
* --terra-application-utility-menu-icon-color
* --terra-application-utility-menu-icon-width
* --terra-application-utility-header-type-menu-header-color
* --terra-application-utility-menu-type-menu-header-color
* --terra-application-utility-header-type-menu-header-min-height
* --terra-application-utility-header-type-menu-button-close-display
* --terra-application-utility-header-type-menu-page-display
* --terra-application-utility-menu-margin-bottom
* --terra-application-utility-header-body-item-checkmark-hover-color
* --terra-application-utility-header-body-item-chevron-hover-color
* --terra-application-utility-header-body-item-focus-background-color
* --terra-application-utility-header-body-item-checkmark-focus-color
* --terra-application-utility-header-body-item-chevron-focus-color
* --terra-application-utility-header-body-item-checkmark-color
* --terra-application-utility-header-body-item-chevron-color
* --terra-application-utility-header-footer-item-margin-top
* --terra-application-utility-menu-body-item-checkmark-hover-color
* --terra-application-utility-menu-body-item-chevron-hover-color
* --terra-application-utility-menu-body-item-focus-background-color
* --terra-application-utility-menu-body-item-checkmark-focus-color
* --terra-application-utility-menu-body-item-chevron-focus-color
* --terra-application-utility-menu-body-item-checkmark-color
* --terra-application-utility-menu-body-item-chevron-color
* --terra-application-utility-menu-footer-item-margin-top

#### Removed
* --terra-application-header-utility-icon-min-width
* --terra-application-menu-utility-icon-min-width
* --terra-application-header-utility-menu-footer-item-border-radius
* --terra-application-header-utility-menu-footer-item-height
* --terra-application-menu-utility-menu-footer-item-border-radius
* --terra-application-menu-utility-menu-footer-item-height
