import React from 'react';
import PropTypes from 'prop-types';
import NotificationDialog from 'terra-notification-dialog';
import PromptRegistrationContext, { promptRegistrationContextValueShape } from './PromptRegistrationContext';
import withPromptRegistration from './_withPromptRegistration';

const propTypes = {
  /**
   * Components to render within the context of the NavigationPromptCheckpoint. Any NavigationPrompts rendered within
   * these child components will be registered to this NavigationPromptCheckpoint instance.
   */
  children: PropTypes.node,
  /**
   * A function that will be executed when NavigationPrompts are registered to or unregistered from the NavigationPromptCheckpoint instance.
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
    this.unregisterPrompt = this.unregisterPrompt.bind(this);
    this.resolvePrompts = this.resolvePrompts.bind(this);
    this.renderNotificationDialog = this.renderNotificationDialog.bind(this);

    this.registeredPrompts = {};
    this.promptProviderValue = {
      registerPrompt: this.registerPrompt,
      unregisterPrompt: this.unregisterPrompt,
    };

    this.state = {
      notificationDialogProps: undefined,
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

  unregisterPrompt(promptId) {
    const { onPromptChange, promptRegistration } = this.props;

    if (!this.registeredPrompts[promptId]) {
      return;
    }

    delete this.registeredPrompts[promptId];

    if (onPromptChange) {
      onPromptChange(NavigationPromptCheckpoint.getPromptArray(this.registeredPrompts));
    }

    promptRegistration.unregisterPrompt(promptId);
  }

  /**
   * `resolvePrompts` returns a Promise that will be resolved or rejected based upon the presence of child prompts and
   * the the actions taken by a user from the checkpoint's NotificationDialog.
   *
   * This function is part of the NavigationPromptCheckpoint's public API. Changes to this function name or overall functionality
   * will impact the package's version.
   */
  resolvePrompts(options = {}) {
    /**
      * If no prompts are registered, then no prompts must be rendered.
      */
    if (!Object.keys(this.registeredPrompts).length) {
      return Promise.resolve();
    }

    let showDialogOptions = options;
    if (typeof showDialogOptions === 'function') {
      showDialogOptions = showDialogOptions(NavigationPromptCheckpoint.getPromptArray(this.registeredPrompts));
    }

    /**
     * Otherwise, the NotificationDialog is shown.
     */
    return new Promise((resolve, reject) => {
      this.setState({
        notificationDialogProps: {
          title: showDialogOptions.title,
          startMessage: showDialogOptions.startMessage,
          content: showDialogOptions.content,
          endMessage: showDialogOptions.endMessage,
          acceptButtonText: showDialogOptions.acceptButtonText,
          rejectButtonText: showDialogOptions.rejectButtonText,
          emphasizedAction: showDialogOptions.emphasizedAction,
          buttonOrder: showDialogOptions.buttonOrder,
          onAccept: resolve,
          onReject: reject,
        },
      });
    });
  }

  renderNotificationDialog() {
    const {
      title, startMessage, endMessage, content, acceptButtonText, rejectButtonText, emphasizedAction, buttonOrder, onAccept, onReject,
    } = this.state.notificationDialogProps;

    const acceptButton = {
      text: acceptButtonText,
      onClick: () => {
        this.setState({ notificationDialogProps: undefined }, onAccept);
      },
    };

    const rejectButton = {
      text: rejectButtonText,
      onClick: () => {
        this.setState({ notificationDialogProps: undefined }, onReject);
      },
    };

    return (
      <NotificationDialog
        isOpen
        title={title}
        startMessage={startMessage}
        endMessage={endMessage}
        content={content}
        acceptAction={acceptButton}
        rejectAction={rejectButton}
        buttonOrder={buttonOrder}
        emphasizedAction={emphasizedAction}
        variant="warning"
      />
    );
  }

  render() {
    const { children } = this.props;
    const { notificationDialogProps } = this.state;

    return (
      <PromptRegistrationContext.Provider value={this.promptProviderValue}>
        {children}
        {notificationDialogProps ? this.renderNotificationDialog() : undefined}
      </PromptRegistrationContext.Provider>
    );
  }
}

NavigationPromptCheckpoint.propTypes = propTypes;

export default withPromptRegistration(NavigationPromptCheckpoint);
