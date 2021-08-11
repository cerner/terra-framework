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
   * Sets the aria-expanded attribute to true when using a popup via 'onSelect' and the popup is visible. Only applies when used along with the 'onSelect' prop.
   */
  ariaExpanded: PropTypes.bool,
  /**
    * The html 'id' attribute for the pill, needed for proper interactability (Required must be unique)
    */
  id: PropTypes.string.isRequired,
  /**
    * @private
    * The intl object to be injected for translations.
    */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }).isRequired,
  /**
   * @private
   * Whethe or not the pill is a basicPill(used for auto detecting truncation and showing internal pop-up)
   */
  isBasicPill: PropTypes.bool,
  /**
    * Adds the ability for a pill to be removable.
    */
  isRemovable: PropTypes.bool,
  /**
    * The label text for the pill. (Required)
    */
  label: PropTypes.string.isRequired,
  /**
    * Object returned along with the pillKey in the onRemove and onSelect(<SelectablePills />) callback.
    */
  metaData: PropTypes.object,
  /**
    * @private
    * A callback function to execute when the pill is removed. Returns pillKey, metadata.
    */
  onRemove: PropTypes.func,
  /**
   * @private
   * A callback function to execute when the pill is selected. Returns pillKey, metadata. Only applicable for <SelectablePills />
   *
   * ![IMPORTANT](https://badgen.net/badge/UX/Design-Standards/blue) Intended to only be used to disclose a popup.
   */
  onSelect: PropTypes.func,
  /**
   * To identify which pill is being removed.
   */
  pillKey: PropTypes.string,
  /**
   * Callback to expose pill element's ref for popup placement. Only applicable for <SelectablePills />
   */
  refCallback: PropTypes.func,
  /**
   * @private
   * Tooltip to display if the pill label does not have enough space to display and will show as truncated, to be used
   * in addition to a popup.
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

  const handleOnRemove = () => {
    onRemove(pillKey, metaData);
  };

  const handleOnClick = (event) => {
    if (isBasicPill && isTruncated) {
      setPopupOpen(true);
      pillRef.current.setAttribute('aria-expanded', true);
    }
    if (onSelect) {
      onSelect(pillKey, metaData, event);
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
        onSelect(pillKey, metaData, event);
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

  const getPillRef = () => pillRef.current;

  const pillProps = {};
  if (onSelect || isRemovable || (isBasicPill && isTruncated)) {
    pillProps.tabIndex = '0';
    pillProps.role = 'button';
    pillProps.onKeyDown = handleOnKeyDown;
    pillProps.onMouseDown = handleOnMouseDown;
    pillProps.onBlur = handleOnBlur;
  }

  const pillButtonProps = {};
  pillButtonProps.title = isTruncated ? label : '';

  if (onSelect || isBasicPill) {
    pillButtonProps.onClick = handleOnClick;
  }

  const removeButtonProps = {};
  if (onRemove && isRemovable) {
    removeButtonProps.onClick = handleOnRemove;
  }

  let pillInteractionHint;
  if ((onSelect && isRemovable) || (isTruncated && isRemovable)) {
    pillInteractionHint = intl.formatMessage({ id: 'Terra.pills.pillHint.selectableAndRemovable' });
  } else if (onSelect || (isBasicPill && isTruncated)) {
    pillInteractionHint = intl.formatMessage({ id: 'Terra.pills.pillHint.selectable' });
  } else if (isRemovable) {
    pillInteractionHint = intl.formatMessage({ id: 'Terra.pills.pillHint.removable' });
  }

  const pillClassNames = classNames(
    cx([
      'pill-container',
      { 'is-focusable': !!onSelect || isTruncated || isRemovable },
      { 'is-selectable': !!onSelect || (isBasicPill && isTruncated) },
      { 'is-removable': isRemovable },
      { 'is-selectable-and-removable': (!!onSelect && isRemovable) || (isRemovable && isTruncated) },
      theme.className,
    ]),
    customProps.className,
  );

  const pillLabelClassNames = cx([
    'pill-label',
    { 'is-selectable': !!onSelect || (isBasicPill && isTruncated) },
    { 'is-removable': isRemovable },
    { 'is-selectable-and-removable': (!!onSelect && isRemovable) || (isRemovable && isTruncated) },
  ]);

  const removeButtonClassNames = cx([
    'pill-remove-button',
  ]);

  const popupConent = () => {
    if (isTruncated && isBasicPill) {
      return (
        <Popup
          isOpen={open}
          isArrowDisplayed
          targetRef={getPillRef}
          onRequestClose={handleOnRequestClose}
        >
          <p>{label}</p>
        </Popup>
      );
    }
    return null;
  };

  const handleWidthChange = () => {
    if (isBasicPill && (pillRef.current.firstElementChild.scrollWidth > pillRef.current.firstElementChild.offsetWidth)) {
      setIsTruncated(true);
      pillRef.current.setAttribute('aria-haspopup', true);
    } else {
      setIsTruncated(false);
      if (pillRef.current.hasAttribute('aria-haspopup')) {
        pillRef.current.setAttribute('aria-haspopup', false);
      }
    }
  };

  return (
    <ResponsiveElement responsiveTo="window" onResize={handleWidthChange}>
      <div
        {...pillProps}
        aria-expanded={!onSelect ? undefined : ariaExpanded}
        className={pillClassNames}
        id={id}
        ref={pillRef}
        data-terra-pills-show-focus-styles
        data-terra-pill
        {...customProps}
      >
        <div
          {...pillButtonProps}
          className={pillLabelClassNames}
        >
          {label}
        </div>
        {isRemovable && (
          <div
            {...removeButtonProps}
            className={removeButtonClassNames}
          >
            <span className={cx('clear-icon')} />
          </div>
        )}
        {pillInteractionHint && <VisuallyHiddenText text={pillInteractionHint} />}
        {popupConent()}
      </div>
    </ResponsiveElement>

  );
};

Pill.propTypes = propTypes;
Pill.defaultProps = defaultProps;

export default injectIntl(Pill);
