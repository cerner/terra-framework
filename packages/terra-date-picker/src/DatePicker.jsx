
import React from 'react';
import PropTypes from 'prop-types';
import ResponsiveElement from 'terra-responsive-element';

/* eslint-disable-next-line  */
import ReactDatePicker from './react-datepicker';
import DateInput from './DateInput';
import DateUtil from './DateUtil';
import styles from './DatePicker.module.scss';

const propTypes = {
  /**
   * @private Whether or not to disable focus on the calendar button when the calendar picker dismisses.
   */
  disableButtonFocusOnClose: PropTypes.bool,
  /**
   * Whether the date input should be disabled.
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
   * An array of ISO 8601 string representation of the dates to enable in the picker. All Other dates will be disabled.
   */
  includeDates: PropTypes.arrayOf(PropTypes.string),
  /**
   * Custom input attributes to apply to the date input. Use the name prop to set the name for the input.
   * Do not set the name in inputAttribute as it will be ignored.
   */
  // eslint-disable-next-line react/forbid-prop-types
  inputAttributes: PropTypes.object,
  /**
   * An ISO 8601 string representation of the maximum date that can be selected.
   */
  maxDate: PropTypes.string,
  /**
   * An ISO 8601 string representation of the minimum date that can be selected.
   */
  minDate: PropTypes.string,
  /**
   * Name of the date input. The name should be unique.
   */
  name: PropTypes.string.isRequired,
  /**
   * A callback function triggered when the date picker component loses focus.
   * This event does not get triggered when the focus is moved from the date input to the calendar button since the focus is still within the main date picker component.
   */
  onBlur: PropTypes.func,
  /**
   * A callback function to execute when a valid date is selected or entered.
   * The first parameter is the event. The second parameter is the changed date value.
   */
  onChange: PropTypes.func,
  /**
   * A callback function to execute when a change is made in the date input.
   * The first parameter is the event. The second parameter is the changed date value.
   */
  onChangeRaw: PropTypes.func,
  /**
   * A callback function to execute when clicking outside of the picker to dismiss it.
   */
  onClickOutside: PropTypes.func,
  /**
   * A callback function triggered when the date picker component receives focus.
   * This event does not get triggered when the focus is moved from the date input to the calendar button since the focus is still within the main date picker component.
   */
  onFocus: PropTypes.func,
  /**
   * A callback function to execute when a date is selected from within the picker.
   */
  onSelect: PropTypes.func,
  /**
   * Whether or not the date is required.
   */
  required: PropTypes.bool,
  /**
   * An ISO 8601 string representation of the initial value to show in the date input.
   * This prop name is derived from react-datepicker but is analogous to value in a form input field.
   */
  selectedDate: PropTypes.string,
};

const defaultProps = {
  disabled: false,
  excludeDates: undefined,
  filterDate: undefined,
  includeDates: undefined,
  inputAttributes: undefined,
  maxDate: undefined,
  minDate: undefined,
  onBlur: undefined,
  onChange: undefined,
  onChangeRaw: undefined,
  onClickOutside: undefined,
  onFocus: undefined,
  onSelect: undefined,
  required: false,
  disableButtonFocusOnClose: false,
  selectedDate: undefined,
};

const contextTypes = {
  /* eslint-disable consistent-return */
  intl: (context) => {
    if (context.intl === undefined) {
      return new Error('Component is internationalized, and must be wrapped in terra-base');
    }
  },
};

class DatePicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDate: DateUtil.createSafeDate(props.selectedDate),
      prevPropsSelectedDate: props.selectedDate,
    };

    this.datePickerContainer = React.createRef();
    this.isDefaultDateAcceptable = false;
    this.containerHasFocus = false;
    this.handleBlur = this.handleBlur.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeRaw = this.handleChangeRaw.bind(this);
    this.handleFilterDate = this.handleFilterDate.bind(this);
    this.handleOnSelect = this.handleOnSelect.bind(this);
    this.handleOnClickOutside = this.handleOnClickOutside.bind(this);
    this.handleOnInputFocus = this.handleOnInputFocus.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleOnCalendarButtonClick = this.handleOnCalendarButtonClick.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.selectedDate !== prevState.prevPropsSelectedDate) {
      return {
        selectedDate: DateUtil.createSafeDate(nextProps.selectedDate),
        prevPropsSelectedDate: nextProps.selectedDate,
      };
    }

    return null;
  }

  componentDidMount() {
    this.dateValue = DateUtil.formatMomentDate(this.state.selectedDate, DateUtil.getFormatByLocale(this.context.intl.locale)) || '';
    this.isDefaultDateAcceptable = this.validateDefaultDate();
  }

  handleFilterDate(date) {
    if (this.props.filterDate) {
      return this.props.filterDate(date && date.isValid() ? date.format() : '');
    }

    return true;
  }

  handleOnSelect(selectedDate, event) {
    // onSelect should only be invoked when selecting a date from the picker.
    // react-datepicker has an issue where onSelect is invoked both when selecting a date from the picker
    // as well as manually entering a valid date or clearing the date,
    // Until a fix is made, we need to return if the event type is 'change' indicating that onSelect was
    // invoked from a manual change. See https://github.com/Hacker0x01/react-datepicker/issues/990
    if (event.type === 'change' || !selectedDate || !selectedDate.isValid()) {
      return;
    }

    this.dateValue = DateUtil.formatISODate(selectedDate, DateUtil.getFormatByLocale(this.context.intl.locale));
    this.isDefaultDateAcceptable = true;

    if (this.props.onSelect) {
      this.props.onSelect(event, selectedDate.format());
    }

    if (!this.props.disableButtonFocusOnClose) {
      // Allows time for focus-trap to release focus on the picker before returning focus to the calendar button.
      setTimeout(() => {
        this.calendarButton.focus();
      }, 100);
    }
  }

  handleOnClickOutside(event) {
    if (this.props.onClickOutside) {
      this.props.onClickOutside(event);
    }
  }

  handleBlur(event) {
    // Modern browsers support event.relatedTarget but event.relatedTarget returns null in IE 10 / IE 11.
    // IE 11 sets document.activeElement to the next focused element before the blur event is called.
    const activeTarget = event.relatedTarget ? event.relatedTarget : document.activeElement;

    // Handle blur only if focus has moved out of the entire date picker component.
    if (!this.datePickerContainer.current.contains(activeTarget)) {
      if (this.props.onBlur) {
        const format = DateUtil.getFormatByLocale(this.context.intl.locale);
        const isCompleteDate = DateUtil.isValidDate(this.dateValue, format);
        const iSOString = isCompleteDate ? DateUtil.convertToISO8601(this.dateValue, format) : '';
        let isValidDate = false;

        if (this.dateValue === '' || (isCompleteDate && this.isDateWithinRange(DateUtil.createSafeDate(iSOString)))) {
          isValidDate = true;
        }

        const options = {
          iSO: iSOString,
          inputValue: this.dateValue,
          isCompleteValue: isCompleteDate,
          isValidValue: isValidDate,
        };

        this.props.onBlur(event, options);
      }

      this.containerHasFocus = false;
    }
  }

  handleChange(date, event) {
    if (event.type === 'change') {
      this.dateValue = event.target.value;
    }

    this.setState({
      selectedDate: date,
    });

    if (this.props.onChange) {
      this.props.onChange(event, date && date.isValid() ? date.format() : '');
    }
  }

  handleChangeRaw(event) {
    this.dateValue = event.target.value;

    if (this.props.onChangeRaw) {
      this.props.onChangeRaw(event, event.target.value);
    }
  }

  handleOnInputFocus(event) {
    this.handleFocus(event);

    if (!this.isDefaultDateAcceptable) {
      this.dateValue = '';
      this.handleChange(null, event);
      this.isDefaultDateAcceptable = true;
    }
  }

  handleFocus(event) {
    // Handle focus only if focus is gained from outside of the entire date picker component.
    // For IE 10/11 we cannot rely on event.relatedTarget since it is always null. Need to also check if containerHasFocus is false to
    // determine if the date-picker component did not have focus but will now gain focus.
    if (this.props.onFocus && !this.containerHasFocus && !this.datePickerContainer.current.contains(event.relatedTarget)) {
      this.props.onFocus(event);
      this.containerHasFocus = true;
    }
  }

  handleOnCalendarButtonClick(event, onClick) {
    if (this.onCalendarButtonClick) {
      this.onCalendarButtonClick(event);
    }

    if (!this.isDefaultDateAcceptable && !this.validateDefaultDate()) {
      this.dateValue = '';
      this.handleChange(null, event);
    } else if (onClick) {
      // This onClick function is the onInputClick function coming from https://github.com/Hacker0x01/react-datepicker/blob/master/src/index.jsx#L326.
      // It does not take any parameter so there is not a need to pass in the event.
      onClick();
      this.isDefaultDateAcceptable = true;
    }
  }

  validateDefaultDate() {
    return this.isDateWithinRange(this.state.selectedDate);
  }

  isDateWithinRange(date) {
    let isAcceptable = true;

    if (DateUtil.isDateOutOfRange(date, DateUtil.createSafeDate(this.props.minDate), DateUtil.createSafeDate(this.props.maxDate))) {
      isAcceptable = false;
    }

    if (DateUtil.isDateExcluded(date, this.props.excludeDates)) {
      isAcceptable = false;
    }

    return isAcceptable;
  }

  render() {
    const {
      disableButtonFocusOnClose,
      inputAttributes,
      excludeDates,
      filterDate,
      includeDates,
      maxDate,
      minDate,
      name,
      onBlur,
      onChange,
      onChangeRaw,
      onClickOutside,
      onFocus,
      onSelect,
      required,
      selectedDate,
      ...customProps
    } = this.props;

    this.onCalendarButtonClick = customProps.onCalendarButtonClick;

    delete customProps.onCalendarButtonClick;

    const { intl } = this.context;
    const todayString = intl.formatMessage({ id: 'Terra.datePicker.today' });
    const dateFormat = DateUtil.getFormatByLocale(intl.locale);
    const placeholderText = intl.formatMessage({ id: 'Terra.datePicker.dateFormat' });
    const exludeMomentDates = DateUtil.filterInvalidDates(excludeDates);
    const includeMomentDates = DateUtil.filterInvalidDates(includeDates);
    const maxMomentDate = DateUtil.createSafeDate(maxDate);
    const minMomentDate = DateUtil.createSafeDate(minDate);

    const portalPicker = (
      <ReactDatePicker
        {...customProps}
        selected={this.state.selectedDate}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        onChangeRaw={this.handleChangeRaw}
        onClickOutside={this.handleOnClickOutside}
        onFocus={this.handleOnInputFocus}
        onSelect={this.handleOnSelect}
        required={required}
        customInput={(
          <DateInput
            onCalendarButtonClick={this.handleOnCalendarButtonClick}
            inputAttributes={inputAttributes}
            shouldShowPicker={!this.isDefaultDateAcceptable && this.state.selectedDate === null}
            onButtonFocus={this.handleFocus}
            buttonRefCallback={(buttonRef) => { this.calendarButton = buttonRef; }}
          />
)}
        excludeDates={exludeMomentDates}
        filterDate={this.handleFilterDate}
        includeDates={includeMomentDates}
        maxDate={maxMomentDate}
        minDate={minMomentDate}
        todayButton={todayString}
        withPortal
        dateFormatCalendar=" "
        dateFormat={dateFormat}
        fixedHeight
        locale={intl.locale}
        placeholderText={placeholderText}
        dropdownMode="select"
        showMonthDropdown
        showYearDropdown
        preventOpenOnFocus
        name={name}
        allowSameDay
      />
    );

    const popupPicker = (
      <ReactDatePicker
        {...customProps}
        selected={this.state.selectedDate}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        onChangeRaw={this.handleChangeRaw}
        onClickOutside={this.handleOnClickOutside}
        onFocus={this.handleOnInputFocus}
        onSelect={this.handleOnSelect}
        required={required}
        customInput={(
          <DateInput
            onCalendarButtonClick={this.handleOnCalendarButtonClick}
            inputAttributes={inputAttributes}
            shouldShowPicker={!this.isDefaultDateAcceptable && this.state.selectedDate === null}
            onButtonFocus={this.handleFocus}
            buttonRefCallback={(buttonRef) => { this.calendarButton = buttonRef; }}
          />
)}
        excludeDates={exludeMomentDates}
        filterDate={this.handleFilterDate}
        includeDates={includeMomentDates}
        maxDate={maxMomentDate}
        minDate={minMomentDate}
        todayButton={todayString}
        dateFormatCalendar=" "
        dateFormat={dateFormat}
        fixedHeight
        locale={intl.locale}
        placeholderText={placeholderText}
        dropdownMode="select"
        showMonthDropdown
        showYearDropdown
        preventOpenOnFocus
        name={name}
        allowSameDay
      />
    );

    return (
      <div
        className={styles['date-picker']}
        ref={this.datePickerContainer}
      >
        <ResponsiveElement
          responsiveTo="window"
          tiny={portalPicker}
          medium={popupPicker}
        />
      </div>
    );
  }
}

DatePicker.propTypes = propTypes;
DatePicker.defaultProps = defaultProps;
DatePicker.contextTypes = contextTypes;

export default DatePicker;
