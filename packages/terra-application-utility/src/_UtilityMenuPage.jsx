import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import Arrange from 'terra-arrange';
import IconChevronRight from 'terra-icon/lib/icon/IconChevronRight';
import styles from './_UtilityMenuPage.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Object containing data pertaining to this specific page
   */
  pageData: PropTypes.shape({
    Title: PropTypes.string,
    Content: PropTypes.element,
    children: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  /**
   * Function to trigger when an item is selected
   */
  onChange: PropTypes.func.isRequired,
};

const UtilityMenuPage = ({
  pageData,
  onChange,
  ...customProps
}) => {
  const menuPageClasses = cx('menu-page');
  const listItemClasses = cx('list-item');
  const listItemArr = pageData.children.map((child) => {
    let fill = null;
    let fitEnd = null;
    if (child.content) {
      fill = child.content;
    } else {
      fill = child.title;
    }

    if (child.children) {
      fitEnd = <IconChevronRight />;
    } else {
      fitEnd = null;
    }

    return (
      <li key={child.key} className={listItemClasses}>
        <Arrange
          onClick={() => { onChange(child.key); }}
          fill={<div>{fill}</div>}
          fitEnd={fitEnd}
        />
      </li>);
  });

  return (
    <ul{...customProps} className={menuPageClasses}>
      {listItemArr}
    </ul>
  );
};

UtilityMenuPage.propTypes = propTypes;

export default UtilityMenuPage;
