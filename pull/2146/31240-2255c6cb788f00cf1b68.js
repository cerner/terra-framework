"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[31240],{55713:function(e,n,a){var r=a(24994);n.A=void 0;var t=r(a(96540)),o=r(a(5556)),s=r(a(67967)),l=r(a(25642)),i=s.default.bind(l.default),c={name:o.default.string.isRequired,src:o.default.string,url:o.default.string,version:o.default.string.isRequired},p=function(e){var n=e.src,a=e.name,r=e.url,o=e.version,s=t.default.createElement("a",{className:i("badge"),href:r||"https://www.npmjs.org/package/".concat(a,"/v/").concat(o)},t.default.createElement("span",{className:i("badge-name")},r?"package":"npm"),t.default.createElement("span",{className:i("badge-version")},"v".concat(o))),l=n?t.default.createElement("a",{className:i("badge"),href:n},t.default.createElement("span",{className:i("badge-name")},"github"),t.default.createElement("span",{className:i("badge-version")},"source")):void 0;return t.default.createElement("div",{className:i("badge-container")},s,l)};p.propTypes=c;n.A=p},8859:function(e,n,a){a.r(n),a.d(n,{default:function(){return p}});var r=a(58168),t=a(53986),o=(a(96540),a(36665)),s=a(63530),l=["components"],i={},c="wrapper";function p(e){var n=e.components,a=(0,t.A)(e,l);return(0,o.mdx)(c,(0,r.A)({},i,a,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)(s.E,{mdxType:"Badge"}),(0,o.mdx)("h1",{id:"terra-slide-panel-manager---upgrade-guide"},"Terra Slide Panel Manager - Upgrade Guide"),(0,o.mdx)("h2",{id:"upgrading-from-v2x-to-v3x"},"Upgrading from v2.x to v3.x"),(0,o.mdx)("p",null,"With the release of terra-disclosure-manager v3.x, the SlidePanelManager now provides its APIs through context instead of prop injection. Please view the terra-disclosure-manager documentation/upgrade guide for more information. "),(0,o.mdx)("p",null,"The below example code details the changes necessary to interact with terra-slide-panel-manager v3.x."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-diff"},"/**\n * v2.x to v3.x\n */\n import Base from 'terra-base';\n import SlidePanelManager from 'terra-slide-panel-manager'; \n- import AppDelegate from 'terra-app-delegate';\n+ import { withDisclosureManager, disclosureManagerShape } from 'terra-disclosure-manager';\n\n- const MyDisclosureComponent = ({ app }) => (\n+ const MyDisclosureComponent = withDisclosureManager(({ disclosureManager }) => (\n   <Button\n     text=\"Close Panel\"\n     onClick={() => { \n-      app.closeDisclosure();\n+      disclosureManager.closeDisclosure();\n     }}\n   />\n- );\n+ ));\n\n MyDisclosureComponent.propType = {\n-   app: AppDelegate.propType,\n+   disclosureManager: disclosureManagerShape,\n };\n\n- const MyComponent = ({ app }) => (\n+ const MyComponent = withDisclosureManager(({ disclosureManager }) => (\n    <Button\n      text=\"Launch Panel\"\n      onClick={() => { \n-       app.disclose({\n+       disclosureManager.disclose({\n          preferredType: 'panel',\n          content: {\n            key: 'MY-PANEL-DISCLOSURE',\n            component: <MyDisclosureComponent />,\n          }\n        });\n      }}\n   />\n- );\n+ ));\n \n MyComponent.propType = {\n-   app: AppDelegate.propType,\n+   disclosureManager: disclosureManagerShape,\n };\n\n const MyApp = () => (\n   <Base locale=\"en\">\n     <SlidePanelManager>\n       <MyComponent />\n     </SlidePanelManager>\n   </Base>\n );\n")))}p.isMDXComponent=!0},63530:function(e,n,a){a.d(n,{E:function(){return o}});var r=a(96540),t=a(55713),o=function(e){var n=e.url;return r.createElement(t.A,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-slide-panel-manager",name:"terra-slide-panel-manager",version:"5.102.0",url:n})}},25642:function(e,n,a){a.r(n),n.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},58168:function(e,n,a){function r(){return r=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},r.apply(this,arguments)}a.d(n,{A:function(){return r}})},53986:function(e,n,a){function r(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}a.d(n,{A:function(){return r}})}}]);