import React, { useState } from 'react';
import Button from 'terra-button';
import classNames from 'classnames/bind';
import CalendarFilter from '../../../../CalendarFilter';
import styles from '../common/DatePicker.test.module.scss';

const cx = classNames.bind(styles);

const CalendarFilterControlled = () => {
  const [date, setDate] = useState('2020-04-04');

  const handleOnDateChange = (event, selectedDate) => {
    setDate(selectedDate);
  };

  const handleSelectedDateUpdate = (event) => {
    setDate(event.currentTarget.textContent);
  };

  return (
    <div className={cx('content-wrapper')}>
      <h3> Default Selected date : 2020-04-04 </h3>
      <CalendarFilter
        value={date}
        onChange={handleOnDateChange}
      />
      {'  '}
      <Button
        id="button1"
        text=""
        onClick={handleSelectedDateUpdate}
      />
      {'  '}
      <Button
        id="button2"
        text="01/01/2019"
        onClick={handleSelectedDateUpdate}
      />
      {'  '}
      <Button
        id="button3"
        text="2019-02-02"
        onClick={handleSelectedDateUpdate}
      />
      {'  '}
      <Button
        id="button4"
        text="2019-03-03T10:30"
        onClick={handleSelectedDateUpdate}
      />
      {'  '}
      <Button
        id="button5"
        text="0101123"
        onClick={handleSelectedDateUpdate}
      />
    </div>
  );
};

export default CalendarFilterControlled;
