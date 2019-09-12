import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';
import ApplicationIntlContext from './ApplicationIntlContext';

const propTypes = {
  /**
   * The components to render within the context of the IntlProvider. Components rendered here are able to use
   * the following Contexts:
   * - `ApplicationIntlContext` for access to i18n and translation APIs
   */
  children: PropTypes.node,
  /**
   * @private
   * The Object containing react-intl APIs.
   */
  intl: intlShape,
};

/**
 * TODO: This will be unnecessary after the transition to react-intl v3
 */
const ApplicationIntlProvider = injectIntl(({ children, intl }) => (
  <ApplicationIntlContext.Provider value={intl}>
    {children}
  </ApplicationIntlContext.Provider>
));

ApplicationIntlProvider.propTypes = propTypes;

export default ApplicationIntlProvider;
