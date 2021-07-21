import React, { useEffect, useRef, useState } from 'react';
import { injectIntl } from 'react-intl';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import Popup from 'terra-popup';
import ThemeContext from 'terra-theme-context';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import styles from './Pill.module.scss';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
    * The html `id` attribute for the pill.
    */
  id: PropTypes.string,
  /**
    * @private
    * The intl object to be injected for translations.
    */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }).isRequired,
  /**
    * Whether or not the pill is removable
    */
  isRemovable: PropTypes.bool,
  /**
   * Whether or not the pill is selectable
   */
  isSelectable: PropTypes.bool,
  /**
    * The label text for the pill. (Required)
    */
  label: PropTypes.string.isRequired,
  /**
    * Metadata for the pill
    */
  metaData: PropTypes.object,
  /**
    * A callback function to execute when the pill is removed. Returns pillKey, metadata.
    */
  onRemove: PropTypes.func,
  /**
   * A callback function to execute when the pill is selected. Returns pillKey, metadata.
   *
   * ![IMPORTANT](https://badgen.net/badge/UX/Design-Standards/blue) Intended to only be used to disclose a popup.
   */
  onSelect: PropTypes.func,
  /**
   * Key to uniquely identify pill.
   */
  pillKey: PropTypes.string,
  /**
   * Callback to expose pill element's ref for popup placement.
   */
  refCallback: PropTypes.func,
  /**
   * Tooltip to display if the pill label does not have enough space to display and will show as truncated, to be used
   * in addition to a popup. Only applies when used along with the 'onSelect' prop.
   */
  title: PropTypes.string,
};

const defaultProps = {
  id: undefined,
  onRemove: undefined,
  refCallback: undefined,
  title: undefined,
};

const Pill = (props) => {
  const {
    label,
    id,
    intl,
    isRemovable,
    isSelectable,
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
  const [isEllipsis, setIsEllipsis] = useState(false);
  const [open, setPopupOpen] = useState(false);

  useEffect(() => {
    if (pillRef.current && pillRef.current.firstChild.offsetWidth < pillRef.current.firstChild.scrollWidth) {
      setIsEllipsis(true);
    }
  }, []);

  useEffect(() => {
    if (refCallback) {
      refCallback(pillRef.current);
    }
  }, [refCallback]);

  const handleOnRemove = () => {
    onRemove(pillKey, metaData);
  };

  const handleOnClick = () => {
    if (isSelectable && isEllipsis) {
      setPopupOpen(true);
    }
    if (onSelect) {
      onSelect(pillKey, metaData);
    }
  };

  const handleOnRequestClose = () => {
    setPopupOpen(false);
  };

  const getPillRef = () => pillRef.current;

  const pillProps = {};
  if (onSelect || onRemove || isSelectable) {
    pillProps.tabIndex = '0';
    pillProps.role = 'button';
  }

  const pillButtonProps = {};
  pillButtonProps.title = title;

  if (onSelect || isSelectable) {
    pillButtonProps.onClick = handleOnClick;
  }

  const removeButtonProps = {};
  if (onRemove) {
    removeButtonProps.onClick = handleOnRemove;
  }

  const pillInteractionHint = 'Default';

  const pillClassNames = classNames(
    cx([
      'pill-container',
      theme.className,
    ]),
    customProps.className,
  );

  const pillLabelClassNames = cx([
    'pill-label',
    { 'is-selectable': !!onSelect || (isSelectable && isEllipsis) },
    { 'is-removable': !!onRemove },
    { 'is-selectable-and-removable': (!!onSelect || (isSelectable && isEllipsis)) && !!onRemove },
  ]);

  const removeButtonClassNames = cx([
    'pill-remove-button',
  ]);

  const popupConent = () => {
    if (isEllipsis && isSelectable) {
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

  return (
    <div
      {...customProps}
      {...pillProps}
      id={id}
      ref={pillRef}
      data-terra-pills-show-focus-styles
      className={pillClassNames}
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
  );
};

Pill.propTypes = propTypes;
Pill.defaultProps = defaultProps;

export default injectIntl(Pill);
