import './inertStyles.scss';
import 'mutationobserver-shim';
import '../../utils/polyfills/_contains-polyfill';
import '../../utils/polyfills/_matches-polyfill';

/**
 * Components within the framework utilize the inert property (https://html.spec.whatwg.org/multipage/interaction.html#inert)
 * to build accessible interactions with modal or otherwise disclosed content. Support for the inert property is not uniform
 * across the framework's supported browsers, so a polyfill is added on an as-need basis to ensure feature parity.
 */
function initializeInert() {
  const inertId = 'inert-style';
  /**
   * We manually check whether the inert polyfill is necessary so as to
   * not to add the inert style link unnecessarily.
   */
  // eslint-disable-next-line no-prototype-builtins
  if (HTMLElement.prototype.hasOwnProperty('inert') || document.getElementById(inertId)) {
    return;
  }

  /**
   * We create a link whose presence indicates that the polyfill should not create
   * inline inert styles in the document. This prevents certain issues with strict CSP settings:
   * https://github.com/WICG/inert#strict-content-security-policy
   */
  const inertStyleLink = document.createElement('link');
  inertStyleLink.id = inertId;

  const styleLinkParent = document.head || document.body;
  styleLinkParent.appendChild(inertStyleLink);

  // eslint-disable-next-line global-require
  require('wicg-inert/dist/inert');
}

initializeInert();
