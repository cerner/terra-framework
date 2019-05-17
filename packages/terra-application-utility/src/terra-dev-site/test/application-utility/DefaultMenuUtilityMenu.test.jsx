import React from 'react';
import Image from 'terra-image';
import classNames from 'classnames/bind';
import MockConfig from '../../doc/common/MockConfig';
import FallbackAvatar from '../../doc/common/FallbackAvatar.svg';
import { UtilityUtils } from '../../../ApplicationUtility';
import UtilityMenu from '../../../utility/_UtilityMenu';
import styles from './DefaultMenuUtilityMenu.test.scss';

const cx = classNames.bind(styles);

class DefaultMenuUtilityMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const customComponent = <div className={cx('application-utility-test-menu-custom-component')}><Image src={FallbackAvatar} className={cx('application-utility-test-menu-avatar')} alt="Fallback Avatar" /></div>;

    return (
      <div className={cx('application-utility-test-menu-content')}>
        <UtilityMenu
          id="default"
          initialSelectedKey="menu"
          isHeightBounded
          menuItems={MockConfig(customComponent)}
          onChange={() => { }}
          variant={UtilityUtils.VARIANTS.MENU}
        />
      </div>
    );
  }
}

export default DefaultMenuUtilityMenu;
