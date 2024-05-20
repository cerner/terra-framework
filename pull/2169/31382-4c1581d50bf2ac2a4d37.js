"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[31382],{55713:function(e,t,a){var n=a(24994);t.A=void 0;var r=n(a(96540)),i=n(a(5556)),l=n(a(67967)),d=n(a(25642)),o=l.default.bind(d.default),m={name:i.default.string.isRequired,src:i.default.string,url:i.default.string,version:i.default.string.isRequired},u=function(e){var t=e.src,a=e.name,n=e.url,i=e.version,l=r.default.createElement("a",{className:o("badge"),href:n||"https://www.npmjs.org/package/".concat(a,"/v/").concat(i)},r.default.createElement("span",{className:o("badge-name")},n?"package":"npm"),r.default.createElement("span",{className:o("badge-version")},"v".concat(i))),d=t?r.default.createElement("a",{className:o("badge"),href:t},r.default.createElement("span",{className:o("badge-name")},"github"),r.default.createElement("span",{className:o("badge-version")},"source")):void 0;return r.default.createElement("div",{className:o("badge-container")},l,d)};u.propTypes=m;t.A=u},31382:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var n=a(58168),r=a(53986),i=(a(96540),a(36665)),l=a(49879),d=["components"],o={},m="wrapper";function u(e){var t=e.components,a=(0,r.A)(e,d);return(0,i.mdx)(m,(0,n.A)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)(l.E,{mdxType:"Badge"}),(0,i.mdx)("h1",{id:"keyboard-shortcuts-for-terra-date-time-picker"},"Keyboard Shortcuts for Terra Date Time Picker"),(0,i.mdx)("p",null,"The Terra Date Time Picker offers additional functionality with specific keyboard shortcuts to save time when interacting with date and time inputs in terra-date-time-picker."),(0,i.mdx)("p",null,(0,i.mdx)("em",{parentName:"p"},"Note: these commands assume a QWERTY keyboard layout. Other layouts will probably still work, but they have not yet been tested.")),(0,i.mdx)("p",null,"Pressing any of the supported keys while the input is in focus will populate the inputs with the listed shortcut response."),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Key / Sequence"),(0,i.mdx)("th",{parentName:"tr",align:null},"Input"),(0,i.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"T"),(0,i.mdx)("td",{parentName:"tr",align:null},"Date"),(0,i.mdx)("td",{parentName:"tr",align:null},"Sets the date value to the current date (Today).")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"-"),(0,i.mdx)("td",{parentName:"tr",align:null},"DateTime"),(0,i.mdx)("td",{parentName:"tr",align:null},"Decrements the focused value by 1 Unit. The unit can be month, day, year, hour or minute. If blank or not a valid date or time, input will set value to current focused unit minus 1 unit.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"+"),(0,i.mdx)("td",{parentName:"tr",align:null},"DateTime"),(0,i.mdx)("td",{parentName:"tr",align:null},"Increments  the focused value by 1 Unit. The unit can be month, day, year, hour or minute. If blank or not a valid date or time, input will set value to current focused unit plus 1 unit.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"N"),(0,i.mdx)("td",{parentName:"tr",align:null},"Time"),(0,i.mdx)("td",{parentName:"tr",align:null},"Sets the time value to the current time (Now). Also sets date to the current date if there is no date or invalid date")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"A"),(0,i.mdx)("td",{parentName:"tr",align:null},"Time"),(0,i.mdx)("td",{parentName:"tr",align:null},"In a 12 hour clock, sets meridiem to antemeridiem. If blank or not a valid time or date, input will set date to current date and value to midnight. If not a 12 hour clock, will do nothing.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"P"),(0,i.mdx)("td",{parentName:"tr",align:null},"Time"),(0,i.mdx)("td",{parentName:"tr",align:null},"In a 12 hour clock, sets meridiem to postmeridiem. If blank or not a valid time or date, input will set date to current date and value to noon. If not a 12 hour clock, will do nothing.")))),(0,i.mdx)("p",null,(0,i.mdx)("em",{parentName:"p"},"Note: For any key listed, pressing the designated keyboard character key is not specific to uppercase or lowercase and works for both cases (e.g. if capslock or shift key is also being applied). Uppercase-only usage is not required.")),(0,i.mdx)("h2",{id:"release-notes-for-specific-versions"},"Release notes for specific versions"),(0,i.mdx)("h3",{id:"4730"},"4.73.0"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Initial keyboard shortcut release. This adds the key listeners to the day input, month input, and the year number input.")))}u.isMDXComponent=!0},49879:function(e,t,a){a.d(t,{E:function(){return i}});var n=a(96540),r=a(55713),i=function(e){var t=e.url;return n.createElement(r.A,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-date-time-picker",name:"terra-date-time-picker",version:"4.118.1",url:t})}},25642:function(e,t,a){a.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},58168:function(e,t,a){function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},n.apply(this,arguments)}a.d(t,{A:function(){return n}})},53986:function(e,t,a){function n(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;a[n]=e[n]}return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}a.d(t,{A:function(){return n}})}}]);