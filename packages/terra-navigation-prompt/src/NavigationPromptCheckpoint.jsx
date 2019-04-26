import React from 'react';
import PropTypes from 'prop-types';

import PromptRegistrationContext, { promptRegistrationContextValueShape } from './PromptRegistrationContext';
import withPromptRegistration from './_withPromptRegistration';
import CheckpointNotificationDialog from './_CheckpointNotificationDialog';

const propTypes = {
  /**
   * Components to render within the context of the NavigationPromptCheckpoint. Any NavigationPrompts rendered within
   * these child components will be registered to this NavigationPromptCheckpoint instance.
   */
  children: PropTypes.node,
  /**
   * A function that will be executed when NavigationPrompts are registered to or deregistered from the NavigationPromptCheckpoint instance.
   * This can be used to track registered prompts outside of a NavigationPromptCheckpoint and handle prompt resolution directly, if necessary.
   * The function will be provided with an array of data objects representing the registered NavigationPrompts as the sole argument. An empty
   * Array will be provided when no prompts are registered.
   *
   * Function Example:
   *
   * ```
   * (arrayOfPrompts) => {
   *   arrayOfPrompts.forEach((prompt) => {
   *     console.log(prompt.description);
   *     console.log(prompt.metaData);
   *   })
   *   this.myLocalPromptRegistry = arrayOfPrompts;
   * }
   * ```
   */
  onPromptChange: PropTypes.func,
  /**
   * @private
   * An object containing prompt registration APIs provided through the PromptRegistrationContext.
   */
  promptRegistration: promptRegistrationContextValueShape.isRequired,
};

class NavigationPromptCheckpoint extends React.Component {
  static getPromptArray(prompts) {
    return Object.keys(prompts).map(id => prompts[id]);
  }

  constructor(props) {
    super(props);

    this.registerPrompt = this.registerPrompt.bind(this);
    this.deregisterPrompt = this.deregisterPrompt.bind(this);
    this.resolvePrompts = this.resolvePrompts.bind(this);

    this.registeredPrompts = {};
    this.promptProviderValue = {
      registerPrompt: this.registerPrompt,
      deregisterPrompt: this.deregisterPrompt,
    };
    this.checkpointNotificationDialogRef = React.createRef();
  }

  componentWillUnmount() {
    const { onPromptChange } = this.props;

    if (onPromptChange) {
      /**
       * The consumer is notified on unmount with an empty set of prompt data to clean up any previously mounted prompts.
       */
      onPromptChange([]);
    }
  }

  registerPrompt(promptId, description, metaData) {
    const { onPromptChange, promptRegistration } = this.props;

    if (!promptId && process.env.NODE_ENV !== 'production') {
      /* eslint-disable no-console */
      console.warn('A NavigationPrompt cannot be registered without an identifier.');
      /* eslint-enable no-console */
      return;
    }

    this.registeredPrompts[promptId] = { description, metaData };

    if (onPromptChange) {
      onPromptChange(NavigationPromptCheckpoint.getPromptArray(this.registeredPrompts));
    }

    promptRegistration.registerPrompt(promptId, description, metaData);
  }

  deregisterPrompt(promptId) {
    const { onPromptChange, promptRegistration } = this.props;

    if (!this.registeredPrompts[promptId]) {
      return;
    }

    delete this.registeredPrompts[promptId];

    if (onPromptChange) {
      onPromptChange(NavigationPromptCheckpoint.getPromptArray(this.registeredPrompts));
    }

    promptRegistration.deregisterPrompt(promptId);
  }

  /**
   * `resolvePrompts` returns a Promise that will be resolved or rejected based upon the presence of child prompts and
   * the the actions taken by a user from the checkpoint's NotificationDialog.
   *
   * This function is part of the NavigationPromptCheckpoint's public API. Changes to this function name or overall functionality
   * will impact the package's version.
   */
  resolvePrompts(dialogOptions = {}) {
    /**
      * If no prompts are registered, then no prompts must be rendered.
      */
    if (!Object.keys(this.registeredPrompts).length) {
      return Promise.resolve();
    }

    const registeredPromptArray = NavigationPromptCheckpoint.getPromptArray(this.registeredPrompts);

    /**
     * Otherwise, the CheckpointNotificationDialog is shown.
     */
    return new Promise((resolve, reject) => {
      this.checkpointNotificationDialogRef.current.showDialog({
        title: typeof dialogOptions.title === 'function' ? dialogOptions.title(registeredPromptArray) : dialogOptions.title,
        message: typeof dialogOptions.message === 'function' ? dialogOptions.message(registeredPromptArray) : dialogOptions.message,
        acceptButtonText: typeof dialogOptions.acceptButtonText === 'function' ? dialogOptions.acceptButtonText(registeredPromptArray) : dialogOptions.acceptButtonText,
        rejectButtonText: typeof dialogOptions.rejectButtonText === 'function' ? dialogOptions.rejectButtonText(registeredPromptArray) : dialogOptions.rejectButtonText,
        onAccept: resolve,
        onReject: reject,
      });
    });
  }

  render() {
    const { children } = this.props;

    return (
      <PromptRegistrationContext.Provider value={this.promptProviderValue}>
        {children}
        <CheckpointNotificationDialog ref={this.checkpointNotificationDialogRef} />
      </PromptRegistrationContext.Provider>
    );
  }
}

NavigationPromptCheckpoint.propTypes = propTypes;

export default withPromptRegistration(NavigationPromptCheckpoint);
