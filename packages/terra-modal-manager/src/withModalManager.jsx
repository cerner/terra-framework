import React from 'react';
import AppDelegate from 'terra-app-delegate';
/* eslint-disable-next-line import/no-cycle */
import ModalManager from './ModalManager';

const withModalManager = (Component) => {
  const ModalManagerHOC = ({ app, ...otherProps }) => (
    <ModalManager app={app}>
      <Component {...otherProps} />
    </ModalManager>
  );

  ModalManagerHOC.WrappedComponent = Component;

  ModalManagerHOC.propTypes = {
    app: AppDelegate.propType,
  };

  ModalManagerHOC.displayName = `withModalManager(${Component.displayName || Component.name})`;

  return ModalManagerHOC;
};

export default withModalManager;
