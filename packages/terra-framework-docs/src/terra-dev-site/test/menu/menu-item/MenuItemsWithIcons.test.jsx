import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Menu from 'terra-menu';
import IconAlert from 'terra-icon/lib/icon/IconAlert';
import IconRequired from 'terra-icon/lib/icon/IconRequired';
import ThemeContext from 'terra-theme-context';
import styles from './MenuItemCommon.module.scss';

const cx = classNames.bind(styles);

const childContextTypes = {
  isSelectableMenu: PropTypes.bool,
};

class MenuItemWithIcon extends React.Component {
  getChildContext() {
    return { isSelectableMenu: true };
  }

  render() {
    const theme = this.context;
    return (
      <div>
        <p>default icon, themeable, isToggled, isToggleable, and isInstructionsForUse combinations</p>
        <br />
        <ul className={cx('mimic-menu-container')} role="menu">
          <Menu.Item
            text="Icon"
            key="Icon"
            icon={<IconAlert />}
          />
          <Menu.Item
            text="Icon, themeable"
            key="Icon, themeable"
            icon={<IconRequired className={cx(['red-color', theme.className])} />}
          />
          <Menu.Item
            text="Icon, isToggleable"
            key="Icon, isToggleable"
            icon={<IconAlert />}
            isSelectable
          />
          <Menu.Item
            text="Icon, isToggleable, and isToggled"
            key="Icon, isToggleable, isToggled"
            icon={<IconAlert />}
            isSelectable
            isSelected
          />
          <Menu.Item
            text="Icon, isToggled, notToggleable"
            key="Icon, isToggled, notToggleable"
            icon={<IconAlert />}
            isSelected
          />
          <Menu.Item
            text="isInstructionsForUse, icon"
            key="isInstructionsForUse, icon"
            isSelected
            isSelectable
            icon={<IconAlert />}
            isInstructionsForUse
          />
          <Menu.Item
            text="MenuItem - Submenu"
            key="MenuItem - Submenu"
            subMenuItems={[
              <Menu.Item text="Not Visible" />,
            ]}
          />
        </ul>
      </div>
    );
  }
}

MenuItemWithIcon.childContextTypes = childContextTypes;
MenuItemWithIcon.contextType = ThemeContext;
export default MenuItemWithIcon;
