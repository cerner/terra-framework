(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[93255],{73966:function(e,t,n){"use strict";var a=n(64836),r=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(56690)),i=a(n(89728)),l=a(n(61655)),u=a(n(94993)),c=a(n(73808)),p=a(n(67294)),s=a(n(45697)),f=n(39711),d=n(25387),m=a(n(86442)),y=a(n(70362)),h=a(n(10027)),g=a(n(55281)),b=a(n(47166)),_=a(n(87262)),v=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=x(t);if(n&&n.has(e))return n.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=o?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(a,i,l):a[i]=e[i]}a.default=e,n&&n.set(e,a);return a}(n(18428));function x(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(x=function(e){return e?n:t})(e)}function E(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,c.default)(e);if(t){var r=(0,c.default)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return(0,u.default)(this,n)}}var k=b.default.bind(_.default),C=function(e){var t=e.contentName;return p.default.createElement("div",null,"Page Content:"," ",t)};C.propTypes={contentName:s.default.string};var I=function(){return p.default.createElement(g.default,{text:"Extensions"})},N={menu:{"/page_1":{path:"/page_1",component:{default:{componentClass:v.RoutingMenu,props:{title:"Page 1 Menu",menuItems:[{text:"Item 1",path:"/page_1/item_1",hasSubMenu:!0},{text:"Item 2",path:"/page_1/item_2"}]}}}},"/page_1/item_1":{path:"/page_1/item_1",component:{default:{componentClass:v.RoutingMenu,props:{title:"Page 1 Item 1 Menu",menuItems:[{text:"Thing 1",path:"/page_1/item_1/thing_1"},{text:"Thing 2",path:"/page_1/item_1/thing_2"}]}}}}},content:{"/page_1":{path:"/page_1",component:{default:{componentClass:C,props:{contentName:"Page 1"}}}},"/page_2":{path:"/page_2",component:{default:{componentClass:C,props:{contentName:"Page 2"}}}},"/page_3":{path:"/page_3",component:{default:{componentClass:C,props:{contentName:"Page 3"}}}},"/page_4":{path:"/page_4",component:{default:{componentClass:C,props:{contentName:"Page 4"}}}},"/page_5":{path:"/page_5",component:{default:{componentClass:C,props:{contentName:"Page 5"}}}},"/page_6":{path:"/page_6",component:{default:{componentClass:C,props:{contentName:"Page 6"}}}},"/page_7":{path:"/page_7",component:{default:{componentClass:C,props:{contentName:"Page 7"}}}}}},P=p.default.createElement(y.default,{alt:"User, Test",initials:"TU",key:"user_avatar"}),w={name:"User, Test",detail:"User Detail",photo:P},M=Object.freeze({title:"Test Application",accessory:p.default.createElement(m.default,{variant:"rounded",src:"https://github.com/cerner/terra-framework/raw/main/terra.png",alt:"App logo",height:"26px",width:"26px"})}),O=function(e){(0,l.default)(n,e);var t=E(n);function n(e){var a;return(0,o.default)(this,n),(a=t.call(this,e)).state={checkboxItemEnabled:!1},a}return(0,i.default)(n,[{key:"render",value:function(){var e=this.props.intl,t=this.state.checkboxItemEnabled,n=[{key:"additional-1",title:"Drill-in Item",childKeys:["additional-sub-1","additional-sub-2"],parentKey:v.Utils.utilityHelpers.defaultKeys.MENU},{key:"additional-sub-1",title:"Additional Item 1 - Sub 1",parentKey:"additional-1"},{key:"additional-sub-2",title:"Additional Item 1 - Sub 2",parentKey:"additional-1"},{key:"checkbox-item",title:"Custom Checkbox Item",isSelectable:!0,isSelected:t,parentKey:v.Utils.utilityHelpers.defaultKeys.MENU},{key:"additional-3",contentLocation:v.Utils.utilityHelpers.locations.FOOTER,title:"Custom Footer",parentKey:v.Utils.utilityHelpers.defaultKeys.MENU}],a=Object.freeze({title:"Test, User",accessory:P,menuItems:v.Utils.utilityHelpers.getDefaultUtilityItems(e,w,n),initialSelectedKey:v.Utils.utilityHelpers.defaultKeys.MENU,onChange:function(){}});return p.default.createElement(h.default,{fill:!0,id:"application-layout-test"},p.default.createElement(v.default,{nameConfig:M,utilityConfig:a,routingConfig:N,extensions:p.default.createElement(I,null),indexPath:"/page_1"}))}}]),n}(p.default.Component);O.propTypes={intl:s.default.shape({})};var U=(0,f.withRouter)((0,d.injectIntl)(O)),j=function(){return p.default.createElement("div",{className:k("app-router")},p.default.createElement(f.MemoryRouter,null,p.default.createElement(U,null)))};t.default=j},87262:function(e,t,n){"use strict";n.r(t),t.default={"app-router":"ApplicationLayoutCommon-test-module__app-router___tIBx8"}},34760:function(e){var t=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'],n=t.join(","),a="undefined"==typeof Element?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector;function r(e,t){t=t||{};var r,i,l,p=[],s=[],f=e.querySelectorAll(n);for(t.includeContainer&&a.call(e,n)&&(f=Array.prototype.slice.apply(f)).unshift(e),r=0;r<f.length;r++)o(i=f[r])&&(0===(l=u(i))?p.push(i):s.push({documentOrder:r,tabIndex:l,node:i}));return s.sort(c).map((function(e){return e.node})).concat(p)}function o(e){return!(!i(e)||function(e){return function(e){return p(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t=e.ownerDocument.querySelectorAll('input[type="radio"][name="'+e.name+'"]'),n=function(e){for(var t=0;t<e.length;t++)if(e[t].checked)return e[t]}(t);return!n||n===e}(e)}(e)||u(e)<0)}function i(e){return!(e.disabled||function(e){return p(e)&&"hidden"===e.type}(e)||function(e){return null===e.offsetParent||"hidden"===getComputedStyle(e).visibility}(e))}r.isTabbable=function(e){if(!e)throw new Error("No node provided");return!1!==a.call(e,n)&&o(e)},r.isFocusable=function(e){if(!e)throw new Error("No node provided");return!1!==a.call(e,l)&&i(e)};var l=t.concat("iframe").join(",");function u(e){var t=parseInt(e.getAttribute("tabindex"),10);return isNaN(t)?function(e){return"true"===e.contentEditable}(e)?0:e.tabIndex:t}function c(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex}function p(e){return"INPUT"===e.tagName}e.exports=r}}]);