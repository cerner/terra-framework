import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import FormDate from 'terra-form-date/lib/FormDate';

const d = new Date();

const formatDate = date => {
  // formats a JS date to 'yyyy-mm-dd'
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getUTCDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
};

class dateInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '2000-07-04', // d.toISOString().split('T')[0],
      isValidDate: '',
    };

    this.submitForm = this.submitForm.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleDateChange(event, date, isValidDate) {
    this.setState({ date, isValidDate });
  }

  handleInputChange(e) {
    this.setState({
      date: e.target.value,
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
            {this.state.isValidDate.toString()}
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
          <FormDate
            name="date-input-value"
            value={this.state.date}
            onChange={this.handleDateChange}
          />
          {/* <DateSelect label="Date of Birth" help="Please enter your date of birth" value={this.state.value} onChange={this.handleDateChange} /> */}
        </section>
        <section style={{ 'marginBottom': '15px' }}>
          <p>displayFormat="day-month-year"</p>
          <FormDate
            name="date-input-value"
            value={this.state.date}
            onChange={this.handleDateChange}
            displayFormat="day-month-year"
          />
          {/* <DateSelect label="Cerner Anniversary" displayFormat="day-month-year" value={this.state.value} onChange={this.handleDateChange} /> */}
        </section>
        <section style={{ 'marginBottom': '15px' }}>
          <p>displayFormat="month-day-year"</p>
          <FormDate
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
        {/* <Markdown src={markdown} /> */}
        {/*
        <li>
          daysInMonth
            0: 31,
          1: 28,
          2: 31,
          3: 30,
          4: 31,
          5: 30,
          6: 31,
          7: 31,
          8: 30,
          9: 31,
          10: 30,
          11: 31
        </li>
        */}
      </div>
    );
  }
}

export default dateInput;
