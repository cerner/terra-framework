"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[74235],{92214:function(e,t,n){var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(56690)),l=a(n(89728)),u=a(n(66115)),o=a(n(61655)),f=a(n(94993)),i=a(n(73808)),c=a(n(67294)),d=a(n(55281)),s=a(n(47166)),m=a(n(70419)),b=a(n(51162)),p=a(n(18845));function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,i.default)(e);if(t){var r=(0,i.default)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return(0,f.default)(this,n)}}var h=s.default.bind(p.default),v=function(e){(0,o.default)(n,e);var t=y(n);function n(e){var a;return(0,r.default)(this,n),(a=t.call(this,e)).handleButtonClick=a.handleButtonClick.bind((0,u.default)(a)),a.handleRequestClose=a.handleRequestClose.bind((0,u.default)(a)),a.setButtonNode=a.setButtonNode.bind((0,u.default)(a)),a.getButtonNode=a.getButtonNode.bind((0,u.default)(a)),a.setParentNode=a.setParentNode.bind((0,u.default)(a)),a.getParentNode=a.getParentNode.bind((0,u.default)(a)),a.state={open:!1},a}return(0,l.default)(n,[{key:"componentDidMount",value:function(){this.forceUpdate()}},{key:"handleButtonClick",value:function(){this.setState({open:!0})}},{key:"handleRequestClose",value:function(){this.setState({open:!1})}},{key:"setButtonNode",value:function(e){this.buttonNode=e}},{key:"getButtonNode",value:function(){return this.buttonNode}},{key:"setParentNode",value:function(e){this.parentNode=e}},{key:"getParentNode",value:function(){return this.parentNode}},{key:"render",value:function(){return c.default.createElement("div",{className:h("content-wrapper"),ref:this.setParentNode},c.default.createElement(m.default,{boundingRef:this.getParentNode,isOpen:this.state.open,targetRef:this.getButtonNode,onRequestClose:this.handleRequestClose,classNameContent:"TestBoundedContent"},c.default.createElement(m.default.Item,{text:"Default 1",key:"1"}),c.default.createElement(m.default.Item,{text:"Default 2",key:"2",className:"TestNestedMenu",subMenuItems:[c.default.createElement(m.default.Item,{text:"Default 2.1",key:"2.1",className:"TestNestedMenuContent"}),c.default.createElement(m.default.Item,{text:"Default 2.2",key:"2.2"}),c.default.createElement(m.default.Item,{text:"Default 2.3",key:"2.3"})]}),c.default.createElement(m.default.Item,{text:"Default 3",key:"3"}),c.default.createElement(m.default.Item,{text:"Default 4",key:"4"}),c.default.createElement(m.default.Item,{text:"Default 5",key:"5"}),c.default.createElement(m.default.ItemGroup,{isSelectable:!0,onChange:this.handleOnChange,key:"6"},c.default.createElement(m.default.Item,{text:"Default 61",key:"61"}),c.default.createElement(m.default.Item,{text:"Default 62",key:"62"}),c.default.createElement(m.default.Item,{text:"Default 63",key:"63"})),c.default.createElement(m.default.Item,{text:"Default 7",key:"7"}),c.default.createElement(m.default.Item,{text:"Default 8",key:"8"})),c.default.createElement(d.default,{id:"bounded-button",type:"button",onClick:this.handleButtonClick,text:"Default Menu","aria-haspopup":!0,icon:c.default.createElement(b.default,null),isReversed:!0,refCallback:this.setButtonNode}))}}]),n}(c.default.Component);t.default=v},66633:function(e,t,n){n.r(t),t.default={arrange:"Arrange-module__arrange___hY0Ml",fill:"Arrange-module__fill___m88eq",fit:"Arrange-module__fit___tv8j-",center:"Arrange-module__center___9qfhG",bottom:"Arrange-module__bottom___8beod",stretch:"Arrange-module__stretch___eQF-k",default:"Arrange-module__default___z+O29"}},18845:function(e,t,n){n.r(t),t.default={"content-wrapper":"BoundedMenu-test-module__content-wrapper___AsMCE"}},78490:function(e,t,n){function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.AlignmentTypes=void 0;var r=i(n(67294)),l=i(n(45697)),u=i(n(47166)),o=i(n(66633)),f=["fitStart","fill","fitEnd","align","alignFitStart","alignFill","alignFitEnd","fitStartAttributes","fillAttributes","fitEndAttributes"];function i(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(this,arguments)}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==a(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===a(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}t.AlignmentTypes={CENTER:"center",BOTTOM:"bottom",STRETCH:"stretch"};var p=u.default.bind(o.default),y={fitStart:l.default.element,fill:l.default.element.isRequired,fitEnd:l.default.element,align:l.default.oneOf(["center","bottom","stretch"]),alignFitStart:l.default.oneOf(["center","bottom","stretch"]),alignFitEnd:l.default.oneOf(["center","bottom","stretch"]),alignFill:l.default.oneOf(["center","bottom","stretch"]),fitStartAttributes:l.default.object,fillAttributes:l.default.object,fitEndAttributes:l.default.object},h=function(e){var t=e.fitStart,n=e.fill,a=e.fitEnd,l=e.align,u=e.alignFitStart,o=e.alignFill,i=e.alignFitEnd,d=e.fitStartAttributes,m=e.fillAttributes,y=e.fitEndAttributes,h=b(e,f),v=s({},d),g=s({},m),_=s({},y);return r.default.createElement("span",c({},h,{className:p("arrange",h.className)}),r.default.createElement("span",c({},v,{className:p("fit",l||u,v.className,"fit-block")}),t),r.default.createElement("span",c({},g,{className:p("fill",l||o,g.className,"fill-block")}),n),r.default.createElement("span",c({},_,{className:p("fit",l||i,_.className)}),a))};h.propTypes=y;var v=h;t.default=v},46379:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(n(67294)),r=u(n(99139)),l=n(25387);function u(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}var f=function(e){var t=o({},e);return a.default.createElement(l.FormattedMessage,{id:"Terra.icon.IconConsultInstructionsForUse.title"},(function(e){return a.default.createElement("span",{"aria-label":e,title:e},a.default.createElement(r.default,t,a.default.createElement("path",{d:"M42.746 9c-2.28 0-4.508-.85-6.405-2.115a10.165 10.165 0 0 0-5.646-1.71c-2.205 0-4.404.714-6.233 2.131L24 7.663l-.462-.357a10.17 10.17 0 0 0-6.233-2.131c-1.964 0-3.932.567-5.646 1.71C9.762 8.15 7.534 9 5.254 9H0v34h5.254c2.28 0 4.508-.85 6.405-2.115a10.163 10.163 0 0 1 5.646-1.71c1.826 0 3.646.498 5.257 1.471.142.548.626.916 1.159.916h.556c.534 0 1.017-.368 1.159-.916a10.172 10.172 0 0 1 5.257-1.471c1.964 0 3.932.567 5.646 1.71C38.238 42.15 40.466 43 42.746 43H48V9h-5.254zM9.995 38.389C8.893 39.124 7.175 40 5.254 40H3V12h2.254c2.709 0 5.5-.906 8.069-2.619a7.157 7.157 0 0 1 3.983-1.206c1.583 0 3.144.534 4.396 1.503l.798.618v26.95a13.237 13.237 0 0 0-5.195-1.07 13.13 13.13 0 0 0-7.31 2.213zM45 40h-2.254c-1.921 0-3.639-.876-4.741-1.611a13.138 13.138 0 0 0-7.31-2.214c-1.788 0-3.56.371-5.195 1.07v-26.95l.798-.618a7.219 7.219 0 0 1 4.397-1.503c1.422 0 2.799.417 3.982 1.206 2.57 1.713 5.36 2.619 8.069 2.619H45V40zm-8-11h2v2h-7v-2h2v-6h-2v-2h5v8zm-4-12a2 2 0 1 1 3.999-.001A2 2 0 0 1 33 17z"})))}))};f.displayName="IconConsultInstructionsForUse",f.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};t.default=f}}]);