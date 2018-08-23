/* eslint-disable class-methods-use-this */

import React from 'react';
import { Form, Field } from 'react-final-form';
import InputField from 'terra-form-input/lib/InputField';
import Checkbox from 'terra-form-checkbox';
import CheckboxField from 'terra-form-checkbox/lib/CheckboxField';
import TerraField from 'terra-form-field';
import Radio from 'terra-form-radio';
import RadioField from 'terra-form-radio/lib/RadioField';
import Button from 'terra-button';
import Spacer from 'terra-spacer';
import Select from 'terra-form-select';

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
        <Field
          name="description"
          validate={required}
        >
          {({ input, meta }) => (
            <InputField
              inputId="description"
              label="Description"
              error={meta.error}
              isInvalid={meta.submitFailed}
              inputAttrs={{
                placeholder: 'Description',
                ...input,
              }}
              onChange={(e) => { input.onChange(e.target.value); }}
              value={input.value}
              required
            />
          )}
        </Field>
        <div>
          <RadioField
            legend="Which kind of meal would you like?"
            isInvalid={submitFailed && errors.meal !== undefined}
            error={errors.meal}
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
        </div>
        <Field
          name="travel"
          type="select"
          validate={required}
          component={({ input, meta }) => (
            <TerraField
              htmlFor="airliner"
              label="Which Airliner are you traveling on?"
              isInvalid={meta.submitFailed && meta.error !== undefined}
              error={meta.error}
            >
              <Select
                id="airliner"
                name={input.name}
                onChange={(e, value) => { input.onChange(value); }}
                defaultValue={input.value}
                placeholder="Select an Airline"
              >
                <Select.Option value="southwest" display="Southwest" key="southwest" />
                <Select.Option value="alaska" display="Alaska" key="alaska" />
                <Select.Option value="hawaii" display="Hawaii" key="hawaii" />
              </Select>
            </TerraField>
          )}
        />
        <div>
          <CheckboxField
            legend="What are all the conference tracks you plan on attending?"
            error={errors.tracks}
            isInvalid={submitFailed && errors.tracks !== undefined}
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
        </div>
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
          initialValues={{ description: '' }}
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
