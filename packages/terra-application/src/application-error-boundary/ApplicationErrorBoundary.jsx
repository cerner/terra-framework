import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
};

class ApplicationErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, componentKey: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '2rem' }}>
          <h1>An error has ocurred.</h1>
          <button
            type="button"
            onClick={() => {
              this.setState(state => ({
                hasError: false,
                componentKey: !state.componentKey,
              }));
            }}
          >
            Reload
          </button>
        </div>
      );
    }

    return (
      <React.Fragment key={this.state.componentKey}>
        {this.props.children}
      </React.Fragment>
    );
  }
}

ApplicationErrorBoundary.propTypes = propTypes;

export default ApplicationErrorBoundary;
