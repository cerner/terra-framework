import { useLayoutEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import DisclosureHeaderContext from './DisclosureManagerHeaderContext';

const propTypes = {
  /**
   * A title string to render within the DisclosureManager's header.
   */
  title: PropTypes.string,
  /**
   * An element to render within the DisclosureManager's header.
   */
  actions: PropTypes.node,
  /**
   * A boolean indicating whether or not the header's navigation controls should be disabled.
   */
  blockNavigation: PropTypes.bool,
};

/**
 * A component used to register header data with the DisclosureManager.
 */
const DisclosureManagerHeaderAdapter = ({ title, actions, blockNavigation }) => {
  const registerHeaderData = useContext(DisclosureHeaderContext);

  useLayoutEffect(() => {
    registerHeaderData({ title, actions, blockNavigation });
  }, [title, actions, blockNavigation]);

  return null;
};

DisclosureManagerHeaderAdapter.propTypes = propTypes;

export default DisclosureManagerHeaderAdapter;
