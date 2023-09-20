import React from 'react';
import IconCaretDown from 'terra-icon/lib/icon/IconCaretDown';
import IconTable from 'terra-icon/lib/icon/IconTable';
import IconTreemap from 'terra-icon/lib/icon/IconTreemap';
import IconVisualization from 'terra-icon/lib/icon/IconVisualization';
import IconSend from 'terra-icon/lib/icon/IconSend';
import IconPrinter from 'terra-icon/lib/icon/IconPrinter';
import IconBookmark from 'terra-icon/lib/icon/IconBookmark';
import IconTrash from 'terra-icon/lib/icon/IconTrash';
import CollapsibleMenuView from 'terra-collapsible-menu-view';

class CollapsibleMenuViewStartAligned extends React.Component {
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
      <CollapsibleMenuView isStartAligned>
        <CollapsibleMenuView.Toggle
          text="Display Patient History"
          key="displayPatientHistory"
          shouldCloseOnClick={false}
          onChange={this.handleToggleOneOnChange}
          isSelected={this.state.toggle1Selection}
        />
        <CollapsibleMenuView.Toggle
          text="Display Allergies"
          key="displayAllergies"
          shouldCloseOnClick={false}
          onChange={this.handleToggleTwoOnChange}
          isSelected={this.state.toggle2Selection}
        />
        <CollapsibleMenuView.Toggle
          text="Display Problems"
          key="displayProblems"
          shouldCloseOnClick={false}
          onChange={this.handleToggleThreeOnChange}
          isSelected={this.state.toggle3Selection}
        />
        <CollapsibleMenuView.Divider key="Divider1" />
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
        <CollapsibleMenuView.Divider key="Divider2" />
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
        <CollapsibleMenuView.Divider key="Divider3" />
        <CollapsibleMenuView.Item icon={<IconSend />} text="Send" key="send" isIconOnly />
        <CollapsibleMenuView.ItemGroup key="messageActionGroup">
          <CollapsibleMenuView.Item icon={<IconPrinter />} text="Print" key="print" isIconOnly />
          <CollapsibleMenuView.Item icon={<IconBookmark />} text="Bookmark" key="bookmark" isIconOnly />
          <CollapsibleMenuView.Item icon={<IconTrash />} text="Trash" key="trash" isIconOnly />
        </CollapsibleMenuView.ItemGroup>
        <CollapsibleMenuView.Divider key="Divider4" />
        <CollapsibleMenuView.Item text="Action 1" key="action1" />
        <CollapsibleMenuView.Item text="Action 2" key="action2" />
        <CollapsibleMenuView.Item text="Action 3" key="action3" />
        <CollapsibleMenuView.Item text="Action 4" key="action4" />
      </CollapsibleMenuView>
    );
  }
}

export default CollapsibleMenuViewStartAligned;
