/* eslint-disable class-methods-use-this */

import React from 'react';
import { Form, Field } from 'react-final-form';
import Radio from 'terra-form-radio';
import RadioField from 'terra-form-radio/lib/RadioField';
import Button from 'terra-button';
import Spacer from 'terra-spacer';

const required = value => (value && value.length > 0 ? undefined : 'Required');

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

  renderForm({ handleSubmit, errors, submitFailed }) {
    return (
      <form
        onSubmit={handleSubmit}
      >
        <RadioField
          legend="Which kind of meal would you like?"
          isInvalid={submitFailed && errors.meal !== undefined}
          error={errors.meal}
          required
        >
          <Field
            name="meal"
            type="radio"
            value="chicken"
            validate={required}
            component={({ input }) => (
              <Radio
                inputAttrs={{ ...input }}
                labelText="Chicken"
                id={input.id}
                name={input.name}
                checked={!!input.checked}
                onChange={input.onChange}
                value={input.value}
              />
            )}
          />
          <Field
            name="meal"
            type="radio"
            value="vegetarian"
            validate={required}
            component={({ input }) => (
              <Radio
                inputAttrs={{ ...input }}
                labelText="Vegetarian"
                id={input.id}
                name={input.name}
                checked={!!input.checked}
                onChange={input.onChange}
                value={input.value}
              />
            )}
          />
          <Field
            name="meal"
            type="radio"
            value="fish"
            validate={required}
            component={({ input }) => (
              <Radio
                inputAttrs={{ ...input }}
                labelText="Fish"
                id={input.id}
                name={input.name}
                checked={!!input.checked}
                onChange={input.onChange}
                value={input.value}
              />
            )}
          />
        </RadioField>
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
