import { createContext } from 'react';
import PropTypes from 'prop-types';

/**
 * The NavigationItemContext provides children of a NavigationItem data
 * regarding the item's current activation state as well as the structure of
 * navigation hierarchy at the location that the context is being accessed.
 */
const NavigationItemContext = createContext({
  // isActive is defaulted to true so that components that are not descendants
  // of a NavigationItem are always known to be active.
  isActive: true,
  navigationKeys: [],
});

const contextShape = {
  /**
   * A boolean indicating whether or not the NavigationItem is active. If a
   * NavigationItem is not active, it is neither visible nor interactive.
   */
  isActive: PropTypes.bool,
  /**
   * An array of NavigationItem keys indicating the presence and order of the
   * NavigationItems that are ancestors to the component consuming the context.
   */
  navigationKeys: PropTypes.arrayOf(PropTypes.string),
};

export default NavigationItemContext;
export { contextShape };
