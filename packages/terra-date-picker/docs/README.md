# Terra Date Picker

DatePicker is an input component that provides users a way to enter or select a date from the date picker. DatePicker is essentially a wrapper for [react-datepicker][1] and leverages many of its props. One important difference between DatePicker and [react-datepicker][1] is that all of the date props in [react-datepicker][1] must be a [moment][2] object whereas the date props in DatePicker are ISO 8601 representation of the date.

## Controlled vs. Uncontrolled Date Picker

Terra-date-picker can be composed either as a controlled or uncontrolled component. This allows you to decide the amount of control you need.

### Uncontrolled Date Picker

An uncontrolled date picker is the default mode. In the uncontrolled mode, a default date can be passed to the `selectedDate` prop to initially set as the default date. The date picker will manage all states internally. See the Default Date example below for implementation details.

### Controlled Date Picker

In a controlled date picker, the consumer is responsible for managing the state of the date value. The date picker does not manage any of state internally. This mode give the consumer the flexibility to update the date value as needed. A controlled date picker can be composed by setting the `value` prop with a ISO date value. A handler is needed for both `onChange` and `onChangeRaw` to be notified when date selection and input change are made so the state can be updated. If both `value` and `selectedDate` are set, then `selectedDate` will have no effect. See the Default Component example below for implementation details.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-date-picker`
  - `yarn add terra-date-picker`


## Implementation Notes:
DatePicker is required to be composed inside the [Base][3] component with locale in order for it to load the correct date format and translation strings.

[1]: https://github.com/Hacker0x01/react-datepicker
[2]: http://momentjs.com/docs/
[3]: https://github.com/cerner/terra-core/tree/master/packages/terra-base/docs

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)
* [Internationalization Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#internationalization-i18n-support)
* [Localization Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#internationalization-i18n-support)
