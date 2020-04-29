import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { KEY_SPACE, KEY_RETURN } from 'keycode-js';
import { handleArrows } from './_TabUtils';

import styles from './Tabs.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Icon to be displayed on the tab.
   */
  icon: PropTypes.element,
  /**
   * Text to be displayed on the tab.
   */
  label: PropTypes.string.isRequired,
  /**
   * A custom display for the tab. Component will fallback to label text when collapsed into the menu.
   */
  customDisplay: PropTypes.node,
  /**
   * Indicates if the pane should be disabled.
   */
  isDisabled: PropTypes.bool,
  /**
   * Indicates if the pane label should only display the icon. When tab collapses into menu the label text will be used.
   */
  isIconOnly: PropTypes.bool,
  /**
   * Indicates if the tab is currently selected.
   */
  isSelected: PropTypes.bool,
  /**
   * Callback function triggering on selection.
   */
  onSelect: PropTypes.func,
  /**
   * Object to be returned in the onSelect.
   */
  metaData: PropTypes.object,
};

const defaultProps = {
  isDisabled: false,
  isIconOnly: false,
  isSelected: false,
};

const Tab = ({
  icon,
  label,
  customDisplay,
  isDisabled,
  isIconOnly,
  isSelected,
  onSelect,
  metaData,
  ...customProps
}) => {
  const attributes = Object.assign({}, customProps);
  const paneClassNames = cx([
    'tab',
    { 'is-disabled': isDisabled },
    { 'is-icon-only': isIconOnly },
    { 'is-text-only': !icon },
    { 'is-active': isSelected },
    attributes.className,
  ]);

  function onKeyDown(event) {
    if (event.nativeEvent.keyCode === KEY_RETURN || event.nativeEvent.keyCode === KEY_SPACE) {
      event.preventDefault();
      event.stopPropagation();
      onSelect(metaData);
    } else {
      handleArrows(event);
    }
  }

  if (isIconOnly) {
    attributes['aria-label'] = label;
  }

  if (onSelect) {
    attributes.tabIndex = isSelected ? 0 : -1;
    attributes.onClick = onSelect.bind(null, metaData);
    attributes.onKeyDown = onKeyDown;
  }
  attributes['aria-selected'] = isSelected;

  if (isDisabled) {
    attributes['aria-disabled'] = true;
  }

  return (
    <div {...attributes} role="tab" className={paneClassNames}>
      {customDisplay}
      {customDisplay ? null : icon}
      {customDisplay || isIconOnly ? null : <span className={cx('label')}>{label}</span>}
    </div>
  );
};

Tab.propTypes = propTypes;
Tab.defaultProps = defaultProps;

export default Tab;
