import React from 'react';
import PropTypes from 'prop-types';
import Workspace, { WorkspaceItem } from '../../../workspace';

const propTypes = {
  /**
   * Callback function triggering when the workspace size changes.
   */
  onSizeChange: PropTypes.func,
  /**
   * Callback function triggering when the open state of workspace changes between true and false.
   */
  onPresentationStateChange: PropTypes.func,
  /**
   * Callback function triggering when the active workspace item changes.
   */
  onActiveItemChange: PropTypes.func,
  /**
   * The string key linked to the active workspace item.
   */
  initialActiveItemKey: PropTypes.string.isRequired,
  /**
   * WorkspaceItems to be rendered within the workspace.
   */
  children: PropTypes.node.isRequired,
  /**
   * Whether or not the workspace should initially display as open.
   */
  initialIsOpen: PropTypes.bool,
  /**
   * The size string value matching the active size option.
   */
  initialSize: PropTypes.object,
  /**
   * @private
   * Id string to apply to the workspace
   */
  id: PropTypes.string.isRequired,
  /**
   * @private
   * Whether or not the workspace is open
   */
  isOpen: PropTypes.bool,
  /**
   * @private
   * Function callback i.e. `onRequest(event)`
   */
  onRequestClose: PropTypes.func,
  /**
   * @private
   * Whether or not the workspace is present as an overlay
   */
  isPresentedAsOverlay: PropTypes.bool,
  /**
   * @private
   * Numeric scale value ranging from `0.0 - 1.0` as the minimum to maximum size for the workspace
   */
  sizeScalar: PropTypes.number,
  /**
   * @private
   * The string representation of the workspace size
   */
  activeSize: PropTypes.string,
  /**
   * @private
   * Array of objects containing key/text pairs for the available size options
   */
  sizeOptions: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })),
  /**
   * @private
   * Function callback i.e. `onRequestSizeChange(size)`
   */
  onRequestSizeChange: PropTypes.func,
};

const ApplicationNavigationWorkspace = ({
  // consumer props
  onSizeChange,
  onPresentationStateChange,
  onActiveItemChange,
  initialActiveItemKey,
  children,
  // These props are read by the parent to determine the controlled values to pass down.
  initialIsOpen, // eslint-disable-line no-unused-vars, react/no-unused-prop-types
  initialSize, // eslint-disable-line no-unused-vars, react/no-unused-prop-types

  // private injected props
  id,
  isOpen,
  onRequestClose,
  isPresentedAsOverlay,
  sizeScalar,
  activeSize,
  sizeOptions,
  onRequestSizeChange,
}) => {
  const [activeItemKey, setActiveItemKey] = React.useState(initialActiveItemKey);

  React.useEffect(() => {
    if (onSizeChange && sizeScalar !== undefined) {
      onSizeChange(sizeScalar);
    }
  }, [sizeScalar, onSizeChange]);

  React.useEffect(() => {
    if (onPresentationStateChange) {
      onPresentationStateChange(isOpen);
    }
  }, [isOpen, onPresentationStateChange]);

  React.useEffect(() => {
    if (onActiveItemChange) {
      onActiveItemChange(activeItemKey);
    }
  }, [activeItemKey, onActiveItemChange]);

  return (
    <Workspace
      id={id}
      activeItemKey={activeItemKey}
      onRequestActivate={itemKey => {
        setActiveItemKey(itemKey);
      }}
      activeSize={activeSize}
      sizeOptions={sizeOptions}
      onRequestSizeChange={onRequestSizeChange}
      onRequestDismiss={onRequestClose}
      dismissButtonIsVisible={isPresentedAsOverlay}
      isPresentedAsOverlay={isPresentedAsOverlay}
    >
      {children}
    </Workspace>
  );
};

ApplicationNavigationWorkspace.propTypes = propTypes;
ApplicationNavigationWorkspace.Item = WorkspaceItem;

export default ApplicationNavigationWorkspace;
