import React from 'react';
import PropTypes from 'prop-types';
import ThemeContext from 'terra-theme-context';
import WorkspaceItem from './common tabs/WorkspaceItem';
import Workspace from './common tabs/Workspace';
import TabPane from './TabPane';
import TabUtils from './TabUtils';

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
};

const defaultProps = {
  tabFill: false,
  fill: false,
};

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.getInitialState = this.getInitialState.bind(this);
    this.state = {
      activeKey: this.getInitialState(),
    };
  }

  getInitialState() {
    if (this.props.activeKey) {
      return null;
    }
    return TabUtils.initialSelectedTabKey(this.props.children, this.props.defaultActiveKey);
  }

  render() {
    const {
      tabFill,
      fill,
      onChange,
      children,
      activeKey,
      defaultActiveKey,
      ...customProps
    } = this.props;

    const workSpaceItems = [];

    React.Children.forEach(children, child => {
      let content;
      if (child.key === this.state.activeKey) {
        content = React.Children.map(child.props.children, contentItem => (
          React.cloneElement(contentItem)
        ));
      }
      workSpaceItems.push(
        <WorkspaceItem
          itemKey={child.key}
          label={child.props.label}
          icon={child.props.icon}
          isIconOnly={child.props.isIconOnly}
          render={() => content}
          isDisabled={child.props.isDisabled}
        />,
      );
    });

    return (
      <Workspace
        id="terra-common-tabs"
        activeItemKey={this.state.activeKey}
        onRequestActivate={key => this.setState({ activeKey: key })}
        onChange={onChange}
        variant="framework"
      >
        {workSpaceItems}
      </Workspace>
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
