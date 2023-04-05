/* global TERRA_DEV_SITE_BASENAME */
// TERRA_DEV_SITE_BASENAME is defined by webpack
// This file is served from 404.html. This was implemented to allow the use of
// the browser router when content is served from gh-pages. Gh-pages will attempt to
// to return a 404.html file when a route is not found. We exploit that behavior by
// returning a 404 page that stores the requested path and redirects to index.html
// to allow the SPA router to handle the route.
// Store the not found window location in session storage

import getSessionStorage from './session';

if (getSessionStorage() !== undefined) {
  window.sessionStorage.redirect = window.location.href;
}

// Redirect to the base path. Once done react router will use the stored location to route SPA style.
window.location.pathname = `${TERRA_DEV_SITE_BASENAME}/`;
