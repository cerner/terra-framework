"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[67085],{22863:function(e,t,a){var n=a(64836);t.Z=void 0;var r=n(a(67294)),o=n(a(45697)),l=n(a(47166)),i=n(a(17422)),u=l.default.bind(i.default),d={name:o.default.string.isRequired,src:o.default.string,url:o.default.string,version:o.default.string.isRequired},c=function(e){var t=e.src,a=e.name,n=e.url,o=e.version,l=r.default.createElement("a",{className:u("badge"),href:n||"https://www.npmjs.org/package/".concat(a,"/v/").concat(o)},r.default.createElement("span",{className:u("badge-name")},n?"package":"npm"),r.default.createElement("span",{className:u("badge-version")},"v".concat(o))),i=t?r.default.createElement("a",{className:u("badge"),href:t},r.default.createElement("span",{className:u("badge-name")},"github"),r.default.createElement("span",{className:u("badge-version")},"source")):void 0;return r.default.createElement("div",{className:u("badge-container")},l,i)};c.propTypes=d;var s=c;t.Z=s},40996:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=d(a(67294)),r=d(a(45697)),o=d(a(47166)),l=d(a(47341)),i=d(a(66983)),u=["children"];function d(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},c.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=o.default.bind(i.default),f=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},p=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},_={children:r.default.string},g=function(e){var t=e.children,a=s(e,u),r=n.default.useContext(l.default),i=(0,o.default)(m(["button",r.className]),a.className);return n.default.createElement("button",c({},a,{type:"button",className:i,onBlur:f,onMouseDown:p,"data-focus-styles-enabled":!0}),t)};g.propTypes=_;var h=g;t.default=h},59278:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(a(67294)),r=u(a(45697)),o=u(a(47166)),l=u(a(47341)),i=u(a(30866));function u(e){return e&&e.__esModule?e:{default:e}}var d=o.default.bind(i.default),c={ariaLevel:r.default.oneOf(["2","3","4","5","6"]),children:r.default.node,variant:r.default.oneOf(["ux-recommendation","caution","deprecation","maintenance","important","not-supported"])},s=function(e){var t=e.ariaLevel,a=e.variant,r=e.children,o=n.default.useContext(l.default);return n.default.createElement("div",{className:d("notice",a,o.className)},n.default.createElement("div",{className:d("accessory"),"aria-hidden":"true",focusable:"false"}),n.default.createElement("div",{role:"heading",className:d("title"),"aria-level":t},n.default.createElement("span",null,function(e){return"ux-recommendation"===e?"UX Recommendation":"caution"===e?"Caution":"deprecation"===e?"Deprecation Notice":"maintenance"===e?"In Maintenance":"important"===e?"Important":"not-supported"===e?"Hazards for Incorrect Usage":"error"}(a))),n.default.createElement("div",{className:d("children")},function(e){return"not-supported"===e?n.default.createElement(n.default.Fragment,null,n.default.createElement("p",{className:d("paragraph")},"This component was designed and tested according to the documented implementation."),n.default.createElement("p",{className:d("paragraph")},"Using the component incorrectly:",n.default.createElement("ul",{className:d("list")},n.default.createElement("li",null,"will likely result in improper composition and create accessibility issues"),n.default.createElement("li",null,"may cause erratic or broken behaviors and styles"),n.default.createElement("li",null,n.default.createElement("strong",null,"will not be supported "),"or enhanced to allow for incorrect use")))):null}(a),n.default.Children.map(r,(function(e){return"string"==typeof e?n.default.createElement("p",null,e):e}))))};s.propTypes=c,s.defaultProps={ariaLevel:"2",variant:"important"};var m=s;t.default=m},47306:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=c(a(67294)),r=c(a(45697)),o=c(a(94184)),l=c(a(47166)),i=c(a(47341)),u=c(a(42620)),d=["title"];function c(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},s.apply(this,arguments)}function m(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var f=l.default.bind(u.default),p={title:r.default.string},_=function(e){var t=e.title,a=m(e,d),r=n.default.useContext(i.default),l=(0,o.default)(f(["placeholder",r.className]),a.className),u=f(["inner"]);return n.default.createElement("div",s({},a,{className:l}),n.default.createElement("div",{className:u},n.default.createElement("p",{className:f("title")},t)))};_.propTypes=p,_.defaultProps={title:""};var g=_;t.default=g},34261:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"Notice",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"Placeholder",{enumerable:!0,get:function(){return r.default}});var n=l(a(59278)),r=l(a(47306)),o=l(a(40996));function l(e){return e&&e.__esModule?e:{default:e}}},67085:function(e,t,a){a.r(t),a.d(t,{default:function(){return s}});var n=a(87462),r=a(44925),o=(a(67294),a(81254)),l=a(43275),i=a(34261),u=["components"],d={},c="wrapper";function s(e){var t=e.components,a=(0,r.Z)(e,u);return(0,o.mdx)(c,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)(l.C,{mdxType:"Badge"}),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"https://github.com/cerner/terra-framework/tree/main/packages/terra-dialog-modal#readme"},(0,o.mdx)("img",{parentName:"a",src:"https://badgen.net/badge/status/Deprecated/grey",alt:"Deprecated"}))),(0,o.mdx)("h1",{id:"terra-dialog-modal-upgrade-guide"},"Terra Dialog Modal Upgrade Guide"),(0,o.mdx)(i.Notice,{variant:"deprecation",mdxType:"Notice"},(0,o.mdx)("p",null,"The terra-dialog-modal has been deprecated and is no longer recommended for use. Use ",(0,o.mdx)("a",{parentName:"p",href:"https://engineering.cerner.com/terra-ui/application/terra-application/components/modal-manager"},"ModalManager")," from ",(0,o.mdx)("a",{parentName:"p",href:"https://engineering.cerner.com/terra-ui/application/terra-application/application"},"terra-application")," for an alternative modal implementation. The terra-dialog-modal package has been deprecated because duplicates functionality found in the modal manager package.")),(0,o.mdx)("h2",{id:"changes-from-version-1-to-version-2"},"Changes from version 1 to version 2"),(0,o.mdx)("h3",{id:"changes-to-css-custom-properties"},"Changes to CSS Custom Properties"),(0,o.mdx)("h4",{id:"added"},"Added"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"--terra-dialog-modal-box-shadow")))}s.isMDXComponent=!0},43275:function(e,t,a){a.d(t,{C:function(){return o}});var n=a(67294),r=a(22863),o=function(e){var t=e.url;return n.createElement(r.Z,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-dialog-modal",name:"terra-dialog-modal",version:"3.88.0",url:t})}},17422:function(e,t,a){a.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},66983:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"Button-module__clinical-lowlight-theme___TyZWB","orion-fusion-theme":"Button-module__orion-fusion-theme___q-FcQ",button:"Button-module__button___QuCn2","is-active":"Button-module__is-active___Z8AuK"}},30866:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"Notice-module__clinical-lowlight-theme___aa5xV","orion-fusion-theme":"Notice-module__orion-fusion-theme___QAE-T",notice:"Notice-module__notice___GWkPA",children:"Notice-module__children___lDYsm",accessory:"Notice-module__accessory___wkLOG",title:"Notice-module__title___6H5tc","ux-recommendation":"Notice-module__ux-recommendation___N8BuK",caution:"Notice-module__caution___hPrVl",deprecation:"Notice-module__deprecation___g1drA",maintenance:"Notice-module__maintenance___kWLIZ",important:"Notice-module__important___p5DiF","not-supported":"Notice-module__not-supported___34bHd",paragraph:"Notice-module__paragraph___5h-w1",list:"Notice-module__list___M2Kxj"}},42620:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"Placeholder-module__clinical-lowlight-theme___Obm9K","orion-fusion-theme":"Placeholder-module__orion-fusion-theme___svHY+",placeholder:"Placeholder-module__placeholder___ZZDXd",inner:"Placeholder-module__inner___fJq9o",title:"Placeholder-module__title___teBSo"}},87462:function(e,t,a){function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},n.apply(this,arguments)}a.d(t,{Z:function(){return n}})},44925:function(e,t,a){function n(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}a.d(t,{Z:function(){return n}})}}]);