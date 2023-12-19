"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[44426],{22863:function(e,t,a){var n=a(64836);t.Z=void 0;var r=n(a(67294)),l=n(a(45697)),d=n(a(47166)),o=n(a(17422)),i=d.default.bind(o.default),u={name:l.default.string.isRequired,src:l.default.string,url:l.default.string,version:l.default.string.isRequired},m=function(e){var t=e.src,a=e.name,n=e.url,l=e.version,d=r.default.createElement("a",{className:i("badge"),href:n||"https://www.npmjs.org/package/".concat(a,"/v/").concat(l)},r.default.createElement("span",{className:i("badge-name")},n?"package":"npm"),r.default.createElement("span",{className:i("badge-version")},"v".concat(l))),o=t?r.default.createElement("a",{className:i("badge"),href:t},r.default.createElement("span",{className:i("badge-name")},"github"),r.default.createElement("span",{className:i("badge-version")},"source")):void 0;return r.default.createElement("div",{className:i("badge-container")},d,o)};m.propTypes=u;var c=m;t.Z=c},40996:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(a(67294)),r=u(a(45697)),l=u(a(47166)),d=u(a(47341)),o=u(a(66983)),i=["children"];function u(e){return e&&e.__esModule?e:{default:e}}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},m.apply(this,arguments)}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=l.default.bind(o.default),s=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},f=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},x={children:r.default.string},_=function(e){var t=e.children,a=c(e,i),r=n.default.useContext(d.default),o=(0,l.default)(p(["button",r.className]),a.className);return n.default.createElement("button",m({},a,{type:"button",className:o,onBlur:s,onMouseDown:f,"data-focus-styles-enabled":!0}),t)};_.propTypes=x;t.default=_},59278:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a(67294)),r=i(a(45697)),l=i(a(47166)),d=i(a(47341)),o=i(a(30866));function i(e){return e&&e.__esModule?e:{default:e}}var u=l.default.bind(o.default),m={ariaLevel:r.default.oneOf(["2","3","4","5","6"]),children:r.default.node,variant:r.default.oneOf(["ux-recommendation","caution","deprecation","maintenance","important","not-supported"])},c=function(e){var t=e.ariaLevel,a=e.variant,r=e.children,l=n.default.useContext(d.default);return n.default.createElement("div",{className:u("notice",a,l.className)},n.default.createElement("div",{className:u("accessory"),"aria-hidden":"true",focusable:"false"}),n.default.createElement("div",{role:"heading",className:u("title"),"aria-level":t},n.default.createElement("span",null,function(e){return"ux-recommendation"===e?"UX Recommendation":"caution"===e?"Caution":"deprecation"===e?"Deprecation Notice":"maintenance"===e?"In Maintenance":"important"===e?"Important":"not-supported"===e?"Hazards for Incorrect Usage":"error"}(a))),n.default.createElement("div",{className:u("children")},function(e){return"not-supported"===e?n.default.createElement(n.default.Fragment,null,n.default.createElement("p",{className:u("paragraph")},"This component was designed and tested according to the documented implementation."),n.default.createElement("p",{className:u("paragraph")},"Using the component incorrectly:",n.default.createElement("ul",{className:u("list")},n.default.createElement("li",null,"will likely result in improper composition and create accessibility issues"),n.default.createElement("li",null,"may cause erratic or broken behaviors and styles"),n.default.createElement("li",null,n.default.createElement("strong",null,"will not be supported "),"or enhanced to allow for incorrect use")))):null}(a),n.default.Children.map(r,(function(e){return"string"==typeof e?n.default.createElement("p",null,e):e}))))};c.propTypes=m,c.defaultProps={ariaLevel:"2",variant:"important"};t.default=c},47306:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=m(a(67294)),r=m(a(45697)),l=m(a(94184)),d=m(a(47166)),o=m(a(47341)),i=m(a(42620)),u=["title"];function m(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},c.apply(this,arguments)}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=d.default.bind(i.default),f={title:r.default.string},x=function(e){var t=e.title,a=p(e,u),r=n.default.useContext(o.default),d=(0,l.default)(s(["placeholder",r.className]),a.className),i=s(["inner"]);return n.default.createElement("div",c({},a,{className:d}),n.default.createElement("div",{className:i},n.default.createElement("p",{className:s("title")},t)))};x.propTypes=f,x.defaultProps={title:""};t.default=x},34261:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"Notice",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"Placeholder",{enumerable:!0,get:function(){return r.default}});var n=d(a(59278)),r=d(a(47306)),l=d(a(40996));function d(e){return e&&e.__esModule?e:{default:e}}},40292:function(e,t,a){a.r(t),a.d(t,{default:function(){return h}});var n=a(87462),r=a(44925),l=(a(67294),a(81254)),d=a(34261),o=a(33145),i=a(78530),u=["components"],m={},c="wrapper";function p(e){var t=e.components,a=(0,r.Z)(e,u);return(0,l.mdx)(c,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)(i.ZP,{mdxType:"PropsTable"},(0,l.mdx)(i.X2,{key:"ROW1",mdxType:"Row"},(0,l.mdx)(i.O,{mdxType:"PropNameCell"},"children"),(0,l.mdx)(i.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,l.mdx)(i.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(i.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("p",null,"none")),(0,l.mdx)(i.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"List of FolderTree.Items to be displayed as content within the FolderTree."))),(0,l.mdx)(i.X2,{key:"ROW2",mdxType:"Row"},(0,l.mdx)(i.O,{mdxType:"PropNameCell"},"headerLevel"),(0,l.mdx)(i.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"number\n"))),(0,l.mdx)(i.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(i.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"3\n"))),(0,l.mdx)(i.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"The heading level for the title of the folder tree."))),(0,l.mdx)(i.X2,{key:"ROW3",mdxType:"Row"},(0,l.mdx)(i.O,{mdxType:"PropNameCell"},"title"),(0,l.mdx)(i.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,l.mdx)(i.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,l.mdx)(i.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("p",null,"none")),(0,l.mdx)(i.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"The title of the folder tree."))),(0,l.mdx)(i.X2,{key:"ROW4",mdxType:"Row"},(0,l.mdx)(i.O,{mdxType:"PropNameCell"},"onExpandAll"),(0,l.mdx)(i.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,l.mdx)(i.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(i.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("p",null,"none")),(0,l.mdx)(i.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Callback function for expand all event."))),(0,l.mdx)(i.X2,{key:"ROW5",mdxType:"Row"},(0,l.mdx)(i.O,{mdxType:"PropNameCell"},"onCollapseAll"),(0,l.mdx)(i.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,l.mdx)(i.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(i.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("p",null,"none")),(0,l.mdx)(i.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Callback function for collapse all event.")))))}p.isMDXComponent=!0;a(27822);var s,f=["components"],x=(s="BasicFolderTree",function(e){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.mdx)("div",e)}),_={},g="wrapper";function h(e){var t=e.components,a=(0,r.Z)(e,f);return(0,l.mdx)(g,(0,n.Z)({},_,a,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)(o.C,{mdxType:"Badge"}),(0,l.mdx)("h1",{id:"terra-foldertree"},"Terra FolderTree"),(0,l.mdx)(d.Notice,{variant:"caution",ariaLevel:"2",mdxType:"Notice"},"Terra Folder Tree is currently under alpha release. There may be breaking changes between releases until it is stable with the 1.0 release."),(0,l.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Install with ",(0,l.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"npm install terra-folder-tree"))))),(0,l.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,l.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,l.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"react"),(0,l.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,l.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"react-intl"),(0,l.mdx)("td",{parentName:"tr",align:null},"^2.8.0")))),(0,l.mdx)("h2",{id:"component-features"},"Component Features"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"},"Internationalization Support")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#ltr--rtl"},"LTR/RTL Support"))),(0,l.mdx)("h2",{id:"examples"},"Examples"),(0,l.mdx)(x,{mdxType:"BasicFolderTree"}),(0,l.mdx)("h2",{id:"foldertree-props-table"},"FolderTree props table"),(0,l.mdx)(p,{mdxType:"FolderTreePropsTable"}))}h.isMDXComponent=!0},33145:function(e,t,a){a.d(t,{C:function(){return l}});var n=a(67294),r=a(22863),l=function(e){var t=e.url;return n.createElement(r.Z,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-folder-tree",name:"terra-folder-tree",version:"1.0.0-alpha.4",url:t})}},17422:function(e,t,a){a.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},66983:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"Button-module__clinical-lowlight-theme___TyZWB","orion-fusion-theme":"Button-module__orion-fusion-theme___q-FcQ",button:"Button-module__button___QuCn2","is-active":"Button-module__is-active___Z8AuK"}},30866:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"Notice-module__clinical-lowlight-theme___aa5xV","orion-fusion-theme":"Notice-module__orion-fusion-theme___QAE-T",notice:"Notice-module__notice___GWkPA",children:"Notice-module__children___lDYsm",accessory:"Notice-module__accessory___wkLOG",title:"Notice-module__title___6H5tc","ux-recommendation":"Notice-module__ux-recommendation___N8BuK",caution:"Notice-module__caution___hPrVl",deprecation:"Notice-module__deprecation___g1drA",maintenance:"Notice-module__maintenance___kWLIZ",important:"Notice-module__important___p5DiF","not-supported":"Notice-module__not-supported___34bHd",paragraph:"Notice-module__paragraph___5h-w1",list:"Notice-module__list___M2Kxj"}},42620:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"Placeholder-module__clinical-lowlight-theme___Obm9K","orion-fusion-theme":"Placeholder-module__orion-fusion-theme___svHY+",placeholder:"Placeholder-module__placeholder___ZZDXd",inner:"Placeholder-module__inner___fJq9o",title:"Placeholder-module__title___teBSo"}}}]);