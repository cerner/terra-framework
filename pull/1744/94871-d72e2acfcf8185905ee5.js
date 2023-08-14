"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[94871],{22863:function(e,a,n){var t=n(64836);a.Z=void 0;var l=t(n(67294)),r=t(n(45697)),d=t(n(47166)),i=t(n(17422)),m=d.default.bind(i.default),o={name:r.default.string.isRequired,src:r.default.string,url:r.default.string,version:r.default.string.isRequired},u=function(e){var a=e.src,n=e.name,t=e.url,r=e.version,d=l.default.createElement("a",{className:m("badge"),href:t||"https://www.npmjs.org/package/".concat(n,"/v/").concat(r)},l.default.createElement("span",{className:m("badge-name")},t?"package":"npm"),l.default.createElement("span",{className:m("badge-version")},"v".concat(r))),i=a?l.default.createElement("a",{className:m("badge"),href:a},l.default.createElement("span",{className:m("badge-name")},"github"),l.default.createElement("span",{className:m("badge-version")},"source")):void 0;return l.default.createElement("div",{className:m("badge-container")},d,i)};u.propTypes=o;var p=u;a.Z=p},94871:function(e,a,n){n.r(a),n.d(a,{default:function(){return N}});var t=n(87462),l=n(44925),r=n(67294),d=n(81254),i=n(22863),m=function(e){var a=e.url;return r.createElement(i.Z,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-worklist-data-grid",name:"terra-worklist-data-grid",version:"0.4.0",url:a})},o=["components"],u={},p="wrapper";function s(e){var a=e.components,n=(0,l.Z)(e,o);return(0,d.mdx)(p,(0,t.Z)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"changelog"},"Changelog"),(0,d.mdx)("h2",{id:"unreleased"},"Unreleased"),(0,d.mdx)("h2",{id:"040---august-10-2023"},"0.4.0 - (August 10, 2023)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Breaking Changes"),(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Removed ",(0,d.mdx)("inlineCode",{parentName:"li"},"columns")," prop in favor of the new ",(0,d.mdx)("inlineCode",{parentName:"li"},"pinnedColumns")," and ",(0,d.mdx)("inlineCode",{parentName:"li"},"overflowColumns")," props."))),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Added"),(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Added ",(0,d.mdx)("inlineCode",{parentName:"li"},"pinnedColumns")," prop for columns that will be pinned."),(0,d.mdx)("li",{parentName:"ul"},"Added ",(0,d.mdx)("inlineCode",{parentName:"li"},"overflowColumns")," prop for columns that are scrollable."),(0,d.mdx)("li",{parentName:"ul"},"Added support for pinned columns."),(0,d.mdx)("li",{parentName:"ul"},"Added ability to dive into cells with focusable elements."),(0,d.mdx)("li",{parentName:"ul"},"Added ability to treat the ",(0,d.mdx)("inlineCode",{parentName:"li"},"terra-worklist-data-grid")," component as a single tabstop."),(0,d.mdx)("li",{parentName:"ul"},"Added ability to select the row selection column header to allow sorting by consumers."))),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Fixed"),(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Text alignment of the row header column."),(0,d.mdx)("li",{parentName:"ul"},"Removed roving tabIndex and resolved focus management issues within cells."),(0,d.mdx)("li",{parentName:"ul"},"Reduced number of unnecessary rerenders in the ",(0,d.mdx)("inlineCode",{parentName:"li"},"terra-worklist-data-grid")," component.")))),(0,d.mdx)("h2",{id:"030---july-19-2023"},"0.3.0 - (July 19, 2023)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Breaking Changes"),(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Removed ",(0,d.mdx)("inlineCode",{parentName:"li"},"columnWidth")," prop in favor of the new ",(0,d.mdx)("inlineCode",{parentName:"li"},"defaultColumnWidth")," prop."),(0,d.mdx)("li",{parentName:"ul"},"Renamed ",(0,d.mdx)("inlineCode",{parentName:"li"},"ariaLabelledby")," prop to ",(0,d.mdx)("inlineCode",{parentName:"li"},"ariaLabelledBy")," to follow proper camelCasing and for consistency with other Terra components."))),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Added"),(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Added additional keyboard navigation shortcuts."),(0,d.mdx)("li",{parentName:"ul"},"Added support for cell selection."),(0,d.mdx)("li",{parentName:"ul"},"Added ability to resize columns via mouse."),(0,d.mdx)("li",{parentName:"ul"},"Added ",(0,d.mdx)("inlineCode",{parentName:"li"},"defaultColumnWidth")," prop to set the default column width if it is not set per column."),(0,d.mdx)("li",{parentName:"ul"},"Added ",(0,d.mdx)("inlineCode",{parentName:"li"},"onColumnResize")," prop for notifying consumers of a column resize."))),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Changed"),(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Updated data grid to honor the column and row widths specified by consumers."),(0,d.mdx)("li",{parentName:"ul"},"Optimized package size by excluding tests.")))),(0,d.mdx)("h2",{id:"020---july-4-2023"},"0.2.0 - (July 4, 2023)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Added"),(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Added masked cell support."),(0,d.mdx)("li",{parentName:"ul"},"Added hover state for selectable cells."),(0,d.mdx)("li",{parentName:"ul"},"Added blank cell support."),(0,d.mdx)("li",{parentName:"ul"},"Added ability to allow consumers to specify the sort indicator and error state for columns."))),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Changed"),(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Removed ability to set variable row heights."),(0,d.mdx)("li",{parentName:"ul"},"Updated styling on cell focus.")))),(0,d.mdx)("h2",{id:"01"},"0.1"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Initial stable release.")))}s.isMDXComponent=!0;var c=["components"],x={},f="wrapper";function N(e){var a=e.components,n=(0,l.Z)(e,c);return(0,d.mdx)(f,(0,t.Z)({},x,n,{components:a,mdxType:"MDXLayout"}),(0,d.mdx)(m,{mdxType:"Badge"}),(0,d.mdx)(s,{mdxType:"ChangeLog"}))}N.isMDXComponent=!0},17422:function(e,a,n){n.r(a),a.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},87462:function(e,a,n){function t(){return t=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},t.apply(this,arguments)}n.d(a,{Z:function(){return t}})},44925:function(e,a,n){function t(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}n.d(a,{Z:function(){return t}})}}]);