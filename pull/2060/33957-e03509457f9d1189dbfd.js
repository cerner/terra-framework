"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[33957],{55713:function(e,a,l){var d=l(24994);a.A=void 0;var n=d(l(96540)),t=d(l(5556)),r=d(l(67967)),m=d(l(25642)),i=r.default.bind(m.default),o={name:t.default.string.isRequired,src:t.default.string,url:t.default.string,version:t.default.string.isRequired},u=function(e){var a=e.src,l=e.name,d=e.url,t=e.version,r=n.default.createElement("a",{className:i("badge"),href:d||"https://www.npmjs.org/package/".concat(l,"/v/").concat(t)},n.default.createElement("span",{className:i("badge-name")},d?"package":"npm"),n.default.createElement("span",{className:i("badge-version")},"v".concat(t))),m=a?n.default.createElement("a",{className:i("badge"),href:a},n.default.createElement("span",{className:i("badge-name")},"github"),n.default.createElement("span",{className:i("badge-version")},"source")):void 0;return n.default.createElement("div",{className:i("badge-container")},r,m)};u.propTypes=o;a.A=u},33957:function(e,a,l){l.r(a),l.d(a,{default:function(){return c}});var d=l(58168),n=l(53986),t=(l(96540),l(36665)),r=l(80531),m=["components"],i={},o="wrapper";function u(e){var a=e.components,l=(0,n.A)(e,m);return(0,t.mdx)(o,(0,d.A)({},i,l,{components:a,mdxType:"MDXLayout"}),(0,t.mdx)("h1",{id:"changelog"},"Changelog"),(0,t.mdx)("h2",{id:"unreleased"},"Unreleased"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Changed",(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"boundingRef")," is no longer necessary the section header's sticky behavior. The calculation now uses the table's container ref for calculating the offset.")))),(0,t.mdx)("h2",{id:"1170---march-1-2024"},"1.17.0 - (March 1, 2024)"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Changed",(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},"Minor dependency version bump.")))),(0,t.mdx)("h2",{id:"1160---february-28-2024"},"1.16.0 - (February 28, 2024)"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Added",(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},"Added support for column actions.")))),(0,t.mdx)("h2",{id:"1150---february-28-2024"},"1.15.0 - (February 28, 2024)"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Added ",(0,t.mdx)("inlineCode",{parentName:"li"},"boundingRef")," prop for bounded flowsheet data grids.")),(0,t.mdx)("h2",{id:"1140---february-20-2024"},"1.14.0 - (February 20, 2024)"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Changed",(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},"Minor dependency version bump.")))),(0,t.mdx)("h2",{id:"1130---february-16-2024"},"1.13.0 - (February 16, 2024)"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Changed",(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},"Removed the default rowMinimumHeight from FlowsheetDataGrid so that the ",(0,t.mdx)("inlineCode",{parentName:"li"},"terra-table")," default value is used. ")))),(0,t.mdx)("h2",{id:"1120---february-1-2024"},"1.12.0 - (February 1, 2024)"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},"Added"),(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},"Added rowMinimumHeight prop that gets passed to terra-table to support flexible row height."))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},"Changed"),(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},"Updated jest snapshots.")))),(0,t.mdx)("h2",{id:"1110---january-12-2024"},"1.11.0 - (January 12, 2024)"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Added",(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},"Added Support for non contiguous multi select in flowsheet data grid.")))),(0,t.mdx)("h2",{id:"1100---january-2-2024"},"1.10.0 - (January 2, 2024)"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Added ",(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},"Added translations for flowsheet.")))),(0,t.mdx)("h2",{id:"190---december-18-2023"},"1.9.0 - (December 18, 2023)"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Changed",(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},"Minor dependency version bump.")))),(0,t.mdx)("h2",{id:"180---december-13-2023"},"1.8.0 - (December 13, 2023)"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},"Breaking Change"),(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},"Flowsheet ",(0,t.mdx)("inlineCode",{parentName:"li"},"OnCellSelect")," callback now returns an object containing rowId, columnId and sectionId."))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},"Added"),(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},"Added range-select and multi-select on flowsheets with sections."),(0,t.mdx)("li",{parentName:"ul"},"Flowsheet ",(0,t.mdx)("inlineCode",{parentName:"li"},"onCellRangeSelect")," callback now also returns a sectionId for each cell in range.")))),(0,t.mdx)("h2",{id:"170---december-11-2023"},"1.7.0 - (December 11, 2023)"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},"Added"),(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},"Added keyboard navigation support for sections."))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},"Fixed"),(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},"Removed unnecessary rerenders")))),(0,t.mdx)("h2",{id:"160---december-5-2023"},"1.6.0 - (December 5, 2023)"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Changed",(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},"Removed console warning message when no pinned columns exist.")))),(0,t.mdx)("h2",{id:"150---december-1-2023"},"1.5.0 - (December 1, 2023)"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Changed",(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),(0,t.mdx)("h2",{id:"140---november-23-2023"},"1.4.0 - (November 23, 2023)"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Added",(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},"Added ",(0,t.mdx)("inlineCode",{parentName:"li"},"onRowSelect")," callback prop to FlowsheetDataGrid to handle row header cell selection.")))),(0,t.mdx)("h2",{id:"130---november-22-2023"},"1.3.0 - (November 22, 2023)"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Changed",(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},"Updated Table component to use new ",(0,t.mdx)("inlineCode",{parentName:"li"},"rowSelectionMode")," prop instead of ",(0,t.mdx)("inlineCode",{parentName:"li"},"hasSelectableRows"),".")))),(0,t.mdx)("h2",{id:"120---november-20-2023"},"1.2.0 - (November 20, 2023)"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},"Fixed"),(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},"Fixed issue where focus was given to the column header instead of its button element."),(0,t.mdx)("li",{parentName:"ul"},"Fixed issue where row selection was being announced twice in Worklist Data Grid."),(0,t.mdx)("li",{parentName:"ul"},"Fixed an issue when the datagrid is updated and the column/row indices no longer exist."))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},"Added"),(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},"Added ",(0,t.mdx)("inlineCode",{parentName:"li"},"hasVisibleColumnHeaders")," prop for FlowsheetDataGrid to toggle visibility of column headers."),(0,t.mdx)("li",{parentName:"ul"},"Added section support to FlowsheetDataGrid."))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},"Changed"),(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},"Updated all cells to be selectable and columns unselectable in FlowsheetDataGrid, as ",(0,t.mdx)("inlineCode",{parentName:"li"},"isSelectable")," prop is not supported for columns or cells.")))),(0,t.mdx)("h2",{id:"110---november-9-2023"},"1.1.0 - (November 9, 2023)"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},"Fixed"),(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},"Fixed the column header background color for the Orion Fusion theme."),(0,t.mdx)("li",{parentName:"ul"},"Fixed pinned column divider issue during keyboard resize."),(0,t.mdx)("li",{parentName:"ul"},"Fixed resize handle being communicated when non-header cell is focused."))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},"Added"),(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},"Added ability to select a range of cells to FlowsheetDataGrid."))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},"Changed"),(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},"Updated unit test to account for generated ids of ",(0,t.mdx)("inlineCode",{parentName:"li"},"terra-table")," elements.")))),(0,t.mdx)("h2",{id:"100---october-25-2023"},"1.0.0 - (October 25, 2023)"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},"Initial working component release.")),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},"Added"),(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},"Added additional screen reader support to announce that column headers are interactable upon selection."),(0,t.mdx)("li",{parentName:"ul"},"Added keyboard support for column resizing."),(0,t.mdx)("li",{parentName:"ul"},"Added translations."),(0,t.mdx)("li",{parentName:"ul"},'Added "No Result" cells to FlowsheetDataGrid.')))),(0,t.mdx)("h2",{id:"081---october-17-2023"},"0.8.1 - (October 17, 2023)"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Fixed",(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},"Fixed issue where WorklistDataGrid loses focus when Row Selection Mode is turned off from a Row Selection Cell."),(0,t.mdx)("li",{parentName:"ul"},"Fixed issue where focus was moved from editable fields when using key events from data grid components."),(0,t.mdx)("li",{parentName:"ul"},"Fixed tab focus management when next element is in a hidden container."),(0,t.mdx)("li",{parentName:"ul"},"Fixed tab focus management to wrap to the first focusable element when the data grid is the last focusable element.")))),(0,t.mdx)("h2",{id:"080---october-11-2023"},"0.8.0 - (October 11, 2023)"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},"Added"),(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},"Added base FlowsheetDataGrid component."))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},"Changed"),(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},"Updated prop descriptions for better consistency and accuracy in the ",(0,t.mdx)("inlineCode",{parentName:"li"},"terra-data-grid")," component.")))),(0,t.mdx)("h2",{id:"070---october-3-2023"},"0.7.0 - (October 3, 2023)"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Fixed",(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},"Fixed the screen reader messages to count header row as the first row.")))),(0,t.mdx)("h2",{id:"060---september-14-2023"},"0.6.0 - (September 14, 2023)"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},"Breaking Changes"),(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},"Renamed ",(0,t.mdx)("inlineCode",{parentName:"li"},"terra-worklist-data-grid")," package to ",(0,t.mdx)("inlineCode",{parentName:"li"},"terra-data-grid"),"."),(0,t.mdx)("li",{parentName:"ul"},"Changed WorklistDataGrid component from default to named export. WorklistDataGrid can now be imported as ",(0,t.mdx)("inlineCode",{parentName:"li"},"import { WorklistDataGrid } from 'terra-data-grid'"),"."))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},"Fixed"),(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},"Fixed scroll issues for pinned columns."),(0,t.mdx)("li",{parentName:"ul"},"Fixed scroll issues for fixed column header row."),(0,t.mdx)("li",{parentName:"ul"},"Fixed border issues for selected rows"))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},"Changed"),(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},"Updated the ",(0,t.mdx)("inlineCode",{parentName:"li"},"terra-worklist-data-grid")," component to provide row selection assistive technology messages based on the properties provided by the consumer."),(0,t.mdx)("li",{parentName:"ul"},"Updated the ",(0,t.mdx)("inlineCode",{parentName:"li"},"terra-worklist-data-grid")," component to set initial focus to the row selection header when row selection mode is enabled.")))),(0,t.mdx)("hr",null),(0,t.mdx)("p",null,"All release notes below apply to the ",(0,t.mdx)("inlineCode",{parentName:"p"},"terra-worklist-data-grid")," package (renamed to ",(0,t.mdx)("inlineCode",{parentName:"p"},"terra-data-grid")," with the 0.6 release above)."),(0,t.mdx)("h2",{id:"050---august-31-2023"},"0.5.0 - (August 31, 2023)"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},"Added"),(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},"Added box shadow for pinned columns in fusion theme."),(0,t.mdx)("li",{parentName:"ul"},"Added ability to use spacebar on masked and non-selectable cells to select rows."),(0,t.mdx)("li",{parentName:"ul"},"Added ability to treat the ",(0,t.mdx)("inlineCode",{parentName:"li"},"terra-worklist-data-grid")," component as a single tabstop."),(0,t.mdx)("li",{parentName:"ul"},"Added a sticky column header feature to ",(0,t.mdx)("inlineCode",{parentName:"li"},"terra-worklist-data-grid")))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},"Changed"),(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},"Removed roving tabIndex and resolved focus management issues within cells."),(0,t.mdx)("li",{parentName:"ul"},"Updated the functionality for selecting a range of rows. Updated ",(0,t.mdx)("inlineCode",{parentName:"li"},"onRowSelect")," prop to take only one array parameter."))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},"Fixed"),(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},"Reduced number of unnecessary rerenders in the ",(0,t.mdx)("inlineCode",{parentName:"li"},"terra-worklist-data-grid")," component."),(0,t.mdx)("li",{parentName:"ul"},"Fixed cells not honoring the value of props passed by consumers."),(0,t.mdx)("li",{parentName:"ul"},"Fixed pinned column separator not adjusting size when the table height changes."),(0,t.mdx)("li",{parentName:"ul"},"Fixed pinned column cells not being selectable."),(0,t.mdx)("li",{parentName:"ul"},"Fixed pinned column border issues during scrolling."),(0,t.mdx)("li",{parentName:"ul"},"Fixed hover/background colors for alternating rows.")))),(0,t.mdx)("h2",{id:"040---august-10-2023"},"0.4.0 - (August 10, 2023)"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},"Breaking Changes"),(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},"Removed ",(0,t.mdx)("inlineCode",{parentName:"li"},"columns")," prop in favor of the new ",(0,t.mdx)("inlineCode",{parentName:"li"},"pinnedColumns")," and ",(0,t.mdx)("inlineCode",{parentName:"li"},"overflowColumns")," props."))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},"Added"),(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},"Added ",(0,t.mdx)("inlineCode",{parentName:"li"},"pinnedColumns")," prop for columns that will be pinned."),(0,t.mdx)("li",{parentName:"ul"},"Added ",(0,t.mdx)("inlineCode",{parentName:"li"},"overflowColumns")," prop for columns that are scrollable."),(0,t.mdx)("li",{parentName:"ul"},"Added support for pinned columns."),(0,t.mdx)("li",{parentName:"ul"},"Added ability to dive into cells with focusable elements."),(0,t.mdx)("li",{parentName:"ul"},"Added ability to select the row selection column header to allow sorting by consumers."),(0,t.mdx)("li",{parentName:"ul"},"Added ability to select rows via mouse and keyboard."))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},"Fixed"),(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},"Text alignment of the row header column.")))),(0,t.mdx)("h2",{id:"030---july-19-2023"},"0.3.0 - (July 19, 2023)"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},"Breaking Changes"),(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},"Removed ",(0,t.mdx)("inlineCode",{parentName:"li"},"columnWidth")," prop in favor of the new ",(0,t.mdx)("inlineCode",{parentName:"li"},"defaultColumnWidth")," prop."),(0,t.mdx)("li",{parentName:"ul"},"Renamed ",(0,t.mdx)("inlineCode",{parentName:"li"},"ariaLabelledby")," prop to ",(0,t.mdx)("inlineCode",{parentName:"li"},"ariaLabelledBy")," to follow proper camelCasing and for consistency with other Terra components."))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},"Added"),(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},"Added additional keyboard navigation shortcuts."),(0,t.mdx)("li",{parentName:"ul"},"Added support for cell selection."),(0,t.mdx)("li",{parentName:"ul"},"Added ability to resize columns via mouse."),(0,t.mdx)("li",{parentName:"ul"},"Added ",(0,t.mdx)("inlineCode",{parentName:"li"},"defaultColumnWidth")," prop to set the default column width if it is not set per column."),(0,t.mdx)("li",{parentName:"ul"},"Added ",(0,t.mdx)("inlineCode",{parentName:"li"},"onColumnResize")," prop for notifying consumers of a column resize."))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},"Changed"),(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},"Updated data grid to honor the column and row widths specified by consumers."),(0,t.mdx)("li",{parentName:"ul"},"Optimized package size by excluding tests.")))),(0,t.mdx)("h2",{id:"020---july-4-2023"},"0.2.0 - (July 4, 2023)"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},"Added"),(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},"Added masked cell support."),(0,t.mdx)("li",{parentName:"ul"},"Added hover state for selectable cells."),(0,t.mdx)("li",{parentName:"ul"},"Added blank cell support."),(0,t.mdx)("li",{parentName:"ul"},"Added ability to allow consumers to specify the sort indicator and error state for columns."))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},"Changed"),(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},"Removed ability to set variable row heights."),(0,t.mdx)("li",{parentName:"ul"},"Updated styling on cell focus.")))),(0,t.mdx)("h2",{id:"01"},"0.1"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Initial stable release.")))}u.isMDXComponent=!0;var p=["components"],s={},x="wrapper";function c(e){var a=e.components,l=(0,n.A)(e,p);return(0,t.mdx)(x,(0,d.A)({},s,l,{components:a,mdxType:"MDXLayout"}),(0,t.mdx)(r.E,{mdxType:"Badge"}),(0,t.mdx)(u,{mdxType:"ChangeLog"}))}c.isMDXComponent=!0},80531:function(e,a,l){l.d(a,{E:function(){return t}});var d=l(96540),n=l(55713),t=function(e){var a=e.url;return d.createElement(n.A,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-data-grid",name:"terra-data-grid",version:"1.17.0",url:a})}},25642:function(e,a,l){l.r(a),a.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},58168:function(e,a,l){function d(){return d=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var l=arguments[a];for(var d in l)Object.prototype.hasOwnProperty.call(l,d)&&(e[d]=l[d])}return e},d.apply(this,arguments)}l.d(a,{A:function(){return d}})},53986:function(e,a,l){function d(e,a){if(null==e)return{};var l,d,n=function(e,a){if(null==e)return{};var l,d,n={},t=Object.keys(e);for(d=0;d<t.length;d++)l=t[d],a.indexOf(l)>=0||(n[l]=e[l]);return n}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(d=0;d<t.length;d++)l=t[d],a.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}l.d(a,{A:function(){return d}})}}]);