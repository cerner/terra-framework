import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import ContentContainer from 'terra-content-container';
import IconLeft from 'terra-icon/lib/icon/IconLeft';
import MenuDivider from '../_UtilityMenuDivider';
import Utils from '../_Utils';
import MenuItem from './_HeaderUtilityMenuItem';
import styles from './_HeaderUtilityMenu.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Indicates if the height is bound to a value.
   */
  isHeightBounded: PropTypes.bool,
  /**
   * Key of the top level menu.
   */
  initialSelectedKey: PropTypes.string.isRequired,
  /**
   * The data object containing the static menu items.
   */
  menuItems: PropTypes.arrayOf((Utils.itemShape)),
  /**
   * The function to trigger when a menu item is selected.
   */
  onChange: PropTypes.func.isRequired,
    /**
   * The function that closes the menu.
   */
  requestClose: PropTypes.func.isRequired,
};

const defaultProps = {
  isHeightBounded: undefined,
};

const processMenuItems = (items) => {
  const map = new Map();
  items.forEach((item) => {
    map.set(
      item.key,
      { title: item.title,
        content: item.content,
        contentLocation: item.contentLocation,
        isSelected: item.isSelected,
        isSelectable: item.isSelectable,
        childKeys: item.childKeys,
      },
    );
  });
  return map;
};

const hasChevron = (item) => {
  if (item.childKeys && item.childKeys.length > 0) {
    return true;
  }
  return false;
};

class HeaderUtilityMenu extends React.Component {
  constructor(props) {
    super(props);
    this.getItem = this.getItem.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleRequestBack = this.handleRequestBack.bind(this);
    this.pop = this.pop.bind(this);
    this.push = this.push.bind(this);
    this.state = {
      map: processMenuItems(props.menuItems),
      currentKey: props.initialSelectedKey,
      previousKeyStack: [],
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      map: processMenuItems(nextProps.menuItems),
    });
  }

  getItem(key) {
    return this.state.map.get(key);
  }

  buildItem(key) {
    const item = this.getItem(key);
    const chevron = hasChevron(item);
    return (
      <MenuItem
        key={key}
        itemKey={key}
        title={item.title}
        content={item.content}
        contentLocation={item.contentLocation}
        hasChevron={chevron}
        onChange={this.handleOnChange}
      />
    );
  }

  buildListContent(currentItem) {
    if (currentItem && currentItem.childKeys && currentItem.childKeys.length) {
      return (
        <ul>
          {currentItem.childKeys.map((key) => {
            let item = null;
            if (this.getItem(key).contentLocation === Utils.LOCATIONS.BODY) {
              item = this.buildItem(key);
            }
            return item;
          })}
        </ul>
      );
    }
    return null;
  }

  buildFooterContent(currentItem) {
    if (currentItem && currentItem.childKeys && currentItem.childKeys.length) {
      return currentItem.childKeys.map((key) => {
        let item = null;
        if (this.getItem(key).contentLocation === Utils.LOCATIONS.FOOTER) {
          item = this.buildItem(key);
        }
        return item;
      });
    }
    return null;
  }

  handleLogOut() {
    this.props.onChange(event, Utils.KEYS.LOG_OUT);
  }

  handleOnChange(event, key) {
    const childKeys = this.getItem(key).childKeys;
    const item = this.getItem(key);
    if (typeof childKeys !== 'undefined' && childKeys.length > 0) {
      this.toggleIsSelected(key);
      this.setState({
        previousKey: this.push(this.state.currentKey),
        currentKey: key,
      });
    } else {
      this.toggleIsSelected(key);
      if (item.isSelectable && item.isSelected) {
        this.props.onChange(event, key);
      } else {
        this.props.requestClose();
        this.props.onChange(event, key);
      }
    }
  }

  handleRequestBack() {
    this.setState({ currentKey: this.pop() });
  }

  pop() {
    const newStack = this.state.previousKeyStack.slice();
    const lastKey = newStack.pop();
    this.setState({ previousKeyStack: newStack });
    return lastKey;
  }

  push(key) {
    const newStack = this.state.previousKeyStack.slice();
    newStack.push(key);
    this.setState({ previousKeyStack: newStack });
  }

  toggleIsSelected(key) {
    const item = this.getItem(key);
    item.isSelected = !item.isSelected;
    this.state.map.set(key, item);
  }

  render() {
    const {
      menuItems,
      initialSelectedKey,
      isHeightBounded,
      onChange,
      requestClose,
      ...customProps
    } = this.props;

    // const MenuClassNames = cx([
    //   'utility-menu',
    //   { 'is-height-bounded': isHeightBounded },
    //   customProps.classNames,
    // ]);
    const HeaderClassNames = cx('header');
    const BackButtonClassNames = cx('back-button');
    const IconLeftClassNames = cx('icon-left');
    const LogOutButtonClassNames = cx('log-out-button');
    const HeaderTextClassNames = cx('header-text');
    const FooterClassNames = cx('footer');

    const currentKey = this.state.currentKey;
    const currentItem = this.getItem(currentKey);
    const backButton = <button className={BackButtonClassNames} onClick={this.handleRequestBack}><IconLeft className={IconLeftClassNames} /></button>;

    const header = (
      <div className={HeaderClassNames}>
        {currentKey !== this.props.initialSelectedKey && backButton}
        <span className={HeaderTextClassNames}>{currentItem.title }</span>
        <MenuDivider />
      </div>
    );

    let footer = null;
    if (currentKey === this.props.initialSelectedKey) {
      footer = (
        <div className={FooterClassNames}>
          <MenuDivider />
          {this.buildFooterContent(currentItem)}
        </div>
      );
    }

    return (
      <ContentContainer {...customProps} header={header} footer={footer} fill>
        {this.buildListContent(currentItem)}
      </ContentContainer>
    );
  }
}

HeaderUtilityMenu.propTypes = propTypes;
HeaderUtilityMenu.defaultProps = defaultProps;

export default HeaderUtilityMenu;
