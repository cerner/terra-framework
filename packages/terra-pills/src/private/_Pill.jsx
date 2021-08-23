import React, {
  useEffect, useRef, useState,
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
import ResponsiveElement from 'terra-responsive-element';
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
   * Sets the aria-expanded attribute to true when using a popup and the popup is visible. (Only applicable for `<SelectablePills />`)
   */
  ariaExpanded: PropTypes.bool,
  /**
   * Adds the ability for a pill to be removable.
   */
  isRemovable: PropTypes.bool,
  /**
   * Object returned along with the 'pillKey' in the `onRemove` and `onSelect` callback. ('onSelect' only applicable for `<SelectablePills />`)
   */
  metaData: PropTypes.object,
  /**
   * To identify which pill is being removed.
   */
  pillKey: PropTypes.string,
  /**
   * Callback to expose pill element's ref for popup placement. (Only applicable for `<SelectablePills />`)
   */
  refCallback: PropTypes.func,
  /**
   * @private
   * The intl object to be injected for translations.
   */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }).isRequired,
  /**
   * @private
   * Whether or not the pill is a basicPill (used for auto detecting truncation and showing internal pop-up)
   */
  isBasicPill: PropTypes.bool,
  /**
   * @private
   * A callback function to execute when the pill is removed. Returns pillKey, metadata.
   */
  onRemove: PropTypes.func,
  /**
   * @private
   * A callback function to execute when the pill is selected. Returns pillRef, pillKey, metadata. Only applicable for <SelectablePills />
   * Intended to only be used to disclose a popup.
   */
  onSelect: PropTypes.func,
  /**
   * @private
   * Tooltip to display if the pill label does not have enough space to display and will show as truncated,
   * to be used in addition with a popup.
   */
  title: PropTypes.string,
};

const defaultProps = {
  ariaExpanded: undefined,
  onRemove: undefined,
  pillKey: undefined,
  refCallback: undefined,
  title: undefined,
};

const Pill = (props) => {
  const {
    ariaExpanded,
    label,
    id,
    intl,
    isRemovable,
    isBasicPill,
    metaData,
    onRemove,
    onSelect,
    pillKey,
    refCallback,
    title,
    ...customProps
  } = props;

  const theme = React.useContext(ThemeContext);
  const pillRef = useRef();
  const [isTruncated, setIsTruncated] = useState(false);
  const [open, setPopupOpen] = useState(false);

  useEffect(() => {
    // refCallback not applicable for Pills(Basic Pills)
    if (refCallback && !isBasicPill) {
      refCallback(pillRef.current);
    }
  }, [isBasicPill, refCallback]);

  useEffect(() => {
    if (isRemovable && pillRef.current && onRemove) {
      pillRef.current.setAttribute('data-terra-pill-removable', true);
    }
  }, [isRemovable, onRemove]);

  const handleOnRemove = (event) => {
    event.preventDefault();
    event.stopPropagation();
    onRemove(pillKey, metaData);
  };

  const handleOnClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (isBasicPill && isTruncated) {
      setPopupOpen(true);
      pillRef.current.setAttribute('aria-expanded', true);
    }
    if (onSelect) {
      onSelect(pillRef.current, pillKey, metaData, event);
    }
  };

  const handleOnRequestClose = () => {
    setPopupOpen(false);
  };

  const handleOnKeyDown = (event) => {
    pillRef.current.setAttribute('data-terra-pills-show-focus-styles', 'true');
    if ((event.keyCode === KEY_RETURN || event.keyCode === KEY_SPACE)) {
      event.preventDefault();
      if (isBasicPill && isTruncated) {
        setPopupOpen(true);
      }
      if (onSelect) {
        onSelect(pillRef.current, pillKey, metaData, event);
      }
    } else if ((event.keyCode === KEY_DELETE || event.keyCode === KEY_BACK_SPACE)) {
      event.preventDefault();
      if (onRemove && isRemovable) {
        onRemove(pillKey, metaData);
      }
    }
  };

  const handleOnMouseDown = () => {
    pillRef.current.setAttribute('data-terra-pills-show-focus-styles', 'false');
  };

  const handleOnBlur = () => {
    if (onSelect || isTruncated) {
      pillRef.current.setAttribute('data-terra-pills-show-focus-styles', 'true');
    }
  };

  const handleWidthChange = () => {
    if (pillRef.current.firstElementChild.scrollWidth > pillRef.current.firstElementChild.offsetWidth) {
      setIsTruncated(true);
      if (isBasicPill) { pillRef.current.setAttribute('aria-haspopup', 'dialog'); }
    } else {
      setIsTruncated(false);
      if (isBasicPill && pillRef.current.hasAttribute('aria-haspopup')) {
        pillRef.current.setAttribute('aria-haspopup', false);
      }
    }
  };

  const getPillRef = () => pillRef.current;

  const pillInteraction = {};
  pillInteraction.isSelectable = !!onSelect || (isBasicPill && isTruncated);
  pillInteraction.isRemovable = isRemovable;
  pillInteraction.isSelectableAndRemovable = (!!onSelect && isRemovable) || (isRemovable && isTruncated);

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
  if (onRemove && isRemovable) {
    removeButtonProps.onClick = handleOnRemove;
  }

  let pillInteractionHint;
  if (pillInteraction.isSelectableAndRemovable) {
    pillInteractionHint = `, ${intl.formatMessage({ id: 'Terra.pills.pillHint.selectableAndRemovable' })}`;
  } else if (pillInteraction.isSelectable) {
    pillInteractionHint = `, ${intl.formatMessage({ id: 'Terra.pills.pillHint.selectable' })}`;
  } else if (pillInteraction.isRemovable) {
    pillInteractionHint = `, ${intl.formatMessage({ id: 'Terra.pills.pillHint.removable' })}`;
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

  const createTruncatedPopupContent = () => (
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

  const createRemoveButton = () => (
    <span
      {...removeButtonProps}
      className={cx('pill-remove-button')}
      aria-hidden="true"
    >
      <span className={cx('clear-icon')} />
    </span>
  );

  const createSelectablePill = () => (
    <>
      <button
        {...customProps}
        {...pillProps}
        {...pillButtonProps}
        aria-expanded={pillInteraction.isSelectable ? ariaExpanded : undefined}
        aria-haspopup={pillInteraction.isSelectable ? 'dialog' : undefined}
        id={id}
        className={pillClassNames}
        ref={pillRef}
        type="button"
        data-terra-pills-show-focus-styles
        data-terra-pill
      >
        <span
          className={cx('pill-label')}
        >
          {label}
        </span>
        {pillInteraction.isRemovable && createRemoveButton()}
        {pillInteractionHint && <VisuallyHiddenText text={pillInteractionHint} />}
      </button>
      {isTruncated && isBasicPill && createTruncatedPopupContent()}
    </>
  );

  const createBasicPill = () => (
    <div
      {...customProps}
      {...pillProps}
      id={id}
      className={pillClassNames}
      ref={pillRef}
      data-terra-pills-show-focus-styles
      data-terra-pill
      aria-label={label}
      aria-describedby={`interaction-hint-${id}`}
    >
      <span
        className={cx('pill-label')}
        aria-hidden="true"
      >
        {label}
      </span>
      {pillInteraction.isRemovable && createRemoveButton()}
      {pillInteractionHint && <VisuallyHiddenText id={`interaction-hint-${id}`} text={pillInteractionHint} aria-hidden="true" />}
    </div>
  );

  return (
    <ResponsiveElement responsiveTo="window" onResize={handleWidthChange}>
      <div role="listitem" className={cx('pill-list-item')}>
        { pillInteraction.isSelectable ? createSelectablePill() : createBasicPill() }
      </div>
    </ResponsiveElement>
  );
};

Pill.propTypes = propTypes;
Pill.defaultProps = defaultProps;

export default injectIntl(Pill);
