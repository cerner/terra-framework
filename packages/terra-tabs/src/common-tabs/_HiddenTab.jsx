import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import IconCheckmark from 'terra-icon/lib/icon/IconCheckmark';
import {
  KEY_SPACE, KEY_RETURN,
  KEY_DELETE, KEY_BACK_SPACE,
} from 'keycode-js';
import IconClose from 'terra-icon/lib/icon/IconClose';
import { injectIntl } from 'react-intl';
import { Draggable } from 'react-beautiful-dnd';
import IconKnurling from 'terra-icon/lib/icon/IconKnurling';
import { v4 as uuidv4 } from 'uuid';
import VisuallyHiddenText from 'terra-visually-hidden-text';
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
  /**
   * A callback function triggered when the tab is being closed. It takes three parameters.
   */
  onClosingTab: PropTypes.func,
  /**
   * Indicates if the tab can be closed.
   */
  isClosable: PropTypes.bool,
  /**
   * @private
   * The intl object to be injected for translations.
   */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }).isRequired,
  /**
   * Indicates if the pane should be disabled.
   */
  isDisabled: PropTypes.bool,
  /**
   * Whether or not the tab is draggable.
   */
  isDraggable: PropTypes.bool,
};

const defaultProps = {
  isSelected: false,
  showIcon: false,
  showAddButton: false,
  isDisabled: false,
  isClosable: false,
  isDraggable: false,
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
  isDraggable,
}) => {
  const attributes = {};
  const theme = React.useContext(ThemeContext);
  const hiddenClassNames = cx(
    'hidden',
    { 'is-active': isSelected },
    { 'is-disabled': isDisabled },
    theme.className,
  );
  const tabDeleteLabel = intl.formatMessage({ id: 'Terra.tabs.hint.removable' });

  const handleOnSelect = (event) => {
    event.preventDefault();
    event.stopPropagation();

    enableFocusStyles(event);
    onSelect(itemKey, metaData);
    if (onChange) {
      onChange(event, itemKey);
    }
  };

  function onCloseClick(event) {
    event.stopPropagation();
    onClosingTab(itemKey, metaData, event);
    const deleteTabLabel = `${intl.formatMessage({ id: 'Terra.tabs.hint.currentTabClosed' })}`;
    const element = document.getElementById(tabIds[index - 1]);
    const ariaLabel = label ? `${label} ${deleteTabLabel}` : '';
    element.setAttribute('aria-label', ariaLabel);
    element.focus();
    element.addEventListener('blur', () => {
      element.removeAttribute('aria-label');
    });
  }
  const onKeyDown = (event) => {
    if (event.nativeEvent.keyCode === KEY_RETURN || (event.nativeEvent.keyCode === KEY_SPACE && !isDraggable)) {
      handleOnSelect(event);
      if (onChange) {
        onChange(event, itemKey);
      }
    }
    if (event.nativeEvent.keyCode === KEY_DELETE || event.nativeEvent.keyCode === KEY_BACK_SPACE) {
      event.preventDefault();
      event.stopPropagation();
      onCloseClick(event);
    } else {
      const isDragging = !!document.querySelectorAll('[data-terra-menu-drag-focus="true"]').length && isDraggable;
      handleArrows(event, index, tabIds, isDragging);
    }
  };

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

  const onFocusResponse = intl.formatMessage({ id: 'Terra.tabs.focus' });
  const responseId = `terra-hidden-tab-pane-response=${uuidv4()}`;

  if (isDraggable) {
    return (
      <Draggable key={id} draggableId={id} index={index}>
        {(provided) => (
          <div
            {...attributes}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            id={id}
            aria-controls={associatedPanelId}
            role={showAddButton ? 'button' : 'tab'}
            className={hiddenClassNames}
            aria-disabled={isDisabled}
            aria-describedby={responseId}
          >
            <VisuallyHiddenText aria-hidden id={responseId} text={onFocusResponse} />
            <IconKnurling />
            <div className={cx('checkbox')}>{isSelected ? <IconCheckmark /> : null}</div>
            {showIcon && <div>{icon}</div>}
            <div className={cx('label', { 'with-icon': showIcon })}>{label}</div>
          </div>
        )}
      </Draggable>
    );
  }

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
        className={cx('tabs-remove-button')}
        type="button"
        aria-label={tabDeleteLabel}
        onClick={onCloseClick}
      >
        <IconClose a11yLabel="Close Button" />
      </button>
      )}
    </div>
  );
};

HiddenTab.propTypes = propTypes;
HiddenTab.defaultProps = defaultProps;

export default injectIntl(HiddenTab);
