import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';
import StatusView from 'terra-status-view';

const propTypes = {
  /**
   * Components to render within the context of the ApplicationErrorBoundary
   */
  children: PropTypes.node,
  /**
   * @private
   * Object containing translation APIs
   */
  intl: intlShape,
};

class ApplicationErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, reloadKey: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: error };
  }

  render() {
    const { children, intl } = this.props;
    const { hasError, reloadKey } = this.state;

    if (hasError) {
      return (
        <StatusView
          variant="error"
          buttonAttrs={[{
            text: intl.formatMessage({ id: 'terra-application.application-error-boundary.reload' }),
            size: 'medium',
            key: 'reload-button',
            onClick: () => {
              this.setState(state => ({
                hasError: undefined,
                reloadKey: !state.reloadKey,
              }));
            },
          }]}
        />
      );
    }

    return (
      <React.Fragment key={reloadKey}>
        {children}
      </React.Fragment>
    );
  }
}

ApplicationErrorBoundary.propTypes = propTypes;

export default injectIntl(ApplicationErrorBoundary);
