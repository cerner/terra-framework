/* eslint-disable jsx-a11y/role-supports-aria-props */ // lp052179
import React, {
  useCallback, useLayoutEffect, useRef, useState,
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
import ResizeObserver from 'resize-observer-polyfill';
import ThemeContext from 'terra-theme-context';
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
   * Object returned along with the 'pillKey' in the `onRemove`
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
   *
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
    onSelect,
    ...customProps
  } = props;

  const theme = React.useContext(ThemeContext);
  const pillRef = useRef();
  const [isTruncated, setIsTruncated] = useState(false);
  const [open, setPopupOpen] = useState(false);

  const basicPillTruncation = useCallback(() => {
    if (pillRef.current.firstElementChild.scrollWidth > pillRef.current.firstElementChild.clientWidth) {
      setIsTruncated(true);
    } else {
      setIsTruncated(false);
    }
  }, []);

  const handleResize = useCallback((entries) => {
    if (!Array.isArray(entries)) {
      return;
    }

    basicPillTruncation();
  }, [basicPillTruncation]);

  useLayoutEffect(() => {
    let observer = new ResizeObserver((entries) => {
      handleResize(entries);
    });
    observer.observe(pillRef.current.parentNode);

    return () => {
      observer.disconnect();
      observer = null;
    };
  }, [basicPillTruncation, handleResize]);

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
    pillRef.current.setAttribute('aria-expanded', false);
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

  const handleOnMouseDown = (event) => {
    pillRef.current.setAttribute('data-terra-pills-show-focus-styles', 'false');
    onSelect(pillRef, event);
  };

  const handleOnBlur = () => {
    pillRef.current.setAttribute('data-terra-pills-show-focus-styles', 'true');
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
      'pill-label',
      { 'is-focusable': pillInteraction.isSelectable || pillInteraction.isRemovable },
      { 'is-removable': pillInteraction.isRemovable && !pillInteraction.isSelectableAndRemovable },
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
      <div className={cx(['popup-content-pill-label', theme.className])}>
        {labelCategory
          ? <span className={cx(['popup-content-pill-category', theme.className])}>{`${labelCategory}: `}</span>
          : undefined}
        <span>{label}</span>
      </div>
    </Popup>
  );

  const renderRemoveButton = () => (
    <button
      {...removeButtonProps}
      className={cx('pill-remove-button')}
      tabIndex="-1"
      type="button"
      aria-label={intl.formatMessage({ id: 'Terra.pills.label.delete' }, { pillLabelName: label })}
    >
      <span className={cx('clear-icon')} />
    </button>
  );

  const renderSelectablePill = () => {
    const categoryLabel = labelCategory || '';
    const visuallyHiddenTextHint = ` ${categoryLabel} ${label} ${pillInteractionHint}`;

    return (
      <>
        <div
          {...customProps}
          {...pillProps}
          {...pillButtonProps}
          aria-haspopup={pillInteraction.isSelectable ? 'dialog' : undefined}
          id={id}
          className={cx(['pill', 'is-focusable'])}
          ref={pillRef}
          role="listitem"
          aria-label={visuallyHiddenTextHint}
          data-terra-pills-show-focus-styles
          data-terra-pill
        >
          <span className={pillClassNames}>
            {labelCategory
              ? <span className={cx('pill-category')}>{`${labelCategory}: `}</span>
              : undefined}
            <span>{label}</span>
          </span>
          {pillInteraction.isRemovable && renderRemoveButton()}
        </div>
        {isTruncated && renderTruncatedLabelPopup()}
      </>
    );
  };

  const renderBasicPill = () => {
    const categoryLabel = labelCategory || '';
    const visuallyHiddenTextHint = ` ${categoryLabel} ${label} ${pillInteractionHint}`;
    return (
      <>
        <div
          {...customProps}
          {...pillProps}
          id={id}
          className={cx(['pill', 'is-focusable'])}
          ref={pillRef}
          role="listitem"
          aria-label={visuallyHiddenTextHint}
          data-terra-pills-show-focus-styles
          data-terra-pill
        >
          <label className={pillClassNames}>
            {labelCategory
              ? <span className={cx('pill-category')}>{`${labelCategory}: `}</span>
              : undefined}
            <span>{label}</span>
          </label>
          {pillInteraction.isRemovable && renderRemoveButton()}
        </div>
      </>
    );
  };

  return (
    pillInteraction.isSelectable ? renderSelectablePill() : renderBasicPill()
  );
};

Pill.propTypes = propTypes;
Pill.defaultProps = defaultProps;

export default injectIntl(Pill);
