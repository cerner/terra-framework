/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import IconClose from 'terra-icon/lib/icon/IconClose';
import {
  KEY_SPACE, KEY_RETURN, KEY_DELETE, KEY_BACK_SPACE,
} from 'keycode-js';

import { injectIntl } from 'react-intl';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import { v4 as uuidv4 } from 'uuid';
import { Draggable } from 'react-beautiful-dnd';
import IconKnurling from 'terra-icon/lib/icon/IconKnurling';
import terraStyles from './TerraTabs.module.scss';
import styles from './Tab.module.scss';
import {
  enableFocusStyles,
  disableFocusStyles,
  handleArrows,
} from './_TabUtils';

const cy = classNames.bind(terraStyles);

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The id of the tab to be used in mapping.
   */
  id: PropTypes.string.isRequired,
  /**
  * Icon to be displayed on the tab.
  */
  icon: PropTypes.element,
  /**
  /**
   * The id of the tab pane element associated to this tab.
   */
  associatedPanelId: PropTypes.string.isRequired,
  /**
   * A custom display for the tab. Component will fallback to label text when collapsed into the menu.
   */
  customDisplay: PropTypes.node,
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
   * Callback function triggering on selection. onSelect(itemKey, metaData)
   */
  onSelect: PropTypes.func.isRequired,
  /**
   * Identifier for the CommonTab item represented by the Tab. Returned with onSelect.
   */
  itemKey: PropTypes.string,
  /**
   * Data for the CommonTab item represented by the Tab. Returned with onSelect.
   */
  metaData: PropTypes.object,
  /**
   * Array of id strings,
   */
  tabIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  /**
   * The z-index style to apply to the tab based upon order and state.
   */
  zIndex: PropTypes.number,
  /**
   * Indicates if the pane label should only display the icon. When tab collapses into menu the label text will be used.
   */
  isIconOnly: PropTypes.bool,
  /**
   *  @private
   * The style to be applied to the tabs
   */
  variant: PropTypes.oneOf(['workspace', 'framework']),
  /**
   * Indicates if the pane should be disabled.
   */
  isDisabled: PropTypes.bool,
  /**
   * If enabled, this prop will show the icon on the tab and also in the menu if pane is collapsed.
   */
  showIcon: PropTypes.bool,
  /**
   * @private
   * Callback function when selection has changed.
   * Parameters: 1. Event 2. Selected pane's key
   */
  onChange: PropTypes.func,
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
   * Whether or not the tab is draggable.
   */
  isDraggable: PropTypes.bool,
  /**
   * A callback function triggered when the tab is being closed. It takes three parameters.
   * Parameters: 1. label of the closing tab 2. Selected pane's key 3. Event
   */
  onClosingTab: PropTypes.func,
};

const defaultProps = {
  isSelected: false,
  isIconOnly: false,
  isDisabled: false,
  showIcon: false,
  isDraggable: false,
};

const Tab = ({
  id,
  icon,
  isIconOnly,
  associatedPanelId,
  customDisplay,
  itemKey,
  index,
  isSelected,
  label,
  metaData,
  onSelect,
  tabIds,
  zIndex,
  variant,
  isDisabled,
  onChange,
  isClosable,
  onClosingTab,
  intl,
  isDraggable,
}) => {
  const tabDeleteLabel = intl.formatMessage({ id: 'Terra.tabs.hint.removable' });
  const attributes = {};
  const theme = React.useContext(ThemeContext);
  const tabClassNames = cx(
    'tab',
    { 'is-active': isSelected },
    { 'is-icon-only': isIconOnly },
    { 'is-text-only': !icon },
    { 'is-disabled': isDisabled },
    theme.className,
  );
  const paneClassNames = classNames(cy(
    'tab',
    { 'is-disabled': isDisabled },
    { 'is-icon-only': isIconOnly },
    { 'is-text-only': !icon },
    { 'is-active': isSelected },
    theme.className,
  ));

  if (isIconOnly) {
    attributes['aria-label'] = label;
  }

  function onCloseClick(event) {
    if (!isDisabled && isClosable) {
      event.stopPropagation();
      onClosingTab(itemKey, metaData, event);
      const deleteTabLabel = intl.formatMessage({ id: 'Terra.tabs.hint.currentTabClosed' });
      let element = document.getElementById(tabIds[index - 1]);
      if (index === 0) {
        element = document.getElementById(tabIds[index + 1]);
      }
      const ariaLabel = label ? `${label} ${deleteTabLabel}` : '';
      if (element) {
        element.setAttribute('aria-label', ariaLabel);
        element.focus();
        element.addEventListener('blur', () => {
          element.removeAttribute('aria-label');
        });
      }
    }
  }
  function onKeyDown(event) {
    if (event.nativeEvent.keyCode === KEY_RETURN || (event.nativeEvent.keyCode === KEY_SPACE && !isDraggable)) {
      event.preventDefault();
      event.stopPropagation();
      if (onSelect) {
        onSelect(itemKey, metaData);
      }
      if (onChange) {
        onChange(event, itemKey);
      }
    }
    if (event.nativeEvent.keyCode === KEY_DELETE || event.nativeEvent.keyCode === KEY_BACK_SPACE) {
      event.preventDefault();
      event.stopPropagation();
      onCloseClick(event);
    } else {
      const isDragging = !document.querySelectorAll('[data-terra-drag-focus="true"]').length && isDraggable;
      handleArrows(event, index, tabIds, isDragging);
    }
  }

  function onClick(event) {
    if (!isDisabled) {
      onSelect(itemKey, metaData);
      if (onChange) {
        onChange(event, itemKey);
      }
    }
  }
  attributes.tabIndex = isSelected ? 0 : -1;
  attributes.onClick = onClick;
  attributes.onKeyDown = onKeyDown;
  attributes.onBlur = enableFocusStyles;
  attributes.onMouseDown = disableFocusStyles;
  attributes['data-focus-styles-enabled'] = !isDisabled;
  attributes['aria-selected'] = isSelected;
  attributes.style = { zIndex };

  const onFocusResponse = intl.formatMessage({ id: 'Terra.tabs.focus' });
  const responseId = `terra-tab-pane-response-${uuidv4()}`;
  const deleteResponseId = `terra-tab-delete-pane-response-${uuidv4()}`;
  const ariaDescribedBy = isClosable ? [responseId, deleteResponseId] : responseId;

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
            role="tab"
            className={variant === 'framework' ? paneClassNames : tabClassNames}
            title={label}
            aria-label={label}
            aria-describedby={ariaDescribedBy}
            tabIndex={isSelected ? 0 : -1}
            data-terra-tabs-show-focus-styles
            data-terra-tab-draggable
          >
            <div className={variant === 'framework' ? cy('inner', 'draggable-inner') : cx('inner')}>
              <IconKnurling />
              <VisuallyHiddenText aria-hidden id={responseId} text={onFocusResponse} />
              <VisuallyHiddenText aria-hidden id={deleteResponseId} text={tabDeleteLabel} />
              <div className={cy('draggable-icon')}>{customDisplay || icon}</div>
              {(!customDisplay && !isIconOnly) && <span className={variant === 'framework' ? cy('label') : cx('label')}>{label}</span>}
            </div>
            {isClosable && (
            <div
              className={cx('tabs-remove-button')}
              onClick={onCloseClick}
            >
              <IconClose />
            </div>
            )}
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
      role="tab"
      aria-disabled={isDisabled}
      className={variant === 'framework' ? paneClassNames : tabClassNames}
      title={label}
      aria-label={label}
      aria-describedby={isClosable ? deleteResponseId : undefined}
      tabIndex={isSelected ? 0 : -1}
      data-terra-tabs-show-focus-styles
    >
      <div className={variant === 'framework' ? cy('inner') : cx('inner')}>
        <VisuallyHiddenText aria-hidden id={deleteResponseId} text={tabDeleteLabel} />
        {customDisplay || icon}
        {(!customDisplay && !isIconOnly) && <span className={variant === 'framework' ? cy('label') : cx('label')}>{label}</span>}
      </div>
      {isClosable && (
      <>
        <div
          className={cx('tabs-remove-button')}
          onClick={onCloseClick}
        >
          <IconClose />
        </div>
      </>
      )}
    </div>
  );
};

Tab.propTypes = propTypes;
Tab.defaultProps = defaultProps;

export default injectIntl(Tab);
