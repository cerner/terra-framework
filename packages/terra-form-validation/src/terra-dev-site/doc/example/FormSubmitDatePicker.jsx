/* eslint-disable class-methods-use-this */

import React from 'react';
import { Form, Field } from 'react-final-form';
import DatePicker from 'terra-date-picker';
import TerraField from 'terra-form-field';
import Button from 'terra-button';
import Spacer from 'terra-spacer';

const validateDate = (value) => {
  if (!value) {
    return 'Required';
  }
  if (value.search(/[0-1][0-9]\/([0-2][0-9]|3[0-1])\/[0-9]{4}/i) <= -1) {
    return 'Date is Invalid';
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
              <DatePicker
                name="user_date"
                id="default"
                onChangeRaw={(event, date) => { input.onChange(date); }}
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
