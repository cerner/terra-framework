import { createContext } from 'react';
import PropTypes from 'prop-types';

const ApplicationLoadingOverlayContext = createContext();

const contextShape = PropTypes.shape({
  showLoadingIndicator: PropTypes.func,
  hideLoadingIndicator: PropTypes.func,
});

export default ApplicationLoadingOverlayContext;
export { contextShape };
