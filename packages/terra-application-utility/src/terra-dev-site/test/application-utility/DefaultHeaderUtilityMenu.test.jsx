import React from 'react';
import Image from 'terra-image';
import classNames from 'classnames/bind';
import MockConfig from './MockConfig';
import FallbackAvatar from '../../doc/common/FallbackAvatar.svg';
import { UtilityUtils } from '../../../ApplicationUtility';
import UtilityMenu from '../../../utility/_UtilityMenu';
import styles from './UtilityMenuCommon.module.scss';

const cx = classNames.bind(styles);

class DefaultHeaderUtilityMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const customComponent = <div className={cx('avatar-wrapper')}><Image src={FallbackAvatar} className={cx('avatar')} alt="Fallback Avatar" /></div>;

    return (
      <div className={cx('content-wrapper')}>
        <UtilityMenu
          id="default"
          initialSelectedKey="menu"
          isHeightBounded
          menuItems={MockConfig(customComponent)}
          onChange={() => { }}
          variant={UtilityUtils.VARIANTS.HEADER}
        />
      </div>
    );
  }
}

export default DefaultHeaderUtilityMenu;
