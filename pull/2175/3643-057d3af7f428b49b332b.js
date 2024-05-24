"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[3643],{22945:function(t,e,n){var r=n(24994);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(n(41132)),l=r(n(17383)),o=r(n(34579)),u=r(n(28452)),i=r(n(63072)),c=r(n(29511)),f=r(n(96540)),s=r(n(63276)),d=r(n(23986)),m=r(n(47479));function b(t,e,n){return e=(0,i.default)(e),(0,u.default)(t,p()?Reflect.construct(e,n||[],(0,i.default)(t).constructor):e.apply(t,n))}function p(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(p=function(){return!!t})()}var v=function(t){function e(t){var n;return(0,l.default)(this,e),(n=b(this,e,[t])).handleButtonClick=n.handleButtonClick.bind(n),n.handleRequestClose=n.handleRequestClose.bind(n),n.setButtonNode=n.setButtonNode.bind(n),n.getButtonNode=n.getButtonNode.bind(n),n.addMenuItems=n.addMenuItems.bind(n),n.removeMenuItems=n.removeMenuItems.bind(n),n.state={open:!1,items:[0]},n}return(0,c.default)(e,t),(0,o.default)(e,[{key:"componentDidMount",value:function(){this.forceUpdate()}},{key:"handleButtonClick",value:function(){this.setState({open:!0})}},{key:"handleRequestClose",value:function(){this.setState({open:!1})}},{key:"setButtonNode",value:function(t){this.buttonNode=t}},{key:"getButtonNode",value:function(){return this.buttonNode}},{key:"addMenuItems",value:function(){this.setState((function(t){return{items:[].concat((0,a.default)(t.items),[t.items.length])}}))}},{key:"removeMenuItems",value:function(){this.setState((function(t){var e=t.items.slice();return e.pop(),{items:e}}))}},{key:"render",value:function(){return f.default.createElement("div",null,f.default.createElement(s.default,{isOpen:this.state.open,targetRef:this.getButtonNode,onRequestClose:this.handleRequestClose},this.state.items.map((function(t){return f.default.createElement(s.default.Item,{key:t,text:"Menu Item ".concat(t),id:"TestContent".concat(t)})}))),f.default.createElement(d.default,{id:"default-button",type:"button",onClick:this.handleButtonClick,text:"Default Menu","aria-haspopup":!0,icon:f.default.createElement(m.default,null),isReversed:!0,refCallback:this.setButtonNode}),f.default.createElement("br",null),f.default.createElement("button",{type:"button",id:"add-button",onClick:this.addMenuItems},"Add Menu Item"),f.default.createElement("button",{type:"button",id:"remove-button",onClick:this.removeMenuItems},"Remove Menu Item"))}}])}(f.default.Component);e.default=v},92420:function(t,e,n){n.r(e),e.default={arrange:"Arrange-module__arrange___hY0Ml",fill:"Arrange-module__fill___m88eq",fit:"Arrange-module__fit___tv8j-",center:"Arrange-module__center___9qfhG",bottom:"Arrange-module__bottom___8beod",stretch:"Arrange-module__stretch___eQF-k",default:"Arrange-module__default___z+O29"}},39496:function(t,e,n){function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.AlignmentTypes=void 0;var a=c(n(96540)),l=c(n(5556)),o=c(n(67967)),u=c(n(92420)),i=["fitStart","fill","fitEnd","align","alignFitStart","alignFill","alignFitEnd","fitStartAttributes","fillAttributes","fitEndAttributes"];function c(t){return t&&t.__esModule?t:{default:t}}function f(){return f=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},f.apply(this,arguments)}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){m(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e,n){var a;return a=function(t,e){if("object"!=r(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var a=n.call(t,e||"default");if("object"!=r(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(e,"string"),(e="symbol"==r(a)?a:a+"")in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function b(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}e.AlignmentTypes={CENTER:"center",BOTTOM:"bottom",STRETCH:"stretch"};var p=o.default.bind(u.default),v={fitStart:l.default.element,fill:l.default.element.isRequired,fitEnd:l.default.element,align:l.default.oneOf(["center","bottom","stretch"]),alignFitStart:l.default.oneOf(["center","bottom","stretch"]),alignFitEnd:l.default.oneOf(["center","bottom","stretch"]),alignFill:l.default.oneOf(["center","bottom","stretch"]),fitStartAttributes:l.default.object,fillAttributes:l.default.object,fitEndAttributes:l.default.object},h=function(t){var e=t.fitStart,n=t.fill,r=t.fitEnd,l=t.align,o=t.alignFitStart,u=t.alignFill,c=t.alignFitEnd,s=t.fitStartAttributes,m=t.fillAttributes,v=t.fitEndAttributes,h=b(t,i),y=d({},s),g=d({},m),_=d({},v);return a.default.createElement("span",f({},h,{className:p("arrange",h.className)}),a.default.createElement("span",f({},y,{className:p("fit",l||o,y.className,"fit-block")}),e),a.default.createElement("span",f({},g,{className:p("fill",l||u,g.className,"fill-block")}),n),a.default.createElement("span",f({},_,{className:p("fit",l||c,_.className)}),r))};h.propTypes=v;e.default=h},88123:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(n(96540)),a=o(n(25365)),l=n(8604);function o(t){return t&&t.__esModule?t:{default:t}}var u=function(t){var e=Object.assign({},t);return r.default.createElement(l.FormattedMessage,{id:"Terra.icon.IconConsultInstructionsForUse.title"},(function(t){return r.default.createElement("span",{"aria-label":t,title:t},r.default.createElement(a.default,e,r.default.createElement("path",{d:"M42.746 9c-2.28 0-4.508-.85-6.405-2.115a10.165 10.165 0 0 0-5.646-1.71c-2.205 0-4.404.714-6.233 2.131L24 7.663l-.462-.357a10.17 10.17 0 0 0-6.233-2.131c-1.964 0-3.932.567-5.646 1.71C9.762 8.15 7.534 9 5.254 9H0v34h5.254c2.28 0 4.508-.85 6.405-2.115a10.163 10.163 0 0 1 5.646-1.71c1.826 0 3.646.498 5.257 1.471.142.548.626.916 1.159.916h.556c.534 0 1.017-.368 1.159-.916a10.172 10.172 0 0 1 5.257-1.471c1.964 0 3.932.567 5.646 1.71C38.238 42.15 40.466 43 42.746 43H48V9h-5.254zM9.995 38.389C8.893 39.124 7.175 40 5.254 40H3V12h2.254c2.709 0 5.5-.906 8.069-2.619a7.157 7.157 0 0 1 3.983-1.206c1.583 0 3.144.534 4.396 1.503l.798.618v26.95a13.237 13.237 0 0 0-5.195-1.07 13.13 13.13 0 0 0-7.31 2.213zM45 40h-2.254c-1.921 0-3.639-.876-4.741-1.611a13.138 13.138 0 0 0-7.31-2.214c-1.788 0-3.56.371-5.195 1.07v-26.95l.798-.618a7.219 7.219 0 0 1 4.397-1.503c1.422 0 2.799.417 3.982 1.206 2.57 1.713 5.36 2.619 8.069 2.619H45V40zm-8-11h2v2h-7v-2h2v-6h-2v-2h5v8zm-4-12a2 2 0 1 1 3.999-.001A2 2 0 0 1 33 17z"})))}))};u.displayName="IconConsultInstructionsForUse",u.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};e.default=u}}]);