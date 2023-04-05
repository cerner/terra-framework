/**
 * Polyfill for stable ES6 features. Compile with @babel/preset-env to limit
 * included features to what is necessary for a project's browserslist definition.
 */
import 'core-js/stable';

/**
 * Standalone runtime for Regenerator-compiled generator and async functions.
 */
import 'regenerator-runtime';

/**
 * Polyfill for Fetch, defined at the global scope.
 */
import 'whatwg-fetch';

/**
 * Polyfill for AbortController, necessary to abort Fetch requests, defined at
 * the global scope.
 */
import 'abortcontroller-polyfill';

/**
 * Polyfill for [MutationObserver](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver)
 * necessary for inert polyfill.
 */
import 'mutationobserver-shim';

/**
 * Polyfill for [Node.contains](https://developer.mozilla.org/en-US/docs/Web/API/Node/contains)
 * necessary for inert polyfill.
 */
import './polyfills/contains-polyfill';

/**
 * Polyfill for [Element.matches](https://developer.mozilla.org/en-US/docs/Web/API/Element/matches)
 * necessary for inert polyfill.
 */
import './polyfills/matches-polyfill';

/**
 * Polyfill for [HTMLElement.inert](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/inert).
 */
import './polyfills/inert-polyfill';

/**
 * Polyfill for [Intl](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl).
 */
import './polyfills/intl-polyfill';
