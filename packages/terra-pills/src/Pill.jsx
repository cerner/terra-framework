import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classNamesBind from 'classnames/bind';
import {
  KEY_SPACE,
  KEY_RETURN,
  KEY_DELETE,
  KEY_BACK_SPACE,
} from 'keycode-js';
import ThemeContext from 'terra-theme-context';
import IconClear from 'terra-icon/lib/icon/IconClear';
import Popup from 'terra-popup';
import styles from './Pill.module.scss';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * The label text of the pill component.
   */
  labelText: PropTypes.string.isRequired,
  /**
   * A callback function to execute when the pill is removed. If specified, the pill will be removable.
   */
  onRemove: PropTypes.func,
  /**
   * Object containing popup’s Content and the customizable attributes: contentHeight, contentWidth and isContentFocusDisabled.
   */
  popupConfig: PropTypes.shape({
    /**
     * The content to be displayed within the popup.
     */
    content: PropTypes.node.isRequired,
    /**
     * A string representation of the height in px, limited to:
     * 40, 80, 120, 160, 240, 320, 400, 480, 560, 640, 720, 800, 880 or auto.
     */
    contentHeight: PropTypes.oneOf(Object.keys(Popup.Opts.heights)),
    /**
     * A string representation of the width in px, limited to:
     * 160, 240, 320, 640, 960, 1280, 1760 or auto.
     */
    contentWidth: PropTypes.oneOf(Object.keys(Popup.Opts.widths)),
    /**
     * Set this to `true` if your content has focusable elements and you want them to receive focus instead of focusing on the default popup frame when the popup is opened.
     */
    isContentFocusDisabled: PropTypes.bool,
  }),
};

const defaultProps = {
  onRemove: undefined,
  popupConfig: undefined,
};

const Pill = (props) => {
  const {
    labelText,
    onRemove,
    popupConfig,
  } = props;

  const [open, setOpen] = useState(false);
  const pillRef = useRef();

  const handleOnClick = () => {
    setOpen(true);
  };

  const handleOnKeyDown = (event) => {
    pillRef.current.setAttribute('data-terra-pills-show-focus-styles', 'true');
    if (event.keyCode === KEY_RETURN || event.keyCode === KEY_SPACE) {
      setOpen(true);
    } else if ((event.keyCode === KEY_DELETE || event.keyCode === KEY_BACK_SPACE) && onRemove) {
      onRemove();
    }
  };

  const handleOnMouseDown = () => {
    pillRef.current.setAttribute('data-terra-pills-show-focus-styles', 'false');
  };

  const handleOnRequestClose = () => {
    setOpen(false);
  };

  const getPillNode = () => pillRef.current;

  const popupButtonProps = {};
  if (popupConfig) {
    popupButtonProps.onClick = handleOnClick;
    popupButtonProps.role = 'button';
  }

  const theme = React.useContext(ThemeContext);
  const pillClassNames = cx([
    'pill-container',
    { 'is-focusable': !!popupConfig || !!onRemove },
    theme.className,
  ]);
  const pillLabelClassNames = cx([
    'pill-label',
    { 'is-popup-button': !!popupConfig },
    { 'is-removable': !!onRemove },
  ]);
  const removeButtonClassNames = cx([
    'remove-button',
    { 'is-removable': !!onRemove },
  ]);

  return (
    <>
      <div
        className={pillClassNames}
        ref={pillRef}
        onKeyDown={handleOnKeyDown}
        onMouseDown={handleOnMouseDown}
        tabIndex="0"
      >
        <div
          {...popupButtonProps}
          className={pillLabelClassNames}
        >
          {labelText}
        </div>
        {onRemove && (
          <div
            className={removeButtonClassNames}
            onClick={onRemove}
            role="button"
          >
            <IconClear height="0.57143rem" width="0.57143rem" />
          </div>
        )}
      </div>
      {popupConfig && (
        <Popup
          isOpen={open}
          isArrowDisplayed
          targetRef={getPillNode}
          onRequestClose={handleOnRequestClose}
          contentHeight={popupConfig.contentHeight}
          contentWidth={popupConfig.contentWidth}
          isContentFocusDisabled={popupConfig.isContentFocusDisabled}
        >
          {popupConfig.content}
        </Popup>
      )}
    </>
  );
};

Pill.propTypes = propTypes;
Pill.defaultProps = defaultProps;

export default Pill;
