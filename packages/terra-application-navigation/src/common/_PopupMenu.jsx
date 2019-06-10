import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ActionFooter from 'terra-action-footer';
import ContentContainer from 'terra-content-container';

import PopupMenuListItem from './_PopupMenuListItem';
import { userConfigPropType } from '../utils/propTypes';
import PopupMenuUser from './_PopupMenuUser';

import styles from './PopupMenu.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Header element fixed in place at the top of the menu.
   */
  header: PropTypes.element,
  /**
   * Footer element fixed in place at the bottom of the menu.
   */
  footer: PropTypes.element,
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
   * Whether or not content is be constrained vertically.
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
  header, footer, onSelectMenuItem, customContent, userConfig, menuItems, isHeightBounded, showSelections,
}) => (
  <ContentContainer
    header={header}
    footer={footer || <ActionFooter />}
    fill={isHeightBounded}
  >
    <div className={cx('container')}>
      <div className={cx('content-header')}>
        {customContent ? (
          <div className={cx('custom-content-container')}>
            {customContent}
          </div>
        ) : undefined}
        {userConfig ? <PopupMenuUser userConfig={userConfig} /> : null}
        <ul className={cx('utility-list')} role="listbox">
          {menuItems.map(item => (
            <PopupMenuListItem
              key={item.key}
              onSelect={onSelectMenuItem && onSelectMenuItem.bind(null, item.key, item.metaData)}
              icon={item.icon}
              text={item.text}
              notificationCount={item.notificationCount}
              showSelections={showSelections}
              isSelected={item.isActive}
            />
          ))}
        </ul>
      </div>
    </div>
  </ContentContainer>
);

PopupMenu.propTypes = propTypes;
PopupMenu.defaultProps = defaultProps;

export default PopupMenu;
