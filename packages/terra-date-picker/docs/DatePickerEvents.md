# Terra Date Picker - Events

## Events
terra-date-picker has several callback events that are slightly different in behavior from the native counterparts.

### onBlur
* The `onBlur` callback prop is triggered only when the entire component loses focus. If the focus is moved from the date input to the calendar button, the `onBlur` event will not be triggered since the focus is still within the date picker component. The `onBlur` event would be triggered when the focus is moved to any element that is not a child node of the date picker.

### onChange
* The `onChange` callback prop is triggered only when a valid date that conforms to the format is entered directly in the date input or selected from the date picker.

### onChangeRaw
* The `onChangeRaw` callback prop is triggered whenever any key is entered in the date input. If the entered value happens to be a valid date, both the `onChangeRaw` and `onChange` events will be triggered. The `onChangeRaw` event would be triggered first followed by the `onChange` event.

### onClickOutside
* The `onClickOutside` callback prop is triggered when clicking anywhere outside of the date picker to dismiss it.

### onFocus
* The `onFocus` callback prop is triggered when the component initially gains focus. If the focus is moved from the date input to the calendar button, the `onFocus` event will not be triggered since the focus is still within the date picker component. Like the `onBlur` event, the `onFocus` event does not get triggered when the focus is moved within child node of the Date Picker component to another child node of the same Date Picker component.

### onSelect
* The `onSelect` callback prop is triggered when a date is selected from the date picker. Once a date is selected, the `onChange` event will be triggered first followed by the `onSelect` event.

## Event Trigger Order
When these actions are taken, the events are triggered in the following order.
* Manual date entry - onChangeRaw followed by onChange (if the date entry is a valid date).
* Selection from picker - onChange followed by onSelect.
