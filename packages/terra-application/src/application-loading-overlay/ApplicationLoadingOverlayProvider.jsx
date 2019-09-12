import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import Scroll from 'terra-scroll';
import LoadingOverlay from 'terra-overlay/lib/LoadingOverlay';
import OverlayContainer from 'terra-overlay/lib/OverlayContainer';
import ApplicationLoadingOverlayContext from './ApplicationLoadingOverlayContext';

const propTypes = {
  /**
   * The children to be rendered within the context of the ApplicationLoadingOverlayProvider.
   * Components rendered here are able to interact with ApplicationLoadingOverlayProvider through
   * the ApplicationLoadingOverlayContext.
   */
  children: PropTypes.node,
  /**
   * A function that is expected to return a custom instance of a loading overlay. If not provided, the
   * default LoadingOverlay component will be rendered directly.
   * Ex. renderLoadingOverlay(Object registeredOverlays)
   */
  renderLoadingOverlay: PropTypes.func,
  /**
   * A function to be called with the current ref of the scrollable element rendered within the
   * ApplicationLoadingOverlayProvider.
   */
  scrollRefCallback: PropTypes.func,
};

const defaultProps = {
  children: undefined,
  scrollRefCallback: undefined,
};

const ApplicationLoadingOverlayProvider = ({
  children,
  renderLoadingOverlay,
  scrollRefCallback,
  ...customProps
}) => {
  const [loadingIndicators, setLoadingIndicators] = useState({});

  const contextValue = useMemo(() => ({
    showLoadingIndicator: (key, message) => {
      setLoadingIndicators(state => (
        {
          ...state,
          [`${key}`]: message,
        }
      ));
    },
    hideLoadingIndicator: (key) => {
      setLoadingIndicators((state) => {
        const newLoadingIndicators = { ...state };
        delete newLoadingIndicators[key];

        return newLoadingIndicators;
      });
    },
  }), []);

  let overlayContent;
  if (renderLoadingOverlay) {
    overlayContent = renderLoadingOverlay(loadingIndicators);
  } else {
    overlayContent = (
      <LoadingOverlay
        isRelativeToContainer
        isAnimated
        isOpen={!!Object.keys(loadingIndicators).length}
        message={Object.keys(loadingIndicators).map(key => (
          loadingIndicators[key]
        )).join(', ')}
      />
    );
  }

  return (
    <OverlayContainer
      {...customProps}
      style={{ height: '100%' }}
      overlay={overlayContent}
    >
      <Scroll refCallback={scrollRefCallback}>
        <ApplicationLoadingOverlayContext.Provider value={contextValue}>
          {children}
        </ApplicationLoadingOverlayContext.Provider>
      </Scroll>
    </OverlayContainer>
  );
};

ApplicationLoadingOverlayProvider.propTypes = propTypes;
ApplicationLoadingOverlayProvider.defaultProps = defaultProps;

export default ApplicationLoadingOverlayProvider;
