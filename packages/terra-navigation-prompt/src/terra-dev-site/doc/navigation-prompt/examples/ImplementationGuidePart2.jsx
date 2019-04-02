import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import NavigationPrompt, { NavigationPromptCheckpoint } from '../../../../index';

const Form = ({ title }) => {
  const [inputValue, setInputValue] = useState('');
  const promptMetaData = useRef({
    timeOfLastInput: undefined,
  });

  return (
    <div>
      <p>{title}</p>
      {inputValue.length ? <NavigationPrompt description={title} metaData={promptMetaData.current} /> : undefined}
      <input
        type="text"
        onChange={(event) => {
          promptMetaData.current = {
            timeOfLastInput: Date.now(),
          };
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
  const formCheckpointRef = useRef();

  return (
    <div>
      <h2>Form Switcher</h2>
      <p>The user will be prompted with custom messaging when Forms are switched with unsaved changes present.</p>
      <button
        type="button"
        disabled={activeForm === 'Form 1'}
        onClick={() => {
          formCheckpointRef.current.resolvePrompts('Form Switcher', 'Switching forms will result in lost data.').then(() => {
            setActiveForm('Form 1');
          });
        }}
      >
        Switch to Form 1
      </button>
      <button
        type="button"
        disabled={activeForm === 'Form 2'}
        onClick={() => {
          formCheckpointRef.current.resolvePrompts('Form Switcher', 'Switching forms will result in lost data.').then(() => {
            setActiveForm('Form 2');
          });
        }}
      >
        Switch to Form 2
      </button>
      <NavigationPromptCheckpoint
        ref={formCheckpointRef}
      >
        <Form title={activeForm} key={activeForm} />
      </NavigationPromptCheckpoint>
    </div>
  );
};

export default FormSwitcher;
