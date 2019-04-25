import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ActionHeader from 'terra-action-header';
import ActionFooter from 'terra-action-footer';
import ContentContainer from 'terra-content-container';
import styles from './TabMenuList.module.scss';

const cx = classNames.bind(styles);

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
   * Ref callback used by the popup for do positioning.
   */
  refCallback: PropTypes.func,
};

const TabMenuList = ({
  children,
  isHeightBounded,
  refCallback,
  ...customProps
}) => (
  <ContentContainer
    header={<ActionHeader title="Title TBD" />}
    footer={<ActionFooter />}
    fill={isHeightBounded}
  >
    <ul
      {...customProps}
      data-application-tab-menu-content
      className={cx('tab-menu-list')}
      role="menu"
      ref={refCallback}
    >
      {React.Children.map(children, child => (
        <li key={child.props.path} role="menuitem">{child}</li>
      ))}
    </ul>
  </ContentContainer>
);

TabMenuList.propTypes = propTypes;

export default TabMenuList;
