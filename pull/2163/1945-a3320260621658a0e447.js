"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[1945],{30359:function(e,t,r){var n=r(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(r(85715)),a=n(r(96540)),o=n(r(67967)),i=r(33049),u=n(r(80251)),f=n(r(41698)),c=o.default.bind(f.default);t.default=function(){var e=a.default.useState(""),t=(0,l.default)(e,2),r=t[0],n=t[1];return a.default.createElement("div",{id:"wrapped-label-folder-tree",className:c("content-wrapper")},a.default.createElement(u.default,{title:"Documents",key:"documents"},a.default.createElement(u.default.Item,{label:"long_long_long_long_long_long_long_long_long_long_long_long_long_long_long_long_name_test.txt",icon:a.default.createElement(i.IconDocuments,null),key:"long-name-test",isSelected:"long-name-test"===r,onSelect:function(){n("long-name-test")}})))}},92420:function(e,t,r){r.r(t),t.default={arrange:"Arrange-module__arrange___hY0Ml",fill:"Arrange-module__fill___m88eq",fit:"Arrange-module__fit___tv8j-",center:"Arrange-module__center___9qfhG",bottom:"Arrange-module__bottom___8beod",stretch:"Arrange-module__stretch___eQF-k",default:"Arrange-module__default___z+O29"}},60288:function(e,t,r){r.r(t),t.default={"clinical-lowlight-theme":"Toolbar-module__clinical-lowlight-theme___lhZh0","orion-fusion-theme":"Toolbar-module__orion-fusion-theme___Oq6Xn",toolbar:"Toolbar-module__toolbar___XowP8",item:"Toolbar-module__item___K92Xb","start-align":"Toolbar-module__start-align___Ap05A","end-align":"Toolbar-module__end-align___WLp5E","center-align":"Toolbar-module__center-align___5f+ex"}},41698:function(e,t,r){r.r(t),t.default={"content-wrapper":"FolderTreeCommon-module__content-wrapper___-Qod9"}},39496:function(e,t,r){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.AlignmentTypes=void 0;var l=f(r(96540)),a=f(r(5556)),o=f(r(67967)),i=f(r(92420)),u=["fitStart","fill","fitEnd","align","alignFitStart","alignFill","alignFitEnd","fitStartAttributes","fillAttributes","fitEndAttributes"];function f(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c.apply(this,arguments)}function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t,r){var l;return l=function(e,t){if("object"!=n(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var l=r.call(e,t||"default");if("object"!=n(l))return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"==n(l)?l:l+"")in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}t.AlignmentTypes={CENTER:"center",BOTTOM:"bottom",STRETCH:"stretch"};var m=o.default.bind(i.default),g={fitStart:a.default.element,fill:a.default.element.isRequired,fitEnd:a.default.element,align:a.default.oneOf(["center","bottom","stretch"]),alignFitStart:a.default.oneOf(["center","bottom","stretch"]),alignFitEnd:a.default.oneOf(["center","bottom","stretch"]),alignFill:a.default.oneOf(["center","bottom","stretch"]),fitStartAttributes:a.default.object,fillAttributes:a.default.object,fitEndAttributes:a.default.object},p=function(e){var t=e.fitStart,r=e.fill,n=e.fitEnd,a=e.align,o=e.alignFitStart,i=e.alignFill,f=e.alignFitEnd,d=e.fitStartAttributes,b=e.fillAttributes,g=e.fitEndAttributes,p=_(e,u),y=s({},d),O=s({},b),v=s({},g);return l.default.createElement("span",c({},p,{className:m("arrange",p.className)}),l.default.createElement("span",c({},y,{className:m("fit",a||o,y.className,"fit-block")}),t),l.default.createElement("span",c({},O,{className:m("fill",a||i,O.className,"fill-block")}),r),l.default.createElement("span",c({},v,{className:m("fit",a||f,v.className)}),n))};p.propTypes=g;t.default=p},6740:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=c(r(96540)),l=c(r(5556)),a=c(r(46942)),o=c(r(67967)),i=c(r(23695)),u=c(r(60288)),f=["align","ariaControls","ariaLabel","ariaLabelledBy","children"];function c(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},d.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var b=o.default.bind(u.default),_={align:l.default.oneOf(["start","end","center"]),ariaControls:l.default.string,ariaLabel:l.default.string,ariaLabelledBy:l.default.string,children:l.default.node},m=function(e){var t=e.align,r=e.ariaControls,l=e.ariaLabel,o=e.ariaLabelledBy,u=e.children,c=s(e,f),_=n.default.useContext(i.default),m=(0,a.default)(b("toolbar","".concat(t,"-align"),_.className),c.className),g=n.default.Children.map(u,(function(e){return e?n.default.createElement("div",{className:b("item")},e):e}));return n.default.createElement("div",d({},c,{"aria-controls":r,"aria-label":o?void 0:l,"aria-labelledby":o,className:m,role:"toolbar"}),g)};m.propTypes=_,m.defaultProps={align:"start"};t.default=m}}]);