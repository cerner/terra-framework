(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[32663],{3355:function(e,t,n){"use strict";var r=n(24994),a=n(73738);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(17383)),l=r(n(34579)),i=r(n(28452)),u=r(n(63072)),c=r(n(29511)),f=r(n(96540)),p=r(n(5556)),s=n(28651),d=n(8604),m=r(n(94480)),g=r(n(79441)),b=r(n(54495)),y=r(n(23986)),_=r(n(67967)),h=r(n(25645)),v=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=O(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&{}.hasOwnProperty.call(e,l)){var i=o?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(r,l,i):r[l]=e[l]}return r.default=e,n&&n.set(e,r),r}(n(97787));function O(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(O=function(e){return e?n:t})(e)}function E(e,t,n){return t=(0,u.default)(t),(0,i.default)(e,P()?Reflect.construct(t,n||[],(0,u.default)(e).constructor):t.apply(e,n))}function P(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(P=function(){return!!e})()}var j=_.default.bind(h.default),w=function(e){var t=e.contentName;return f.default.createElement("div",null,"Page Content:"," ",t)};w.propTypes={contentName:p.default.string};var x=function(){return f.default.createElement(y.default,{text:"Extensions"})},S={menu:{"/page_1":{path:"/page_1",component:{default:{componentClass:v.RoutingMenu,props:{title:"Page 1 Menu",menuItems:[{text:"Item 1",path:"/page_1/item_1",hasSubMenu:!0},{text:"Item 2",path:"/page_1/item_2"}]}}}},"/page_1/item_1":{path:"/page_1/item_1",component:{default:{componentClass:v.RoutingMenu,props:{title:"Page 1 Item 1 Menu",menuItems:[{text:"Thing 1",path:"/page_1/item_1/thing_1"},{text:"Thing 2",path:"/page_1/item_1/thing_2"}]}}}}},content:{"/page_1":{path:"/page_1",component:{default:{componentClass:w,props:{contentName:"Page 1"}}}},"/page_2":{path:"/page_2",component:{default:{componentClass:w,props:{contentName:"Page 2"}}}},"/page_3":{path:"/page_3",component:{default:{componentClass:w,props:{contentName:"Page 3"}}}},"/page_4":{path:"/page_4",component:{default:{componentClass:w,props:{contentName:"Page 4"}}}},"/page_5":{path:"/page_5",component:{default:{componentClass:w,props:{contentName:"Page 5"}}}},"/page_6":{path:"/page_6",component:{default:{componentClass:w,props:{contentName:"Page 6"}}}},"/page_7":{path:"/page_7",component:{default:{componentClass:w,props:{contentName:"Page 7"}}}}}},N=[{path:"/page_1",text:"Page 1"},{path:"/page_2",text:"Page 2"},{path:"/page_3",text:"Page 3"},{path:"/page_4",text:"Page 4"},{path:"/page_5",text:"Page 5"},{path:"/page_6",text:"Page 6"},{path:"/page_7",text:"Page 7"}],k=f.default.createElement(g.default,{alt:"User, Test",initials:"TU",key:"user_avatar"}),A={name:"User, Test",detail:"User Detail",photo:k},C=Object.freeze({title:"Test Application",accessory:f.default.createElement(m.default,{variant:"rounded",src:"https://github.com/cerner/terra-framework/raw/main/terra.png",alt:"App logo",height:"26px",width:"26px"})}),I=function(e){function t(e){var n;return(0,o.default)(this,t),(n=E(this,t,[e])).state={checkboxItemEnabled:!1},n}return(0,c.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){var e=this.props.intl,t=this.state.checkboxItemEnabled,n=[{key:"additional-1",title:"Drill-in Item",childKeys:["additional-sub-1","additional-sub-2"],parentKey:v.Utils.utilityHelpers.defaultKeys.MENU},{key:"additional-sub-1",title:"Additional Item 1 - Sub 1",parentKey:"additional-1"},{key:"additional-sub-2",title:"Additional Item 1 - Sub 2",parentKey:"additional-1"},{key:"checkbox-item",title:"Custom Checkbox Item",isSelectable:!0,isSelected:t,parentKey:v.Utils.utilityHelpers.defaultKeys.MENU},{key:"read-only-item",title:"Custom Read-Only Item",id:"readonly",isReadOnly:!0,parentKey:v.Utils.utilityHelpers.defaultKeys.MENU},{key:"additional-3",contentLocation:v.Utils.utilityHelpers.locations.FOOTER,title:"Custom Footer",parentKey:v.Utils.utilityHelpers.defaultKeys.MENU}],r=Object.freeze({title:"Test, User",accessory:k,menuItems:v.Utils.utilityHelpers.getDefaultUtilityItems(e,A,n),initialSelectedKey:v.Utils.utilityHelpers.defaultKeys.MENU,onChange:function(){},onBlur:function(){}});return f.default.createElement(b.default,{fill:!0,id:"application-layout-test"},f.default.createElement(v.default,{nameConfig:C,utilityConfig:r,routingConfig:S,navigationItems:N,extensions:f.default.createElement(x,null),indexPath:"/page_1"}))}}])}(f.default.Component);I.propTypes={intl:p.default.shape({})};var M=(0,s.withRouter)((0,d.injectIntl)(I));t.default=function(){return f.default.createElement("div",{className:j("app-router")},f.default.createElement(s.MemoryRouter,null,f.default.createElement(M,null)))}},92420:function(e,t,n){"use strict";n.r(t),t.default={arrange:"Arrange-module__arrange___hY0Ml",fill:"Arrange-module__fill___m88eq",fit:"Arrange-module__fit___tv8j-",center:"Arrange-module__center___9qfhG",bottom:"Arrange-module__bottom___8beod",stretch:"Arrange-module__stretch___eQF-k",default:"Arrange-module__default___z+O29"}},25645:function(e,t,n){"use strict";n.r(t),t.default={"app-router":"ApplicationLayoutCommon-test-module__app-router___tIBx8"}},39496:function(e,t,n){"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.AlignmentTypes=void 0;var a=c(n(96540)),o=c(n(5556)),l=c(n(67967)),i=c(n(92420)),u=["fitStart","fill","fitEnd","align","alignFitStart","alignFill","alignFitEnd","fitStartAttributes","fillAttributes","fitEndAttributes"];function c(e){return e&&e.__esModule?e:{default:e}}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f.apply(this,arguments)}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n){var a;return a=function(e,t){if("object"!=r(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!=r(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"==r(a)?a:String(a))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}t.AlignmentTypes={CENTER:"center",BOTTOM:"bottom",STRETCH:"stretch"};var g=l.default.bind(i.default),b={fitStart:o.default.element,fill:o.default.element.isRequired,fitEnd:o.default.element,align:o.default.oneOf(["center","bottom","stretch"]),alignFitStart:o.default.oneOf(["center","bottom","stretch"]),alignFitEnd:o.default.oneOf(["center","bottom","stretch"]),alignFill:o.default.oneOf(["center","bottom","stretch"]),fitStartAttributes:o.default.object,fillAttributes:o.default.object,fitEndAttributes:o.default.object},y=function(e){var t=e.fitStart,n=e.fill,r=e.fitEnd,o=e.align,l=e.alignFitStart,i=e.alignFill,c=e.alignFitEnd,p=e.fitStartAttributes,d=e.fillAttributes,b=e.fitEndAttributes,y=m(e,u),_=s({},p),h=s({},d),v=s({},b);return a.default.createElement("span",f({},y,{className:g("arrange",y.className)}),a.default.createElement("span",f({},_,{className:g("fit",o||l,_.className,"fit-block")}),t),a.default.createElement("span",f({},h,{className:g("fill",o||i,h.className,"fill-block")}),n),a.default.createElement("span",f({},v,{className:g("fit",o||c,v.className)}),r))};y.propTypes=b;t.default=y},40495:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(96540)),a=o(n(25365));function o(e){return e&&e.__esModule?e:{default:e}}function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}var i=function(e){var t=l({},e);return r.default.createElement(a.default,t,r.default.createElement("path",{d:"M24 37.7 0 14.2l3.8-3.9L24 30l20.2-19.7 3.8 3.9z"}))};i.displayName="IconChevronDown",i.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=i},20220:function(e){var t=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'],n=t.join(","),r="undefined"==typeof Element?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector;function a(e,t){t=t||{};var a,l,i,f=[],p=[],s=e.querySelectorAll(n);for(t.includeContainer&&r.call(e,n)&&(s=Array.prototype.slice.apply(s)).unshift(e),a=0;a<s.length;a++)o(l=s[a])&&(0===(i=u(l))?f.push(l):p.push({documentOrder:a,tabIndex:i,node:l}));return p.sort(c).map((function(e){return e.node})).concat(f)}function o(e){return!(!l(e)||function(e){return function(e){return f(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t=e.ownerDocument.querySelectorAll('input[type="radio"][name="'+e.name+'"]'),n=function(e){for(var t=0;t<e.length;t++)if(e[t].checked)return e[t]}(t);return!n||n===e}(e)}(e)||u(e)<0)}function l(e){return!(e.disabled||function(e){return f(e)&&"hidden"===e.type}(e)||function(e){return null===e.offsetParent||"hidden"===getComputedStyle(e).visibility}(e))}a.isTabbable=function(e){if(!e)throw new Error("No node provided");return!1!==r.call(e,n)&&o(e)},a.isFocusable=function(e){if(!e)throw new Error("No node provided");return!1!==r.call(e,i)&&l(e)};var i=t.concat("iframe").join(",");function u(e){var t=parseInt(e.getAttribute("tabindex"),10);return isNaN(t)?function(e){return"true"===e.contentEditable}(e)?0:e.tabIndex:t}function c(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex}function f(e){return"INPUT"===e.tagName}e.exports=a}}]);