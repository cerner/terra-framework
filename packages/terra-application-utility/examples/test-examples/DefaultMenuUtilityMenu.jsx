import React from 'react';
import Image from 'terra-image';
import MockConfig from '../index-examples/MockConfig';
import FallbackAvatar from '../index-examples/FallBackAvatar.svg';
import { UtilityUtils } from '../../src/ApplicationUtility';
import UtilityMenu from '../../src/utility/_UtilityMenu';

class DefaultMenuUtilityMenu extends React.Component {
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
    const customComponent = <Image src={FallbackAvatar} />;

    return (
      <div style={{ height: '300px', width: '300px' }}>
        <UtilityMenu
          id="default"
          selectedKey="menu"
          isHeightBounded
          menuItems={MockConfig(customComponent)}
          onChange={this.handleOnChange}
          variant={UtilityUtils.VARIANTS.MENU}
        />
      </div>
    );
  }
}

export default DefaultMenuUtilityMenu;
