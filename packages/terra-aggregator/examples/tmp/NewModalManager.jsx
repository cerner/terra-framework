import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Modal from 'terra-modal';
import AppDelegate from 'terra-app-delegate';
import SlideGroup from 'terra-slide-group';
import DisclosureManager from './DisclosureManager';

import styles from './NewModalManager.scss';

const cx = classNames.bind(styles);

const propTypes = {
  app: AppDelegate.propType,
  children: PropTypes.node,
};

class NewModalManager extends React.Component {
  static renderModal(manager) {
    const modalClasses = cx([styles[manager.disclosure.size]]);

    return (
      <div style={{ height: '100%' }}>
        {manager.content.components}
        <Modal
          isFocused={manager.disclosure.isFocused}
          isOpen={manager.disclosure.isOpen}
          isFullscreen={false}
          classNameModal={modalClasses}
          onRequestClose={() => {
            manager.closeDisclosure();
          }}
          closeOnEsc
          closeOnOutsideClick={false}
          ariaLabel="Modal"
        >
          <SlideGroup items={manager.disclosure.components} isAnimated />
        </Modal>
      </div>
    );
  }

  render() {
    return (
      <DisclosureManager
        app={this.props.app}
        supportedDisclosureTypes={['modal']}
        render={NewModalManager.renderModal}
      >
        {this.props.children}
      </DisclosureManager>
    );
  }
}

NewModalManager.propTypes = propTypes;

export default NewModalManager;
