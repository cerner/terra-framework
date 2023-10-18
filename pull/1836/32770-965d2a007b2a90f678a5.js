"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[32770],{22863:function(e,a,n){var t=n(64836);a.Z=void 0;var l=t(n(67294)),d=t(n(45697)),r=t(n(47166)),i=t(n(17422)),m=r.default.bind(i.default),o={name:d.default.string.isRequired,src:d.default.string,url:d.default.string,version:d.default.string.isRequired},p=function(e){var a=e.src,n=e.name,t=e.url,d=e.version,r=l.default.createElement("a",{className:m("badge"),href:t||"https://www.npmjs.org/package/".concat(n,"/v/").concat(d)},l.default.createElement("span",{className:m("badge-name")},t?"package":"npm"),l.default.createElement("span",{className:m("badge-version")},"v".concat(d))),i=a?l.default.createElement("a",{className:m("badge"),href:a},l.default.createElement("span",{className:m("badge-name")},"github"),l.default.createElement("span",{className:m("badge-version")},"source")):void 0;return l.default.createElement("div",{className:m("badge-container")},r,i)};p.propTypes=o;var u=p;a.Z=u},32770:function(e,a,n){n.r(a),n.d(a,{default:function(){return f}});var t=n(87462),l=n(44925),d=n(67294),r=n(81254),i=n(22863),m=function(e){var a=e.url;return d.createElement(i.Z,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-data-grid",name:"terra-data-grid",version:"0.8.0",url:a})},o=["components"],p={},u="wrapper";function s(e){var a=e.components,n=(0,l.Z)(e,o);return(0,r.mdx)(u,(0,t.Z)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"changelog"},"Changelog"),(0,r.mdx)("h2",{id:"unreleased"},"Unreleased"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Added"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Added additional screen reader support to announce that column headers are interactable upon selection."))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Fixed"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Fixed issue where WorklistDataGrid loses focus when Row Selection Mode is turned off from a Row Selection Cell."),(0,r.mdx)("li",{parentName:"ul"},"Fixed issue where focus was moved from editable fields when using key events from data grid components."),(0,r.mdx)("li",{parentName:"ul"},"Fixed tab focus management when next element is in a hidden container."),(0,r.mdx)("li",{parentName:"ul"},"Fixed tab focus management to wrap to the first focusable element when the data grid is the last focusable element.")))),(0,r.mdx)("h2",{id:"080---october-11-2023"},"0.8.0 - (October 11, 2023)"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Added",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Added ability to resize columns via keyboard."),(0,r.mdx)("li",{parentName:"ul"},"Added base FlowsheetDataGrid component.")))),(0,r.mdx)("h2",{id:"070---october-3-2023"},"0.7.0 - (October 3, 2023)"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Fixed",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Fixed the screen reader messages to count header row as the first row.")))),(0,r.mdx)("h2",{id:"060---september-14-2023"},"0.6.0 - (September 14, 2023)"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Breaking Changes"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Renamed ",(0,r.mdx)("inlineCode",{parentName:"li"},"terra-worklist-data-grid")," package to ",(0,r.mdx)("inlineCode",{parentName:"li"},"terra-data-grid"),"."),(0,r.mdx)("li",{parentName:"ul"},"Changed WorklistDataGrid component from default to named export. WorklistDataGrid can now be imported as ",(0,r.mdx)("inlineCode",{parentName:"li"},"import { WorklistDataGrid } from 'terra-data-grid'"),"."))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Fixed"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Fixed scroll issues for pinned columns."),(0,r.mdx)("li",{parentName:"ul"},"Fixed scroll issues for fixed column header row."),(0,r.mdx)("li",{parentName:"ul"},"Fixed border issues for selected rows"))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Changed"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Updated the ",(0,r.mdx)("inlineCode",{parentName:"li"},"terra-worklist-data-grid")," component to provide row selection assistive technology messages based on the properties provided by the consumer."),(0,r.mdx)("li",{parentName:"ul"},"Updated the ",(0,r.mdx)("inlineCode",{parentName:"li"},"terra-worklist-data-grid")," component to set initial focus to the row selection header when row selection mode is enabled.")))),(0,r.mdx)("hr",null),(0,r.mdx)("p",null,"All release notes below apply to the ",(0,r.mdx)("inlineCode",{parentName:"p"},"terra-worklist-data-grid")," package (renamed to ",(0,r.mdx)("inlineCode",{parentName:"p"},"terra-data-grid")," the 0.6 release above)."),(0,r.mdx)("h2",{id:"050---august-31-2023"},"0.5.0 - (August 31, 2023)"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Added"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Added box shadow for pinned columns in fusion theme."),(0,r.mdx)("li",{parentName:"ul"},"Added ability to use spacebar on masked and non-selectable cells to select rows."),(0,r.mdx)("li",{parentName:"ul"},"Added ability to treat the ",(0,r.mdx)("inlineCode",{parentName:"li"},"terra-worklist-data-grid")," component as a single tabstop."),(0,r.mdx)("li",{parentName:"ul"},"Added a sticky column header feature to ",(0,r.mdx)("inlineCode",{parentName:"li"},"terra-worklist-data-grid")))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Changed"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Removed roving tabIndex and resolved focus management issues within cells."),(0,r.mdx)("li",{parentName:"ul"},"Updated the functionality for selecting a range of rows. Updated ",(0,r.mdx)("inlineCode",{parentName:"li"},"onRowSelect")," prop to take only one array parameter."))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Fixed"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Reduced number of unnecessary rerenders in the ",(0,r.mdx)("inlineCode",{parentName:"li"},"terra-worklist-data-grid")," component."),(0,r.mdx)("li",{parentName:"ul"},"Fixed cells not honoring the value of props passed by consumers."),(0,r.mdx)("li",{parentName:"ul"},"Fixed pinned column separator not adjusting size when the table height changes."),(0,r.mdx)("li",{parentName:"ul"},"Fixed pinned column cells not being selectable."),(0,r.mdx)("li",{parentName:"ul"},"Fixed pinned column border issues during scrolling."),(0,r.mdx)("li",{parentName:"ul"},"Fixed hover/background colors for alternating rows.")))),(0,r.mdx)("h2",{id:"040---august-10-2023"},"0.4.0 - (August 10, 2023)"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Breaking Changes"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Removed ",(0,r.mdx)("inlineCode",{parentName:"li"},"columns")," prop in favor of the new ",(0,r.mdx)("inlineCode",{parentName:"li"},"pinnedColumns")," and ",(0,r.mdx)("inlineCode",{parentName:"li"},"overflowColumns")," props."))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Added"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Added ",(0,r.mdx)("inlineCode",{parentName:"li"},"pinnedColumns")," prop for columns that will be pinned."),(0,r.mdx)("li",{parentName:"ul"},"Added ",(0,r.mdx)("inlineCode",{parentName:"li"},"overflowColumns")," prop for columns that are scrollable."),(0,r.mdx)("li",{parentName:"ul"},"Added support for pinned columns."),(0,r.mdx)("li",{parentName:"ul"},"Added ability to dive into cells with focusable elements."),(0,r.mdx)("li",{parentName:"ul"},"Added ability to select the row selection column header to allow sorting by consumers."),(0,r.mdx)("li",{parentName:"ul"},"Added ability to select rows via mouse and keyboard."))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Fixed"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Text alignment of the row header column.")))),(0,r.mdx)("h2",{id:"030---july-19-2023"},"0.3.0 - (July 19, 2023)"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Breaking Changes"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Removed ",(0,r.mdx)("inlineCode",{parentName:"li"},"columnWidth")," prop in favor of the new ",(0,r.mdx)("inlineCode",{parentName:"li"},"defaultColumnWidth")," prop."),(0,r.mdx)("li",{parentName:"ul"},"Renamed ",(0,r.mdx)("inlineCode",{parentName:"li"},"ariaLabelledby")," prop to ",(0,r.mdx)("inlineCode",{parentName:"li"},"ariaLabelledBy")," to follow proper camelCasing and for consistency with other Terra components."))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Added"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Added additional keyboard navigation shortcuts."),(0,r.mdx)("li",{parentName:"ul"},"Added support for cell selection."),(0,r.mdx)("li",{parentName:"ul"},"Added ability to resize columns via mouse."),(0,r.mdx)("li",{parentName:"ul"},"Added ",(0,r.mdx)("inlineCode",{parentName:"li"},"defaultColumnWidth")," prop to set the default column width if it is not set per column."),(0,r.mdx)("li",{parentName:"ul"},"Added ",(0,r.mdx)("inlineCode",{parentName:"li"},"onColumnResize")," prop for notifying consumers of a column resize."))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Changed"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Updated data grid to honor the column and row widths specified by consumers."),(0,r.mdx)("li",{parentName:"ul"},"Optimized package size by excluding tests.")))),(0,r.mdx)("h2",{id:"020---july-4-2023"},"0.2.0 - (July 4, 2023)"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Added"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Added masked cell support."),(0,r.mdx)("li",{parentName:"ul"},"Added hover state for selectable cells."),(0,r.mdx)("li",{parentName:"ul"},"Added blank cell support."),(0,r.mdx)("li",{parentName:"ul"},"Added ability to allow consumers to specify the sort indicator and error state for columns."))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Changed"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Removed ability to set variable row heights."),(0,r.mdx)("li",{parentName:"ul"},"Updated styling on cell focus.")))),(0,r.mdx)("h2",{id:"01"},"0.1"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Initial stable release.")))}s.isMDXComponent=!0;var x=["components"],c={},N="wrapper";function f(e){var a=e.components,n=(0,l.Z)(e,x);return(0,r.mdx)(N,(0,t.Z)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,r.mdx)(m,{mdxType:"Badge"}),(0,r.mdx)(s,{mdxType:"ChangeLog"}))}f.isMDXComponent=!0},17422:function(e,a,n){n.r(a),a.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},87462:function(e,a,n){function t(){return t=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},t.apply(this,arguments)}n.d(a,{Z:function(){return t}})},44925:function(e,a,n){function t(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},d=Object.keys(e);for(t=0;t<d.length;t++)n=d[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(t=0;t<d.length;t++)n=d[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}n.d(a,{Z:function(){return t}})}}]);