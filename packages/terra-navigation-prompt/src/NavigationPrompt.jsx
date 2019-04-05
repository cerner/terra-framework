import React from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';

import PromptRegistrationContext from './PromptRegistrationContext';

const propTypes = {
  /**
   * A string describing the content or concept for which the NavigationPrompt is being rendered.
   */
  description: PropTypes.string,
  /**
   * An object containing any other pertinent information related to the NavigationPrompt.
   */
  metaData: PropTypes.object,
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
    const { description, metaData } = this.props;
    const ancestorCheckpoint = this.context;

    /**
     * If the ancestorCheckpoint value is the ProviderRegistrationContext's default value, then there is not a matching NavigationPromptCheckpoint in the hierarchy.
     */
    if (ancestorCheckpoint.isDefaultContextValue && process.env.NODE_ENV !== 'production') {
      /* eslint-disable no-console */
      console.warn('A NavigationPrompt was not rendered within the context of a NavigationPromptCheckpoint. If this is unexpected, validate that the expected version of the terra-navigation-prompt package is installed.');
      /* eslint-enable no-console */
    }

    ancestorCheckpoint.registerPrompt(this.uuid, description, metaData);
  }

  shouldComponentUpdate(nextProps) {
    const { description, metaData } = this.props;
    if (description !== nextProps.description || metaData !== nextProps.metaData) {
      return true;
    }

    return false;
  }

  componentDidUpdate() {
    const { description, metaData } = this.props;
    const ancestorCheckpoint = this.context;

    /**
     * The NavigationPrompt is unregistered and then re-registered with the mosts recent prop values.
     */
    ancestorCheckpoint.deregisterPrompt(this.uuid);
    ancestorCheckpoint.registerPrompt(this.uuid, description, metaData);
  }

  componentWillUnmount() {
    this.context.deregisterPrompt(this.uuid);
  }

  render() {
    return null;
  }
}

NavigationPrompt.propTypes = propTypes;
NavigationPrompt.contextType = PromptRegistrationContext;

export default NavigationPrompt;
