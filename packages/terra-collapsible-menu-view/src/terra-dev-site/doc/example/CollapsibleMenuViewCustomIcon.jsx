import React from 'react';
import IconAdd from 'terra-icon/lib/icon/IconAdd';
import IconCalculator from 'terra-icon/lib/icon/IconCalculator';
import IconComment from 'terra-icon/lib/icon/IconComment';
import CollapsibleMenuView from 'terra-collapsible-menu-view';
import IconCaretDown from 'terra-icon/lib/icon/IconCaretDown';
import IconExpandMore from 'terra-icon/lib/icon/IconExpandMore';
import IconDown from 'terra-icon/lib/icon/IconDown';
import IconMenu from 'terra-icon/lib/icon/IconMenu';

class CollapsibleMenuViewCustomIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = { icon: <IconCaretDown />, iconValue: 'caretDown', iconOnly: true, iconOnlyValue: 'true' };
    this.handleOnSelectIcon = this.handleOnSelectIcon.bind(this);
    this.handleOnSelectIconOnly = this.handleOnSelectIconOnly.bind(this);
  }

  handleOnSelectIcon = (event) => {
    let icon = null;
    if (event.target.value === 'caretDown') {
      icon = <IconCaretDown />;
    } else if (event.target.value === 'expandMore') {
      icon = <IconExpandMore />;
    } else if (event.target.value === 'down') {
      icon = <IconDown />;
    } else if (event.target.value === 'menu') {
      icon = <IconMenu />;
    }
    this.setState({ icon, iconValue: event.target.value });
  }

  handleOnSelectIconOnly = (event) => {
    let isIconOnly = null;
    if (event.target.value === 'false') {
      isIconOnly = false;
    } else if (event.target.value === 'true') {
      isIconOnly = true;
    }
    this.setState({ iconOnly: isIconOnly, iconOnlyValue: event.target.value });
  }

  render() {
    return (
      <div>
        <CollapsibleMenuView
          menuItemDropdownButtonIcon={this.state.icon}
          menuItemDropdownButtonIsIconOnly={this.state.iconOnly}
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
        <fieldset>
          <legend>Change menuItemDropdownButtonIcon</legend>
          <select
            aria-label="collapsibleMenuViewMenuItemDropdownButtonIcon"
            id="collapsibleMenuViewMenuItemDropdownButtonIcon"
            name="collapsibleMenuViewMenuItemDropdownButtonIcon"
            value={this.state.iconValue}
            onChange={this.handleOnSelectIcon}
          >
            <option value="caretDown">Caret Down</option>
            <option value="expandMore">Expand More</option>
            <option value="down">Down</option>
            <option value="menu">Menu</option>
          </select>
        </fieldset>
        <fieldset>
          <legend>Change menuItemDropdownButtonIconOnly</legend>
          <select
            aria-label="collapsibleMenuViewMenuItemDropdownButtonIconOnly"
            id="collapsibleMenuViewMenuItemDropdownButtonIconOnly"
            name="collapsibleMenuViewMenuItemDropdownButtonIconOnly"
            value={this.state.iconOnlyValue}
            onChange={this.handleOnSelectIconOnly}
          >
            <option value="false">False</option>
            <option value="true">True</option>
          </select>
        </fieldset>
      </div>
    );
  }
}

export default CollapsibleMenuViewCustomIcon;
