import React, {
  useRef,
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ActionFooter from 'terra-action-footer';
import ContentContainer from 'terra-content-container';
import Button from 'terra-button';
import ActionHeader from 'terra-action-header';
import {
  KEY_SPACE,
  KEY_RETURN,
  KEY_UP,
  KEY_DOWN,
} from 'keycode-js';

import PopupMenuListItem from './_PopupMenuListItem';
import { userConfigPropType } from '../utils/propTypes';
import PopupMenuUser from './_PopupMenuUser';

import styles from './PopupMenu.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Title to be placed within the popup header.
   */
  title: PropTypes.string,
  /**
   * The text to be assigned to the button in the footer.
   */
  footerText: PropTypes.string,
  /**
   * Callback for when the footer item is selected.
   */
  onSelectFooterItem: PropTypes.func,
  /**
   * The custom content to be placed at the top of the content area.
   */
  customContent: PropTypes.node,
  /**
   * A configuration object with information pertaining to the application's user.
   */
  userConfig: userConfigPropType,
  /**
   * An array of selectable items to be displayed within the popup.
   */
  menuItems: PropTypes.arrayOf(PropTypes.shape({
    /**
     * Icon to be rendered
     */
    icon: PropTypes.element,
    /**
     * Key used as react key, and returned in the onSelect
     */
    key: PropTypes.string.isRequired,
    /**
     * Object to be returned in the onSelect
     */
    metaData: PropTypes.object,
    /**
     * Text display and/or aria-label
     */
    text: PropTypes.string.isRequired,
    /**
     * Whether or not this item is the active item.
     */
    isActive: PropTypes.bool,
    /**
     * The number value representing the notification count.
     */
    notificationCount: PropTypes.number,
  })),
  /**
   * Function callback for selection of the menu item. Returns (key, metaData).
   */
  onSelectMenuItem: PropTypes.func,
  /**
   * Whether or not content is constrained vertically.
   */
  isHeightBounded: PropTypes.bool,
  /**
   * Whether or not selected states should display on the menu item.
   */
  showSelections: PropTypes.bool,
};

const defaultProps = {
  menuItems: [],
  isHeightBounded: false,
  showSelections: false,
};

const PopupMenu = ({
  title, footerText, onSelectFooterItem, onSelectMenuItem, customContent, userConfig, menuItems, isHeightBounded, showSelections,
}) => {
  const listRef = useRef();
  const buttonRef = useRef();

  function setButtonRef(node) {
    buttonRef.current = node;
  }

  function handleDown(event) {
    if (listRef.current.hasChildNodes()) {
      const sibling = listRef.current.firstChild;
      if (sibling) {
        event.preventDefault();
        sibling.focus();
      }
    }
  }

  function handleUp(event) {
    if (listRef.current.hasChildNodes()) {
      const sibling = listRef.current.lastChild;
      if (sibling) {
        event.preventDefault();
        sibling.focus();
      }
    }
  }

  function loopFocus(event) {
    if (buttonRef.current) {
      buttonRef.current.focus();
    } else if (event.nativeEvent.keyCode === KEY_UP) {
      handleUp(event);
    } else if (event.nativeEvent.keyCode === KEY_DOWN) {
      handleDown(event);
    }
  }

  function myKeyDown(event) {
    if (event.nativeEvent.keyCode === KEY_DOWN) {
      handleDown(event);
    }
  }

  function myButtonKeyDown(event) {
    if (event.nativeEvent.keyCode === KEY_RETURN || event.nativeEvent.keyCode === KEY_SPACE) {
      event.preventDefault();
      event.stopPropagation();
      onSelectFooterItem();
      return;
    }
    if (event.nativeEvent.keyCode === KEY_UP) {
      handleUp(event);
    } else if (event.nativeEvent.keyCode === KEY_DOWN) {
      handleDown(event);
    }
  }

  let footer;
  if (onSelectFooterItem) {
    footer = (
      <ActionFooter
        end={(
          <Button
            text={footerText}
            onClick={onSelectFooterItem}
            onKeyDown={myButtonKeyDown}
            refCallback={setButtonRef}
          />
        )}
      />
    );
  }

  /* eslint-disable jsx-a11y/no-noninteractive-tabindex */
  return (
    <div className={cx('container', { 'is-fill': isHeightBounded })}>
      <ContentContainer
        header={<ActionHeader title={title} />}
        footer={footer || <ActionFooter />}
        fill={isHeightBounded}
      >
        <div className={cx('content-header')}>
          {customContent ? (
            <div className={cx('custom-content-container')}>
              {customContent}
            </div>
          ) : undefined}
          {userConfig ? <PopupMenuUser userConfig={userConfig} /> : null}
          <ul className={cx('utility-list')} ref={listRef} role="menu" onKeyDown={myKeyDown} tabIndex="0">
            {menuItems.map(item => (
              <PopupMenuListItem
                key={item.key}
                onSelect={onSelectMenuItem && onSelectMenuItem.bind(null, item.key, item.metaData)}
                icon={item.icon}
                text={item.text}
                notificationCount={item.notificationCount}
                showSelections={showSelections}
                isSelected={item.isActive}
                loopFocus={loopFocus}
              />
            ))}
          </ul>
        </div>
      </ContentContainer>
    </div>
  );
};

PopupMenu.propTypes = propTypes;
PopupMenu.defaultProps = defaultProps;

export default PopupMenu;
