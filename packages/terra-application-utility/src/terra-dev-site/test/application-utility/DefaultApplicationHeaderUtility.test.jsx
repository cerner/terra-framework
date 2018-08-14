import React from 'react';
import Image from 'terra-image';
import MockConfig from '../../doc/common/MockConfig';
import FallbackAvatar from '../../doc/common/FallbackAvatar.svg';
import { ApplicationHeaderUtility, UtilityUtils } from '../../../ApplicationUtility';

class DefaultApplicationHeaderUtility extends React.Component {
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
      <div style={{ height: '60px', position: 'relative', width: '150px' }}>
        <ApplicationHeaderUtility
          id="default"
          menuItems={MockConfig(accessory)}
          onChange={() => {}}
          onDisclose={this.onDiscloseUtility}
          title={title}
          initialSelectedKey="menu"
          accessory={accessory}
          variant={UtilityUtils.VARIANTS.HEADER}
        />
      </div>
    );
  }
}

export default DefaultApplicationHeaderUtility;
