import React from 'react';
import { injectIntl } from 'react-intl';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import DatePicker from 'terra-date-picker';
import TimeInput from 'terra-time-input';
import * as KeyCode from 'keycode-js';
import DateUtil from 'terra-date-picker/lib/DateUtil';
import styles from './DateTimePicker.module.scss';
import DateTimeUtils from './DateTimeUtils';
import TimeClarification from './_TimeClarification';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Custom input attributes to apply to the date input. Use the name prop to set the name for the date input.
   * Do not set the name in inputAttribute as it will be ignored.
   */
  dateInputAttributes: PropTypes.object,
  /**
   * Whether the date and time inputs should be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * An array of ISO 8601 string representation of the dates to disable in the picker. The values must be in the `YYYY-MM-DDThh:mm:ss` format.
   */
  excludeDates: PropTypes.arrayOf(PropTypes.string),
  /**
   * A function that gets called for each date in the picker to evaluate which date should be disabled.
   * A return value of true will be enabled and false will be disabled.
   */
  filterDate: PropTypes.func,
  /**
   * An array of ISO 8601 string representation of the dates to enable in the picker. The values must be in the `YYYY-MM-DDThh:mm:ss` format.
   * All Other dates will be disabled.
   */
  includeDates: PropTypes.arrayOf(PropTypes.string),
  /**
   * Timezone value to indicate in which timezone the date-time component is rendered.
   * The value provided should be a valid [timezone](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) string, else will default to browser/local timezone.
   * Note: This value is considered only for the initial render. Changes to an already set time zone will reset to the first set time zone.
   */
  initialTimeZone: PropTypes.string,
  /**
   * intl object programmatically imported through injectIntl from react-intl.
   * */
  intl: PropTypes.shape({ locale: PropTypes.string }).isRequired,
  /**
  * Whether the input displays as Incomplete. Use when no value has been provided. _(usage note: `required` must also be set)_.
  */
  isIncomplete: PropTypes.bool,
  /**
  * Whether the input displays as Invalid. Use when value does not meet validation pattern.
  */
  isInvalid: PropTypes.bool,
  /**
  * Whether the selected meridiem displays as Invalid. Use when value does not meet validation pattern.
  */
  isInvalidMeridiem: PropTypes.bool,
  /**
   * The label of the form control children.
   */
  label: PropTypes.node.isRequired,
  /**
   * An ISO 8601 string representation of the maximum date that can be selected in the date picker. The value must be in the `YYYY-MM-DD` format. Must be on or before `12/31/2100`.
   * The time portion in this value is ignored because this is strictly used in the date picker.
   */
  maxDate: PropTypes.string,
  /**
   * An ISO 8601 string representation of the minimum date that can be selected in the date picker. The value must be in the `YYYY-MM-DD` format. Must be on or after `01/01/1900`.
   * The time portion in this value is ignored because this is strictly used in the date picker.
   */
  minDate: PropTypes.string,
  /**
   * Name of the date input. The name should be unique.
   */
  name: PropTypes.string.isRequired,
  /**
   * A callback function triggered when the entire date time picker component loses focus.
   * This event does not get triggered when the focus is moved from the date input to the time input because the focus is still within the main date time picker component.
   * The first parameter is the event. The second parameter is the metadata to describe the current state of the input value at the time when the onBlur callback is triggered.
   */
  onBlur: PropTypes.func,
  /**
   * A callback function to execute when a valid date is selected or entered.
   * The first parameter is the event. The second parameter is the changed input value. The third parameter is the metadata to describe the current state of the input value at the time when the onChange callback is triggered.
   */
  onChange: PropTypes.func,
  /**
   * A callback function to execute when a change is made in the date or time input.
   * The first parameter is the event. The second parameter is the changed input value. The third parameter is the metadata to describe the current state of the input value at the time when the onChangeRaw callback is triggered
   */
  onChangeRaw: PropTypes.func,
  /**
   * **Deprecated**, A callback function to execute when clicking outside of the picker to dismiss it. Resolves to `onRequestClose`.
   */
  onClickOutside: PropTypes.func,
  /**
   * A callback function triggered when the date input, hour input, or minute input receives focus.
   */
  onFocus: PropTypes.func,
  /**
   * A callback function to execute when picker is dismissed. onRequestClose(event)
   */
  onRequestClose: PropTypes.func,
  /**
   * A callback function to execute when a selection is made in the date picker.
   * The first parameter is the event. The second parameter is the selected input value in ISO format.
   */
  onSelect: PropTypes.func,
  /**
   * Whether or not the date is required.
   */
  required: PropTypes.bool,
  /**
   * Whether an input field for seconds should be shown or not. If true then the second field must have a valid
   * number for the overall input to be considered valid.
   */
  showSeconds: PropTypes.bool,
  /**
   * Custom input attributes to apply to the time input. Use the name prop to set the name for the time input.
   * Do not set the name in inputAttribute as it will be ignored.
   */
  timeInputAttributes: PropTypes.object,
  /**
   * An ISO 8601 string representation of the initial value to show in the date and time inputs. The value must be in the `YYYY-MM-DDThh:mm:ss` format.
   */
  value: PropTypes.string,
  /**
   * Type of time input to initialize. Must be `24-hour` or `12-hour`.
   * The `de`, `es-ES`, `es`, `fr-FR`, `fr`, `nl-BE`, `nl`, `pt-BR`, `pt`, `sv-SE` and `sv` locales do not use the 12-hour time notation.
   * If the `variant` prop if set to `12-hour` for one of these supported locales, the variant will be ignored and defaults to `24-hour`.
   */
  timeVariant: PropTypes.oneOf([DateTimeUtils.FORMAT_12_HOUR, DateTimeUtils.FORMAT_24_HOUR]),
};

const defaultProps = {
  dateInputAttributes: undefined,
  disabled: false,
  excludeDates: undefined,
  filterDate: undefined,
  includeDates: undefined,
  isIncomplete: false,
  isInvalid: false,
  isInvalidMeridiem: false,
  maxDate: '2100-12-31',
  minDate: '1900-01-01',
  onBlur: undefined,
  onChange: undefined,
  onChangeRaw: undefined,
  onClickOutside: undefined,
  onFocus: undefined,
  onSelect: undefined,
  required: false,
  showSeconds: false,
  timeInputAttributes: undefined,
  value: undefined,
  timeVariant: DateTimeUtils.FORMAT_24_HOUR,
  initialTimeZone: DateTimeUtils.getLocalTimeZone(),
};

class DateTimePicker extends React.Component {
  constructor(props) {
    super(props);

    this.initialTimeZone = DateTimeUtils.checkIfTimeZoneIsValid(props.initialTimeZone);

    this.state = {
      dateTime: DateTimeUtils.createSafeDate(props.value, this.initialTimeZone),
      isAmbiguousTime: false,
      isTimeClarificationOpen: false,
      dateFormat: DateUtil.getFormatByLocale(props.intl.locale),
    };

    // The dateValue and timeValue variables represent the actual value in the date input and time input respectively.
    // They are used to keep track of the currently entered value to determine whether or not the entry is valid.
    // Unlike dateValue and timeValue, this.state.dateTime is the internal moment object representing both the date and time as one entity
    // It is used for date/time manipulation and used to calculate the missing/ambiguous hour.
    // The dateValue and timeValue are tracked outside of the react state to limit the number of renderings that occur.
    this.dateValue = DateUtil.formatMomentDate(this.state.dateTime, this.state.dateFormat) || '';
    this.timeValue = DateTimeUtils.hasTime(this.props.value, this.initialTimeZone) ? DateTimeUtils.getTime(this.props.value, this.props.showSeconds, this.initialTimeZone) : '';
    this.isDefaultDateTimeAcceptable = true;
    this.wasOffsetButtonClicked = false;

    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleDateChangeRaw = this.handleDateChangeRaw.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleOnSelect = this.handleOnSelect.bind(this);
    this.handleOnDateBlur = this.handleOnDateBlur.bind(this);
    this.handleOnTimeBlur = this.handleOnTimeBlur.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleDaylightSavingButtonClick = this.handleDaylightSavingButtonClick.bind(this);
    this.handleStandardTimeButtonClick = this.handleStandardTimeButtonClick.bind(this);
    this.handleOnDateInputFocus = this.handleOnDateInputFocus.bind(this);
    this.handleOnTimeInputFocus = this.handleOnTimeInputFocus.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleOnCalendarButtonClick = this.handleOnCalendarButtonClick.bind(this);
    this.handleOffsetButtonClick = this.handleOffsetButtonClick.bind(this);
    this.handleOnRequestClose = this.handleOnRequestClose.bind(this);
    this.dateTimePickerContainer = React.createRef();
    this.containerHasFocus = false;
    this.prevDateTime = DateTimeUtils.createSafeDate(props.value, this.initialTimeZone);
  }

  componentDidMount() {
    this.isDefaultDateAcceptable = this.validateDefaultDate();
  }

  componentDidUpdate() {
    // If the entered time (this.timeValue) is the missing hour during daylight savings,
    // it needs to be updated to the time in this.state.dateTime to reflect the change and force a render.
    if (this.state.dateTime && DateTimeUtils.isValidTime(this.timeValue, this.props.showSeconds)) {
      const displayedTime = DateTimeUtils.getTime(this.state.dateTime.format(), this.props.showSeconds, this.initialTimeZone);

      if (this.timeValue !== displayedTime) {
        this.timeValue = displayedTime;
        this.forceUpdate();
      }
    }
  }

  handleOnSelect(event, selectedDate) {
    this.dateValue = DateUtil.formatISODate(selectedDate, this.state.dateFormat);
    const previousDateTime = this.state.dateTime ? this.state.dateTime.clone() : null;
    const updatedDateTime = DateTimeUtils.syncDateTime(previousDateTime, selectedDate, this.timeValue, this.props.showSeconds);

    if (!previousDateTime || previousDateTime.format() !== updatedDateTime.format()) {
      this.checkAmbiguousTime(updatedDateTime);
    }

    if (this.props.onSelect) {
      this.props.onSelect(event, updatedDateTime.format());
    }
  }

  handleOnDateBlur(event) {
    // Modern browsers support event.relatedTarget but event.relatedTarget returns null in IE 10 / IE 11.
    // IE 11 sets document.activeElement to the next focused element before the blur event is called.
    const activeTarget = event.relatedTarget ? event.relatedTarget : document.activeElement;

    // Handle blur only if focus has moved out of the entire date time picker component.
    if (!this.dateTimePickerContainer.current.contains(activeTarget)) {
      const isDateTimeValid = DateTimeUtils.isValidDateTime(this.dateValue, this.timeValue, this.state.dateFormat, this.props.showSeconds);
      const enteredDateTime = isDateTimeValid ? this.state.dateTime : null;

      this.checkAmbiguousTime(enteredDateTime, () => {
        // If the entered time is ambiguous then do not handle blur just yet. It should be handled _after_
        // the ambiguity is resolved (i.e., after dismissing the Time Clarification dialog).
        event.persist();
        if (!(this.state.isAmbiguousTime && this.state.isTimeClarificationOpen)) {
          this.handleBlur(event, this.state.dateTime);
        }
      });
    }
  }

  handleOnTimeBlur(event) {
    // Modern browsers support event.relatedTarget but event.relatedTarget returns null in IE 10 / IE 11.
    // IE 11 sets document.activeElement to the next focused element before the blur event is called.
    const activeTarget = event.relatedTarget ? event.relatedTarget : document.activeElement;

    // Handle blur only if focus has moved out of the entire date time picker component.
    if (!this.dateTimePickerContainer.current.contains(activeTarget)) {
      const isDateTimeValid = DateTimeUtils.isValidDateTime(this.dateValue, this.timeValue, this.state.dateFormat, this.props.showSeconds);
      let updatedDateTime;

      if (isDateTimeValid) {
        updatedDateTime = DateTimeUtils.updateTime(this.state.dateTime, this.timeValue, this.props.showSeconds);
      }

      this.checkAmbiguousTime(updatedDateTime, () => {
        event.persist();
        // If the entered time is ambiguous then do not handle blur just yet. It should be handled _after_
        // the ambiguity is resolved (i.e., after dismissing the Time Clarification dialog).
        if (!(this.state.isAmbiguousTime && this.state.isTimeClarificationOpen)) {
          this.handleBlur(event, this.state.dateTime);
        }
      });
    }
  }

  handleBlur(event, momentDateTime) {
    if (this.props.onBlur) {
      const metadata = this.getMetadata(momentDateTime);
      this.props.onBlur(event, metadata);
    }

    this.containerHasFocus = false;
  }

  handleDateChange(event, date) {
    let updatedDateTime;
    const formattedDate = DateUtil.formatISODate(date, 'YYYY-MM-DD');
    const isDateValid = DateUtil.isValidDate(formattedDate, 'YYYY-MM-DD');
    const isTimeValid = DateTimeUtils.isValidTime(this.timeValue, this.props.showSeconds);

    if (isDateValid) {
      this.dateValue = DateUtil.formatISODate(date, this.state.dateFormat);
    }

    if (isDateValid) {
      const previousDateTime = this.state.dateTime ? this.state.dateTime.clone() : DateTimeUtils.createSafeDate(formattedDate, this.initialTimeZone);
      updatedDateTime = DateTimeUtils.syncDateTime(previousDateTime, date, this.timeValue, this.props.showSeconds);

      // Conditions to subtract an hour when date is moved past the start of DST when navigating using keyboard shortcut keys.
      if (previousDateTime.isDST() && previousDateTime.hours() === 3) {
        let isHourSubtracted = false;
        if (!updatedDateTime.isDST()) {
          updatedDateTime.subtract(1, 'hours');
          isHourSubtracted = true;
        }

        if (!previousDateTime.subtract(1, 'days').isDST() && updatedDateTime.isDST()) {
          updatedDateTime.subtract(1, 'hours');
          isHourSubtracted = true;
        }

        // Condition to add back an hour if initial time was 3AM and date is moved past start of DST.
        // eslint-disable-next-line no-underscore-dangle
        if (previousDateTime && previousDateTime._a[3] === 3 && isHourSubtracted) {
          updatedDateTime.add(1, 'hours');
          isHourSubtracted = false;
        }
      }

      // Conditions to subtract an hour when date is moved past the start of DST when using keyboard to input (Numeric Keys and Delete).
      // eslint-disable-next-line no-underscore-dangle
      if (this.prevDateTime && this.prevDateTime._a[3] === 2 && this.prevDateTime.hours() === 3) {
        updatedDateTime.subtract(1, 'hours');
      }

      if (isTimeValid) {
        // Update the timeValue in case the updatedDateTime falls in the missing hour and needs to bump the hour up.
        this.timeValue = DateTimeUtils.getTime(updatedDateTime.format(), this.props.showSeconds, this.initialTimeZone);
      }
    }

    // onChange should only be triggered when both the date and time values are valid or both values are empty/cleared.
    if ((isDateValid && isTimeValid) || (this.dateValue === '' && this.timeValue === '')) {
      this.handleChange(event, updatedDateTime);
    } else {
      this.setState({ dateTime: updatedDateTime });
    }
  }

  handleDateChangeRaw(event, value) {
    this.dateValue = value;
    const validDate = DateUtil.isValidDate(this.dateValue, this.state.dateFormat) && this.isDateTimeAcceptable(DateTimeUtils.convertDateTimeStringToMomentObject(this.dateValue, this.timeValue, this.state.dateFormat, this.props.showSeconds, this.initialTimeZone));
    if (!validDate) {
      this.prevDateTime = this.state.dateTime ? this.state.dateTime : this.prevDateTime;
      this.setState({
        dateTime: null,
      });
    }
    this.handleChangeRaw(event, value);
  }

  handleTimeChange(event, time) {
    this.timeValue = time;
    let validDate = DateUtil.isValidDate(this.dateValue, this.state.dateFormat) && this.isDateTimeAcceptable(DateTimeUtils.convertDateTimeStringToMomentObject(this.dateValue, this.timeValue, this.state.dateFormat, this.props.showSeconds, this.initialTimeZone));
    const validTime = DateTimeUtils.isValidTime(this.timeValue, this.props.showSeconds);
    let previousDateTime = this.state.dateTime ? this.state.dateTime.clone() : null;
    let dateChanged = false;

    if (event.type === 'keydown') {
      // Keyboard shortcut is pressed, split the time value into hour and minute inputs
      const timeArray = this.timeValue.split(':');
      if (event.key === 'n' || event.key === 'N') {
        // `N` sets Time to now, so Date should be set to today
        previousDateTime = DateUtil.createSafeDate(DateUtil.getCurrentDate(), this.initialTimeZone);
        dateChanged = true;
      } else if (event.key === '-' || event.key === '_') {
        // `-` subtracts 1 minute`from time, so check date to see if it needs changed
        if (!validDate) {
          // Date is not valid, set date to today making it valid
          previousDateTime = DateUtil.createSafeDate(DateUtil.getCurrentDate(), this.initialTimeZone);
          dateChanged = true;
        }

        if (timeArray[0] === '23' && timeArray[1] === '59') {
          // Time is 23:59 which means previous datetime should be on the wrong day, lower it by 1
          previousDateTime = previousDateTime.subtract(1, 'd');
          dateChanged = true;
        }

        const changedDateTime = DateTimeUtils.updateTime(previousDateTime, this.timeValue, this.props.showSeconds);
        const checkHour = previousDateTime.clone().subtract(1, 'minute').hours();
        if (changedDateTime.isDST() && checkHour !== changedDateTime.hours()) {
          // Datetime falls under DST and hour is wrong using moment logic, so rewrite it using moment logic
          timeArray[0] = (`0${checkHour}`).slice(-2);
          this.timeValue = timeArray.join(':');
        }

        // Check if date is at or below minium
        if (previousDateTime.isBefore(DateUtil.MIN_DATE.concat(' ', '00:00:00'))) {
          timeArray[0] = '00';
          timeArray[1] = '00';
          if (this.props.showSeconds) {
            timeArray[2] = '00';
          }
          this.timeValue = timeArray.join(':');
          previousDateTime = DateTimeUtils.updateTime(DateUtil.createSafeDate(DateUtil.MIN_DATE, this.initialTimeZone), this.timeValue, this.props.showSeconds);
        }
      } else if (event.key === '=' || event.key === '+') {
        // `+` add 1 minute to time, so check date to see if it needs changed
        if (!validDate) {
          // Date is not valid, set date to today making it valid
          previousDateTime = DateUtil.createSafeDate(DateUtil.getCurrentDate(), this.initialTimeZone);
          dateChanged = true;
        }

        if (timeArray[0] === '00' && timeArray[1] === '00') {
          // Time is 00:00 which means previous datetime should be on the wrong day, increase it by 1
          previousDateTime = previousDateTime.add(1, 'd');
          dateChanged = true;
        }

        // Check if date is at or below minium
        if (previousDateTime.isAfter(DateUtil.MAX_DATE.concat(' ', '23:59:59'))) {
          timeArray[0] = '23';
          timeArray[1] = '59';
          if (this.props.showSeconds) {
            timeArray[2] = '59';
          }
          this.timeValue = timeArray.join(':');
          previousDateTime = DateTimeUtils.updateTime(DateUtil.createSafeDate(DateUtil.MAX_DATE, this.initialTimeZone), this.timeValue, this.props.showSeconds);
        }
      } else if (this.props.timeVariant === DateTimeUtils.FORMAT_12_HOUR && (event.key === 'a' || event.key === 'A' || event.key === 'p' || event.key === 'P')) {
        // `A` and `P`, changes the meridiem, so check date to see if it needs changed
        if (!validDate) {
          // Date is not valid, set date to today making it valid
          previousDateTime = DateUtil.createSafeDate(DateUtil.getCurrentDate(), this.initialTimeZone);
          dateChanged = true;
        }
      }
    }
    if (dateChanged) {
      this.dateValue = DateUtil.formatISODate(previousDateTime.format('YYYY-MM-DD'), this.state.dateFormat);
      validDate = DateUtil.isValidDate(this.dateValue, this.state.dateFormat) && this.isDateTimeAcceptable(DateTimeUtils.convertDateTimeStringToMomentObject(this.dateValue, this.timeValue, this.state.dateFormat, this.props.showSeconds, this.initialTimeZone));
    }

    // If both date and time are valid, check if the time is the missing hour and invoke onChange.
    // If the date is valid but time is invalid, the time in the dateTime state needs to be cleared and render.
    if (validDate && validTime) {
      const updatedDateTime = DateTimeUtils.updateTime(previousDateTime, this.timeValue, this.props.showSeconds);

      if (event.keyCode === KeyCode.KEY_DOWN
        && previousDateTime && updatedDateTime && previousDateTime.format() === updatedDateTime.format()) {
        updatedDateTime.subtract(1, 'hours');
      }

      let displayedTimeValue = this.timeValue;

      // If updatedDateTime is valid, update timeValue (value in the time input) to reflect updatedDateTime since
      // it could have subtracted an hour from above to account for the missing hour.
      if (updatedDateTime) {
        displayedTimeValue = DateTimeUtils.getTime(updatedDateTime.format(), this.props.showSeconds, this.initialTimeZone);
      }

      this.handleChangeRaw(event, displayedTimeValue);
      this.handleChange(event, updatedDateTime);
    } else if (this.dateValue === '' && this.timeValue === '') {
      this.handleChangeRaw(event, this.timeValue);
      this.handleChange(event, null);
    } else {
      if (!validDate && validTime) {
        const updatedDateTime = DateTimeUtils.updateTime(previousDateTime, this.timeValue, this.props.showSeconds);

        this.setState({
          dateTime: updatedDateTime,
        });
      }

      this.handleChangeRaw(event, this.timeValue);
    }
  }

  handleChange(event, newDateTime) {
    this.setState({
      dateTime: newDateTime,
    });

    // If the new time is ambiguous and the old time is not, do not fire onChange.
    // This allows a user to use TimeClarification before onChange is fired.
    if (this.props.onChange && (this.state.isAmbiguousTime || !DateTimeUtils.checkAmbiguousTime(newDateTime))) {
      const metadata = this.getMetadata(newDateTime);
      this.props.onChange(event, newDateTime?.isValid() ? newDateTime.format() : '', metadata);
    }
  }

  handleChangeRaw(event, value) {
    if (this.props.onChangeRaw) {
      const metadata = this.getMetadata(value);
      this.props.onChangeRaw(event, value, metadata);
    }
  }

  handleOnDateInputFocus(event) {
    this.handleOnInputFocus(event);
  }

  handleOnTimeInputFocus(event) {
    this.handleOnInputFocus(event);
  }

  handleOnInputFocus(event) {
    this.handleFocus(event);

    if (!this.isDefaultDateAcceptable) {
      this.dateValue = '';
      this.timeValue = '';
      this.handleChange(event, null);
      this.isDefaultDateAcceptable = true;
    }
  }

  handleFocus(event) {
    // Handle focus only if focus is gained from outside of the entire date time picker component.
    // For IE 10/11 we cannot rely on event.relatedTarget since it is always null. Need to also check if containerHasFocus is false to
    // determine if the date-time picker component did not have focus but will now gain focus.
    if (this.props.onFocus && !this.containerHasFocus && !this.dateTimePickerContainer.current.contains(event.relatedTarget)) {
      this.props.onFocus(event);
      this.containerHasFocus = true;
    }
  }

  handleOnCalendarButtonClick(event) {
    if (!this.isDefaultDateAcceptable && !this.validateDefaultDate()) {
      this.dateValue = '';
      this.timeValue = '';
      this.handleChange(event, null);
    } else {
      this.isDefaultDateAcceptable = true;
    }
  }

  handleDaylightSavingButtonClick(event) {
    this.setState({ isTimeClarificationOpen: false });
    const newDateTime = this.state.dateTime.clone();

    if (!newDateTime.isDST()) {
      newDateTime.subtract(1, 'hour');
      this.setState({
        dateTime: newDateTime,
      });
      if (this.props.onChange) {
        const metadata = this.getMetadata(newDateTime);
        this.props.onChange(event, newDateTime?.isValid() ? newDateTime.format() : '', metadata);
      }
    } else if (this.props.onChange && !this.wasOffsetButtonClicked) {
      // This fires onChange if the TimeClarification dialog was launched without using the OffsetButton.
      // If the user clicks the OffsetButton, onChange should have already been fired and does not need to be fired
      // again (unless they change the DateTime).
      const metadata = this.getMetadata(newDateTime);
      this.props.onChange(event, newDateTime?.isValid() ? newDateTime.format() : '', metadata);
    }

    // When the Time Clarification dialog was launched _without_ using the Offset button, 'blur' event
    // needs to be handled appropriately upon dismissal of the dialog (i.e. after DST resolution).
    if (!this.wasOffsetButtonClicked) {
      this.handleBlur(event, newDateTime);
    }

    this.wasOffsetButtonClicked = false;
  }

  handleStandardTimeButtonClick(event) {
    this.setState({ isTimeClarificationOpen: false });
    const newDateTime = this.state.dateTime.clone();

    if (newDateTime.isDST()) {
      newDateTime.add(1, 'hour');
      this.setState({
        dateTime: newDateTime,
      });
      if (this.props.onChange) {
        const metadata = this.getMetadata(newDateTime);
        this.props.onChange(event, newDateTime?.isValid() ? newDateTime.format() : '', metadata);
      }
    } else if (this.props.onChange && !this.wasOffsetButtonClicked) {
      // This fires onChange if the TimeClarification dialog was launched without using the OffsetButton.
      // If the user clicks the OffsetButton, onChange should have already been fired and does not need to be fired
      // again (unless they change the DateTime).
      const metadata = this.getMetadata(newDateTime);
      this.props.onChange(event, newDateTime?.isValid() ? newDateTime.format() : '', metadata);
    }

    // When the Time Clarification dialog was launched _without_ using the Offset button, 'blur' event
    // needs to be handled appropriately upon dismissal of the dialog (i.e. after DST resolution).
    if (!this.wasOffsetButtonClicked) {
      this.handleBlur(event, newDateTime);
    }

    this.wasOffsetButtonClicked = false;
  }

  handleOffsetButtonClick() {
    this.wasOffsetButtonClicked = true;
    this.setState(prevState => ({ isTimeClarificationOpen: !prevState.isTimeClarificationOpen }));
  }

  handleOnRequestClose() {
    this.setState({ isTimeClarificationOpen: false });
  }

  getMetadata(momentDateTime) {
    let tempDateTime = (momentDateTime && DateTimeUtils.isMomentObject(momentDateTime)) ? momentDateTime.clone() : null;

    if (DateUtil.isValidDate(this.dateValue, this.state.dateFormat)) {
      const enteredDateTime = DateTimeUtils.convertDateTimeStringToMomentObject(this.dateValue, this.timeValue, this.state.dateFormat, this.props.showSeconds, this.initialTimeZone);

      // this.state.dateTime does not get updated if the entered date is outside the minDate/maxDate range or an excluded date.
      // In this case, we need to use the date that was entered instead of the this.state.dateTime.
      if (enteredDateTime && !enteredDateTime.isSame(tempDateTime, 'day')) {
        tempDateTime = enteredDateTime;
      }
    }

    let iSOString = '';
    const isCompleteDateTime = DateTimeUtils.isValidDateTime(this.dateValue, this.timeValue, this.state.dateFormat, this.props.showSeconds);

    if (isCompleteDateTime && tempDateTime) {
      iSOString = tempDateTime.format();
    }

    let timeValue = this.timeValue || '';

    if (iSOString) {
      timeValue = DateTimeUtils.getTime(iSOString, this.props.showSeconds, this.initialTimeZone);
    }

    let isValid = false;
    const inputValue = `${this.dateValue ? this.dateValue : ''} ${timeValue}`.trim();

    if (inputValue === '' || (isCompleteDateTime && tempDateTime && this.isDateTimeAcceptable(tempDateTime))) {
      isValid = true;
    }

    let isAmbiguous = false;

    if (isCompleteDateTime && tempDateTime) {
      isAmbiguous = DateTimeUtils.checkAmbiguousTime(tempDateTime);
    }

    const metadata = {
      iSO: iSOString,
      inputValue,
      dateValue: this.dateValue || '',
      timeValue,
      isAmbiguousHour: isAmbiguous,
      isCompleteValue: isCompleteDateTime,
      isValidValue: isValid,
    };

    return metadata;
  }

  checkAmbiguousTime(dateTime, onCheckCallback) {
    // To prevent multiple time clarification dialogs from rendering, ensure that it is not open before checking for the ambiguous hour.
    // One situation is when using the right arrow key to move focus from the hour input to the minute input, it will invoke onBlur and check for ambiguous hour.
    // If the hour is ambiguous, the dialog would display and steal focus from the minute input, which again will invoke onBlur and check for ambiguous hour.
    if (this.state.isTimeClarificationOpen) {
      return;
    }

    let isDateTimeAmbiguous = false;
    const isOldTimeAmbiguous = this.state.isAmbiguousTime;
    if (dateTime && dateTime.isValid()) {
      const tempDateTime = dateTime.clone();
      isDateTimeAmbiguous = DateTimeUtils.checkAmbiguousTime(tempDateTime);
    }

    this.setState({
      isAmbiguousTime: isDateTimeAmbiguous,
      isTimeClarificationOpen: isDateTimeAmbiguous && !isOldTimeAmbiguous,
    }, onCheckCallback);
  }

  isDateTimeAcceptable(newDateTime) {
    let isAcceptable = true;

    if (DateUtil.isDateOutOfRange(newDateTime, DateTimeUtils.createSafeDate(DateUtil.getMinDate(this.props.minDate), this.initialTimeZone), DateTimeUtils.createSafeDate(DateUtil.getMaxDate(this.props.maxDate), this.initialTimeZone))) {
      isAcceptable = false;
    }

    if (DateUtil.isDateExcluded(newDateTime, this.props.excludeDates)) {
      isAcceptable = false;
    }

    return isAcceptable;
  }

  validateDefaultDate() {
    return this.isDateTimeAcceptable(this.state.dateTime);
  }

  renderTimeClarification() {
    return (
      <TimeClarification
        ambiguousDateTime={this.state.dateTime.format()}
        disabled={this.props.disabled}
        isOpen={this.state.isTimeClarificationOpen}
        isOffsetButtonHidden={!this.state.isAmbiguousTime}
        onDaylightSavingButtonClick={this.handleDaylightSavingButtonClick}
        onStandardTimeButtonClick={this.handleStandardTimeButtonClick}
        onOffsetButtonClick={this.handleOffsetButtonClick}
        onRequestClose={this.handleOnRequestClose}
        onBlur={this.handleOnTimeBlur}
        onFocus={this.handleFocus}
        initialTimeZone={this.initialTimeZone}
      />
    );
  }

  render() {
    const {
      dateInputAttributes,
      disabled,
      excludeDates,
      filterDate,
      includeDates,
      initialTimeZone,
      isIncomplete,
      isInvalid,
      isInvalidMeridiem,
      label,
      onBlur,
      onChange,
      onChangeRaw,
      onClickOutside,
      onFocus,
      onRequestClose,
      onSelect,
      maxDate,
      minDate,
      name,
      required,
      showSeconds,
      timeInputAttributes,
      value,
      timeVariant,
      ...customProps
    } = this.props;

    const dateTime = this.state.dateTime ? this.state.dateTime.clone() : null;
    const dateValue = DateUtil.formatMomentDate(dateTime, 'YYYY-MM-DD');
    const theme = this.context;

    const atMaxDate = this.state.dateTime ? dateTime.isAfter(DateTimeUtils.createSafeDate(DateUtil.MAX_DATE.concat(' ', '23:58:59'), this.initialTimeZone)) : false;
    const atMinDate = this.state.dateTime ? dateTime.isBefore(DateTimeUtils.createSafeDate(DateUtil.MIN_DATE.concat(' ', '00:01:00'), this.initialTimeZone)) : false;

    return (
      <div
        {...customProps}
        className={cx('date-time-picker', theme.className)}
        ref={this.dateTimePickerContainer}
      >
        <input
          // Create a hidden input for storing the name and value attributes to use when submitting the form.
          // The data stored in the value attribute will be the visible date in the date input but in ISO 8601 format.
          data-terra-date-time-input-hidden
          type="hidden"
          name={name}
          value={dateTime?.isValid() ? dateTime.format() : ''}
        />

        <div className={cx('date-facade')}>
          <DatePicker
            onCalendarButtonClick={this.handleOnCalendarButtonClick}
            onChange={this.handleDateChange}
            onChangeRaw={this.handleDateChangeRaw}
            onSelect={this.handleOnSelect}
            onClickOutside={onClickOutside}
            onRequestClose={onRequestClose}
            onBlur={this.handleOnDateBlur}
            onFocus={this.handleOnDateInputFocus}
            excludeDates={excludeDates}
            filterDate={filterDate}
            includeDates={includeDates}
            inputAttributes={dateInputAttributes}
            maxDate={DateUtil.getMaxDate(maxDate)}
            minDate={DateUtil.getMinDate(minDate)}
            ariaLabel={label}
            selectedDate={dateValue}
            value={dateValue}
            name="input"
            disabled={disabled}
            disableButtonFocusOnClose
            isIncomplete={isIncomplete}
            isInvalid={isInvalid}
            required={required}
            initialTimeZone={this.initialTimeZone}
            isDefaultDateAcceptable
          />
        </div>
        <div className={cx('time-facade')}>
          <TimeInput
            onBlur={this.handleOnTimeBlur}
            onChange={this.handleTimeChange}
            onFocus={this.handleOnTimeInputFocus}
            inputAttributes={timeInputAttributes}
            name="input"
            value={this.timeValue}
            disabled={disabled}
            variant={timeVariant}
            refCallback={(inputRef) => { this.hourInput = inputRef; }}
            showSeconds={showSeconds}
            isIncomplete={isIncomplete}
            isInvalid={isInvalid}
            isInvalidMeridiem={isInvalidMeridiem}
            required={required}
            atMaxDate={atMaxDate}
            atMinDate={atMinDate}
          />

          {this.state.isAmbiguousTime && this.state.dateTime ? this.renderTimeClarification() : null}
        </div>
      </div>
    );
  }
}

DateTimePicker.propTypes = propTypes;
DateTimePicker.defaultProps = defaultProps;
DateTimePicker.contextType = ThemeContext;

export default injectIntl(DateTimePicker);
