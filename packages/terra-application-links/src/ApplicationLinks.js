import PropTypes from 'prop-types';
import ApplicationTabs from './tabs/ApplicationTabs';

const ApplicationLinksPropType = PropTypes.arrayOf(PropTypes.shape({
  id: PropTypes.string,
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}));

const ApplicationLinks = {
  ApplicationTabs,
  ApplicationLinksPropType,
};

export default ApplicationLinks;
export { ApplicationTabs, ApplicationLinksPropType };
