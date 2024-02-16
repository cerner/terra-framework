"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[71506],{52531:function(e,t,l){var r=l(24994),n=l(73738);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(l(85715)),o=h(l(96540)),u=r(l(5556)),i=r(l(67967)),f=l(8604),c=l(68414),d=h(l(25966)),s=r(l(82941)),m=r(l(23986)),p=r(l(6740)),_=l(33049),b=r(l(16524)),g=r(l(64050)),y=r(l(53888));function v(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(v=function(e){return e?l:t})(e)}function h(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=n(e)&&"function"!=typeof e)return{default:e};var l=v(t);if(l&&l.has(e))return l.get(e);var r={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=a?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(r,o,u):r[o]=e[o]}return r.default=e,l&&l.set(e,r),r}var O=i.default.bind(y.default),E={children:u.default.node,headerLevel:u.default.number,title:u.default.string.isRequired,onExpandAll:u.default.func,onCollapseAll:u.default.func,intl:u.default.shape({formatMessage:u.default.func}).isRequired},j=function(e){var t=e.children,l=e.headerLevel,r=e.title,n=e.onExpandAll,u=e.onCollapseAll,i=e.intl,f=(0,o.useState)(""),y=(0,a.default)(f,2),v=y[0],h=y[1],E=(0,o.useState)([]),j=(0,a.default)(E,2),k=j[0],w=j[1],P="folder-tree-".concat((0,c.v4)()),S=(0,o.useRef)(),I=function(e){return Array.prototype.slice.call(e).filter((function(e){for(var t=e.parentNode;t&&t!==S.current;){if(t.hasAttribute("hidden"))return!1;t=t.parentNode}return!0}))};return(0,o.useEffect)((function(){S.current.querySelectorAll("[data-item-show-focus=true]")[0].tabIndex=0}),[]),(0,o.useEffect)((function(){var e=S.current.querySelectorAll("[data-item-show-focus=true]"),l=I(e);l.length!==k.length&&(l.length===t.length?h(i.formatMessage({id:"Terra.folder-tree.button.collapse-all-announcement"})):l.length===e.length&&h(i.formatMessage({id:"Terra.folder-tree.button.expand-all-announcement"})))}),[t.length,i,k]),o.default.createElement("div",{className:"folder-tree-container"},o.default.createElement(s.default,{text:r,level:l}),o.default.createElement(p.default,{align:"end",ariaControls:r,ariaLabel:r},o.default.createElement(m.default,{title:i.formatMessage({id:"Terra.folder-tree.button.expand-all"}),text:i.formatMessage({id:"Terra.folder-tree.button.expand-all-instructions"}),variant:"utility",icon:o.default.createElement(_.IconExpandRow,null),onClick:function(){if(n){n();var e=S.current.querySelectorAll("[data-item-show-focus=true]"),t=I(e);w(t)}},"aria-controls":P}),o.default.createElement(m.default,{title:i.formatMessage({id:"Terra.folder-tree.button.collapse-all"}),text:i.formatMessage({id:"Terra.folder-tree.button.collapse-all-instructions"}),variant:"utility",icon:o.default.createElement(_.IconCollapseRow,null),onClick:function(){if(u){u();var e=S.current.querySelectorAll("[data-item-show-focus=true]"),t=I(e);w(t)}},"aria-controls":P})),o.default.createElement("ul",{id:P,className:O("folder-tree"),role:"tree","aria-label":r,ref:S,onKeyDown:function(e){var t=S.current.querySelectorAll("[data-item-show-focus=true]"),l=I(t),r=Array.from(l).indexOf(e.target),n=l.length-1,a=function(){return g.default.handleMoveFocus(l[r],l[0])},o=function(){return g.default.handleMoveFocus(l[r],l[n])};switch(e.keyCode){case d.KEY_END:e.preventDefault(),o();break;case d.KEY_HOME:e.preventDefault(),a();break;case d.KEY_UP:e.preventDefault();var u=r-1;g.default.handleMoveFocus(l[r],l[u]);break;case d.KEY_DOWN:e.preventDefault();var i=r+1;g.default.handleMoveFocus(l[r],l[i]);break;case d.KEY_LEFT:if(e.preventDefault(),e.metaKey){a();break}break;case d.KEY_RIGHT:if(e.preventDefault(),e.metaKey){o();break}}}},t),o.default.createElement(b.default,{"aria-live":"polite",text:v}))};j.propTypes=E,j.defaultProps={headerLevel:3};t.default=(0,f.injectIntl)(j)},64050:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l={handleMoveFocus:function(e,t){e&&t&&(e.tabIndex=-1,t.tabIndex=0,t.focus())}};t.default=l},80251:function(e,t,l){var r=l(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(l(52531)),a=r(l(27299));n.default.Item=a.default;t.default=n.default},27299:function(e,t,l){var r=l(24994),n=l(73738);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(l(94634)),o=y(l(96540)),u=r(l(5556)),i=r(l(67967)),f=l(8604),c=y(l(25966)),d=r(l(68550)),s=r(l(39496)),m=l(33049),p=r(l(23695)),_=r(l(64050)),b=r(l(63376));function g(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(g=function(e){return e?l:t})(e)}function y(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=n(e)&&"function"!=typeof e)return{default:e};var l=g(t);if(l&&l.has(e))return l.get(e);var r={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=a?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(r,o,u):r[o]=e[o]}return r.default=e,l&&l.set(e,r),r}var v=i.default.bind(b.default),h={label:u.default.string.isRequired,icon:u.default.element,subfolderItems:u.default.arrayOf(u.default.element),isExpanded:u.default.bool,isSelected:u.default.bool,onClick:u.default.func,onToggle:u.default.func,level:u.default.number,parentRef:u.default.oneOfType([u.default.func,u.default.shape({current:u.default.instanceOf(Element)})]),intl:u.default.shape({formatMessage:u.default.func}).isRequired},O=function e(t){var l=t.icon,r=t.isExpanded,n=t.isSelected,u=t.label,f=t.level,b=t.onClick,g=t.onToggle,y=t.subfolderItems,h=t.parentRef,O=t.intl,E=(0,o.useContext)(p.default),j=(null==y?void 0:y.length)>0,k=(0,o.useRef)(),w=(0,o.useRef)(),P=j?o.default.createElement("ul",{className:v("subfolder"),role:"group",hidden:!r,ref:w},y.map((function(t){return o.default.createElement(e,(0,a.default)({},t.props,{intl:O,level:f+1,parentRef:k}))}))):null,S=P?o.default.createElement(m.IconFolder,{a11yLabel:O.formatMessage({id:"Terra.folder-tree.folder-icon"})}):l,I=r?o.default.createElement(m.IconCaretDown,{height:"8px",width:"8px",style:{verticalAlign:"baseline"}}):o.default.createElement(m.IconCaretRight,{height:"8px",width:"8px",style:{verticalAlign:"baseline"}}),T=(0,i.default)(v("folder-tree-item",{selected:n},E.className)),x=function(e){"INPUT"!==e.target.nodeName&&g&&g()};return o.default.createElement(o.default.Fragment,null,o.default.createElement("li",{className:T,role:"treeitem","aria-expanded":j?r:null,"aria-selected":n,onClick:j?x:b,onKeyDown:function(e){switch(e.keyCode){case c.KEY_RETURN:e.preventDefault(),b(e);break;case c.KEY_LEFT:if(e.preventDefault(),e.metaKey)break;j&&r?x(e):_.default.handleMoveFocus(k.current,null==h?void 0:h.current);break;case c.KEY_RIGHT:if(e.preventDefault(),e.metaKey)break;if(r){if(j){var t=w.current.querySelector("[data-item-show-focus=true]");_.default.handleMoveFocus(k.current,t)}}else x(e)}},"data-item-show-focus":!0,tabIndex:-1,ref:k},o.default.createElement("input",{type:"radio",checked:n,onChange:b,"aria-hidden":!0,tabIndex:-1,className:v("radio")}),o.default.createElement("span",{style:{paddingLeft:"".concat(f,"rem")}},o.default.createElement(s.default,{fitStart:o.default.createElement(d.default,{paddingLeft:"medium",paddingRight:"medium",isInlineBlock:!0},j?o.default.createElement(d.default,{paddingRight:"small",isInlineBlock:!0},I):null,S),fill:o.default.createElement("span",null,u),alignFitStart:"center"}))),P)};O.propTypes=h,O.defaultProps={isExpanded:!1,isSelected:!1,level:0};t.default=(0,f.injectIntl)(O)},44448:function(e,t,l){var r=l(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(l(43693)),a=r(l(85715)),o=r(l(96540)),u=l(33049),i=r(l(80251));function f(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,r)}return l}function c(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?f(Object(l),!0).forEach((function(t){(0,n.default)(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):f(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}t.default=function(){var e=o.default.useState(""),t=(0,a.default)(e,2),l=t[0],r=t[1],f=o.default.useState({projects:!1,tests:!1}),d=(0,a.default)(f,2),s=d[0],m=d[1],p=function(e){var t=c(c({},s),{},(0,n.default)({},e,!s[e]));m(t)};return o.default.createElement("div",{id:"basic-folder-tree"},o.default.createElement(i.default,{title:"Documents",key:"documents",onExpandAll:function(){var e=c({},s);Object.keys(e).forEach((function(t){e[t]=!0})),m(e)},onCollapseAll:function(){var e=c({},s);Object.keys(e).forEach((function(t){e[t]=!1})),m(e)}},o.default.createElement(i.default.Item,{label:"info.txt",icon:o.default.createElement(u.IconDocuments,null),key:"info",isSelected:"info"===l,onClick:function(){r("info")}}),o.default.createElement(i.default.Item,{label:"projects_2023.txt",icon:o.default.createElement(u.IconDocuments,null),key:"projects_2023",isSelected:"projects_2023"===l,onClick:function(){r("projects_2023")}}),o.default.createElement(i.default.Item,{label:"Projects",key:"projects",isSelected:"projects"===l,isExpanded:s.projects,onClick:function(){r("projects")},onToggle:function(){p("projects")},subfolderItems:[o.default.createElement(i.default.Item,{label:"project_data1.txt",icon:o.default.createElement(u.IconDocuments,null),key:"project_data1",isSelected:"project_data1"===l,onClick:function(){r("project_data1")}}),o.default.createElement(i.default.Item,{label:"project_data2.txt",icon:o.default.createElement(u.IconDocuments,null),key:"project_data2",isSelected:"project_data2"===l,onClick:function(){r("project_data2")}}),o.default.createElement(i.default.Item,{label:"Tests",key:"tests",isSelected:"tests"===l,isExpanded:s.tests,onClick:function(){r("tests")},onToggle:function(){p("tests")},icon:o.default.createElement(u.IconDocuments,null),subfolderItems:[o.default.createElement(i.default.Item,{label:"very_very_very_very_very_very_very_long_name_test.txt",icon:o.default.createElement(u.IconDocuments,null),key:"long-name-test",isSelected:"long-name-test"===l,onClick:function(){r("long-name-test")}}),o.default.createElement(i.default.Item,{label:"test.txt",icon:o.default.createElement(u.IconDocuments,null),key:"test",isSelected:"test"===l,onClick:function(){r("test")}}),o.default.createElement(i.default.Item,{label:"even_longer_long_long_long_long_long_long_long_long_long_long_long_long_name_test.txt",icon:o.default.createElement(u.IconDocuments,null),key:"longer-name-test",isSelected:"longer-name-test"===l,onClick:function(){r("longer-name-test")}})]})]})))}},92420:function(e,t,l){l.r(t),t.default={arrange:"Arrange-module__arrange___hY0Ml",fill:"Arrange-module__fill___m88eq",fit:"Arrange-module__fit___tv8j-",center:"Arrange-module__center___9qfhG",bottom:"Arrange-module__bottom___8beod",stretch:"Arrange-module__stretch___eQF-k",default:"Arrange-module__default___z+O29"}},60288:function(e,t,l){l.r(t),t.default={"clinical-lowlight-theme":"Toolbar-module__clinical-lowlight-theme___lhZh0","orion-fusion-theme":"Toolbar-module__orion-fusion-theme___Oq6Xn",toolbar:"Toolbar-module__toolbar___XowP8",item:"Toolbar-module__item___K92Xb","start-align":"Toolbar-module__start-align___Ap05A","end-align":"Toolbar-module__end-align___WLp5E","center-align":"Toolbar-module__center-align___5f+ex"}},53888:function(e,t,l){l.r(t),t.default={"orion-fusion-theme":"FolderTree-module__orion-fusion-theme___fXhZ1","clinical-lowlight-theme":"FolderTree-module__clinical-lowlight-theme___-PNN8","folder-tree":"FolderTree-module__folder-tree___LAcUH","folder-tree-container":"FolderTree-module__folder-tree-container___z6ElC"}},63376:function(e,t,l){l.r(t),t.default={"clinical-lowlight-theme":"FolderTreeItem-module__clinical-lowlight-theme___zIByE","orion-fusion-theme":"FolderTreeItem-module__orion-fusion-theme___jxKiJ","folder-tree-item":"FolderTreeItem-module__folder-tree-item___KIv1r",selected:"FolderTreeItem-module__selected___4KAt4",subfolder:"FolderTreeItem-module__subfolder___jGfBJ",radio:"FolderTreeItem-module__radio___PUHKG"}},39496:function(e,t,l){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.AlignmentTypes=void 0;var n=f(l(96540)),a=f(l(5556)),o=f(l(67967)),u=f(l(92420)),i=["fitStart","fill","fitEnd","align","alignFitStart","alignFill","alignFitEnd","fitStartAttributes","fillAttributes","fitEndAttributes"];function f(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e},c.apply(this,arguments)}function d(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,r)}return l}function s(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?d(Object(l),!0).forEach((function(t){m(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):d(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function m(e,t,l){var n;return n=function(e,t){if("object"!=r(e)||!e)return e;var l=e[Symbol.toPrimitive];if(void 0!==l){var n=l.call(e,t||"default");if("object"!=r(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"==r(n)?n:String(n))in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function p(e,t){if(null==e)return{};var l,r,n=function(e,t){if(null==e)return{};var l,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)l=a[r],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)l=a[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}t.AlignmentTypes={CENTER:"center",BOTTOM:"bottom",STRETCH:"stretch"};var _=o.default.bind(u.default),b={fitStart:a.default.element,fill:a.default.element.isRequired,fitEnd:a.default.element,align:a.default.oneOf(["center","bottom","stretch"]),alignFitStart:a.default.oneOf(["center","bottom","stretch"]),alignFitEnd:a.default.oneOf(["center","bottom","stretch"]),alignFill:a.default.oneOf(["center","bottom","stretch"]),fitStartAttributes:a.default.object,fillAttributes:a.default.object,fitEndAttributes:a.default.object},g=function(e){var t=e.fitStart,l=e.fill,r=e.fitEnd,a=e.align,o=e.alignFitStart,u=e.alignFill,f=e.alignFitEnd,d=e.fitStartAttributes,m=e.fillAttributes,b=e.fitEndAttributes,g=p(e,i),y=s({},d),v=s({},m),h=s({},b);return n.default.createElement("span",c({},g,{className:_("arrange",g.className)}),n.default.createElement("span",c({},y,{className:_("fit",a||o,y.className,"fit-block")}),t),n.default.createElement("span",c({},v,{className:_("fill",a||u,v.className,"fill-block")}),l),n.default.createElement("span",c({},h,{className:_("fit",a||f,h.className)}),r))};g.propTypes=b;t.default=g},6740:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(l(96540)),n=c(l(5556)),a=c(l(46942)),o=c(l(67967)),u=c(l(23695)),i=c(l(60288)),f=["align","ariaControls","ariaLabel","ariaLabelledBy","children"];function c(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e},d.apply(this,arguments)}function s(e,t){if(null==e)return{};var l,r,n=function(e,t){if(null==e)return{};var l,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)l=a[r],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)l=a[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var m=o.default.bind(i.default),p={align:n.default.oneOf(["start","end","center"]),ariaControls:n.default.string,ariaLabel:n.default.string,ariaLabelledBy:n.default.string,children:n.default.node},_=function(e){var t=e.align,l=e.ariaControls,n=e.ariaLabel,o=e.ariaLabelledBy,i=e.children,c=s(e,f),p=r.default.useContext(u.default),_=(0,a.default)(m("toolbar","".concat(t,"-align"),p.className),c.className),b=r.default.Children.map(i,(function(e){return e?r.default.createElement("div",{className:m("item")},e):e}));return r.default.createElement("div",d({},c,{"aria-controls":l,"aria-label":o?void 0:n,"aria-labelledby":o,className:_,role:"toolbar"}),b)};_.propTypes=p,_.defaultProps={align:"start"};t.default=_}}]);