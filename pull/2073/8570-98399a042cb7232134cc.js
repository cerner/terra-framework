(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[8570],{28710:function(e,t,n){"use strict";var a=n(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(96540)),r=n(28651),u=a(n(63707)),c={header:{"/":{path:"/",component:{default:{componentClass:function(){return o.default.createElement("div",null,o.default.createElement("div",{className:"test-header"},"Header"),o.default.createElement(r.Link,{to:"/page1",className:"page-1-link"},"Page 1"),o.default.createElement(r.Link,{to:"/page2",className:"page-2-link"},"Page 2"),o.default.createElement(r.Link,{to:"/page3",className:"page-3-link"},"Page 3"))}}}}},menu:{"/page1":{path:"/page1",component:{tiny:{componentClass:function(){return o.default.createElement("div",{className:"test-menu"},"Tiny Menu")}},medium:{componentClass:function(){return o.default.createElement("div",{className:"test-menu"},"Medium Menu")}},huge:{componentClass:function(){return o.default.createElement("div",{className:"test-menu"},"Huge Menu")}}}},"/page2":{path:"/page2",component:{default:{componentClass:function(){return o.default.createElement("div",{className:"test-menu"},"Menu")}},huge:{componentClass:function(){return o.default.createElement("div",{className:"test-menu-huge"},"Huge Menu")}}}}},content:{"/page1":{path:"/page1",component:{default:{componentClass:function(){return o.default.createElement("div",{className:"page-1-content"},"Page 1 Content")}}}},"/page2":{path:"/page2",component:{default:{componentClass:function(){return o.default.createElement("div",{className:"page-2-content"},"Page 2 Content")}}}},"/page3":{path:"/page3",component:{default:{componentClass:function(){return o.default.createElement("div",{className:"page-3-content"},"Page 3 Content")}}}}}};t.default=function(){return o.default.createElement(r.MemoryRouter,{initialEntries:["/page1","/page2","/page3"],initialIndex:0},o.default.createElement(u.default,{config:c,menuText:"Menu",id:"test-root"}))}},35423:function(e,t,n){"use strict";var a=n(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.supportedComponentBreakpoints=t.routePropType=t.routeConfigPropType=t.processedRoutesPropType=t.navigationLayoutConfigPropType=t.componentConfigPropType=void 0;var o=a(n(73738)),r=a(n(5556)),u=t.supportedComponentBreakpoints=["tiny","small","medium","large","huge"],c=t.componentConfigPropType=r.default.objectOf((function(e,t,n,a,r){if(!("default"===t||u.indexOf(t)>=0))return new Error("Invalid prop '".concat(r,"' supplied to '").concat(n,"'. Validation failed."));var c=e[t],l=!0;return null!==c&&("object"!==(0,o.default)(c)||!c.componentClass||"object"!==(0,o.default)(c.props)&&null!==c.props&&void 0!==c.props)&&(l=!1),!!l||new Error("Invalid prop '".concat(r,"' supplied to '").concat(n,"'. Validation failed."))})),l=t.routePropType=r.default.shape({path:function(e,t,n){return!!/\/.*/.test(e[t])||new Error("Invalid prop `".concat(t,"` supplied to")+" `".concat(n,"`. Validation failed. ").concat(t," must start with a forward slash (/)."))},component:c.isRequired}),i=t.routeConfigPropType=r.default.objectOf(l);t.navigationLayoutConfigPropType=r.default.shape({header:i,menu:i,content:i}),t.processedRoutesPropType=r.default.arrayOf(r.default.shape({path:r.default.string,componentClass:r.default.func,componentProps:r.default.object}))},20220:function(e){var t=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'],n=t.join(","),a="undefined"==typeof Element?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector;function o(e,t){t=t||{};var o,u,c,p=[],d=[],s=e.querySelectorAll(n);for(t.includeContainer&&a.call(e,n)&&(s=Array.prototype.slice.apply(s)).unshift(e),o=0;o<s.length;o++)r(u=s[o])&&(0===(c=l(u))?p.push(u):d.push({documentOrder:o,tabIndex:c,node:u}));return d.sort(i).map((function(e){return e.node})).concat(p)}function r(e){return!(!u(e)||function(e){return function(e){return p(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t=e.ownerDocument.querySelectorAll('input[type="radio"][name="'+e.name+'"]'),n=function(e){for(var t=0;t<e.length;t++)if(e[t].checked)return e[t]}(t);return!n||n===e}(e)}(e)||l(e)<0)}function u(e){return!(e.disabled||function(e){return p(e)&&"hidden"===e.type}(e)||function(e){return null===e.offsetParent||"hidden"===getComputedStyle(e).visibility}(e))}o.isTabbable=function(e){if(!e)throw new Error("No node provided");return!1!==a.call(e,n)&&r(e)},o.isFocusable=function(e){if(!e)throw new Error("No node provided");return!1!==a.call(e,c)&&u(e)};var c=t.concat("iframe").join(",");function l(e){var t=parseInt(e.getAttribute("tabindex"),10);return isNaN(t)?function(e){return"true"===e.contentEditable}(e)?0:e.tabIndex:t}function i(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex}function p(e){return"INPUT"===e.tagName}e.exports=o}}]);