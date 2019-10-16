import React from 'react';
import PropTypes from 'prop-types';
import StatusView from 'terra-status-view';

const propTypes = {
  /**
   * Components to render within the context of the ApplicationErrorBoundary. Exceptions thrown
   * by these components during their render lifecycle will be caught by the ApplicationErrorBoundary.
   */
  children: PropTypes.node,
};

/**
 * The ApplicationErrorBoundary is designed to catch exceptions that are thrown
 * by its children during render lifecycle. In the event an exception is thrown,
 * a styled status component will be rendered to communicate the exception to the
 * user.
 * 
 * Unlike a standard error boundary, the error is not persisted within the 
 * ApplicationErrorBoundary's state. The ApplicationErrorBoundary will attempt to
 * render its children each time it is updated. Resetting the ApplicationErrorBoundary
 * by using a key is not necessary.
 */
class ApplicationErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.resetError = () => {
      this.errorRef.current = undefined;
      if (this.state.error) {
        this.setState({ error: undefined });
      }  
    }

    this.errorRef = React.createRef();

    this.state = { error: undefined };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error) {
    this.errorRef.current = error;
    this.setState({ error: false });
  }

  componentDidMount() {
    this.resetError();
  }

  componentDidUpdate() {
    this.resetError();
  }

  render() {
    const { children } = this.props;
    const activeError = this.state.error || this.errorRef.current;

    if (activeError) {
      return (
        <StatusView
          variant="error"
          message={activeError.toString()}
        />
      );
    }

    return children;
  }
}

ApplicationErrorBoundary.propTypes = propTypes;

export default ApplicationErrorBoundary;
