import React from 'react';
import Image from 'terra-image';
import MockConfig from '../common/MockConfig';
import FallbackAvatar from '../common/FallbackAvatar.svg';
import { UtilityUtils } from '../../../ApplicationUtility';
import UtilityMenu from '../../../utility/_UtilityMenu';

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

  handleOnChange(event, object) {
    this.setState({ selectedKey: object.key });
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
