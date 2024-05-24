"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[36022],{55713:function(e,n,t){var r=t(24994);n.A=void 0;var a=r(t(96540)),o=r(t(5556)),d=r(t(67967)),i=r(t(25642)),l=d.default.bind(i.default),s={name:o.default.string.isRequired,src:o.default.string,url:o.default.string,version:o.default.string.isRequired},m=function(e){var n=e.src,t=e.name,r=e.url,o=e.version,d=a.default.createElement("a",{className:l("badge"),href:r||"https://www.npmjs.org/package/".concat(t,"/v/").concat(o)},a.default.createElement("span",{className:l("badge-name")},r?"package":"npm"),a.default.createElement("span",{className:l("badge-version")},"v".concat(o))),i=n?a.default.createElement("a",{className:l("badge"),href:n},a.default.createElement("span",{className:l("badge-name")},"github"),a.default.createElement("span",{className:l("badge-version")},"source")):void 0;return a.default.createElement("div",{className:l("badge-container")},d,i)};m.propTypes=s;n.A=m},36022:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});var r=t(58168),a=t(53986),o=(t(96540),t(36665)),d=t(47558),i=["components"],l={},s="wrapper";function m(e){var n=e.components,t=(0,a.A)(e,i);return(0,o.mdx)(s,(0,r.A)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)(d.E,{mdxType:"Badge"}),(0,o.mdx)("h1",{id:"terra-date-picker-upgrade-guide"},"Terra Date Picker Upgrade Guide"),(0,o.mdx)("h2",{id:"changes-from-version-3-to-version-4"},"Changes from version 3 to version 4"),(0,o.mdx)("h3",{id:"removed-props"},"Removed props"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Removed ",(0,o.mdx)("inlineCode",{parentName:"li"},"releaseFocus")),(0,o.mdx)("li",{parentName:"ul"},"Removed ",(0,o.mdx)("inlineCode",{parentName:"li"},"requestFocus"))),(0,o.mdx)("h3",{id:"new-props"},"New props"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Added ",(0,o.mdx)("inlineCode",{parentName:"li"},"onBlur")),(0,o.mdx)("li",{parentName:"ul"},"Added ",(0,o.mdx)("inlineCode",{parentName:"li"},"onFocus"))),(0,o.mdx)("h3",{id:"changes-to-onblur-and-onfocus"},"Changes to onBlur and onFocus"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"onBlur")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"onFocus")," props previously could be passed down as custom props. These props have now become first-class props. The ",(0,o.mdx)("inlineCode",{parentName:"p"},"onFocus")," prop used to be triggered when focus is moved from the date input to the calendar button or vise versa. The ",(0,o.mdx)("inlineCode",{parentName:"p"},"onFocus")," prop will still be triggered if the date picker component did not have focus and now just gained focus. However, if the focus is then moved from the date input to the calendar button or vise versa, the ",(0,o.mdx)("inlineCode",{parentName:"p"},"onFocus")," callback now would not be triggered because the focus is still within the date picker container. The ",(0,o.mdx)("inlineCode",{parentName:"p"},"onBlur")," callback now behaves similar to the ",(0,o.mdx)("inlineCode",{parentName:"p"},"onFocus")," callback where ",(0,o.mdx)("inlineCode",{parentName:"p"},"onBlur")," would not be triggered when focus is transfered from the date input to the calendar button. The ",(0,o.mdx)("inlineCode",{parentName:"p"},"onBlur")," callback would be triggered only when focus is lost from the entire date picker component."),(0,o.mdx)("h3",{id:"changes-to-filterdate"},"Changes to filterDate"),(0,o.mdx)("p",null,"The parameter in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"filterDate")," callback has changed from a moment date object to an ISO string representation of the date. The reason for this change is to keep consistency with other callbacks."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-diff"},"import React from 'react';\nimport moment from 'moment-timezone';\nimport DatePicker from 'terra-date-picker';\n\nclass Default extends React.Component {\n  constructor() {\n    super();\n    this.handleFilterDate = this.handleFilterDate.bind(this);\n  }\n\n  handleFilterDate(date) {\n+   const momentDate = moment(date)\n    const day = momentDate.day();\n    return day !== 0 && day !== 6;\n  }\n\n  render() {\n    return (\n      <DatePicker\n        name=\"date-picker\"\n        filterDate={this.handleFilterDate}\n      />\n    );\n  }\n}\n\nexport default Default;\n")),(0,o.mdx)("h2",{id:"changes-from-version-2-to-version-3"},"Changes from version 2 to version 3"),(0,o.mdx)("h3",{id:"changes-to-css-custom-properties"},"Changes to CSS Custom Properties"),(0,o.mdx)("h4",{id:"added"},"Added"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"--terra-date-picker-input-focus-border-color"),(0,o.mdx)("li",{parentName:"ul"},"--terra-date-picker-button-border"),(0,o.mdx)("li",{parentName:"ul"},"--terra-date-picker-button-border-bottom-right-radius"),(0,o.mdx)("li",{parentName:"ul"},"--terra-date-picker-button-border-top-right-radius"),(0,o.mdx)("li",{parentName:"ul"},"--terra-date-picker-button-box-shadow"),(0,o.mdx)("li",{parentName:"ul"},"--terra-date-picker-button-color"),(0,o.mdx)("li",{parentName:"ul"},"--terra-date-picker-button-focus-border-color"),(0,o.mdx)("li",{parentName:"ul"},"--terra-date-picker-button-focus-box-shadow")))}m.isMDXComponent=!0},47558:function(e,n,t){t.d(n,{E:function(){return o}});var r=t(96540),a=t(55713),o=function(e){var n=e.url;return r.createElement(a.A,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-date-picker",name:"terra-date-picker",version:"4.110.3",url:n})}},25642:function(e,n,t){t.r(n),n.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},58168:function(e,n,t){function r(){return r=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},r.apply(null,arguments)}t.d(n,{A:function(){return r}})},53986:function(e,n,t){function r(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||{}.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}t.d(n,{A:function(){return r}})}}]);