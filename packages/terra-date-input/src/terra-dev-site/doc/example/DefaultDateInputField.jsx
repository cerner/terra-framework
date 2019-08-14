import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import DateInputField from 'terra-date-input/lib/DateInputField';

const d = new Date();

// formats a JS date to 'yyyy-mm-dd'
const formatDate = (date) => {
  const newD = new Date(date);
  let month = (newD.getMonth() + 1).toString();
  let day = newD.getUTCDate().toString();
  const year = newD.getFullYear().toString();

  if (month.length < 2) month = `0${month}`;
  if (day.length < 2) day = `0${day}`;

  return [year, month, day].join('-');
};


/**
 * Ensures the passed in value is a valid date
 * @param {string} value The date to validate
 */
const isValidDate = (value) => {
  if (value && value.length === 10) {
    const splitValue = value.split('-');
    const formattedDay = Number(splitValue[2]);
    const formattedMonth = Number(splitValue[1]) - 1; // Account for 0-indexed month
    const formattedYear = Number(splitValue[0]);

    const d2 = new Date(formattedYear, formattedMonth, formattedDay);

    const yearMatches = d2.getUTCFullYear() === formattedYear;
    const monthMatches = d2.getUTCMonth() === formattedMonth;
    const dayMatches = d2.getUTCDate() === formattedDay;

    return yearMatches && monthMatches && dayMatches;
  }
  return false;
};

class dateInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '', //'2000-07-04', // d.toISOString().split('T')[0],
      validDate: false,
    };

    this.submitForm = this.submitForm.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleDateChange(event, date) {
    const validDate = isValidDate(date);
    this.setState({
      date,
      validDate,
    });
  }

  handleInputChange(e) {
    const validDate = isValidDate(e.target.value);
    console.log(validDate);
    this.setState({
      date: e.target.value,
      validDate,
    });
  }

  handleButtonClick() {
    this.setState({
      date: formatDate(d),
    });
  }

  submitForm(values) {
    this.setState({
      submittedValues: values,
    });
  }

  renderForm({ handleSubmit, pristine, invalid }) {
    return (
      <p>Form</p>
    );
  }

  render() {
    return (
      <div>
        <section style={{ 'marginBottom': '15px' }}>
          <p>
            <b>State Value:</b>
            {' '}
            {this.state.date}
          </p>
          {/* <p><b>onChange Value:</b> {this.state.onChangeValue}</p> */}
          <p>
            <b>Is Valid Date:</b>
            {' '}
            {this.state.validDate.toString()}
          </p>
        </section>
        <section style={{ 'marginBottom': '15px' }}>
          <label htmlFor="controlled-input">Input to control value sent to date select:</label>
          <br />
          <input
            id="controlled-input"
            value={this.state.date}
            onChange={this.handleInputChange}
            placeholder="YYYY-MM-DD"
            type="text"
            name="dateInput"
          />
          <br />
          <small>Format: YYYY-MM-DD</small>
        </section>
        <section style={{ 'marginBottom': '15px' }}>
          Button to contol value sent to date select:
          <br />
          <button type="button" onClick={this.handleButtonClick}>
            Button to set current date
          </button>
        </section>
        <section style={{ 'marginBottom': '15px' }}>
          <DateInputField
            legend="Legend text"
            name="date-input-value"
            value={this.state.date}
            onChange={this.handleDateChange}
          />
          {/* <DateSelect label="Date of Birth" help="Please enter your date of birth" value={this.state.value} onChange={this.handleDateChange} /> */}
        </section>
        <section style={{ 'marginBottom': '15px' }}>
          <p>displayFormat="day-month-year"</p>
          <DateInputField
            legend="Legend text"
            name="date-input-value"
            value={this.state.date}
            onChange={this.handleDateChange}
            displayFormat="day-month-year"
          />
          {/* <DateSelect label="Cerner Anniversary" displayFormat="day-month-year" value={this.state.value} onChange={this.handleDateChange} /> */}
        </section>
        <section style={{ 'marginBottom': '15px' }}>
          <p>displayFormat="month-day-year"</p>
          <DateInputField
            legend="Legend text"
            name="date-input-value"
            value={this.state.date}
            onChange={this.handleDateChange}
            displayFormat="month-day-year"
          />
        </section>
        <section style={{ 'marginBottom': '15px' }}>
          {/* <Form
            onSubmit={this.submitForm}
            render={this.renderForm}
            initialValues={{ "date-example": this.state.value }}
          /> */}
        </section>
      </div>
    );
  }
}

export default dateInput;
