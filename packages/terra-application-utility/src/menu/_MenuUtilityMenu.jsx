import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import AppDelegate from 'terra-app-delegate';
import IconClose from 'terra-icon/lib/icon/IconClose';
import IconLeft from 'terra-icon/lib/icon/IconLeft';
import MenuDivider from '../_UtilityMenuDivider';
import Utils from '../_Utils';
import MenuPage from './_MenuUtilityMenuPage';
import styles from './_MenuUtilityMenu.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The AppDelegate instance propogated to each child.
   */
  app: AppDelegate.propType,
  /**
   * The array specifying additional menu items
   */
  additionalItemsConfig: PropTypes.array,
  /**
   * Indicates if the height is bound to a value.
   */
  isHeightBounded: PropTypes.bool,
  /**
   * The data object containing the static menu items.
   */
  menuConfig: PropTypes.object.isRequired,
  /**
   * The function to trigger when a menu item is selected.
   */
  onChange: PropTypes.func.isRequired,
};

const defaultProps = {
  additionalItemsConfig: [],
  isHeightBounded: undefined,
};

class MenuUtilityMenu extends React.Component {
  /**
   * Recursively add each additional item to the map.
   * @param {*} additionalItemsConfig
   * @param {*} map
   */
  static addAdditionalItems(additionalItemsConfig, map) {
    if (!additionalItemsConfig) {
      return;
    }

    additionalItemsConfig.forEach((item) => {
      if (item.parent) {
        const parent = map.get(item.parent);
        parent.children.push(item);
      }
      MenuUtilityMenu.insertIntoMap(item, map);
      if (item.children) {
        this.addAdditionalItems(item.children, map);
      }
    });
  }

  /**
   * Insert the specified item into the map.
   * A key's value is an object containing the title, content, isSelected, and children.
   * Example: {"key" => {title: "Page Title", isSelected: false, children: [{key: "child-one", title: "First Item", isSelected: false}, {key: "child-two", title: "Second Item" isSelected: false}]}
   * @param {*} item
   * @param {*} map
   */
  static insertIntoMap(item, map) {
    map.set(
      item.key,
      { title: item.title,
        content: item.content,
        isSelected: item.isSelected,
        children: item.children,
      },
    );
  }

  constructor(props) {
    super(props);
    const map = new Map();
    this.createMap = this.createMap.bind(this);
    this.getChildren = this.getChildren.bind(this);
    this.getTitle = this.getTitle.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleRequestBack = this.handleRequestBack.bind(this);
    this.pop = this.pop.bind(this);
    this.push = this.push.bind(this);
    this.createMap(this.props.menuConfig, map);
    MenuUtilityMenu.addAdditionalItems(this.props.additionalItemsConfig, map);
    this.state = {
      currentKey: Utils.KEYS.MENU,
      previousKeyStack: [],
      map,
    };
  }

  getChildren(key) {
    return this.state.map.get(key).children;
  }

  getTitle(key) {
    return this.state.map.get(key).title;
  }

  /**
   * Recursively create a map from the menu config with entries for each key.
   */
  createMap(config, map) {
    MenuUtilityMenu.insertIntoMap(config, map);
    if ('children' in config) {
      config.children.forEach((object) => {
        this.createMap(object, map);
      });
    }
  }

  handleClose() {
    this.props.app.closeDisclosure();
  }

  handleLogOut() {
    this.props.onChange(event, Utils.KEYS.LOG_OUT);
  }

  handleOnChange(event, key) {
    if (!this.getChildren(key)) {
      const value = this.state.map.get(key);
      value.isSelected = !value.isSelected;
      this.state.map.set(key, value);
      this.props.onChange(event, key);
    } else {
      this.setState({
        previousKey: this.push(this.state.currentKey),
        currentKey: key,
      });
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

  render() {
    const {
      additionalItemsConfig,
      app,
      menuConfig,
      isHeightBounded,
      onChange,
      ...customProps
    } = this.props;

    const MenuClassNames = cx([
      'utility-menu',
      { 'is-height-bounded': isHeightBounded },
      customProps.classNames,
    ]);
    const HeaderClassNames = cx('header');
    const HeaderLeftContainer = cx('left-container');
    const ClosebuttonClassNames = cx('close-button');
    const BackButtonClassNames = cx('back-button');
    const IconLeftClassNames = cx('icon-left');
    const LogOutButtonClassNames = cx('log-out-button');
    const IconCloseClassNames = cx('icon-close');
    const HeaderTextClassNames = cx('header-text');
    const FooterClassNames = cx('footer');

    const currentKey = this.state.currentKey;
    const backButton = <button className={BackButtonClassNames} onClick={this.handleRequestBack}><IconLeft className={IconLeftClassNames} /></button>;
    const closeButton = <button onClick={this.handleClose} className={ClosebuttonClassNames}><IconClose className={IconCloseClassNames} /></button>;
    const header = (
      <div className={HeaderClassNames}>
        <div className={HeaderLeftContainer}>
          {currentKey !== Utils.KEYS.MENU && backButton}
          <span className={HeaderTextClassNames}>{this.getTitle(currentKey)}</span>
        </div>
        {closeButton}
      </div>
      );
    const footer = (
      <div className={FooterClassNames}>
        <MenuDivider />
        <button className={LogOutButtonClassNames} onClick={this.handleLogOut}>
          {Utils.TITLES.LOG_OUT}
        </button>
      </div>);

    return (
      <div {...customProps} className={MenuClassNames} >
        {header}
        <MenuDivider />
        <MenuPage
          pageData={this.state.map.get(currentKey)}
          onChange={this.handleOnChange}
        />
        {currentKey === Utils.KEYS.MENU && footer }
      </div>
    );
  }
}

MenuUtilityMenu.propTypes = propTypes;
MenuUtilityMenu.defaultProps = defaultProps;

export default MenuUtilityMenu;
