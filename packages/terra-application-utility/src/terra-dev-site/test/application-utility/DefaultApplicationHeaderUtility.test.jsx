import React from 'react';
import Image from 'terra-image';
import classNames from 'classnames/bind';
import MockConfig from './MockConfig';
import FallbackAvatar from '../../doc/common/FallbackAvatar.svg';
import { ApplicationHeaderUtility, UtilityUtils } from '../../../ApplicationUtility';
import styles from './ApplicationUtilityTestCommon.module.scss';

const cx = classNames.bind(styles);

class DefaultApplicationHeaderUtility extends React.Component {
  constructor(props) {
    super(props);
    this.onDiscloseUtility = this.onDiscloseUtility.bind(this);
    this.state = {
      utilityComponent: false,
    };
  }

  onDiscloseUtility(utility) {
    if (utility) {
      this.setState(prevState => ({ utilityComponent: !prevState.utilityComponent }));
    }
  }

  render() {
    const accessory = <Image src={FallbackAvatar} alt="Fallback Avatar" />;
    const title = 'User Name';

    return (
      <div className={cx('content-wrapper-header')}>
        <ApplicationHeaderUtility
          id="default"
          menuItems={MockConfig(accessory)}
          onChange={() => { }}
          onDisclose={this.onDiscloseUtility}
          title={title}
          initialSelectedKey="menu"
          accessory={accessory}
          variant={UtilityUtils.VARIANTS.HEADER}
        />
      </div>
    );
  }
}

export default DefaultApplicationHeaderUtility;
