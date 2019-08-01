# Terra Date Time Picker

The DateTimePicker component composes the [DatePicker][1] component for selecting date and the [TimeInput][2] component for entering time. DateTimePicker supports the Spring and Fall daylight saving time changes in the following behaviors:

Spring: If you enter a date and time that falls within the missing hour during the Spring time change, the time will automatically be adjusted to the next relevant hour when the component loses focus. In the central time zone, the missing hour occurs between 2:00 and 2:59. For example, if the entered time is 2:15, the component will automatically adjust the time to the next hour at 3:15.

Fall: If you enter a date and time that falls within the ambiguous hour during the Fall time change, the component will display a dialog to require you to select daylight or standard time. After a selection is made a button will be displayed with a label showing the selected option.


## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-date-time-picker`

<!-- AUTO-GENERATED-CONTENT:START Peer Dependencies -->
## Peer Dependencies

<details>
<summary>View information on this component's peer dependencies.</summary>

This component requires the following peer dependencies be installed in your app for the component to properly function.

| Peer Dependency | Version |
|-|-|
| react | ^16.8.5 |
| react-dom | ^16.8.5 |
| react-intl | ^2.8.0 |


</details>
<!-- AUTO-GENERATED-CONTENT:END -->

## Implementation Notes:
DateTimePicker is required to be composed inside the [Base][3] component with locale in order for it to load the correct date format and translation strings.

[1]: https://github.com/cerner/terra-framework/tree/master/packages/terra-date-picker/docs
[2]: https://github.com/cerner/terra-framework/tree/master/packages/terra-time-input/docs
[3]: https://github.com/cerner/terra-core/tree/master/packages/terra-base/docs


## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)
* [Internationalization Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#internationalization-i18n-support)
* [Localization Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#internationalization-i18n-support)
* [LTR/RTL Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#ltr--rtl-support)
