import React, { useState } from 'react';
import PropTypes from 'prop-types';
import NavigationPrompt, { NavigationPromptCheckpoint } from '../../../../index';

const Form = ({ title }) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div>
      <p>{title}</p>
      {inputValue.length ? <NavigationPrompt description={title} /> : undefined}
      <input
        type="text"
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
        value={inputValue}
      />
      <button
        type="button"
        onClick={() => {
          setInputValue('');
        }}
      >
        Submit
      </button>
    </div>
  );
};

Form.propTypes = {
  title: PropTypes.string,
};

const FormSwitcher = () => {
  const [activeForm, setActiveForm] = useState('Form 1');
  const [activePrompts, setActivePrompts] = useState([]);

  function onSwitchForm(formKey) {
    setActiveForm(formKey);
  }

  return (
    <div>
      <h2>Form Switcher</h2>
      <p>Custom logic has been implemented to prevent navigation altogether when NavigationPrompts are present.</p>
      <button
        type="button"
        disabled={activeForm === 'Form 1' || activePrompts.length}
        onClick={onSwitchForm.bind(null, 'Form 1')}
      >
        Switch to Form 1
      </button>
      <button
        type="button"
        disabled={activeForm === 'Form 2' || activePrompts.length}
        onClick={onSwitchForm.bind(null, 'Form 2')}
      >
        Switch to Form 2
      </button>
      <NavigationPromptCheckpoint
        onPromptChange={(prompts) => {
          setActivePrompts(prompts);
        }}
      >
        <Form title={activeForm} key={activeForm} />
      </NavigationPromptCheckpoint>
    </div>
  );
};

export default FormSwitcher;
