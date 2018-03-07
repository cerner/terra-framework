import React from 'react';
import Image from 'terra-image';
import MockConfig from '../index-examples/MockConfig';
import FallbackAvatar from '../index-examples/FallbackAvatar.svg';
import { ApplicationMenuUtility, UtilityUtils } from '../../lib/ApplicationUtility';

class DefaultApplicationMenuUtility extends React.Component {
  constructor(props) {
    super(props);
    this.onDiscloseUtility = this.onDiscloseUtility.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.state = {
      utilityComponent: false,
      selectedKey: null,
    };
  }

  onDiscloseUtility(utility) {
    if (utility) {
      this.setState({ utilityComponent: !this.state.utilityComponent });
    }
  }

  handleOnChange(event, key) {
    this.setState({ selectedKey: key });
  }

  render() {
    const accessory = <Image src={FallbackAvatar} />;
    const title = 'User Name';

    return (
      <div style={{ height: '60px', width: '300px', position: 'relative' }}>
        <ApplicationMenuUtility
          id="default"
          menuItems={MockConfig(accessory)}
          onChange={this.handleOnChange}
          onDisclose={this.onDiscloseUtility}
          selectedKey="menu"
          title={title}
          accessory={accessory}
          variant={UtilityUtils.VARIANTS.MENU}
        />
      </div>
    );
  }
}

export default DefaultApplicationMenuUtility;
