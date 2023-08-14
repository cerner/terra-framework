"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[94871],{22863:function(e,a,n){var l=n(64836);a.Z=void 0;var t=l(n(67294)),d=l(n(45697)),r=l(n(47166)),m=l(n(17422)),i=r.default.bind(m.default),o={name:d.default.string.isRequired,src:d.default.string,url:d.default.string,version:d.default.string.isRequired},u=function(e){var a=e.src,n=e.name,l=e.url,d=e.version,r=t.default.createElement("a",{className:i("badge"),href:l||"https://www.npmjs.org/package/".concat(n,"/v/").concat(d)},t.default.createElement("span",{className:i("badge-name")},l?"package":"npm"),t.default.createElement("span",{className:i("badge-version")},"v".concat(d))),m=a?t.default.createElement("a",{className:i("badge"),href:a},t.default.createElement("span",{className:i("badge-name")},"github"),t.default.createElement("span",{className:i("badge-version")},"source")):void 0;return t.default.createElement("div",{className:i("badge-container")},r,m)};u.propTypes=o;var p=u;a.Z=p},94871:function(e,a,n){n.r(a),n.d(a,{default:function(){return N}});var l=n(87462),t=n(44925),d=n(67294),r=n(81254),m=n(22863),i=function(e){var a=e.url;return d.createElement(m.Z,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-worklist-data-grid",name:"terra-worklist-data-grid",version:"0.4.0",url:a})},o=["components"],u={},p="wrapper";function s(e){var a=e.components,n=(0,t.Z)(e,o);return(0,r.mdx)(p,(0,l.Z)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"changelog"},"Changelog"),(0,r.mdx)("h2",{id:"unreleased"},"Unreleased"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Added",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Added ability to use spacebar on masked and non-selectable cells to select rows.")))),(0,r.mdx)("h2",{id:"040---august-10-2023"},"0.4.0 - (August 10, 2023)"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Breaking Changes"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Removed ",(0,r.mdx)("inlineCode",{parentName:"li"},"columns")," prop in favor of the new ",(0,r.mdx)("inlineCode",{parentName:"li"},"pinnedColumns")," and ",(0,r.mdx)("inlineCode",{parentName:"li"},"overflowColumns")," props."))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Added"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Added ",(0,r.mdx)("inlineCode",{parentName:"li"},"pinnedColumns")," prop for columns that will be pinned."),(0,r.mdx)("li",{parentName:"ul"},"Added ",(0,r.mdx)("inlineCode",{parentName:"li"},"overflowColumns")," prop for columns that are scrollable."),(0,r.mdx)("li",{parentName:"ul"},"Added support for pinned columns."),(0,r.mdx)("li",{parentName:"ul"},"Added ability to dive into cells with focusable elements."),(0,r.mdx)("li",{parentName:"ul"},"Added ability to treat the ",(0,r.mdx)("inlineCode",{parentName:"li"},"terra-worklist-data-grid")," component as a single tabstop."),(0,r.mdx)("li",{parentName:"ul"},"Added ability to select the row selection column header to allow sorting by consumers."))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Fixed"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Text alignment of the row header column."),(0,r.mdx)("li",{parentName:"ul"},"Removed roving tabIndex and resolved focus management issues within cells.")))),(0,r.mdx)("h2",{id:"030---july-19-2023"},"0.3.0 - (July 19, 2023)"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Breaking Changes"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Removed ",(0,r.mdx)("inlineCode",{parentName:"li"},"columnWidth")," prop in favor of the new ",(0,r.mdx)("inlineCode",{parentName:"li"},"defaultColumnWidth")," prop."),(0,r.mdx)("li",{parentName:"ul"},"Renamed ",(0,r.mdx)("inlineCode",{parentName:"li"},"ariaLabelledby")," prop to ",(0,r.mdx)("inlineCode",{parentName:"li"},"ariaLabelledBy")," to follow proper camelCasing and for consistency with other Terra components."))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Added"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Added additional keyboard navigation shortcuts."),(0,r.mdx)("li",{parentName:"ul"},"Added support for cell selection."),(0,r.mdx)("li",{parentName:"ul"},"Added ability to resize columns via mouse."),(0,r.mdx)("li",{parentName:"ul"},"Added ",(0,r.mdx)("inlineCode",{parentName:"li"},"defaultColumnWidth")," prop to set the default column width if it is not set per column."),(0,r.mdx)("li",{parentName:"ul"},"Added ",(0,r.mdx)("inlineCode",{parentName:"li"},"onColumnResize")," prop for notifying consumers of a column resize."))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Changed"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Updated data grid to honor the column and row widths specified by consumers."),(0,r.mdx)("li",{parentName:"ul"},"Optimized package size by excluding tests.")))),(0,r.mdx)("h2",{id:"020---july-4-2023"},"0.2.0 - (July 4, 2023)"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Added"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Added masked cell support."),(0,r.mdx)("li",{parentName:"ul"},"Added hover state for selectable cells."),(0,r.mdx)("li",{parentName:"ul"},"Added blank cell support."),(0,r.mdx)("li",{parentName:"ul"},"Added ability to allow consumers to specify the sort indicator and error state for columns."))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Changed"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Removed ability to set variable row heights."),(0,r.mdx)("li",{parentName:"ul"},"Updated styling on cell focus.")))),(0,r.mdx)("h2",{id:"01"},"0.1"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Initial stable release.")))}s.isMDXComponent=!0;var c=["components"],x={},f="wrapper";function N(e){var a=e.components,n=(0,t.Z)(e,c);return(0,r.mdx)(f,(0,l.Z)({},x,n,{components:a,mdxType:"MDXLayout"}),(0,r.mdx)(i,{mdxType:"Badge"}),(0,r.mdx)(s,{mdxType:"ChangeLog"}))}N.isMDXComponent=!0},17422:function(e,a,n){n.r(a),a.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},87462:function(e,a,n){function l(){return l=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},l.apply(this,arguments)}n.d(a,{Z:function(){return l}})},44925:function(e,a,n){function l(e,a){if(null==e)return{};var n,l,t=function(e,a){if(null==e)return{};var n,l,t={},d=Object.keys(e);for(l=0;l<d.length;l++)n=d[l],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(l=0;l<d.length;l++)n=d[l],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}n.d(a,{Z:function(){return l}})}}]);