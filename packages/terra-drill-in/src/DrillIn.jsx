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

const data = {
  title: 'Documents',
  items: [
    { id: 'item-1-level-1', label: 'Information', icon: <IconDocuments /> },
    { id: 'item-2-level-1', label: 'Projects - 2023', icon: <IconDocuments /> },
    {
      id: 'item-3-level-1',
      label: 'Projects - 2023',
      items: [
        { id: 'item-1-level-2-1', label: 'Project Data - October', icon: <IconDocuments /> },
        { id: 'item-2-level-2-1', label: 'Project Data - November', icon: <IconDocuments /> },
        { id: 'item-3-level-2-1', label: 'Project Data - December', icon: <IconDocuments /> },
        {
          id: 'item-4-level-2-1',
          label: 'Tests',
          items: [
            { id: 'item-1-level-3-1', label: 'Very Very Very Very Very Very Very Long Name Test', icon: <IconDocuments /> },
            { id: 'item-2-level-3-1', label: 'Even Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooonger Name Test', icon: <IconDocuments /> },
          ],
        },
      ],
    },
    { id: 'item-4-level-1', label: 'Projects - 2024', icon: <IconDocuments /> },
    {
      id: 'item-5-level-1',
      label: 'Projects - 2024',
      items: [
        { id: 'item-1-level-2-2', label: 'Project Data - January', icon: <IconDocuments /> },
      ],
    },
  ],
};

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
            key={item.id}
            label={item.label}
            icon={item.icon}
            subfolderItems={this.buildFolderTreeItems(item.items)}
                // isExpanded={expandedItems[item.id]}
            isSelected={this.state.selectedKey === item.id}
            onSelect={() => { this.setState({ selectedKey: item.id }); }}
          />,
        );
      });
      return elements;
    }

    return null;
  };

  folderTree = () => (
    <FolderTree
      title="title"
        // onExpandAll={handleExpandAll}
        // onCollapseAll={handleCollapseAll}
    >
      {this.buildFolderTreeItems(data.items)}
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
