import React from 'react';
import Image from 'terra-image';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import MockConfig from 'terra-application-utility/lib/terra-dev-site/doc/common/MockConfig';
import FallbackAvatar from 'terra-application-utility/lib/terra-dev-site/doc/common/FallbackAvatar.svg';
import { UtilityUtils } from 'terra-application-utility/lib/ApplicationUtility';
import UtilityMenu from 'terra-application-utility/lib/utility/_UtilityMenu';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

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
    this.setState(prevState => ({ requestCloseCount: prevState.requestCloseCount + 1 }));
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
