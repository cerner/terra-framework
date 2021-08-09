import React from 'react';
import IconAdd from 'terra-icon/lib/icon/IconAdd';
import IconCalculator from 'terra-icon/lib/icon/IconCalculator';
import IconComment from 'terra-icon/lib/icon/IconComment';
import CollapsibleMenuView from 'terra-collapsible-menu-view';

class CollapsibleMenuViewAlignment extends React.Component {
  constructor(props) {
    super(props);
    this.state = { alignment: 'right' };
    this.handleOnSelect = this.handleOnSelect.bind(this);
  }

  handleOnSelect = (event) => {
    this.setState({ alignment: event.target.value });
  }

  render() {
    return (
      <div>
        <CollapsibleMenuView
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
            onChange={this.handleOnSelect}
          >
            <option value="right">Right</option>
            <option value="left">Left</option>
          </select>
        </fieldset>
      </div>
    );
  }
}

export default CollapsibleMenuViewAlignment;
