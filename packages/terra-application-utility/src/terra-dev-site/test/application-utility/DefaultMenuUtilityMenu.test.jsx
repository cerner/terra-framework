import React from 'react';
import Image from 'terra-image';
import MockConfig from '../../doc/common/MockConfig';
import FallbackAvatar from '../../doc/common/FallbackAvatar.svg';
import { UtilityUtils } from '../../../ApplicationUtility';
import UtilityMenu from '../../../utility/_UtilityMenu';

class DefaultMenuUtilityMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const customComponent = <div style={{ display: 'grid' }}><Image src={FallbackAvatar} style={{ width: '1.857rem', height: '1.857rem' }} /></div>;

    return (
      <div style={{ height: '300px', width: '300px' }}>
        <UtilityMenu
          id="default"
          initialSelectedKey="menu"
          isHeightBounded
          menuItems={MockConfig(customComponent)}
          onChange={() => {}}
          variant={UtilityUtils.VARIANTS.MENU}
        />
      </div>
    );
  }
}

export default DefaultMenuUtilityMenu;
