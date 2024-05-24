"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[84259],{27737:function(e,t,n){var r=n(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(n(17383)),a=r(n(34579)),o=r(n(28452)),u=r(n(63072)),i=r(n(29511)),c=r(n(96540)),s=r(n(63276)),f=r(n(23986)),d=r(n(47479));function m(e,t,n){return t=(0,u.default)(t),(0,o.default)(e,p()?Reflect.construct(t,n||[],(0,u.default)(e).constructor):t.apply(e,n))}function p(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(p=function(){return!!e})()}var b=function(e){function t(e){var n;return(0,l.default)(this,t),(n=m(this,t,[e])).handleButtonClick=n.handleButtonClick.bind(n),n.handleOnChange=n.handleOnChange.bind(n),n.handleRequestClose=n.handleRequestClose.bind(n),n.setButtonNode=n.setButtonNode.bind(n),n.getButtonNode=n.getButtonNode.bind(n),n.state={open:!1,selectedGroupItemIndex:void 0},n}return(0,i.default)(t,e),(0,a.default)(t,[{key:"handleButtonClick",value:function(){this.setState({open:!0})}},{key:"handleOnChange",value:function(e,t){this.setState({selectedGroupItemIndex:t})}},{key:"handleRequestClose",value:function(){this.setState({open:!1})}},{key:"setButtonNode",value:function(e){this.buttonNode=e}},{key:"getButtonNode",value:function(){return this.buttonNode}},{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement("div",null,"This menu contains one selectable child (an Item Group). The menu should allow space for the checkmark and the items in the item group should be selectable."),c.default.createElement(s.default,{isOpen:this.state.open,targetRef:this.getButtonNode,onRequestClose:this.handleRequestClose},c.default.createElement(s.default.ItemGroup,{className:"TestGroup",onChange:this.handleOnChange,key:"selectable-group"},c.default.createElement(s.default.Item,{text:"Group Item 1",key:"1",className:"TestGroupItem1",isToggled:0===this.state.selectedGroupItemIndex}),c.default.createElement(s.default.Item,{text:"Group Item 2",key:"2",className:"TestGroupItem2",isToggled:1===this.state.selectedGroupItemIndex}),c.default.createElement(s.default.Item,{text:"Group Item 3",key:"3",className:"TestGroupItem3",isToggled:2===this.state.selectedGroupItemIndex}))),c.default.createElement(f.default,{id:"selectable-menu-button",type:"button",onClick:this.handleButtonClick,text:"Default Menu","aria-haspopup":!0,icon:c.default.createElement(d.default,null),isReversed:!0,refCallback:this.setButtonNode}))}}])}(c.default.Component);t.default=b},92420:function(e,t,n){n.r(t),t.default={arrange:"Arrange-module__arrange___hY0Ml",fill:"Arrange-module__fill___m88eq",fit:"Arrange-module__fit___tv8j-",center:"Arrange-module__center___9qfhG",bottom:"Arrange-module__bottom___8beod",stretch:"Arrange-module__stretch___eQF-k",default:"Arrange-module__default___z+O29"}},39496:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.AlignmentTypes=void 0;var l=c(n(96540)),a=c(n(5556)),o=c(n(67967)),u=c(n(92420)),i=["fitStart","fill","fitEnd","align","alignFitStart","alignFill","alignFitEnd","fitStartAttributes","fillAttributes","fitEndAttributes"];function c(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t,n){var l;return l=function(e,t){if("object"!=r(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var l=n.call(e,t||"default");if("object"!=r(l))return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"==r(l)?l:l+"")in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}t.AlignmentTypes={CENTER:"center",BOTTOM:"bottom",STRETCH:"stretch"};var b=o.default.bind(u.default),h={fitStart:a.default.element,fill:a.default.element.isRequired,fitEnd:a.default.element,align:a.default.oneOf(["center","bottom","stretch"]),alignFitStart:a.default.oneOf(["center","bottom","stretch"]),alignFitEnd:a.default.oneOf(["center","bottom","stretch"]),alignFill:a.default.oneOf(["center","bottom","stretch"]),fitStartAttributes:a.default.object,fillAttributes:a.default.object,fitEndAttributes:a.default.object},g=function(e){var t=e.fitStart,n=e.fill,r=e.fitEnd,a=e.align,o=e.alignFitStart,u=e.alignFill,c=e.alignFitEnd,f=e.fitStartAttributes,m=e.fillAttributes,h=e.fitEndAttributes,g=p(e,i),y=d({},f),v=d({},m),O=d({},h);return l.default.createElement("span",s({},g,{className:b("arrange",g.className)}),l.default.createElement("span",s({},y,{className:b("fit",a||o,y.className,"fit-block")}),t),l.default.createElement("span",s({},v,{className:b("fill",a||u,v.className,"fill-block")}),n),l.default.createElement("span",s({},O,{className:b("fit",a||c,O.className)}),r))};g.propTypes=h;t.default=g},88123:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(96540)),l=o(n(25365)),a=n(8604);function o(e){return e&&e.__esModule?e:{default:e}}var u=function(e){var t=Object.assign({},e);return r.default.createElement(a.FormattedMessage,{id:"Terra.icon.IconConsultInstructionsForUse.title"},(function(e){return r.default.createElement("span",{"aria-label":e,title:e},r.default.createElement(l.default,t,r.default.createElement("path",{d:"M42.746 9c-2.28 0-4.508-.85-6.405-2.115a10.165 10.165 0 0 0-5.646-1.71c-2.205 0-4.404.714-6.233 2.131L24 7.663l-.462-.357a10.17 10.17 0 0 0-6.233-2.131c-1.964 0-3.932.567-5.646 1.71C9.762 8.15 7.534 9 5.254 9H0v34h5.254c2.28 0 4.508-.85 6.405-2.115a10.163 10.163 0 0 1 5.646-1.71c1.826 0 3.646.498 5.257 1.471.142.548.626.916 1.159.916h.556c.534 0 1.017-.368 1.159-.916a10.172 10.172 0 0 1 5.257-1.471c1.964 0 3.932.567 5.646 1.71C38.238 42.15 40.466 43 42.746 43H48V9h-5.254zM9.995 38.389C8.893 39.124 7.175 40 5.254 40H3V12h2.254c2.709 0 5.5-.906 8.069-2.619a7.157 7.157 0 0 1 3.983-1.206c1.583 0 3.144.534 4.396 1.503l.798.618v26.95a13.237 13.237 0 0 0-5.195-1.07 13.13 13.13 0 0 0-7.31 2.213zM45 40h-2.254c-1.921 0-3.639-.876-4.741-1.611a13.138 13.138 0 0 0-7.31-2.214c-1.788 0-3.56.371-5.195 1.07v-26.95l.798-.618a7.219 7.219 0 0 1 4.397-1.503c1.422 0 2.799.417 3.982 1.206 2.57 1.713 5.36 2.619 8.069 2.619H45V40zm-8-11h2v2h-7v-2h2v-6h-2v-2h5v8zm-4-12a2 2 0 1 1 3.999-.001A2 2 0 0 1 33 17z"})))}))};u.displayName="IconConsultInstructionsForUse",u.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};t.default=u}}]);