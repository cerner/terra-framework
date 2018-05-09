import React from 'react';
import Image from 'terra-image';
import MockConfig from '../component/common/MockConfig';
import FallbackAvatar from '../component/common/FallbackAvatar.svg';
import { UtilityUtils } from '../../ApplicationUtility';
import UtilityMenu from '../../utility/_UtilityMenu';

class DefaultHeaderUtilityMenu extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.state = {
      selectedKey: null,
    };
  }

  handleOnChange(event, key) {
    this.setState({ selectedKey: key });
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
          onChange={this.handleOnChange}
          variant={UtilityUtils.VARIANTS.HEADER}
        />
      </div>
    );
  }
}

export default DefaultHeaderUtilityMenu;
