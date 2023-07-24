"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[94871],{22863:function(e,a,n){var t=n(64836);a.Z=void 0;var r=t(n(67294)),l=t(n(45697)),d=t(n(47166)),i=t(n(17422)),m=d.default.bind(i.default),o={name:l.default.string.isRequired,src:l.default.string,url:l.default.string,version:l.default.string.isRequired},u=function(e){var a=e.src,n=e.name,t=e.url,l=e.version,d=r.default.createElement("a",{className:m("badge"),href:t||"https://www.npmjs.org/package/".concat(n,"/v/").concat(l)},r.default.createElement("span",{className:m("badge-name")},t?"package":"npm"),r.default.createElement("span",{className:m("badge-version")},"v".concat(l))),i=a?r.default.createElement("a",{className:m("badge"),href:a},r.default.createElement("span",{className:m("badge-name")},"github"),r.default.createElement("span",{className:m("badge-version")},"source")):void 0;return r.default.createElement("div",{className:m("badge-container")},d,i)};u.propTypes=o;var s=u;a.Z=s},94871:function(e,a,n){n.r(a),n.d(a,{default:function(){return g}});var t=n(87462),r=n(44925),l=n(67294),d=n(81254),i=n(22863),m=function(e){var a=e.url;return l.createElement(i.Z,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-worklist-data-grid",name:"terra-worklist-data-grid",version:"0.3.0",url:a})},o=["components"],u={},s="wrapper";function p(e){var a=e.components,n=(0,r.Z)(e,o);return(0,d.mdx)(s,(0,t.Z)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"changelog"},"Changelog"),(0,d.mdx)("h2",{id:"unreleased"},"Unreleased"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Added",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Added ability to select rows via mouse and keyboard.")))),(0,d.mdx)("h2",{id:"030---july-19-2023"},"0.3.0 - (July 19, 2023)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Breaking Changes"),(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Removed ",(0,d.mdx)("inlineCode",{parentName:"li"},"columnWidth")," prop in favor of the new ",(0,d.mdx)("inlineCode",{parentName:"li"},"defaultColumnWidth")," prop."),(0,d.mdx)("li",{parentName:"ul"},"Renamed ",(0,d.mdx)("inlineCode",{parentName:"li"},"ariaLabelledby")," prop to ",(0,d.mdx)("inlineCode",{parentName:"li"},"ariaLabelledBy")," to follow proper camelCasing and for consistency with other Terra components."))),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Added"),(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Added additional keyboard navigation shortcuts."),(0,d.mdx)("li",{parentName:"ul"},"Added support for cell selection."),(0,d.mdx)("li",{parentName:"ul"},"Added ability to resize columns via mouse."),(0,d.mdx)("li",{parentName:"ul"},"Added ",(0,d.mdx)("inlineCode",{parentName:"li"},"defaultColumnWidth")," prop to set the default column width if it is not set per column."),(0,d.mdx)("li",{parentName:"ul"},"Added ",(0,d.mdx)("inlineCode",{parentName:"li"},"onColumnResize")," prop for notifying consumers of a column resize."))),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Changed"),(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Updated data grid to honor the column and row widths specified by consumers."),(0,d.mdx)("li",{parentName:"ul"},"Optimized package size by excluding tests.")))),(0,d.mdx)("h2",{id:"020---july-4-2023"},"0.2.0 - (July 4, 2023)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Added"),(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Added masked cell support."),(0,d.mdx)("li",{parentName:"ul"},"Added hover state for selectable cells."),(0,d.mdx)("li",{parentName:"ul"},"Added blank cell support."),(0,d.mdx)("li",{parentName:"ul"},"Added ability to allow consumers to specify the sort indicator and error state for columns."))),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Changed"),(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Removed ability to set variable row heights."),(0,d.mdx)("li",{parentName:"ul"},"Updated styling on cell focus.")))),(0,d.mdx)("h2",{id:"01"},"0.1"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Initial stable release.")))}p.isMDXComponent=!0;var c=["components"],f={},x="wrapper";function g(e){var a=e.components,n=(0,r.Z)(e,c);return(0,d.mdx)(x,(0,t.Z)({},f,n,{components:a,mdxType:"MDXLayout"}),(0,d.mdx)(m,{mdxType:"Badge"}),(0,d.mdx)(p,{mdxType:"ChangeLog"}))}g.isMDXComponent=!0},17422:function(e,a,n){n.r(a),a.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},87462:function(e,a,n){function t(){return t=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},t.apply(this,arguments)}n.d(a,{Z:function(){return t}})},44925:function(e,a,n){function t(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(a,{Z:function(){return t}})}}]);