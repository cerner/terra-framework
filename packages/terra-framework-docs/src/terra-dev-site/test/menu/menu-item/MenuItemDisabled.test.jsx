import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import List from 'terra-list';
import Menu from 'terra-menu';
import IconWarning from 'terra-icon/lib/icon/IconWarning';
import IconRequired from 'terra-icon/lib/icon/IconRequired';
import ThemeContext from 'terra-theme-context';
import styles from './MenuItemCommon.module.scss';

const cx = classNames.bind(styles);

const childContextTypes = {
  isSelectableMenu: PropTypes.bool,
};

class MenuItemDisabled extends React.Component {
  getChildContext() {
    return { isSelectableMenu: true };
  }

  render() {
    const theme = this.context;
    return (
      <div>
        <div id="isSelected">
          <p>The item is disabled. The selection state should not change with any user interaction.</p>
        </div>
        <List className={cx(['mimic-menu-container'])} role="menu">
          <Menu.Item
            text="Disabled Menu Item"
            key="1"
            className="TestDisabledItem"
            isSelectable
            isDisabled
          />
          <Menu.Item
            isDisabled
            isSelectable
            text="Nested Menu"
            key="2"
            className="TestNestedMenu"
            subMenuItems={[
              <Menu.Item text="Default 2.1" key="2.1" className="TestNestedMenuContent" />,
            ]}
          />
          <Menu.Item
            isDisabled
            text="Disabled Selected Menu Item"
            key="3"
            className="TestDisabledItem"
            isSelectable
            isSelected
          />
          <Menu.Item
            isDisabled
            text="Disabled eIFU Icon Menu Item"
            key="4"
            className="TestDisabledItem"
            isInstructionsForUse
          />
          <Menu.Item
            isDisabled
            text="Disabled Icon Menu Item"
            key="5"
            className="TestDisabledItem"
            icon={<IconWarning />}
          />
          <Menu.Item
            isDisabled
            text="Disabled Themeable Icon Menu Item"
            key="6"
            className="TestDisabledItem"
            icon={<IconRequired className={cx(['red-color', theme.className])} />}
          />
        </List>
      </div>
    );
  }
}

MenuItemDisabled.childContextTypes = childContextTypes;
MenuItemDisabled.contextType = ThemeContext;
export default MenuItemDisabled;
