import React from 'react';
import PropTypes from 'prop-types';

/**
 * The PageIdentifierContext is a simple context used to identify Pages and
 * allow nested Pages to identify their ancestors.
 */
const PageIdentifierContext = React.createContext(undefined);

/**
 * A string identifier for the Page is provided as the context value.
 */
const contextShape = PropTypes.string;

export default PageIdentifierContext;
export { contextShape };
