"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[77481],{22863:function(e,t,a){var n=a(64836);t.Z=void 0;var r=n(a(67294)),o=n(a(45697)),i=n(a(19845)),s=n(a(17422)),d=i.default.bind(s.default),l={name:o.default.string.isRequired,src:o.default.string,url:o.default.string,version:o.default.string.isRequired},u=function(e){var t=e.src,a=e.name,n=e.url,o=e.version,i=r.default.createElement("a",{className:d("badge"),href:n||"https://www.npmjs.org/package/".concat(a,"/v/").concat(o)},r.default.createElement("span",{className:d("badge-name")},n?"package":"npm"),r.default.createElement("span",{className:d("badge-version")},"v".concat(o))),s=t?r.default.createElement("a",{className:d("badge"),href:t},r.default.createElement("span",{className:d("badge-name")},"github"),r.default.createElement("span",{className:d("badge-version")},"source")):void 0;return r.default.createElement("div",{className:d("badge-container")},i,s)};u.propTypes=l;var c=u;t.Z=c},77481:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var n=a(87462),r=a(44925),o=(a(67294),a(81254)),i=a(69460),s=["components"],d={},l="wrapper";function u(e){var t=e.components,a=(0,r.Z)(e,s);return(0,o.mdx)(l,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)(i.C,{mdxType:"Badge"}),(0,o.mdx)("h1",{id:"keyboard-shortcuts-for-terra-date-input"},"Keyboard Shortcuts for Terra Date Input"),(0,o.mdx)("p",null,"The Terra Date Input offers additional functionality with specific keyboard shortcuts to save time when interacting with date inputs."),(0,o.mdx)("p",null,"Pressing any of the supported keys while the input is in focus will populate the inputs with the listed shortcut response."),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Key / Sequence"),(0,o.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"T"),(0,o.mdx)("td",{parentName:"tr",align:null},"Sets the date value to the current date (Today).")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"-"),(0,o.mdx)("td",{parentName:"tr",align:null},"Decrements the date value by 1 day. If blank or not a valid date, input will set value to Yesterday.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"+"),(0,o.mdx)("td",{parentName:"tr",align:null},"Increments the date value by 1 day. If blank or not a valid date, input will set value to Tomorrow.")))),(0,o.mdx)("p",null,(0,o.mdx)("em",{parentName:"p"},"Note: For any key listed, pressing the designated keyboard character key is not specific to uppercase or lowercase and works for both cases (e.g. if capslock or shift key is also being applied). Uppercase-only usage is not required.")),(0,o.mdx)("h2",{id:"release-notes-for-specific-versions"},"Release notes for specific versions"),(0,o.mdx)("h3",{id:"1320"},"1.32.0"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Initial release. This adds the key listeners to the day number input and the year number input, but does not add the listeners or shortcut responses to the month dropdown select input, since pressing keys with the dropdown in focus will contradict with the select's existing behavior of attempting to match the localized month name strings. This will continue to be explored with how to best add the keyboard shortcut behavior for the month dropdown potentially in a future release.")))}u.isMDXComponent=!0},69460:function(e,t,a){a.d(t,{C:function(){return o}});var n=a(67294),r=a(22863),o=function(e){var t=e.url;return n.createElement(r.Z,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-date-input",name:"terra-date-input",version:"1.49.0",url:t})}},17422:function(e,t,a){a.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},87462:function(e,t,a){function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},n.apply(this,arguments)}a.d(t,{Z:function(){return n}})},44925:function(e,t,a){function n(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}a.d(t,{Z:function(){return n}})}}]);