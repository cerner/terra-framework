import React from 'react';
import PropTypes from 'prop-types';
import logger from 'terra-application/lib/utils/logger';

const propTypes = {
  /**
   * Function to be executed when an error is caught. If not provided, the error boundary will
   * throw the error to be caught elsewhere.
   */
  onCatchError: PropTypes.func,
  /**
   * Components to render within the context of the ErrorBoundary. Exceptions thrown
   * by these components during their render lifecycle will be caught by the ErrorBoundary.
   */
  children: PropTypes.node,
};

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = { error: undefined };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error) {
    logger.error(error);

    if (this.props.onCatchError) {
      this.props.onCatchError(error);
      return;
    }

    throw error;
  }

  render() {
    if (this.state.error) {
      return null;
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = propTypes;

export default ErrorBoundary;
