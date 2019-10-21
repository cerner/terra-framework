import React from 'react';
import IconSend from 'terra-icon/lib/icon/IconSend';
import CollapsibleMenuView from '../../../CollapsibleMenuView';

const CollapsibleMenuViewDemo = () => (
  <CollapsibleMenuView moreButtonVariant="utility">
    <CollapsibleMenuView.Item text="Send Notification 1" className="ButtonA" key="buttonA" />
    <CollapsibleMenuView.Item text="Send Notification 2" className="ButtonB" key="buttonB" />
    <CollapsibleMenuView.Divider key="Divider4" />
    <CollapsibleMenuView.Item text="Button 1" className="Button1" key="button1" />
    <CollapsibleMenuView.Item text="Button 2" className="Button2" key="button2" />
    <CollapsibleMenuView.Item
      icon={<IconSend />}
      text="Button3"
      className="IconOnly"
      key="button3"
      isIconOnly
    />
    <CollapsibleMenuView.Item text="Button C" className="ButtonC" key="buttonC" />
    <CollapsibleMenuView.Item text="Button D" className="ButtonD" key="buttonD" />
    <CollapsibleMenuView.Divider key="Divider5" />
    <CollapsibleMenuView.Item text="Button E" className="ButtonE" key="buttonE" />
    <CollapsibleMenuView.Item text="Button F" className="ButtonF" key="buttonF" />
    <CollapsibleMenuView.Item text="Button G" className="ButtonG" key="buttonG" />
    <CollapsibleMenuView.Item text="Button H" className="ButtonH" key="buttonH" />
    <CollapsibleMenuView.Divider key="Divider6" />
    <CollapsibleMenuView.Item text="Send Notification to Voice Assistant" className="ButtonI" key="buttonI" />
    <CollapsibleMenuView.Item text="Send Notification to Creative Director Tomorrow" className="ButtonJ" key="buttonJ" />
  </CollapsibleMenuView>
);

export default CollapsibleMenuViewDemo;
