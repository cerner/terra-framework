import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Modal from 'terra-modal';
import AppDelegate from 'terra-app-delegate';
import SlideGroup from 'terra-slide-group';
import breakpoints from 'terra-responsive-element/lib/breakpoints.scss';

import 'terra-base/lib/baseStyles';

import DisclosureManager, { availableDisclosureSizes } from './DisclosureManager';
import styles from './NewModalManager.scss';

const cx = classNames.bind(styles);

const propTypes = {
  app: AppDelegate.propType,
  children: PropTypes.node,
};

class NewModalManager extends React.Component {
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
    const isFullscreen = this.state.forceFullscreen || manager.disclosure.isMaximized || manager.disclosure.size === availableDisclosureSizes.FULLSCREEN;
    const modalClasses = !isFullscreen ? cx([styles[manager.disclosure.size]]) : undefined;

    return (
      <div style={{ height: '100%' }}>
        {manager.content.components}
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
        render={this.renderModal}
      >
        {this.props.children}
      </DisclosureManager>
    );
  }
}

NewModalManager.propTypes = propTypes;

export default NewModalManager;
