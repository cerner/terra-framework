import React, { useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Scroll from 'terra-scroll';
import StatusView from 'terra-status-view';
import ThemeContext from 'terra-theme-context';
import ApplicationStatusOverlayContext from './ApplicationStatusOverlayContext';
import styles from './ApplicationStatusOverlayProvider.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The components to be rendered within the context of the ApplicationStatusOverlayProvider.
   * Components rendered here are able to interact with ApplicationStatusOverlayProvider through
   * the ApplicationStatusOverlayContext.
   */
  children: PropTypes.node,
  /**
   * A function to be called with the current ref of the scrollable element rendered within the
   * ApplicationStatusOverlayProvider.
   */
  scrollRefCallback: PropTypes.func,
};

const ApplicationStatusOverlayProvider = ({ children, scrollRefCallback, ...customProps }) => {
  const [registeredStatusOverlay, setRegisteredStatusOverlay] = React.useState({});

  const containerRef = React.useRef();

  const contextValue = useMemo(() => ({
    show: (key, data) => {
      setRegisteredStatusOverlay(state => (
        {
          ...state,
          [`${key}`]: data,
        }
      ));
    },
    hide: (key) => {
      setRegisteredStatusOverlay((state) => {
        const newRegisteredStatusOverlay = { ...state };
        delete newRegisteredStatusOverlay[key];

        return newRegisteredStatusOverlay;
      });
    },
  }), []);

  const disableContainerChildrenFocus = () => {
    if (containerRef.current) {
      containerRef.current.setAttribute('inert', '');
    }
  };

  const enableContainerChildrenFocus = () => {
    if (containerRef.current) {
      containerRef.current.removeAttribute('inert');
      containerRef.current.removeAttribute('aria-hidden');
    }
  };

  const registeredStatusOverlayKeys = Object.keys(registeredStatusOverlay);
  // In the event when multiple ApplicationStatusOverlay's are provided, the last rendered wins
  const lastRegisteredStatusOverlayKey = (registeredStatusOverlayKeys.length) && registeredStatusOverlayKeys[registeredStatusOverlayKeys.length - 1];

  const registeredButtonAttrs = registeredStatusOverlay[lastRegisteredStatusOverlayKey]?.buttonAttrs;
  const registeredMessage = registeredStatusOverlay[lastRegisteredStatusOverlayKey]?.message;
  const registeredVariant = registeredStatusOverlay[lastRegisteredStatusOverlayKey]?.variant;

  useEffect(() => {
    // eslint-disable-next-line no-prototype-builtins
    if (!Element.prototype.hasOwnProperty('inert')) {
      // IE10 throws an error if wicg-inert is imported too early, as wicg-inert tries to set an observer on document.body which may not exist on import
      // eslint-disable-next-line global-require
      require('wicg-inert/dist/inert');
    }
  });

  useEffect(() => {
    if (registeredStatusOverlayKeys.length) {
      disableContainerChildrenFocus();
    } else {
      enableContainerChildrenFocus();
    }
  }, [registeredStatusOverlayKeys]);

  let className = cx('container');
  if (customProps.className) {
    className = [className, customProps.className].join(' ');
  }

  const theme = React.useContext(ThemeContext);

  const statusView = (registeredStatusOverlayKeys.length > 0) && (
    <StatusView
      buttonAttrs={registeredButtonAttrs}
      className={cx('status-view', theme.className)}
      message={registeredMessage}
      variant={registeredVariant}
    />
  );

  return (
    <div {...customProps} className={className}>
      {statusView}
      <div data-status-overlay-container-content ref={containerRef} className={cx('container-content')}>
        <Scroll refCallback={scrollRefCallback}>
          <ApplicationStatusOverlayContext.Provider value={contextValue}>
            {children}
          </ApplicationStatusOverlayContext.Provider>
        </Scroll>
      </div>
    </div>
  );
};

ApplicationStatusOverlayProvider.propTypes = propTypes;

export default ApplicationStatusOverlayProvider;
