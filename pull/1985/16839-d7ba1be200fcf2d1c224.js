"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[16839],{22863:function(e,r,a){var n=a(64836);r.Z=void 0;var t=n(a(67294)),d=n(a(45697)),o=n(a(47166)),m=n(a(17422)),i=o.default.bind(m.default),l={name:d.default.string.isRequired,src:d.default.string,url:d.default.string,version:d.default.string.isRequired},s=function(e){var r=e.src,a=e.name,n=e.url,d=e.version,o=t.default.createElement("a",{className:i("badge"),href:n||"https://www.npmjs.org/package/".concat(a,"/v/").concat(d)},t.default.createElement("span",{className:i("badge-name")},n?"package":"npm"),t.default.createElement("span",{className:i("badge-version")},"v".concat(d))),m=r?t.default.createElement("a",{className:i("badge"),href:r},t.default.createElement("span",{className:i("badge-name")},"github"),t.default.createElement("span",{className:i("badge-version")},"source")):void 0;return t.default.createElement("div",{className:i("badge-container")},o,m)};s.propTypes=l;var u=s;r.Z=u},16839:function(e,r,a){a.r(r),a.d(r,{default:function(){return s}});var n=a(87462),t=a(44925),d=(a(67294),a(81254)),o=a(81883),m=["components"],i={},l="wrapper";function s(e){var r=e.components,a=(0,t.Z)(e,m);return(0,d.mdx)(l,(0,n.Z)({},i,a,{components:r,mdxType:"MDXLayout"}),(0,d.mdx)(o.C,{mdxType:"Badge"}),(0,d.mdx)("h1",{id:"terra-theme-provider-upgrade-guide"},"Terra Theme Provider Upgrade Guide"),(0,d.mdx)("h2",{id:"changes-from-version-3-to-version-4"},"Changes from version 3 to version 4"),(0,d.mdx)("h3",{id:"removed-props"},"Removed Props"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Removed ",(0,d.mdx)("inlineCode",{parentName:"li"},"isGlobalTheme"))),(0,d.mdx)("h3",{id:"changes-in-functionality"},"Changes in functionality"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"With the removal ",(0,d.mdx)("inlineCode",{parentName:"li"},"isGlobalTheme")," prop, the theme is now applied to the ",(0,d.mdx)("inlineCode",{parentName:"li"},"html")," element instead of the wrapping ",(0,d.mdx)("inlineCode",{parentName:"li"},"div")," element."),(0,d.mdx)("li",{parentName:"ul"},"The ",(0,d.mdx)("inlineCode",{parentName:"li"},"div")," element wrapping the children has been removed.")),(0,d.mdx)("h2",{id:"changes-from-version-2-to-version-3"},"Changes from version 2 to version 3"),(0,d.mdx)("h3",{id:"changes-to-css-custom-properties"},"Changes to CSS Custom Properties"),(0,d.mdx)("h4",{id:"renamed"},"Renamed"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Previous"),(0,d.mdx)("th",{parentName:"tr",align:null},"New"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"--terra-mock-background-color"),(0,d.mdx)("td",{parentName:"tr",align:null},"--terra-theme-provider-mock-background-color")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"--terra-mock-color"),(0,d.mdx)("td",{parentName:"tr",align:null},"--terra-theme-provider-mock-color")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"--terra-mock-display"),(0,d.mdx)("td",{parentName:"tr",align:null},"--terra-theme-provider-mock-display")))))}s.isMDXComponent=!0},81883:function(e,r,a){a.d(r,{C:function(){return d}});var n=a(67294),t=a(22863),d=function(e){var r=e.url;return n.createElement(t.Z,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-theme-provider",name:"terra-theme-provider",version:"4.14.0",url:r})}},17422:function(e,r,a){a.r(r),r.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},87462:function(e,r,a){function n(){return n=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},n.apply(this,arguments)}a.d(r,{Z:function(){return n}})},44925:function(e,r,a){function n(e,r){if(null==e)return{};var a,n,t=function(e,r){if(null==e)return{};var a,n,t={},d=Object.keys(e);for(n=0;n<d.length;n++)a=d[n],r.indexOf(a)>=0||(t[a]=e[a]);return t}(e,r);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(n=0;n<d.length;n++)a=d[n],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}a.d(r,{Z:function(){return n}})}}]);