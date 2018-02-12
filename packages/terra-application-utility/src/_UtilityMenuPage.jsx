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
   *
   */
  hasChevron: PropTypes.bool,
  /**
   *
   */
  hasCheckbox: PropTypes.bool,
  /**
   * Object containing data for this specific page
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
  const menuPageClasses = cx([
    'menu-page',
    customProps.className,
  ]);
  debugger;
  if (pageData.children) {
    return (
      <ul{...customProps} className={menuPageClasses}>
        {pageData.children.map(child => (
          <li key={child.key}>
            <Arrange
              onClick={() => { onChange(child.key); }}
              fitStart={<span />}
              fill={<div> child.title </div> || <div> child.content </div>}
              fitEnd={<IconChevronRight />}
            >
              {/* {<div onClick={() => { onChange(child.key); }}>{child.Title || child.Content}</div>} */}
            </Arrange>
          </li>
        ))}
      </ul>
    );
  }
  debugger;
  return (
    <ul{...customProps} className={menuPageClasses}>
      {pageData.children.map(child => (
        <li key={child.key}>
          <Arrange
            onClick={() => { onChange(child.key); }}
            fitStart={<span />}
            fill={<div> child.title </div> || <div> child.content </div>}
          />
        </li>
      ))}
    </ul>
  );
};

UtilityMenuPage.propTypes = propTypes;

export default UtilityMenuPage;
