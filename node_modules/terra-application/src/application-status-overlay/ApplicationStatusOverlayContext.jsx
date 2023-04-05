import { createContext } from 'react';
import PropTypes from 'prop-types';

const ApplicationStatusOverlayContext = createContext();

const contextShape = PropTypes.shape({
  /**
   * A function that will present a status view for the given key.
   * The key should be unique (namespace appropriately).
   * If a status view is already presented for the key, no action is performed.
   * Ex. show(String key, Object data)
   */
  show: PropTypes.func,
  /**
   * A function that will remove the status view for the given key.
   * If no status view is presented, no action is performed.
   * Ex. hide(String key)
   */
  hide: PropTypes.func,
});

export default ApplicationStatusOverlayContext;
export { contextShape };
