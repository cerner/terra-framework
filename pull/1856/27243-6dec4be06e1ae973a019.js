"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[27243],{90260:function(e,t,n){var l=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(56690)),a=l(n(89728)),u=l(n(66115)),o=l(n(61655)),i=l(n(94993)),f=l(n(73808)),c=l(n(67294)),s=l(n(70419)),d=l(n(55281)),m=l(n(51162));function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,l=(0,f.default)(e);if(t){var r=(0,f.default)(this).constructor;n=Reflect.construct(l,arguments,r)}else n=l.apply(this,arguments);return(0,i.default)(this,n)}}var p=function(e){(0,o.default)(n,e);var t=b(n);function n(e){var l;return(0,r.default)(this,n),(l=t.call(this,e)).handleButtonClick=l.handleButtonClick.bind((0,u.default)(l)),l.handleRequestClose=l.handleRequestClose.bind((0,u.default)(l)),l.handleNestedItemClick=l.handleNestedItemClick.bind((0,u.default)(l)),l.setButtonNode=l.setButtonNode.bind((0,u.default)(l)),l.getButtonNode=l.getButtonNode.bind((0,u.default)(l)),l.state={open:!1,isToggled:!1},l}return(0,a.default)(n,[{key:"componentDidMount",value:function(){this.forceUpdate()}},{key:"handleButtonClick",value:function(){this.setState({open:!0})}},{key:"handleRequestClose",value:function(){this.setState({open:!1})}},{key:"handleNestedItemClick",value:function(){this.setState((function(e){return{isToggled:!e.isToggled}}))}},{key:"setButtonNode",value:function(e){this.buttonNode=e}},{key:"getButtonNode",value:function(){return this.buttonNode}},{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement("div",null,"This menu contains a selectable item and an unselectable item. All items in the menu should have the same spacing on the left to allow for a checkmark."),c.default.createElement(s.default,{isOpen:this.state.open,targetRef:this.getButtonNode,onRequestClose:this.handleRequestClose},c.default.createElement(s.default.Item,{text:"Default 1",key:"1",className:"TestNonSelectableItem"}),c.default.createElement(s.default.Item,{text:"Default 2",key:"2"}),c.default.createElement(s.default.Item,{text:"Default Submenu 1",key:"3",className:"subMenu1",subMenuItems:[c.default.createElement(s.default.Item,{text:"Sub Nested Item1",key:"4",className:"testNestedItem1",isToggled:this.state.isToggled,onClick:this.handleNestedItemClick,isToggleable:!0}),c.default.createElement(s.default.Item,{text:"Default Submenu 2",key:"5",className:"subMenu2"})]})),c.default.createElement(d.default,{id:"default-button",type:"button",onClick:this.handleButtonClick,text:"Default Menu","aria-haspopup":!0,icon:c.default.createElement(m.default,null),isReversed:!0,refCallback:this.setButtonNode}))}}]),n}(c.default.Component);t.default=p},66633:function(e,t,n){n.r(t),t.default={arrange:"Arrange-module__arrange___hY0Ml",fill:"Arrange-module__fill___m88eq",fit:"Arrange-module__fit___tv8j-",center:"Arrange-module__center___9qfhG",bottom:"Arrange-module__bottom___8beod",stretch:"Arrange-module__stretch___eQF-k",default:"Arrange-module__default___z+O29"}},78490:function(e,t,n){function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.AlignmentTypes=void 0;var r=f(n(67294)),a=f(n(45697)),u=f(n(47166)),o=f(n(66633)),i=["fitStart","fill","fitEnd","align","alignFitStart","alignFill","alignFitEnd","fitStartAttributes","fillAttributes","fitEndAttributes"];function f(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},c.apply(this,arguments)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==l(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===l(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}t.AlignmentTypes={CENTER:"center",BOTTOM:"bottom",STRETCH:"stretch"};var p=u.default.bind(o.default),h={fitStart:a.default.element,fill:a.default.element.isRequired,fitEnd:a.default.element,align:a.default.oneOf(["center","bottom","stretch"]),alignFitStart:a.default.oneOf(["center","bottom","stretch"]),alignFitEnd:a.default.oneOf(["center","bottom","stretch"]),alignFill:a.default.oneOf(["center","bottom","stretch"]),fitStartAttributes:a.default.object,fillAttributes:a.default.object,fitEndAttributes:a.default.object},g=function(e){var t=e.fitStart,n=e.fill,l=e.fitEnd,a=e.align,u=e.alignFitStart,o=e.alignFill,f=e.alignFitEnd,s=e.fitStartAttributes,m=e.fillAttributes,h=e.fitEndAttributes,g=b(e,i),y=d({},s),v=d({},m),_=d({},h);return r.default.createElement("span",c({},g,{className:p("arrange",g.className)}),r.default.createElement("span",c({},y,{className:p("fit",a||u,y.className,"fit-block")}),t),r.default.createElement("span",c({},v,{className:p("fill",a||o,v.className,"fill-block")}),n),r.default.createElement("span",c({},_,{className:p("fit",a||f,_.className)}),l))};g.propTypes=h;var y=g;t.default=y},46379:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=u(n(67294)),r=u(n(99139)),a=n(25387);function u(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},o.apply(this,arguments)}var i=function(e){var t=o({},e);return l.default.createElement(a.FormattedMessage,{id:"Terra.icon.IconConsultInstructionsForUse.title"},(function(e){return l.default.createElement("span",{"aria-label":e,title:e},l.default.createElement(r.default,t,l.default.createElement("path",{d:"M42.746 9c-2.28 0-4.508-.85-6.405-2.115a10.165 10.165 0 0 0-5.646-1.71c-2.205 0-4.404.714-6.233 2.131L24 7.663l-.462-.357a10.17 10.17 0 0 0-6.233-2.131c-1.964 0-3.932.567-5.646 1.71C9.762 8.15 7.534 9 5.254 9H0v34h5.254c2.28 0 4.508-.85 6.405-2.115a10.163 10.163 0 0 1 5.646-1.71c1.826 0 3.646.498 5.257 1.471.142.548.626.916 1.159.916h.556c.534 0 1.017-.368 1.159-.916a10.172 10.172 0 0 1 5.257-1.471c1.964 0 3.932.567 5.646 1.71C38.238 42.15 40.466 43 42.746 43H48V9h-5.254zM9.995 38.389C8.893 39.124 7.175 40 5.254 40H3V12h2.254c2.709 0 5.5-.906 8.069-2.619a7.157 7.157 0 0 1 3.983-1.206c1.583 0 3.144.534 4.396 1.503l.798.618v26.95a13.237 13.237 0 0 0-5.195-1.07 13.13 13.13 0 0 0-7.31 2.213zM45 40h-2.254c-1.921 0-3.639-.876-4.741-1.611a13.138 13.138 0 0 0-7.31-2.214c-1.788 0-3.56.371-5.195 1.07v-26.95l.798-.618a7.219 7.219 0 0 1 4.397-1.503c1.422 0 2.799.417 3.982 1.206 2.57 1.713 5.36 2.619 8.069 2.619H45V40zm-8-11h2v2h-7v-2h2v-6h-2v-2h5v8zm-4-12a2 2 0 1 1 3.999-.001A2 2 0 0 1 33 17z"})))}))};i.displayName="IconConsultInstructionsForUse",i.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};t.default=i}}]);