"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[52190],{69540:function(e,t,l){var r=l(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(l(43693)),n=r(l(85715)),a=r(l(96540)),i=l(33049),c=r(l(80251));function u(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,r)}return l}function f(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?u(Object(l),!0).forEach((function(t){(0,o.default)(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):u(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}var s={title:"Documents",items:[{id:"item-1-level-1",label:"Information",icon:a.default.createElement(i.IconDocuments,null)},{id:"item-2-level-1",label:"Projects - 2023",icon:a.default.createElement(i.IconDocuments,null),isSelectable:!1},{id:"item-3-level-1",label:"Projects - 2023",isSelectable:!1,items:[{id:"item-1-level-2-1",label:"Project Data - October",icon:a.default.createElement(i.IconDocuments,null)},{id:"item-2-level-2-1",label:"Project Data - November",icon:a.default.createElement(i.IconDocuments,null)},{id:"item-3-level-2-1",label:"Project Data - December",icon:a.default.createElement(i.IconDocuments,null)},{id:"item-4-level-2-1",label:"Tests",isSelectable:!1,items:[{id:"item-1-level-3-1",label:"Very Very Very Very Very Very Very Long Name Test",icon:a.default.createElement(i.IconDocuments,null)},{id:"item-2-level-3-1",label:"Even Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooonger Name Test",icon:a.default.createElement(i.IconDocuments,null)}]}]},{id:"item-4-level-1",label:"Projects - 2024",icon:a.default.createElement(i.IconDocuments,null)},{id:"item-5-level-1",label:"Projects - 2024",isSelectable:!1,items:[{id:"item-1-level-2-2",label:"Project Data - January",icon:a.default.createElement(i.IconDocuments,null)}]}]},d={"item-3-level-1":!1,"item-4-level-2-1":!1,"item-5-level-1":!1};t.default=function(){var e=a.default.useState(""),t=(0,n.default)(e,2),l=t[0],r=t[1],i=a.default.useState(d),u=(0,n.default)(i,2),b=u[0],m=u[1];return a.default.createElement("div",{id:"folder-tree-selection"},a.default.createElement(c.default,{title:s.title,onExpandAll:function(){var e=f({},b);Object.keys(e).forEach((function(t){e[t]=!0})),m(e)},onCollapseAll:function(){var e=f({},b);Object.keys(e).forEach((function(t){e[t]=!1})),m(e)}},function e(t){if(t){var n=[];return t.forEach((function(t){n.push(a.default.createElement(c.default.Item,{key:t.id,label:t.label,icon:t.icon,subfolderItems:e(t.items),isExpanded:b[t.id],isSelectable:t.isSelectable,isSelected:l===t.id,onSelect:function(){r(t.id)},onToggle:function(){var e,l;e=t.id,l=f(f({},b),{},(0,o.default)({},e,!b[e])),m(l)}}))})),n}return null}(s.items)))}},92420:function(e,t,l){l.r(t),t.default={arrange:"Arrange-module__arrange___hY0Ml",fill:"Arrange-module__fill___m88eq",fit:"Arrange-module__fit___tv8j-",center:"Arrange-module__center___9qfhG",bottom:"Arrange-module__bottom___8beod",stretch:"Arrange-module__stretch___eQF-k",default:"Arrange-module__default___z+O29"}},60288:function(e,t,l){l.r(t),t.default={"clinical-lowlight-theme":"Toolbar-module__clinical-lowlight-theme___lhZh0","orion-fusion-theme":"Toolbar-module__orion-fusion-theme___Oq6Xn",toolbar:"Toolbar-module__toolbar___XowP8",item:"Toolbar-module__item___K92Xb","start-align":"Toolbar-module__start-align___Ap05A","end-align":"Toolbar-module__end-align___WLp5E","center-align":"Toolbar-module__center-align___5f+ex"}},39496:function(e,t,l){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.AlignmentTypes=void 0;var o=u(l(96540)),n=u(l(5556)),a=u(l(67967)),i=u(l(92420)),c=["fitStart","fill","fitEnd","align","alignFitStart","alignFill","alignFitEnd","fitStartAttributes","fillAttributes","fitEndAttributes"];function u(e){return e&&e.__esModule?e:{default:e}}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e},f.apply(this,arguments)}function s(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,r)}return l}function d(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?s(Object(l),!0).forEach((function(t){b(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):s(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function b(e,t,l){var o;return o=function(e,t){if("object"!=r(e)||!e)return e;var l=e[Symbol.toPrimitive];if(void 0!==l){var o=l.call(e,t||"default");if("object"!=r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"==r(o)?o:String(o))in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function m(e,t){if(null==e)return{};var l,r,o=function(e,t){if(null==e)return{};var l,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)l=n[r],t.indexOf(l)>=0||(o[l]=e[l]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)l=n[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(o[l]=e[l])}return o}t.AlignmentTypes={CENTER:"center",BOTTOM:"bottom",STRETCH:"stretch"};var p=a.default.bind(i.default),_={fitStart:n.default.element,fill:n.default.element.isRequired,fitEnd:n.default.element,align:n.default.oneOf(["center","bottom","stretch"]),alignFitStart:n.default.oneOf(["center","bottom","stretch"]),alignFitEnd:n.default.oneOf(["center","bottom","stretch"]),alignFill:n.default.oneOf(["center","bottom","stretch"]),fitStartAttributes:n.default.object,fillAttributes:n.default.object,fitEndAttributes:n.default.object},y=function(e){var t=e.fitStart,l=e.fill,r=e.fitEnd,n=e.align,a=e.alignFitStart,i=e.alignFill,u=e.alignFitEnd,s=e.fitStartAttributes,b=e.fillAttributes,_=e.fitEndAttributes,y=m(e,c),g=d({},s),O=d({},b),v=d({},_);return o.default.createElement("span",f({},y,{className:p("arrange",y.className)}),o.default.createElement("span",f({},g,{className:p("fit",n||a,g.className,"fit-block")}),t),o.default.createElement("span",f({},O,{className:p("fill",n||i,O.className,"fill-block")}),l),o.default.createElement("span",f({},v,{className:p("fit",n||u,v.className)}),r))};y.propTypes=_;t.default=y},6740:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=f(l(96540)),o=f(l(5556)),n=f(l(46942)),a=f(l(67967)),i=f(l(23695)),c=f(l(60288)),u=["align","ariaControls","ariaLabel","ariaLabelledBy","children"];function f(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e},s.apply(this,arguments)}function d(e,t){if(null==e)return{};var l,r,o=function(e,t){if(null==e)return{};var l,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)l=n[r],t.indexOf(l)>=0||(o[l]=e[l]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)l=n[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(o[l]=e[l])}return o}var b=a.default.bind(c.default),m={align:o.default.oneOf(["start","end","center"]),ariaControls:o.default.string,ariaLabel:o.default.string,ariaLabelledBy:o.default.string,children:o.default.node},p=function(e){var t=e.align,l=e.ariaControls,o=e.ariaLabel,a=e.ariaLabelledBy,c=e.children,f=d(e,u),m=r.default.useContext(i.default),p=(0,n.default)(b("toolbar","".concat(t,"-align"),m.className),f.className),_=r.default.Children.map(c,(function(e){return e?r.default.createElement("div",{className:b("item")},e):e}));return r.default.createElement("div",s({},f,{"aria-controls":l,"aria-label":a?void 0:o,"aria-labelledby":a,className:p,role:"toolbar"}),_)};p.propTypes=m,p.defaultProps={align:"start"};t.default=p}}]);