import React from 'react';
import IconAdd from 'terra-icon/lib/icon/IconAdd';
import IconCalculator from 'terra-icon/lib/icon/IconCalculator';
import IconComment from 'terra-icon/lib/icon/IconComment';
import Button from 'terra-button';

import CollapsibleMenuView from '../../../CollapsibleMenuView';

const CollapsibleMenuViewDemo = () => (
  <CollapsibleMenuView alwaysCollapsedMenuItems={[
    <CollapsibleMenuView.Item text="Collapsed Button 1" key="collapsedButton1" />,
    <CollapsibleMenuView.Item text="Collapsed Button 2" key="collapsedButton2" />,
    <CollapsibleMenuView.Item text="Collapsed Button 3" key="collapsedButton3" />]}
  >
    <CollapsibleMenuView.Item text="Ingredients" className="ButtonA" key="buttonA" variant={Button.Opts.Variants['DE-EMPHASIS']} />
    <CollapsibleMenuView.Item icon={<IconComment />} text="Comments" className="ButtonB" key="buttonB" variant={Button.Opts.Variants['DE-EMPHASIS']} />
    <CollapsibleMenuView.Item icon={<IconCalculator />} text="Dose Calculator" className="Button1" key="button1" variant={Button.Opts.Variants['DE-EMPHASIS']} />
    <CollapsibleMenuView.Item
      icon={<IconAdd />}
      text="Add Diagnosis"
      className="IconOnly"
      key="button3"
      variant={Button.Opts.Variants['DE-EMPHASIS']}
    />
    <CollapsibleMenuView.Item text="Sliding Scale" className="Button2" key="button2" variant={Button.Opts.Variants['DE-EMPHASIS']} />
  </CollapsibleMenuView>
);

export default CollapsibleMenuViewDemo;
