"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[45568],{22863:function(e,t,n){var a=n(64836);t.Z=void 0;var r=a(n(67294)),i=a(n(45697)),l=a(n(47166)),o=a(n(17422)),u=l.default.bind(o.default),d={name:i.default.string.isRequired,src:i.default.string,url:i.default.string,version:i.default.string.isRequired},m=function(e){var t=e.src,n=e.name,a=e.url,i=e.version,l=r.default.createElement("a",{className:u("badge"),href:a||"https://www.npmjs.org/package/".concat(n,"/v/").concat(i)},r.default.createElement("span",{className:u("badge-name")},a?"package":"npm"),r.default.createElement("span",{className:u("badge-version")},"v".concat(i))),o=t?r.default.createElement("a",{className:u("badge"),href:t},r.default.createElement("span",{className:u("badge-name")},"github"),r.default.createElement("span",{className:u("badge-version")},"source")):void 0;return r.default.createElement("div",{className:u("badge-container")},l,o)};m.propTypes=d;var s=m;t.Z=s},45568:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var a=n(87462),r=n(44925),i=(n(67294),n(81254)),l=n(99257),o=["components"],u={},d="wrapper";function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.mdx)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)(l.C,{mdxType:"Badge"}),(0,i.mdx)("h1",{id:"keyboard-shortcuts-for-terra-time-input"},"Keyboard Shortcuts for Terra Time Input"),(0,i.mdx)("p",null,"The Terra Time Input offers additional functionality with specific keyboard shortcuts to save time when interacting with time inputs."),(0,i.mdx)("p",null,"Pressing any of the supported keys while the input is in focus will populate the inputs with the listed shortcut response."),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Key / Sequence"),(0,i.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"N"),(0,i.mdx)("td",{parentName:"tr",align:null},"Sets the time value to the current time (Now).")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"-"),(0,i.mdx)("td",{parentName:"tr",align:null},"Decrements the minute value by 1 minute. If blank or not a valid time, input will set value to current time minus 1 minute.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"+"),(0,i.mdx)("td",{parentName:"tr",align:null},"Increments the minute value by 1 minute. If blank or not a valid time, input will set value to current time plus 1 minute.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"A"),(0,i.mdx)("td",{parentName:"tr",align:null},"In a 12 hour clock, sets meridiem to antemeridiem. If blank or not a valid time, input will set value to midnight. If not a 12 hour clock, will do nothing.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"P"),(0,i.mdx)("td",{parentName:"tr",align:null},"In a 12 hour clock, sets meridiem to postmeridiem. If blank or not a valid time, input will set value to noon. If not a 12 hour clock, will do nothing.")))),(0,i.mdx)("p",null,(0,i.mdx)("em",{parentName:"p"},"Note: For any key listed, pressing the designated keyboard character key is not specific to uppercase or lowercase and works for both cases (e.g. if capslock or shift key is also being applied). Uppercase-only usage is not required.")),(0,i.mdx)("h2",{id:"release-notes-for-specific-versions"},"Release notes for specific versions"),(0,i.mdx)("h3",{id:"4431"},"4.43.1"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Initial keyboard shortcut release. This adds the key listeners to the hour number input, minute number input, and second number input.")))}m.isMDXComponent=!0},99257:function(e,t,n){n.d(t,{C:function(){return i}});var a=n(67294),r=n(22863),i=function(e){var t=e.url;return a.createElement(r.Z,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-time-input",name:"terra-time-input",version:"4.59.0",url:t})}},17422:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},87462:function(e,t,n){function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},a.apply(this,arguments)}n.d(t,{Z:function(){return a}})},44925:function(e,t,n){function a(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,{Z:function(){return a}})}}]);