import React from 'react';
import PropTypes from 'prop-types';

/**
 * The default value for the BannerRegistrationContext includes a flag to indicate that the value is the default value,
 * which can be used to detect whether any matching context Providers are rendered. Also included are no-op implementations
 * for register/unregisterBanner to minimize branching logic in the context consumers.
 */
export default React.createContext();

export const BannerRegistrationContextValueShape = PropTypes.shape({
  registerNotificationBanner: PropTypes.func.isRequired,
  unregisterNotificationBanner: PropTypes.func.isRequired,
});
