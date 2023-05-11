import React, { useCallback, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import onClickOutside from 'react-onclickoutside';
import { KEY_ESCAPE } from 'keycode-js';

import styles from './TabDropDown.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Currently active HiddenTabs be displayed.
   */
  children: PropTypes.node,
  /**
   * The id of the tab to be used in mapping.
   */
  isOpen: PropTypes.bool,
  /**
   * The function returning the html node.
   */
  refCallback: PropTypes.func.isRequired,
  /**
   * @private
   * The function callback when a click outside event occurs.
   */
  onRequestClose: PropTypes.func,
  /**
   * @private
   * The function callback for disable.
   */
  disableOnClickOutside: PropTypes.func,
  /**
   * @private
   * The function callback for enable.
   */
  enableOnClickOutside: PropTypes.func,
};

const TabDropDown = ({
  isOpen,
  children,
  onRequestClose,
  refCallback,
  disableOnClickOutside,
  enableOnClickOutside,
}) => {
  const dropDownRef = useRef();
  const handleKeyDown = useCallback(event => {
    if (event.keyCode === KEY_ESCAPE && onRequestClose) {
      onRequestClose(event);
    }
  }, [onRequestClose]);

  useEffect(() => {
    if (isOpen) {
      enableOnClickOutside();
      document.addEventListener('keydown', handleKeyDown);
    } else {
      disableOnClickOutside();
      document.removeEventListener('keydown', handleKeyDown);
      dropDownRef.current.scrollTop = 0;
    }

    return (() => {
      disableOnClickOutside();
      document.removeEventListener('keydown', handleKeyDown);
    });
  }, [isOpen, enableOnClickOutside, disableOnClickOutside, handleKeyDown]);

  TabDropDown.handleClickOutside = event => onRequestClose(event);

  const theme = React.useContext(ThemeContext);
  const dropDownClassNames = cx(
    'drop-down',
    { 'is-open': isOpen },
    theme.className,
  );

  return (
    <div
      ref={node => { dropDownRef.current = node; refCallback(node); }}
      role="none"
      className={dropDownClassNames}
      onMouseDown={e => { e.preventDefault(); }}
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
