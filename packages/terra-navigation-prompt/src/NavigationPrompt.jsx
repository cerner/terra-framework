import React from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';

import withPromptRegistration from './_withPromptRegistration';
import { promptRegistrationContextValueShape } from './PromptRegistrationContext';

const propTypes = {
  /**
   * A string describing the content or concept for which the NavigationPrompt is being rendered.
   */
  description: PropTypes.string,
  /**
   * An object containing any other pertinent information related to the NavigationPrompt.
   */
  metaData: PropTypes.object,
  /**
   * @private
   * An object containing prompt registration APIs provided through the PromptRegistrationContext.
   */
  promptRegistration: promptRegistrationContextValueShape.isRequired,
};

class NavigationPrompt extends React.Component {
  constructor(props) {
    super(props);

    /**
     * A unique identifier is generated for each NavigationPrompt during construction. This will be used to
     * uniquely register/deregister the prompt with ancestor checkpoints without requiring consumers to
     * define unique identifiers themselves.
     */
    this.uuid = uuidv4();
  }

  componentDidMount() {
    const { description, metaData, promptRegistration } = this.props;

    /**
     * If the promptRegistration value is the ProviderRegistrationContext's default value,
     * then there is not a matching NavigationPromptCheckpoint above it in the hierarchy.
     * This is possible but likely not intentional, so the component warns.
     */
    if (promptRegistration.isDefaultContextValue && process.env.NODE_ENV !== 'production') {
      /* eslint-disable no-console */
      console.warn('A NavigationPrompt was not rendered within the context of a NavigationPromptCheckpoint. If this is unexpected, validate that the expected version of the terra-navigation-prompt package is installed.');
      /* eslint-enable no-console */
    }

    promptRegistration.registerPrompt(this.uuid, description, metaData);
  }

  shouldComponentUpdate(nextProps) {
    const { description, metaData } = this.props;
    if (description !== nextProps.description || metaData !== nextProps.metaData) {
      return true;
    }

    return false;
  }

  componentDidUpdate() {
    const { description, metaData, promptRegistration } = this.props;

    promptRegistration.registerPrompt(this.uuid, description, metaData);
  }

  componentWillUnmount() {
    this.props.promptRegistration.deregisterPrompt(this.uuid);
  }

  render() {
    return null;
  }
}

NavigationPrompt.propTypes = propTypes;

export default withPromptRegistration(NavigationPrompt);
