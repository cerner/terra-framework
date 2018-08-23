/* eslint-disable class-methods-use-this */

import React from 'react';
import { Form, Field } from 'react-final-form';
import Checkbox from 'terra-form-checkbox';
import CheckboxField from 'terra-form-checkbox/lib/CheckboxField';
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
        <CheckboxField
          legend="What are all the conference tracks you plan on attending?"
          error={errors.tracks}
          isInvalid={submitFailed && errors.tracks !== undefined}
          required
        >
          <Field
            name="tracks[]"
            type="checkbox"
            value="developer"
            validate={required}
            component={({ input }) => (
              <Checkbox
                inputAttrs={{ ...input }}
                labelText="Developer"
                id={input.id}
                name={input.name}
                checked={!!input.checked}
                onChange={input.onChange}
                value={input.value}
              />
            )}
          />
          <Field
            name="tracks[]"
            type="checkbox"
            value="designer"
            validate={required}
            component={({ input }) => (
              <Checkbox
                inputAttrs={{ ...input }}
                labelText="Designer"
                id={input.id}
                name={input.name}
                checked={!!input.checked}
                onChange={input.onChange}
                value={input.value}
              />
            )}
          />
          <Field
            name="tracks[]"
            type="checkbox"
            value="soft_skills"
            validate={required}
            component={({ input }) => (
              <Checkbox
                inputAttrs={{ ...input }}
                labelText="Soft skills"
                id={input.id}
                name={input.name}
                checked={!!input.checked}
                onChange={input.onChange}
                value={input.value}
              />
            )}
          />
        </CheckboxField>
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
