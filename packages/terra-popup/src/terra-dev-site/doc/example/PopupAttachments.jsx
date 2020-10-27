import React, { useState, useRef } from 'react';
import Button from 'terra-button';
import Popup from 'terra-popup';
import { Placeholder } from '@cerner/terra-docs';
import classNames from 'classnames/bind';
import styles from './PopupAttachments.module.scss';

const cx = classNames.bind(styles);

const ATTACHMENT_POSITIONS = [
  'top left',
  'top center',
  'top right',
  'middle left',
  'middle center',
  'middle right',
  'bottom left',
  'bottom center',
  'bottom right',
];

const generateOptions = values => (
  values.map((currentValue, index) => {
    const keyValue = index;
    return <option key={keyValue} value={currentValue}>{currentValue}</option>;
  })
);

function PopupAttachment() {
  const buttonElement = useRef();
  const [open, setOpen] = useState(false);
  const [contentAttachment, setContentAttachment] = useState(ATTACHMENT_POSITIONS[0]);

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

  const handleContentAttachmentChange = (event) => {
    setContentAttachment(event.target.value);
  };
  return (
    <React.Fragment>
      <div>
        <select
          id="ContentAttachment"
          name="popupContentAttachment"
          onChange={handleContentAttachmentChange}
        >
          {generateOptions(ATTACHMENT_POSITIONS)}
        </select>
        <Button
          className={cx('popup-wrapper')}
          text="Open Popup"
          onClick={handleButtonClick}
          refCallback={setButtonNode}
        />
      </div>
      <Popup
        attachmentBehavior="auto"
        contentAttachment={contentAttachment}
        isOpen={open}
        targetRef={getButtonNode}
        onRequestClose={handleRequestClose}
      >
        <Placeholder title="Popup Content" />
      </Popup>
    </React.Fragment>
  );
}

export default PopupAttachment;
