import React, {
  useCallback,
  useEffect, useLayoutEffect, useRef, useState,
} from 'react';
import {
  KEY_SPACE,
  KEY_RETURN,
  KEY_DELETE,
  KEY_BACK_SPACE,
} from 'keycode-js';
import { injectIntl } from 'react-intl';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import Popup from 'terra-popup';
import ThemeContext from 'terra-theme-context';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import ResizeObserver from 'resize-observer-polyfill';
import styles from './Pill.module.scss';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
    * The html 'id' attribute for the pill, needed for proper keyboard interactions. (Required & must be unique)
    */
  id: PropTypes.string.isRequired,
  /**
   * The label text for the pill. (Required)
   */
  label: PropTypes.string.isRequired,
  /**
   * Secondary label text for the pill that displays a filter category
   */
  labelCategory: PropTypes.string,
  /**
   * Object returned along with the 'pillKey' in the `onRemove` and `onSelect` callback. ('onSelect' only applicable for `<SelectablePills />`)
   */
  metaData: PropTypes.object,
  /**
   * To identify which pill is being removed.
   */
  pillKey: PropTypes.string,
  /**
   * @private
   * The intl object to be injected for translations.
   */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }).isRequired,
  /**
   * A callback function to execute when the pill is removed. Returns pillKey, metadata.
   */
  onRemove: PropTypes.func,
  /**
   * @private
   * Tooltip to display if the pill label does not have enough space to display and will show as truncated,
   * to be used in addition with a popup.
   */
  title: PropTypes.string,
};

const defaultProps = {
  onRemove: undefined,
  pillKey: undefined,
  title: undefined,
};

const Pill = (props) => {
  const {
    label,
    labelCategory,
    id,
    intl,
    metaData,
    onRemove,
    pillKey,
    title,
    ...customProps
  } = props;

  const theme = React.useContext(ThemeContext);
  const pillRef = useRef();
  const [isTruncated, setIsTruncated] = useState(false);
  const [open, setPopupOpen] = useState(false);

  const handleOnRemove = (event) => {
    event.preventDefault();
    event.stopPropagation();
    onRemove(pillKey, metaData, event);
  };

  const handleOnClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (isTruncated) {
      setPopupOpen(true);
      pillRef.current.setAttribute('aria-expanded', true);
    }
  };

  const handleOnRequestClose = () => {
    setPopupOpen(false);
  };

  const handleOnKeyDown = (event) => {
    pillRef.current.setAttribute('data-terra-pills-show-focus-styles', 'true');
    if ((event.keyCode === KEY_RETURN || event.keyCode === KEY_SPACE)) {
      event.preventDefault();
      if (isTruncated) {
        setPopupOpen(true);
      }
    } else if ((event.keyCode === KEY_DELETE || event.keyCode === KEY_BACK_SPACE)) {
      event.preventDefault();
      if (onRemove) {
        onRemove(pillKey, metaData, event);
      }
    }
  };

  const handleOnMouseDown = () => {
    pillRef.current.setAttribute('data-terra-pills-show-focus-styles', 'false');
  };

  const handleOnBlur = () => {
    if (isTruncated) {
      pillRef.current.setAttribute('data-terra-pills-show-focus-styles', 'true');
    }
  };

  const getPillRef = () => pillRef.current;

  const pillInteraction = {};
  pillInteraction.isSelectable = isTruncated;
  pillInteraction.isRemovable = onRemove;
  pillInteraction.isSelectableAndRemovable = (onRemove && isTruncated);

  const pillProps = {};
  pillProps.title = title || (isTruncated ? label : undefined);
  if (pillInteraction.isSelectable || pillInteraction.isRemovable) {
    pillProps.tabIndex = '0';
    pillProps.onKeyDown = handleOnKeyDown;
    pillProps.onMouseDown = handleOnMouseDown;
    pillProps.onBlur = handleOnBlur;
  }

  const pillButtonProps = {};
  if (pillInteraction.isSelectable) {
    pillButtonProps.onClick = handleOnClick;
  }

  const removeButtonProps = {};
  if (onRemove) {
    removeButtonProps.onClick = handleOnRemove;
  }

  let pillInteractionHint;
  if (pillInteraction.isSelectableAndRemovable) {
    pillInteractionHint = `, ${intl.formatMessage({ id: 'Terra.pills.hint.selectableAndRemovable' })}`;
  } else if (pillInteraction.isSelectable) {
    pillInteractionHint = `, ${intl.formatMessage({ id: 'Terra.pills.hint.selectable' })}`;
  } else if (pillInteraction.isRemovable) {
    pillInteractionHint = `, ${intl.formatMessage({ id: 'Terra.pills.hint.removable' })}`;
  }

  const pillClassNames = classNames(
    cx([
      'pill',
      { 'is-focusable': pillInteraction.isSelectable || pillInteraction.isRemovable },
      { 'is-selectable': pillInteraction.isSelectable },
      { 'is-removable': pillInteraction.isRemovable },
      { 'is-selectable-and-removable': pillInteraction.isSelectableAndRemovable },
      theme.className,
    ]),
    customProps.className,
  );

  const renderTruncatedLabelPopup = () => (
    <Popup
      isOpen={open}
      isArrowDisplayed
      targetRef={getPillRef}
      onRequestClose={handleOnRequestClose}
      contentHeight="auto"
      contentWidth="auto"
    >
      <div className={cx('popup-content-pill-label')}>{label}</div>
    </Popup>
  );

  const renderRemoveButton = () => (
    <button
      {...removeButtonProps}
      className={cx('pill-remove-button')}
      tabIndex="-1"
      type="button"
      aria-labelledby={`remove-button-${id}`}
      aria-hidden="true"
    >
      <span id={`remove-button-${id}`} className={cx('remove-button-label')}>{intl.formatMessage({ id: 'Terra.pills.label.delete' }, { pillLabelName: label })}</span>
      <span className={cx('clear-icon')} />
    </button>
  );

  const renderSelectablePill = () => (
    <>
      <button
        {...customProps}
        {...pillProps}
        {...pillButtonProps}
        aria-expanded={pillInteraction.isSelectable ? true : undefined}
        aria-haspopup={pillInteraction.isSelectable ? 'dialog' : undefined}
        id={id}
        className={pillClassNames}
        ref={pillRef}
        type="button"
        aria-describedby={`interaction-hint-${id}`}
        data-terra-pills-show-focus-styles
        data-terra-pill
      >
        <span className={cx('pill-label')}>
          {label}
        </span>
      </button>
      {pillInteraction.isRemovable && renderRemoveButton()}
      {pillInteractionHint && <VisuallyHiddenText id={`interaction-hint-${id}`} text={pillInteractionHint} aria-hidden="true" />}
      {isTruncated && renderTruncatedLabelPopup()}
    </>
  );

  /* eslint-disable jsx-a11y/aria-role */
  const renderBasicPill = () => (
    <>
      <div
        {...customProps}
        {...pillProps}
        id={id}
        className={pillClassNames}
        ref={pillRef}
        role="text" // Prevent VoiceOver from announcing as "group" https://dequeuniversity.com/rules/axe/4.2/aria-text
        aria-describedby={`interaction-hint-${id}`}
        data-terra-pills-show-focus-styles
        data-terra-pill
      >
        <span className={cx('pill-label-category')}>
          {labelCategory}
        </span>
        <span className={cx('pill-label')}>
          {label}
        </span>
      </div>
      {pillInteraction.isRemovable && renderRemoveButton()}
      {pillInteractionHint && <VisuallyHiddenText id={`interaction-hint-${id}`} text={pillInteractionHint} aria-hidden="true" />}
    </>
  );
  /* eslint-enable jsx-a11y/aria-role */

  return (
    <div role="listitem" className={cx('pill-list-item')}>
      {pillInteraction.isSelectable ? renderSelectablePill() : renderBasicPill()}
    </div>
  );
};

Pill.propTypes = propTypes;
Pill.defaultProps = defaultProps;

export default injectIntl(Pill);
