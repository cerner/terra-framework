import React from 'react';
import Image from 'terra-image';
import MockConfig from 'terra-application-utility/lib/terra-dev-site/doc/common/MockConfig';
import FallbackAvatar from 'terra-application-utility/lib/terra-dev-site/doc/common/FallbackAvatar.svg';
import { ApplicationHeaderUtility, UtilityUtils } from 'terra-application-utility';
import classNames from 'classnames/bind';
import styles from './ApplicationHeaderUtilityExample.module.scss';

const cx = classNames.bind(styles);

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
    const accessory = <Image alt="Fallback Avatar" src={FallbackAvatar} />;
    const title = 'User Name';

    return (
      <div className={cx('container')}>
        <div className={cx('content-wrapper')}>
          <ApplicationHeaderUtility
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
