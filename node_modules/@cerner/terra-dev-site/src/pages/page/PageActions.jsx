import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable react/no-unused-prop-types */
const propTypes = {
  /**
   * The PageAction elements to render for the Page.
   */
  children: PropTypes.node,
};
/* eslint-enable react/no-unused-prop-types */

/**
 * The PageActions component allows Page consumers to define visible actions
 * using JSX. The Page will parse props from  PageActions and present a
 * variety of controls for the actions depending on Page constraints.
 *
 * The PageActions component should not be rendered directly.
 */
const PageActions = () => <React.Fragment />;

PageActions.propTypes = propTypes;

export default PageActions;
