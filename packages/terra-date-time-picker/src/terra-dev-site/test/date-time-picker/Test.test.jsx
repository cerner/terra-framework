import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DateTimePicker from 'terra-date-time-picker/lib/DateTimePicker';
import Field from 'terra-form-field';
import DateTimeUtils from '../../../DateTimeUtils';

const propTypes = {
    /**
     * The current entered date time. Use for the selected date message.
     */
    value: PropTypes.node,
    /**
     * timezone for the date time
     */
    timeZone: PropTypes.string,
};

const defaultProps = {
    value: '',
    timeZone: '',
};

function DateTimePickerTimeZone(props) {
    const [timeZone, setTimezone] = useState('Asia/Kolkata');
    const [dateTime, setDateTime] = useState('');

    const handleDateTimeChange = (event, datetime) => {
        const computedDateTime = DateTimeUtils.createSafeDate(datetime, timeZone);

        setDateTime(computedDateTime.format());
        setTimezone(computedDateTime.tz());
    }

    const handleTimezoneChange = (event) => {
        const computedDateTime = DateTimeUtils.createSafeDate(dateTime, event.target.value);
        if (computedDateTime && computedDateTime.isValid()) {
            setTimezone(computedDateTime.tz());
            setDateTime(computedDateTime.format());
        } else {
            setDateTime('');
            setTimezone('');
        }
    }

    return (
        <>
            <p>
                Selected ISO Date Time:
            {dateTime}
            </p>
            <p>
                Selected Timezone:
            {timeZone}
            </p>
            <Field label="Enter Date/Time" htmlFor="default">
                <DateTimePicker
                    name="date-time-picker-example"
                    dateInputAttributes={{ id: 'timezone' }}
                    onChange={handleDateTimeChange}
                    timeZone={timeZone}
                    value={dateTime}
                    />
                <select value={timeZone} onChange={handleTimezoneChange}>
                    <option value="Asia/Kolkata">Asia/Kolkata</option>
                    <option value="America/Chicago">America/Chicago</option>
                    <option value="America/New_York">America/Newyork</option>
                    <option value="Australia/Sydney">Australia/Sydney</option>
                </select>
            </Field>
        </>
    );

}

DateTimePickerTimeZone.propTypes = propTypes;
DateTimePickerTimeZone.defaultProps = defaultProps;

export default DateTimePickerTimeZone;