import React from 'react';
import {
  useLocation, useRouteMatch, Redirect,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { sitesShape, routesMapShape } from './siteConfigShapes';
import getSessionStorage from '../browser-router-redirect/session';

const propTypes = {
  /**
   * The site config for the application.
   */
  sites: sitesShape.isRequired,
  /**
   * The map of routes to redirect to
   */
  routesMap: routesMapShape.isRequired,
  /**
   * Children
   */
  children: PropTypes.node.isRequired,
};

const DevSiteRouter = ({
  sites,
  routesMap,
  children,
}) => {
  const isRoot = useRouteMatch('/');
  const location = useLocation();

  // Remove # Route if at root.
  if (isRoot && location.hash.startsWith('#/')) {
    return (
      <Redirect to={`/${location.hash.slice(2)}`} />
    );
  }

  const pathname = location.pathname.toLocaleLowerCase();

  // Redirect to reserved routes other sites.
  const reservedExternalApp = sites.find((site) => pathname.startsWith(`/${site.path}`));

  if (reservedExternalApp) {
    if (getSessionStorage() !== undefined) {
      window.sessionStorage.redirect = window.location.href;
    }
    window.location.pathname = reservedExternalApp.url;
    return null;
  }

  // Redirect to exact path from
  const pathWithoutTrailingSlash = pathname.length !== 1 && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
  const primaryNavPath = routesMap[pathWithoutTrailingSlash];

  if (primaryNavPath) {
    return <Redirect to={primaryNavPath} />;
  }

  return (children);
};

DevSiteRouter.propTypes = propTypes;

export default DevSiteRouter;
