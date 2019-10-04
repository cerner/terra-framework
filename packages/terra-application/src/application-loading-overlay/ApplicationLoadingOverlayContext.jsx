import { createContext } from 'react';
import PropTypes from 'prop-types';

const ApplicationLoadingOverlayContext = createContext();

const contextShape = PropTypes.shape({
  /**
   * A function that will present a loading overlay for the given key. The key should
   * be unique (namespace appropriately). If an overlay is already presented for the
   * key, no action is performed.
   * Ex. show(String key, Object data)
   */
  show: PropTypes.func,
  /**
   * A function that will remove the loading overlay for the given key. If no overlay
   * is presented, no action is performed.
   * Ex. hide(String key)
   */
  hide: PropTypes.func,
});

export default ApplicationLoadingOverlayContext;
export { contextShape };
