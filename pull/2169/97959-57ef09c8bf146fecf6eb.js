"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[97959],{55713:function(e,n,a){var r=a(24994);n.A=void 0;var t=r(a(96540)),o=r(a(5556)),s=r(a(67967)),c=r(a(25642)),i=s.default.bind(c.default),l={name:o.default.string.isRequired,src:o.default.string,url:o.default.string,version:o.default.string.isRequired},u=function(e){var n=e.src,a=e.name,r=e.url,o=e.version,s=t.default.createElement("a",{className:i("badge"),href:r||"https://www.npmjs.org/package/".concat(a,"/v/").concat(o)},t.default.createElement("span",{className:i("badge-name")},r?"package":"npm"),t.default.createElement("span",{className:i("badge-version")},"v".concat(o))),c=n?t.default.createElement("a",{className:i("badge"),href:n},t.default.createElement("span",{className:i("badge-name")},"github"),t.default.createElement("span",{className:i("badge-version")},"source")):void 0;return t.default.createElement("div",{className:i("badge-container")},s,c)};u.propTypes=l;n.A=u},97959:function(e,n,a){a.r(n),a.d(n,{default:function(){return u}});var r=a(58168),t=a(53986),o=(a(96540),a(36665)),s=a(21547),c=["components"],i={},l="wrapper";function u(e){var n=e.components,a=(0,t.A)(e,c);return(0,o.mdx)(l,(0,r.A)({},i,a,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)(s.E,{mdxType:"Badge"}),(0,o.mdx)("h1",{id:"interacting-with-the-disclosure-manager"},"Interacting with the Disclosure Manager"),(0,o.mdx)("p",null,"The DisclosureManager wraps its contents in a context provider that exposes an instance of a DisclosureManagerDelegate. The DisclosureManagerDelegate is an object containing DisclosureManager APIs that reflect where a component has been rendered in the disclosure stack."),(0,o.mdx)("p",null,"The Disclosure Manager exposes the DisclosureManagerDelegate via the DisclosureManagerContext. This context can be used directly via the ",(0,o.mdx)("inlineCode",{parentName:"p"},"DisclosureManagerContext")," or it can be consumed with the HOC ",(0,o.mdx)("inlineCode",{parentName:"p"},"withDisclosureManager")," wrapper."),(0,o.mdx)("h2",{id:"disclosuremanagercontext"},"DisclosureManagerContext"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"DisclosureManagerContext")," can be used directly to access the available DisclosureManager APIs."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport ModalManager from 'terra-modal-manager'; \nimport { DisclosureManagerContext } from 'terra-disclosure-manager';\n\nconst DisclosedComponent = () => {\nconst disclosureManager = React.useContext(DisclosureManagerContext);\n\n  return (\n    <Button\n      text=\"Close Modal\"\n      onClick={() => { \n        disclosureManager.closeDisclosure();\n      }}\n    />\n  );\n};\n\nconst DisclosingComponent = () => {\n  const disclosureManager = React.useContext(DisclosureManagerContext);\n\n  return (\n    <ModalManager>\n      <Button\n        text=\"Launch Modal\"\n        onClick={() => { \n          disclosureManager.disclose({\n            preferredType: 'modal',\n            content: {\n              key: 'DISCLOSED-COMPONENT',\n              title: 'My Disclosed Component',\n              component: <DisclosedComponent />,\n            }\n          });\n        }}\n      />\n    </ModalManager>\n  );\n};\n")),(0,o.mdx)("h4",{id:"withdisclosuremanager"},"withDisclosureManager"),(0,o.mdx)("p",null,"Components can also use the higher order component ",(0,o.mdx)("inlineCode",{parentName:"p"},"withDisclosureManager()")," to automatically wrap themselves in a context consumer and receive a prop named ",(0,o.mdx)("inlineCode",{parentName:"p"},"disclosureManager")," containing a DisclosureManagerDelegate instance."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-jsx"},"import Base from 'terra-base';\nimport ModalManager from 'terra-modal-manager';\nimport { withDisclosureManager, disclosureManagerShape } from 'terra-disclosure-manager';\n\nconst DisclosedComponent = withDisclosureManager(({ disclosureManager }) => (\n  <Button\n    text=\"Close Modal\"\n    onClick={() => {\n      disclosureManager.closeDisclosure();\n    }}\n  />\n));\n\nDisclosedComponent.propTypes = {\n  disclosureManager: disclosureManagerShape,\n};\n\nconst DisclosingComponent = withDisclosureManager({ disclosureManager }) => (\n  <Button\n    text=\"Launch Modal\"\n    onClick={() => {\n      disclosureManager.disclose({\n        preferredType: 'modal',\n        content: {\n          key: 'MY-MODAL-DISCLOSURE',\n          component: <MyDisclosureComponent />,\n        }\n      });\n    }}\n  />\n);\n\nDisclosingComponent.propTypes = {\n  disclosureManager: disclosureManagerShape,\n};\n")))}u.isMDXComponent=!0},21547:function(e,n,a){a.d(n,{E:function(){return o}});var r=a(96540),t=a(55713),o=function(e){var n=e.url;return r.createElement(t.A,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-disclosure-manager",name:"terra-disclosure-manager",version:"4.44.0",url:n})}},25642:function(e,n,a){a.r(n),n.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},58168:function(e,n,a){function r(){return r=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},r.apply(this,arguments)}a.d(n,{A:function(){return r}})},53986:function(e,n,a){function r(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;a[r]=e[r]}return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}a.d(n,{A:function(){return r}})}}]);