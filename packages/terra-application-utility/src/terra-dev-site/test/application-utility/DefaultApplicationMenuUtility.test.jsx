import React from 'react';
import Image from 'terra-image';
import classNames from 'classnames/bind';
import MockConfig from './MockConfig';
import FallbackAvatar from '../../doc/common/FallbackAvatar.svg';
import { ApplicationMenuUtility, UtilityUtils } from '../../../ApplicationUtility';
import styles from './ApplicationUtilityTestCommon.module.scss';

const cx = classNames.bind(styles);

class DefaultApplicationMenuUtility extends React.Component {
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
      <div className={cx('content-wrapper-menu')}>
        <ApplicationMenuUtility
          id="default"
          menuItems={MockConfig(accessory)}
          onChange={() => { }}
          onDisclose={this.onDiscloseUtility}
          initialSelectedKey="menu"
          title={title}
          accessory={accessory}
          variant={UtilityUtils.VARIANTS.MENU}
        />
      </div>
    );
  }
}

export default DefaultApplicationMenuUtility;
