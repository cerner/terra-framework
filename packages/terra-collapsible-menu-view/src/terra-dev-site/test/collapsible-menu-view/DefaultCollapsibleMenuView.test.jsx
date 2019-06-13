import React from 'react';
import IconTable from 'terra-icon/lib/icon/IconTable';
import IconFlowsheet from 'terra-icon/lib/icon/IconFlowsheet';
import IconVisualization from 'terra-icon/lib/icon/IconVisualization';
import IconSend from 'terra-icon/lib/icon/IconSend';
import IconPrinter from 'terra-icon/lib/icon/IconPrinter';
import IconFolder from 'terra-icon/lib/icon/IconFolder';
import IconTrash from 'terra-icon/lib/icon/IconTrash';
import CollapsibleMenuView from '../../../CollapsibleMenuView';

class CollapsibleMenuViewDemo extends React.Component {
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
      displayType: 'tableView',
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
    this.setState({ displayType: selectedKey });
  }

  render() {
    return (
      <CollapsibleMenuView>
        <CollapsibleMenuView.Toggle
          text="Toggle Item 1"
          className="ToggleItem1"
          key="toggle1"
          shouldCloseOnClick={false}
          onChange={this.handleToggleOneOnChange}
          isSelected={this.state.toggle1Selection}
        />
        <CollapsibleMenuView.Toggle
          text="Toggle Item 2"
          className="ToggleItem2"
          key="toggle2"
          shouldCloseOnClick={false}
          onChange={this.handleToggleTwoOnChange}
          isSelected={this.state.toggle2Selection}
        />
        <CollapsibleMenuView.Toggle
          text="Toggle Item 3"
          className="ToggleItem3"
          key="toggle3"
          shouldCloseOnClick={false}
          onChange={this.handleToggleThreeOnChange}
          isSelected={this.state.toggle3Selection}
        />
        <CollapsibleMenuView.Divider key="Divider1" />
        <CollapsibleMenuView.Item
          text="Menu Button 1"
          key="MenuButton1"
          className="MenuButton1"
          shouldCloseOnClick={false}
          subMenuItems={[
            <CollapsibleMenuView.Item text="Default Item 1" key="defaultItem1" />,
            <CollapsibleMenuView.Item text="Default Item 2" key="defaultItem2" />,
          ]}
        />
        <CollapsibleMenuView.Item
          text="MenuButton 2"
          key="MenuButton2"
          className="MenuButton2"
          shouldCloseOnClick={false}
          subMenuItems={[
            <CollapsibleMenuView.Item text="Default Item 1" key="defaultItem1" />,
            <CollapsibleMenuView.Item text="Default Item 2" key="defaultItem2" />,
          ]}
        />
        <CollapsibleMenuView.Item
          text="MenuButton 3"
          key="MenuButton3"
          className="MenuButton3"
          shouldCloseOnClick={false}
          subMenuItems={[
            <CollapsibleMenuView.Item text="Default Item 1" key="defaultItem1" />,
            <CollapsibleMenuView.Item text="Default Item 2" key="defaultItem2" />,
          ]}
        />
        <CollapsibleMenuView.Divider key="Divider2" />
        <CollapsibleMenuView.ItemGroup key="ViewTypeSelection" className="ViewTypeGroup" selectedKeys={[this.state.displayType]} onChange={this.handleDisplayTypeChange}>
          <CollapsibleMenuView.Item
            icon={<IconTable />}
            text="Table View"
            className="TableView"
            key="tableView"
            isIconOnly
            shouldCloseOnClick={false}
            isSelected={this.state.displayType === 'tableView'}
          />
          <CollapsibleMenuView.Item
            icon={<IconFlowsheet />}
            text="Expanded View"
            className="ExpandedView"
            key="expandedView"
            isIconOnly
            shouldCloseOnClick={false}
            isSelected={this.state.displayType === 'expandedView'}
          />
          <CollapsibleMenuView.Item
            icon={<IconVisualization />}
            text="Trending View"
            className="TendingView"
            key="trendingView"
            isIconOnly
            shouldCloseOnClick={false}
            isSelected={this.state.displayType === 'trendingView'}
          />
        </CollapsibleMenuView.ItemGroup>
        <CollapsibleMenuView.Divider key="Divider3" />
        <CollapsibleMenuView.Item icon={<IconSend />} text="Send Message" className="SendMessage" key="send" isIconOnly />
        <CollapsibleMenuView.ItemGroup className="MessageActionGroup" key="messageActionGroup">
          <CollapsibleMenuView.Item icon={<IconPrinter />} text="Print Message" className="Print" key="print" isIconOnly />
          <CollapsibleMenuView.Item icon={<IconFolder />} text="Move Message to Folder..." className="Move" key="move" isIconOnly />
          <CollapsibleMenuView.Item icon={<IconTrash />} text="Trash Message" key="trash" className="Trash" isIconOnly />
        </CollapsibleMenuView.ItemGroup>
        <CollapsibleMenuView.Divider key="Divider4" />
        <CollapsibleMenuView.Item text="Button 1" className="Button1" key="button1" />
        <CollapsibleMenuView.Item text="Button 2" className="Button2" key="button2" />
        <CollapsibleMenuView.Item text="Button 3" className="Button3" key="button3" />
        <CollapsibleMenuView.Item text="Button 4" className="Button4" key="button4" />
        <CollapsibleMenuView.Item text="Button 5" className="Button5" key="button5" />
        <CollapsibleMenuView.Item text="Button 6" className="Button6" key="button6" />
        <CollapsibleMenuView.Item text="Button 7" className="Button7" key="button7" />
        <CollapsibleMenuView.Item text="Button 8" className="Button8" key="button8" />
      </CollapsibleMenuView>
    );
  }
}

export default CollapsibleMenuViewDemo;
