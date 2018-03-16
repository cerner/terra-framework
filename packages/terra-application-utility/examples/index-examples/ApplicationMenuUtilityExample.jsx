import React from 'react';
import Image from 'terra-image';
import MockConfig from './MockConfig';
import FallbackAvatar from './FallbackAvatar.svg';
import { ApplicationMenuUtility, UtilityUtils } from '../../lib/ApplicationUtility';

class ApplicationMenuUtilityExample extends React.Component {
  constructor(props) {
    super(props);
    this.onDiscloseUtility = this.onDiscloseUtility.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.state = {
      discloseCount: 0,
      selectedKey: null,
    };
  }

  onDiscloseUtility() {
    this.setState({ discloseCount: this.state.discloseCount += 1 });
  }

  handleOnChange(event, key) {
    this.setState({ selectedKey: key });
  }

  render() {
    const accessory = <Image src={FallbackAvatar} />;
    const title = 'User Name';

    return (
      <div>
        <div style={{ height: '60px', width: '300px', paddingLeft: '4px' }}>
          <ApplicationMenuUtility
            id="default"
            menuItems={MockConfig(accessory)}
            onChange={this.handleOnChange}
            onDisclose={this.onDiscloseUtility}
            initialSelectedKey="menu"
            title={title}
            accessory={accessory}
            variant={UtilityUtils.VARIANTS.MENU}
          />
        </div>
        <div>{`Disclose count: ${this.state.discloseCount}`}</div>
      </div>
    );
  }
}

export default ApplicationMenuUtilityExample;
