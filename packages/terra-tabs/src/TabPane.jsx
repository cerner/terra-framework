import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
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
   * Content to be displayed when the tab is selected.
   */
  children: PropTypes.node,

  /**
   * Indicates if the pane should be disabled.
   */
  isDisabled: PropTypes.bool,

  /**
   * Indicates if the pane label should only display the icon. When tab collapses into menu the label text will be used.
   */
  isIconOnly: PropTypes.bool,
  /**
   * If enabled, this prop will apply the `aria-selected` style to the pane.
   */
  isActive: PropTypes.bool,
};

const defaultProps = {
  isDisabled: false,
  isIconOnly: false,
  isActive: false,
};

const TabPane = ({
  icon,
  label,
  customDisplay,
  children,
  isDisabled,
  isIconOnly,
  isActive,
  ...customProps
}) => {
  const attributes = { ...customProps };
  const paneClassNames = cx([
    'tab',
    { 'is-disabled': isDisabled },
    { 'is-icon-only': isIconOnly },
    { 'is-text-only': !icon },
    attributes.className,
  ]);

  if (isIconOnly) {
    attributes['aria-label'] = label;
  }
  attributes['aria-selected'] = isActive;

  return (
    <div {...attributes} role="tab" className={paneClassNames}>
      {customDisplay}
      {customDisplay ? null : icon}
      {customDisplay || isIconOnly ? null : <span className={cx('label')}>{label}</span>}
    </div>
  );
};

TabPane.propTypes = propTypes;
TabPane.defaultProps = defaultProps;

export default TabPane;
