import React from 'react';
import PropTypes from 'prop-types';
import StatusView from 'terra-status-view';

const propTypes = {
  /**
   * Components to render within the context of the ApplicationErrorBoundary
   */
  children: PropTypes.node,
};

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
