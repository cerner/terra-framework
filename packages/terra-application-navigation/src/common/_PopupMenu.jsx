import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ActionFooter from 'terra-action-footer';
import ContentContainer from 'terra-content-container';

import PopupMenuListItem from './_PopupMenuListItem';
import { userConfigPropType } from '../utils/propTypes';

import styles from './PopupMenu.module.scss';
import PopupMenuUser from './_PopupMenuUser';

const cx = classNames.bind(styles);

const propTypes = {
  header: PropTypes.element,
  footer: PropTypes.element,
  customContent: PropTypes.node,
  userConfig: userConfigPropType,
  menuItems: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    icon: PropTypes.element,
    text: PropTypes.string,
    count: PropTypes.number,
  })),
  onSelectMenuItem: PropTypes.func,
  isHeightBounded: PropTypes.bool,
  showSelections: PropTypes.bool,
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
              onSelect={onSelectMenuItem ? () => {
                onSelectMenuItem(item.key);
              } : undefined}
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

export default PopupMenu;
