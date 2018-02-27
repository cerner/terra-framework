import React from 'react';
import AppDelegate from 'terra-app-delegate';
import ModalManager from './ModalManager';

const withModalManager = (Component) => {
  const ModalManagerHOC = ({ app, ...otherProps }) => (
    <ModalManager app={app}>
      <Component {...otherProps} />
    </ModalManager>
  );

  ModalManagerHOC.propTypes = {
    app: AppDelegate.propType,
  };

  ModalManagerHOC.displayName = `withModalManager(${Component.displayName || Component.name})`;

  return ModalManagerHOC;
};

export default withModalManager;
