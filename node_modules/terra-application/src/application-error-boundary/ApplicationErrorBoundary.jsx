import React from 'react';
import PropTypes from 'prop-types';
import StatusView from 'terra-status-view';
import { injectIntl, intlShape } from 'react-intl';
import logger from '../utils/logger';

const propTypes = {
  /**
   * Components to render within the context of the ApplicationErrorBoundary. Exceptions thrown
   * by these components during their render lifecycle will be caught by the ApplicationErrorBoundary.
   */
  children: PropTypes.node,

  /**
   * @private
   * Intl object for translations.
   */
  intl: intlShape,
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
    };

    this.errorRef = React.createRef();

    this.state = { error: undefined };
  }

  static getDerivedStateFromError(error) {
    /**
     * When an exception occurs while rendering children, getDerivedStateFromError gets executed. The error
     * is returned here and stored within the ApplicationErrorBoundary's state, triggering an update.
     */
    return { error };
  }

  componentDidMount() {
    /**
     * After mounting (and each subsequent update), the error state within the ApplicationErrorBoundary
     * is reset.
     *
     * If the ApplicationErrorBoundary was updated due to a caught exception, the componentDidCatch method will
     * execute and the error will be stored in the errorRef. Otherwise, resetting the error state will trigger another update that
     * will  result in the children being rendered (if they were not already successfully rendered).
     */
    this.resetError();
  }

  componentDidUpdate() {
    this.resetError();
  }

  componentDidCatch(error) {
    /**
     * If the ApplicationErrorBoundary was updated due to a caught exception, this lifecycle method will be
     * executed. componentDidCatch executes after componentDidMount/componentDidUpdate, so this is executing
     * after the error state has been reset.
     *
     * The error that was caught is stored in a ref and the error within state is cleared. This causes
     * the ApplicationErrorBoundary to update again to ensure that the StatusView remains presented until the
     * next update occurs.
     */
    logger.error(error);
    this.errorRef.current = error;
    this.setState({ error: undefined });
  }

  render() {
    const { children, intl } = this.props;
    const activeError = this.state.error || this.errorRef.current;

    if (activeError) {
      const errorDetails = activeError.message.toString();
      const errorText = intl.formatMessage({ id: 'terraApplication.errorBoundary.defaultErrorMessage' }, { errorDetails });
      return (
        <StatusView
          variant="error"
          message={errorText}
          role="alert"
        />
      );
    }

    return children;
  }
}

ApplicationErrorBoundary.propTypes = propTypes;

export default injectIntl(ApplicationErrorBoundary);
