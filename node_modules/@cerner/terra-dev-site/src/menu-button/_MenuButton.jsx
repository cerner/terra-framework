import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Menu from 'terra-menu';
import IconChevronDown from 'terra-icon/lib/icon/IconChevronDown';
import Button from 'terra-button';

import styles from './MenuButton.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Button text
   */
  text: PropTypes.string.isRequired,

  /**
   * menu items
   */
  items: PropTypes.arrayOf(PropTypes.string).isRequired,

  /**
   * Selected menu item
   */
  selectedKey: PropTypes.string,

  /**
   * On change callback
   */
  onChange: PropTypes.func.isRequired,
};

const MenuButton = ({
  text, items, selectedKey, onChange,
}) => {
  const buttonRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Menu
        isOpen={isOpen}
        targetRef={() => buttonRef.current}
        onRequestClose={() => setIsOpen(false)}
      >
        <Menu.ItemGroup
          key={text}
          onChange={(event, index) => {
            setIsOpen(false);
            onChange(items[index]);
          }}

        >
          {items.map(item => (
            <Menu.Item
              text={item}
              key={item}
              isSelected={selectedKey === item}
            />
          ))}
        </Menu.ItemGroup>
      </Menu>
      <Button
        text={text}
        className={cx('button')}
        icon={<IconChevronDown />}
        isReversed
        variant="ghost"
        refCallback={(node) => { buttonRef.current = node; }}
        onClick={() => setIsOpen(true)}
      />
    </>
  );
};

MenuButton.propTypes = propTypes;

export default MenuButton;
