# Terra Date Picker

DatePicker is an input component that provides users a way to enter or select a date from the date picker. The date format used in the input is localized based on the locale. The display of the month and days of the week in the date picker is also localized based on the locale. The format for any date string set via the props must be in the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.

## Controlled vs. Uncontrolled Date Picker

Terra-date-picker can be composed either as a controlled or uncontrolled component. This allows you to decide the amount of control you need.

### Uncontrolled Date Picker

An uncontrolled date picker is the default mode. In the uncontrolled mode, a default date can be passed to the `selectedDate` prop to initially set as the default date. The date picker will manage all states internally. See the Default Date example below for implementation details.

### Controlled Date Picker

In a controlled date picker, the consumer is responsible for managing the state of the date value. The date picker does not manage any of state internally. This mode gives the consumer the flexibility to update the date value as needed. A controlled date picker can be composed by setting the `value` prop with an ISO date value. A handler is needed for both `onChange` and `onChangeRaw` to be notified when date selection or input change is made so the state can be updated. If both `value` and `selectedDate` are set, then `selectedDate` will have no effect. See the Controlled Component example below for implementation details.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-date-picker`
  - `yarn add terra-date-picker`

<!-- AUTO-GENERATED-CONTENT:START Peer Dependencies -->
## Peer Dependencies

This component requires the following peer dependencies be installed in your app for the component to properly function.

| Peer Dependency | Version |
|-|-|
| react | ^16.8.5 |
| react-dom | ^16.8.5 |
| react-intl | ^2.8.0 |

<!-- AUTO-GENERATED-CONTENT:END -->

## Implementation Notes:
DatePicker is required to be composed inside the [Base](https://github.com/cerner/terra-core/tree/master/packages/terra-base/docs) component with locale in order for it to load the correct date format and translation strings.

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)
* [Internationalization Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#internationalization-i18n-support)
* [Localization Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#internationalization-i18n-support)
