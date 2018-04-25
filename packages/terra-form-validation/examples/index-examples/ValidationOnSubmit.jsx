/* eslint-disable class-methods-use-this */

import React from 'react';
import { Form, Field } from 'react-final-form';
import TerraField from 'terra-form-field';
import Input from 'terra-form-input';
import Button from 'terra-button';
import Spacer from 'terra-spacer';

const required = value => (value ? undefined : 'Required');

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
          name="description"
          validate={required}
        >
          {({ input, meta, placeholder, ...rest }) => (
            <TerraField
              {...rest}
              label="Description"
              error={meta.error}
              isInvalid={meta.submitFailed && meta.error}
              required
            >
              <Input
                {...input}
                placeholder="Description"
                onChange={(e) => { input.onChange(e.target.value); }}
                value={input.value}
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
      <Spacer marginTop="small">
        <Form
          onSubmit={this.submitForm}
          render={this.renderForm}
          initialValues={{ description: '' }}
        />
        {this.state.submittedValues &&
          <div>
            <p>Form Submitted Successfully With</p>
            <pre>{JSON.stringify(this.state.submittedValues, 0, 2)}</pre>
          </div>
        }
      </Spacer>
    );
  }
}
