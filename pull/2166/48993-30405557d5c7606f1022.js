"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[48993],{55713:function(e,t,n){var a=n(24994);t.A=void 0;var i=a(n(96540)),r=a(n(5556)),o=a(n(67967)),l=a(n(25642)),u=o.default.bind(l.default),c={name:r.default.string.isRequired,src:r.default.string,url:r.default.string,version:r.default.string.isRequired},s=function(e){var t=e.src,n=e.name,a=e.url,r=e.version,o=i.default.createElement("a",{className:u("badge"),href:a||"https://www.npmjs.org/package/".concat(n,"/v/").concat(r)},i.default.createElement("span",{className:u("badge-name")},a?"package":"npm"),i.default.createElement("span",{className:u("badge-version")},"v".concat(r))),l=t?i.default.createElement("a",{className:u("badge"),href:t},i.default.createElement("span",{className:u("badge-name")},"github"),i.default.createElement("span",{className:u("badge-version")},"source")):void 0;return i.default.createElement("div",{className:u("badge-container")},o,l)};s.propTypes=c;t.A=s},86159:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(n(96540)),i=c(n(5556)),r=c(n(67967)),o=c(n(23695)),l=c(n(36605)),u=["children"];function c(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s.apply(this,arguments)}function d(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var m=r.default.bind(l.default),f=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},p=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},h={children:i.default.string},_=function(e){var t=e.children,n=d(e,u),i=a.default.useContext(o.default),l=(0,r.default)(m(["button",i.className]),n.className);return a.default.createElement("button",s({},n,{type:"button",className:l,onBlur:f,onMouseDown:p,"data-focus-styles-enabled":!0}),t)};_.propTypes=h;t.default=_},20999:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(n(96540)),i=u(n(5556)),r=u(n(67967)),o=u(n(23695)),l=u(n(17269));function u(e){return e&&e.__esModule?e:{default:e}}var c=r.default.bind(l.default),s={ariaLevel:i.default.oneOf(["2","3","4","5","6"]),children:i.default.node,variant:i.default.oneOf(["ux-recommendation","caution","deprecation","maintenance","important","not-supported"])},d=function(e){var t=e.ariaLevel,n=e.variant,i=e.children,r=a.default.useContext(o.default);return a.default.createElement("div",{className:c("notice",n,r.className)},a.default.createElement("div",{className:c("accessory"),"aria-hidden":"true",focusable:"false"}),a.default.createElement("div",{role:"heading",className:c("title"),"aria-level":t},a.default.createElement("span",null,function(e){return"ux-recommendation"===e?"UX Recommendation":"caution"===e?"Caution":"deprecation"===e?"Deprecation Notice":"maintenance"===e?"In Maintenance":"important"===e?"Important":"not-supported"===e?"Hazards for Incorrect Usage":"error"}(n))),a.default.createElement("div",{className:c("children")},function(e){return"not-supported"===e?a.default.createElement(a.default.Fragment,null,a.default.createElement("p",{className:c("paragraph")},"This component was designed and tested according to the documented implementation."),a.default.createElement("p",{className:c("paragraph")},"Using the component incorrectly:",a.default.createElement("ul",{className:c("list")},a.default.createElement("li",null,"will likely result in improper composition and create accessibility issues"),a.default.createElement("li",null,"may cause erratic or broken behaviors and styles"),a.default.createElement("li",null,a.default.createElement("strong",null,"will not be supported "),"or enhanced to allow for incorrect use")))):null}(n),a.default.Children.map(i,(function(e){return"string"==typeof e?a.default.createElement("p",null,e):e}))))};d.propTypes=s,d.defaultProps={ariaLevel:"2",variant:"important"};t.default=d},18778:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=s(n(96540)),i=s(n(5556)),r=s(n(46942)),o=s(n(67967)),l=s(n(23695)),u=s(n(16576)),c=["title"];function s(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},d.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var f=o.default.bind(u.default),p={title:i.default.string},h=function(e){var t=e.title,n=m(e,c),i=a.default.useContext(l.default),o=(0,r.default)(f(["placeholder",i.className]),n.className),u=f(["inner"]);return a.default.createElement("div",d({},n,{className:o}),a.default.createElement("div",{className:u},a.default.createElement("p",{className:f("title")},t)))};h.propTypes=p,h.defaultProps={title:""};t.default=h},74647:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"Notice",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"Placeholder",{enumerable:!0,get:function(){return i.default}});var a=o(n(20999)),i=o(n(18778)),r=o(n(86159));function o(e){return e&&e.__esModule?e:{default:e}}},92615:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var a=n(58168),i=n(53986),r=(n(96540),n(36665)),o=n(31756),l=n(74647),u=n(4667),c=["components"],s={},d="wrapper";function m(e){var t=e.components,n=(0,i.A)(e,c);return(0,r.mdx)(d,(0,a.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(o.E,{mdxType:"Badge"}),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"https://github.com/cerner/terra-framework/blob/main/packages/terra-infinite-list#readme"},(0,r.mdx)("img",{parentName:"a",src:"https://badgen.net/badge/status/Deprecated/grey",alt:"Deprecated"}))),(0,r.mdx)("h1",{id:"terra-infinite-list--subsections"},"Terra Infinite List — Subsections"),(0,r.mdx)(l.Notice,{variant:"deprecation",mdxType:"Notice"},(0,r.mdx)("p",null,"The terra-infinite-list component has been deprecated and is no longer recommended for use."),(0,r.mdx)("p",null,"From a usability perspective, infinite scrolling is a pattern designed and best used when users are casually looking for or discovering things, like shopping and social media. The infinite scrolling pattern should not be used for ",(0,r.mdx)("a",{parentName:"p",href:"https://www.nngroup.com/articles/infinite-scrolling/"},"goal-oriented tasks"),". Cerner products and our users most often fall into goal-oriented workflows. Users should have proper navigation methods (pagination) to navigate to predetermined points within the content easily."),(0,r.mdx)("p",null,"Infinite scrolling also poses significant accessibility challenges for multiple user groups:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Keyboard-only users have to navigate the entire infinite scroll to get to the content below or to the side of the endless loading content. This creates a very time-consuming and unnecessary burden for the keyboard-only user."),(0,r.mdx)("li",{parentName:"ul"},"Screen reader users would have the same problem even though they have more ways to navigate content on the page. When content is dynamically loaded and not within the DOM, screen reader users won't have access to any of that content which poses more significant challenges than just navigating."),(0,r.mdx)("li",{parentName:"ul"},"Focus can be lost when new content loads. Unless focus is managed, sighted keyboard-only users will have difficulties finding where they are on the page."),(0,r.mdx)("li",{parentName:"ul"},"For data with hierarchical relationships, infinite scrolling can make it difficult for screen readers to effectively communicate the required context if related content is split between loaded and unloaded content.")),(0,r.mdx)("p",null,"The ",(0,r.mdx)("a",{parentName:"p",href:"https://engineering.cerner.com/terra-ui/components/cerner-terra-core-docs/paginator/paginator"},"terra-paginator")," should be considered as an alternative approach to paging large amounts of data.")),(0,r.mdx)("p",null,"To achieve sections within the InfiniteList the only supported implementation is directly consuming the static variant of the ",(0,r.mdx)("inlineCode",{parentName:"p"},"SectionHeader")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"SubsectionHeader")," component. Expand/collapse functionality is not supported within the infinite list. "),(0,r.mdx)("h2",{id:"map-section-structure"},"Map Section Structure"),(0,r.mdx)("p",null,"So in our first step a ",(0,r.mdx)("inlineCode",{parentName:"p"},"SectionHeader")," needs to be created for each associated section. We'll add it to the initialization of an array that will be expanded in the following steps."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"  const createSection = (sectionData) => {\n    const section = [\n      <SectionHeader\n        key={sectionData.key}\n        title={sectionData.title}\n      />,\n    ];\n    return section;\n  };\n")),(0,r.mdx)("p",null,"Next we'll create an array with the first item being our section header, and then loop through the associated child sub sections for the section appending them to the initial array."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"  const createSection = (sectionData) => {\n    const section = [\n      <SectionHeader\n        key={sectionData.key}\n        title={sectionData.title}\n      />,\n    ];\n    sectionData.childItems.forEach(childItem => section.push(createSection(childItem)));\n    return section;\n  };\n")),(0,r.mdx)("h2",{id:"map-subsection-structure"},"Map Subsection Structure"),(0,r.mdx)("p",null,"So in our first step a ",(0,r.mdx)("inlineCode",{parentName:"p"},"SubsectionHeader")," needs to be created for each associated section. We'll add it to the initialization of an array that will be expanded in following steps."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"const createSubSection = (subsectionData) => {\n  const section = [\n    <SubsectionHeader\n      key={subsectionData.key}\n      title={subsectionData.title}\n    />,\n  ];\n  return section;\n};\n")),(0,r.mdx)("p",null,"Next we'll create an array with the first item being our subsection header, and then loop through the associated child items for the section appending them to the initial array."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"const createSubSection = (subsectionData) => {\n  const section = [\n    <SubsectionHeader\n      key={subsectionData.key}\n      title={subsectionData.title}\n    />,\n  ];\n  subsectionData.childItems.forEach(childItem => section.push(createListItem(childItem)));\n  return section;\n};\n")),(0,r.mdx)("h2",{id:"unpack-data"},"Unpack Data"),(0,r.mdx)("p",null,"We can then implement the unpack of our data into our list items."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"const createListItem = itemData => (\n  <Item key={itemData.key}>\n    <Placeholder title={itemData.title} />\n  </Item>\n);\n\nconst createSections = data => data.map(section => createSection(section));\n")),(0,r.mdx)("p",null,"Then we can implement a method to loop through our data and create the section with our methods and call it from our render method."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},'const InfiniteListSection = () => (\n  <MyExampleContainer>\n    <InfiniteList\n      dividerStyle="standard"\n      isFinishedLoading\n    >\n      {createSections(mockData)}\n    </InfiniteList>\n  </MyExampleContainer>\n);\n')),(0,r.mdx)("p",null,"Using these steps we get the following example:"),(0,r.mdx)("h2",{id:"example"},"Example"),(0,r.mdx)(u.A,{title:"Sections Header Infinite List",mdxType:"InfiniteListSubsection"}))}m.isMDXComponent=!0},31756:function(e,t,n){n.d(t,{E:function(){return r}});var a=n(96540),i=n(55713),r=function(e){var t=e.url;return a.createElement(i.A,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-infinite-list",name:"terra-infinite-list",version:"3.42.0",url:t})}},39185:function(e,t,n){var a=n(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(96540)),r=a(n(67967)),o=a(n(92973)),l=r.default.bind(o.default);t.default=function(e){var t=e.children;return i.default.createElement("div",{className:l("main-content")},t)}},4667:function(e,t,n){var a=n(24994),i=n(73738);t.A=void 0;var r=a(n(96540)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=i(e)&&"function"!=typeof e)return{default:e};var n=m(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&{}.hasOwnProperty.call(e,o)){var l=r?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(a,o,l):a[o]=e[o]}return a.default=e,n&&n.set(e,a),a}(n(47275)),l=n(74647),u=a(n(67967)),c=a(n(98086)),s=a(n(39185)),d=a(n(92973));function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(m=function(e){return e?n:t})(e)}var f=u.default.bind(d.default),p=function(e){var t=[r.default.createElement(o.SubsectionHeader,{key:e.key,title:e.title})];return e.childItems.forEach((function(e){return t.push((n=e,r.default.createElement(o.Item,{key:n.key},r.default.createElement(l.Placeholder,{title:n.title,className:f("placeholder")}))));var n})),t},h=function(e){return e.map((function(e){return function(e){var t=[r.default.createElement(o.SectionHeader,{key:e.key,title:e.title})];return e.childItems.forEach((function(e){return t.push(p(e))})),t}(e)}))};t.A=function(){return r.default.createElement(s.default,null,r.default.createElement(o.default,{dividerStyle:"standard",isFinishedLoading:!0,ariaLabel:"Subsection"},h(c.default)))}},98086:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=[{title:"Section 0",key:"unique-key-0",childItems:[{title:"Subsection 0-0",key:"unique-key-0-0",childItems:[{title:"Item 0-0-0",key:"unique-0-0-0"},{title:"Item 0-0-1",key:"unique-0-0-1"},{title:"Item 0-0-2",key:"unique-0-0-2"},{title:"Item 0-0-3",key:"unique-0-0-3"},{title:"Item 0-0-4",key:"unique-0-0-4"},{title:"Item 0-0-5",key:"unique-0-0-5"}]},{title:"Subsection 0-1",key:"unique-key-0-1",childItems:[{title:"Item 0-1-0",key:"unique-0-1-0"},{title:"Item 0-1-1",key:"unique-0-1-1"},{title:"Item 0-1-2",key:"unique-0-1-2"},{title:"Item 0-1-3",key:"unique-0-1-3"},{title:"Item 0-1-4",key:"unique-0-1-4"},{title:"Item 0-1-5",key:"unique-0-1-5"}]}]},{title:"Section 1",key:"unique-key-1",childItems:[{title:"Subsection 1-0",key:"unique-key-1-0",childItems:[{title:"Item 1-0-0",key:"unique-1-0-0"},{title:"Item 1-0-1",key:"unique-1-0-1"},{title:"Item 1-0-2",key:"unique-1-0-2"},{title:"Item 1-0-3",key:"unique-1-0-3"},{title:"Item 1-0-4",key:"unique-1-0-4"},{title:"Item 1-0-5",key:"unique-1-0-5"}]},{title:"Subsection 1-1",key:"unique-key-1-1",childItems:[{title:"Item 1-1-0",key:"unique-1-1-0"},{title:"Item 1-1-1",key:"unique-1-1-1"},{title:"Item 1-1-2",key:"unique-1-1-2"},{title:"Item 1-1-3",key:"unique-1-1-3"},{title:"Item 1-1-4",key:"unique-1-1-4"},{title:"Item 1-1-5",key:"unique-1-1-5"}]}]},{title:"Section 2",key:"unique-key-2",childItems:[{title:"Subsection 2-0",key:"unique-key-2-0",childItems:[{title:"Item 2-0-0",key:"unique-2-0-0"},{title:"Item 2-0-1",key:"unique-2-0-1"},{title:"Item 2-0-2",key:"unique-2-0-2"},{title:"Item 2-0-3",key:"unique-2-0-3"},{title:"Item 2-0-4",key:"unique-2-0-4"},{title:"Item 2-0-5",key:"unique-2-0-5"}]},{title:"Subsection 2-1",key:"unique-key-2-1",childItems:[{title:"Item 2-1-0",key:"unique-2-1-0"},{title:"Item 2-1-1",key:"unique-2-1-1"},{title:"Item 2-1-2",key:"unique-2-1-2"},{title:"Item 2-1-3",key:"unique-2-1-3"},{title:"Item 2-1-4",key:"unique-2-1-4"},{title:"Item 2-1-5",key:"unique-2-1-5"}]}]}]},25642:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},36605:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Button-module__clinical-lowlight-theme___TyZWB","orion-fusion-theme":"Button-module__orion-fusion-theme___q-FcQ",button:"Button-module__button___QuCn2","is-active":"Button-module__is-active___Z8AuK"}},17269:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Notice-module__clinical-lowlight-theme___aa5xV","orion-fusion-theme":"Notice-module__orion-fusion-theme___QAE-T",notice:"Notice-module__notice___GWkPA",children:"Notice-module__children___lDYsm",accessory:"Notice-module__accessory___wkLOG",title:"Notice-module__title___6H5tc","ux-recommendation":"Notice-module__ux-recommendation___N8BuK",caution:"Notice-module__caution___hPrVl",deprecation:"Notice-module__deprecation___g1drA",maintenance:"Notice-module__maintenance___kWLIZ",important:"Notice-module__important___p5DiF","not-supported":"Notice-module__not-supported___34bHd",paragraph:"Notice-module__paragraph___5h-w1",list:"Notice-module__list___M2Kxj"}},16576:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Placeholder-module__clinical-lowlight-theme___Obm9K","orion-fusion-theme":"Placeholder-module__orion-fusion-theme___svHY+",placeholder:"Placeholder-module__placeholder___ZZDXd",inner:"Placeholder-module__inner___fJq9o",title:"Placeholder-module__title___teBSo"}},92973:function(e,t,n){n.r(t),t.default={placeholder:"InfiniteListDocExampleCommon-module__placeholder___+p5qG","item-content":"InfiniteListDocExampleCommon-module__item-content___wVR4Q","main-content":"InfiniteListDocExampleCommon-module__main-content___b5X2e"}},58168:function(e,t,n){function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},a.apply(this,arguments)}n.d(t,{A:function(){return a}})},53986:function(e,t,n){function a(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n={};for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){if(t.indexOf(a)>=0)continue;n[a]=e[a]}return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}n.d(t,{A:function(){return a}})}}]);