import React from 'react';
import IconTable from 'terra-icon/lib/icon/IconTable';
import IconFlowsheet from 'terra-icon/lib/icon/IconFlowsheet';
import IconVisualization from 'terra-icon/lib/icon/IconVisualization';
import CollapsibleMenuView from 'terra-collapsible-menu-view';

class CollapsibleMenuViewDemo extends React.Component {
  constructor(props) {
    super(props);
    this.handleDisplayTypeChange = this.handleDisplayTypeChange.bind(this);
    this.state = {
      displayType: 'tableView',
    };
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
        ]}
      >
        <CollapsibleMenuView.Item text="Collapsible Button 1" key="button1" />
        <CollapsibleMenuView.Item text="Collapsible Button 2" key="button2" />
        <CollapsibleMenuView.Divider key="divider1" />
        <CollapsibleMenuView.ItemGroup key="ViewTypeSelection" selectedKeys={[this.state.displayType]} onChange={this.handleDisplayTypeChange}>
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

export default CollapsibleMenuViewDemo;
