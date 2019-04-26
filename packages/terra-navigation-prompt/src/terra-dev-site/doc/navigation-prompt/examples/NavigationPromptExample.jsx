import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import NavigationPrompt, { NavigationPromptCheckpoint } from '../../../../index';

/**
 * The Input is a stateful component that renders a NavigationPrompt based upon its current input element value.
 * It provides its NavigationPrompt with a description and a metaData object containing its current value.
 */
const Input = ({ title }) => {
  const [inputValue, setInputValue] = useState('');
  const promptMetaData = useRef({
    value: '',
  });

  /**
   * The Input renders a NavigationPrompt when it wants to communicate the presence of its unresolved
   * state.
   */
  return (
    <div style={{ paddingBottom: '10px' }}>
      {inputValue && inputValue.length ? <NavigationPrompt description={title} metaData={promptMetaData.current} /> : null}
      <div style={{ paddingBottom: '10px' }}>
        <span style={{ fontWeight: 'bold' }}>{title}</span>
        {inputValue && inputValue.length ? <span style={{ paddingLeft: '5px', fontStyle: 'italic' }}>(Unsaved value is present and NavigationPrompt is rendered)</span> : null}
      </div>
      <input
        type="text"
        style={{ width: '100%' }}
        onChange={(event) => {
          promptMetaData.current = {
            value: event.target.value,
          };

          setInputValue(event.target.value);
        }}
      />
    </div>
  );
};

Input.propTypes = {
  title: PropTypes.string,
};

/**
 * The Form renders two Input components to demonstrate the the registration logic of multiple concurrent NavigationPrompts.
 * The Form also renders a NavigationPromptCheckpoint around those Inputs in order to demonstrate the NavigationPromptCheckpoint's ability to
 * render a custom title/message during prompt resolution.
 *
 * Before the Form's Reset action can occur, the Form resolves the prompts below its checkpoint with a custom title and message featuring the
 * registered prompts' descriptions and metaData. If the user confirms the Reset, the Input components are unmounted and replaced with new instances
 * that have no unsaved changes (and thus render no NavigationPrompts). If the user denies the Reset, no action is taken.
 *
 * The Form's Submit action does not prompt the user before clearing the Input values, demonstrating that the onus is on the Form, not the Input, to trigger
 * the prompt resolver when necessary.
 */
const Form = ({ title }) => {
  const [timeStamp, setTimeStamp] = useState(Date.now());
  const inputCheckpointRef = useRef();

  return (
    <div style={{ padding: '10px', border: '1px solid lightgrey' }}>
      <NavigationPromptCheckpoint
        ref={inputCheckpointRef}
      >
        <React.Fragment key={timeStamp}>
          <h3>{title}</h3>
          <p>The Form renders a NavigationPromptCheckpoint around its child Input components. If NavigationPrompts are rendered by any child components, the Form will resolve those prompts before resetting the Input values.</p>
          <p>
            Last Updated:
            {' '}
            {new Date(timeStamp).toLocaleString()}
          </p>
          <Input title="Text Input A" />
          <Input title="Text Input B" />
          <br />
          <button
            type="button"
            onClick={() => {
              inputCheckpointRef.current.resolvePrompts(prompts => ({
                title: prompts.map(prompt => prompt.description).join(', '),
                message: `There are unsubmitted changes in ${prompts.map(prompt => prompt.description).join(', ')}. Continue with Form reset?`,
                rejectButtonText: 'Return',
                acceptButtonText: 'Continue without Saving',
              })).then(() => {
                setTimeStamp(Date.now());
              }).catch(() => {
                // User prevented navigation.
              });
            }}
          >
            Reset
          </button>
          <button
            type="button"
            onClick={() => {
              setTimeStamp(Date.now());
            }}
          >
            Submit
          </button>
        </React.Fragment>
      </NavigationPromptCheckpoint>
    </div>
  );
};

Form.propTypes = {
  title: PropTypes.string,
};

/**
 * The FormSwitcher toggles between two versions a Form to demonstrate the functionality of nested NavigationPromptCheckpoints.
 * Any NavigationPrompt registered to the Form's checkpoint will also be registered to the FormSwitcher's checkpoint.
 *
 * Before the FormSwitcher changes the Form type, the FormSwitcher resolves the prompts below its checkpoint with the default prompt title and message.
 * If the user confirms the switch, the Form component is unmounted and replace with a new version containing no unsaved changes. If the user denies the switch,
 * no action is taken.
 */
const FormSwitcher = () => {
  const [activeForm, setActiveForm] = useState('Form 1');
  const formCheckpointRef = useRef();

  function onSwitchForm(formKey) {
    formCheckpointRef.current.resolvePrompts({
      title: 'Pending Changes',
      message: 'Form data will be lost if this action is taken.',
      rejectButtonText: `Return to ${activeForm}`,
      acceptButtonText: 'Continue without Saving',
    }).then(() => {
      setActiveForm(formKey);
    }).catch(() => {
      // User prevented form switch.
    });
  }

  return (
    <div>
      <h2>Form Switcher</h2>
      <p>The FormSwitcher renders a NavigationPromptCheckpoint around its child Form component. If NavigationPrompts are rendered by any child components, the FormSwitcher will resolve those prompts before rendering a different Form.</p>
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
      <br />
      <br />
      <NavigationPromptCheckpoint ref={formCheckpointRef}>
        <Form title={activeForm} key={activeForm} />
      </NavigationPromptCheckpoint>
    </div>
  );
};

/**
 * The NavigationPromptExample renders a NavigationPromptCheckpoint around the FormSwitcher to demonstrate the
 * functionality of the onPromptChange callback. onPromptChange receives the current set of prompts as its first argument,
 * and it executes whenever a NavigationPrompt registers or deregisters with a NavigationPromptCheckpoint.
 */
const NavigationPromptExample = () => {
  const [prompts, setPrompts] = useState([]);

  return (
    <div style={{ padding: '10px' }}>
      <span style={{ fontWeight: 'bold' }}>Registered Prompts: </span>
      {prompts.length ? <span>{prompts.map(prompt => `${prompt.description} (${prompt.metaData.value})`).join(', ')}</span> : null}
      <br />
      <hr />
      <NavigationPromptCheckpoint
        onPromptChange={(newPrompts) => {
          setPrompts(newPrompts);
        }}
      >
        <FormSwitcher />
      </NavigationPromptCheckpoint>
    </div>
  );
};

export default NavigationPromptExample;
