import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import TabContext from './_TabContext';

const propTypes = {
  /**
   * Key to match with the activeItemKey to handle the display of selection.
   */
  itemKey: PropTypes.string.isRequired,
  /**
   * Text to be displayed on the tab or as it's aria-label.
   */
  label: PropTypes.string.isRequired,
  /**
   * Object to be returned in the onRequestActive.
   */
  metaData: PropTypes.object,
  /**
   * Function executed during rendering to generate child content.
   */
  render: PropTypes.func,
  /**
   * @private
   * The id of the tab.
   */
  id: PropTypes.string,
  /**
   * @private
   * The id of the panel associated to the tab.
   */
  associatedPanelId: PropTypes.string,
  /**
   * @private
   * The indicator whether or not the tab content is active.
   */
  isActive: PropTypes.bool,
  /**
   * @private
   * The html element to be hold the portaled item content.
   */
  portalElement: PropTypes.instanceOf(HTMLElement),
  /**
   * Indicates if the pane should be disabled.
   */
  isDisabled: PropTypes.bool,
  /**
   * Icon to be displayed on the tab.
   */
  icon: PropTypes.element,
  /**
   * Indicates if the pane label should only display the icon. When tab collapses into menu the label text will be used.
   */
  isIconOnly: PropTypes.bool,
  /**
   *  @private
   * The style to be applied to the tabs
   */
  variant: PropTypes.oneOf(['workspace', 'framework']),
};

/**
 * The CommonTabItem component represents a tab within the CommonTabs, defining
 * its labels and content. The CommonTabItem component must only be used as an
 * immediate child of the CommonTabs component.
 */
const CommonTabItem = ({
  id,
  icon,
  customDisplay,
  associatedPanelId,
  label,
  render,
  portalElement,
  isIconOnly,
  variant,
  /**
   * The itemKey and metaData props are not used by the CommonTabItem component.
   * However, the CommonTabs component will read those prop values and use those values to
   * build its tab structure.
   */
  itemKey, // eslint-disable-line no-unused-vars
  metaData, // eslint-disable-line no-unused-vars
  isDisabled, // eslint-disable-line no-unused-vars
  isActive, // eslint-disable-line no-unused-vars
}) => {
  const tabContextValue = React.useMemo(() => ({
    tabId: id,
    icon,
    customDisplay,
    panelId: associatedPanelId,
    label,
    isIconOnly,
  }), [associatedPanelId, customDisplay, icon, id, isIconOnly, label]);

  const commonTabsItem = (
    <TabContext.Provider value={tabContextValue}>
      {render()}
    </TabContext.Provider>
  );

  return variant === 'framework' ? commonTabsItem : ReactDOM.createPortal(commonTabsItem, portalElement);
};

CommonTabItem.propTypes = propTypes;

export default CommonTabItem;
