import React from 'react';
import {
  IconTable, IconFlowsheet, IconVisualization, IconSend,
} from 'terra-icon';
import CollapsibleMenuView from 'terra-collapsible-menu-view';

class CollapsibleMenuMultiSelect extends React.Component {
  constructor(props) {
    super(props);
    this.handleDisplayTypeChange = this.handleDisplayTypeChange.bind(this);
    this.handleToggleOneOnChange = this.handleToggleOneOnChange.bind(this);
    this.handleToggleTwoOnChange = this.handleToggleTwoOnChange.bind(this);
    this.handleToggleThreeOnChange = this.handleToggleThreeOnChange.bind(this);
    this.state = {
      toggle1Selection: false,
      toggle2Selection: false,
      toggle3Selection: false,
      selectedKeys: [],
    };
  }

  handleToggleOneOnChange(event, isSelected) {
    this.setState({ toggle1Selection: isSelected });
  }

  handleToggleTwoOnChange(event, isSelected) {
    this.setState({ toggle2Selection: isSelected });
  }

  handleToggleThreeOnChange(event, isSelected) {
    this.setState({ toggle3Selection: isSelected });
  }

  handleDisplayTypeChange(event, selectedKey) {
    // eslint-disable-next-line react/no-access-state-in-setstate
    const newSelectedKeys = this.state.selectedKeys;
    if (!newSelectedKeys.includes(selectedKey)) {
      newSelectedKeys.push(selectedKey);
    } else {
      newSelectedKeys.splice(newSelectedKeys.indexOf(selectedKey), 1);
    }
    this.setState({ selectedKeys: newSelectedKeys });
  }

  render() {
    return (
      <CollapsibleMenuView>
        <CollapsibleMenuView.Toggle
          text="InDesign"
          key="toggle1"
          shouldCloseOnClick={false}
          onChange={this.handleToggleOneOnChange}
          isSelected={this.state.toggle1Selection}
        />
        <CollapsibleMenuView.Toggle
          text="Photoshop"
          key="toggle21"
          shouldCloseOnClick={false}
          isSelected={this.state.toggle2Selection}
        />
        <CollapsibleMenuView.Toggle
          text="Illustrator"
          key="toggle3"
          shouldCloseOnClick={false}
          onChange={this.handleToggleThreeOnChange}
          isSelected={this.state.toggle3Selection}
        />
        <CollapsibleMenuView.Divider key="Divider1" />
        <CollapsibleMenuView.Item
          text="Browsers"
          key="MenuButton1"
          shouldCloseOnClick={false}
          subMenuItems={[
            <CollapsibleMenuView.Item text="Edge" key="defaultItem1" />,
            <CollapsibleMenuView.Item text="Chrome" key="defaultItem2" />,
          ]}
        />
        <CollapsibleMenuView.Divider key="Divider2" />
        <CollapsibleMenuView.ItemGroup key="ViewTypeSelection" isMultiSelect selectedKeys={this.state.selectedKeys} onChange={this.handleDisplayTypeChange}>
          <CollapsibleMenuView.Item
            icon={<IconTable />}
            text="Table View"
            key="tableView"
            id="tableView"
            isIconOnly
            shouldCloseOnClick={false}
            isSelected={this.state.selectedKeys.includes('tableView')}
          />
          <CollapsibleMenuView.Item
            icon={<IconFlowsheet />}
            text="Expanded View"
            key="expandedView"
            isIconOnly
            shouldCloseOnClick={false}
            isSelected={this.state.selectedKeys.includes('expandedView')}
          />
          <CollapsibleMenuView.Item
            icon={<IconVisualization />}
            text="Trending View"
            key="trendingView"
            id="trendingView"
            isIconOnly
            shouldCloseOnClick={false}
            isSelected={this.state.selectedKeys.includes('trendingView')}
          />
        </CollapsibleMenuView.ItemGroup>
        <CollapsibleMenuView.Divider key="Divider3" />
        <CollapsibleMenuView.Item icon={<IconSend />} text="Send Message" key="send" isIconOnly />
      </CollapsibleMenuView>
    );
  }
}

export default CollapsibleMenuMultiSelect;
