"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[49229],{22863:function(e,a,n){var r=n(64836);a.Z=void 0;var t=r(n(67294)),o=r(n(45697)),u=r(n(47166)),c=r(n(17422)),l=u.default.bind(c.default),s={name:o.default.string.isRequired,src:o.default.string,url:o.default.string,version:o.default.string.isRequired},i=function(e){var a=e.src,n=e.name,r=e.url,o=e.version,u=t.default.createElement("a",{className:l("badge"),href:r||"https://www.npmjs.org/package/".concat(n,"/v/").concat(o)},t.default.createElement("span",{className:l("badge-name")},r?"package":"npm"),t.default.createElement("span",{className:l("badge-version")},"v".concat(o))),c=a?t.default.createElement("a",{className:l("badge"),href:a},t.default.createElement("span",{className:l("badge-name")},"github"),t.default.createElement("span",{className:l("badge-version")},"source")):void 0;return t.default.createElement("div",{className:l("badge-container")},u,c)};i.propTypes=s;var d=i;a.Z=d},49229:function(e,a,n){n.r(a),n.d(a,{default:function(){return i}});var r=n(87462),t=n(44925),o=(n(67294),n(81254)),u=n(61701),c=["components"],l={},s="wrapper";function i(e){var a=e.components,n=(0,t.Z)(e,c);return(0,o.mdx)(s,(0,r.Z)({},l,n,{components:a,mdxType:"MDXLayout"}),(0,o.mdx)(u.C,{mdxType:"Badge"}),(0,o.mdx)("h1",{id:"terra-table-upgrade-guide"},"Terra Table Upgrade Guide"),(0,o.mdx)("h2",{id:"changes-from-4x-to-50"},"Changes from 4.x to 5.0"),(0,o.mdx)("p",null,"Terra table will no longer support grid-like (focus, keyboard navigation, etc) functionality and now behaves more like a native, accessible table. See the Docs for new functionality."))}i.isMDXComponent=!0},61701:function(e,a,n){n.d(a,{C:function(){return o}});var r=n(67294),t=n(22863),o=function(e){var a=e.url;return r.createElement(t.Z,{src:"https://github.com/cerner/table-framework/tree/main/packages/terra-table",name:"terra-table",version:"5.0.0-alpha.0",url:a})}},17422:function(e,a,n){n.r(a),a.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},87462:function(e,a,n){function r(){return r=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}n.d(a,{Z:function(){return r}})},44925:function(e,a,n){function r(e,a){if(null==e)return{};var n,r,t=function(e,a){if(null==e)return{};var n,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}n.d(a,{Z:function(){return r}})}}]);