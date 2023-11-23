import React, { useState } from 'react';
import IconSend from 'terra-icon/lib/icon/IconSend';
import CollapsibleMenuView from 'terra-collapsible-menu-view';

const CollapsibleMenuViewDemo = () => {
  const [isSelectedButton, setIsSelectedButton] = useState(false);
  return (
    <CollapsibleMenuView alwaysCollapsedMenuItems={[
      <CollapsibleMenuView.Item text="Collapsed Button 1" key="collapsedButton1" />,
      <CollapsibleMenuView.Item text="Collapsed Button 2" key="collapsedButton2" />,
      <CollapsibleMenuView.Item text="Collapsed Button 3" key="collapsedButton3" />]}
    >
      <CollapsibleMenuView.Item text="Button A" className="ButtonA" key="buttonA" />
      <CollapsibleMenuView.Item text="Button B" className="ButtonB" key="buttonB" />
      <CollapsibleMenuView.Divider key="Divider4" />
      <p>
        Status:
        {' '}
        {isSelectedButton ? 'Selected' : 'Unselected'}
      </p>
      <CollapsibleMenuView.Item id="data-menu-button" text="Select Button 1" className="Button1" key="button1" isSelectable isSelected={isSelectedButton} onClick={() => setIsSelectedButton(!isSelectedButton)} />
      <CollapsibleMenuView.Item text="Button 2" className="Button2" key="button2" />
      <CollapsibleMenuView.Item
        icon={<IconSend />}
        text="Button3"
        className="IconOnly"
        key="button3"
        isIconOnly
      />
    </CollapsibleMenuView>
  );
};

export default CollapsibleMenuViewDemo;
