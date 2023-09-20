import React from 'react';
import IconCaretDown from 'terra-icon/lib/icon/IconCaretDown';
import IconTable from 'terra-icon/lib/icon/IconTable';
import IconTreemap from 'terra-icon/lib/icon/IconTreemap';
import IconVisualization from 'terra-icon/lib/icon/IconVisualization';
import CollapsibleMenuView from 'terra-collapsible-menu-view';

class AlwaysCollapsedMenuItemsDemo extends React.Component {
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
          <CollapsibleMenuView.Item text="Action 1" key="action1" />,
          <CollapsibleMenuView.Item text="Action 2" key="action2" isDisabled />,
          <CollapsibleMenuView.Item text="Action 3" key="action3" />,
          <CollapsibleMenuView.Item text="Action 4" key="action4" />,
        ]}
      >
        <CollapsibleMenuView.Item
          icon={<IconCaretDown />}
          text="Add Document"
          key="addDocument"
          isReversed
          shouldCloseOnClick={false}
          subMenuItems={[
            <CollapsibleMenuView.Item text="Upload Document" key="uploadDocument" />,
            <CollapsibleMenuView.Item text="Link to Document..." key="linkToDocument" />,
          ]}
        />
        <CollapsibleMenuView.Item
          icon={<IconCaretDown />}
          text="Add"
          key="Add"
          isReversed
          shouldCloseOnClick={false}
          subMenuItems={[
            <CollapsibleMenuView.Item text="Add Allergy" key="addAllergy" />,
            <CollapsibleMenuView.Item text="Add Problem" key="addProblem" />,
          ]}
        />
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
            icon={<IconVisualization />}
            text="Chart View"
            key="chartView"
            isIconOnly
            shouldCloseOnClick={false}
            isSelected={this.state.displayType === 'chartView'}
          />
          <CollapsibleMenuView.Item
            icon={<IconTreemap />}
            text="Treemap View"
            key="treemapView"
            isIconOnly
            shouldCloseOnClick={false}
            isSelected={this.state.displayType === 'treemapView'}
          />
        </CollapsibleMenuView.ItemGroup>
      </CollapsibleMenuView>
    );
  }
}

export default AlwaysCollapsedMenuItemsDemo;
