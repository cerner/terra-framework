import { useLayoutEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import DisclosureManagerHeaderAdapterContext from './DisclosureManagerHeaderAdapterContext';

const propTypes = {
  /**
   * A title string to render within the DisclosureManager's header.
   */
  title: PropTypes.string,
  /**
   * An array of CollapsibleMenuView Items, Dividers, or Toggles to render within the DisclosureManager's header.
   */
  collapsibleMenuItems: PropTypes.element,
};

/**
 * A component used to register header data with the DisclosureManager.
 */
const DisclosureManagerHeaderAdapter = ({ title, collapsibleMenuView }) => {
  const adapterContext = useContext(DisclosureManagerHeaderAdapterContext);

  useLayoutEffect(() => {
    adapterContext.register({ title, collapsibleMenuView });
  }, [title, collapsibleMenuView]);

  return null;
};

DisclosureManagerHeaderAdapter.propTypes = propTypes;

export default DisclosureManagerHeaderAdapter;
