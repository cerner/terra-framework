(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[28120],{39597:function(e,t,n){"use strict";var o=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(67294)),u=o(n(19845)),r=o(n(4546)),l=o(n(80817)),c=o(n(84104)),d=o(n(41643)),i=u.default.bind(d.default);t.default=function(){return a.default.createElement(r.default,{className:i("layout-test"),key:"layout-no-header",menu:a.default.createElement(l.default,null),menuText:"Menu Text",id:"test-root"},a.default.createElement(c.default,null))}},84104:function(e,t,n){"use strict";var o=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(67294)),u=o(n(45697)),r=o(n(19845)),l=o(n(46186)),c=r.default.bind(l.default),d={layoutConfig:u.default.object},i=function(e){var t=e.layoutConfig;return a.default.createElement("div",{id:"test-content",className:c("content-wrapper1")},a.default.createElement("div",{className:c("content-wrapper2")},a.default.createElement("h2",{className:c("content-text")},"Content"),t.toggleMenu&&a.default.createElement("button",{type:"button",className:c("test-content-toggle"),onClick:t.toggleMenu},"Toggle Menu")))};i.propTypes=d;t.default=i},80817:function(e,t,n){"use strict";var o=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(67294)),u=o(n(45697)),r=o(n(19845)),l=o(n(46186)),c=r.default.bind(l.default),d={layoutConfig:u.default.object},i=function(e){var t=e.layoutConfig;return a.default.createElement("div",{id:"test-menu",className:c("content-wrapper1")},a.default.createElement("div",{className:c("content-wrapper2")},a.default.createElement("h2",{className:c("content-text")},"Menu"),t.toggleMenu&&a.default.createElement("button",{type:"button",className:c("test-menu-toggle"),onClick:t.toggleMenu},"Toggle Menu")))};i.propTypes=d;t.default=i},41643:function(e,t,n){"use strict";n.r(t),t.default={"panel-content":"TestLayoutCommon-module__panel-content___11P0K","layout-slide-panel-content":"TestLayoutCommon-module__layout-slide-panel-content___005M-","content-wrapper":"TestLayoutCommon-module__content-wrapper___rNhg8","layout-test":"TestLayoutCommon-module__layout-test___vmcFP"}},46186:function(e,t,n){"use strict";n.r(t),t.default={"content-wrapper1":"LayoutTestCommon-module__content-wrapper1___Bg5D6","content-wrapper2":"LayoutTestCommon-module__content-wrapper2___MLV9d","content-text":"LayoutTestCommon-module__content-text___aUCzs","test-content-toggle":"LayoutTestCommon-module__test-content-toggle___dqiBK","test-menu-toggle":"LayoutTestCommon-module__test-menu-toggle___KH3eQ"}},15059:function(e){var t=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'],n=t.join(","),o="undefined"==typeof Element?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector;function a(e,t){t=t||{};var a,r,l,i=[],s=[],f=e.querySelectorAll(n);for(t.includeContainer&&o.call(e,n)&&(f=Array.prototype.slice.apply(f)).unshift(e),a=0;a<f.length;a++)u(r=f[a])&&(0===(l=c(r))?i.push(r):s.push({documentOrder:a,tabIndex:l,node:r}));return s.sort(d).map((function(e){return e.node})).concat(i)}function u(e){return!(!r(e)||function(e){return function(e){return i(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t=e.ownerDocument.querySelectorAll('input[type="radio"][name="'+e.name+'"]'),n=function(e){for(var t=0;t<e.length;t++)if(e[t].checked)return e[t]}(t);return!n||n===e}(e)}(e)||c(e)<0)}function r(e){return!(e.disabled||function(e){return i(e)&&"hidden"===e.type}(e)||function(e){return null===e.offsetParent||"hidden"===getComputedStyle(e).visibility}(e))}a.isTabbable=function(e){if(!e)throw new Error("No node provided");return!1!==o.call(e,n)&&u(e)},a.isFocusable=function(e){if(!e)throw new Error("No node provided");return!1!==o.call(e,l)&&r(e)};var l=t.concat("iframe").join(",");function c(e){var t=parseInt(e.getAttribute("tabindex"),10);return isNaN(t)?function(e){return"true"===e.contentEditable}(e)?0:e.tabIndex:t}function d(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex}function i(e){return"INPUT"===e.tagName}e.exports=a}}]);