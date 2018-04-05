import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Modal from 'terra-modal';
import AppDelegate from 'terra-app-delegate';
import SlideGroup from 'terra-slide-group';
import breakpoints from 'terra-responsive-element/lib/breakpoints.scss';
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

class ModalManager extends React.Component {
  constructor(props) {
    super(props);

    this.updateFullscreenState = this.updateFullscreenState.bind(this);
    this.renderModal = this.renderModal.bind(this);

    this.state = {
      forceFullscreen: false,
    };
  }

  componentDidMount() {
    this.updateFullscreenState();
    window.addEventListener('resize', this.updateFullscreenState);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateFullscreenState);
  }

  updateFullscreenState() {
    const isFullscreen = window.innerWidth < breakpoints.small;
    const previousFullscreenState = this.state.forceFullscreen;

    if (previousFullscreenState !== isFullscreen) {
      this.setState({
        forceFullscreen: isFullscreen,
      });
    }
  }

  renderModal(manager) {
    const { app, children, ...customProps } = this.props;

    const containerClassNames = cx([
      'container',
      customProps.className,
    ]);

    const isFullscreen = this.state.forceFullscreen || manager.disclosure.isMaximized || manager.disclosure.size === availableDisclosureSizes.FULLSCREEN;
    let modalClasses;
    if (!isFullscreen) {
      if (manager.disclosure.dimensions) {
        modalClasses = cx(['modal-size', `height-${manager.disclosure.dimensions.height}`, `width-${manager.disclosure.dimensions.width}`]);
      } else {
        modalClasses = cx(['modal-size', styles[manager.disclosure.size]]);
      }
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
