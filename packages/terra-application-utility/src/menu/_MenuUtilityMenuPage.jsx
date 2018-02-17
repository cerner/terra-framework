import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import Arrange from 'terra-arrange';
import IconChevronRight from 'terra-icon/lib/icon/IconChevronRight';
import MenuDivider from '../_UtilityMenuDivider';
import Utils from '../_Utils';
import styles from './_MenuUtilityMenuPage.scss';

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

class HeaderUtilityMenuPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleKeyDown(key, event) {
    if (event.nativeEvent.keyCode === Utils.KEY_CODES.ENTER || event.nativeEvent.keyCode === Utils.KEY_CODES.SPACE) {
      this.props.onChange(key);
    }
  }

  render() {
    const {
      pageData,
      onChange,
      ...customProps
    } = this.props;

    const menuPageClassNames = cx('menu-page');
    const listItemClassNames = cx('list-item');
    const chevronClassNames = cx('chevron');
    /* eslint-disable jsx-a11y/no-static-element-interactions */
    const listItemArr = pageData.children.map((child) => {
      if (child.content) {
        return (
          <div key={child.key}>
            <li tabIndex="0" onClick={() => { onChange(child.key); }} onKeyDown={e => this.handleKeyDown(child.key, e)} role="button" className={listItemClassNames}>
              {child.content}
            </li>
            { child.key === 'user-information' && <MenuDivider key={`${child.key}-divider`} />}
          </div>
        );
      }
      return (
        <li tabIndex="0" onClick={() => { onChange(child.key); }} onKeyDown={e => this.handleKeyDown(child.key, e)} role="button" key={child.key} className={listItemClassNames}>
          <Arrange
            // fitStart={}
            fill={<div>{child.title}</div>}
            fitEnd={child.children && !child.content ? <IconChevronRight className={chevronClassNames} /> : null}
            align={'center'}
          />
        </li>
      );
    });
    /* eslint-enable jsx-a11y/no-static-element-interactions */
    return (
      <ul{...customProps} className={menuPageClassNames}>
        {listItemArr}
      </ul>
    );
  }
}

HeaderUtilityMenuPage.propTypes = propTypes;

export default HeaderUtilityMenuPage;
