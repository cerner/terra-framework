import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import List from 'terra-list';
import ActionHeader from 'terra-clinical-action-header';
import ContentContainer from 'terra-content-container';
import RoutingStackDelegate from 'terra-navigation-layout/lib/RoutingStackDelegate';

import styles from './NavigationSideMenu.scss';

const cx = classNames.bind(styles);

const KEYCODES = {
  ENTER: 13,
};

const propTypes = {
  /**
   * Navigational links that will generate list items that will update the path. These paths are matched with react-router to selection.
   */
  menuItems: PropTypes.arrayOf(PropTypes.shape({
    /**
     * Navigational links that will generate list items that will update the path. These paths are matched with react-router to selection.
     */
    children: PropTypes.array,
    /**
     * Navigational links that will generate list items that will update the path. These paths are matched with react-router to selection.
     */
    id: PropTypes.string,
    /**
     * Navigational links that will generate list items that will update the path. These paths are matched with react-router to selection.
     */
    key: PropTypes.string.isRequired,
    /**
     * Navigational links that will generate list items that will update the path. These paths are matched with react-router to selection.
     */
    title: PropTypes.string.isRequired,
  })),
  /**
   * Navigational links that will generate list items that will update the path. These paths are matched with react-router to selection.
   */
  onChange: PropTypes.func.isRequired,
  /**
   * Delegate prop that is added by the NavigationLayout.
   */
  routingStackDelegate: RoutingStackDelegate.propType,
  /**
   * Delegate prop that is added by the NavigationLayout.
   */
  initialSelectedKey: PropTypes.string.isRequired,
};

const defaultProps = {
  menuItems: [],
};

const processMenuItems = (items) => {
  const processedItems = {};
  items.forEach((item) => {
    processedItems[item.key] = { id: item.id, title: item.title, children: item.children };
  });
  return processedItems;
};

class NavigationSideMenu extends React.Component {
  constructor(props) {
    super(props);

    this.onBackClick = this.onBackClick.bind(this);
    this.onItemClick = this.onItemClick.bind(this);

    this.state = { processedItems: processMenuItems(props.menuItems), selectedKey: props.initialSelectedKey };
    this.previousStack = [];
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      processedItems: processMenuItems(nextProps.menuItems),
    });
  }

  onBackClick(event) {
    if (this.props.initialSelectedKey === this.state.selectedKey) {
      if (this.props.routingStackDelegate) {
        this.props.routingStackDelegate.showParent(event);
      }
    } else {

    }
  }

  onItemClick(event, key) {
    const clickedItem = this.state.processedItems[key];
    if (clickedItem.children && clickedItem.children.length) {
      this.previousStack.push(this.state.selectedKey);
      this.setState({ selectedKey: key });
    } else {
      this.props.onChange(event, key);
    }
  }

  render() {
    const {
      menuItems,
      onChange,
      routingStackDelegate,
      initialSelectedKey,
      ...customProps
    } = this.props;

    let listContent;
    const currentItem = this.state.processedItems[this.state.selectedKey];
    if (currentItem.children && currentItem.children.length) {
      const listItems = currentItem.children.map((key) => {
        const item = this.state.processedItems[key];
        const content = (
          <div id={item.id} className={cx(['list-item', { 'is-selected': item.key === this.state.selectedKey }])}>
            {item.text}
          </div>
        );
        return (
          <List.Item
            tabIndex="0"
            content={content}
            key={item.key}
            onClick={(event) => { this.onItemClick(event, item.key); }}
            onKeyDown={(event) => { if (event.nativeEvent.keyCode === KEYCODES.ENTER) { this.onItemClick(event, item.key); } }}
          />
        );
      });
      listContent = (
        <List>
          {listItems}
        </List>
      );
    }

    let onBack;
    if (this.props.initialSelectedKey === this.state.selectedKey && routingStackDelegate) {
      onBack = routingStackDelegate.showParent;
    } else {
      onBack = this.onBackClick;
    }
    const actionHeader = <ActionHeader className={cx(['header'])} onBack={onBack} title={currentItem.title} />;

    return (
      <ContentContainer {...customProps} header={actionHeader} fill>
        {listContent}
      </ContentContainer>
    );
  }
}

NavigationSideMenu.propTypes = propTypes;
NavigationSideMenu.defaultProps = defaultProps;

export default NavigationSideMenu;
