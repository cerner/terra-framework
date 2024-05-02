import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import NavigationSideMenu from 'terra-navigation-side-menu';
import FolderTree from 'terra-folder-tree';
import ResponsiveElement from 'terra-responsive-element';
import styles from './OutlineView.module.scss';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * Content to be displayed as the name
   */
  name: PropTypes.string,
  /**
   * The heading level for the title of the folder tree.
   */
  headerLevel: PropTypes.number,
  /**
   * The list of items to be displayed as content in the Folder Tree component.
   */
  children: PropTypes.node,
  /**
   * The title of the folder tree.
   */
  title: PropTypes.string.isRequired,
  /**
   * The callback function for expand all event.
   */
  onExpandAll: PropTypes.func,
  /**
   * The callback function for collapse all event.
   */
  onCollapseAll: PropTypes.func,
  /**
   * @private
   * intl object programmatically imported through injectIntl from react-intl.
   * */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }).isRequired,
  /**
   * String that labels the navigation menu for screen readers.
   */
  ariaLabel: PropTypes.string,
  /**
   * An array of configuration for each menu item.
   */
  /**
   * Callback function when a menu endpoint is reached.
   * returns (event, { selectedMenuKey: String, selectedChildKey: String, metaData: Object})
   */
  onChange: PropTypes.func.isRequired,
  /**
   * Delegate prop showParent function that is provided by the terra-navigation-layout.
   */
  routingStackBack: PropTypes.func,
  /**
   * Key of the currently selected child item on the selected menu page.
   * This is used when traveling back up the menu stack or when the child is an end point.
   */
  selectedChildKey: PropTypes.string,
  /**
   * Key of the currently selected menu page.
   */
  selectedMenuKey: PropTypes.string.isRequired,
  /**
   * An optional toolbar to display below the side menu action header
   */
  toolbar: PropTypes.element,
};

const defaultProps = {
  name: 'default',
};

class OutlineView extends Component {
  constructor(props) {
    super(props);
    this.buildFolderTreeItems = this.buildFolderTreeItems.bind(this);
    this.buildSideMenuItems = this.buildSideMenuItems.bind(this);
    this.folderTree = this.folderTree.bind(this);
    this.navMenu = this.navMenu.bind(this);

    this.state = { size: 'medium' };
  }

  buildFolderTreeItems = (items) => {
    if (items) {
      const elements = [];
      items.forEach(item => {
        elements.push(
          <FolderTree.Item
            key={item.id || item.key}
            label={item.props.label}
            icon={item.props.icon}
            subfolderItems={this.buildFolderTreeItems(item.props.subfolderItems)}
            isExpanded={item.props.isExpanded}
            isSelected={item.props.isSelected}
            onSelect={item.props.onSelect}
            onToggle={item.props.onToggle}
          />,
        );
      });
      return elements;
    }

    return null;
  };

  folderTree = () => (
    <FolderTree
      title={this.props.title}
      onExpandAll={this.props.onExpandAll}
      onCollapseAll={this.props.onCollapseAll}
      headerLevel={this.props.headerLevel}
    >
      {this.buildFolderTreeItems(this.props.children)}
    </FolderTree>
  );

  buildSideMenuItems = (items) => {
    if (items) {
      const menuItems = [{ key: 'menu', text: this.props.title, childKeys: items.map(k => k.key) }];
      const sideMenuItems = [];
      items.forEach(item => {
        menuItems.push({
          key: item.key,
          text: item.props.label,
          id: item.id,
          childKeys: (item && item.props.subfolderItems) ? item.props.subfolderItems.map(k => k.key) : [],
        });
        if (item && item.props.subfolderItems) {
          const subMenuItems = this.buildSideMenuSubItems(item.props.subfolderItems);
          subMenuItems.map(s => sideMenuItems.push(s));
        }
      });
      return menuItems.concat(sideMenuItems);
    }
    return null;
  }

  buildSideMenuSubItems = (items) => {
    if (items) {
      const sideMenuItems = [];
      items.forEach(item => {
        sideMenuItems.push({
          key: item.key,
          text: item.props.label,
          id: item.id,
          childKeys: (item && item.props.subfolderItems) ? item.props.subfolderItems.map(k => k.key) : [],
        });
        if (item && item.props.subfolderItems) {
          const subMenuItems = this.buildSideMenuSubItems(item.props.subfolderItems);
          subMenuItems.map(s => sideMenuItems.push(s));
        }
      });
      return sideMenuItems;
    }
    return null;
  }

  navMenu = () => (
    // eslint-disable-next-line react/forbid-dom-props
    <div style={{ height: '450px', width: '300px' }}>
      <NavigationSideMenu
        menuItems={this.buildSideMenuItems(this.props.children)}
        onChange={this.props.onChange}
        selectedMenuKey={this.props.selectedMenuKey}
        selectedChildKey={this.props.selectedChildKey}
        ariaLabel={this.props.ariaLabel}
        routingStackBack={this.props.routingStackBack}
        toolbar={this.props.toolbar}
      />
    </div>
  );

  render() {
    const theme = this.context;
    const OutlineViewClassNames = classNames(
      cx([
        'outline-view',
        theme.className,
      ]),
    );
    return (
      <div className={OutlineViewClassNames}>
        <ResponsiveElement onChange={value => this.setState({ size: value })}>
          {this.state.size === 'tiny' ? this.navMenu() : this.folderTree()}
        </ResponsiveElement>
      </div>
    );
  }
}

OutlineView.propTypes = propTypes;
OutlineView.defaultProps = defaultProps;
OutlineView.contextType = ThemeContext;

export default OutlineView;
