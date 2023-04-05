import { EventEmitter } from 'events';
import JSONRPC from 'jsonrpc-dispatch';
import logger from '../lib/logger';
import URI from '../lib/uri';

/**
 * Application container class which represents an application frame hosting
 * an app on a 3rd party domain.
 */
class Frame extends EventEmitter {
  constructor(props) {
    super(props);

    // Binds 'this' for methods called internally
    this.handleProviderMessage = this.handleProviderMessage.bind(this);
    this.initIframeResizer = this.initIframeResizer.bind(this);
    this.send = this.send.bind(this);
    this.cleanup = this.cleanup.bind(this);
    this.load = this.load.bind(this);
  }

  /**
  * @param {object} container - The DOM node to append the application frame to.
  * @param {string} source - The url source of the application
  * @param {object} options - An optional parameter that contains a set of optional configs
  */
  init(container, source, {
    secret = null, resizeConfig = {}, iframeAttrs = {}, customMethods = {},
  } = {}) {
    this.source = source;
    this.container = container;
    this.iframe = null;
    this.iframeAttrs = iframeAttrs;
    this.wrapper = null;
    this.origin = new URI(this.source).origin;
    this.secret = secret;
    this.resizeConfig = resizeConfig;

    const self = this;
    this.JSONRPC = new JSONRPC(
      self.send,
      ({
        launch() {
          self.wrapper.setAttribute('data-status', 'launched');
          self.emit('xfc.launched');
          return Promise.resolve();
        },

        authorized(detail = {}) {
          self.wrapper.setAttribute('data-status', 'authorized');
          self.emit('xfc.authorized', detail);
          self.initIframeResizer();
          return Promise.resolve();
        },

        unload(detail = {}) {
          self.wrapper.setAttribute('data-status', 'unloaded');
          self.emit('xfc.unload', detail);
          return Promise.resolve();
        },

        resize(height = null, width = null) {
          if (typeof resizeConfig.customCalculationMethod === 'function') {
            resizeConfig.customCalculationMethod.call(self.iframe);
            return Promise.resolve();
          }

          if (height) {
            self.iframe.style.height = height;
          }

          if (width) {
            self.iframe.style.width = width;
          }
          return Promise.resolve();
        },

        event(event, detail) {
          self.emit(event, detail);
          return Promise.resolve();
        },

        authorizeConsumer() {
          return Promise.resolve('hello');
        },

        challengeConsumer() {
          return Promise.resolve(self.secret);
        },

        loadPage(url) {
          self.load(url);
          return Promise.resolve();
        },
        ...customMethods,
      }),
    );
  }

  initIframeResizer() {
    let config = this.resizeConfig;

    // If user chooses to use fixedHeight or fixedWidth,
    // set height/width to the specified value and keep unchanged.
    if (config.fixedHeight || config.fixedWidth) {
      if (config.fixedHeight) {
        this.iframe.style.height = config.fixedHeight;
      }
      if (config.fixedWidth) {
        this.iframe.style.width = config.fixedWidth;
      }
    } else {
      // If user chooses to update iframe dynamically,
      // replace customCalculationMethod by a boolean indicator
      // in config because method is not transferrable.
      if (typeof config.customCalculationMethod === 'function') {
        config = { ...config };
        config.customCal = true;
        delete config.customCalculationMethod;
      }
      this.JSONRPC.notification('resize', [config]);
    }
  }

  /**
  * Mount this application onto its container and initiate resize sync.
  */
  mount() {
    if (this.iframe) return;

    // Set up listener for all incoming communication
    window.addEventListener('message', this.handleProviderMessage);

    this.wrapper = document.createElement('div');
    this.wrapper.className = 'xfc';
    this.wrapper.setAttribute('data-status', 'mounted');
    this.container.appendChild(this.wrapper);

    const iframe = document.createElement('iframe');
    iframe.src = this.source;
    if (!this.resizeConfig.scrolling) {
      iframe.style.overflow = 'hidden';
      iframe.scrolling = 'no';
    }

    // Put custom attributes on iframe if specified
    Object.entries(this.iframeAttrs).forEach(([key, value]) => {
      iframe.setAttribute(key, value);
    });

    this.iframe = iframe;
    this.wrapper.appendChild(iframe);

    this.emit('xfc.mounted');
  }

  /**
   * Unmount this application from its container
   */
  unmount() {
    if (this.wrapper.parentNode === this.container) {
      this.container.removeChild(this.wrapper);
      this.emit('xfc.unmounted');
      this.cleanup();
    }
  }

  /**
   * Cleans up unused message listeners and references of detached nodes
   */
  cleanup() {
    // Remove listener for all incoming communication
    window.removeEventListener('message', this.handleProviderMessage);

    // Sets references of detached nodes to null to avoid potential memory leak
    this.iframe = null;
    this.wrapper = null;
  }

  /**
   * Loads a new page within existing frame.
   * @param  {string} url - the URL of new page to load.
   */
  load(url) {
    this.origin = new URI(url).origin;
    this.source = url;
    this.wrapper.setAttribute('data-status', 'mounted');
    this.iframe.src = url; // Triggers the loading of new page
  }

  /**
  * Handles an incoming message event by processing the JSONRPC request
  * @param {object} event - The emitted message event.
  */
  handleProviderMessage(event) {
    // 1. This isn't a JSONRPC message or iframe is null, exit.
    if (!event.data.jsonrpc || !this.iframe) return;

    // 2. Identify the app the message came from.
    if (this.iframe.contentWindow !== event.source) return;

    // For Chrome, the origin property is in the event.originalEvent object.
    // Update origin so it can be used to post back to this frame.
    this.origin = event.origin || event.originalEvent.origin;

    logger.log('<< consumer', event.origin, event.data);

    // 3. Send a response, if any, back to the app.
    this.JSONRPC.handle(event.data);
  }

  /**
  * Post the given message to the application frame.
  * @param {object} message - The message to post.
  * See: https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage
  */
  send(message) {
    if (message) {
      logger.log('>> consumer', this.origin, message);
      this.iframe.contentWindow.postMessage(message, this.origin);
    }
  }

  /**
  * Triggers an event within the embedded application.
  * @param {string} event - The event name to trigger.
  * @param {object} detail - The data context to send with the event.
  */
  trigger(event, detail) {
    this.JSONRPC.notification('event', [event, detail]);
  }

  /**
  * Calls an event in the parent application.
  * @param {string} method - The event name to trigger.
  * @param {array} args - params to be sent to the event.
  */
  invoke(method, args = []) {
    return this.JSONRPC.request(method, args);
  }
}

export default Frame;
