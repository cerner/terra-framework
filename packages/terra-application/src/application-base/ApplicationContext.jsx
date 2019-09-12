import { createContext } from 'react';
import PropTypes from 'prop-types';

const ApplicationContext = createContext();

const contextShape = PropTypes.shape({
  /**
   * A String specifying the consuming Application's display name. This can be used to compose
   * application-specific messages by the application contents.
   */
  appName: PropTypes.string,
  /**
   * A String specifying the consuming the location pathname at which the consuming application
   * is being served.
   */
  baseUrl: PropTypes.string,
});

export default ApplicationContext;
export { contextShape };
