"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[60017],{82457:function(e,t,n){var i=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=i(n(67294)),r=i(n(45697)),k=n(25387),a=i(n(57927)),u={items:r.default.arrayOf(r.default.shape({key:r.default.string,text:r.default.string,title:r.default.string,href:r.default.string,onClick:r.default.func})),intl:r.default.shape({formatMessage:r.default.func}).isRequired},f=function(e){var t=e.items,n=e.intl,i=t.slice(0,t.length-1),r=t[t.length-1];return l.default.createElement(a.default,{isReversedChildrenOrder:!0,useHorizontalIcon:!0,isStartAligned:!0,iconText:n.formatMessage({id:"Terra.file-path.icon.text"})},i.map((function(e){return[l.default.createElement(a.default.Hyperlink,{key:e.key,text:e.text,title:e.title,href:e.href,onClick:e.onClick}),l.default.createElement(a.default.Divider,{useChevronRightIcon:!0,key:"divider-".concat(e.key)})]})).flat(),l.default.createElement(a.default.Item,{isTextOnly:!0,text:r.text,key:r.key}))};f.propTypes=u;t.default=(0,k.injectIntl)(f)},60017:function(e,t,n){var i=n(64836),l=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(27424)),k=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var n=u(t);if(n&&n.has(e))return n.get(e);var i={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var k in e)if("default"!==k&&Object.prototype.hasOwnProperty.call(e,k)){var a=r?Object.getOwnPropertyDescriptor(e,k):null;a&&(a.get||a.set)?Object.defineProperty(i,k,a):i[k]=e[k]}return i.default=e,n&&n.set(e,i),i}(n(67294)),a=i(n(82457));function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(u=function(e){return e?n:t})(e)}t.default=function(){var e=(0,k.useState)("Nothing"),t=(0,r.default)(e,2),n=t[0],i=t[1],l=function(e){return function(){i(e)}},u=[{key:"link-0",text:"Link 0",onClick:l("Link 0")},{key:"link-1",text:"Link 1",onClick:l("Link 1")},{key:"link-2",text:"Link 2",onClick:l("Link 2")},{key:"link-3",text:"Link 3",onClick:l("Link 3")},{key:"link-4",text:"Link 4",onClick:l("Link 4")},{key:"link-5",text:"Link 5",onClick:l("Link 5")},{key:"link-6",text:"Link 6",onClick:l("Link 6")},{key:"link-7",text:"Link 7",onClick:l("Link 7")},{key:"link-8",text:"Link 8",onClick:l("Link 8")},{key:"link-9",text:"Link 9",onClick:l("Link 9")},{key:"link-10",text:"Link 10",onClick:l("Link 10")},{key:"link-11",text:"Link 11",onClick:l("Link 11")},{key:"link-12",text:"Link 12",onClick:l("Link 12")}];return k.default.createElement(k.default.Fragment,null,k.default.createElement(a.default,{items:u}),k.default.createElement("h1",{style:{textAlign:"right"}},"".concat(n," clicked!")))}}}]);