"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[23043],{22863:function(e,n,a){var r=a(64836);n.Z=void 0;var t=r(a(67294)),o=r(a(45697)),s=r(a(47166)),i=r(a(17422)),p=s.default.bind(i.default),l={name:o.default.string.isRequired,src:o.default.string,url:o.default.string,version:o.default.string.isRequired},d=function(e){var n=e.src,a=e.name,r=e.url,o=e.version,s=t.default.createElement("a",{className:p("badge"),href:r||"https://www.npmjs.org/package/".concat(a,"/v/").concat(o)},t.default.createElement("span",{className:p("badge-name")},r?"package":"npm"),t.default.createElement("span",{className:p("badge-version")},"v".concat(o))),i=n?t.default.createElement("a",{className:p("badge"),href:n},t.default.createElement("span",{className:p("badge-name")},"github"),t.default.createElement("span",{className:p("badge-version")},"source")):void 0;return t.default.createElement("div",{className:p("badge-container")},s,i)};d.propTypes=l;var c=d;n.Z=c},23043:function(e,n,a){a.r(n),a.d(n,{default:function(){return d}});var r=a(87462),t=a(44925),o=(a(67294),a(81254)),s=a(557),i=["components"],p={},l="wrapper";function d(e){var n=e.components,a=(0,t.Z)(e,i);return(0,o.mdx)(l,(0,r.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)(s.C,{mdxType:"Badge"}),(0,o.mdx)("h1",{id:"upgrade-guide---v2-to-v3"},"Upgrade Guide - v2 to v3"),(0,o.mdx)("p",null,"Versions 2.x of the DisclosureManager utilize prop injection to provide child components with functions used to change the DisclosureManager state. With versions 3.x, the DisclosureManager uses React's Context API instead of prop injection to provide those functions. Components that interact with a DisclosureManager (or one of Terra's provided implementations, ModalManager or SlidePanelManager) must be updated to continue getting access to the DisclosureManager APIs."),(0,o.mdx)("p",null,"Components today that receive an ",(0,o.mdx)("inlineCode",{parentName:"p"},"app")," prop from a DisclosureManager will need to use the ",(0,o.mdx)("inlineCode",{parentName:"p"},"withDisclosureManager()")," higher order component generator to interface with the DisclosureManager's context. Instead of a prop named ",(0,o.mdx)("inlineCode",{parentName:"p"},"app"),", components wrapped with ",(0,o.mdx)("inlineCode",{parentName:"p"},"withDisclosureManager()")," will receive a prop named ",(0,o.mdx)("inlineCode",{parentName:"p"},"disclosureManager"),". "),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"disclosureManager")," prop is equivalent to the previous ",(0,o.mdx)("inlineCode",{parentName:"p"},"app")," prop; it has just been renamed to better unify the consumer-facing API conventions with the DisclosureManager itself. As a result of this renaming, the ",(0,o.mdx)("inlineCode",{parentName:"p"},"terra-app-delegate")," package has been deprecated and is no longer used. The ",(0,o.mdx)("inlineCode",{parentName:"p"},"disclosureManagerShape")," object can be imported from the ",(0,o.mdx)("inlineCode",{parentName:"p"},"terra-disclosure-manager")," package instead for use in other propType declarations."),(0,o.mdx)("p",null,"With prop injection, the ",(0,o.mdx)("inlineCode",{parentName:"p"},"app")," prop was only provided to immediate children of the DisclosureManager. However, by using context, the ",(0,o.mdx)("inlineCode",{parentName:"p"},"disclosureManager")," value will be exposed to any children of the DisclosureManager that are wrapped with ",(0,o.mdx)("inlineCode",{parentName:"p"},"withDisclosureManager()"),". Components that are currently passing an ",(0,o.mdx)("inlineCode",{parentName:"p"},"app")," prop around to their own child components should be able to remove that logic and have those subsequent children interface with the context directly. Components that do not directly interact with the DisclosureManager should be able to safely ignore its existance."),(0,o.mdx)("p",null,"The below examples show contrasting v2.x and v3.x implementations of components that interact with a DisclosureManager (in this case, a ModalManager)."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-diff"},"/**\n * v2.x to v3.x\n */\n import Base from 'terra-base';\n import ModalManager from 'terra-modal-manager'; \n- import AppDelegate from 'terra-app-delegate';\n+ import { withDisclosureManager, disclosureManagerShape } from 'terra-disclosure-manager';\n\n- const MyDisclosureComponent = ({ app }) => (\n+ const MyDisclosureComponent = withDisclosureManager(({ disclosureManager }) => (\n   <Button\n     text=\"Close Modal\"\n     onClick={() => { \n-      app.closeDisclosure();\n+      disclosureManager.closeDisclosure();\n     }}\n   />\n- );\n+ ));\n\n MyDisclosureComponent.propType = {\n-   app: AppDelegate.propType,\n+   disclosureManager: disclosureManagerShape,\n };\n\n- const MyComponent = ({ app }) => (\n+ const MyComponent = withDisclosureManager(({ disclosureManager }) => (\n    <Button\n      text=\"Launch Modal\"\n      onClick={() => { \n-       app.disclose({\n+       disclosureManager.disclose({\n          preferredType: 'modal',\n          content: {\n            key: 'MY-MODAL-DISCLOSURE',\n            component: <MyDisclosureComponent />,\n          }\n        });\n      }}\n   />\n- );\n+ ));\n \n MyComponent.propType = {\n-   app: AppDelegate.propType,\n+   disclosureManager: disclosureManagerShape,\n };\n\n const MyApp = () => (\n   <Base locale=\"en\">\n     <ModalManager>\n       <MyComponent />\n     </ModalManager>\n   </Base>\n );\n")))}d.isMDXComponent=!0},557:function(e,n,a){a.d(n,{C:function(){return o}});var r=a(67294),t=a(22863),o=function(e){var n=e.url;return r.createElement(t.Z,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-disclosure-manager",name:"terra-disclosure-manager",version:"4.42.0",url:n})}},17422:function(e,n,a){a.r(n),n.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},87462:function(e,n,a){function r(){return r=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},r.apply(this,arguments)}a.d(n,{Z:function(){return r}})},44925:function(e,n,a){function r(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}a.d(n,{Z:function(){return r}})}}]);