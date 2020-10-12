import React, { useRef, useState } from 'react';
import Popup from 'terra-popup';
import Button from 'terra-button';
import { Placeholder } from '@cerner/terra-docs';
import classNames from 'classnames/bind';
import styles from './PopupAttachmentBehavior.module.scss';

const cx = classNames.bind(styles);

function PopupAttachmentBehavior() {
  const buttonElement = useRef();
  const [open, setOpen] = useState(false);
  const [contentBehavior, setContentBehavior] = useState('auto');

  const setButtonNode = (node) => {
    buttonElement.current = node;
  };

  const getButtonNode = () => buttonElement.current;

  const handleButtonClick = () => {
    setOpen(true);
  };

  const handleRequestClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setContentBehavior(event.target.value);
  };

  return (
    <React.Fragment>
      <div>
        <label htmlFor="popup-behavior">Attachment Behavior</label>
        <select id="popup-behavior" onChange={handleChange} value={contentBehavior} className={cx('selection-list')}>
          <option value="auto">Auto</option>
          <option value="flip">Flip</option>
          <option value="push">Push</option>
        </select>
        <Button
          className={cx('popup-wrapper')}
          text="Open Popup"
          onClick={handleButtonClick}
          refCallback={setButtonNode}
        />
      </div>
      <Popup
        attachmentBehavior={contentBehavior}
        contentAttachment="top center"
        isOpen={open}
        targetRef={getButtonNode}
        onRequestClose={handleRequestClose}
      >
        <Placeholder title="Popup Content" />
      </Popup>
    </React.Fragment>
  );
}

export default PopupAttachmentBehavior;
