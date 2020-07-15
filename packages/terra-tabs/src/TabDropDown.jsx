import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import onClickOutside from 'react-onclickoutside';
import * as KeyCode from 'keycode-js';

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
  onRequestClose: PropTypes.func,
  refCallback: PropTypes.func,
};

const TabDropDown = ({
  isOpen,
  children,
  onRequestClose,
  refCallback,
  disableOnClickOutside,
  enableOnClickOutside,
}) => {
  const handleKeyDown = event => {
    if (event.keyCode === KeyCode.KEY_ESCAPE && onRequestClose) {
      onRequestClose(event);
    }
  }

  useEffect(() => {
    if (isOpen) {
      enableOnClickOutside();
      document.addEventListener('keydown', handleKeyDown);
    } else {
      disableOnClickOutside();
      document.removeEventListener('keydown', handleKeyDown);
    }

    return (() => {
      disableOnClickOutside();
      document.removeEventListener('keydown', handleKeyDown);
    });
  }, [isOpen]); 

  TabDropDown.handleClickOutside = event => onRequestClose(event);

  const paneClassNames = cx([
    'drop-down',
    { 'is-open': isOpen },
  ]);

  return (
    <div
      ref={refCallback}
      role="none"
      className={paneClassNames}
    >
      {children}
    </div>
  );
};

TabDropDown.propTypes = propTypes;

const clickOutsideConfig = {
  handleClickOutside: () => TabDropDown.handleClickOutside,
};

export default onClickOutside(TabDropDown, clickOutsideConfig);
