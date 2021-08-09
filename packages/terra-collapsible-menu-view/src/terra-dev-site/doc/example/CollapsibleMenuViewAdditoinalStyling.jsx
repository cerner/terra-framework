import React from 'react';
import IconAdd from 'terra-icon/lib/icon/IconAdd';
import IconCalculator from 'terra-icon/lib/icon/IconCalculator';
import IconComment from 'terra-icon/lib/icon/IconComment';
import CollapsibleMenuView from 'terra-collapsible-menu-view';
import IconCaretDown from 'terra-icon/lib/icon/IconCaretDown';
import IconExpandMore from 'terra-icon/lib/icon/IconExpandMore';
import IconDown from 'terra-icon/lib/icon/IconDown';
import IconMenu from 'terra-icon/lib/icon/IconMenu';
import Button from 'terra-button';

class CollapsibleMenuViewAdditoinalStyling extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      icon: <IconCaretDown />,
      iconValue: 'caretDown',
      iconOnly: false,
      iconOnlyValue: 'false',
      variant: Button.Opts.Variants.NEUTRAL,
      variantDropdown: Button.Opts.Variants.NEUTRAL,
      alignment: 'right',
    };
    this.handleOnSelectIcon = this.handleOnSelectIcon.bind(this);
    this.handleOnSelectIconOnly = this.handleOnSelectIconOnly.bind(this);
    this.handleOnSelectVariantDropdown = this.handleOnSelectVariantDropdown.bind(this);
    this.handleOnSelectVariant = this.handleOnSelectVariant.bind(this);
    this.handleOnSelectAlignment = this.handleOnSelectAlignment.bind(this);
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

  handleOnSelectVariantDropdown = (event) => {
    this.setState({ variantDropdown: event.target.value });
  }

  handleOnSelectVariant = (event) => {
    this.setState({ variant: event.target.value });
  }

  handleOnSelectAlignment = (event) => {
    this.setState({ alignment: event.target.value });
  }

  render() {
    return (
      <div>
        <CollapsibleMenuView
          menuItemDropdownButtonIcon={this.state.icon}
          menuItemDropdownButtonIsIconOnly={this.state.iconOnly}
          menuItemDropdownButtonVariant={this.state.variantDropdown}
          menuItemButtonVariant={this.state.variant}
          horizontalAlign={this.state.alignment}
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
          <legend>Change horizontalAlign</legend>
          <select
            aria-label="changeAlignment"
            id="collapsibleMenuViewDifferentAlignment"
            name="collapsibleMenuViewDifferentAlignment"
            value={this.state.alignment}
            onChange={this.handleOnSelectAlignment}
          >
            <option value="right">Right</option>
            <option value="left">Left</option>
          </select>
        </fieldset>
        <fieldset>
          <legend>Change menuItemButtonVariant</legend>
          <select
            aria-label="changeVariant"
            id="collapsibleMenuViewDifferentVariant"
            name="collapsibleMenuViewDifferentVariant"
            value={this.state.variant}
            onChange={this.handleOnSelectVariant}
          >
            <option value={Button.Opts.Variants.NEUTRAL}>Neutral</option>
            <option value={Button.Opts.Variants.EMPHASIS}>Emphasis</option>
            <option value={Button.Opts.Variants.GHOST}>Ghost</option>
            <option value={Button.Opts.Variants['DE-EMPHASIS']}>De-Emphasis</option>
            <option value={Button.Opts.Variants.ACTION}>Action</option>
            <option value={Button.Opts.Variants.UTILITY}>Utility</option>
          </select>
        </fieldset>
        <fieldset>
          <legend>Change menuItemDropdownButtonVariant</legend>
          <select
            aria-label="changeVariantMenuItemDropdownButtonVariantCustomIcon"
            id="changeVariantMenuItemDropdownButtonVariantCustomIcon"
            name="changeVariantMenuItemDropdownButtonVariantCustomIcon"
            value={this.state.variantDropdown}
            onChange={this.handleOnSelectVariantDropdown}
          >
            <option value={Button.Opts.Variants.NEUTRAL}>Neutral</option>
            <option value={Button.Opts.Variants.EMPHASIS}>Emphasis</option>
            <option value={Button.Opts.Variants.GHOST}>Ghost</option>
            <option value={Button.Opts.Variants['DE-EMPHASIS']}>De-Emphasis</option>
            <option value={Button.Opts.Variants.ACTION}>Action</option>
            <option value={Button.Opts.Variants.UTILITY}>Utility</option>
          </select>
        </fieldset>
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

export default CollapsibleMenuViewAdditoinalStyling;
