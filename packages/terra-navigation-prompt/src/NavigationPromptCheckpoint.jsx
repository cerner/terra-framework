import React from 'react';
import PropTypes from 'prop-types';
import PromptRegistrationContext from './PromptRegistrationContext';
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
   * `(arrayOfPrompts) => {
   *   arrayOfPrompts.forEach((prompt) => {
   *     console.log(prompt.description);
   *     console.log(prompt.metaData);
   *   })
   *   this.myLocalPromptRegistry = arrayOfPrompts;
   * }`
   */
  onPromptChange: PropTypes.func,
};

class NavigationPromptCheckpoint extends React.Component {
  static getPromptArray(prompts) {
    return Object.keys(prompts).map(id => ({ description: prompts[id][0], metaData: prompts[id][1] }));
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

    this.state = {
      confirmationPrompt: undefined,
    };
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

  registerPrompt(promptId, promptDescription, metaData) {
    const { onPromptChange } = this.props;
    const ancestorCheckpoint = this.context;

    if (!promptId) {
      return;
    }

    this.registeredPrompts[promptId] = [promptDescription, metaData];

    if (onPromptChange) {
      onPromptChange(NavigationPromptCheckpoint.getPromptArray(this.registeredPrompts));
    }

    ancestorCheckpoint.registerPrompt(promptId, promptDescription, metaData);
  }

  deregisterPrompt(promptId) {
    const { onPromptChange } = this.props;
    const ancestorCheckpoint = this.context;

    if (!this.registeredPrompts[promptId]) {
      return;
    }

    delete this.registeredPrompts[promptId];

    if (onPromptChange) {
      onPromptChange(NavigationPromptCheckpoint.getPromptArray(this.registeredPrompts));
    }

    ancestorCheckpoint.deregisterPrompt(promptId);
  }

  /**
   * `resolvePrompts` returns a Promise that will be resolved or rejected based upon the presence of child prompts and
   * the the actions taken by a user from the checkpoint's NotificationDialog.
   *
   * This function is part of the NavigationPromptCheckpoint's public API. Changes to this function name or overall functionality
   * will impact the package's version.
   */
  resolvePrompts(title, message) {
    if (!Object.keys(this.registeredPrompts).length) {
      /**
       * If no prompts are registered, then no prompts must be rendered.
       */
      return Promise.resolve();
    }

    /**
     * Otherwise, the default prompt resolution handler is used.
     */
    return new Promise((resolve, reject) => {
      this.setState({
        confirmationPrompt: {
          resolve, reject, title, message,
        },
      });
    });
  }

  render() {
    const { children } = this.props;
    const { confirmationPrompt } = this.state;

    return (
      <PromptRegistrationContext.Provider value={this.promptProviderValue}>
        {children}
        {confirmationPrompt ? (
          <CheckpointNotificationDialog
            customTitle={confirmationPrompt.title}
            customMessage={confirmationPrompt.message}
            onConfirm={() => {
              confirmationPrompt.resolve();
              this.setState({
                confirmationPrompt: undefined,
              });
            }}
            onCancel={() => {
              confirmationPrompt.reject();
              this.setState({
                confirmationPrompt: undefined,
              });
            }}
          />
        ) : undefined}
      </PromptRegistrationContext.Provider>
    );
  }
}

NavigationPromptCheckpoint.propTypes = propTypes;
NavigationPromptCheckpoint.contextType = PromptRegistrationContext;

export default NavigationPromptCheckpoint;
