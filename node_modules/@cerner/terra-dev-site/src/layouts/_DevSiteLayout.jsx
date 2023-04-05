import React from 'react';
import PropTypes from 'prop-types';
import { useRouteMatch } from 'react-router-dom';

import DevSiteNavigationLayout from './_DevSiteNavigationLayout';
import RawLayout from './_RawLayout';
import siteConfigShape from '../site/siteConfigShapes';

const propTypes = {
  /**
   * The site config for the application.
   */
  siteConfig: siteConfigShape.isRequired,
  /**
   * An override component for a custom application base. Must render children and adhere to the terra application base api.
   */
  ApplicationNavigation: PropTypes.func,
};

const DevSiteLayout = ({ siteConfig, ApplicationNavigation }) => {
  const isRaw = useRouteMatch('/raw');

  if (isRaw) {
    return <RawLayout siteConfig={siteConfig} />;
  }
  return <DevSiteNavigationLayout siteConfig={siteConfig} ApplicationNavigation={ApplicationNavigation} />;
};

DevSiteLayout.propTypes = propTypes;

export default DevSiteLayout;
