import React from 'react';

import AppDelegate from 'terra-app-delegate';
import ApplicationMenuLayout from 'terra-application-menu-layout';
import Image from 'terra-image';
import 'terra-base/lib/baseStyles';
import Placeholder from 'terra-application-header-layout/examples/index-examples/Placeholder';
import Avatar from './FallBackAvatar.svg';
import { ApplicationMenuUtility, UserData } from '../../src/ApplicationUtility';
import MockConfig from './MockConfig';
import UtilityMenuWrapper from './_UtilityMenuWrapper';

const propTypes = {
  app: AppDelegate.propType,
};

class MockApplicationMenu extends React.Component {
  constructor(props) {
    super(props);
    this.onDiscloseUtilty = this.onDiscloseUtilty.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.state = {
      utilityComponent: false,
      selectedKey: null,
    };
  }

  onDiscloseUtilty(utility) {
    if (this.props.app && utility) {
      this.props.app.disclose({
        preferredType: 'modal',
        size: 'small',
        content: {
          component: <UtilityMenuWrapper>{utility}</UtilityMenuWrapper>,
          key: 'application-menu-utility',
        },
      });
    }
  }

  handleOnChange(event, key) {
    this.setState({ selectedKey: key });
  }

  render() {
    const image = <Image src={Avatar} />;
    const userDetail = 'User Detail';
    const userName = 'User Name';
    const userData = <UserData userDetail={userDetail} userName={userName} userPhoto={image} />;
    const utilities = (
      <ApplicationMenuUtility
        app={this.app}
        menuItems={MockConfig(userData)}
        onChange={this.handleOnChange}
        onDisclose={this.onDiscloseUtilty}
        userName={userName}
        userPhoto={image}
      />
    );

    return (
      <div>
        <div style={{ height: '450px', width: '300px' }}>
          <ApplicationMenuLayout
            header={<Placeholder text="Header" height="50px" />}
            extensions={<Placeholder text="Extensions" height="50px" />}
            content={<Placeholder text="Content" />}
            footer={utilities}
          />
        </div>
        <br />
        <div>{`Trigger event for: ${this.state.selectedKey}`}</div>
        <br />
      </div>
    );
  }
}

MockApplicationMenu.propTypes = propTypes;
export default MockApplicationMenu;
