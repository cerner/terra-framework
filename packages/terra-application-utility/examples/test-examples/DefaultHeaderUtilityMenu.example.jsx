import React from 'react';
import Image from 'terra-image';
import MockConfig from '../index-examples/MockConfig';
import FallbackAvatar from '../index-examples/FallbackAvatar.svg';
import { UtilityUtils } from '../../lib/ApplicationUtility';
import UtilityMenu from '../../lib/utility/_UtilityMenu';

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
    const customComponent = <Image src={FallbackAvatar} style={{ width: '1.857rem', height: '1.857rem' }} />;

    return (
      <div style={{ height: '300px', width: '300px' }}>
        <UtilityMenu
          id="default"
          selectedKey="menu"
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
