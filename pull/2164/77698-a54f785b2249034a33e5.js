"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[77698],{44448:function(e,t,n){var r=n(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(n(43693)),a=r(n(85715)),o=r(n(96540)),c=n(33049),i=r(n(80251));function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,l.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.default=function(){var e=o.default.useState(""),t=(0,a.default)(e,2),n=t[0],r=t[1],u=o.default.useState({projects:!1,tests:!1}),s=(0,a.default)(u,2),d=s[0],b=s[1],m=function(e){var t=f(f({},d),{},(0,l.default)({},e,!d[e]));b(t)};return o.default.createElement("div",{id:"basic-folder-tree"},o.default.createElement(i.default,{title:"Documents",key:"documents",onExpandAll:function(){var e=f({},d);Object.keys(e).forEach((function(t){e[t]=!0})),b(e)},onCollapseAll:function(){var e=f({},d);Object.keys(e).forEach((function(t){e[t]=!1})),b(e)}},o.default.createElement(i.default.Item,{label:"info.txt",icon:o.default.createElement(c.IconDocuments,null),key:"info",isSelected:"info"===n,onSelect:function(){r("info")}}),o.default.createElement(i.default.Item,{label:"projects_2023.txt",icon:o.default.createElement(c.IconDocuments,null),key:"projects_2023",isSelected:"projects_2023"===n,onSelect:function(){r("projects_2023")}}),o.default.createElement(i.default.Item,{label:"Projects",key:"projects",isSelected:"projects"===n,isExpanded:d.projects,onSelect:function(){r("projects")},onToggle:function(){m("projects")},subfolderItems:[o.default.createElement(i.default.Item,{label:"project_data1.txt",icon:o.default.createElement(c.IconDocuments,null),key:"project_data1",isSelected:"project_data1"===n,onSelect:function(){r("project_data1")}}),o.default.createElement(i.default.Item,{label:"project_data2.txt",icon:o.default.createElement(c.IconDocuments,null),key:"project_data2",isSelected:"project_data2"===n,onSelect:function(){r("project_data2")}}),o.default.createElement(i.default.Item,{label:"Tests",key:"tests",isSelected:"tests"===n,isExpanded:d.tests,onSelect:function(){r("tests")},onToggle:function(){m("tests")},icon:o.default.createElement(c.IconDocuments,null),subfolderItems:[o.default.createElement(i.default.Item,{label:"very_very_very_very_very_very_very_long_name_test.txt",icon:o.default.createElement(c.IconDocuments,null),key:"long-name-test",isSelected:"long-name-test"===n,onSelect:function(){r("long-name-test")}}),o.default.createElement(i.default.Item,{label:"test.txt",icon:o.default.createElement(c.IconDocuments,null),key:"test",isSelected:"test"===n,onSelect:function(){r("test")}}),o.default.createElement(i.default.Item,{label:"even_longer_long_long_long_long_long_long_long_long_long_long_long_long_name_test.txt",icon:o.default.createElement(c.IconDocuments,null),key:"longer-name-test",isSelected:"longer-name-test"===n,onSelect:function(){r("longer-name-test")}})]})]})))}},92420:function(e,t,n){n.r(t),t.default={arrange:"Arrange-module__arrange___hY0Ml",fill:"Arrange-module__fill___m88eq",fit:"Arrange-module__fit___tv8j-",center:"Arrange-module__center___9qfhG",bottom:"Arrange-module__bottom___8beod",stretch:"Arrange-module__stretch___eQF-k",default:"Arrange-module__default___z+O29"}},60288:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Toolbar-module__clinical-lowlight-theme___lhZh0","orion-fusion-theme":"Toolbar-module__orion-fusion-theme___Oq6Xn",toolbar:"Toolbar-module__toolbar___XowP8",item:"Toolbar-module__item___K92Xb","start-align":"Toolbar-module__start-align___Ap05A","end-align":"Toolbar-module__end-align___WLp5E","center-align":"Toolbar-module__center-align___5f+ex"}},39496:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.AlignmentTypes=void 0;var l=u(n(96540)),a=u(n(5556)),o=u(n(67967)),c=u(n(92420)),i=["fitStart","fill","fitEnd","align","alignFitStart","alignFill","alignFitEnd","fitStartAttributes","fillAttributes","fitEndAttributes"];function u(e){return e&&e.__esModule?e:{default:e}}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f.apply(this,arguments)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t,n){var l;return l=function(e,t){if("object"!=r(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var l=n.call(e,t||"default");if("object"!=r(l))return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"==r(l)?l:l+"")in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}t.AlignmentTypes={CENTER:"center",BOTTOM:"bottom",STRETCH:"stretch"};var _=o.default.bind(c.default),p={fitStart:a.default.element,fill:a.default.element.isRequired,fitEnd:a.default.element,align:a.default.oneOf(["center","bottom","stretch"]),alignFitStart:a.default.oneOf(["center","bottom","stretch"]),alignFitEnd:a.default.oneOf(["center","bottom","stretch"]),alignFill:a.default.oneOf(["center","bottom","stretch"]),fitStartAttributes:a.default.object,fillAttributes:a.default.object,fitEndAttributes:a.default.object},g=function(e){var t=e.fitStart,n=e.fill,r=e.fitEnd,a=e.align,o=e.alignFitStart,c=e.alignFill,u=e.alignFitEnd,s=e.fitStartAttributes,b=e.fillAttributes,p=e.fitEndAttributes,g=m(e,i),y=d({},s),O=d({},b),j=d({},p);return l.default.createElement("span",f({},g,{className:_("arrange",g.className)}),l.default.createElement("span",f({},y,{className:_("fit",a||o,y.className,"fit-block")}),t),l.default.createElement("span",f({},O,{className:_("fill",a||c,O.className,"fill-block")}),n),l.default.createElement("span",f({},j,{className:_("fit",a||u,j.className)}),r))};g.propTypes=p;t.default=g},6740:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=f(n(96540)),l=f(n(5556)),a=f(n(46942)),o=f(n(67967)),c=f(n(23695)),i=f(n(60288)),u=["align","ariaControls","ariaLabel","ariaLabelledBy","children"];function f(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function d(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var b=o.default.bind(i.default),m={align:l.default.oneOf(["start","end","center"]),ariaControls:l.default.string,ariaLabel:l.default.string,ariaLabelledBy:l.default.string,children:l.default.node},_=function(e){var t=e.align,n=e.ariaControls,l=e.ariaLabel,o=e.ariaLabelledBy,i=e.children,f=d(e,u),m=r.default.useContext(c.default),_=(0,a.default)(b("toolbar","".concat(t,"-align"),m.className),f.className),p=r.default.Children.map(i,(function(e){return e?r.default.createElement("div",{className:b("item")},e):e}));return r.default.createElement("div",s({},f,{"aria-controls":n,"aria-label":o?void 0:l,"aria-labelledby":o,className:_,role:"toolbar"}),p)};_.propTypes=m,_.defaultProps={align:"start"};t.default=_}}]);