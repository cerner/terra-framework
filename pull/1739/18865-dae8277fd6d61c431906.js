"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[18865],{22863:function(e,t,r){var n=r(64836);t.Z=void 0;var a=n(r(67294)),i=n(r(45697)),m=n(r(47166)),d=n(r(17422)),l=m.default.bind(d.default),o={name:i.default.string.isRequired,src:i.default.string,url:i.default.string,version:i.default.string.isRequired},u=function(e){var t=e.src,r=e.name,n=e.url,i=e.version,m=a.default.createElement("a",{className:l("badge"),href:n||"https://www.npmjs.org/package/".concat(r,"/v/").concat(i)},a.default.createElement("span",{className:l("badge-name")},n?"package":"npm"),a.default.createElement("span",{className:l("badge-version")},"v".concat(i))),d=t?a.default.createElement("a",{className:l("badge"),href:t},a.default.createElement("span",{className:l("badge-name")},"github"),a.default.createElement("span",{className:l("badge-version")},"source")):void 0;return a.default.createElement("div",{className:l("badge-container")},m,d)};u.propTypes=o;var p=u;t.Z=p},18865:function(e,t,r){r.r(t),r.d(t,{default:function(){return u}});var n=r(87462),a=r(44925),i=(r(67294),r(81254)),m=r(99257),d=["components"],l={},o="wrapper";function u(e){var t=e.components,r=(0,a.Z)(e,d);return(0,i.mdx)(o,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)(m.C,{mdxType:"Badge"}),(0,i.mdx)("h1",{id:"terra-time-input-upgrade-guide"},"Terra Time Input Upgrade Guide"),(0,i.mdx)("h2",{id:"changes-from-version-3-to-version-4"},"Changes from version 3 to version 4"),(0,i.mdx)("h3",{id:"new-props"},"New props"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Added ",(0,i.mdx)("inlineCode",{parentName:"li"},"onFocus")),(0,i.mdx)("li",{parentName:"ul"},"Added ",(0,i.mdx)("inlineCode",{parentName:"li"},"refCallback"))),(0,i.mdx)("h3",{id:"changes-to-onblur-and-onfocus"},"Changes to onBlur and onFocus"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"onFocus")," prop previously could be passed down as a custom prop. This prop now becomes a first-class prop. The ",(0,i.mdx)("inlineCode",{parentName:"p"},"onFocus")," prop used to be triggered when focus is moved from the hour input to the minute input or any other elements in the same time-input component. The ",(0,i.mdx)("inlineCode",{parentName:"p"},"onFocus")," prop will still be triggered if the time-input component did not have focus and now just gained focus. However, if the focus is then moved from one time-input element to another time-input element, the ",(0,i.mdx)("inlineCode",{parentName:"p"},"onFocus")," callback now would not be triggered because the focus is still within the time-input container. The ",(0,i.mdx)("inlineCode",{parentName:"p"},"onBlur")," callback now behaves similar to the ",(0,i.mdx)("inlineCode",{parentName:"p"},"onFocus")," callback where ",(0,i.mdx)("inlineCode",{parentName:"p"},"onBlur")," would not be triggered when focus is transfered from one time-input element to another time-input element of the same time-input component. The ",(0,i.mdx)("inlineCode",{parentName:"p"},"onBlur")," callback would be triggered only when focus is lost from the entire time-input component."),(0,i.mdx)("h2",{id:"changes-from-version-2-to-version-3"},"Changes from version 2 to version 3"),(0,i.mdx)("h3",{id:"changes-to-css-custom-properties"},"Changes to CSS Custom Properties"),(0,i.mdx)("h4",{id:"renamed"},"Renamed"),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Previous"),(0,i.mdx)("th",{parentName:"tr",align:null},"New"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"--terra-time-input-focus-keyboard-border-color"),(0,i.mdx)("td",{parentName:"tr",align:null},"--terra-time-input-focus-border-color")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"--terra-time-input-focus-keyboard-border-style"),(0,i.mdx)("td",{parentName:"tr",align:null},"--terra-time-input-focus-border-style")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"--terra-time-input-focus-keyboard-border-width"),(0,i.mdx)("td",{parentName:"tr",align:null},"--terra-time-input-focus-border-width")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"--terra-time-input-focus-keyboard-opacity"),(0,i.mdx)("td",{parentName:"tr",align:null},"--terra-time-input-focus-opacity")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"--terra-time-input-background"),(0,i.mdx)("td",{parentName:"tr",align:null},"--terra-time-input-background-color")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"--terra-time-input-animation-background"),(0,i.mdx)("td",{parentName:"tr",align:null},"--terra-time-input-background-image")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"--terra-time-input-background-start"),(0,i.mdx)("td",{parentName:"tr",align:null},"--terra-time-input-background-size")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"--terra-time-input-focus-keyboard-animation-size"),(0,i.mdx)("td",{parentName:"tr",align:null},"--terra-time-input-focus-background-size")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"--terra-time-input-focus-keyboard-box-shadow-ltr"),(0,i.mdx)("td",{parentName:"tr",align:null},"--terra-time-input-focus-ltr-box-shadow")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"--terra-time-input-focus-keyboard-box-shadow-rtl"),(0,i.mdx)("td",{parentName:"tr",align:null},"--terra-time-input-focus-rtl-box-shadow")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"--terra-time-input-width-input"),(0,i.mdx)("td",{parentName:"tr",align:null},"--terra-time-input-mobile-min-width")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"--terra-time-input-input-padding-bottom"),(0,i.mdx)("td",{parentName:"tr",align:null},"--terra-time-input-mobile-padding-bottom")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"--terra-time-input-input-padding-left"),(0,i.mdx)("td",{parentName:"tr",align:null},"--terra-time-input-mobile-padding-left")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"--terra-time-input-input-padding-right"),(0,i.mdx)("td",{parentName:"tr",align:null},"--terra-time-input-mobile-padding-right")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"--terra-time-input-input-padding-top"),(0,i.mdx)("td",{parentName:"tr",align:null},"--terra-time-input-mobile-padding-top")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"--terra-time-input-desktop-focused-input-background"),(0,i.mdx)("td",{parentName:"tr",align:null},"--terra-time-input-desktop-focused-input-background-color")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"--terra-time-input-time-spacer-input-margin-top"),(0,i.mdx)("td",{parentName:"tr",align:null},"--terra-time-input-time-spacer-margin-top")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"--terra-time-input-mobile-label-size"),(0,i.mdx)("td",{parentName:"tr",align:null},"--terra-time-input-mobile-label-font-size")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"--terra-time-input-border-radius"),(0,i.mdx)("td",{parentName:"tr",align:null},"--terra-time-input-desktop-input-border-radius")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"--terra-time-input-meridiem-display-left-margin"),(0,i.mdx)("td",{parentName:"tr",align:null},"--terra-time-input-meridiem-display-margin-left")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"--terra-time-input-line-height"),(0,i.mdx)("td",{parentName:"tr",align:null},"--terra-time-input-mobile-line-height")))),(0,i.mdx)("h4",{id:"added"},"Added"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"--terra-time-input-line-height"),(0,i.mdx)("li",{parentName:"ul"},"--terra-time-input-hover-background-color"),(0,i.mdx)("li",{parentName:"ul"},"--terra-time-input-hover-border"),(0,i.mdx)("li",{parentName:"ul"},"--terra-time-input-hover-color"),(0,i.mdx)("li",{parentName:"ul"},"--terra-time-input-focus-background-color"),(0,i.mdx)("li",{parentName:"ul"},"--terra-time-input-focus-color"),(0,i.mdx)("li",{parentName:"ul"},"--terra-time-input-time-input-group-hour-margin-right"),(0,i.mdx)("li",{parentName:"ul"},"--terra-time-input-time-input-group-minute-margin-left"),(0,i.mdx)("li",{parentName:"ul"},"--terra-time-input-caret-color"),(0,i.mdx)("li",{parentName:"ul"},"--terra-time-input-time-mobile-spacer-margin-top"),(0,i.mdx)("li",{parentName:"ul"},"--terra-time-input-meridiem-button-group-margin-left"),(0,i.mdx)("li",{parentName:"ul"},"--terra-time-input-desktop-background-color"),(0,i.mdx)("li",{parentName:"ul"},"--terra-time-input-color"),(0,i.mdx)("li",{parentName:"ul"},"--terra-time-input-meridiem-button-selected-hover-background-color"),(0,i.mdx)("li",{parentName:"ul"},"--terra-time-input-meridiem-button-selected-hover-border-color"),(0,i.mdx)("li",{parentName:"ul"},"--terra-time-input-meridiem-button-selected-hover-color"),(0,i.mdx)("li",{parentName:"ul"},"--terra-time-input-meridiem-button-font-size")),(0,i.mdx)("h4",{id:"removed"},"Removed"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"--terra-time-input-time-input-group-margin-left"),(0,i.mdx)("li",{parentName:"ul"},"--terra-time-input-time-input-group-margin-right"),(0,i.mdx)("li",{parentName:"ul"},"--terra-time-input-keyboard-border-style"),(0,i.mdx)("li",{parentName:"ul"},"--terra-time-input-keyboard-border-width")))}u.isMDXComponent=!0},99257:function(e,t,r){r.d(t,{C:function(){return i}});var n=r(67294),a=r(22863),i=function(e){var t=e.url;return n.createElement(a.Z,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-time-input",name:"terra-time-input",version:"4.55.0",url:t})}},17422:function(e,t,r){r.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},87462:function(e,t,r){function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},n.apply(this,arguments)}r.d(t,{Z:function(){return n}})},44925:function(e,t,r){function n(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}r.d(t,{Z:function(){return n}})}}]);