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
    this.handleOnClick = this.handleOnClick.bind(this);
    this.getChildren = this.getChildren.bind(this);
    this.hasChildren = this.hasChildren.bind(this);
    this.state = { currentKey: this.props.rootMenuKey };
    // TODO: Remove internal generation.
    this.props.menuConfig = Utils.generateConfig();
    this.props.rootMenuKey = Utils.ROOTKEY;
    // this.state = { stack: [this], config: this.generateConfig() };
  }

  // componentWillReceiveProps(nextProps) {
  //   if (this.props.children.length !== nextProps.children.length) {
  //     this.setState({ stack: [this] });
  //   }
  // }

  /**
   * Return all children objects one level below the key
   * @param {*} key
   */
  getChildren() {
    this.props.menuConfig.children.forEach((object) => {
      if (object.key === this.state.currentKey) {
        return object.children;
      }
      return null;
    });
  }

  /**
   * Returns true if the key has children
   * @param {*} key
   */
  hasChildren(config, key) {
    if ('children' in config) {
      config.children.forEach((object) => {
        if (key === object.key) {
          return true;
        }
        this.hasChildren(config, key);
        return false;
      });
    }
    return false;
  }

  handleOnClick(event, key) {
    if (!this.hasChildren()) {
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
      children,
      onChange,
      userData,
      ...customProps
    } = this.props;

    return (
      <div {...customProps} >
        <MenuPage>{}</MenuPage>
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
