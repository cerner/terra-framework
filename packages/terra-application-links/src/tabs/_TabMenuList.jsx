import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import styles from './ApplicationTabs.module.scss';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * The child tabs to be placed in the menu.
   */
  children: PropTypes.node,
  /**
   * Prop from popup, determines if the menu height is bound by the screen.
   */
  isHeightBounded: PropTypes.bool,
  /**
   * Prop from popup, determines if the menu width is bound by the screen.
   */
  isWidthBounded: PropTypes.bool,
  /**
   * Ref callback used by the popup for do positioning.
   */
  refCallback: PropTypes.func,
};

const TabMenuList = ({
  children,
  isHeightBounded,
  isWidthBounded,
  refCallback,
  ...customProps
}) => {
  const theme = React.useContext(ThemeContext);
  const listClass = classNames(cx(
    'tab-menu-list',
    { 'height-bounded': isHeightBounded },
    { 'width-bounded': isWidthBounded },
    theme.className,
  ));
  return (
    <ul
      {...customProps}
      data-application-tab-menu-content
      className={listClass}
      role="menu"
      ref={refCallback}
    >
      {children}
    </ul>
  );
};

TabMenuList.propTypes = propTypes;

export default TabMenuList;
