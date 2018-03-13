import React from 'react';
import Image from 'terra-image';
import MockConfig from './MockConfig';
import FallbackAvatar from './FallbackAvatar.svg';
import { UtilityUtils } from '../../lib/ApplicationUtility';
import UtilityMenu from '../../lib/utility/_UtilityMenu';

class MenuUtilityMenuExample extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnRequestClose = this.handleOnRequestClose.bind(this);
    this.state = {
      selectedKey: null,
      requestCloseCount: 0,
    };
  }

  handleOnChange(event, key) {
    this.setState({ selectedKey: key });
  }

  handleOnRequestClose() {
    this.setState({ requestCloseCount: this.state.requestCloseCount += 1 });
  }

  render() {
    const customComponent = <Image src={FallbackAvatar} style={{ width: '1.857rem', height: '1.857rem' }} />;
    return (
      <div>
        <div style={{ height: '300px', width: '300px' }}>
          <UtilityMenu
            id="default"
            initialSelectedKey="menu"
            isHeightBounded
            menuItems={MockConfig(customComponent)}
            onChange={this.handleOnChange}
            onRequestClose={this.handleOnRequestClose}
            variant={UtilityUtils.VARIANTS.MENU}
          />
        </div>
        <div>{`Trigger event for: ${this.state.selectedKey}`}</div>
        <div>{`Request close count: ${this.state.requestCloseCount}`}</div>
      </div>
    );
  }
}

export default MenuUtilityMenuExample;
