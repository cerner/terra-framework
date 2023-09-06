import React from 'react';
import IconTable from 'terra-icon/lib/icon/IconTable';
import IconFlowsheet from 'terra-icon/lib/icon/IconFlowsheet';
import IconVisualization from 'terra-icon/lib/icon/IconVisualization';
import IconSend from 'terra-icon/lib/icon/IconSend';
import CollapsibleMenuView from 'terra-collapsible-menu-view';

class CollapsibleMenuViewWithMultiSelectItems extends React.Component {
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
    const arr = this.state.selectedKeys;
    if (!arr.includes(selectedKey)) {
      arr.push(selectedKey);
    } else {
      arr.splice(arr.indexOf(selectedKey), 1);
    }
    this.setState({ selectedKeys: arr });
  }

  render() {
    return (
      <CollapsibleMenuView>
        <CollapsibleMenuView.ItemGroup key="ViewTypeSelection1" selectedKeys={this.state.selectedKeys} onChange={this.handleDisplayTypeChange}>
          <CollapsibleMenuView.Item
            text="Table View"
            key="tableView1"
            shouldCloseOnClick={false}
            isSelected={this.state.selectedKeys.includes('tableView1')}
          />
          <CollapsibleMenuView.Item
            text="Expanded View"
            key="expandedView1"
            shouldCloseOnClick={false}
            isSelected={this.state.selectedKeys.includes('expandedView1')}
          />
        </CollapsibleMenuView.ItemGroup>
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
        <CollapsibleMenuView.Item
          text="Screen Readers"
          key="MenuButton 2"
          shouldCloseOnClick={false}
          subMenuItems={[
            <CollapsibleMenuView.Item text="Jaws" key="defaultItem1" />,
            <CollapsibleMenuView.Item text="NVDA" key="defaultItem2" />,
          ]}
        />
        <CollapsibleMenuView.Divider key="Divider2" />
        <CollapsibleMenuView.ItemGroup key="ViewTypeSelection" isMultiSelect selectedKeys={this.state.selectedKeys} onChange={this.handleDisplayTypeChange}>
          <CollapsibleMenuView.Item
            icon={<IconTable />}
            text="Table View"
            key="tableView"
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

export default CollapsibleMenuViewWithMultiSelectItems;
