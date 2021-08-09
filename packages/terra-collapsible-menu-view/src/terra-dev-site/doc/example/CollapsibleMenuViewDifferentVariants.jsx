import React from 'react';
import IconAdd from 'terra-icon/lib/icon/IconAdd';
import IconCalculator from 'terra-icon/lib/icon/IconCalculator';
import IconComment from 'terra-icon/lib/icon/IconComment';
import CollapsibleMenuView from 'terra-collapsible-menu-view';
import Button from 'terra-button';

class CollapsibleMenuViewDifferentVariants extends React.Component {
  constructor(props) {
    super(props);
    this.state = { variant: Button.Opts.Variants.NEUTRAL, variantDropdown: Button.Opts.Variants.UTILITY };
    this.handleOnSelect = this.handleOnSelect.bind(this);
    this.handleOnSelectVariantDropdown = this.handleOnSelectVariantDropdown.bind(this);
  }

  handleOnSelect = (event) => {
    this.setState({ variant: event.target.value });
  }

  handleOnSelectVariantDropdown = (event) => {
    this.setState({ variantDropdown: event.target.value });
  }

  render() {
    return (
      <div>
        <CollapsibleMenuView
          menuItemButtonVariant={this.state.variant}
          menuItemDropdownButtonVariant={this.state.variantDropdown}
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
          <legend>Change menuItemButtonVariant and menuItemDropdownButtonVariant</legend>
          <select
            aria-label="changeVariant"
            id="collapsibleMenuViewDifferentVariant"
            name="collapsibleMenuViewDifferentVariant"
            value={this.state.variant}
            onChange={this.handleOnSelect}
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
          <legend>Change menuItemButtonVariant</legend>
          <select
            aria-label="changeVariantMenuItemDropdownButtonVariant"
            id="changeVariantMenuItemDropdownButtonVariant"
            name="changeVariantMenuItemDropdownButtonVariant"
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
      </div>
    );
  }
}

export default CollapsibleMenuViewDifferentVariants;
