import React from 'react';
import PropTypes from 'prop-types';
import Tab from './common-tabs/_Tab';

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
  /**
   * If enabled, this prop will show the icon on the tab and also in the menu if pane is collapsed.
   */
  showIcon: PropTypes.bool,
};

const defaultProps = {
  isDisabled: false,
  isIconOnly: false,
  isActive: false,
  showIcon: false,
};

const TabPane = ({
  icon,
  label,
  customDisplay,
  children,
  isDisabled,
  isIconOnly,
  isActive,
  showIcon,
  ...customProps
}) => (
  <Tab
    label={label}
    isSelected={isActive}
    customDisplay={customDisplay}
    isIconOnly={isIconOnly}
    icon={icon}
    isDisabled={isDisabled}
    showIcon={showIcon}
    {...customProps}
  />
);

TabPane.propTypes = propTypes;
TabPane.defaultProps = defaultProps;

export default TabPane;
