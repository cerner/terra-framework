import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';

// import MenuItem from './MenuItem';
// import MenuItemGroup from './MenuItemGroup';
// import MenuDivider from './MenuDivider';
import Utils from './_Utils';
import MenuPage from './_UtilityMenuPage';

const propTypes = {
  /**
   *
   */
  isHeightbounded: PropTypes.func,
  /**
   * Key based object containing menu page data
   */
  menuConfig: PropTypes.object,
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
};

class Menu extends React.Component {
  constructor(props) {
    super(props);
    const map = new Map();
    this.handleOnClick = this.handleOnClick.bind(this);
    this.getChildren = this.getChildren.bind(this);
    this.getTitle = this.getTitle.bind(this);
    this.hasChildren = this.hasChildren.bind(this);
    // TODO: Remove internal generation and have consumers pass in config with additional items.
    this.props.menuConfig = Utils.generateConfig();
    this.props.rootMenuKey = Utils.ROOTKEY;
    this.state = { currentKey: this.props.rootMenuKey, map: this.createMap(map) };
  }

  // componentWillReceiveProps(nextProps) {
  //   if (this.props.children.length !== nextProps.children.length) {
  //     this.setState({ stack: [this] });
  //   }
  // }

  /**
   * Return all children objects one level below the key.
   * @param {*} key
   */
  getChildren(key) {
    return this.state.map.get(key)[1];
  }

  /**
   * Return the title of the specified key.
   * @param {*} key
   */
  getTitle(key) {
    return this.state.map.get(key)[0];
  }

  /**
   * Recursively create a map from the menu config with entries for each key.
   * A key's value is a 2D array containing the title and children.
   * Example: {"key" => [["Page Title"], [{key: "child-one", title: "First Item"}, {key: "child-two", title: "Second Item"}]}
   */
  createMap(config, map) {
    map.set(config.key, [[config.title], config.children]);
    if ('children' in config) {
      config.children.forEach((object) => {
        this.createMap(object, map);
      });
    }
  }

  handleOnClick(event, key) {
    if (!this.getChildren()) {
      this.props.onChange(event);
    } else {
      this.setState({ currentKey: key });
    }
  }
  // setPageDimensions(node) {
  //   if (node) {
  //     this.pageHeight = node.clientHeight;
  //     this.pageWidth = node.clientWidth;
  //   } else {
  //     this.pageHeight = undefined;
  //     this.pageWidth = undefined;
  //   }
  // }

  render() {
    const {
      onChange,
      userData,
      ...customProps
    } = this.props;

    const currentKey = this.state.currentKey;

    return (
      <div {...customProps} >
        <div>{this.getTitle(currentKey)}</div>
        <MenuPage
          title={this.getTitle(currentKey)}
          key={this.state.currentKey}
          onChange={this.props.onChange}
          onClick={this.handleOnClick}
        >
          {this.getChildren(currentKey)}
        </MenuPage>
      </div>
    );
  }
}

Menu.propTypes = propTypes;
Menu.defaultProps = defaultProps;
// Menu.Item = MenuItem;
// Menu.ItemGroup = MenuItemGroup;
// Menu.Divider = MenuDivider;
// Menu.Opts = {
//   widths: Popup.Opts.widths,
// };

export default Menu;
