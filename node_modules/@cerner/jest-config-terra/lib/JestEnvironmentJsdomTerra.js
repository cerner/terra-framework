const JsdomEnvironment = require('jest-environment-jsdom');
const JestMock = require('jest-mock');

/**
 * The TerraJsdomEnvironment extends the JsdomEnvironment to mock a couple of extra functions and set the dir attribute.
 */
class TerraJsdomEnvironment extends JsdomEnvironment {
  constructor(config, context) {
    super(config, context);

    // Prevent matchMedia error.
    this.dom.window.matchMedia = () => ({ matches: true });
    // Allow Scroll into view calls
    this.dom.window.HTMLElement.prototype.scrollIntoView = JestMock.fn();
    // Set dir attribute on the html element.
    const htmlTag = this.dom.window.document.getElementsByTagName('html')[0];
    htmlTag.setAttribute('dir', 'ltr');
  }
}

module.exports = TerraJsdomEnvironment;
