/*! For license information please see 27252-b6af40d86d307c77cfae.js.LICENSE.txt */
(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[27252],{73887:function(e,t,n){"use strict";var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(38416)),i=a(n(56690)),s=a(n(89728)),l=a(n(66115)),o=a(n(61655)),u=a(n(94993)),c=a(n(73808)),d=a(n(67294)),f=a(n(45697)),p=a(n(81061)),m=a(n(10027)),h=n(56019),b=a(n(47166)),y=a(n(5768));function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,c.default)(e);if(t){var r=(0,c.default)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return(0,u.default)(this,n)}}var v=b.default.bind(y.default),k=Object.keys(h.availableDisclosureHeights),_=Object.keys(h.availableDisclosureWidths),E=function(e){(0,o.default)(n,e);var t=g(n);function n(e){var a;return(0,i.default)(this,n),(a=t.call(this,e)).disclose=a.disclose.bind((0,l.default)(a)),a.dismiss=a.dismiss.bind((0,l.default)(a)),a.closeDisclosure=a.closeDisclosure.bind((0,l.default)(a)),a.goBack=a.goBack.bind((0,l.default)(a)),a.maximize=a.maximize.bind((0,l.default)(a)),a.minimize=a.minimize.bind((0,l.default)(a)),a.generateOptions=a.generateOptions.bind((0,l.default)(a)),a.handleSelectChange=a.handleSelectChange.bind((0,l.default)(a)),a.renderFormButton=a.renderFormButton.bind((0,l.default)(a)),a.renderForm=a.renderForm.bind((0,l.default)(a)),a.getId=a.getId.bind((0,l.default)(a)),a.state={id:"disclosureDimensions",disclosureHeight:k[0],disclosureWidth:_[0]},a}return(0,s.default)(n,[{key:"handleSelectChange",value:function(e){this.setState((0,r.default)({},e.target.name,e.target.value))}},{key:"getId",value:function(e){return"".concat(this.state.id,"-").concat(e,"-").concat(this.props.nestedIndex)}},{key:"generateOptions",value:function(e,t){var n=this;return e.map((function(e,a){var r=a;return d.default.createElement("option",{id:"".concat(t,"-").concat(e,"-").concat(n.props.nestedIndex),key:r,value:e},e)}))}},{key:"disclose",value:function(e,t){var n=this,a=this.props,r=a.disclosureType,i=a.nestedIndex,s=a.renderHeaderAdapter,l=i+1;return function(){n.props.disclosureManager.disclose({preferredType:r,size:e,dimensions:t,content:{key:"DemoContainer-".concat(l),component:d.default.createElement(C,{identifier:"DemoContainer-".concat(l),nestedIndex:l,disclosureType:r,renderHeaderAdapter:s})}})}}},{key:"dismiss",value:function(){this.props.disclosureManager.dismiss()}},{key:"closeDisclosure",value:function(){this.props.disclosureManager.closeDisclosure()}},{key:"goBack",value:function(){this.props.disclosureManager.goBack()}},{key:"maximize",value:function(){this.props.disclosureManager.maximize()}},{key:"minimize",value:function(){this.props.disclosureManager.minimize()}},{key:"renderFormButton",value:function(){var e="Disclose (".concat(this.state.disclosureHeight,") x (").concat(this.state.disclosureWidth,")");return d.default.createElement("button",{type:"button",id:"disclose-dimension-".concat(this.props.nestedIndex),onClick:this.disclose(void 0,{height:this.state.disclosureHeight,width:this.state.disclosureWidth})},e)}},{key:"renderForm",value:function(){return d.default.createElement("form",null,d.default.createElement("label",{htmlFor:this.getId("height")},"Pop Content Height"),d.default.createElement("select",{id:this.getId("height"),name:"disclosureHeight",value:this.state.disclosureHeight,onChange:this.handleSelectChange},this.generateOptions(k,"height")),d.default.createElement("br",null),d.default.createElement("br",null),d.default.createElement("label",{htmlFor:this.getId("width")},"Pop Content Width"),d.default.createElement("select",{id:this.getId("width"),name:"disclosureWidth",value:this.state.disclosureWidth,onChange:this.handleSelectChange},this.generateOptions(_,"width")),d.default.createElement("br",null),d.default.createElement("br",null))}},{key:"render",value:function(){var e=this.props,t=e.disclosureManager,n=e.identifier,a=e.renderHeaderAdapter;return d.default.createElement(m.default,{id:n,className:"nested-component",fill:!0,header:d.default.createElement("h2",{className:v("content-wrapper")},"Content Component")},a?d.default.createElement(h.DisclosureManagerHeaderAdapter,{title:"Disclosure - ".concat(n),collapsibleMenuView:d.default.createElement(p.default,null,d.default.createElement(p.default.Item,{text:"Header Button 1",key:"button_1"}),d.default.createElement(p.default.Item,{text:"Header Button 2",key:"button_2"}))}):void 0,d.default.createElement("p",null,"id:"," ",n),d.default.createElement("button",{type:"button",className:"disclose",onClick:this.disclose()},"Disclose"),d.default.createElement("button",{type:"button",className:"disclose-tiny",onClick:this.disclose("tiny")},"Disclose Tiny"),d.default.createElement("button",{type:"button",className:"disclose-small",onClick:this.disclose("small")},"Disclose Small"),d.default.createElement("button",{type:"button",className:"disclose-medium",onClick:this.disclose("medium")},"Disclose Medium"),d.default.createElement("button",{type:"button",className:"disclose-large",onClick:this.disclose("large")},"Disclose Large"),d.default.createElement("button",{type:"button",className:"disclose-huge",onClick:this.disclose("huge")},"Disclose Huge"),d.default.createElement("button",{type:"button",className:"disclose-fullscreen",onClick:this.disclose("fullscreen")},"Disclose Fullscreen"),d.default.createElement("div",{className:v("form-wrapper")},this.renderForm(),this.renderFormButton()),t&&t.dismiss?d.default.createElement("button",{type:"button",className:"dismiss",onClick:this.dismiss},"Dismiss"):null,t&&t.closeDisclosure?d.default.createElement("button",{type:"button",className:"close-disclosure",onClick:this.closeDisclosure},"Close Disclosure"):null,t&&t.goBack?d.default.createElement("button",{type:"button",className:"go-back",onClick:this.goBack},"Go Back"):null,t&&t.maximize?d.default.createElement("button",{type:"button",className:"maximize",onClick:this.maximize},"Maximize"):null,t&&t.minimize?d.default.createElement("button",{type:"button",className:"minimize",onClick:this.minimize},"Minimize"):null)}}]),n}(d.default.Component);E.propTypes={disclosureManager:h.disclosureManagerShape,identifier:f.default.string,disclosureType:f.default.string,nestedIndex:f.default.number,renderHeaderAdapter:f.default.bool},E.defaultProps={nestedIndex:0};var C=(0,h.withDisclosureManager)(E),x=C;t.default=x},84703:function(e,t,n){"use strict";var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(67294)),i=a(n(47166)),s=a(n(34653)),l=a(n(73887)),o=a(n(74787)),u=i.default.bind(o.default),c=function(e){return r.default.createElement("div",{"data-disclosure-container":!0,className:u("disclosure-container")},"I am wrapping the content with a purple background!",e)},d=function(){return r.default.createElement("div",{role:"main",className:u("content-wrapper")},r.default.createElement(s.default,{withDisclosureContainer:c},r.default.createElement(l.default,{identifier:"root-component",disclosureType:"panel",renderHeaderAdapter:!0})))};t.default=d},5768:function(e,t,n){"use strict";n.r(t),t.default={"content-wrapper":"DisclosureComponent-module__content-wrapper___bvpSZ","form-wrapper":"DisclosureComponent-module__form-wrapper___96jEd"}},74787:function(e,t,n){"use strict";n.r(t),t.default={"content-wrapper":"SlidePanelManagerDefault-test-module__content-wrapper___6BZ9g","disclosure-accessory":"SlidePanelManagerDefault-test-module__disclosure-accessory___OZMgv","disclosure-container":"SlidePanelManagerDefault-test-module__disclosure-container___-QHV0"}},75346:function(e,t,n){"use strict";n.r(t),t.default={"visually-hidden-text":"VisuallyHiddenText-module__visually-hidden-text___lA9vx"}},23870:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(67294)),r=o(n(65218)),i=o(n(37968)),s=o(n(75346)),l=["refCallback","text"];function o(e){return e&&e.__esModule?e:{default:e}}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},u.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=i.default.bind(s.default),f={refCallback:r.default.func,text:r.default.string},p={text:void 0,refCallback:void 0},m=function(e){var t=e.refCallback,n=e.text,r=c(e,l),i=d(["visually-hidden-text",r.className]);return a.default.createElement("span",u({ref:t},r,{className:i}),n)};m.propTypes=f,m.defaultProps=p;var h=m;t.default=h},37968:function(e,t){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(this&&this[n]||n);else if(Array.isArray(n))e.push(r.apply(this,n));else if("object"===i){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var s in n)a.call(n,s)&&n[s]&&e.push(this&&this[s]||s)}}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},72399:function(e,t,n){"use strict";var a=n(672);function r(){}function i(){}i.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,i,s){if(s!==a){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:r};return n.PropTypes=n,n}},65218:function(e,t,n){e.exports=n(72399)()},672:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);