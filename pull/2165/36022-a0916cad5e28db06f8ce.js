"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[36022],{55713:function(e,t,n){var r=n(24994);t.A=void 0;var a=r(n(96540)),o=r(n(5556)),d=r(n(67967)),i=r(n(25642)),l=d.default.bind(i.default),s={name:o.default.string.isRequired,src:o.default.string,url:o.default.string,version:o.default.string.isRequired},m=function(e){var t=e.src,n=e.name,r=e.url,o=e.version,d=a.default.createElement("a",{className:l("badge"),href:r||"https://www.npmjs.org/package/".concat(n,"/v/").concat(o)},a.default.createElement("span",{className:l("badge-name")},r?"package":"npm"),a.default.createElement("span",{className:l("badge-version")},"v".concat(o))),i=t?a.default.createElement("a",{className:l("badge"),href:t},a.default.createElement("span",{className:l("badge-name")},"github"),a.default.createElement("span",{className:l("badge-version")},"source")):void 0;return a.default.createElement("div",{className:l("badge-container")},d,i)};m.propTypes=s;t.A=m},36022:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var r=n(58168),a=n(53986),o=(n(96540),n(36665)),d=n(47558),i=["components"],l={},s="wrapper";function m(e){var t=e.components,n=(0,a.A)(e,i);return(0,o.mdx)(s,(0,r.A)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)(d.E,{mdxType:"Badge"}),(0,o.mdx)("h1",{id:"terra-date-picker-upgrade-guide"},"Terra Date Picker Upgrade Guide"),(0,o.mdx)("h2",{id:"changes-from-version-3-to-version-4"},"Changes from version 3 to version 4"),(0,o.mdx)("h3",{id:"removed-props"},"Removed props"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Removed ",(0,o.mdx)("inlineCode",{parentName:"li"},"releaseFocus")),(0,o.mdx)("li",{parentName:"ul"},"Removed ",(0,o.mdx)("inlineCode",{parentName:"li"},"requestFocus"))),(0,o.mdx)("h3",{id:"new-props"},"New props"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Added ",(0,o.mdx)("inlineCode",{parentName:"li"},"onBlur")),(0,o.mdx)("li",{parentName:"ul"},"Added ",(0,o.mdx)("inlineCode",{parentName:"li"},"onFocus"))),(0,o.mdx)("h3",{id:"changes-to-onblur-and-onfocus"},"Changes to onBlur and onFocus"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"onBlur")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"onFocus")," props previously could be passed down as custom props. These props have now become first-class props. The ",(0,o.mdx)("inlineCode",{parentName:"p"},"onFocus")," prop used to be triggered when focus is moved from the date input to the calendar button or vise versa. The ",(0,o.mdx)("inlineCode",{parentName:"p"},"onFocus")," prop will still be triggered if the date picker component did not have focus and now just gained focus. However, if the focus is then moved from the date input to the calendar button or vise versa, the ",(0,o.mdx)("inlineCode",{parentName:"p"},"onFocus")," callback now would not be triggered because the focus is still within the date picker container. The ",(0,o.mdx)("inlineCode",{parentName:"p"},"onBlur")," callback now behaves similar to the ",(0,o.mdx)("inlineCode",{parentName:"p"},"onFocus")," callback where ",(0,o.mdx)("inlineCode",{parentName:"p"},"onBlur")," would not be triggered when focus is transfered from the date input to the calendar button. The ",(0,o.mdx)("inlineCode",{parentName:"p"},"onBlur")," callback would be triggered only when focus is lost from the entire date picker component."),(0,o.mdx)("h3",{id:"changes-to-filterdate"},"Changes to filterDate"),(0,o.mdx)("p",null,"The parameter in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"filterDate")," callback has changed from a moment date object to an ISO string representation of the date. The reason for this change is to keep consistency with other callbacks."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-diff"},"import React from 'react';\nimport moment from 'moment-timezone';\nimport DatePicker from 'terra-date-picker';\n\nclass Default extends React.Component {\n  constructor() {\n    super();\n    this.handleFilterDate = this.handleFilterDate.bind(this);\n  }\n\n  handleFilterDate(date) {\n+   const momentDate = moment(date)\n    const day = momentDate.day();\n    return day !== 0 && day !== 6;\n  }\n\n  render() {\n    return (\n      <DatePicker\n        name=\"date-picker\"\n        filterDate={this.handleFilterDate}\n      />\n    );\n  }\n}\n\nexport default Default;\n")),(0,o.mdx)("h2",{id:"changes-from-version-2-to-version-3"},"Changes from version 2 to version 3"),(0,o.mdx)("h3",{id:"changes-to-css-custom-properties"},"Changes to CSS Custom Properties"),(0,o.mdx)("h4",{id:"added"},"Added"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"--terra-date-picker-input-focus-border-color"),(0,o.mdx)("li",{parentName:"ul"},"--terra-date-picker-button-border"),(0,o.mdx)("li",{parentName:"ul"},"--terra-date-picker-button-border-bottom-right-radius"),(0,o.mdx)("li",{parentName:"ul"},"--terra-date-picker-button-border-top-right-radius"),(0,o.mdx)("li",{parentName:"ul"},"--terra-date-picker-button-box-shadow"),(0,o.mdx)("li",{parentName:"ul"},"--terra-date-picker-button-color"),(0,o.mdx)("li",{parentName:"ul"},"--terra-date-picker-button-focus-border-color"),(0,o.mdx)("li",{parentName:"ul"},"--terra-date-picker-button-focus-box-shadow")))}m.isMDXComponent=!0},47558:function(e,t,n){n.d(t,{E:function(){return o}});var r=n(96540),a=n(55713),o=function(e){var t=e.url;return r.createElement(a.A,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-date-picker",name:"terra-date-picker",version:"4.109.0",url:t})}},25642:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},58168:function(e,t,n){function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}n.d(t,{A:function(){return r}})},53986:function(e,t,n){function r(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,{A:function(){return r}})}}]);