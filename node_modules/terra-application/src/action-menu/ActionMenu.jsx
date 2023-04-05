import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import ContentContainer from 'terra-content-container';
import Header from './_ActionMenuHeader';
import {
  generateOnKeyDown,
  itemByDirection,
  itemByChar,
  flattenActionItems,
} from './_ActionUtils';

import styles from './ActionMenu.module.scss';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * Label for the ActionMenu.
   */
  label: PropTypes.string.isRequired,
  /**
   * The child ActionMenu elements.
   */
  children: PropTypes.node,
  /**
   * Whether or not a header should be displayed using the label.
   */
  isHeaderDisplayed: PropTypes.bool,
  /**
   * Callback function for close button selection.
   * Returns the event e.g. onClose(event).
   */
  onRequestClose: PropTypes.func,
  /**
   * @private
   * Injected Popup prop indicating height bounding
   */
  isHeightBounded: PropTypes.bool,
  /**
   * @private
   * Injected Popup prop indicating width bounding
   */
  isWidthBounded: PropTypes.bool,
  /**
   * @private
   * Injected Popup prop indicating close button is required
   */
  closeButtonRequired: PropTypes.string,
};

const ActionMenu = ({
  label,
  children,
  isHeightBounded,
  isHeaderDisplayed,
  isWidthBounded,
  closeButtonRequired,
  onRequestClose,
  ...customProps
}) => {
  const menuRef = useRef();
  const { items, indentChildren } = flattenActionItems(children);

  const focusItem = item => {
    if (!item || !menuRef.current) {
      return;
    }

    const element = menuRef.current.querySelector(`[data-action-menu-key="${item.actionKey}"]`);
    if (element) {
      element.focus();
    }
  };

  const onArrow = (key, direction) => {
    const item = itemByDirection(key, items, direction);
    if (item) {
      focusItem(item);
    }
  };

  const onChar = (key, char) => {
    const item = itemByChar(key, items, char);
    if (item) {
      focusItem(item);
    }
  };

  const theme = React.useContext(ThemeContext);
  const menuClassNames = classNames(
    cx(
      'action-menu',
      theme.className,
    ),
    customProps.className,
  );

  let content = (
    <ul
      {...customProps}
      className={menuClassNames}
      role="menu"
      tabIndex="0"
      aria-label={label}
      ref={menuRef}
      onKeyDown={generateOnKeyDown(null, null, onArrow, onChar)}
    >
      {React.Children.map(children, child => {
        if (!child) {
          return undefined;
        }
        return React.cloneElement(
          child,
          { onArrow, onChar, indentChildren },
        );
      })}
    </ul>
  );

  if (isHeaderDisplayed) {
    let onClose;
    if (isHeightBounded && isWidthBounded) {
      onClose = onRequestClose;
    }

    content = (
      <ContentContainer
        aria-label={label}
        tabIndex="0"
        onKeyDown={generateOnKeyDown(null, null, onArrow, onChar)}
        role="dialog"
        className={cx('action-container')}
        header={<Header label={label} onClose={onClose} />}
        fill={isHeightBounded}
      >
        {content}
      </ContentContainer>
    );
  }

  return content;
};

ActionMenu.propTypes = propTypes;

export default ActionMenu;
