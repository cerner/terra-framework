import { createContext } from 'react';
import PropTypes from 'prop-types';

/**
 * A Context used to broadcast APIs for reading or manipulating the session storage entries
 * managed by the ApplicationSessionStorageProvider.
 */
const ApplicationSessionStorageContext = createContext();

const contextShape = PropTypes.shape({
  /**
   * A function used to add a new key/value or replace an existing value in the session store.
   * Ex. set(key, value)
   */
  set: PropTypes.func,
  /**
   * A function used to access the value associated to the given key.
   * Ex. get(key)
   */
  get: PropTypes.func,
  /**
   * A function used to delete the value associated to the given key.
   * Ex. remove(key)
   */
  remove: PropTypes.func,
});

export default ApplicationSessionStorageContext;
export { contextShape };
