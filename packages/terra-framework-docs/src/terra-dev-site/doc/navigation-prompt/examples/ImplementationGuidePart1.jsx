import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import NavigationPrompt, { NavigationPromptCheckpoint } from 'terra-navigation-prompt';

const Form = ({ title, ariaLabel }) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div>
      <p>{title}</p>
      {inputValue.length ? <NavigationPrompt description={title} /> : undefined}
      <input
        type="text"
        aria-label={ariaLabel}
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
  ariaLabel: PropTypes.string,
};

const FormSwitcher = () => {
  const [activeForm, setActiveForm] = useState('Form 1');
  const formCheckpointRef = useRef();

  function onSwitchForm(formKey) {
    formCheckpointRef.current.resolvePrompts({
      title: 'Descriptive Notification Prompt Title',
      startMessage: 'Descriptive Notification Prompt Message',
      rejectButtonText: 'Descriptive Reject Button Action',
      acceptButtonText: 'Descriptive Accept Button Action',
      buttonOrder: 'acceptFirst',
    }).then(() => {
      setActiveForm(formKey);
    }).catch(() => {
    });
  }

  return (
    <div>
      <h2>Form Switcher</h2>
      <p>The user will be prompted with the provided messaging when Forms are switched with unsaved changes present.</p>
      <button
        type="button"
        disabled={activeForm === 'Form 1'}
        onClick={onSwitchForm.bind(null, 'Form 1')}
      >
        Switch to Form 1
      </button>
      <button
        type="button"
        disabled={activeForm === 'Form 2'}
        onClick={onSwitchForm.bind(null, 'Form 2')}
      >
        Switch to Form 2
      </button>
      <NavigationPromptCheckpoint
        ref={formCheckpointRef}
      >
        <Form title={activeForm} key={activeForm} ariaLabel={activeForm} />
      </NavigationPromptCheckpoint>
    </div>
  );
};

export default FormSwitcher;
