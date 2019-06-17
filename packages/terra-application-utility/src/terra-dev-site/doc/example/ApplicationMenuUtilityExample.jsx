import React from 'react';
import Image from 'terra-image';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import MockConfig from 'terra-application-utility/lib/terra-dev-site/doc/common/MockConfig';
import FallbackAvatar from 'terra-application-utility/lib/terra-dev-site/doc/common/FallbackAvatar.svg';
import { ApplicationMenuUtility, UtilityUtils } from 'terra-application-utility/lib/ApplicationUtility';
import classNames from 'classnames/bind';
import styles from './ApplicationMenuUtilityExample.scss';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

const cx = classNames.bind(styles);

class ApplicationMenuUtilityExample extends React.Component {
  constructor(props) {
    super(props);
    this.onDiscloseUtility = this.onDiscloseUtility.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.state = {
      discloseCount: 0,
      selectedKey: null,
    };
  }

  onDiscloseUtility() {
    this.setState(prevState => ({ discloseCount: prevState.discloseCount + 1 }));
  }

  handleOnChange(event, key) {
    this.setState({ selectedKey: key });
  }

  render() {
    const accessory = <Image alt="Fallback Avatar" src={FallbackAvatar} />;
    const title = 'User Name';

    return (
      <div>
        <div className={cx('content-wrapper')}>
          <ApplicationMenuUtility
            menuItems={MockConfig(accessory)}
            onChange={this.handleOnChange}
            onDisclose={this.onDiscloseUtility}
            initialSelectedKey="menu"
            title={title}
            accessory={accessory}
            variant={UtilityUtils.VARIANTS.MENU}
          />
        </div>
        <div>{`Trigger event for: ${this.state.selectedKey}.`}</div>
        <div>{`Disclose count: ${this.state.discloseCount}.`}</div>
      </div>
    );
  }
}

export default ApplicationMenuUtilityExample;
