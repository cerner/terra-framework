/*! For license information please see 21852-8c8edf81e24131d9ad18.js.LICENSE.txt */
(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[21852],{22863:function(e,t,n){"use strict";var i=n(64836);t.Z=void 0;var a=i(n(67294)),r=i(n(45697)),o=i(n(47166)),l=i(n(17422)),u=o.default.bind(l.default),c={name:r.default.string.isRequired,src:r.default.string,url:r.default.string,version:r.default.string.isRequired},s=function(e){var t=e.src,n=e.name,i=e.url,r=e.version,o=a.default.createElement("a",{className:u("badge"),href:i||"https://www.npmjs.org/package/".concat(n,"/v/").concat(r)},a.default.createElement("span",{className:u("badge-name")},i?"package":"npm"),a.default.createElement("span",{className:u("badge-version")},"v".concat(r))),l=t?a.default.createElement("a",{className:u("badge"),href:t},a.default.createElement("span",{className:u("badge-name")},"github"),a.default.createElement("span",{className:u("badge-version")},"source")):void 0;return a.default.createElement("div",{className:u("badge-container")},o,l)};s.propTypes=c;var d=s;t.Z=d},67242:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var i=n(87462),a=n(44925),r=(n(67294),n(81254)),o=n(55838),l=n(75983),u=n(26484),c=["components"],s={},d="wrapper";function m(e){var t=e.components,n=(0,a.Z)(e,c);return(0,r.mdx)(d,(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(o.C,{mdxType:"Badge"}),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"https://github.com/cerner/terra-framework/blob/main/packages/terra-infinite-list#readme"},(0,r.mdx)("img",{parentName:"a",src:"https://badgen.net/badge/status/Deprecated/grey",alt:"Deprecated"}))),(0,r.mdx)("h1",{id:"terra-infinite-list--subsections"},"Terra Infinite List — Subsections"),(0,r.mdx)(l.Notice,{variant:"deprecation",mdxType:"Notice"},(0,r.mdx)("p",null,"The terra-infinite-list component has been deprecated and is no longer recommended for use."),(0,r.mdx)("p",null,"From a usability perspective, infinite scrolling is a pattern designed and best used when users are casually looking for or discovering things, like shopping and social media. The infinite scrolling pattern should not be used for ",(0,r.mdx)("a",{parentName:"p",href:"https://www.nngroup.com/articles/infinite-scrolling/"},"goal-oriented tasks"),". Cerner products and our users most often fall into goal-oriented workflows. Users should have proper navigation methods (pagination) to navigate to predetermined points within the content easily."),(0,r.mdx)("p",null,"Infinite scrolling also poses significant accessibility challenges for multiple user groups:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Keyboard-only users have to navigate the entire infinite scroll to get to the content below or to the side of the endless loading content. This creates a very time-consuming and unnecessary burden for the keyboard-only user."),(0,r.mdx)("li",{parentName:"ul"},"Screen reader users would have the same problem even though they have more ways to navigate content on the page. When content is dynamically loaded and not within the DOM, screen reader users won't have access to any of that content which poses more significant challenges than just navigating."),(0,r.mdx)("li",{parentName:"ul"},"Focus can be lost when new content loads. Unless focus is managed, sighted keyboard-only users will have difficulties finding where they are on the page."),(0,r.mdx)("li",{parentName:"ul"},"For data with hierarchical relationships, infinite scrolling can make it difficult for screen readers to effectively communicate the required context if related content is split between loaded and unloaded content.")),(0,r.mdx)("p",null,"The ",(0,r.mdx)("a",{parentName:"p",href:"https://engineering.cerner.com/terra-ui/components/cerner-terra-core-docs/paginator/paginator"},"terra-paginator")," should be considered as an alternative approach to paging large amounts of data.")),(0,r.mdx)("p",null,"To achieve sections within the InfiniteList the only supported implementation is directly consuming the static variant of the ",(0,r.mdx)("inlineCode",{parentName:"p"},"SectionHeader")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"SubsectionHeader")," component. Expand/collapse functionality is not supported within the infinite list. "),(0,r.mdx)("h2",{id:"map-section-structure"},"Map Section Structure"),(0,r.mdx)("p",null,"So in our first step a ",(0,r.mdx)("inlineCode",{parentName:"p"},"SectionHeader")," needs to be created for each associated section. We'll add it to the initialization of an array that will be expanded in the following steps."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"  const createSection = (sectionData) => {\n    const section = [\n      <SectionHeader\n        key={sectionData.key}\n        title={sectionData.title}\n      />,\n    ];\n    return section;\n  };\n")),(0,r.mdx)("p",null,"Next we'll create an array with the first item being our section header, and then loop through the associated child sub sections for the section appending them to the initial array."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"  const createSection = (sectionData) => {\n    const section = [\n      <SectionHeader\n        key={sectionData.key}\n        title={sectionData.title}\n      />,\n    ];\n    sectionData.childItems.forEach(childItem => section.push(createSection(childItem)));\n    return section;\n  };\n")),(0,r.mdx)("h2",{id:"map-subsection-structure"},"Map Subsection Structure"),(0,r.mdx)("p",null,"So in our first step a ",(0,r.mdx)("inlineCode",{parentName:"p"},"SubsectionHeader")," needs to be created for each associated section. We'll add it to the initialization of an array that will be expanded in following steps."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"const createSubSection = (subsectionData) => {\n  const section = [\n    <SubsectionHeader\n      key={subsectionData.key}\n      title={subsectionData.title}\n    />,\n  ];\n  return section;\n};\n")),(0,r.mdx)("p",null,"Next we'll create an array with the first item being our subsection header, and then loop through the associated child items for the section appending them to the initial array."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"const createSubSection = (subsectionData) => {\n  const section = [\n    <SubsectionHeader\n      key={subsectionData.key}\n      title={subsectionData.title}\n    />,\n  ];\n  subsectionData.childItems.forEach(childItem => section.push(createListItem(childItem)));\n  return section;\n};\n")),(0,r.mdx)("h2",{id:"unpack-data"},"Unpack Data"),(0,r.mdx)("p",null,"We can then implement the unpack of our data into our list items."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"const createListItem = itemData => (\n  <Item key={itemData.key}>\n    <Placeholder title={itemData.title} />\n  </Item>\n);\n\nconst createSections = data => data.map(section => createSection(section));\n")),(0,r.mdx)("p",null,"Then we can implement a method to loop through our data and create the section with our methods and call it from our render method."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},'const InfiniteListSection = () => (\n  <MyExampleContainer>\n    <InfiniteList\n      dividerStyle="standard"\n      isFinishedLoading\n    >\n      {createSections(mockData)}\n    </InfiniteList>\n  </MyExampleContainer>\n);\n')),(0,r.mdx)("p",null,"Using these steps we get the following example:"),(0,r.mdx)("h2",{id:"example"},"Example"),(0,r.mdx)(u.Z,{title:"Sections Header Infinite List",mdxType:"InfiniteListSubsection"}))}m.isMDXComponent=!0},55838:function(e,t,n){"use strict";n.d(t,{C:function(){return r}});var i=n(67294),a=n(22863),r=function(e){var t=e.url;return i.createElement(a.Z,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-infinite-list",name:"terra-infinite-list",version:"3.41.1",url:t})}},66635:function(e,t,n){"use strict";var i=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(67294)),r=i(n(47166)),o=i(n(63190)),l=r.default.bind(o.default),u=function(e){var t=e.children;return a.default.createElement("div",{className:l("main-content")},t)};t.default=u},26484:function(e,t,n){"use strict";var i=n(64836),a=n(18698);t.Z=void 0;var r=i(n(67294)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=m(t);if(n&&n.has(e))return n.get(e);var i={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=r?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(i,o,l):i[o]=e[o]}i.default=e,n&&n.set(e,i);return i}(n(45186)),l=n(75983),u=i(n(47166)),c=i(n(48616)),s=i(n(66635)),d=i(n(63190));function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(m=function(e){return e?n:t})(e)}var f=u.default.bind(d.default),p=function(e){var t=[r.default.createElement(o.SubsectionHeader,{key:e.key,title:e.title})];return e.childItems.forEach((function(e){return t.push((n=e,r.default.createElement(o.Item,{key:n.key},r.default.createElement(l.Placeholder,{title:n.title,className:f("placeholder")}))));var n})),t},h=function(e){return e.map((function(e){return function(e){var t=[r.default.createElement(o.SectionHeader,{key:e.key,title:e.title})];return e.childItems.forEach((function(e){return t.push(p(e))})),t}(e)}))},y=function(){return r.default.createElement(s.default,null,r.default.createElement(o.default,{dividerStyle:"standard",isFinishedLoading:!0,ariaLabel:"Subsection"},h(c.default)))};t.Z=y},48616:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=[{title:"Section 0",key:"unique-key-0",childItems:[{title:"Subsection 0-0",key:"unique-key-0-0",childItems:[{title:"Item 0-0-0",key:"unique-0-0-0"},{title:"Item 0-0-1",key:"unique-0-0-1"},{title:"Item 0-0-2",key:"unique-0-0-2"},{title:"Item 0-0-3",key:"unique-0-0-3"},{title:"Item 0-0-4",key:"unique-0-0-4"},{title:"Item 0-0-5",key:"unique-0-0-5"}]},{title:"Subsection 0-1",key:"unique-key-0-1",childItems:[{title:"Item 0-1-0",key:"unique-0-1-0"},{title:"Item 0-1-1",key:"unique-0-1-1"},{title:"Item 0-1-2",key:"unique-0-1-2"},{title:"Item 0-1-3",key:"unique-0-1-3"},{title:"Item 0-1-4",key:"unique-0-1-4"},{title:"Item 0-1-5",key:"unique-0-1-5"}]}]},{title:"Section 1",key:"unique-key-1",childItems:[{title:"Subsection 1-0",key:"unique-key-1-0",childItems:[{title:"Item 1-0-0",key:"unique-1-0-0"},{title:"Item 1-0-1",key:"unique-1-0-1"},{title:"Item 1-0-2",key:"unique-1-0-2"},{title:"Item 1-0-3",key:"unique-1-0-3"},{title:"Item 1-0-4",key:"unique-1-0-4"},{title:"Item 1-0-5",key:"unique-1-0-5"}]},{title:"Subsection 1-1",key:"unique-key-1-1",childItems:[{title:"Item 1-1-0",key:"unique-1-1-0"},{title:"Item 1-1-1",key:"unique-1-1-1"},{title:"Item 1-1-2",key:"unique-1-1-2"},{title:"Item 1-1-3",key:"unique-1-1-3"},{title:"Item 1-1-4",key:"unique-1-1-4"},{title:"Item 1-1-5",key:"unique-1-1-5"}]}]},{title:"Section 2",key:"unique-key-2",childItems:[{title:"Subsection 2-0",key:"unique-key-2-0",childItems:[{title:"Item 2-0-0",key:"unique-2-0-0"},{title:"Item 2-0-1",key:"unique-2-0-1"},{title:"Item 2-0-2",key:"unique-2-0-2"},{title:"Item 2-0-3",key:"unique-2-0-3"},{title:"Item 2-0-4",key:"unique-2-0-4"},{title:"Item 2-0-5",key:"unique-2-0-5"}]},{title:"Subsection 2-1",key:"unique-key-2-1",childItems:[{title:"Item 2-1-0",key:"unique-2-1-0"},{title:"Item 2-1-1",key:"unique-2-1-1"},{title:"Item 2-1-2",key:"unique-2-1-2"},{title:"Item 2-1-3",key:"unique-2-1-3"},{title:"Item 2-1-4",key:"unique-2-1-4"},{title:"Item 2-1-5",key:"unique-2-1-5"}]}]}];t.default=n},17422:function(e,t,n){"use strict";n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},63190:function(e,t,n){"use strict";n.r(t),t.default={placeholder:"InfiniteListDocExampleCommon-module__placeholder___+p5qG","item-content":"InfiniteListDocExampleCommon-module__item-content___wVR4Q","main-content":"InfiniteListDocExampleCommon-module__main-content___b5X2e"}},59088:function(e,t,n){"use strict";n.r(t),t.default={"clinical-lowlight-theme":"Button-module__clinical-lowlight-theme___TSAYW","orion-fusion-theme":"Button-module__orion-fusion-theme___96AL7",button:"Button-module__button___v+HKw","is-active":"Button-module__is-active___ypcX2"}},92977:function(e,t,n){"use strict";n.r(t),t.default={"clinical-lowlight-theme":"Notice-module__clinical-lowlight-theme___pTExk","orion-fusion-theme":"Notice-module__orion-fusion-theme___PF+qo",notice:"Notice-module__notice___WorbQ",children:"Notice-module__children___Mtqhu",accessory:"Notice-module__accessory___1zdDg",title:"Notice-module__title___5gv-b","ux-recommendation":"Notice-module__ux-recommendation___+II9D",caution:"Notice-module__caution___048ot",deprecation:"Notice-module__deprecation___s+V2d",maintenance:"Notice-module__maintenance___TCmi1",important:"Notice-module__important___eBEgg","not-supported":"Notice-module__not-supported___W-Jcy",paragraph:"Notice-module__paragraph___YTZe3",list:"Notice-module__list___1Yd9S"}},4365:function(e,t,n){"use strict";n.r(t),t.default={"clinical-lowlight-theme":"Placeholder-module__clinical-lowlight-theme___KIp+p","orion-fusion-theme":"Placeholder-module__orion-fusion-theme___5tg-n",placeholder:"Placeholder-module__placeholder___a1DlK",inner:"Placeholder-module__inner___eQKWp",title:"Placeholder-module__title___-1dNV"}},98545:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=c(n(67294)),a=c(n(14824)),r=c(n(15471)),o=c(n(47341)),l=c(n(59088)),u=["children"];function c(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},s.apply(this,arguments)}function d(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.default.bind(l.default),f=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},p=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},h={children:a.default.string},y=function(e){var t=e.children,n=d(e,u),a=i.default.useContext(o.default),l=(0,r.default)(m(["button",a.className]),n.className);return i.default.createElement("button",s({},n,{type:"button",className:l,onBlur:f,onMouseDown:p,"data-focus-styles-enabled":!0}),t)};y.propTypes=h;var g=y;t.default=g},21369:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=u(n(67294)),a=u(n(14824)),r=u(n(15471)),o=u(n(47341)),l=u(n(92977));function u(e){return e&&e.__esModule?e:{default:e}}var c=r.default.bind(l.default),s={ariaLevel:a.default.oneOf(["2","3","4","5","6"]),children:a.default.node,variant:a.default.oneOf(["ux-recommendation","caution","deprecation","maintenance","important","not-supported"])},d=function(e){var t=e.ariaLevel,n=e.variant,a=e.children,r=i.default.useContext(o.default);return i.default.createElement("div",{className:c("notice",n,r.className)},i.default.createElement("div",{className:c("accessory"),"aria-hidden":"true",focusable:"false"}),i.default.createElement("div",{role:"heading",className:c("title"),"aria-level":t},i.default.createElement("span",null,function(e){return"ux-recommendation"===e?"UX Recommendation":"caution"===e?"Caution":"deprecation"===e?"Deprecation Notice":"maintenance"===e?"In Maintenance":"important"===e?"Important":"not-supported"===e?"Hazards for Incorrect Usage":"error"}(n))),i.default.createElement("div",{className:c("children")},function(e){return"not-supported"===e?i.default.createElement(i.default.Fragment,null,i.default.createElement("p",{className:c("paragraph")},"This component was designed and tested according to the documented implementation."),i.default.createElement("p",{className:c("paragraph")},"Using the component incorrectly:",i.default.createElement("ul",{className:c("list")},i.default.createElement("li",null,"will likely result in improper composition and create accessibility issues"),i.default.createElement("li",null,"may cause erratic or broken behaviors and styles"),i.default.createElement("li",null,i.default.createElement("strong",null,"will not be supported "),"or enhanced to allow for incorrect use")))):null}(n),i.default.Children.map(a,(function(e){return"string"==typeof e?i.default.createElement("p",null,e):e}))))};d.propTypes=s,d.defaultProps={ariaLevel:"2",variant:"important"};var m=d;t.default=m},63031:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=s(n(67294)),a=s(n(14824)),r=s(n(15321)),o=s(n(15471)),l=s(n(47341)),u=s(n(4365)),c=["title"];function s(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},d.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var f=o.default.bind(u.default),p={title:a.default.string},h=function(e){var t=e.title,n=m(e,c),a=i.default.useContext(l.default),o=(0,r.default)(f(["placeholder",a.className]),n.className),u=f(["inner"]);return i.default.createElement("div",d({},n,{className:o}),i.default.createElement("div",{className:u},i.default.createElement("p",{className:f("title")},t)))};h.propTypes=p,h.defaultProps={title:""};var y=h;t.default=y},75983:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"Notice",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"Placeholder",{enumerable:!0,get:function(){return a.default}});var i=o(n(21369)),a=o(n(63031)),r=o(n(98545));function o(e){return e&&e.__esModule?e:{default:e}}},15471:function(e,t){var n;!function(){"use strict";var i={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(this&&this[n]||n);else if(Array.isArray(n))e.push(a.apply(this,n));else if("object"===r){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var o in n)i.call(n,o)&&n[o]&&e.push(this&&this[o]||o)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},15321:function(e,t){var n;!function(){"use strict";var i={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)){if(n.length){var o=a.apply(null,n);o&&e.push(o)}}else if("object"===r){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var l in n)i.call(n,l)&&n[l]&&e.push(l)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},95860:function(e,t,n){"use strict";var i=n(54770);function a(){}function r(){}r.resetWarningCache=a,e.exports=function(){function e(e,t,n,a,r,o){if(o!==i){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:r,resetWarningCache:a};return n.PropTypes=n,n}},14824:function(e,t,n){e.exports=n(95860)()},54770:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},87462:function(e,t,n){"use strict";function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},i.apply(this,arguments)}n.d(t,{Z:function(){return i}})},44925:function(e,t,n){"use strict";function i(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,{Z:function(){return i}})}}]);