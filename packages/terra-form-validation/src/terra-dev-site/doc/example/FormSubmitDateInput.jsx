/* eslint-disable class-methods-use-this */

import React from 'react';
import { Form, Field } from 'react-final-form';
import DateInput from 'terra-date-input';
import TerraField from 'terra-form-field';
import Button from 'terra-button';
import Spacer from 'terra-spacer';


/**
 * Ensures the passed in value is an accepted date value
 * @param {string} value The date to validate
 */
const isAcceptedDate = (value) => {
  if (value && value.length === 10) {
    const splitValue = value.split('-');
    const formattedDay = Number(splitValue[2]);
    const formattedMonth = Number(splitValue[1]) - 1; // Account for 0-indexed month
    const formattedYear = Number(splitValue[0]);

    const date = new Date(formattedYear, formattedMonth, formattedDay);

    const yearMatches = date.getUTCFullYear() === formattedYear;
    const monthMatches = date.getUTCMonth() === formattedMonth;
    const dayMatches = date.getUTCDate() === formattedDay;

    return yearMatches && monthMatches && dayMatches;
  }
  return false;
};

const validateDate = (value) => {
  if (!value) {
    return 'Required';
  }

  if (!isAcceptedDate(value)) {
    return 'Date is Invalid';
  }

  const splitValue = value.split('-');
  if (splitValue[0] < 2020) {
    return 'Must be after before the year 2020';
  }

  return undefined;
};

export default class MainEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(values) {
    this.setState({
      submittedValues: values,
    });
  }

  renderForm({ handleSubmit }) {
    return (
      <form
        noValidate
        onSubmit={handleSubmit}
      >
        <Field
          name="user_date"
          validate={validateDate}
        >
          {({ input, meta }) => (
            <TerraField
              label="Enter your birthday"
              error={meta.error}
              isInvalid={meta.submitFailed && meta.error !== undefined}
              required
            >
              <DateInput
                name="user_date"
                value={input.value}
                onChange={(event, date) => { input.onChange(date); }}
              />
            </TerraField>
          )}
        </Field>
        <Button text="Submit" type={Button.Opts.Types.SUBMIT} />
      </form>
    );
  }

  render() {
    return (
      <Spacer marginBottom="small">
        <Form
          onSubmit={this.submitForm}
          render={this.renderForm}
        />
        {this.state.submittedValues
          && (
            <div>
              <p>Form Submitted Successfully With</p>
              <pre>{JSON.stringify(this.state.submittedValues, 0, 2)}</pre>
            </div>
          )
        }
      </Spacer>
    );
  }
}
