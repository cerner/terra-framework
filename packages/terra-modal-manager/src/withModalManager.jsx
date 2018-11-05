import React from 'react';
/* eslint-disable-next-line import/no-cycle */
import ModalManager from './ModalManager';

const withModalManager = (Component) => {
  const ModalManagerHOC = ({ app, ...otherProps }) => (
    <ModalManager>
      <Component {...otherProps} />
    </ModalManager>
  );

  ModalManagerHOC.WrappedComponent = Component;

  ModalManagerHOC.displayName = `withModalManager(${Component.displayName || Component.name})`;

  return ModalManagerHOC;
};

export default withModalManager;
