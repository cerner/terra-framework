import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import { KEY_SPACE, KEY_RETURN } from 'keycode-js';
import {
  enableFocusStyles,
  disableFocusStyles,
  handleArrows,
} from './_TabUtils';

import styles from './Tab.module.scss';
import terraStyles from './TerraTabs.module.scss';

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
};

const defaultProps = {
  isSelected: false,
  isIconOnly: false,
  isDisabled: false,
  showIcon: false,
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
}) => {
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

  function onKeyDown(event) {
    if (event.nativeEvent.keyCode === KEY_RETURN || event.nativeEvent.keyCode === KEY_SPACE) {
      event.preventDefault();
      event.stopPropagation();
      onSelect(itemKey, metaData);
      if (onChange) {
        onChange(event, itemKey);
      }
    } else {
      handleArrows(event, index, tabIds);
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

  return (
    <div
      {...attributes}
      id={id}
      aria-controls={associatedPanelId}
      role="tab"
      aria-disabled={isDisabled}
      className={variant === 'framework' ? paneClassNames : tabClassNames}
      title={label}
      data-terra-tabs-show-focus-styles
    >
      <div className={variant === 'framework' ? cy('inner') : cx('inner')}>
        {customDisplay}
        {customDisplay ? null : icon}
        {customDisplay || isIconOnly ? null : <span className={variant === 'framework' ? cy('label') : cx('label')}>{label}</span>}
      </div>
    </div>
  );
};

Tab.propTypes = propTypes;
Tab.defaultProps = defaultProps;

export default Tab;
