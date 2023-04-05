import Application from './application';
import logger from '../lib/logger';

class Provider {
  init(config) {
    const enforceSecurity = config.secret || config.acls.some((x) => x !== '*');

    // Set hidden attribute with script if not present and security is being enforced
    if (enforceSecurity && window.self !== window.top && !(document.documentElement.hasAttribute && document.documentElement.hasAttribute('hidden'))) {
      document.documentElement.setAttribute('hidden', null);

      // WARNING: Setting hidden attribute with script can be countered by
      // hackers using iframe sandbox attribute OR a frame busting technique.
      logger.warn('Security warning: Hidden attribute not detected on document and has been added.');
    }

    this.application = new Application();
    this.application.init(config);
    this.application.launch();
  }

  on(eventName, listener) {
    this.application.on(eventName, listener);
  }

  fullscreen(source) {
    this.application.fullscreen(source);
  }

  httpError(error) {
    this.application.httpError(error);
  }

  trigger(event, detail) {
    this.application.trigger(event, detail);
  }

  loadPage(url) {
    this.application.loadPage(url);
  }

  invoke(jsonRPCFunction, args) {
    return this.application.invoke(jsonRPCFunction, args);
  }
}

export default Provider;
