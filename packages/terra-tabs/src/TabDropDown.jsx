import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import onClickOutside from 'react-onclickoutside';

import styles from './TabDropDown.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Currently active Tabs.Pane content to be displayed.
   */
  children: PropTypes.node,
  /**
   * The id of the tab to be used in mapping.
   */
  isOpen: PropTypes.bool,
  /**
   * @private
   * The function callback when a click outside event occurs.
   */
  onOutsideClick: PropTypes.func,
};

const TabDropDown = ({
  isOpen,
  children,
  onOutsideClick,
  ...customProps
}) => {
  TabDropDown.handleClickOutside = event => onOutsideClick(event);

  // Delete the unnecessary props that come from react-onclickoutside.
  delete customProps.disableOnClickOutside;
  delete customProps.enableOnClickOutside;
  delete customProps.eventTypes;
  delete customProps.excludeScrollbar;
  delete customProps.outsideClickIgnoreClass;
  delete customProps.preventDefault;
  delete customProps.stopPropagation;

  const paneClassNames = cx([
    'drop-down',
    { 'is-open': isOpen },
  ]);

  return (
    <div
      {...customProps}
      role="none"
      className={paneClassNames}
    >
      {children}
    </div>
  );
};

TabDropDown.propTypes = propTypes;

export default onClickOutside(TabDropDown, { handleClickOutside: () => TabDropDown.handleClickOutside });
