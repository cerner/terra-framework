import PropTypes from 'prop-types';
import ApplicationTabs from './tabs/ApplicationTabs';

const ApplicationLinksPropType = PropTypes.arrayOf(PropTypes.shape({
  /**
   * The id to append to the link.
   */
  id: PropTypes.string,
  /**
   * The path to push to the route.
   */
  path: PropTypes.string.isRequired,
  /**
   * The display text for the link.
   */
  text: PropTypes.string.isRequired,
}));

const ApplicationLinks = {
  ApplicationTabs,
  ApplicationLinksPropType,
};

export default ApplicationLinks;
export { ApplicationTabs, ApplicationLinksPropType };
