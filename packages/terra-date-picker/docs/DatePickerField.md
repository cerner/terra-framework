# Terra Date Picker Field

[terra-date-picker](https://github.com/cerner/terra-framework/tree/master/packages/terra-date-picker) component that is wrapped inside a
[terra-form-field](https://github.com/cerner/terra-core/tree/master/packages/terra-form-field) component.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-date-picker`
  - `yarn add terra-date-picker`


## Implementation Notes:
DatePickerField is required to be composed inside the [Base][4] component with locale in order for it to load the correct date format and translation strings.

The [Modal][2] component by default will trap focus. In order to interact with the date picker when rendered inside a modal, the date picker must request focus from the modal. The [App Delegate][3] in the [Modal Manager][1] component provides support for requesting and releasing focus from the modal. Therefore, the [Modal Manager][1] component must be used when rendering the date picker in a modal. When composing the date picker in the [Modal Manager][1], pass in the requestFocus and releaseFocus functions in the [App Delegate][3] to the requestFocus and releaseFocus props in the date picker. The [Modal Manager][1] will facilitate requesting and releasing focus when the picker opens and closes. Take a look at this example for composing a [modal manager][5] with a date picker as the [content][6].

[1]: https://github.com/cerner/terra-framework/tree/master/packages/terra-modal-manager/docs
[2]: https://github.com/cerner/terra-core/tree/master/packages/terra-modal/docs
[3]: https://github.com/cerner/terra-core/tree/master/packages/terra-app-delegate/docs
[4]: https://github.com/cerner/terra-core/tree/master/packages/terra-base/docs
[5]: https://github.com/cerner/terra-framework/blob/master/packages/terra-date-picker/tests/nightwatch/components/DatePickerInsideModal.jsx
[6]: https://github.com/cerner/terra-framework/blob/master/packages/terra-date-picker/tests/nightwatch/components/DatePickerModalContainer.jsx

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)
* [Internationalization Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#internationalization-i18n-support)
* [Localization Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#internationalization-i18n-support)
