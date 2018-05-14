/* eslint-disable class-methods-use-this */

import React from 'react';
import { Form, Field } from 'react-final-form';
import InputField from 'terra-form-input/lib/InputField';
import Checkbox from 'terra-form-checkbox';
import Radio from 'terra-form-radio';
import Button from 'terra-button';
import Spacer from 'terra-spacer';
import Text from 'terra-text';
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
            <InputField
              {...rest}
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
          <h2>Which kind of meal would you like?</h2>
          <Field
            name="meal"
            type="radio"
            value="chicken"
            validate={required}
            component={({ input, meta, ...rest }) => (
              <Radio
                inputAttrs={{ ...input }}
                labelText="Chicken"
                id={input.id}
                name={input.name}
                checked={!!input.checked}
                onChange={input.onChange}
                value={input.value}
                {...rest}
              />
            )}
          />
          <Field
            name="meal"
            type="radio"
            value="vegetarian"
            validate={required}
            component={({ input, meta, ...rest }) => (
              <Radio
                inputAttrs={{ ...input }}
                labelText="Vegetarian"
                id={input.id}
                name={input.name}
                checked={!!input.checked}
                onChange={input.onChange}
                value={input.value}
                {...rest}
              />
            )}
          />
          <Field
            name="meal"
            type="radio"
            value="fish"
            validate={required}
            component={({ input, meta, ...rest }) => (
              <Radio
                inputAttrs={{ ...input }}
                labelText="Fish"
                id={input.id}
                name={input.name}
                checked={!!input.checked}
                onChange={input.onChange}
                value={input.value}
                {...rest}
              />
            )}
          />
          <Field
            name="meal"
            subscription={{ error: true, submitFailed: true }}
            render={({ meta }) => (
              meta.submitFailed ? <Text color="#e50000">{meta.error}</Text> : null
            )}
          />
        </div>
        <Field
          name="travel"
          type="select"
          validate={required}
          component={({ input, meta }) => (
            <div>
              <h2>Which Airliner are you traveling on?</h2>
              <Select
                name={input.name}
                onChange={(e, value) => { input.onChange(value); }}
                defaultValue={input.value}
                placeholder="Select an Airline"
              >
                <Select.Option value="southwest" display="Southwest" key="southwest" />
                <Select.Option value="alaska" display="Alaska" key="alaska" />
                <Select.Option value="hawaii" display="Hawaii" key="hawaii" />
              </Select>
              <Text color="#e50000">{meta.submitFailed && meta.error}</Text>
            </div>
          )}
        />
        <div>
          <h2>What are all the conference tracks you plan on attending?</h2>
          <Field
            name="tracks[]"
            type="checkbox"
            value="developer"
            validate={required}
            component={({ input, meta, ...rest }) => (
              <Checkbox
                inputAttrs={{ ...input }}
                labelText="Developer"
                id={input.id}
                name={input.name}
                checked={!!input.checked}
                onChange={input.onChange}
                value={input.value}
                {...rest}
              />
            )}
          />
          <Field
            name="tracks[]"
            type="checkbox"
            value="designer"
            validate={required}
            component={({ input, meta, ...rest }) => (
              <Checkbox
                inputAttrs={{ ...input }}
                labelText="Designer"
                id={input.id}
                name={input.name}
                checked={!!input.checked}
                onChange={input.onChange}
                value={input.value}
                {...rest}
              />
            )}
          />
          <Field
            name="tracks[]"
            type="checkbox"
            value="soft_skills"
            validate={required}
            component={({ input, meta, ...rest }) => (
              <Checkbox
                inputAttrs={{ ...input }}
                labelText="Soft skills"
                id={input.id}
                name={input.name}
                checked={!!input.checked}
                onChange={input.onChange}
                value={input.value}
                {...rest}
              />
            )}
          />
          <Field
            name="tracks[]"
            subscription={{ error: true, submitFailed: true }}
            render={({ meta }) => (
              meta.submitFailed ? <Text color="#e50000">{meta.error}</Text> : null
            )}
          />
        </div>
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
