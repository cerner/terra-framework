import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import NavigationSideMenu from 'terra-navigation-side-menu';
import FolderTree from 'terra-folder-tree';
import ResponsiveElement from 'terra-responsive-element';
import { IconDocuments } from 'terra-icon';
import styles from './DrillIn.module.scss';

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

const navMenu = (
  <NavigationSideMenu
    id="test-menu"
    menuItems={[
      { key: 'menu', text: 'Hospital Details', childKeys: ['submenu1', 'submenu2', 'submenu3', 'submenu4'] },
      {
        key: 'submenu1', text: 'Hospital services', childKeys: ['subsubmenu1', 'subsubmenu2', 'subsubmenu3'], id: 'test-item-1',
      },
      { key: 'submenu2', text: 'Hospital events' },
      { key: 'submenu3', text: 'Hospital Accommodations' },
      { key: 'submenu4', text: 'Hospital Careers' },
      { key: 'subsubmenu1', text: 'Imaging', id: 'test-item-2' },
      { key: 'subsubmenu2', text: 'Laboratory' },
      { key: 'subsubmenu3', text: 'Rehabilitation services' },
    ]}
    onChange={() => {}}
    selectedMenuKey="menu"
    ariaLabel="Sub Menu List"
  />
);

class DrillIn extends Component {
  constructor(props) {
    super(props);
    this.buildFolderTreeItems = this.buildFolderTreeItems.bind(this);
    this.folderTree = this.folderTree.bind(this);

    this.state = {
      size: 'medium',
      selectedKey: 'menu',
    };
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
    >
      {this.buildFolderTreeItems(this.props.children)}
    </FolderTree>
  );

  render() {
    const theme = this.context;
    const DrillInClassNames = classNames(
      cx([
        'drill-in',
        theme.className,
      ]),
    );
    return (
      <div className={DrillInClassNames}>
        <ResponsiveElement onChange={value => this.setState({ size: value })}>
          {this.state.size === 'tiny' ? navMenu : this.folderTree()}
        </ResponsiveElement>
      </div>
    );
  }
}

DrillIn.propTypes = propTypes;
DrillIn.defaultProps = defaultProps;
DrillIn.contextType = ThemeContext;

export default DrillIn;
