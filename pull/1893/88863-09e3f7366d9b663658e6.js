"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[88863],{10544:function(t,e,n){var r=n(64836);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l=r(n(56690)),a=r(n(89728)),o=r(n(66115)),u=r(n(61655)),i=r(n(94993)),f=r(n(73808)),c=r(n(67294)),s=r(n(70419)),d=r(n(55281)),b=r(n(51162));function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=(0,f.default)(t);if(e){var l=(0,f.default)(this).constructor;n=Reflect.construct(r,arguments,l)}else n=r.apply(this,arguments);return(0,i.default)(this,n)}}var p=function(t){(0,u.default)(n,t);var e=m(n);function n(t){var r;return(0,l.default)(this,n),(r=e.call(this,t)).handleButtonClick=r.handleButtonClick.bind((0,o.default)(r)),r.handleRequestClose=r.handleRequestClose.bind((0,o.default)(r)),r.setButtonNode=r.setButtonNode.bind((0,o.default)(r)),r.getButtonNode=r.getButtonNode.bind((0,o.default)(r)),r.state={open:!1},r}return(0,a.default)(n,[{key:"handleButtonClick",value:function(){this.setState({open:!0})}},{key:"handleRequestClose",value:function(){this.setState({open:!1})}},{key:"setButtonNode",value:function(t){this.buttonNode=t}},{key:"getButtonNode",value:function(){return this.buttonNode}},{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement(s.default,{isOpen:this.state.open,targetRef:this.getButtonNode,onRequestClose:this.handleRequestClose},c.default.createElement(s.default.Item,{text:"Default Item 1",id:"TestContent1"}),c.default.createElement(s.default.Item,{text:"Default Item 2",id:"TestContent2",isDisabled:!0,onClick:function(){alert("Disabled item was clicked !")}})),c.default.createElement(d.default,{id:"default-button",type:"button",onClick:this.handleButtonClick,text:"Default Menu","aria-haspopup":!0,icon:c.default.createElement(b.default,null),isReversed:!0,refCallback:this.setButtonNode}))}}]),n}(c.default.Component);e.default=p},66633:function(t,e,n){n.r(e),e.default={arrange:"Arrange-module__arrange___hY0Ml",fill:"Arrange-module__fill___m88eq",fit:"Arrange-module__fit___tv8j-",center:"Arrange-module__center___9qfhG",bottom:"Arrange-module__bottom___8beod",stretch:"Arrange-module__stretch___eQF-k",default:"Arrange-module__default___z+O29"}},78490:function(t,e,n){function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.AlignmentTypes=void 0;var l=f(n(67294)),a=f(n(45697)),o=f(n(47166)),u=f(n(66633)),i=["fitStart","fill","fitEnd","align","alignFitStart","alignFill","alignFitEnd","fitStartAttributes","fillAttributes","fitEndAttributes"];function f(t){return t&&t.__esModule?t:{default:t}}function c(){return c=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},c.apply(this,arguments)}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){b(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function b(t,e,n){return(e=function(t){var e=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var l=n.call(t,e||"default");if("object"!==r(l))return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===r(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function m(t,e){if(null==t)return{};var n,r,l=function(t,e){if(null==t)return{};var n,r,l={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}e.AlignmentTypes={CENTER:"center",BOTTOM:"bottom",STRETCH:"stretch"};var p=o.default.bind(u.default),h={fitStart:a.default.element,fill:a.default.element.isRequired,fitEnd:a.default.element,align:a.default.oneOf(["center","bottom","stretch"]),alignFitStart:a.default.oneOf(["center","bottom","stretch"]),alignFitEnd:a.default.oneOf(["center","bottom","stretch"]),alignFill:a.default.oneOf(["center","bottom","stretch"]),fitStartAttributes:a.default.object,fillAttributes:a.default.object,fitEndAttributes:a.default.object},v=function(t){var e=t.fitStart,n=t.fill,r=t.fitEnd,a=t.align,o=t.alignFitStart,u=t.alignFill,f=t.alignFitEnd,s=t.fitStartAttributes,b=t.fillAttributes,h=t.fitEndAttributes,v=m(t,i),y=d({},s),g=d({},b),_=d({},h);return l.default.createElement("span",c({},v,{className:p("arrange",v.className)}),l.default.createElement("span",c({},y,{className:p("fit",a||o,y.className,"fit-block")}),e),l.default.createElement("span",c({},g,{className:p("fill",a||u,g.className,"fill-block")}),n),l.default.createElement("span",c({},_,{className:p("fit",a||f,_.className)}),r))};v.propTypes=h;var y=v;e.default=y},46379:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(n(67294)),l=o(n(99139)),a=n(25387);function o(t){return t&&t.__esModule?t:{default:t}}function u(){return u=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},u.apply(this,arguments)}var i=function(t){var e=u({},t);return r.default.createElement(a.FormattedMessage,{id:"Terra.icon.IconConsultInstructionsForUse.title"},(function(t){return r.default.createElement("span",{"aria-label":t,title:t},r.default.createElement(l.default,e,r.default.createElement("path",{d:"M42.746 9c-2.28 0-4.508-.85-6.405-2.115a10.165 10.165 0 0 0-5.646-1.71c-2.205 0-4.404.714-6.233 2.131L24 7.663l-.462-.357a10.17 10.17 0 0 0-6.233-2.131c-1.964 0-3.932.567-5.646 1.71C9.762 8.15 7.534 9 5.254 9H0v34h5.254c2.28 0 4.508-.85 6.405-2.115a10.163 10.163 0 0 1 5.646-1.71c1.826 0 3.646.498 5.257 1.471.142.548.626.916 1.159.916h.556c.534 0 1.017-.368 1.159-.916a10.172 10.172 0 0 1 5.257-1.471c1.964 0 3.932.567 5.646 1.71C38.238 42.15 40.466 43 42.746 43H48V9h-5.254zM9.995 38.389C8.893 39.124 7.175 40 5.254 40H3V12h2.254c2.709 0 5.5-.906 8.069-2.619a7.157 7.157 0 0 1 3.983-1.206c1.583 0 3.144.534 4.396 1.503l.798.618v26.95a13.237 13.237 0 0 0-5.195-1.07 13.13 13.13 0 0 0-7.31 2.213zM45 40h-2.254c-1.921 0-3.639-.876-4.741-1.611a13.138 13.138 0 0 0-7.31-2.214c-1.788 0-3.56.371-5.195 1.07v-26.95l.798-.618a7.219 7.219 0 0 1 4.397-1.503c1.422 0 2.799.417 3.982 1.206 2.57 1.713 5.36 2.619 8.069 2.619H45V40zm-8-11h2v2h-7v-2h2v-6h-2v-2h5v8zm-4-12a2 2 0 1 1 3.999-.001A2 2 0 0 1 33 17z"})))}))};i.displayName="IconConsultInstructionsForUse",i.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};e.default=i}}]);