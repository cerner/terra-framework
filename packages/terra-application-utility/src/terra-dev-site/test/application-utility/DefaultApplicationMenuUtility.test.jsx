import React from 'react';
import Image from 'terra-image';
import MockConfig from '../../doc/common/MockConfig';
import FallbackAvatar from '../../doc/common/FallbackAvatar.svg';
import { ApplicationMenuUtility, UtilityUtils } from '../../../ApplicationUtility';

class DefaultApplicationMenuUtility extends React.Component {
  constructor(props) {
    super(props);
    this.onDiscloseUtility = this.onDiscloseUtility.bind(this);
    this.state = {
      utilityComponent: false,
    };
  }

  onDiscloseUtility(utility) {
    if (utility) {
      this.setState(prevState => ({ utilityComponent: !prevState.utilityComponent }));
    }
  }

  render() {
    const accessory = <Image src={FallbackAvatar} />;
    const title = 'User Name';

    return (
      <div style={{ height: '60px', width: '300px', position: 'relative' }}>
        <ApplicationMenuUtility
          id="default"
          menuItems={MockConfig(accessory)}
          onChange={() => {}}
          onDisclose={this.onDiscloseUtility}
          initialSelectedKey="menu"
          title={title}
          accessory={accessory}
          variant={UtilityUtils.VARIANTS.MENU}
        />
      </div>
    );
  }
}

export default DefaultApplicationMenuUtility;
