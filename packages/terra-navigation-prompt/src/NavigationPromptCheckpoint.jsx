import React from 'react';
import PropTypes from 'prop-types';
import NotificationDialog from 'terra-notification-dialog';
import PromptRegistrationContext from './PromptRegistrationContext';

const propTypes = {
  /**
   * Components to render within the context of the NavigationPromptCheckpoint. Any NavigationPrompts rendered within
   * these child components will be registered to this NavigationPromptCheckpoint instance.
   */
  children: PropTypes.node,
  /**
   * If a string is provided, the string will be used directly as the title of the NotificationDialog presented during
   * prompt resolution.
   *
   * If a function is provided, the function will be executed during prompt resolution with the expectation that it returns
   * a string to be used as the NotificationDialog title. The function will be provided with an array of data objects
   * representing the registered NavigationPrompts as the sole argument.
   *
   * Function Example:
   *
   * `(arrayOfPrompts) => {
   *   arrayOfPrompts.forEach((prompt) => {
   *     console.log(prompt.description);
   *     console.log(prompt.metaData);
   *   })
   *   return 'Custom Title';
   * }`
   *
   * If not provided, a default title will be presented.
   */
  customResolverTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  /**
   * If a string is provided, the string will be used directly as the message of the NotificationDialog presented during
   * prompt resolution.
   *
   * If a function is provided, the function will be executed during prompt resolution with the expectation that it returns
   * a string to be used as the NotificationDialog message. The function will be provided with an array of data objects
   * representing the registered NavigationPrompts as the sole argument.
   *
   * Function Example:
   *
   * `(arrayOfPrompts) => {
   *   arrayOfPrompts.forEach((prompt) => {
   *     console.log(prompt.description);
   *     console.log(prompt.metaData);
   *   })
   *   return 'Custom Message';
   * }`
   *
   * If not provided, a default message will be presented.
   */
  customResolverMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
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

    this.getResolverTitleString = this.getResolverTitleString.bind(this);
    this.getResolverMessageString = this.getResolverMessageString.bind(this);

    this.registerPrompt = this.registerPrompt.bind(this);
    this.deregisterPrompt = this.deregisterPrompt.bind(this);
    this.resolvePrompts = this.resolvePrompts.bind(this);

    this.registeredPrompts = {};
    this.promptProviderValue = {
      registerPrompt: this.registerPrompt,
      deregisterPrompt: this.deregisterPrompt,
    };

    this.state = {};
  }

  componentWillUnmount() {
    const { onPromptChange } = this.props;

    if (onPromptChange) {
      /**
       * The implementer is notified a final time with an empty set of prompt data.
       */
      onPromptChange([]);
    }
  }

  getResolverTitleString() {
    const { customResolverTitle } = this.props;

    if (!customResolverTitle) {
      return 'Unsaved Changes';
    }

    if (typeof customResolverTitle === 'string') {
      return customResolverTitle;
    }

    return customResolverTitle(NavigationPromptCheckpoint.getPromptArray(this.registeredPrompts));
  }

  getResolverMessageString() {
    const { customResolverMessage } = this.props;

    if (!customResolverMessage) {
      return 'Unsaved changes were detected. Do you wish to continue?';
    }

    if (typeof customResolverMessage === 'string') {
      return customResolverMessage;
    }

    return customResolverMessage(NavigationPromptCheckpoint.getPromptArray(this.registeredPrompts));
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
  resolvePrompts() {
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
        confirmationPrompt: { resolve, reject },
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
          <NotificationDialog
            isOpen
            title={this.getResolverTitleString()}
            message={this.getResolverMessageString()}
            primaryAction={{
              text: 'OK',
              onClick: () => {
                confirmationPrompt.resolve();
                this.setState({
                  confirmationPrompt: undefined,
                });
              },
            }}
            secondaryAction={{
              text: 'Cancel',
              onClick: () => {
                confirmationPrompt.reject();
                this.setState({
                  confirmationPrompt: undefined,
                });
              },
            }}
            variant="warning"
          />
        ) : undefined}
      </PromptRegistrationContext.Provider>
    );
  }
}

NavigationPromptCheckpoint.propTypes = propTypes;
NavigationPromptCheckpoint.contextType = PromptRegistrationContext;

export default NavigationPromptCheckpoint;
