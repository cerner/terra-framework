"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[17468],{20442:function(e,t,a){var l=a(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(17383)),r=l(a(34579)),u=l(a(28452)),f=l(a(63072)),o=l(a(12475)),i=l(a(29511)),d=l(a(96540)),c=l(a(63276)),s=l(a(38008)),m=l(a(23986)),y=l(a(47479));function b(e,t,a){return t=(0,f.default)(t),(0,u.default)(e,p()?Reflect.construct(t,a||[],(0,f.default)(e).constructor):t.apply(e,a))}function p(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(p=function(){return!!e})()}var v=function(e){function t(e){var a;return(0,n.default)(this,t),(a=b(this,t,[e])).handleButtonClick=a.handleButtonClick.bind((0,o.default)(a)),a.handleRequestClose=a.handleRequestClose.bind((0,o.default)(a)),a.setButtonNode=a.setButtonNode.bind((0,o.default)(a)),a.getButtonNode=a.getButtonNode.bind((0,o.default)(a)),a.state={open:!1},a}return(0,i.default)(t,e),(0,r.default)(t,[{key:"componentDidMount",value:function(){this.forceUpdate()}},{key:"handleButtonClick",value:function(){this.setState({open:!0})}},{key:"handleRequestClose",value:function(){this.setState({open:!1})}},{key:"setButtonNode",value:function(e){this.buttonNode=e}},{key:"getButtonNode",value:function(){return this.buttonNode}},{key:"render",value:function(){return d.default.createElement("div",null,d.default.createElement("div",null,"This menu should have a large height. And all items should be visible without scrolling."),d.default.createElement(c.default,{isOpen:this.state.open,targetRef:this.getButtonNode,onRequestClose:this.handleRequestClose},d.default.createElement(c.default.Item,{text:"Default 1",key:"1",className:"TestFirstItem"}),d.default.createElement(c.default.Item,{text:"Nested Menu",key:"2",subMenuItems:[d.default.createElement(c.default.Item,{text:"Default 2.1",key:"2.1"}),d.default.createElement(c.default.Item,{text:"Default 2.2",key:"2.2"}),d.default.createElement(c.default.Item,{text:"Default 2.3",key:"2.3"}),d.default.createElement(c.default.Item,{text:"Default 2.4",key:"2.4",icon:d.default.createElement(s.default,null)})]}),d.default.createElement(c.default.Item,{text:"Default 3",key:"3"}),d.default.createElement(c.default.Item,{text:"Default 4",key:"4"}),d.default.createElement(c.default.Item,{text:"Default 5",key:"5"}),d.default.createElement(c.default.Divider,{key:"Divider1"}),d.default.createElement(c.default.ItemGroup,{key:"6"},d.default.createElement(c.default.Item,{text:"Default 61",key:"61"}),d.default.createElement(c.default.Item,{text:"Default 62",key:"62"}),d.default.createElement(c.default.Item,{text:"Default 63",key:"63"})),d.default.createElement(c.default.Divider,{key:"Divider2"}),d.default.createElement(c.default.Item,{text:"Default 7",key:"7"}),d.default.createElement(c.default.Item,{text:"Default 8",key:"8"}),d.default.createElement(c.default.Item,{text:"Default 9",key:"9"}),d.default.createElement(c.default.Divider,{key:"Divider1"}),d.default.createElement(c.default.Item,{text:"Default 10",key:"10"}),d.default.createElement(c.default.Item,{text:"Default 11",key:"11"}),d.default.createElement(c.default.Item,{text:"Default 12",key:"12"}),d.default.createElement(c.default.Item,{text:"Default 13",key:"13"}),d.default.createElement(c.default.Item,{text:"Default 14",key:"14"}),d.default.createElement(c.default.Divider,{key:"Divider3"}),d.default.createElement(c.default.ItemGroup,{key:"15"},d.default.createElement(c.default.Item,{text:"Default 151",key:"151"}),d.default.createElement(c.default.Item,{text:"Default 152",key:"152"}),d.default.createElement(c.default.Item,{text:"Default 153",key:"153"})),d.default.createElement(c.default.Divider,{key:"Divider4"}),d.default.createElement(c.default.Item,{text:"Default 16",key:"16",className:"TestLastItem"})),d.default.createElement(m.default,{id:"large-menu-button",type:"button",onClick:this.handleButtonClick,text:"Default Menu","aria-haspopup":!0,icon:d.default.createElement(y.default,null),isReversed:!0,refCallback:this.setButtonNode}))}}]),t}(d.default.Component);t.default=v},92420:function(e,t,a){a.r(t),t.default={arrange:"Arrange-module__arrange___hY0Ml",fill:"Arrange-module__fill___m88eq",fit:"Arrange-module__fit___tv8j-",center:"Arrange-module__center___9qfhG",bottom:"Arrange-module__bottom___8beod",stretch:"Arrange-module__stretch___eQF-k",default:"Arrange-module__default___z+O29"}},39496:function(e,t,a){function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.AlignmentTypes=void 0;var n=i(a(96540)),r=i(a(5556)),u=i(a(67967)),f=i(a(92420)),o=["fitStart","fill","fitEnd","align","alignFitStart","alignFill","alignFitEnd","fitStartAttributes","fillAttributes","fitEndAttributes"];function i(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},d.apply(this,arguments)}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){m(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t,a){var n;return n=function(e,t){if("object"!=l(e)||!e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var n=a.call(e,t||"default");if("object"!=l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"==l(n)?n:String(n))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function y(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}t.AlignmentTypes={CENTER:"center",BOTTOM:"bottom",STRETCH:"stretch"};var b=u.default.bind(f.default),p={fitStart:r.default.element,fill:r.default.element.isRequired,fitEnd:r.default.element,align:r.default.oneOf(["center","bottom","stretch"]),alignFitStart:r.default.oneOf(["center","bottom","stretch"]),alignFitEnd:r.default.oneOf(["center","bottom","stretch"]),alignFill:r.default.oneOf(["center","bottom","stretch"]),fitStartAttributes:r.default.object,fillAttributes:r.default.object,fitEndAttributes:r.default.object},v=function(e){var t=e.fitStart,a=e.fill,l=e.fitEnd,r=e.align,u=e.alignFitStart,f=e.alignFill,i=e.alignFitEnd,c=e.fitStartAttributes,m=e.fillAttributes,p=e.fitEndAttributes,v=y(e,o),h=s({},c),g=s({},m),E=s({},p);return n.default.createElement("span",d({},v,{className:b("arrange",v.className)}),n.default.createElement("span",d({},h,{className:b("fit",r||u,h.className,"fit-block")}),t),n.default.createElement("span",d({},g,{className:b("fill",r||f,g.className,"fill-block")}),a),n.default.createElement("span",d({},E,{className:b("fit",r||i,E.className)}),l))};v.propTypes=p;t.default=v},88123:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=u(a(96540)),n=u(a(25365)),r=a(8604);function u(e){return e&&e.__esModule?e:{default:e}}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},f.apply(this,arguments)}var o=function(e){var t=f({},e);return l.default.createElement(r.FormattedMessage,{id:"Terra.icon.IconConsultInstructionsForUse.title"},(function(e){return l.default.createElement("span",{"aria-label":e,title:e},l.default.createElement(n.default,t,l.default.createElement("path",{d:"M42.746 9c-2.28 0-4.508-.85-6.405-2.115a10.165 10.165 0 0 0-5.646-1.71c-2.205 0-4.404.714-6.233 2.131L24 7.663l-.462-.357a10.17 10.17 0 0 0-6.233-2.131c-1.964 0-3.932.567-5.646 1.71C9.762 8.15 7.534 9 5.254 9H0v34h5.254c2.28 0 4.508-.85 6.405-2.115a10.163 10.163 0 0 1 5.646-1.71c1.826 0 3.646.498 5.257 1.471.142.548.626.916 1.159.916h.556c.534 0 1.017-.368 1.159-.916a10.172 10.172 0 0 1 5.257-1.471c1.964 0 3.932.567 5.646 1.71C38.238 42.15 40.466 43 42.746 43H48V9h-5.254zM9.995 38.389C8.893 39.124 7.175 40 5.254 40H3V12h2.254c2.709 0 5.5-.906 8.069-2.619a7.157 7.157 0 0 1 3.983-1.206c1.583 0 3.144.534 4.396 1.503l.798.618v26.95a13.237 13.237 0 0 0-5.195-1.07 13.13 13.13 0 0 0-7.31 2.213zM45 40h-2.254c-1.921 0-3.639-.876-4.741-1.611a13.138 13.138 0 0 0-7.31-2.214c-1.788 0-3.56.371-5.195 1.07v-26.95l.798-.618a7.219 7.219 0 0 1 4.397-1.503c1.422 0 2.799.417 3.982 1.206 2.57 1.713 5.36 2.619 8.069 2.619H45V40zm-8-11h2v2h-7v-2h2v-6h-2v-2h5v8zm-4-12a2 2 0 1 1 3.999-.001A2 2 0 0 1 33 17z"})))}))};o.displayName="IconConsultInstructionsForUse",o.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};t.default=o},38008:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(a(96540)),n=r(a(25365));function r(e){return e&&e.__esModule?e:{default:e}}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},u.apply(this,arguments)}var f=function(e){var t=u({},e);return l.default.createElement(n.default,t,l.default.createElement("path",{d:"M39.8 12H35V1.7c0-.9-.8-1.7-1.7-1.7H8.7C7.8 0 7 .8 7 1.7V12H2.2C1 12 0 13 0 14.2v19.7C.1 35.1 1 36 2.2 36H7v10.3c0 .9.8 1.7 1.7 1.7h24.6c.9 0 1.7-.8 1.7-1.7V36h4.8c1.2 0 2.2-1 2.2-2.2V14.2c0-1.2-1-2.2-2.2-2.2zM10 3h22v9H10V3zm22 42H10V29.9h22V45zm3.2-24C34 21 33 20 33 18.8s1-2.2 2.2-2.2 2.2 1 2.2 2.2c0 1.2-1 2.2-2.2 2.2z"}))};f.displayName="IconPrinter",f.defaultProps={viewBox:"0 0 42 48",xmlns:"http://www.w3.org/2000/svg"};t.default=f}}]);