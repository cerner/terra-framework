import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import { activeBreakpointForSize } from 'terra-breakpoints';
import ResponsiveElement from 'terra-responsive-element';
import { injectIntl, intlShape } from 'react-intl';

/* eslint-disable-next-line  */
import ReactDatePicker from './react-datepicker';
import DateInput from './DateInput';
import DateUtil from './DateUtil';
import styles from './DatePicker.module.scss';

const cx = classNames.bind(styles);

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
   * An array of ISO 8601 string representation of the dates to disable in the picker. The values must be in the `YYYY-MM-DD` format.
   */
  excludeDates: PropTypes.arrayOf(PropTypes.string),
  /**
   * A function that gets called for each date in the picker to evaluate which date should be disabled.
   * A return value of true will be enabled and false will be disabled.
   */
  filterDate: PropTypes.func,
  /**
   * An array of ISO 8601 string representation of the dates to enable in the picker. All Other dates will be disabled. The values must be in the `YYYY-MM-DD` format.
   */
  includeDates: PropTypes.arrayOf(PropTypes.string),
  /**
   * Custom input attributes to apply to the date input. Use the name prop to set the name for the input.
   * Do not set the name in inputAttribute as it will be ignored.
   */
  inputAttributes: PropTypes.object,
  /**
   * @private
   * intl object programmatically imported through injectIntl from react-intl.
   * */
  intl: intlShape.isRequired,
  /**
  * Whether the input displays as Incomplete. Use when no value has been provided. _(usage note: `required` must also be set)_.
  */
  isIncomplete: PropTypes.bool,
  /**
  * Whether the input displays as Invalid. Use when value does not meet validation pattern.
  */
  isInvalid: PropTypes.bool,
  /**
  * String that labels the current element. 'aria-label' must be present,
  * for accessibility.
  */
  ariaLabel: PropTypes.string,
  /**
   * An ISO 8601 string representation of the maximum date that can be selected. The value must be in the `YYYY-MM-DD` format. Must be on or before `12/31/2100`
   */
  maxDate: PropTypes.string,
  /**
   * An ISO 8601 string representation of the minimum date that can be selected. The value must be in the `YYYY-MM-DD` format. Must be on or after `01/01/1900`
   */
  minDate: PropTypes.string,
  /**
   * Name of the date input. The name should be unique.
   */
  name: PropTypes.string.isRequired,
  /**
   * A callback function triggered when the date picker component loses focus.
   * This event does not get triggered when the focus is moved from the date input to the calendar button since the focus is still within the main date picker component.
   * The first parameter is the event. The second parameter is the metadata to describe the current state of the input value at the time when the onBlur callback is triggered.
   */
  onBlur: PropTypes.func,
  /**
   * A callback function to execute when a valid date is selected or entered.
   * The first parameter is the event. The second parameter is the changed date value. The third parameter is the metadata to describe the current state of the input value at the time when the onChange callback is triggered.
   */
  onChange: PropTypes.func,
  /**
   * A callback function to execute when a change is made in the date input.
   * The first parameter is the event. The second parameter is the changed date value. The third parameter is the metadata to describe the current state of the input value at the time when the onChangeRaw callback is triggered.
   */
  onChangeRaw: PropTypes.func,
  /**
   * **Deprecated**, A callback function to execute when clicking outside of the picker to dismiss it. Resolves to `onDismiss`.
   */
  onClickOutside: PropTypes.func,
  /**
   * A callback function to execute when clicking outside of the picker to dismiss it. onDismiss(event)
   */
  onDismiss: PropTypes.func,
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
   * An ISO 8601 string representation of the default value to show in the date input. The value must be in the `YYYY-MM-DD` format.
   * This is analogous to defaultvalue in a form input field.
   */
  selectedDate: PropTypes.string,
  /**
   * The date value. This prop should only be used for a controlled date picker.
   * When this prop is set a handler is needed for both the `onChange` and `onChangeRaw` props to manage the date value.
   * If both `selectedDate` and this prop are set, then `selectedDate` will have no effect.
   * The value must be in the `YYYY-MM-DD` format or the all-numeric date format based on the locale.
   */
  value: PropTypes.string,
  /**
   * @private
   * Prop to show inline version of date picker component.
   */
  isInline: PropTypes.bool,
};

const defaultProps = {
  disabled: false,
  excludeDates: undefined,
  filterDate: undefined,
  includeDates: undefined,
  inputAttributes: undefined,
  isIncomplete: false,
  isInvalid: false,
  maxDate: '2100-12-31',
  minDate: '1900-01-01',
  onBlur: undefined,
  onChange: undefined,
  onChangeRaw: undefined,
  onClickOutside: undefined,
  onFocus: undefined,
  onSelect: undefined,
  required: false,
  disableButtonFocusOnClose: false,
  selectedDate: undefined,
  isInline: false,
};

class DatePicker extends React.Component {
  constructor(props) {
    super(props);

    const activeBreakpointOnMount = activeBreakpointForSize(window.innerWidth);
    this.state = {
      selectedDate: DateUtil.defaultValue(props),
      showPortalPicker: !this.props.isInline && (activeBreakpointOnMount === 'tiny' || activeBreakpointOnMount === 'small'),
      prevPropsSelectedDate: props.value || props.selectedDate,
    };

    this.datePickerContainer = React.createRef();
    this.isDefaultDateAcceptable = false;
    this.containerHasFocus = false;
    this.handleBlur = this.handleBlur.bind(this);
    this.handleBreakpointChange = this.handleBreakpointChange.bind(this);
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
    const { selectedDate, value } = nextProps;
    let nextDateValue = selectedDate;

    // Use the value for a controlled component if one is provided.
    if (value !== undefined && value !== null) {
      nextDateValue = value;
    }

    if (nextDateValue !== prevState.prevPropsSelectedDate) {
      const nextSelectedDate = DateUtil.createSafeDate(nextDateValue);

      if (nextSelectedDate) {
        return {
          selectedDate: nextSelectedDate,
          prevPropsSelectedDate: nextDateValue,
        };
      }

      return {
        prevPropsSelectedDate: nextDateValue,
      };
    }

    return null;
  }

  componentDidMount() {
    this.dateValue = DateUtil.formatMomentDate(this.state.selectedDate, DateUtil.getFormatByLocale(this.props.intl.locale)) || '';
    this.isDefaultDateAcceptable = this.validateDefaultDate();
  }

  getMetadata() {
    const format = DateUtil.getFormatByLocale(this.props.intl.locale);
    const isCompleteDate = DateUtil.isValidDate(this.dateValue, format);
    const iSOString = isCompleteDate ? DateUtil.convertToISO8601(this.dateValue, format) : '';

    let isValidDate = false;

    if (this.dateValue === '' || (isCompleteDate && this.isDateWithinRange(DateUtil.createSafeDate(iSOString)))) {
      isValidDate = true;
    }

    const metadata = {
      iSO: iSOString,
      inputValue: this.dateValue,
      isCompleteValue: isCompleteDate,
      isValidValue: isValidDate,
    };

    return metadata;
  }

  handleBreakpointChange(activeBreakpoint) {
    const showPortalPicker = !this.props.isInline && (activeBreakpoint === 'tiny' || activeBreakpoint === 'small');

    if (this.state.showPortalPicker !== showPortalPicker) {
      this.setState({ showPortalPicker });
    }
  }

  handleFilterDate(date) {
    if (this.props.filterDate) {
      return this.props.filterDate(date && date.isValid() ? date.format(DateUtil.ISO_EXTENDED_DATE_FORMAT) : '');
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

    this.dateValue = DateUtil.formatISODate(selectedDate, DateUtil.getFormatByLocale(this.props.intl.locale));
    this.isDefaultDateAcceptable = true;

    if (this.props.onSelect) {
      this.props.onSelect(event, selectedDate.format(DateUtil.ISO_EXTENDED_DATE_FORMAT));
    }

    if (!this.props.disableButtonFocusOnClose) {
      // Allows time for focus-trap to release focus on the picker before returning focus to the calendar button.
      setTimeout(() => {
        /*
         * Make sure the reference to calendarButton still exists before calling focus because it is possible that it is now
         * nullified after the 100 ms timeout due to a force remount of this component with a new `key` prop value.
         * Reference https://github.com/cerner/terra-framework/issues/1086
         */
        if (this.calendarButton) {
          this.calendarButton.focus();
        }
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
        const metadata = this.getMetadata();
        this.props.onBlur(event, metadata);
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
      const metadata = this.getMetadata();
      this.props.onChange(event, date && date.isValid() ? date.format(DateUtil.ISO_EXTENDED_DATE_FORMAT) : '', metadata);
    }
  }

  handleChangeRaw(event) {
    this.dateValue = event.target.value;
    if (!this.getMetadata().isValidValue) {
      this.setState({
        selectedDate: null,
      });
    }

    if (this.props.onChangeRaw) {
      const metadata = this.getMetadata();
      this.props.onChangeRaw(event, event.target.value, metadata);
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

    if (DateUtil.isDateOutOfRange(date, DateUtil.createSafeDate(DateUtil.getMinDate(this.props.minDate)), DateUtil.createSafeDate(DateUtil.getMaxDate(this.props.maxDate)))) {
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
      intl,
      isIncomplete,
      isInvalid,
      maxDate,
      minDate,
      name,
      onBlur,
      onChange,
      onChangeRaw,
      onClickOutside,
      onDismiss,
      onFocus,
      onSelect,
      required,
      selectedDate,
      value,
      isInline,
      ariaLabel,
      ...customProps
    } = this.props;

    this.onCalendarButtonClick = customProps.onCalendarButtonClick;

    delete customProps.onCalendarButtonClick;

    const dateFormat = DateUtil.getFormatByLocale(intl.locale);

    let formattedValue = DateUtil.strictFormatISODate(value, dateFormat);

    if (!formattedValue) {
      formattedValue = value;
    }

    let selectedDateInPicker;

    // If using this as a controlled component.
    if (value !== undefined) {
      // If value is empty, let selectedDateInPicker be undefined as in clearing the value.
      if (value !== '') {
        selectedDateInPicker = DateUtil.createSafeDate(DateUtil.convertToISO8601(value, dateFormat));

        // If value is not a valid date, keep the previous selected date in the picker.
        if (selectedDateInPicker === undefined) {
          selectedDateInPicker = this.state.selectedDate;
        }
      }
    } else {
      selectedDateInPicker = this.state.selectedDate;
    }

    const theme = this.context;

    return (
      <div
        className={cx('date-picker', theme.className)}
        ref={this.datePickerContainer}
      >
        <ResponsiveElement
          onChange={this.handleBreakpointChange}
          responsiveTo="window"
        >
          <ReactDatePicker
            {...customProps}
            withPortal={this.state.showPortalPicker}
            inline={isInline}
            selected={selectedDateInPicker}
            value={formattedValue}
            onBlur={this.handleBlur}
            onChange={this.handleChange}
            onChangeRaw={this.handleChangeRaw}
            onClickOutside={this.handleOnClickOutside}
            onDismiss={onDismiss}
            onFocus={this.handleOnInputFocus}
            onSelect={this.handleOnSelect}
            required={required}
            customInput={(
              <DateInput
                onCalendarButtonClick={this.handleOnCalendarButtonClick}
                inputAttributes={inputAttributes}
                required={required}
                isIncomplete={isIncomplete}
                isInvalid={isInvalid}
                shouldShowPicker={!this.isDefaultDateAcceptable && this.state.selectedDate === null}
                onButtonFocus={this.handleFocus}
                buttonRefCallback={(buttonRef) => { this.calendarButton = buttonRef; }}
                ariaLabel={ariaLabel}
              />
            )}
            excludeDates={DateUtil.filterInvalidDates(excludeDates)}
            filterDate={this.handleFilterDate}
            includeDates={DateUtil.filterInvalidDates(includeDates)}
            maxDate={DateUtil.createSafeDate(DateUtil.getMaxDate(maxDate))}
            minDate={DateUtil.createSafeDate(DateUtil.getMinDate(minDate))}
            todayButton={intl.formatMessage({ id: 'Terra.datePicker.today' })}
            dateFormatCalendar=" "
            dateFormat={dateFormat}
            fixedHeight
            locale={intl.locale}
            placeholderText={intl.formatMessage({ id: 'Terra.datePicker.dateFormat' })}
            dropdownMode="select"
            showMonthDropdown
            showYearDropdown
            preventOpenOnFocus
            name={name}
            allowSameDay
          />
        </ResponsiveElement>
      </div>
    );
  }
}

DatePicker.propTypes = propTypes;
DatePicker.defaultProps = defaultProps;
DatePicker.contextType = ThemeContext;

export default injectIntl(DatePicker);
