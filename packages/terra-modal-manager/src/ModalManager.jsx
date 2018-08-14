import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import AbstractModal from 'terra-abstract-modal';
import AppDelegate from 'terra-app-delegate';
import SlideGroup from 'terra-slide-group';
import DisclosureManager, { availableDisclosureSizes } from 'terra-disclosure-manager';

import 'terra-base/lib/baseStyles';
import styles from './ModalManager.module.scss';
/* eslint-disable-next-line import/no-cycle */
import withModalManager from './withModalManager';

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

    const classArray = ['modal-manager'];
    const isFullscreen = manager.disclosure.isMaximized || manager.disclosure.size === availableDisclosureSizes.FULLSCREEN;
    if (!isFullscreen) {
      if (manager.disclosure.dimensions) {
        classArray.push(`height-${manager.disclosure.dimensions.height}`, `width-${manager.disclosure.dimensions.width}`);
      } else if (manager.disclosure.size) {
        classArray.push(`height-${heightFromSize[manager.disclosure.size]}`, `width-${widthFromSize[manager.disclosure.size]}`);
      }
    }

    return (
      <div {...customProps} className={containerClassNames}>
        {manager.children.components}
        <AbstractModal
          isFocused={manager.disclosure.isFocused}
          isOpen={manager.disclosure.isOpen}
          isFullscreen={isFullscreen}
          classNameModal={cx(classArray)}
          onRequestClose={() => {
            manager.closeDisclosure();
          }}
          closeOnEsc
          closeOnOutsideClick={false}
          ariaLabel="Modal"
        >
          <SlideGroup items={manager.disclosure.components} isAnimated={!isFullscreen} />
        </AbstractModal>
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
export { withModalManager };
