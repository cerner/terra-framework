import React from 'react';
import Image from 'terra-image';
import Popup from 'terra-popup';
import MockConfig from '../index-examples/MockConfig';
import Avatar from '../index-examples/FallBackAvatar.svg';
import { ApplicationHeaderUtility, UserData } from '../../src/ApplicationUtility';

class DefaultApplicationHeaderUtility extends React.Component {
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
      this.setState({ utilityComponent: React.cloneElement(utility, { onRequestClose: this.handleRequestClose }) });
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

    const image = <Image src={Avatar} />;
    const userDetail = 'User Detail';
    const userName = 'User Name';
    const userData = <UserData userDetail={userDetail} userName={userName} userPhoto={image} />;

    return (
      <div ref={this.setContentNode} style={{ height: '60px', position: 'relative', width: '150px' }}>
        <ApplicationHeaderUtility
          id="default"
          menuItems={MockConfig(userData)}
          onChange={this.handleOnChange}
          onDisclose={this.onDiscloseUtility}
          userName={userName}
          userPhoto={image}
          data-application-header-utility
        />
        {popup}
      </div>
    );
  }
}

export default DefaultApplicationHeaderUtility;
