import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import List from 'terra-list';
import ChevronRight from 'terra-icon/lib/icon/IconChevronRight';

import styles from './MenuItem.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Whether or not the menu item should display a disclosure idicator.
   * */
  hasChevron: PropTypes.bool,
  /**
   * Whether or not the menu item is selection.
   * */
  isSelected: PropTypes.bool,
  /**
   * Text display for the menu item.
   * */
  text: PropTypes.string,
};

const MenuItem = ({
  hasChevron,
  isSelected,
  text,
  ...customProps
}) => {
  const itemClassNames = cx([
    'menu-item',
    { 'is-selected': isSelected },
  ]);

  return (
    <List.Item
      tabIndex="0"
      content={
        <div
          {...customProps}
          className={itemClassNames}
        >
          <div className={cx('title')}>
            {text}
          </div>
          {hasChevron && <span className={cx('chevron')}><ChevronRight height="0.8em" width="0.8em" /></span>}
        </div>
      }
    />
  );
};

MenuItem.propTypes = propTypes;

export default MenuItem;
