import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import Button from 'terra-button';
import IconLeft from 'terra-icon/lib/icon/IconLeft';
import MenuDivider from '../_UtilityMenuDivider';
import Utils from '../_Utils';
import MenuPage from './_HeaderUtilityMenuPage';
import styles from './_HeaderUtilityMenu.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The array specifying additional menu items
   */
  additionalItemsConfig: PropTypes.array,
  /**
   * Indicates if the height is bound to a value.
   */
  isHeightBounded: PropTypes.bool,
  /**
   * The data object used to generate menu pages
   */
  menuConfig: PropTypes.object.isRequired,
  /**
   * Callback function indicating a close condition was met, should be combined with isOpen for state management.
   */
  onChange: PropTypes.func.isRequired,
  /**
   * The object containing information of the user.
   */
  userData: PropTypes.element,
};

const defaultProps = {
  additionalItemsConfig: null,
  isHeightBounded: undefined,
  userData: null,
};

class HeaderUtilityMenu extends React.Component {
  /**
   * Recursively add each additional item to the map.
   * @param {*} additionalItemsConfig
   * @param {*} map
   */
  static addAdditionalItems(additionalItemsConfig, map) {
    additionalItemsConfig.forEach((item) => {
      if (item.parent) {
        const parent = map.get(item.parent);
        parent.children.push(item);
      }
      HeaderUtilityMenu.insertIntoMap(item, map);
      if (item.children) {
        this.addAdditionalItems(item.children, map);
      }
    });
  }

  /**
   * Insert the specified item into the map.
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
    this.handleLogOut = this.handleLogOut.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleRequestBack = this.handleRequestBack.bind(this);
    this.pop = this.pop.bind(this);
    this.push = this.push.bind(this);
    this.createMap(this.props.menuConfig, map);
    HeaderUtilityMenu.addAdditionalItems(this.props.additionalItemsConfig, map);
    this.state = {
      currentKey: Utils.KEYS.MENU,
      previousKeyStack: [],
      map,
    };
  }

  /**
   * Return children of the specified object
   * @param {*} key
   */
  getChildren(key) {
    return this.state.map.get(key).children;
  }

  /**
   * Return the title of the specified object
   * @param {*} key
   */
  getTitle(key) {
    return this.state.map.get(key).title;
  }

  /**
   * Recursively create a map from the menu config with entries for each key.
   * A key's value is an object containing the title, content, isSelected, and children.
   * Example: {"key" => {title: "Page Title", isSelected: false, children: [{key: "child-one", title: "First Item", isSelected: false}, {key: "child-two", title: "Second Item" isSelected: false}]}
   */
  createMap(config, map) {
    if (config.key === Utils.KEYS.USER_INFORMATION) {
      // eslint-disable-next-line no-param-reassign
      config.content = this.props.userData;
    }
    HeaderUtilityMenu.insertIntoMap(config, map);

    if ('children' in config) {
      config.children.forEach((object) => {
        this.createMap(object, map);
      });
    }
  }

  handleLogOut() {
    this.props.onChange(event, Utils.KEYS.LOG_OUT);
  }

  handleOnChange(key) {
    // this.state.map.set(key).isSelected = true;
    if (!this.getChildren(key)) {
      // debugger;
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
    // this.state.map.set(key).isSelected = false;
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
      menuConfig,
      isHeightBounded,
      onChange,
      userData,
      ...customProps
    } = this.props;

    const MenuClassNames = cx([
      'utility-menu',
      { 'is-height-bounded': isHeightBounded },
      customProps.classNames,
    ]);
    const HeaderClassNames = cx('header');
    const BackButtonClassNames = cx('back-button');
    const IconLeftClassNames = cx('icon-left');
    const LogOutButtonClassNames = cx('log-out-button');
    const HeaderTextClassNames = cx('header-text');
    const FooterClassNames = cx('footer');

    const currentKey = this.state.currentKey;
    const backButton = <Button className={BackButtonClassNames} onClick={this.handleRequestBack}><IconLeft className={IconLeftClassNames} /></Button>;
    const header = (
      <div className={HeaderClassNames}>
        {currentKey !== Utils.KEYS.MENU && backButton}
        <span className={HeaderTextClassNames}>{this.getTitle(currentKey) }</span>
      </div>
    );
    const footer = (
      <div className={FooterClassNames}>
        <Button className={LogOutButtonClassNames} onClick={this.handleLogOut}>
          {Utils.TITLES.LOG_OUT}
        </Button>
      </div>
    );

    return (
      <div {...customProps} className={MenuClassNames} >
        {header}
        <MenuDivider />
        <MenuPage
          pageData={this.state.map.get(currentKey)}
          onChange={this.handleOnChange}
        />
        <MenuDivider />
        {currentKey === Utils.KEYS.MENU && footer }
      </div>
    );
  }
}

HeaderUtilityMenu.propTypes = propTypes;
HeaderUtilityMenu.defaultProps = defaultProps;

export default HeaderUtilityMenu;
