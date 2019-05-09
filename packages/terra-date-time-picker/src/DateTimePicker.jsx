import React from 'react';
import { injectIntl, intlShape } from 'react-intl';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import DatePicker from 'terra-date-picker';
import TimeInput from 'terra-time-input';
import KeyCode from 'keycode-js';
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
  // eslint-disable-next-line react/forbid-prop-types
  dateInputAttributes: PropTypes.object,
  /**
   * Whether the date and time inputs should be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * An array of ISO 8601 string representation of the dates to disable in the picker.
   */
  excludeDates: PropTypes.arrayOf(PropTypes.string),
  /**
   * A function that gets called for each date in the picker to evaluate which date should be disabled.
   * A return value of true will be enabled and false will be disabled.
   */
  filterDate: PropTypes.func,
  /**
   * An array of ISO 8601 string representation of the dates to enable in the picker.
   * All Other dates will be disabled.
   */
  includeDates: PropTypes.arrayOf(PropTypes.string),
  /**
   * intl object programmatically imported through injectIntl from react-intl.
   * */
  intl: intlShape.isRequired,
  /**
   * An ISO 8601 string representation of the maximum date that can be selected in the date picker.
   * The time portion in this value is ignored because this is strictly used in the date picker.
   */
  maxDate: PropTypes.string,
  /**
   * An ISO 8601 string representation of the minimum date that can be selected in the date picker.
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
   */
  onBlur: PropTypes.func,
  /**
   * A callback function to execute when a valid date is selected or entered.
   * The first parameter is the event. The second parameter is the changed input value.
   */
  onChange: PropTypes.func,
  /**
   * A callback function to execute when a change is made in the date or time input.
   * The first parameter is the event. The second parameter is the changed input value.
   */
  onChangeRaw: PropTypes.func,
  /**
   * A callback function to execute when clicking outside of the picker to dismiss it.
   */
  onClickOutside: PropTypes.func,
  /**
   * A callback function triggered when the date input, hour input, or minute input receives focus.
   */
  onFocus: PropTypes.func,
  /**
   * A callback function to execute when a selection is made in the date picker.
   * The first parameter is the event. The second parameter is the selected input value in ISO format.
   */
  onSelect: PropTypes.func,
  /**
   * A callback function to let the containing component (e.g. modal) to regain focus.
   */
  releaseFocus: PropTypes.func,
  /**
   * A callback function to request focus from the containing component (e.g. modal).
   */
  requestFocus: PropTypes.func,
  /**
   * Custom input attributes to apply to the time input. Use the name prop to set the name for the time input.
   * Do not set the name in inputAttribute as it will be ignored.
   */
  // eslint-disable-next-line react/forbid-prop-types
  timeInputAttributes: PropTypes.object,
  /**
   * An ISO 8601 string representation of the initial value to show in the date and time inputs.
   */
  value: PropTypes.string,
  /**
   * Type of time input to initialize. Must be '24-hour' or '12-hour'
   */
  timeVariant: PropTypes.oneOf([DateTimeUtils.FORMAT_12_HOUR, DateTimeUtils.FORMAT_24_HOUR]),
};

const defaultProps = {
  dateInputAttributes: undefined,
  disabled: false,
  excludeDates: undefined,
  filterDate: undefined,
  includeDates: undefined,
  maxDate: undefined,
  minDate: undefined,
  onBlur: undefined,
  onChange: undefined,
  onChangeRaw: undefined,
  onClickOutside: undefined,
  onFocus: undefined,
  onSelect: undefined,
  releaseFocus: undefined,
  requestFocus: undefined,
  timeInputAttributes: undefined,
  value: undefined,
  timeVariant: DateTimeUtils.FORMAT_24_HOUR,
};

class DateTimePicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dateTime: DateUtil.createSafeDate(props.value),
      isAmbiguousTime: false,
      isTimeClarificationOpen: false,
      dateFormat: DateUtil.getFormatByLocale(props.intl.locale),
      prevPropsValue: props.value,
    };

    // The dateValue and timeValue variables represent the actual value in the date input and time input respectively.
    // They are used to keep track of the currently entered value to determine whether or not the entry is valid.
    // Unlike dateValue and timeValue, this.state.dateTime is the internal moment object representing both the date and time as one entity
    // It is used for date/time manipulation and used to calculate the missing/ambiguous hour.
    // The dateValue and timeValue are tracked outside of the react state to limit the number of renderings that occur.
    this.dateValue = DateUtil.formatMomentDate(this.state.dateTime, this.state.dateFormat) || '';
    this.timeValue = DateTimeUtils.hasTime(this.props.value) ? DateUtil.formatISODate(this.props.value, 'HH:mm') : '';
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
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.value !== prevState.prevPropsValue) {
      return {
        dateTime: DateUtil.createSafeDate(nextProps.value),
        prevPropsValue: nextProps.value,
      };
    }

    return null;
  }

  componentDidMount() {
    this.isDefaultDateAcceptable = this.validateDefaultDate();
  }

  handleOnSelect(event, selectedDate) {
    this.dateValue = DateUtil.formatISODate(selectedDate, this.state.dateFormat);
    const previousDateTime = this.state.dateTime ? this.state.dateTime.clone() : null;
    const updatedDateTime = DateTimeUtils.syncDateTime(previousDateTime, selectedDate, this.timeValue);

    if (!previousDateTime || previousDateTime.format() !== updatedDateTime.format()) {
      this.checkAmbiguousTime(updatedDateTime);
    }

    if (this.props.onSelect) {
      this.props.onSelect(event, updatedDateTime.format());
    }

    this.hourInput.focus();
  }

  handleOnDateBlur(event) {
    // Modern browsers support event.relatedTarget but event.relatedTarget returns null in IE 10 / IE 11.
    // IE 11 sets document.activeElement to the next focused element before the blur event is called.
    const activeTarget = event.relatedTarget ? event.relatedTarget : document.activeElement;

    // Handle blur only if focus has moved out of the entire date time picker component.
    if (!this.dateTimePickerContainer.current.contains(activeTarget)) {
      const isDateTimeValid = DateTimeUtils.isValidDateTime(this.dateValue, this.timeValue, this.state.dateFormat);
      const enteredDateTime = isDateTimeValid ? this.state.dateTime : null;

      this.checkAmbiguousTime(enteredDateTime);
      this.handleBlur(event, isDateTimeValid);
    }
  }

  handleOnTimeBlur(event) {
    // Modern browsers support event.relatedTarget but event.relatedTarget returns null in IE 10 / IE 11.
    // IE 11 sets document.activeElement to the next focused element before the blur event is called.
    const activeTarget = event.relatedTarget ? event.relatedTarget : document.activeElement;

    // Handle blur only if focus has moved out of the entire date time picker component.
    if (!this.dateTimePickerContainer.current.contains(activeTarget)) {
      const isDateTimeValid = DateTimeUtils.isValidDateTime(this.dateValue, this.timeValue, this.state.dateFormat);
      let updatedDateTime;

      if (isDateTimeValid) {
        updatedDateTime = DateTimeUtils.updateTime(this.state.dateTime, this.timeValue);
      }

      this.checkAmbiguousTime(updatedDateTime);
      this.handleBlur(event, isDateTimeValid);
    }
  }

  handleBlur(event, isCompleteDateTime) {
    if (this.props.onBlur) {
      let value = '';
      if (this.dateValue) {
        value = this.dateValue.concat(' ');
      }

      if (this.timeValue) {
        value = value.concat(this.timeValue);
      }

      value.trim();

      let iSOString = '';
      let momentDateTime;

      if (isCompleteDateTime) {
        momentDateTime = DateTimeUtils.convertDateTimeStringToMomentObject(this.dateValue, this.timeValue, this.state.dateFormat);
        iSOString = momentDateTime.format();
      }

      let isValid = false;

      if (value === '' || (isCompleteDateTime && this.isDateTimeAcceptable(momentDateTime))) {
        isValid = true;
      }

      const options = {
        iSO: iSOString,
        inputValue: value,
        isCompleteValue: isCompleteDateTime,
        isValidValue: isValid,
      };

      this.props.onBlur(event, options);
    }

    this.containerHasFocus = false;
  }

  checkAmbiguousTime(dateTime) {
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
    });
  }

  handleDateChange(event, date) {
    if (event.type === 'change') {
      this.dateValue = event.target.value;
    }

    let updatedDateTime;
    const formattedDate = DateUtil.formatISODate(date, 'YYYY-MM-DD');
    const isDateValid = DateUtil.isValidDate(formattedDate, 'YYYY-MM-DD');
    const isTimeValid = DateTimeUtils.isValidTime(this.timeValue);

    if (isDateValid) {
      const previousDateTime = this.state.dateTime ? this.state.dateTime.clone() : DateUtil.createSafeDate(formattedDate);
      updatedDateTime = DateTimeUtils.syncDateTime(previousDateTime, date, this.timeValue);

      if (isTimeValid) {
        // Update the timeValue in case the updatedDateTime falls in the missing hour and needs to bump the hour up.
        this.timeValue = DateUtil.formatISODate(updatedDateTime.format(), 'HH:mm');
      }
    }

    // onChange should only be triggered when both the date and time values are valid or both values are empty/cleared.
    if ((isDateValid && isTimeValid) || (this.dateValue === '' && this.timeValue === '')) {
      this.handleChange(event, updatedDateTime);
    } else {
      this.setState({ dateTime: updatedDateTime });
    }

    if (isDateValid) {
      this.hourInput.focus();
    }
  }

  handleDateChangeRaw(event, date) {
    this.dateValue = event.target.value;
    this.handleChangeRaw(event, date);
  }

  handleTimeChange(event, time) {
    this.timeValue = time;
    const validDate = DateUtil.isValidDate(this.dateValue, this.state.dateFormat) && this.isDateTimeAcceptable(DateTimeUtils.convertDateTimeStringToMomentObject(this.dateValue, this.timeValue, this.state.dateFormat));
    const validTime = DateTimeUtils.isValidTime(this.timeValue);
    const previousDateTime = this.state.dateTime ? this.state.dateTime.clone() : null;

    // If both date and time are valid, check if the time is the missing hour and invoke onChange.
    // If the date is valid but time is invalid, the time in the dateTime state needs to be cleared and render.
    if (validDate && validTime) {
      const updatedDateTime = DateTimeUtils.updateTime(previousDateTime, time);

      if (event.keyCode === KeyCode.KEY_DOWN
        && previousDateTime && updatedDateTime && previousDateTime.format() === updatedDateTime.format()) {
        updatedDateTime.subtract(1, 'hours');
      }

      // If updatedDateTime is valid, update timeValue (value in the time input) to reflect updatedDateTime since
      // it could have subtracted an hour from above to account for the missing hour.
      if (updatedDateTime) {
        this.timeValue = DateUtil.formatISODate(updatedDateTime.format(), 'HH:mm');
      }

      this.handleChangeRaw(event, this.timeValue);
      this.handleChange(event, updatedDateTime);
    } else if (this.dateValue === '' && this.timeValue === '') {
      this.handleChangeRaw(event, this.timeValue);
      this.handleChange(event, null);
    } else {
      if (!validDate && validTime) {
        const updatedDateTime = DateTimeUtils.updateTime(previousDateTime, time);

        this.setState({
          dateTime: updatedDateTime,
        });
      }

      this.handleChangeRaw(event, time);
    }
  }

  handleChange(event, newDateTime) {
    this.setState({
      dateTime: newDateTime,
    });

    // If the new time is ambiguous and the old time is not, do not fire onChange.
    // This allows a user to use TimeClarification before onChange is fired.
    if (this.props.onChange && (this.state.isAmbiguousTime || !DateTimeUtils.checkAmbiguousTime(newDateTime))) {
      this.props.onChange(event, newDateTime && newDateTime.isValid() ? newDateTime.format() : '');
    }
  }

  handleChangeRaw(event, value) {
    if (this.props.onChangeRaw) {
      this.props.onChangeRaw(event, value);
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

  validateDefaultDate() {
    return this.isDateTimeAcceptable(this.state.dateTime);
  }

  isDateTimeAcceptable(newDateTime) {
    let isAcceptable = true;

    if (DateUtil.isDateOutOfRange(newDateTime, DateUtil.createSafeDate(this.props.minDate), DateUtil.createSafeDate(this.props.maxDate))) {
      isAcceptable = false;
    }

    if (DateUtil.isDateExcluded(newDateTime, this.props.excludeDates)) {
      isAcceptable = false;
    }

    return isAcceptable;
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
        this.props.onChange(event, newDateTime && newDateTime.isValid() ? newDateTime.format() : '');
      }
    } else if (this.props.onChange && !this.wasOffsetButtonClicked) {
      // This fires onChange if the TimeClarification dialog was launched without using the OffsetButton.
      // If the user clicks the OffsetButton, onChange should have already been fired and does not need to be fired
      // again (unless they change the DateTime).
      this.props.onChange(event, newDateTime && newDateTime.isValid() ? newDateTime.format() : '');
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
        this.props.onChange(event, newDateTime && newDateTime.isValid() ? newDateTime.format() : '');
      }
    } else if (this.props.onChange && !this.wasOffsetButtonClicked) {
      // This fires onChange if the TimeClarification dialog was launched without using the OffsetButton.
      // If the user clicks the OffsetButton, onChange should have already been fired and does not need to be fired
      // again (unless they change the DateTime).
      this.props.onChange(event, newDateTime && newDateTime.isValid() ? newDateTime.format() : '');
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

  renderTimeClarification() {
    return (
      <TimeClarification
        disabled={this.props.disabled}
        isOpen={this.state.isTimeClarificationOpen}
        isOffsetButtonHidden={!this.state.isAmbiguousTime}
        onDaylightSavingButtonClick={this.handleDaylightSavingButtonClick}
        onStandardTimeButtonClick={this.handleStandardTimeButtonClick}
        onOffsetButtonClick={this.handleOffsetButtonClick}
        onRequestClose={this.handleOnRequestClose}
        releaseFocus={this.props.releaseFocus}
        requestFocus={this.props.requestFocus}
        onBlur={this.handleOnTimeBlur}
        onFocus={this.handleFocus}
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
      onBlur,
      onChange,
      onChangeRaw,
      onClickOutside,
      onFocus,
      onSelect,
      maxDate,
      minDate,
      name,
      requestFocus,
      releaseFocus,
      timeInputAttributes,
      value,
      timeVariant,
      ...customProps
    } = this.props;

    const dateTime = this.state.dateTime ? this.state.dateTime.clone() : null;
    const dateValue = DateUtil.formatMomentDate(dateTime, 'YYYY-MM-DD');

    return (
      <div
        {...customProps}
        className={cx('date-time-picker')}
        ref={this.dateTimePickerContainer}
      >
        <input
          // Create a hidden input for storing the name and value attributes to use when submitting the form.
          // The data stored in the value attribute will be the visible date in the date input but in ISO 8601 format.
          data-terra-date-time-input-hidden
          type="hidden"
          name={name}
          value={dateTime && dateTime.isValid() ? dateTime.format() : ''}
        />

        <DatePicker
          onCalendarButtonClick={this.handleOnCalendarButtonClick}
          onChange={this.handleDateChange}
          onChangeRaw={this.handleDateChangeRaw}
          onSelect={this.handleOnSelect}
          onClickOutside={onClickOutside}
          onBlur={this.handleOnDateBlur}
          onFocus={this.handleOnDateInputFocus}
          excludeDates={excludeDates}
          filterDate={filterDate}
          includeDates={includeDates}
          inputAttributes={dateInputAttributes}
          maxDate={maxDate}
          minDate={minDate}
          selectedDate={dateValue}
          name="input"
          releaseFocus={releaseFocus}
          requestFocus={requestFocus}
          disabled={disabled}
        />

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
          />

          {this.state.isAmbiguousTime ? this.renderTimeClarification() : null }
        </div>
      </div>
    );
  }
}

DateTimePicker.propTypes = propTypes;
DateTimePicker.defaultProps = defaultProps;

export default injectIntl(DateTimePicker);
