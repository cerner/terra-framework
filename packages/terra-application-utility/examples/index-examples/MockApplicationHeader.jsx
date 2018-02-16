import React from 'react';

import ApplicationHeaderLayout from 'terra-application-header-layout';
import Popup from 'terra-popup';
import Image from 'terra-image';
import 'terra-base/lib/baseStyles';
import LogoExample from 'terra-application-header-layout/examples/index-examples/LogoExample';
import NavigationExample from 'terra-application-header-layout/examples/index-examples/NavigationExample';
import ToggleExample from 'terra-application-header-layout/examples/index-examples/ToggleExample';
import avatar from './fallBackAvatar.svg';
import ApplicationHeaderUtility from '../../src/ApplicationHeaderUtility';

class MockApplicationHeader extends React.Component {
  static generateAdditionalItemsConfig() {
    return [
      {
        parent: 'menu',
        key: 'additional-item-1',
        title: 'Additional Item 1',
        // isSelected: true,
        children: [
          {
            key: 'additional-item-1.1',
            title: 'Additional Item 1.1',
          },
        ],
      },
      {
        parent: 'menu',
        key: 'additional-item-2',
        title: 'Additional Item 2',
        children: [
          {
            key: 'additional-item-2.1',
            title: 'Additional Item 2.1',
          },
          {
            key: 'additional-item-2.2',
            title: 'Additional Item 2.2',
          },
          {
            key: 'additional-item-2.3',
            title: 'Additional Item 2.3',
          },
        ],
      },
      {
        parent: 'menu',
        key: 'additional-item-3',
        title: 'Additional Item 3',
      },
      {
        parent: 'menu',
        key: 'additional-item-4',
        title: 'Additional Item 4',
      },
      {
        parent: 'menu',
        key: 'additional-item-5',
        title: 'Additional Item 5',
      },
      {
        parent: 'menu',
        key: 'additional-item-6',
        title: 'Additional Item 6',
      },
      {
        parent: 'menu',
        key: 'additional-item-7',
        title: 'Additional Item 7',
      },
      {
        parent: 'menu',
        key: 'additional-item-8',
        title: 'Additional Item 8',
      },
    ];
  }
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

    const image = <Image src={avatar} />;
    const utilities = (
      <ApplicationHeaderUtility
        additionalItemsConfig={MockApplicationHeader.generateAdditionalItemsConfig()}
        onChange={this.handleOnChange}
        onDisclose={this.onDiscloseUtility}
        userDetail={'User Detail'}
        userName={"User's Name"}
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
