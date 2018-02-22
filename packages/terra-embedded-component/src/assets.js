/**
* Loads a stylsheet from the given url.
* @param {String} url - The url of the stylesheet to load.
* @return {Promise} that resolves when the stylesheet has been loaded.
*/
const loadStylesheet = url => new Promise((resolve) => {
  const stylesheet = document.createElement('link');
  stylesheet.setAttribute('rel', 'stylesheet');
  stylesheet.setAttribute('type', 'text/css');
  stylesheet.setAttribute('href', url);
  stylesheet.onload = () => resolve();
  document.head.appendChild(stylesheet);
});

/* eslint-disable import/prefer-default-export */
export { loadStylesheet };
