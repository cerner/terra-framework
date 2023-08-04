import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import IconCheckmark from 'terra-icon/lib/icon/IconCheckmark';
import { KEY_SPACE, KEY_RETURN } from 'keycode-js';
import IconClose from 'terra-icon/lib/icon/IconClose';
import { injectIntl } from 'react-intl';
import {
  enableFocusStyles,
  disableFocusStyles,
  handleArrows,
} from './_TabUtils';

import styles from './HiddenTab.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The id of the tab to be used in mapping.
   */
  id: PropTypes.string.isRequired,
  /**
   * The id of the tab pane element associated to this tab.
   */
  associatedPanelId: PropTypes.string.isRequired,
  /**
   * Index value to use for navigation.
   */
  index: PropTypes.number.isRequired,
  /**
   * Indicates if the tab is currently selected.
   */
  isSelected: PropTypes.bool,
  /**
   * Text to be displayed on the tab.
   */
  label: PropTypes.string.isRequired,
  /**
   * Identifer for the Tab to be returned with onSelect.
   */
  itemKey: PropTypes.string.isRequired,
  /**
   * Object to be returned in the onSelect.
   */
  metaData: PropTypes.object,
  /**
   * Callback function triggering on selection. onSelect(itemKey, metaData)
   */
  onSelect: PropTypes.func.isRequired,
  /**
   * Array of id strings,
   */
  tabIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  /**
   * @private
   * The function callback when an event occurs.
   */
  onBlur: PropTypes.func.isRequired,
  /**
   * @private
   * The function callback when an event occurs.
   */
  onFocus: PropTypes.func.isRequired,
  /**
   * @private
   * Callback function when selection has changed.
   * Parameters: 1. Event 2. Selected pane's key
   */
  onChange: PropTypes.func,
  /**
   * Icon to be displayed on the tab.
   */
  icon: PropTypes.element,
  /**
   * If enabled, this prop will show the icon on the tab and also in the menu if pane is collapsed.
   */
  showIcon: PropTypes.bool,
  /**
   * If enabled, this prop will show the add icon in the tab dropdown.
   */
  showAddButton: PropTypes.bool,

  onClosingTab: PropTypes.func,
  isClosable: PropTypes.bool,
  intl: PropTypes.shape({ formatMessage: PropTypes.func }).isRequired,
  /**
   * Indicates if the pane should be disabled.
   */
  isDisabled: PropTypes.bool,
};

const defaultProps = {
  isSelected: false,
  showIcon: false,
  showAddButton: false,
  isDisabled: false,
};

const HiddenTab = ({
  id,
  associatedPanelId,
  index,
  isSelected,
  label,
  itemKey,
  metaData,
  onBlur,
  onFocus,
  onSelect,
  tabIds,
  onChange,
  icon,
  showIcon,
  showAddButton,
  onClosingTab,
  isClosable,
  intl,
  isDisabled,
}) => {
  const attributes = {};
  const theme = React.useContext(ThemeContext);
  const hiddenClassNames = cx(
    'hidden',
    { 'is-active': isSelected },
    { 'is-disabled': isDisabled },
    theme.className,
  );
  const tabDeleteLabel = `${intl.formatMessage({ id: 'Terra.tabs.hint.removable' })}`;

  const handleOnSelect = (event) => {
    event.preventDefault();
    event.stopPropagation();

    enableFocusStyles(event);
    onSelect(itemKey, metaData);
    if (onChange) {
      onChange(event, itemKey);
    }
  };

  const onKeyDown = (event) => {
    if (event.nativeEvent.keyCode === KEY_RETURN || event.nativeEvent.keyCode === KEY_SPACE) {
      handleOnSelect(event);
      if (onChange) {
        onChange(event, itemKey);
      }
    } else {
      handleArrows(event, index, tabIds);
    }
  };
  function onCloseClick(event) {
    event.stopPropagation();
    // setIsClosed(true);
    onClosingTab(itemKey, metaData);
  }

  function onClick(e) {
    if (!isDisabled) {
      e.preventDefault();
      e.stopPropagation();
      handleOnSelect(e);
    }
  }

  attributes.tabIndex = isSelected ? 0 : -1;
  attributes.onClick = onClick;
  attributes.onKeyDown = onKeyDown;
  attributes.onBlur = e => { enableFocusStyles(e); onBlur(e); };
  attributes.onFocus = onFocus;
  attributes.onMouseDown = disableFocusStyles;
  attributes['data-focus-styles-enabled'] = true;
  attributes['aria-selected'] = isSelected;

  return (
    <div
      {...attributes}
      id={id}
      aria-controls={associatedPanelId}
      role={showAddButton ? 'button' : 'tab'}
      className={hiddenClassNames}
      aria-disabled={isDisabled}
    >
      <div className={cx('checkbox')}>{isSelected ? <IconCheckmark /> : null}</div>
      {showIcon && icon}
      <div className={cx('label', { 'with-icon': showIcon })}>{label}</div>
      {isClosable && (
      <button
        className={cx('pill-remove-button')}
        type="button"
        aria-label={tabDeleteLabel}
        onClick={onCloseClick}
      >
        <IconClose a11yLabel="Closed CLICKED" />
      </button>
      )}
    </div>
  );
};

HiddenTab.propTypes = propTypes;
HiddenTab.defaultProps = defaultProps;

export default injectIntl(HiddenTab);
