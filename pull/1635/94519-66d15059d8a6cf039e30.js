"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[94519],{65609:function(e,t,a){var l=a(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(56690)),r=l(a(89728)),u=l(a(66115)),f=l(a(61655)),i=l(a(94993)),o=l(a(73808)),c=l(a(67294)),d=l(a(70419)),s=l(a(87491));function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,l=(0,o.default)(e);if(t){var n=(0,o.default)(this).constructor;a=Reflect.construct(l,arguments,n)}else a=l.apply(this,arguments);return(0,i.default)(this,a)}}var y=function(e){(0,f.default)(a,e);var t=m(a);function a(e){var l;return(0,n.default)(this,a),(l=t.call(this,e)).handleButtonClick=l.handleButtonClick.bind((0,u.default)(l)),l.handleRequestClose=l.handleRequestClose.bind((0,u.default)(l)),l.setButtonNode=l.setButtonNode.bind((0,u.default)(l)),l.getButtonNode=l.getButtonNode.bind((0,u.default)(l)),l.state={open:!1},l}return(0,r.default)(a,[{key:"componentDidMount",value:function(){this.forceUpdate()}},{key:"handleButtonClick",value:function(){this.setState({open:!0})}},{key:"handleRequestClose",value:function(){this.setState({open:!1})}},{key:"setButtonNode",value:function(e){this.buttonNode=e}},{key:"getButtonNode",value:function(){return this.buttonNode}},{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement("div",null,"This menu should have a large height. And all items should be visible without scrolling."),c.default.createElement(d.default,{isOpen:this.state.open,targetRef:this.getButtonNode,onRequestClose:this.handleRequestClose},c.default.createElement(d.default.Item,{text:"Default 1",key:"1",className:"TestFirstItem"}),c.default.createElement(d.default.Item,{text:"Nested Menu",key:"2",subMenuItems:[c.default.createElement(d.default.Item,{text:"Default 2.1",key:"2.1"}),c.default.createElement(d.default.Item,{text:"Default 2.2",key:"2.2"}),c.default.createElement(d.default.Item,{text:"Default 2.3",key:"2.3"}),c.default.createElement(d.default.Item,{text:"Default 2.4",key:"2.4",icon:c.default.createElement(s.default,null)})]}),c.default.createElement(d.default.Item,{text:"Default 3",key:"3"}),c.default.createElement(d.default.Item,{text:"Default 4",key:"4"}),c.default.createElement(d.default.Item,{text:"Default 5",key:"5"}),c.default.createElement(d.default.Divider,{key:"Divider1"}),c.default.createElement(d.default.ItemGroup,{key:"6"},c.default.createElement(d.default.Item,{text:"Default 61",key:"61"}),c.default.createElement(d.default.Item,{text:"Default 62",key:"62"}),c.default.createElement(d.default.Item,{text:"Default 63",key:"63"})),c.default.createElement(d.default.Divider,{key:"Divider2"}),c.default.createElement(d.default.Item,{text:"Default 7",key:"7"}),c.default.createElement(d.default.Item,{text:"Default 8",key:"8"}),c.default.createElement(d.default.Item,{text:"Default 9",key:"9"}),c.default.createElement(d.default.Divider,{key:"Divider1"}),c.default.createElement(d.default.Item,{text:"Default 10",key:"10"}),c.default.createElement(d.default.Item,{text:"Default 11",key:"11"}),c.default.createElement(d.default.Item,{text:"Default 12",key:"12"}),c.default.createElement(d.default.Item,{text:"Default 13",key:"13"}),c.default.createElement(d.default.Item,{text:"Default 14",key:"14"}),c.default.createElement(d.default.Divider,{key:"Divider3"}),c.default.createElement(d.default.ItemGroup,{key:"15"},c.default.createElement(d.default.Item,{text:"Default 151",key:"151"}),c.default.createElement(d.default.Item,{text:"Default 152",key:"152"}),c.default.createElement(d.default.Item,{text:"Default 153",key:"153"})),c.default.createElement(d.default.Divider,{key:"Divider4"}),c.default.createElement(d.default.Item,{text:"Default 16",key:"16",className:"TestLastItem"})),c.default.createElement("button",{type:"button",id:"large-menu-button",onClick:this.handleButtonClick,ref:this.setButtonNode},"Default Menu"))}}]),a}(c.default.Component);t.default=y},66633:function(e,t,a){a.r(t),t.default={arrange:"Arrange-module__arrange___hY0Ml",fill:"Arrange-module__fill___m88eq",fit:"Arrange-module__fit___tv8j-",center:"Arrange-module__center___9qfhG",bottom:"Arrange-module__bottom___8beod",stretch:"Arrange-module__stretch___eQF-k",default:"Arrange-module__default___z+O29"}},78490:function(e,t,a){function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.AlignmentTypes=void 0;var n=o(a(67294)),r=o(a(45697)),u=o(a(47166)),f=o(a(66633)),i=["fitStart","fill","fitEnd","align","alignFitStart","alignFill","alignFitEnd","fitStartAttributes","fillAttributes","fitEndAttributes"];function o(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},c.apply(this,arguments)}function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){m(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t,a){return(t=function(e){var t=function(e,t){if("object"!==l(e)||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var n=a.call(e,t||"default");if("object"!==l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===l(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function y(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}t.AlignmentTypes={CENTER:"center",BOTTOM:"bottom",STRETCH:"stretch"};var v=u.default.bind(f.default),b={fitStart:r.default.element,fill:r.default.element.isRequired,fitEnd:r.default.element,align:r.default.oneOf(["center","bottom","stretch"]),alignFitStart:r.default.oneOf(["center","bottom","stretch"]),alignFitEnd:r.default.oneOf(["center","bottom","stretch"]),alignFill:r.default.oneOf(["center","bottom","stretch"]),fitStartAttributes:r.default.object,fillAttributes:r.default.object,fitEndAttributes:r.default.object},p=function(e){var t=e.fitStart,a=e.fill,l=e.fitEnd,r=e.align,u=e.alignFitStart,f=e.alignFill,o=e.alignFitEnd,d=e.fitStartAttributes,m=e.fillAttributes,b=e.fitEndAttributes,p=y(e,i),h=s({},d),g=s({},m),E=s({},b);return n.default.createElement("div",c({},p,{className:v("arrange",p.className)}),n.default.createElement("div",c({},h,{className:v("fit",r||u,h.className)}),t),n.default.createElement("div",c({},g,{className:v("fill",r||f,g.className)}),a),n.default.createElement("div",c({},E,{className:v("fit",r||o,E.className)}),l))};p.propTypes=b;var h=p;t.default=h},46379:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=u(a(67294)),n=u(a(99139)),r=a(25387);function u(e){return e&&e.__esModule?e:{default:e}}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},f.apply(this,arguments)}var i=function(e){var t=f({},e);return l.default.createElement(r.FormattedMessage,{id:"Terra.icon.IconConsultInstructionsForUse.title"},(function(e){return l.default.createElement("span",{"aria-label":e,title:e},l.default.createElement(n.default,t,l.default.createElement("path",{d:"M42.746 9c-2.28 0-4.508-.85-6.405-2.115a10.165 10.165 0 00-5.646-1.71c-2.205 0-4.404.714-6.233 2.131L24 7.663l-.462-.357a10.17 10.17 0 00-6.233-2.131c-1.964 0-3.932.567-5.646 1.71C9.762 8.15 7.534 9 5.254 9H0v34h5.254c2.28 0 4.508-.85 6.405-2.115a10.163 10.163 0 015.646-1.71c1.826 0 3.646.498 5.257 1.471.142.548.626.916 1.159.916h.556c.534 0 1.017-.368 1.159-.916a10.172 10.172 0 015.257-1.471c1.964 0 3.932.567 5.646 1.71C38.238 42.15 40.466 43 42.746 43H48V9h-5.254zM9.995 38.389C8.893 39.124 7.175 40 5.254 40H3V12h2.254c2.709 0 5.5-.906 8.069-2.619a7.157 7.157 0 013.983-1.206c1.583 0 3.144.534 4.396 1.503l.798.618v26.95a13.237 13.237 0 00-5.195-1.07 13.13 13.13 0 00-7.31 2.213zM45 40h-2.254c-1.921 0-3.639-.876-4.741-1.611a13.138 13.138 0 00-7.31-2.214c-1.788 0-3.56.371-5.195 1.07v-26.95l.798-.618a7.219 7.219 0 014.397-1.503c1.422 0 2.799.417 3.982 1.206 2.57 1.713 5.36 2.619 8.069 2.619H45V40zm-8-11h2v2h-7v-2h2v-6h-2v-2h5v8zm-4-12a2 2 0 113.999-.001A2 2 0 0133 17z"})))}))};i.displayName="IconConsultInstructionsForUse",i.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};var o=i;t.default=o},87491:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(a(67294)),n=r(a(99139));function r(e){return e&&e.__esModule?e:{default:e}}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},u.apply(this,arguments)}var f=function(e){var t=u({},e);return l.default.createElement(n.default,t,l.default.createElement("path",{d:"M39.8 12H35V1.7c0-.9-.8-1.7-1.7-1.7H8.7C7.8 0 7 .8 7 1.7V12H2.2C1 12 0 13 0 14.2v19.7C.1 35.1 1 36 2.2 36H7v10.3c0 .9.8 1.7 1.7 1.7h24.6c.9 0 1.7-.8 1.7-1.7V36h4.8c1.2 0 2.2-1 2.2-2.2V14.2c0-1.2-1-2.2-2.2-2.2zM10 3h22v9H10V3zm22 42H10V29.9h22V45zm3.2-24C34 21 33 20 33 18.8s1-2.2 2.2-2.2 2.2 1 2.2 2.2c0 1.2-1 2.2-2.2 2.2z"}))};f.displayName="IconPrinter",f.defaultProps={viewBox:"0 0 42 48",xmlns:"http://www.w3.org/2000/svg"};var i=f;t.default=i}}]);