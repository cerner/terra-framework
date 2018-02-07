import React from 'react';

import ApplicationHeaderLayout from 'terra-application-header-layout';
import Popup from 'terra-popup';
import Image from 'terra-image';
import LogoExample from 'terra-application-header-layout/examples/index-examples/LogoExample';
import NavigationExample from 'terra-application-header-layout/examples/index-examples/NavigationExample';
import ToggleExample from 'terra-application-header-layout/examples/index-examples/ToggleExample';
import ApplicationHeaderUtility from '../../lib/ApplicationHeaderUtility';

import 'terra-base/lib/baseStyles';

// import styles from '.ApplicationHeaderUtilityStandard.scss';
const propTypes = {
    app: AppDelegate.propType
};

class MockApplicationHeader extends React.Component {
  static handleOnChange(event, key) {
    console.log(`Event: ${event} Key: ${key}`);
  }

  constructor(props) {
    super(props);
    this.onDiscloseUtility = this.onDiscloseUtility.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.setContentNode = this.setContentNode.bind(this);
    this.state = { isUtilityOpen: false };
  }

  onDiscloseUtility(utility) {
    if (utility && !this.state.isUtilityOpen) {
      this.setState({ isUtilityOpen: true });
    }
  }

  getTargetRef() {
    if (this.contentNode) {
      return this.contentNode.querySelector('[data-application-header-utility]');
    }
  }

  setContentNode(node) {
    this.contentNode = node;
  }

  handleRequestClose() {
    this.popupContent = null;
    this.setState({ isUtilityOpen: false });
  }

  render() {
    let popup;
    if (this.popupContent) {
      popup = (
        <Popup
          contentHeight="auto"
          contentWidth="240"
          isArrowDisplayed
          isOpen={this.state.isUtilityOpen}
          onRequestClose={this.handleRequestClose}
          targetRef={this.getTargetRef}
        >
          {this.popupContent}
        </Popup>
      );
    }

    const image = <Image variant="rounded" src="https://github.com/cerner/terra-core/raw/master/terra.png" height="26px" width="26px" isFluid />;

    return (
      <div ref={this.setContentNode}>
        <ApplicationHeaderLayout
          logo={<LogoExample size="small" />}
          utilities={
            <ApplicationHeaderUtility
              onChange={MockApplicationHeader.handleOnChange}
              onDiscloseUtilityMenu={this.onDiscloseUtility}
              userDetail={'Admin'}
              userName={'User Name'}
              userPhoto={image}
            />}
          navigation={<NavigationExample size="small" />}
          toggle={<ToggleExample size="small" />}
        />
        {popup}
      </div>
    );
  }
}

MockApplicationHeader.propTypes = this.propTypes;

export default MockApplicationHeader;
