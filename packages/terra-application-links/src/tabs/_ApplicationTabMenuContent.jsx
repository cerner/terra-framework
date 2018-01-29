import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import List from 'terra-list';
import styles from './ApplicationTabMenuContent.scss';

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
   * Prop from popup, determines if the menu width is bound by the screen.
   */
  isWidthBounded: PropTypes.bool,
  /**
   * Ref callback used by the popup for do positioning.
   */
  refCallback: PropTypes.func,
};

const ApplicationTabMenuContent = ({
  children,
  isHeightBounded,
  isWidthBounded,
  refCallback,
  ...customProps
}) => {
  const listStyle = {};
  if (isHeightBounded) {
    listStyle.height = '100%';
  }
  if (isWidthBounded) {
    listStyle.width = '100%';
  }

  return (
    <List data-application-tab-menu-content {...customProps} style={listStyle} className={cx(['list'])} role="menu" ref={refCallback}>
      {React.Children.map(children, child => (
        <List.Item content={child} key={child.props.path} role="menuitem" />
      ))}
    </List>
  );
};

ApplicationTabMenuContent.propTypes = propTypes;

export default ApplicationTabMenuContent;
