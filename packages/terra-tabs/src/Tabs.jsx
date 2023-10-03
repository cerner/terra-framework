import React from 'react';
import PropTypes from 'prop-types';
import ThemeContext from 'terra-theme-context';
import CommonTabItem from './common-tabs/CommonTabItem';
import CommonTabs from './common-tabs/CommonTabs';
import TabPane from './TabPane';
import TabUtils from './TabUtils';
import CommonTabContent from './common-tabs/CommonTabContent';

/**
NOTE: This is being commented out until discussions have been resolved around if modular tabs should be removed.
const variants = {
  MODULAR_CENTERED: 'modular-centered',
  MODULAR_LEFT_ALIGNED: 'modular-left-aligned',
  STRUCTURAL: 'structural',
};
*/

const propTypes = {

  /**
   * Tabs style. One of: Tabs.Opts.Variants.MODULAR_CENTERED, Tabs.Opts.Variants.MODULAR_LEFT_ALIGNED, or Tabs.Opts.Variants.STRUCTURAL.
   * NOTE: This is being commented out until discussions have been resolved around if we want modular tabs.
  variant: PropTypes.oneOf([variants.MODULAR_CENTERED, variants.MODULAR_LEFT_ALIGNED, variants.STRUCTURAL]),
  */

  /**
   * Indicates if tabs should fill the width available in the tab bar.
   */
  tabFill: PropTypes.bool,

  /**
   * Indicates if the pane content should fill to the height of the parent container.
   */
  fill: PropTypes.bool,

  /**
   * Callback function when selection has changed.
   * Parameters: 1. Event 2. Selected pane's key
   */
  onChange: PropTypes.func,

  /**
   * Tabs.Pane components to be displayed.
   */
  children: PropTypes.node.isRequired,

  /**
   * Key of the pane that should be active. Use this prop along with onChange to create controlled tabs.
   */
  activeKey: PropTypes.string,

  /**
   * Key of the pane that should be open initially.
   */
  defaultActiveKey: PropTypes.string,
  /**
   * Whether or not the tab is closable.
   */
  isClosable: PropTypes.bool,
  /**
   * Whether or not the tab is draggable.
   */
  isDraggable: PropTypes.bool,
  /**
   * Callback function triggered when tab is drag and dropped.
   */
  onTabOrderChange: PropTypes.func,
  /**
   * Callback function triggered on close button click. will be available only when `isClosable` is set to true.
   */
  onTabClose: PropTypes.func,
  /**
   * Callback function triggered when add button is clicked.
   * Parameters: 1. Event 2. Selected pane's key
   */
  onSelectAddButton: PropTypes.func,
  /**
   * The label to set on the add icon element.
   */
  ariaLabelAddTab: PropTypes.string,
  /**
   * Whether tab is vertical or horizontal orientation.
   */
  verticalOrientation: PropTypes.bool,
  /**
   * Sets focus on content when set to `true`.
   */
  setFocusOnContent: PropTypes.bool,
};

const defaultProps = {
  tabFill: false,
  fill: false,
  isDraggable: false,
  isClosable: false,
  setFocusOnContent: false,
};

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.getInitialState = this.getInitialState.bind(this);
    this.state = {
      activeKey: this.getInitialState(),
      activeTab: '',
    };
  }

  getInitialState() {
    if (this.props.activeKey) {
      return this.props.activeKey;
    }
    return TabUtils.initialSelectedTabKey(this.props.children, this.props.defaultActiveKey);
  }

  componentDidUpdate(prevProps) {
    const tabKeys = [];
    this.props.children.forEach(child => {
      tabKeys.push(child.key);
    });
    if (this.props.activeKey !== prevProps.activeKey) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ activeKey: this.props.activeKey });
    }
  }

  render() {
    const {
      tabFill,
      fill,
      onChange,
      children,
      activeKey,
      defaultActiveKey,
      isDraggable,
      onTabOrderChange,
      isClosable,
      verticalOrientation,
      setFocusOnContent,
      ...customProps
    } = this.props;

    const commonTabItems = [];
    const tabKeys = [];

    if (this.props.children && this.props.children.length > 0) {
      this.props.children.forEach(child => {
        tabKeys.push(child.key);
      });
    }
    const foundActiveTabKey = tabKeys.find(element => element === this.props.activeKey);
    const activeTabKey = foundActiveTabKey ? this.props.activeKey : this.state.activeKey;

    React.Children.forEach(children, child => {
      let content;
      let tabContent;
      if (child.key === activeTabKey) {
        content = React.Children.map(child.props.children, contentItem => (
          React.cloneElement(contentItem)
        ));
        tabContent = <CommonTabContent setFocusOnContent={setFocusOnContent} variant="framework">{content}</CommonTabContent>;
      }
      commonTabItems.push(
        <CommonTabItem
          itemKey={child.key}
          label={child.props.label}
          icon={child.props.icon}
          isIconOnly={child.props.isIconOnly}
          showIcon={child.props.showIcon}
          render={() => tabContent}
          isDisabled={child.props.isDisabled}
          isClosable={isClosable}
          variant="framework"
        />,
      );
    });
    const handleTabsStateChange = (newValue, itemKey, event) => {
      if (newValue.length > 0) {
        let activeTab = '';
        for (let i = 0; i < newValue.length; i += 1) {
          if (newValue[i].isSelected === true) {
            activeTab = newValue[i].itemKey;
            break;
          }
        }
        this.setState({ activeTab });
      } else if (newValue.length === 0) {
        this.setState({ activeTab: '' });
      }

      if (this.state.activeKey === itemKey) {
        this.setState((prevState) => ({ activeKey: prevState.activeTab }));
      }
      return this.props.onTabClose && this.props.onTabClose(newValue, itemKey, event);
    };

    return (
      <CommonTabs
        id={customProps.id}
        activeItemKey={activeTabKey}
        onRequestActivate={key => this.setState({ activeKey: key })}
        onClosingTab={handleTabsStateChange}
        onChange={onChange}
        variant="framework"
        isDraggable={isDraggable}
        onTabOrderChange={onTabOrderChange}
        verticalOrientation={verticalOrientation}
        {...customProps}
      >
        {commonTabItems}
      </CommonTabs>
    );
  }
}

Tabs.propTypes = propTypes;
Tabs.defaultProps = defaultProps;
Tabs.Pane = TabPane;
Tabs.Utils = TabUtils;
Tabs.contextType = ThemeContext;
/**
Note: This is being commented out until discussions have been resolved around if we want modular tabs.
Tabs.Opts = {
  Variants: variants,
};
*/
export default Tabs;
