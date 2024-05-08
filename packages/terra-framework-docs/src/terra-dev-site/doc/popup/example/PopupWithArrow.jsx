import React, { useRef, useState, useEffect } from 'react';
import Button from 'terra-button';
import Popup from 'terra-popup';
import classNames from 'classnames/bind';
import styles from './PopupDocCommon.module.scss';

const cx = classNames.bind(styles);

function PopupArrow() {
  const buttonElement = useRef();
  const [open, setOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);

  const setButtonNode = (node) => {
    buttonElement.current = node;
  };

  const getButtonNode = () => buttonElement.current;

  const handleButtonClick = () => {
    if (!open) {
      document.querySelector('#root').setAttribute('inert', 'true');
    }
    setOpen(true);
  };

  const handleRequestClose = () => {
    setOpen(false);
    document.querySelector('#root').removeAttribute('inert');
    buttonElement.current.focus(); // Return focus to the button when the popup closes
  };

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setFocusedIndex((prevIndex) => (prevIndex + 1) % 2);
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      setFocusedIndex((prevIndex) => (prevIndex - 1 + 2) % 2);
    }
  };
  useEffect(() => {
    if (open) {
      setFocusedIndex(0);
    }
  }, [open]);

  useEffect(() => {
    if (open && focusedIndex !== -1) {
      const activeMenuItem = document.getElementById('activeMenuItem');
      if (activeMenuItem) {
        activeMenuItem.focus();
      }
    }
  }, [open, focusedIndex]);

  return (
    <React.Fragment>
      <Button text="Medication Links" onClick={handleButtonClick} refCallback={setButtonNode} />
      <Popup
        isOpen={open}
        isHeaderDisabled={false}
        onRequestClose={handleRequestClose}
        targetRef={getButtonNode}
        isArrowDisplayed
      >
        <ul className={cx('terra-popup-content')} onKeyDown={handleKeyDown} role="menu">
          <li role="menuitem">
            <a
              href="https://www.refseek.com/directory/health_medical.html"
              target="_blank"
              rel="noreferrer"
              id={focusedIndex === 0 ? 'activeMenuItem' : null}
            >
              Health and Medical sites
            </a>
          </li>
          <li role="menuitem">
            <a
              href="https://www.happiesthealth.com/?utm_source=google&utm_medium=cpc-hp"
              target="_blank"
              rel="noreferrer"
              id={focusedIndex === 1 ? 'activeMenuItem' : null}
            >
              Health Related Links
            </a>
          </li>
        </ul>
      </Popup>
    </React.Fragment>
  );
}

export default PopupArrow;
