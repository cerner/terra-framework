import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Modal from 'terra-modal';
import AppDelegate from 'terra-app-delegate';
import SlideGroup from 'terra-slide-group';
import DisclosureManager, { availableDisclosureSizes } from 'terra-disclosure-manager';

import 'terra-base/lib/baseStyles';
import styles from './ModalManager.scss';

const disclosureType = 'modal';
export { disclosureType };

const cx = classNames.bind(styles);

const propTypes = {
  app: AppDelegate.propType,
  children: PropTypes.node,
};

const heightFromSize = {
  tiny: 240,
  small: 420,
  medium: 600,
  large: 870,
  huge: 960,
};

const widthFromSize = {
  tiny: 320,
  small: 640,
  medium: 960,
  large: 1280,
  huge: 1600,
};

class ModalManager extends React.Component {
  constructor(props) {
    super(props);

    this.renderModal = this.renderModal.bind(this);
  }

  renderModal(manager) {
    const { app, children, ...customProps } = this.props;

    const containerClassNames = cx([
      'container',
      customProps.className,
    ]);

    const isFullscreen = manager.disclosure.isMaximized || manager.disclosure.size === availableDisclosureSizes.FULLSCREEN;
    let modalClasses;
    if (!isFullscreen) {
      let height;
      let width;
      if (manager.disclosure.dimensions) {
        height = manager.disclosure.dimensions.height;
        width = manager.disclosure.dimensions.width;
      } else {
        height = heightFromSize[manager.disclosure.size];
        width = widthFromSize[manager.disclosure.size];
      }
      modalClasses = cx(['modal-manager', `height-${height}`, `width-${width}`]);
    }

    return (
      <div {...customProps} className={containerClassNames}>
        {manager.children.components}
        <Modal
          isFocused={manager.disclosure.isFocused}
          isOpen={manager.disclosure.isOpen}
          isFullscreen={isFullscreen}
          classNameModal={modalClasses}
          onRequestClose={() => {
            manager.closeDisclosure();
          }}
          closeOnEsc
          closeOnOutsideClick={false}
          ariaLabel="Modal"
        >
          <SlideGroup items={manager.disclosure.components} isAnimated={!isFullscreen} />
        </Modal>
      </div>
    );
  }

  render() {
    const { app, children } = this.props;

    return (
      <DisclosureManager
        app={app}
        supportedDisclosureTypes={[disclosureType]}
        render={this.renderModal}
      >
        {children}
      </DisclosureManager>
    );
  }
}

ModalManager.propTypes = propTypes;

export default ModalManager;
