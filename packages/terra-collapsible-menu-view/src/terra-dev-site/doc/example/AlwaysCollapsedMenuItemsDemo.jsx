import React from 'react';
import IconAdd from 'terra-icon/lib/icon/IconAdd';
import IconCalculator from 'terra-icon/lib/icon/IconCalculator';
import IconComment from 'terra-icon/lib/icon/IconComment';
import CollapsibleMenuView from 'terra-collapsible-menu-view';
import Button from 'terra-button';
import IconCaretDown from 'terra-icon/lib/icon/IconCaretDown';

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
        menuItemButtonVariant={Button.Opts.Variants['DE-EMPHASIS']}
        menuItemDropdownButtonIcon={<IconCaretDown />}
        horizontalAlign="left"
        menuItemDropdownButtonVariant={Button.Opts.Variants['DE-EMPHASIS']}
      >
        <CollapsibleMenuView.Item
          text="Ingredients"
          className="ButtonA"
          key="buttonA"
        />
        <CollapsibleMenuView.Item
          icon={<IconComment />}
          text="Comments"
          className="ButtonB"
          key="buttonB"
        />
        <CollapsibleMenuView.Item
          icon={<IconCalculator />}
          text="Dose Calculator"
          className="Button1"
          key="button1"
        />
        <CollapsibleMenuView.Item
          icon={<IconAdd />}
          text="Add Diagnosis"
          className="IconOnly"
          key="button3"
        />
        <CollapsibleMenuView.Item
          text="Sliding Scale"
          className="Button2"
          key="button2"
        />
      </CollapsibleMenuView>
    );
  }
}

export default AlwaysCollapsedMenuItemsDemo;
