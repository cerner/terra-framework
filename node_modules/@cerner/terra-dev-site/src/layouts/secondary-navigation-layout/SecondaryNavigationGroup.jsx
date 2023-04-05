import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  /**
   * The string description of the SecondaryNavigationGroup to display to the user.
   */
  label: PropTypes.string,
  /**
   * The child components to render within the SecondaryNavigationGroup.
   */
  children: PropTypes.node,
};

/**
 * The SecondaryNavigationGroup is used to define groups of secondary navigation items
 * using a declarative, Component-based API. It should only be provided as a child of the
 * SecondaryNavigationLayout or another SecondaryNavigationGroup.
 *
 * Note: The SecondaryNavigationGroup is **not** rendered to the DOM. Its props are
 * extracted by the SecondaryNavigationLayout to provide build information for the
 * secondary navigation list.
 */
const SecondaryNavigationGroup = ({
  label, // eslint-disable-line no-unused-vars
  children, // eslint-disable-line no-unused-vars
}) => <div />;

SecondaryNavigationGroup.propTypes = propTypes;

export default SecondaryNavigationGroup;
