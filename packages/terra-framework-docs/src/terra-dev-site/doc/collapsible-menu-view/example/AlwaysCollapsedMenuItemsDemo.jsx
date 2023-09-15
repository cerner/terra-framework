import React from 'react';
import IconTable from 'terra-icon/lib/icon/IconTable';
import IconFlowsheet from 'terra-icon/lib/icon/IconFlowsheet';
import IconVisualization from 'terra-icon/lib/icon/IconVisualization';
import CollapsibleMenuView from 'terra-collapsible-menu-view';

class AlwaysCollapsedMenuItemsDemo extends React.Component {
  constructor(props) {
    super(props);
    this.handleDisplayTypeChange = this.handleDisplayTypeChange.bind(this);
    this.handleToggleOneOnChange = this.handleToggleOneOnChange.bind(this);
    this.handleToggleTwoOnChange = this.handleToggleTwoOnChange.bind(this);
    this.state = {
      toggle1Selection: false,
      toggle2Selection: false,
      displayType: 'tableView',
    };
  }

  handleToggleOneOnChange(event, isSelected) {
    this.setState({ toggle1Selection: isSelected });
  }

  handleToggleTwoOnChange(event, isSelected) {
    this.setState({ toggle2Selection: isSelected });
  }

  handleDisplayTypeChange(event, selectedKey) {
    this.setState({ displayType: selectedKey });
  }

  render() {
    return (
      <CollapsibleMenuView
        alwaysCollapsedMenuItems={[
          <CollapsibleMenuView.Item text="Always Collapsed Button 1" key="collapsedButton1" />,
          <CollapsibleMenuView.Item text="Always Collapsed Button 2" key="collapsedButton2" />,
          <CollapsibleMenuView.Item text="Always Collapsed Button 3" key="collapsedButton3" />,
          <CollapsibleMenuView.Toggle
            text="Always Collapsed Toggle 1"
            key="toggle1"
            shouldCloseOnClick={false}
            onChange={this.handleToggleOneOnChange}
            isSelected={this.state.toggle1Selection}
          />,
          <CollapsibleMenuView.Toggle
            text="Always Collapsed Toggle 2"
            key="toggle2"
            onChange={this.handleToggleTwoOnChange}
            isSelected={this.state.toggle2Selection}
          />,
        ]}
      >
        <CollapsibleMenuView.Item text="Collapsible Button 1" key="button1" />
        <CollapsibleMenuView.Item text="Collapsible Button 2" key="button2" />
        <CollapsibleMenuView.Divider key="divider1" />
        <CollapsibleMenuView.ItemGroup ariaLabel="View Type Single Selection" key="ViewTypeSelection" selectedKeys={[this.state.displayType]} onChange={this.handleDisplayTypeChange}>
          <CollapsibleMenuView.Item
            icon={<IconTable />}
            text="Table View"
            key="tableView"
            isIconOnly
            shouldCloseOnClick={false}
            isSelected={this.state.displayType === 'tableView'}
          />
          <CollapsibleMenuView.Item
            icon={<IconFlowsheet />}
            text="Expanded View"
            key="expandedView"
            isIconOnly
            shouldCloseOnClick={false}
            isSelected={this.state.displayType === 'expandedView'}
          />
          <CollapsibleMenuView.Item
            icon={<IconVisualization />}
            text="Trending View"
            key="trendingView"
            isIconOnly
            shouldCloseOnClick={false}
            isSelected={this.state.displayType === 'trendingView'}
          />
        </CollapsibleMenuView.ItemGroup>
      </CollapsibleMenuView>
    );
  }
}

export default AlwaysCollapsedMenuItemsDemo;
