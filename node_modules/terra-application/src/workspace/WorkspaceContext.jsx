import { createContext } from 'react';
import PropTypes from 'prop-types';

/**
 * The WorkspaceContext provides information about the Workspace's state to
 * each WorkspaceItem and the content therein.
 */
const WorkspaceContext = createContext();

const contextShape = {
  /**
   * A boolean indicating whether or not the contents of a WorkspaceItem are
   * currently active and visible.
   */
  isActive: PropTypes.bool,
};

export default WorkspaceContext;
export { contextShape };
