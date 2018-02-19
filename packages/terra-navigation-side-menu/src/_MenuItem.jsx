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
   * Header element to be placed at the start of the header.
   * */
  hasChevron: PropTypes.bool,
  /**
   * Header element to be placed at the start of the header.
   * */
  isSelected: PropTypes.bool,
  /**
   * Extensions element to be placed before the end of the header.
   * */
  title: PropTypes.string,
};

const MenuItem = ({
  hasChevron,
  isSelected,
  title,
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
            {title}
          </div>
          {hasChevron && <span className={cx('chevron')}><ChevronRight height="0.8em" width="0.8em" /></span>}
        </div>
      }
    />
  );
};

MenuItem.propTypes = propTypes;

export default MenuItem;
