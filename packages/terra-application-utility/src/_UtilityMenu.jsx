import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import Button from 'terra-button';
import IconLeft from 'terra-icon/lib/icon/IconLeft';
import MenuDivider from 'terra-menu/lib//MenuDivider';
import Utils from './_Utils';
import MenuPage from './_UtilityMenuPage';
import styles from './_UtilityMenu.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   *
   */
  isHeightBounded: PropTypes.func,
  // /**
  //  * Key based object containing menu page data
  //  */
  // menuConfig: PropTypes.object,
  /**
   * Callback function indicating a close condition was met, should be combined with isOpen for state management.
   */
  onChange: PropTypes.func.isRequired,
  /**
   * The base key of the pages object
   */
  rootMenuKey: PropTypes.func,
  /**
   * The object containing information of the user.
   */
  userData: PropTypes.element,
};

const defaultProps = {
  isHeightBounded: undefined,
  rootMenuKey: null,
  userData: null,
};

class UtilityMenu extends React.Component {
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
    // TODO: Remove internal generation and have consumers pass in config with additional items.
    // this.props.menuConfig = Utils.generateConfig(this.props.userData);
    // this.props.rootMenuKey = Utils.ROOTKEY;
    this.createMap(Utils.generateConfig(this.props.userData), map);
    this.state = {
      currentKey: Utils.ROOTKEY,
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
    map.set(
      config.key,
      { title: config.title,
        content: config.content,
        // isSelected: config.isSelected,
        children: config.children,
      },
    );
    if ('children' in config) {
      config.children.forEach((object) => {
        this.createMap(object, map);
      });
    }
  }

  handleLogOut() {
    this.props.onChange(event, 'logout');
  }

  handleOnChange(key) {
    // this.state.map.set(key).isSelected = true;
    if (!this.getChildren(key)) {
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
      onChange,
      userData,
      ...customProps
    } = this.props;

    const MenuClassNames = cx([
      'menu',
      customProps.classNames,
    ]);
    const DividerClassNames = cx(['divider']);

    // Display Logout button on the first page
    // Display Back button in nested pages
    const currentKey = this.state.currentKey;
    return (
      <div {...customProps} classNames={MenuClassNames} >
        <div>
          {currentKey !== Utils.ROOTKEY && <Button onClick={this.handleRequestBack}> <IconLeft /> </Button>}
          {this.getTitle(currentKey) }</div>
        <MenuDivider classNames={DividerClassNames} />
        <MenuPage
          pageData={this.state.map.get(currentKey)}
          onChange={this.handleOnChange}
        />
        <MenuDivider classNames={DividerClassNames} />
        {currentKey === Utils.ROOTKEY && <Button onClick={this.handleLogOut}>{Utils.LOGOUT}</Button>}
      </div>
    );
  }
}

UtilityMenu.propTypes = propTypes;
UtilityMenu.defaultProps = defaultProps;

export default UtilityMenu;
