import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import NavigationPrompt, { NavigationPromptCheckpoint } from 'terra-navigation-prompt';
import styles from './NavigationPromptExample.module.scss';

const cx = classNames.bind(styles);

const exampleTitle = 'Descriptive Notification Prompt Title';
const exampleMessage = 'A Notification Prompt usually has an introductory warning instructing the user that there are unsaved changes or that there is a similar situation that warrants capturing the user\'s attention and requires that they take action before continuing.\n\nIt is good practice to include details about the originating source (page name, side-panel title, modal header title, etc.) and location description (form name, title from the section of the page, general position, etc.) to provide the user a contextual reference as to where they have an area needing attention: e.g. where data is about to be lost, the window about to be closed, the section about to be removed. Following the initial details, it is helpful to include a detailed description educating the user about any danger or caution as to what will happen to the current items about to be lost (form data, page content, etc.) if the user chooses each of the two actions provided in the notification prompt message.';
const exampleRejectButtonText = 'Descriptive Reject Button Action';
const exampleAcceptButtonText = 'Descriptive Accept Button Action';
const exampleButtonOrder = 'acceptFirst';

/**
 * The Input is a stateful component that renders a NavigationPrompt based upon its current input element value.
 * It provides its NavigationPrompt with a description and a metaData object containing its current value.
 */
const Input = ({ title, ariaLabel }) => {
  const [inputValue, setInputValue] = useState('');
  const promptMetaData = useRef({
    value: '',
  });

  /**
   * The Input renders a NavigationPrompt when it wants to communicate the presence of its unresolved
   * state.
   */
  return (
    <div className={cx('input-content-wrapper')}>
      {inputValue && inputValue.length ? <NavigationPrompt description={title} metaData={promptMetaData.current} /> : null}
      <div className={cx('content-wrapper')}>
        <span className={cx('title')}>{title}</span>
        {inputValue && inputValue.length ? <span className={cx('prompt-text-wrapper')}>(Unsaved value is present and NavigationPrompt is rendered)</span> : null}
      </div>
      <input
        type="text"
        className={cx('input-text-box')}
        aria-label={ariaLabel}
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
  ariaLabel: PropTypes.string,
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
    <div className={cx('form-content-wrapper')}>
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
          <Input title="Text Input A" ariaLabel="Text Input A" />
          <Input title="Text Input B" ariaLabel="Text Input B" />
          <br />
          <button
            type="button"
            onClick={() => {
              inputCheckpointRef.current.resolvePrompts({
                title: exampleTitle,
                startMessage: exampleMessage,
                rejectButtonText: exampleRejectButtonText,
                acceptButtonText: exampleAcceptButtonText,
                buttonOrder: exampleButtonOrder,
              }).then(() => {
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
      title: exampleTitle,
      startMessage: exampleMessage,
      rejectButtonText: exampleRejectButtonText,
      acceptButtonText: exampleAcceptButtonText,
      buttonOrder: exampleButtonOrder,
    }).then(() => {
      setActiveForm(formKey);
    }).catch(() => {
      // User prevented form switch.
    });
  }

  return (
    <div>
      <h2>Form Switcher</h2>
      <p>The FormSwitcher is an example component that uses the NavigationPrompt and NavigationPromptCheckpoint. If NavigationPrompts are rendered by any child components, the FormSwitcher will resolve those prompts before rendering a different Form.</p>
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
 * and it executes whenever a NavigationPrompt registers or unregisters with a NavigationPromptCheckpoint.
 */
const NavigationPromptExample = () => {
  const [prompts, setPrompts] = useState([]);

  return (
    <div className={cx('example-content-wrapper')}>
      <span className={cx('title')}>Registered Prompts: </span>
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
