import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Menu from 'terra-menu';
import IconAlert from 'terra-icon/lib/icon/IconAlert';
import Spacer from 'terra-spacer/lib/Spacer';
import styles from './MenuItemCommon.module.scss';

const cx = classNames.bind(styles);

const childContextTypes = {
  isSelectableMenu: PropTypes.bool,
};

class MenuItemsHighlighted extends React.Component {
  getChildContext() {
    return { isSelectableMenu: true };
  }

  render() {
    return (
      <div>
        <p>default isHighlighted, icon, isToggled, isToggleable, and isInstructionsForUse combinations</p>
        <br />
        <ul className={cx('mimic-menu-container')} role="menu">
          <Spacer marginBottom="medium">
            <Menu.Item
              text="isHighlighted"
              key="isHighlighted"
              isHighlighted
            />
          </Spacer>
          <Spacer marginBottom="medium">
            <Menu.Item
              text="isHighlighted, isToggleable"
              key="isHiwghlighted, isToggleable"
              isHighlighted
              isSelectable
            />
          </Spacer>
          <Spacer marginBottom="medium">
            <Menu.Item
              text="isHighlighted, isToggleable, and isToggled"
              key="isHighlighted, isToggleable, isToggled"
              isHighlighted
              isSelectable
              isSelected
            />
          </Spacer>
          <Spacer marginBottom="medium">
            <Menu.Item
              text="isHighlighted, isToggled, notToggleable"
              key="isHighlighted, isToggled, notToggleable"
              isHighlighted
              isSelected
            />
          </Spacer>
          <Spacer marginBottom="medium">
            <Menu.Item
              text="isHighlighted isInstructionsForUse"
              key="isHighlighted isInstructionsForUse"
              isHighlighted
              isInstructionsForUse
            />
          </Spacer>
          <Spacer marginBottom="medium">
            <Menu.Item
              text="isHighlighted icon"
              key="isHighlighted icon"
              isHighlighted
              icon={<IconAlert />}
            />
          </Spacer>
          <Spacer marginBottom="medium">
            <Menu.Item
              text="isHighlighted - Submenu"
              key="isHighlighted - Submenu"
              isHighlighted
              subMenuItems={[
                <Menu.Item text="Not Visible" />,
              ]}
            />
          </Spacer>

        </ul>
      </div>
    );
  }
}

MenuItemsHighlighted.childContextTypes = childContextTypes;
export default MenuItemsHighlighted;
