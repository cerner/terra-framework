import React from 'react';

import ApplicationHeaderLayout from 'terra-application-header-layout';
import Popup from 'terra-popup';
import Image from 'terra-image';
import 'terra-base/lib/baseStyles';
import LogoExample from 'terra-application-header-layout/examples/index-examples/LogoExample';
import NavigationExample from 'terra-application-header-layout/examples/index-examples/NavigationExample';
import ToggleExample from 'terra-application-header-layout/examples/index-examples/ToggleExample';
import ApplicationHeaderUtility from '../../lib/ApplicationHeaderUtility';

// import styles from '.ApplicationHeaderUtilityStandard.scss';

class MockApplicationHeader extends React.Component {
  static handleOnChange(event, key) {
    console.log(`Event: ${event} Key: ${key}`);
  }

  constructor(props) {
    super(props);
    this.onDiscloseUtility = this.onDiscloseUtility.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.setContentNode = this.setContentNode.bind(this);
    this.state = { utilityComponent: false };
  }

  onDiscloseUtility(utility) {
    if (utility) {
      this.setState({ utilityComponent: utility });
    }
  }

  getTargetRef() {
    if (this.contentNode) {
      return this.contentNode.querySelector('[data-application-header-utility]');
    }
    return null;
  }

  setContentNode(node) {
    this.contentNode = node;
  }

  handleRequestClose() {
    this.popupContent = null;
    this.setState({ utilityComponent: null });
  }

  render() {
    let popup;
    if (this.state.utilityComponent) {
      popup = (
        <Popup
          contentHeight="auto"
          contentWidth="240"
          isArrowDisplayed
          isOpen
          onRequestClose={this.handleRequestClose}
          targetRef={this.getTargetRef}
        >
          {this.state.utilityComponent}
        </Popup>
      );
    }

    const image = <Image variant="rounded" src="https://github.com/cerner/terra-core/raw/master/terra.png" height="26px" width="26px" isFluid />;
    const utilities = (
      <ApplicationHeaderUtility
        onChange={MockApplicationHeader.handleOnChange}
        onDisclose={this.onDiscloseUtility}
        userDetail={'Admin'}
        userName={'User Name'}
        userPhoto={image}
        data-application-header-utility
      />
    );
    return (
      <div ref={this.setContentNode}>
        <ApplicationHeaderLayout
          logo={<LogoExample size="small" />}
          utilities={utilities}
          navigation={<NavigationExample size="small" />}
          toggle={<ToggleExample size="small" />}
        />
        {popup}
      </div>
    );
  }
}

export default MockApplicationHeader;
