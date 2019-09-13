import { createContext } from 'react';
import PropTypes from 'prop-types';

const ApplicationLoadingOverlayContext = createContext();

const contextShape = PropTypes.shape({
  show: PropTypes.func,
  hide: PropTypes.func,
});

export default ApplicationLoadingOverlayContext;
export { contextShape };
