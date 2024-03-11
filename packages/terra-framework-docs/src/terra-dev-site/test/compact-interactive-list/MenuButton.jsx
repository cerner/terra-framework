import React, { useState, useRef } from 'react';
import Button from 'terra-button';
import PropTypes from 'prop-types';
import Menu from 'terra-menu';
import IconCaretDown from 'terra-icon/lib/icon/IconCaretDown';

const propTypes = {
  isArrowDisplayed: PropTypes.bool,
  contentWidth: PropTypes.string,
  boundingRef: PropTypes.func,
};

const MenuButton = (props) => {
  const [open, setOpen] = useState(false);
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);

  const handleButtonClick = () => { setOpen(true); };
  const handleRequestClose = () => { setOpen(false); };
  const handleToggle1OnClick = () => { setToggle1(!toggle1); };
  const handleToggle2OnClick = () => { setToggle2(!toggle2); };
  const handleToggle3OnClick = () => { setToggle3(!toggle3); };

  const buttonNode = useRef();
  const setButtonNode = (node) => {
    buttonNode.current = node;
  };

  const getButtonNode = () => buttonNode.current;

  return (
    <div>
      <Menu
        isOpen={open}
        targetRef={getButtonNode}
        onRequestClose={handleRequestClose}
        contentWidth={props.contentWidth}
        isArrowDisplayed={props.isArrowDisplayed}
        boundingRef={props.boundingRef}
        headerTitle="Clinical Solution"
      >
        <Menu.Item
          text="Hospital Details"
          key="Toggle1"
          className="MenuItem1"
          isSelected={toggle1}
          onClick={handleToggle1OnClick}
          isSelectable
        />
        <Menu.Item
          text="Our Offerings"
          key="Offers"
          className="MenuItem2"
          subMenuItems={[
            <Menu.Item
              text="Policies and Guidelines"
              key="Policies"
              className="SubMenuItem1"
              isToggled={toggle2}
              onClick={handleToggle2OnClick}
              isToggleable
            />,
            <Menu.Item
              text="Population Health Management"
              key="Population"
              className="SubMenuItem2"
              isToggled={toggle3}
              onClick={handleToggle3OnClick}
              isToggleable
            />,
          ]}
        />
        <Menu.Item
          text="Community, Critical Access & Specialty Hospital"
          key="Nested2 disabled"
          className="MenuItem3"
          isDisabled
          subMenuItems={[
            <Menu.Item text="Default 2.1" key="2.1" />,
            <Menu.Item text="Default 2.2" key="2.2" />,
            <Menu.Item text="Default 2.3" key="2.3" />,
          ]}
        />
      </Menu>
      <Button id="menu-button" onClick={handleButtonClick} text="Clinical Solution" aria-haspopup icon={<IconCaretDown />} isReversed refCallback={setButtonNode} />
    </div>
  );
};

MenuButton.propTypes = propTypes;

export default MenuButton;
