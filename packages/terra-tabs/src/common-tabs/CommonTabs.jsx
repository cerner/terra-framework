import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';

import usePortalManager, { getPortalElement } from './usePortalManager';

import Tabs from './_Tabs';

import styles from './CommonTabs.module.scss';
import TerraStyles from './TerraTabs.module.scss';

const cx = classNamesBind.bind(styles);
const cy = classNamesBind.bind(TerraStyles);

const propTypes = {
  /**
   * The itemKey associated to the active CommonTabItem.
   */
  activeItemKey: PropTypes.string.isRequired,
  /**
   * The size string value matching the active size option.
   */
  activeSize: PropTypes.string,
  /**
   * The child CommonTabItems.
   */
  children: PropTypes.node.isRequired,
  /**
   * The unique identifier used for accessibility mappings.
   */
  id: PropTypes.string.isRequired,
  /**
   * The function callback triggering when a item is selected.
   * Returns the associated itemKey and metaData. e.g. onRequestActivate(itemKey, metaData)
   */
  onRequestActivate: PropTypes.func.isRequired,
  /**
   *  @private
   * The style to be applied to the tabs
   */
  variant: PropTypes.oneOf(['workspace', 'framework']),
  /**
   * Indicates if tabs should fill the width available in the tab bar.
   */
  tabFill: PropTypes.bool,
  /**
   * Callback function when selection has changed.
   * Parameters: 1. Event 2. Selected pane's key
   */
  onChange: PropTypes.func,
  /**
   * Callback function when add button selection has changed.
   * Parameters: 1. Event 2. Selected pane's key
   */
  onSelectAddButton: PropTypes.func,
};

const getTabId = (id, itemKey) => `${id}-${itemKey}`;

const getAssociatedPanelId = (id, itemKey) => `${getTabId(id, itemKey)}-panel`;

const CommonTabs = ({
  id,
  activeItemKey,
  activeSize,
  children,
  onRequestActivate,
  variant,
  onChange,
  onSelectAddButton,
  ...customProps
}) => {
  const theme = React.useContext(ThemeContext);

  const [commonTabsContainerRef, commonTabsPortalsRef] = usePortalManager(activeItemKey);

  const tabData = React.Children.map(children, child => ({
    id: getTabId(id, child.props.itemKey),
    itemKey: child.props.itemKey,
    associatedPanelId: getAssociatedPanelId(id, child.props.itemKey),
    label: child.props.label,
    icon: child.props.icon,
    isIconOnly: child.props.isIconOnly,
    customDisplay: child.props.customDisplay,
    isSelected: child.props.itemKey === activeItemKey,
    onSelect: onRequestActivate,
    metaData: child.props.metaData,
    isDisabled: child.props.isDisabled,
  }));

  const tabsClassNames = classNames(cy(
    // 'tabs-container',
    // { 'tab-fill': tabFill },
    'structural',
    theme.className,
  ),
  customProps.className);

  return (
    <div
      className={variant === 'framework' ? tabsClassNames : cx('workspace')}
      role="none"
    >
      <div aria-hidden className={cx('body-shadow-container')}>
        <div className={cx('body-shadow')} />
      </div>
      <div role="none" className={cx('tab-header')}>
        <Tabs variant={variant} tabData={tabData} onChange={onChange} onSelectAddButton={onSelectAddButton} />
      </div>
      <div role="none" className={cx('body')} ref={commonTabsContainerRef}>
        {React.Children.map(children, child => {
          let portalElement = commonTabsPortalsRef.current[child.props.itemKey]?.element;
          if (!portalElement) {
            portalElement = getPortalElement();
            portalElement.setAttribute('role', 'none');

            commonTabsPortalsRef.current[child.props.itemKey] = {
              element: portalElement,
            };
          }

          return (
            React.cloneElement(child, {
              key: child.props.itemKey,
              id: getTabId(id, child.props.itemKey),
              associatedPanelId: getAssociatedPanelId(id, child.props.itemKey),
              isActive: child.props.itemKey === activeItemKey,
              portalElement: variant === 'framework' ? null : portalElement,
              variant,
            })
          );
        })}
      </div>
    </div>
  );
};

CommonTabs.propTypes = propTypes;

export default CommonTabs;
