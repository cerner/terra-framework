import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';

import ApplicationIntlContext from './ApplicationIntlContext';

const propTypes = {
  /**
   * The components to render within the context of the ApplicationIntlProvider.
   */
  children: PropTypes.node,
  /**
   * @private
   * The Object containing react-intl APIs.
   */
  intl: intlShape,
};

const ApplicationIntlProvider = injectIntl(({ children, intl }) => (
  <ApplicationIntlContext.Provider value={intl}>
    {children}
  </ApplicationIntlContext.Provider>
));

ApplicationIntlProvider.propTypes = propTypes;

export default ApplicationIntlProvider;
