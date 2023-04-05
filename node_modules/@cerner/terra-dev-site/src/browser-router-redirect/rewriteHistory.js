// This file works in concert with the gh-pages 404 redirect SPA strategy.
// This file should be included in head.
// Read href stored by redirect.js from the 404.html page.

import getSessionStorage from './session';

if (getSessionStorage() !== undefined) {
  const { redirect } = window.sessionStorage;

  delete sessionStorage.redirect;

  // If we have a href and it is not the current location...
  if (redirect && redirect !== window.location.href) {
  // Replace the current history state with the intended href location.
    window.history.replaceState(null, null, redirect);
  }
}
