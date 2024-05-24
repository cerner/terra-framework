"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[80686],{44776:function(e,t,n){var l=n(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(17383)),a=l(n(34579)),i=l(n(28452)),o=l(n(63072)),u=l(n(29511)),c=l(n(96540)),s=l(n(42596)),f=l(n(63276)),d=l(n(23986));function m(e,t,n){return t=(0,o.default)(t),(0,i.default)(e,y()?Reflect.construct(t,n||[],(0,o.default)(e).constructor):t.apply(e,n))}function y(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(y=function(){return!!e})()}t.default=function(e){function t(e){var n;return(0,r.default)(this,t),(n=m(this,t,[e])).state={selectedKey:null,buttonNode:null,menuOpen:!1},n.rowSelected=n.rowSelected.bind(n),n.setButtonNode=n.setButtonNode.bind(n),n.getButtonNode=n.getButtonNode.bind(n),n.createCellsForRow=n.createCellsForRow.bind(n),n.createCell=n.createCell.bind(n),n.handleButtonClick=n.handleButtonClick.bind(n),n.handleRequestClose=n.handleRequestClose.bind(n),n}return(0,u.default)(t,e),(0,a.default)(t,[{key:"handleRequestClose",value:function(){this.setState({menuOpen:!1})}},{key:"handleButtonClick",value:function(e){e.stopPropagation(),this.setState({menuOpen:!0})}},{key:"getButtonNode",value:function(){return this.state.buttonNode}},{key:"setButtonNode",value:function(e){this.setState({buttonNode:e})}},{key:"rowSelected",value:function(e){this.setState({selectedKey:e})}},{key:"createCell",value:function(e){if("123-456-7890"===e.title){var t=function(){alert("Menu item is clicked")},n=c.default.createElement("div",{className:"wrapper",ref:this.setButtonNode},c.default.createElement(f.default,{isOpen:this.state.menuOpen,targetRef:this.getButtonNode,onRequestClose:this.handleRequestClose,isArrowDisplayed:!0},c.default.createElement(f.default.Item,{text:"Manage",key:"manage-in-new-tab",className:"CarePlanMenu",id:"care-plans-rollup-ManageItem",onClick:t}),c.default.createElement(f.default.Divider,{key:"Divider1"}),c.default.createElement(f.default.Item,{text:"Modify",isDisabled:!0,key:"modify",id:"care-plans-rollup-modifyItem",onClick:t})),c.default.createElement(d.default,{onClick:this.handleButtonClick,id:"actions",text:"Actions"}));return{key:e.key,children:n}}return{key:e.key,children:e.title}}},{key:"createCellsForRow",value:function(e){var t=this;return e.map((function(e){return t.createCell(e)}))}},{key:"render",value:function(){var e,t=this,n=[{key:"unique-0",toggleText:"Toggle Power Row 0",discloseText:"Power Row 0 - Details",primaryIndex:1,cells:[{key:"unique-0-0",title:"Dave Smith"},{key:"unique-0-1",title:"123 Adams Drive"},{key:"unique-0-2",title:"dave.smith@gmail.com"},{key:"unique-0-3",title:"123-456-7890"}]},{key:"unique-1",toggleText:"Toggle Power Row 1",discloseText:"Power Row 1 - Details",primaryIndex:1,cells:[{key:"unique-1-0",title:"Michael Smith"},{key:"unique-1-1",title:"345 Raymond Road"},{key:"unique-1-2",title:"michael.smith@gmail.com"},{key:"unique-1-3",title:c.default.createElement("div",{id:"no-actions"},"No Actions")}]}],l=function(e,n){e.preventDefault(),t.state.selectedKey!==n.key&&t.rowSelected(n.key)};return c.default.createElement(s.default,{summaryId:"example-single-select",summary:"This table shows an implementation of single row selection.",numberOfColumns:4,cellPaddingStyle:"standard",rowStyle:"toggle",dividerStyle:"horizontal",headerData:{selectAllColumn:{checkLabel:"Single Selection"},cells:[{key:"cell-0",id:"toggle-0",children:"Name"},{key:"cell-1",id:"toggle-1",children:"Address"},{key:"cell-2",id:"toggle-2",children:"Email Id"},{key:"cell-3",id:"toggle-3",children:"Actions"}]},bodyData:[{rows:(e=n,e.map((function(e){return{key:(n=e).key,cells:t.createCellsForRow(n.cells),toggleAction:{metaData:{key:n.key},onToggle:l,isToggled:t.state.selectedKey===n.key,toggleLabel:n.toggleText}};var n})))}]})}}])}(c.default.Component)},92420:function(e,t,n){n.r(t),t.default={arrange:"Arrange-module__arrange___hY0Ml",fill:"Arrange-module__fill___m88eq",fit:"Arrange-module__fit___tv8j-",center:"Arrange-module__center___9qfhG",bottom:"Arrange-module__bottom___8beod",stretch:"Arrange-module__stretch___eQF-k",default:"Arrange-module__default___z+O29"}},39496:function(e,t,n){function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.AlignmentTypes=void 0;var r=c(n(96540)),a=c(n(5556)),i=c(n(67967)),o=c(n(92420)),u=["fitStart","fill","fitEnd","align","alignFitStart","alignFill","alignFitEnd","fitStartAttributes","fillAttributes","fitEndAttributes"];function c(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},s.apply(this,arguments)}function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t,n){var r;return r=function(e,t){if("object"!=l(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"==l(r)?r:r+"")in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n={};for(var l in e)if(Object.prototype.hasOwnProperty.call(e,l)){if(t.indexOf(l)>=0)continue;n[l]=e[l]}return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}t.AlignmentTypes={CENTER:"center",BOTTOM:"bottom",STRETCH:"stretch"};var b=i.default.bind(o.default),g={fitStart:a.default.element,fill:a.default.element.isRequired,fitEnd:a.default.element,align:a.default.oneOf(["center","bottom","stretch"]),alignFitStart:a.default.oneOf(["center","bottom","stretch"]),alignFitEnd:a.default.oneOf(["center","bottom","stretch"]),alignFill:a.default.oneOf(["center","bottom","stretch"]),fitStartAttributes:a.default.object,fillAttributes:a.default.object,fitEndAttributes:a.default.object},p=function(e){var t=e.fitStart,n=e.fill,l=e.fitEnd,a=e.align,i=e.alignFitStart,o=e.alignFill,c=e.alignFitEnd,f=e.fitStartAttributes,m=e.fillAttributes,g=e.fitEndAttributes,p=y(e,u),h=d({},f),v=d({},m),k=d({},g);return r.default.createElement("span",s({},p,{className:b("arrange",p.className)}),r.default.createElement("span",s({},h,{className:b("fit",a||i,h.className,"fit-block")}),t),r.default.createElement("span",s({},v,{className:b("fill",a||o,v.className,"fill-block")}),n),r.default.createElement("span",s({},k,{className:b("fit",a||c,k.className)}),l))};p.propTypes=g;t.default=p},88123:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=i(n(96540)),r=i(n(25365)),a=n(8604);function i(e){return e&&e.__esModule?e:{default:e}}var o=function(e){var t=Object.assign({},e);return l.default.createElement(a.FormattedMessage,{id:"Terra.icon.IconConsultInstructionsForUse.title"},(function(e){return l.default.createElement("span",{"aria-label":e,title:e},l.default.createElement(r.default,t,l.default.createElement("path",{d:"M42.746 9c-2.28 0-4.508-.85-6.405-2.115a10.165 10.165 0 0 0-5.646-1.71c-2.205 0-4.404.714-6.233 2.131L24 7.663l-.462-.357a10.17 10.17 0 0 0-6.233-2.131c-1.964 0-3.932.567-5.646 1.71C9.762 8.15 7.534 9 5.254 9H0v34h5.254c2.28 0 4.508-.85 6.405-2.115a10.163 10.163 0 0 1 5.646-1.71c1.826 0 3.646.498 5.257 1.471.142.548.626.916 1.159.916h.556c.534 0 1.017-.368 1.159-.916a10.172 10.172 0 0 1 5.257-1.471c1.964 0 3.932.567 5.646 1.71C38.238 42.15 40.466 43 42.746 43H48V9h-5.254zM9.995 38.389C8.893 39.124 7.175 40 5.254 40H3V12h2.254c2.709 0 5.5-.906 8.069-2.619a7.157 7.157 0 0 1 3.983-1.206c1.583 0 3.144.534 4.396 1.503l.798.618v26.95a13.237 13.237 0 0 0-5.195-1.07 13.13 13.13 0 0 0-7.31 2.213zM45 40h-2.254c-1.921 0-3.639-.876-4.741-1.611a13.138 13.138 0 0 0-7.31-2.214c-1.788 0-3.56.371-5.195 1.07v-26.95l.798-.618a7.219 7.219 0 0 1 4.397-1.503c1.422 0 2.799.417 3.982 1.206 2.57 1.713 5.36 2.619 8.069 2.619H45V40zm-8-11h2v2h-7v-2h2v-6h-2v-2h5v8zm-4-12a2 2 0 1 1 3.999-.001A2 2 0 0 1 33 17z"})))}))};o.displayName="IconConsultInstructionsForUse",o.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};t.default=o}}]);