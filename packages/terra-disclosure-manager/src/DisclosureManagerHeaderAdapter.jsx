import { useLayoutEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import DisclosureManagerHeaderAdapterContext from './DisclosureManagerHeaderAdapterContext';

const propTypes = {
  /**
   * A title string to render within the DisclosureManager's header.
   */
  title: PropTypes.string,
  /**
   * A CollapsibleMenuView component to render within the DisclosureManager's header.
   */
  collapsibleMenuView: PropTypes.element,
};

/**
 * A component used to register header data with the DisclosureManager.
 */
const DisclosureManagerHeaderAdapter = ({ title, collapsibleMenuView }) => {
  const adapterContext = useContext(DisclosureManagerHeaderAdapterContext);

  useLayoutEffect(() => {
    setTimeout(() => {
      adapterContext.register({ title, collapsibleMenuView });
    }, 2000);
  }, [title, collapsibleMenuView, adapterContext]);

  return null;
};

DisclosureManagerHeaderAdapter.propTypes = propTypes;

export default DisclosureManagerHeaderAdapter;
