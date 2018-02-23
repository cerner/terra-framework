import React from 'react';

import ApplicationHeaderLayout from 'terra-application-header-layout';
import Popup from 'terra-popup';
import Image from 'terra-image';
import 'terra-base/lib/baseStyles';
import LogoExample from 'terra-application-header-layout/examples/index-examples/LogoExample';
import NavigationExample from 'terra-application-header-layout/examples/index-examples/NavigationExample';
import ToggleExample from 'terra-application-header-layout/examples/index-examples/ToggleExample';
import Avatar from './FallBackAvatar.svg';
import { ApplicationHeaderUtility, UserData } from '../../src/ApplicationUtility';
import UtilitiesUtils from '../../src/_Utils';
// import AdditionalItemsConfig from './AdditionalItemsConfig';

class MockApplicationHeader extends React.Component {
  constructor(props) {
    super(props);
    this.onDiscloseUtility = this.onDiscloseUtility.bind(this);
    this.getTargetRef = this.getTargetRef.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.setContentNode = this.setContentNode.bind(this);
    this.state = {
      utilityComponent: false,
      selectedKey: null,
    };
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

  handleOnChange(event, key) {
    this.setState({ selectedKey: key });
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
          contentHeight="320"
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

    const image = <Image src={Avatar} />;
    const userDetail = 'User Detail';
    const userName = 'User Name';
    const userData = <UserData userDetail={userDetail} userName={userName} userPhoto={image} />;
    const utilities = (
      <ApplicationHeaderUtility
        style={{ backgroundColor: 'green' }}
        menuItems={UtilitiesUtils.defaultConfig(userData)}
        onChange={this.handleOnChange}
        onDisclose={this.onDiscloseUtility}
        onRequestClose={this.handleRequestClose}
        userName={userName}
        userPhoto={image}
        data-application-header-utility
      />
    );
    return (
      <div>
        <div ref={this.setContentNode} style={{ height: '60px', position: 'relative', width: '100%' }}>
          <ApplicationHeaderLayout
            logo={<LogoExample size="small" />}
            utilities={utilities}
            navigation={<NavigationExample size="small" />}
            toggle={<ToggleExample size="small" />}
          />
          {popup}
        </div>
        <br />
        <div>{`Trigger event for: ${this.state.selectedKey}`}</div>
        <br />
      </div>
    );
  }
}

export default MockApplicationHeader;
