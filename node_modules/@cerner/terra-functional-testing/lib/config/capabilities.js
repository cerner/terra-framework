/**
 * This file contains the capability configurations for each supported browser.
 */

module.exports = {
  chrome: {
    browserName: 'chrome',
    maxInstances: 1,
    'goog:chromeOptions': {
      /**
       * Run in headless mode because Chrome 69+ cannot be resized to the tiny viewport due to a omnibox size change
       * made by the chrome team. See https://bugs.chromium.org/p/chromedriver/issues/detail?id=2626#c1 &&
       * https://bugs.chromium.org/p/chromium/issues/detail?id=849784.
       *
       * Headless Chrome: https://developers.google.com/web/updates/2017/04/headless-chrome
       */
      args: ['--headless', '--disable-gpu']
    }
  },
  firefox: {
    browserName: 'firefox',
    maxInstances: 1,
    'moz:firefoxOptions': {
      prefs: {
        'dom.disable_beforeunload': false
      }
    }
  },
  ie: {
    browserName: 'internet explorer',
    maxInstances: 1,
    'se:ieOptions': {
      javascriptEnabled: true,
      locationContextEnabled: true,
      handlesAlerts: true,
      rotatable: true
    }
  }
};