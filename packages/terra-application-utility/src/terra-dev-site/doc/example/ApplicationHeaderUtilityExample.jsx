import React from 'react';
import Image from 'terra-image';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import MockConfig from 'terra-application-utility/lib/terra-dev-site/doc/common/MockConfig';
import FallbackAvatar from 'terra-application-utility/lib/terra-dev-site/doc/common/FallbackAvatar.svg';
import { ApplicationHeaderUtility, UtilityUtils } from 'terra-application-utility/lib/ApplicationUtility';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

class ApplicationHeaderUtilityExample extends React.Component {
  constructor(props) {
    super(props);
    this.onDiscloseUtility = this.onDiscloseUtility.bind(this);
    this.state = {
      discloseCount: 0,
    };
  }

  onDiscloseUtility() {
    this.setState(prevState => ({ discloseCount: prevState.discloseCount + 1 }));
  }

  render() {
    const accessory = <Image src={FallbackAvatar} />;
    const title = 'User Name';

    return (
      <div style={{ paddingLeft: '4px' }}>
        <div style={{
          height: '60px', position: 'relative', width: '150px', backgroundColor: '#2481ca',
        }}
        >
          <ApplicationHeaderUtility
            id="default"
            menuItems={MockConfig(accessory)}
            onChange={() => {}}
            onDisclose={this.onDiscloseUtility}
            initialSelectedKey="menu"
            title={title}
            accessory={accessory}
            variant={UtilityUtils.VARIANTS.HEADER}
          />
        </div>
        <div>{`Disclose count: ${this.state.discloseCount}`}</div>
      </div>
    );
  }
}

export default ApplicationHeaderUtilityExample;
