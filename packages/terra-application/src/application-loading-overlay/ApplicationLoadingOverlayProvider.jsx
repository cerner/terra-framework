import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Scroll from 'terra-scroll';
import LoadingOverlay from 'terra-overlay/lib/LoadingOverlay';
import OverlayContainer from 'terra-overlay/lib/OverlayContainer';

import ApplicationLoadingOverlayContext from './ApplicationLoadingOverlayContext';
import styles from './ApplicationLoadingOverlayProvider.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The components to be rendered within the context of the ApplicationLoadingOverlayProvider.
   * Components rendered here are able to interact with ApplicationLoadingOverlayProvider through
   * the ApplicationLoadingOverlayContext.
   */
  children: PropTypes.node,
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
  scrollRefCallback,
}) => {
  const [registeredLoadingOverlays, setRegisteredLoadingOverlays] = React.useState({});

  const contextValue = useMemo(() => ({
    show: (key, data) => {
      setRegisteredLoadingOverlays(state => (
        {
          ...state,
          [`${key}`]: data,
        }
      ));
    },
    hide: (key) => {
      setRegisteredLoadingOverlays((state) => {
        const newRegisteredLoadingOverlays = { ...state };
        delete newRegisteredLoadingOverlays[key];

        return newRegisteredLoadingOverlays;
      });
    },
  }), []);

  const registeredOverlayKeys = Object.keys(registeredLoadingOverlays);
  const registeredBackgroundStyles = registeredOverlayKeys.map(key => (registeredLoadingOverlays[key] && registeredLoadingOverlays[key].backgroundStyle));

  /**
   * If multiple styles of overlay are requested, the strongest requested style is used.
   */
  let overlayBackgroundStyle = 'clear';
  if (registeredBackgroundStyles.includes('dark')) {
    overlayBackgroundStyle = 'dark';
  } else if (registeredBackgroundStyles.includes('light')) {
    overlayBackgroundStyle = 'light';
  }

  const overlay = (
    <LoadingOverlay
      isRelativeToContainer
      isAnimated
      isOpen={!!registeredOverlayKeys.length}
      backgroundStyle={overlayBackgroundStyle}
    />
  );

  return (
    <OverlayContainer
      className={cx('container')}
      overlay={overlay}
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
