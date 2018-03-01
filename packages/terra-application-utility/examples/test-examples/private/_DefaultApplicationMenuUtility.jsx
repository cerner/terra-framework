import React from 'react';
import AppDelegate from 'terra-app-delegate';
import Image from 'terra-image';
import 'terra-base/lib/baseStyles';
import Avatar from '../../index-examples/FallBackAvatar.svg';
import { ApplicationMenuUtility, UserData } from '../../../src/ApplicationUtility';
import MockConfig from '../../index-examples/MockConfig';
import UtilityMenuWrapper from './_DefaultUtilityMenuWrapper';

const propTypes = {
  app: AppDelegate.propType,
};

class DefaultApplicationMenuUtility extends React.Component {
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

    return (
      <div style={{ height: '75px', width: '150px' }}>
        <ApplicationMenuUtility
          id={'default'}
          app={this.app}
          menuItems={MockConfig(userData)}
          onChange={this.handleOnChange}
          onDisclose={this.onDiscloseUtilty}
          userName={userName}
          userPhoto={image}
        />
      </div>
    );
  }
}

DefaultApplicationMenuUtility.propTypes = propTypes;
export default DefaultApplicationMenuUtility;
