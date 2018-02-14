import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import Arrange from 'terra-arrange';
import IconChevronRight from 'terra-icon/lib/icon/IconChevronRight';
import MenuDivider from './_UtilityMenuDivider';
import styles from './_HeaderUtilityMenuPage.scss';

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

const HeaderUtilityMenuPage = ({
  pageData,
  onChange,
  ...customProps
}) => {
  const menuPageClassNames = cx('menu-page');
  const listItemClassNames = cx('list-item');
  const chevronClassNames = cx('chevron');
  // const listItemArr = pageData.children.map(child =>
  //   (
  //     <li key={child.key} className={listItemClassNames}>
  //       <Arrange
  //         onClick={() => { onChange(child.key); }}
  //         // fitStart={}
  //         fill={<div>{child.content ? child.content : child.title}</div>}
  //         fitEnd={child.children && !child.content ? <IconChevronRight className={chevronClassNames} /> : null}
  //         align={'center'}
  //       />
  //     </li>
  //   ),
  // );
  // eslint-disable jsx-a11y/no-static-element-interactions
  const listItemArr = pageData.children.map((child) => {
    if (child.content) {
      return (
        <div key={child.key}>
          <li onClick={() => { onChange(child.key); }} role="button" className={listItemClassNames}>
            {child.content}
          </li>
          { child.key === 'user-information' && <MenuDivider key={`${child.key}-divider`} />}
        </div>
      );
    }
    return (
      <li onClick={() => { onChange(child.key); }} role="button" key={child.key} className={listItemClassNames}>
        <Arrange
          // fitStart={}
          fill={<div>{child.title}</div>}
          fitEnd={child.children && !child.content ? <IconChevronRight className={chevronClassNames} /> : null}
          align={'center'}
        />
      </li>
    );
  });
// eslint-enable jsx-a11y/no-static-element-interactions
  return (
    <ul{...customProps} className={menuPageClassNames}>
      {listItemArr}
    </ul>
  );
};

HeaderUtilityMenuPage.propTypes = propTypes;

export default HeaderUtilityMenuPage;
