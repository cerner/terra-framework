import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import WorkspaceContext from './WorkspaceContext';
import TabContext from './subcomponents/_TabContext';

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
};

/**
 * The WorkspaceItem component represents a tab within the Workspace, defining
 * its labels and content. The WorkspaceItem component must only be used as an
 * immediate child of the Workspace component.
 */
const WorkspaceItem = ({
  id,
  associatedPanelId,
  isActive,
  label,
  render,
  portalElement,
  /**
   * The itemKey and metaData props are not used by the WorkspaceItem component.
   * However, the Workspace component will read those prop values and use those values to
   * build its tab structure.
   */
  itemKey, // eslint-disable-line no-unused-vars
  metaData, // eslint-disable-line no-unused-vars
}) => {
  const tabContextValue = React.useMemo(() => ({
    tabId: id,
    panelId: associatedPanelId,
    label,
  }), [associatedPanelId, id, label]);

  const workspaceContextValue = React.useMemo(() => ({
    isActive,
  }), [isActive]);

  return (
    ReactDOM.createPortal((
      <TabContext.Provider value={tabContextValue}>
        <WorkspaceContext.Provider value={workspaceContextValue}>
          {render()}
        </WorkspaceContext.Provider>
      </TabContext.Provider>
    ), portalElement)
  );
};

WorkspaceItem.propTypes = propTypes;

export default WorkspaceItem;
