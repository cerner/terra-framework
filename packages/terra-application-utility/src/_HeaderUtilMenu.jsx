import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';

// import MenuItem from './MenuItem';
// import MenuItemGroup from './MenuItemGroup';
// import MenuDivider from './MenuDivider';
import Utils from './_Utils';
import MenuPage from './_HeaderUtilMenuPage';
import MenuItem from './_HeaderUtilMenuItem';

const propTypes = {
  /**
   * List of Menu.Item(s)/Menu.ItemGroup(s)/Menu.Divider(s) to be displayed as content within the Menu.
   */
  children: PropTypes.node.isRequired,
  /**
   * Callback function indicating a close condition was met, should be combined with isOpen for state management.
   */
  onChange: PropTypes.func.isRequired,
  /**
   * CSS classnames that are append to the menu content inner.
   */
  classNameContent: PropTypes.string,
  /**
   * CSS classnames that are append to the overlay.
   */
  classNameOverlay: PropTypes.string,
  /**
   * Configuration file used to generate menu pages
   */
  menuConfig: PropTypes.object,
  /**
   * The object containing information of the user.
   */
  userData: PropTypes.element,
};

const defaultProps = {
  children: [],
  isOpen: false,
  contentWidth: '240',
};

class Menu extends React.Component {
  constructor(props) {
    super(props);
    // this.generateConfigFile = this.generateConfigFile.bind(this);
    this.setPageDimensions = this.setPageDimensions.bind(this);
    this.push = this.push.bind(this);
    this.pop = this.pop.bind(this);
    // this.generateConfig = this.generateConfig.bind(this);
    this.generateMenuPage = this.generateMenuPage.bind(this);
    this.state = { stack: [this], config: this.generateConfig() };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.children.length !== nextProps.children.length) {
      this.setState({ stack: [this] });
    }
  }

  setPageDimensions(node) {
    if (node) {
      this.pageHeight = node.clientHeight;
      this.pageWidth = node.clientWidth;
    } else {
      this.pageHeight = undefined;
      this.pageWidth = undefined;
    }
  }

  generateConfig() {
    return {
      key: 'menu-page',
      title: 'Menu',
      children: [
        {
          key: 'user-information-page',
          title: 'User Information',
          content: this.props.userData,
          children: [
            {
              key: 'change-photo',
              title: 'User Information',
            },
          ],
        },
        {
          key: 'settings',
          title: 'Settings',
          children: [
            {
              key: 'appearance',
              title: 'Appearance',
            },
            {
              key: 'security',
              title: 'Security',
            },
          ],
        },
        {
          key: 'help-page',
          title: 'Help',
          children: [
            {
              key: 'getting-started',
              title: 'Getting Started',
            },
            {
              key: 'about',
              title: 'About',
            },
            {
              key: 'terms-of-use',
              title: 'Terms of Use',
            },
          ],
        },
      ],
    };
  }

/**
 * Recursively traverses a config file and genereates menu pages and it's associated menu items.
 * @param {*} config
 */
  generateMenuPage(config) {
    const itemArray = [];
    if ('children' in config) {
      config.children.forEach((object) => {
        const menuItem = (
          <MenuItem
            key={object.key}
            content={object.content || object.title}
          />
        )
        itemArray.push(menuItem);
        this.generateMenuPage(object);
      });
    } else {
      return;
    }
    // console.log('menu page');
    const menuPage = (
      <MenuPage
        title={config.title}
        key={config.key}
        onRequestBack={this.pop}
        onRequestClose={this.push}
        index={}
      >
        {itemArray}
      </MenuPage>);
  }

  pop() {
    if (this.state.stack.length > 1) {
      const newStack = this.state.stack.slice();
      newStack.pop();
      this.setState({ stack: newStack });
    }
  }

  push(item) {
    const newStack = this.state.stack.slice();
    newStack.push(item);
    this.setState({ stack: newStack });
  }

  render() {
    const {
      classNameContent,
      classNameOverlay,
      children,
      onChange,
      userData,
      ...customProps
    } = this.props;

    const visiblePage = this.state.stack.length - 1;
    const slides = this.state.stack.map((item, index) => (
      <MenuPage
        // eslint-disable-next-line react/no-array-index-key
        key={item.props.key}
        title={item.props.title}
        content={item.props.content}
        onRequestNext={this.push}
        onRequestBack={this.pop}
        isHidden={index !== visiblePage}
        fixedHeight={this.pageHeight}
        fixedWidth={this.pageWidth}
        refCallback={visiblePage === 0 ? this.setPageDimensions : null}
        index={index}
        isFocused={index === visiblePage}
      >
        {item.props.children}
      </MenuPage>
    ));

    return (
      <div {...customProps} >
        {slides}
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
