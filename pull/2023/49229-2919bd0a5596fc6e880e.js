"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[49229],{22863:function(e,a,n){var d=n(64836);a.Z=void 0;var r=d(n(67294)),l=d(n(45697)),m=d(n(19845)),t=d(n(17422)),i=m.default.bind(t.default),o={name:l.default.string.isRequired,src:l.default.string,url:l.default.string,version:l.default.string.isRequired},p=function(e){var a=e.src,n=e.name,d=e.url,l=e.version,m=r.default.createElement("a",{className:i("badge"),href:d||"https://www.npmjs.org/package/".concat(n,"/v/").concat(l)},r.default.createElement("span",{className:i("badge-name")},d?"package":"npm"),r.default.createElement("span",{className:i("badge-version")},"v".concat(l))),t=a?r.default.createElement("a",{className:i("badge"),href:a},r.default.createElement("span",{className:i("badge-name")},"github"),r.default.createElement("span",{className:i("badge-version")},"source")):void 0;return r.default.createElement("div",{className:i("badge-container")},m,t)};p.propTypes=o;a.Z=p},49229:function(e,a,n){n.r(a),n.d(a,{default:function(){return p}});var d=n(87462),r=n(44925),l=(n(67294),n(81254)),m=n(61701),t=["components"],i={},o="wrapper";function p(e){var a=e.components,n=(0,r.Z)(e,t);return(0,l.mdx)(o,(0,d.Z)({},i,n,{components:a,mdxType:"MDXLayout"}),(0,l.mdx)(m.C,{mdxType:"Badge"}),(0,l.mdx)("h1",{id:"terra-table-upgrade-guide"},"Terra Table Upgrade Guide"),(0,l.mdx)("h2",{id:"changes-from-4x-to-50"},"Changes from 4.x to 5.0"),(0,l.mdx)("p",null,"The latest changes in the Table component reflects the Terra Accessibility initiative. The new version reflects an implementation to make components more accessible."),(0,l.mdx)("h2",{id:"new-props"},"New Props"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Added ",(0,l.mdx)("inlineCode",{parentName:"li"},"id")),(0,l.mdx)("li",{parentName:"ul"},"Added ",(0,l.mdx)("inlineCode",{parentName:"li"},"rows")),(0,l.mdx)("li",{parentName:"ul"},"Added ",(0,l.mdx)("inlineCode",{parentName:"li"},"sections")),(0,l.mdx)("li",{parentName:"ul"},"Added ",(0,l.mdx)("inlineCode",{parentName:"li"},"ariaLabelledBy")),(0,l.mdx)("li",{parentName:"ul"},"Added ",(0,l.mdx)("inlineCode",{parentName:"li"},"ariaLabel")),(0,l.mdx)("li",{parentName:"ul"},"Added ",(0,l.mdx)("inlineCode",{parentName:"li"},"columnResizeIncrement")),(0,l.mdx)("li",{parentName:"ul"},"Added ",(0,l.mdx)("inlineCode",{parentName:"li"},"pinnedColumns")),(0,l.mdx)("li",{parentName:"ul"},"Added ",(0,l.mdx)("inlineCode",{parentName:"li"},"overflowColumns")),(0,l.mdx)("li",{parentName:"ul"},"Added ",(0,l.mdx)("inlineCode",{parentName:"li"},"defaultColumnWidth")),(0,l.mdx)("li",{parentName:"ul"},"Added ",(0,l.mdx)("inlineCode",{parentName:"li"},"columnHeaderHeight")),(0,l.mdx)("li",{parentName:"ul"},"Added ",(0,l.mdx)("inlineCode",{parentName:"li"},"rowHeight")),(0,l.mdx)("li",{parentName:"ul"},"Added ",(0,l.mdx)("inlineCode",{parentName:"li"},"rowHeaderIndex")),(0,l.mdx)("li",{parentName:"ul"},"Added ",(0,l.mdx)("inlineCode",{parentName:"li"},"onColumnResize")),(0,l.mdx)("li",{parentName:"ul"},"Added ",(0,l.mdx)("inlineCode",{parentName:"li"},"onRowSelect")),(0,l.mdx)("li",{parentName:"ul"},"Added ",(0,l.mdx)("inlineCode",{parentName:"li"},"onColumnSelect")),(0,l.mdx)("li",{parentName:"ul"},"Added ",(0,l.mdx)("inlineCode",{parentName:"li"},"onSectionSelect")),(0,l.mdx)("li",{parentName:"ul"},"Added ",(0,l.mdx)("inlineCode",{parentName:"li"},"onRowSelectionHeaderSelect")),(0,l.mdx)("li",{parentName:"ul"},"Added ",(0,l.mdx)("inlineCode",{parentName:"li"},"rowSelectionMode")),(0,l.mdx)("li",{parentName:"ul"},"Added ",(0,l.mdx)("inlineCode",{parentName:"li"},"hasVisibleColumnHeaders")),(0,l.mdx)("li",{parentName:"ul"},"Added ",(0,l.mdx)("inlineCode",{parentName:"li"},"isStriped")),(0,l.mdx)("li",{parentName:"ul"},"Added ",(0,l.mdx)("a",{parentName:"li",href:"/terra-framework/pull/2023/components/cerner-terra-framework-docs/table/about"},"Column API")),(0,l.mdx)("li",{parentName:"ul"},"Added ",(0,l.mdx)("a",{parentName:"li",href:"/terra-framework/pull/2023/components/cerner-terra-framework-docs/table/about"},"Section API")),(0,l.mdx)("li",{parentName:"ul"},"Added ",(0,l.mdx)("a",{parentName:"li",href:"/terra-framework/pull/2023/components/cerner-terra-framework-docs/table/about"},"Row API")),(0,l.mdx)("li",{parentName:"ul"},"Added ",(0,l.mdx)("a",{parentName:"li",href:"/terra-framework/pull/2023/components/cerner-terra-framework-docs/table/about"},"Cell API")),(0,l.mdx)("li",{parentName:"ul"},"Added ",(0,l.mdx)("a",{parentName:"li",href:"/terra-framework/pull/2023/components/cerner-terra-framework-docs/table/about"},"Table Constants"))),(0,l.mdx)("h2",{id:"removed-props"},"Removed Props"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Removed ",(0,l.mdx)("inlineCode",{parentName:"li"},"bodyData")),(0,l.mdx)("li",{parentName:"ul"},"Removed ",(0,l.mdx)("inlineCode",{parentName:"li"},"checkStyle")),(0,l.mdx)("li",{parentName:"ul"},"Removed ",(0,l.mdx)("inlineCode",{parentName:"li"},"dividerStyle")),(0,l.mdx)("li",{parentName:"ul"},"Removed ",(0,l.mdx)("inlineCode",{parentName:"li"},"columnWidths")),(0,l.mdx)("li",{parentName:"ul"},"Removed ",(0,l.mdx)("inlineCode",{parentName:"li"},"hasChevrons")),(0,l.mdx)("li",{parentName:"ul"},"Removed ",(0,l.mdx)("inlineCode",{parentName:"li"},"headerData")),(0,l.mdx)("li",{parentName:"ul"},"Removed ",(0,l.mdx)("inlineCode",{parentName:"li"},"headerNode")),(0,l.mdx)("li",{parentName:"ul"},"Removed ",(0,l.mdx)("inlineCode",{parentName:"li"},"fill")),(0,l.mdx)("li",{parentName:"ul"},"Removed ",(0,l.mdx)("inlineCode",{parentName:"li"},"footerNode")),(0,l.mdx)("li",{parentName:"ul"},"Removed ",(0,l.mdx)("inlineCode",{parentName:"li"},"numberOfColumns")),(0,l.mdx)("li",{parentName:"ul"},"Removed ",(0,l.mdx)("inlineCode",{parentName:"li"},"numberOfRows")),(0,l.mdx)("li",{parentName:"ul"},"Removed ",(0,l.mdx)("inlineCode",{parentName:"li"},"cellPaddingStyle")),(0,l.mdx)("li",{parentName:"ul"},"Removed ",(0,l.mdx)("inlineCode",{parentName:"li"},"rowStyle")),(0,l.mdx)("li",{parentName:"ul"},"Removed ",(0,l.mdx)("inlineCode",{parentName:"li"},"scrollRefCallback")),(0,l.mdx)("li",{parentName:"ul"},"Removed ",(0,l.mdx)("inlineCode",{parentName:"li"},"showSimpleFooter")),(0,l.mdx)("li",{parentName:"ul"},"Removed ",(0,l.mdx)("inlineCode",{parentName:"li"},"summary")),(0,l.mdx)("li",{parentName:"ul"},"Removed ",(0,l.mdx)("inlineCode",{parentName:"li"},"summaryId"))))}p.isMDXComponent=!0},61701:function(e,a,n){n.d(a,{C:function(){return l}});var d=n(67294),r=n(22863),l=function(e){var a=e.url;return d.createElement(r.Z,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-table",name:"terra-table",version:"5.5.0",url:a})}},17422:function(e,a,n){n.r(a),a.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},87462:function(e,a,n){function d(){return d=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var d in n)Object.prototype.hasOwnProperty.call(n,d)&&(e[d]=n[d])}return e},d.apply(this,arguments)}n.d(a,{Z:function(){return d}})},44925:function(e,a,n){function d(e,a){if(null==e)return{};var n,d,r=function(e,a){if(null==e)return{};var n,d,r={},l=Object.keys(e);for(d=0;d<l.length;d++)n=l[d],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(d=0;d<l.length;d++)n=l[d],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(a,{Z:function(){return d}})}}]);