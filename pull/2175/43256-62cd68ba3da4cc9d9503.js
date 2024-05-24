"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[43256],{45275:function(e,t,n){var l=n(24994),a=n(73738);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(85715)),u=l(n(43693)),i=l(n(41132)),o=g(n(96540)),c=g(n(79943)),f=n(33049),d=l(n(23986)),s=l(n(19992)),m=g(n(42112)),p=l(n(31056)),b=l(n(51393));function y(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(y=function(e){return e?n:t})(e)}function g(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=y(t);if(n&&n.has(e))return n.get(e);var l={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=r?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(l,u,i):l[u]=e[u]}return l.default=e,n&&n.set(e,l),l}function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){(0,u.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h=o.default.createElement(b.default,null),E=o.default.createElement(d.default,{text:"Learn more"}),_=o.default.createElement(s.default,{href:"https://www.cerner.com",text:"Documents"}),w=o.default.createElement(f.IconMultipleResultsNormal,{a11yLabel:"Results normal",height:"1.5em",width:"1.5em"}),S=o.default.createElement(f.IconMultipleResultsNotNormal,{a11yLabel:"Results not normal",height:"1.5em",width:"1.5em"}),C=o.default.createElement(f.IconMultipleResultsCritical,{a11yLabel:"Results critical",height:"1.5em",width:"1.5em"}),j=function(e,t,n){var l=t.findIndex((function(e){return(null==n?void 0:n.columnId)===e.id}));return(0,i.default)(e.map((function(e){return v(v({},e),{},{cells:(0,i.default)(e.cells.map((function(t,a){var r=!!((null==n?void 0:n.rowId)===e.id&&a===l)&&!t.isSelected;return v(v({},t),{},{isSelected:r})})))})})))},k=function(){var e=(0,o.useState)(!1),t=(0,r.default)(e,2),n=t[0],l=t[1],a=function(){return l(!n)};return n?o.default.createElement(d.default,{variant:"utility",text:"Unfavorite item",icon:o.default.createElement(f.IconFeatured,null),onClick:a}):o.default.createElement(d.default,{variant:"utility",text:"Favorite item",icon:o.default.createElement(f.IconFeaturedOff,null),onClick:a})},P=function(){var e=(0,o.useState)(!1),t=(0,r.default)(e,2),n=t[0],l=t[1],a=(0,o.useState)(null),u=(0,r.default)(a,2),c=u[0],f=u[1],s=(0,o.useRef)(null),b=(0,o.useCallback)((function(e){s.current=e}),[]),y=(0,o.useCallback)((function(){return s.current}),[]),g=(0,o.useCallback)((function(){l(!0)}),[]),O=(0,o.useCallback)((function(){l(!1)}),[]),v=(0,o.useCallback)((function(){O(),s.current.focus()}),[O]),h=(0,o.useCallback)((function(e){var t=(0,i.default)(c);e.currentTarget.checked?t.push(e.currentTarget.value):t.splice(t.indexOf(e.currentTarget.value),1),f(t)}),[c]);return o.default.createElement(o.default.Fragment,null,o.default.createElement(d.default,{id:"popup-button",text:"Clinical Suite",onClick:g,refCallback:b}),o.default.createElement(p.default,{isOpen:n,targetRef:y,onRequestClose:O,contentHeight:"auto"},o.default.createElement("div",{style:{padding:"1em"}},o.default.createElement(m.CheckboxField,{legend:"Do you want to use any of our clinical applications?"},o.default.createElement(m.default,{id:"drug-database",name:"applications[]",labelText:"Drug Database",onChange:h,value:"drug-database"}),o.default.createElement(m.default,{id:"vitals-collection",name:"applications[]",labelText:"Vitals Collection",onChange:h,value:"vitals-collection"}),o.default.createElement(m.default,{id:"immunization-manager",name:"applications[]",labelText:"Immunization Manager",onChange:h,value:"immunization-manager"})),o.default.createElement(d.default,{text:"Submit Request",onClick:v}))))},x=[{id:"row_1",cells:[{content:w},{content:"Discern Care Set (1)"},{content:h},{content:o.default.createElement(k,null)}]},{id:"row_2",cells:[{content:w},{content:"Initial Observation Care/Day High Severity 99220 (2)"},{content:E},{content:o.default.createElement(k,null)}]},{id:"row_3",cells:[{content:S},{content:"Arterial Sheath Care (3)"},{content:_},{content:o.default.createElement(k,null)}]},{id:"row_4",cells:[{content:" "},{content:"Sbsq Observation Care/Day High Severity 99226 (4)"},{content:o.default.createElement(P,null)},{content:o.default.createElement(k,null)}]},{id:"row_5",cells:[{content:C},{content:"Arterial Sheath Care (5)"},{content:_},{content:o.default.createElement(k,null)}]}],I=[{id:"Column-0",displayName:"Status",width:"50px",align:c.alignTypes.CENTER,isSelectable:!0},{id:"Column-1",displayName:"Service name",width:"210px",flexGrow:!0,maximumWidth:"350px",minimumWidth:"100px",isSelectable:!0},{id:"Column-2",displayName:"Details",width:"210px",align:c.alignTypes.RIGHT,isSelectable:!0},{id:"Column-3",displayName:"Featured",width:"50px",align:c.alignTypes.CENTER,isSelectable:!0}];t.default=function(){var e=(0,o.useState)(x),t=(0,r.default)(e,2),n=t[0],l=t[1],a=(0,o.useCallback)((function(e){var t=e.rowId,a=e.columnId;l(j(n,I,{rowId:t,columnId:a}))}),[n]),u=(0,o.useCallback)((function(){l(j(n,I))}),[n]);return o.default.createElement(c.default,{id:"compact-interactive-list-cell-content",ariaLabel:"Compact Interactive List",rows:n,columns:I,numberOfColumns:2,columnMinimumWidth:"234px",onCellSelect:a,onClearSelection:u,rowHeaderIndex:1,rowHeight:"60px"})}},51393:function(e,t,n){var l=n(24994),a=n(73738);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(85715)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=d(t);if(n&&n.has(e))return n.get(e);var l={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=r?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(l,u,i):l[u]=e[u]}return l.default=e,n&&n.set(e,l),l}(n(96540)),i=l(n(23986)),o=l(n(5556)),c=l(n(63276)),f=l(n(47479));function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(d=function(e){return e?n:t})(e)}var s={isArrowDisplayed:o.default.bool,contentWidth:o.default.string,boundingRef:o.default.func},m=function(e){var t=(0,u.useState)(!1),n=(0,r.default)(t,2),l=n[0],a=n[1],o=(0,u.useState)(!1),d=(0,r.default)(o,2),s=d[0],m=d[1],p=(0,u.useState)(!1),b=(0,r.default)(p,2),y=b[0],g=b[1],O=(0,u.useState)(!1),v=(0,r.default)(O,2),h=v[0],E=v[1],_=(0,u.useRef)();return u.default.createElement("div",null,u.default.createElement(c.default,{isOpen:l,targetRef:function(){return _.current},onRequestClose:function(){a(!1)},contentWidth:e.contentWidth,isArrowDisplayed:e.isArrowDisplayed,boundingRef:e.boundingRef,headerTitle:"Clinical Solution"},u.default.createElement(c.default.Item,{text:"Hospital Details",key:"Toggle1",className:"MenuItem1",isSelected:s,onClick:function(){m(!s)},isSelectable:!0}),u.default.createElement(c.default.Item,{text:"Our Offerings",key:"Offers",className:"MenuItem2",subMenuItems:[u.default.createElement(c.default.Item,{text:"Policies and Guidelines",key:"Policies",className:"SubMenuItem1",isToggled:y,onClick:function(){g(!y)},isToggleable:!0}),u.default.createElement(c.default.Item,{text:"Population Health Management",key:"Population",className:"SubMenuItem2",isToggled:h,onClick:function(){E(!h)},isToggleable:!0})]}),u.default.createElement(c.default.Item,{text:"Community, Critical Access & Specialty Hospital",key:"Nested2 disabled",className:"MenuItem3",isDisabled:!0,subMenuItems:[u.default.createElement(c.default.Item,{text:"Default 2.1",key:"2.1"}),u.default.createElement(c.default.Item,{text:"Default 2.2",key:"2.2"}),u.default.createElement(c.default.Item,{text:"Default 2.3",key:"2.3"})]})),u.default.createElement(i.default,{id:"menu-button",onClick:function(){a(!0)},text:"Clinical Solution","aria-haspopup":!0,icon:u.default.createElement(f.default,null),isReversed:!0,refCallback:function(e){_.current=e}}))};m.propTypes=s;t.default=m},92420:function(e,t,n){n.r(t),t.default={arrange:"Arrange-module__arrange___hY0Ml",fill:"Arrange-module__fill___m88eq",fit:"Arrange-module__fit___tv8j-",center:"Arrange-module__center___9qfhG",bottom:"Arrange-module__bottom___8beod",stretch:"Arrange-module__stretch___eQF-k",default:"Arrange-module__default___z+O29"}},39496:function(e,t,n){function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.AlignmentTypes=void 0;var a=c(n(96540)),r=c(n(5556)),u=c(n(67967)),i=c(n(92420)),o=["fitStart","fill","fitEnd","align","alignFitStart","alignFill","alignFitEnd","fitStartAttributes","fillAttributes","fitEndAttributes"];function c(e){return e&&e.__esModule?e:{default:e}}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},f.apply(this,arguments)}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t,n){var a;return a=function(e,t){if("object"!=l(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!=l(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"==l(a)?a:a+"")in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n={};for(var l in e)if(Object.prototype.hasOwnProperty.call(e,l)){if(t.indexOf(l)>=0)continue;n[l]=e[l]}return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}t.AlignmentTypes={CENTER:"center",BOTTOM:"bottom",STRETCH:"stretch"};var b=u.default.bind(i.default),y={fitStart:r.default.element,fill:r.default.element.isRequired,fitEnd:r.default.element,align:r.default.oneOf(["center","bottom","stretch"]),alignFitStart:r.default.oneOf(["center","bottom","stretch"]),alignFitEnd:r.default.oneOf(["center","bottom","stretch"]),alignFill:r.default.oneOf(["center","bottom","stretch"]),fitStartAttributes:r.default.object,fillAttributes:r.default.object,fitEndAttributes:r.default.object},g=function(e){var t=e.fitStart,n=e.fill,l=e.fitEnd,r=e.align,u=e.alignFitStart,i=e.alignFill,c=e.alignFitEnd,d=e.fitStartAttributes,m=e.fillAttributes,y=e.fitEndAttributes,g=p(e,o),O=s({},d),v=s({},m),h=s({},y);return a.default.createElement("span",f({},g,{className:b("arrange",g.className)}),a.default.createElement("span",f({},O,{className:b("fit",r||u,O.className,"fit-block")}),t),a.default.createElement("span",f({},v,{className:b("fill",r||i,v.className,"fill-block")}),n),a.default.createElement("span",f({},h,{className:b("fit",r||c,h.className)}),l))};g.propTypes=y;t.default=g}}]);