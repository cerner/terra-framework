import React from 'react';
import AppDelegate from 'terra-app-delegate';
import Modal from './Modal';

const withModal = (Component) => {
  const ModalHOC = ({ app, ...otherProps }) => (
    <Modal app={app}>
      <Component {...otherProps} />
    </Modal>
  );

  ModalHOC.WrappedComponent = Component;

  ModalHOC.propTypes = {
    app: AppDelegate.propType,
  };

  ModalHOC.displayName = `withModal(${Component.displayName || Component.name})`;

  return ModalHOC;
};

export default withModal;
