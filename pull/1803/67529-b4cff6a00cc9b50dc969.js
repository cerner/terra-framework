"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[67529],{51864:function(e,t,n){var l=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(38416)),i=l(n(56690)),a=l(n(89728)),o=l(n(66115)),s=l(n(61655)),u=l(n(94993)),c=l(n(73808)),d=l(n(67294)),f=l(n(45697)),m=l(n(81061)),b=l(n(10027)),p=n(56019),h=l(n(47166)),g=l(n(32625));function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,l=(0,c.default)(e);if(t){var r=(0,c.default)(this).constructor;n=Reflect.construct(l,arguments,r)}else n=l.apply(this,arguments);return(0,u.default)(this,n)}}var _=h.default.bind(g.default),v=Object.keys(p.availableDisclosureHeights),O=Object.keys(p.availableDisclosureWidths),k=function(e){(0,s.default)(n,e);var t=y(n);function n(e){var l;return(0,i.default)(this,n),(l=t.call(this,e)).disclose=l.disclose.bind((0,o.default)(l)),l.dismiss=l.dismiss.bind((0,o.default)(l)),l.closeDisclosure=l.closeDisclosure.bind((0,o.default)(l)),l.goBack=l.goBack.bind((0,o.default)(l)),l.maximize=l.maximize.bind((0,o.default)(l)),l.minimize=l.minimize.bind((0,o.default)(l)),l.generateOptions=l.generateOptions.bind((0,o.default)(l)),l.handleSelectChange=l.handleSelectChange.bind((0,o.default)(l)),l.renderFormButton=l.renderFormButton.bind((0,o.default)(l)),l.renderForm=l.renderForm.bind((0,o.default)(l)),l.getId=l.getId.bind((0,o.default)(l)),l.state={id:"disclosureDimensions",disclosureHeight:v[0],disclosureWidth:O[0]},l}return(0,a.default)(n,[{key:"handleSelectChange",value:function(e){this.setState((0,r.default)({},e.target.name,e.target.value))}},{key:"getId",value:function(e){return"".concat(this.state.id,"-").concat(e,"-").concat(this.props.nestedIndex)}},{key:"generateOptions",value:function(e,t){var n=this;return e.map((function(e,l){var r=l;return d.default.createElement("option",{id:"".concat(t,"-").concat(e,"-").concat(n.props.nestedIndex),key:r,value:e},e)}))}},{key:"disclose",value:function(e,t){var n=this,l=this.props,r=l.disclosureType,i=l.nestedIndex,a=l.renderHeaderAdapter,o=i+1;return function(){n.props.disclosureManager.disclose({preferredType:r,size:e,dimensions:t,content:{key:"DemoContainer-".concat(o),component:d.default.createElement(C,{identifier:"DemoContainer-".concat(o),nestedIndex:o,renderHeaderAdapter:a})}})}}},{key:"dismiss",value:function(){this.props.disclosureManager.dismiss()}},{key:"closeDisclosure",value:function(){this.props.disclosureManager.closeDisclosure()}},{key:"goBack",value:function(){this.props.disclosureManager.goBack()}},{key:"maximize",value:function(){this.props.disclosureManager.maximize()}},{key:"minimize",value:function(){this.props.disclosureManager.minimize()}},{key:"renderFormButton",value:function(){var e="Disclose (".concat(this.state.disclosureHeight,") x (").concat(this.state.disclosureWidth,")");return d.default.createElement("button",{type:"button",id:"disclose-dimension-".concat(this.props.nestedIndex),onClick:this.disclose(void 0,{height:this.state.disclosureHeight,width:this.state.disclosureWidth})},e)}},{key:"renderForm",value:function(){return d.default.createElement("form",null,d.default.createElement("label",{htmlFor:this.getId("height")},"Pop Content Height"),d.default.createElement("select",{id:this.getId("height"),name:"disclosureHeight",value:this.state.disclosureHeight,onChange:this.handleSelectChange},this.generateOptions(v,"height")),d.default.createElement("br",null),d.default.createElement("br",null),d.default.createElement("label",{htmlFor:this.getId("width")},"Pop Content Width"),d.default.createElement("select",{id:this.getId("width"),name:"disclosureWidth",value:this.state.disclosureWidth,onChange:this.handleSelectChange},this.generateOptions(O,"width")),d.default.createElement("br",null),d.default.createElement("br",null))}},{key:"render",value:function(){var e=this.props,t=e.disclosureManager,n=e.identifier,l=e.renderHeaderAdapter;return d.default.createElement(b.default,{id:n,className:"nested-component",fill:!0,header:d.default.createElement("h2",{className:_("header")},"Content Component")},l?d.default.createElement(p.DisclosureManagerHeaderAdapter,{title:"Disclosure - ".concat(n),collapsibleMenuView:d.default.createElement(m.default,null,d.default.createElement(m.default.Item,{text:"Header Button 1",key:"button_1"}),d.default.createElement(m.default.Item,{text:"Header Button 2",key:"button_2"}))}):void 0,d.default.createElement("p",null,"id:"," ",n),d.default.createElement("button",{type:"button",className:"disclose",onClick:this.disclose()},"Disclose"),d.default.createElement("button",{type:"button",className:"disclose-tiny",onClick:this.disclose("tiny")},"Disclose Tiny"),d.default.createElement("button",{type:"button",className:"disclose-small",onClick:this.disclose("small")},"Disclose Small"),d.default.createElement("button",{type:"button",className:"disclose-medium",onClick:this.disclose("medium")},"Disclose Medium"),d.default.createElement("button",{type:"button",className:"disclose-large",onClick:this.disclose("large")},"Disclose Large"),d.default.createElement("button",{type:"button",className:"disclose-huge",onClick:this.disclose("huge")},"Disclose Huge"),d.default.createElement("button",{type:"button",className:"disclose-fullscreen",onClick:this.disclose("fullscreen")},"Disclose Fullscreen"),d.default.createElement("div",{className:_("content-form")},this.renderForm(),this.renderFormButton()),t&&t.dismiss?d.default.createElement("button",{type:"button",className:"dismiss",onClick:this.dismiss},"Dismiss"):null,t&&t.closeDisclosure?d.default.createElement("button",{type:"button",className:"close-disclosure",onClick:this.closeDisclosure},"Close Disclosure"):null,t&&t.goBack?d.default.createElement("button",{type:"button",className:"go-back",onClick:this.goBack},"Go Back"):null,t&&t.maximize?d.default.createElement("button",{type:"button",className:"maximize",onClick:this.maximize},"Maximize"):null,t&&t.minimize?d.default.createElement("button",{type:"button",className:"minimize",onClick:this.minimize},"Minimize"):null)}}]),n}(d.default.Component);k.propTypes={disclosureManager:p.disclosureManagerShape,identifier:f.default.string,disclosureType:f.default.string,nestedIndex:f.default.number,renderHeaderAdapter:f.default.bool},k.defaultProps={nestedIndex:0};var C=(0,p.withDisclosureManager)(k),E=C;t.default=E},66633:function(e,t,n){n.r(t),t.default={arrange:"Arrange-module__arrange___hY0Ml",fill:"Arrange-module__fill___m88eq",fit:"Arrange-module__fit___tv8j-",center:"Arrange-module__center___9qfhG",bottom:"Arrange-module__bottom___8beod",stretch:"Arrange-module__stretch___eQF-k",default:"Arrange-module__default___z+O29"}},12472:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Checkbox-module__clinical-lowlight-theme___J4i3C","orion-fusion-theme":"Checkbox-module__orion-fusion-theme___ZTiEC",checkbox:"Checkbox-module__checkbox___pLlkO",label:"Checkbox-module__label___96oeA","is-mobile":"Checkbox-module__is-mobile___HQ1Ax","native-input":"Checkbox-module__native-input___9pZ94","label-text":"Checkbox-module__label-text___NBjgG","is-hidden":"Checkbox-module__is-hidden___q9DyW","is-disabled":"Checkbox-module__is-disabled___pimXj","is-inline":"Checkbox-module__is-inline___8-h-C"}},32625:function(e,t,n){n.r(t),t.default={header:"DisclosureComponentCommon-test-module__header___zA+M6","content-form":"DisclosureComponentCommon-test-module__content-form___ZH5Rj","select-field":"DisclosureComponentCommon-test-module__select-field___eTUIx"}},1422:function(e,t,n){n.r(t),t.default={"content-wrapper":"ModalManagerCommon-test-module__content-wrapper___fnO38","disclosure-accessory":"ModalManagerCommon-test-module__disclosure-accessory___lBCWz","disclosure-container":"ModalManagerCommon-test-module__disclosure-container___GqXUT"}},78490:function(e,t,n){function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.AlignmentTypes=void 0;var r=u(n(67294)),i=u(n(45697)),a=u(n(47166)),o=u(n(66633)),s=["fitStart","fill","fitEnd","align","alignFitStart","alignFill","alignFitEnd","fitStartAttributes","fillAttributes","fitEndAttributes"];function u(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},c.apply(this,arguments)}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==l(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===l(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}t.AlignmentTypes={CENTER:"center",BOTTOM:"bottom",STRETCH:"stretch"};var p=a.default.bind(o.default),h={fitStart:i.default.element,fill:i.default.element.isRequired,fitEnd:i.default.element,align:i.default.oneOf(["center","bottom","stretch"]),alignFitStart:i.default.oneOf(["center","bottom","stretch"]),alignFitEnd:i.default.oneOf(["center","bottom","stretch"]),alignFill:i.default.oneOf(["center","bottom","stretch"]),fitStartAttributes:i.default.object,fillAttributes:i.default.object,fitEndAttributes:i.default.object},g=function(e){var t=e.fitStart,n=e.fill,l=e.fitEnd,i=e.align,a=e.alignFitStart,o=e.alignFill,u=e.alignFitEnd,d=e.fitStartAttributes,m=e.fillAttributes,h=e.fitEndAttributes,g=b(e,s),y=f({},d),_=f({},m),v=f({},h);return r.default.createElement("span",c({},g,{className:p("arrange",g.className)}),r.default.createElement("span",c({},y,{className:p("fit",i||a,y.className,"fit-block")}),t),r.default.createElement("span",c({},_,{className:p("fill",i||o,_.className,"fill-block")}),n),r.default.createElement("span",c({},v,{className:p("fit",i||u,v.className)}),l))};g.propTypes=h;var y=g;t.default=y},15185:function(e,t,n){function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=f(n(67294)),i=f(n(45697)),a=f(n(94184)),o=f(n(47166)),s=f(n(47341)),u=f(n(12472)),c=f(n(84538)),d=["checked","defaultChecked","inputAttrs","id","disabled","isInline","isLabelHidden","labelText","labelTextAttrs","name","onBlur","onChange","onFocus","value"];function f(e){return e&&e.__esModule?e:{default:e}}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},m.apply(this,arguments)}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function p(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==l(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===l(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var g=o.default.bind(u.default),y={checked:i.default.bool,defaultChecked:i.default.bool,id:i.default.string,inputAttrs:i.default.object,disabled:i.default.bool,isInline:i.default.bool,isLabelHidden:i.default.bool,labelText:i.default.string.isRequired,labelTextAttrs:i.default.object,name:i.default.string,onBlur:i.default.func,onChange:i.default.func,onFocus:i.default.func,value:i.default.string},_={checked:void 0,defaultChecked:void 0,id:void 0,inputAttrs:{},disabled:!1,isInline:!1,isLabelHidden:!1,labelTextAttrs:{},name:null,onBlur:void 0,onChange:void 0,onFocus:void 0,value:void 0},v=function(e){var t=e.checked,n=e.defaultChecked,l=e.inputAttrs,i=e.id,o=e.disabled,u=e.isInline,f=e.isLabelHidden,y=e.labelText,_=e.labelTextAttrs,v=e.name,O=e.onBlur,k=e.onChange,C=e.onFocus,E=e.value,j=h(e,d),x=r.default.useContext(s.default),w=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},l);void 0!==t?w.checked=t:w.defaultChecked=n;var S=(0,a.default)(g("checkbox",{"is-inline":u},x.className),j.className),D=g(["label",{"is-disabled":o},{"is-mobile":c.default.isConsideredMobileDevice()},_.className]),P=g(["native-input",l.className]),M=g(["label-text",{"is-hidden":f},{"is-mobile":c.default.isConsideredMobileDevice()}]),N=null;return f?(w["aria-label"]=y,N=r.default.createElement("span",m({},_,{className:M}))):N=r.default.createElement("span",m({},_,{className:M}),y),r.default.createElement("div",m({},j,{className:S}),r.default.createElement("label",{htmlFor:i,className:D},r.default.createElement("input",m({},w,{type:"checkbox",id:i,disabled:o,name:v,value:E,onChange:k,onFocus:C,onBlur:O,className:P})),N))};v.propTypes=y,v.defaultProps=_,v.isCheckbox=!0;var O=v;t.default=O},84538:function(e){var t={isConsideredMobileDevice:function(){return window.matchMedia("(max-width: 1024px)").matches&&("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0)}};e.exports=t},46379:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(67294)),r=a(n(99139)),i=n(25387);function a(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},o.apply(this,arguments)}var s=function(e){var t=o({},e);return l.default.createElement(i.FormattedMessage,{id:"Terra.icon.IconConsultInstructionsForUse.title"},(function(e){return l.default.createElement("span",{"aria-label":e,title:e},l.default.createElement(r.default,t,l.default.createElement("path",{d:"M42.746 9c-2.28 0-4.508-.85-6.405-2.115a10.165 10.165 0 0 0-5.646-1.71c-2.205 0-4.404.714-6.233 2.131L24 7.663l-.462-.357a10.17 10.17 0 0 0-6.233-2.131c-1.964 0-3.932.567-5.646 1.71C9.762 8.15 7.534 9 5.254 9H0v34h5.254c2.28 0 4.508-.85 6.405-2.115a10.163 10.163 0 0 1 5.646-1.71c1.826 0 3.646.498 5.257 1.471.142.548.626.916 1.159.916h.556c.534 0 1.017-.368 1.159-.916a10.172 10.172 0 0 1 5.257-1.471c1.964 0 3.932.567 5.646 1.71C38.238 42.15 40.466 43 42.746 43H48V9h-5.254zM9.995 38.389C8.893 39.124 7.175 40 5.254 40H3V12h2.254c2.709 0 5.5-.906 8.069-2.619a7.157 7.157 0 0 1 3.983-1.206c1.583 0 3.144.534 4.396 1.503l.798.618v26.95a13.237 13.237 0 0 0-5.195-1.07 13.13 13.13 0 0 0-7.31 2.213zM45 40h-2.254c-1.921 0-3.639-.876-4.741-1.611a13.138 13.138 0 0 0-7.31-2.214c-1.788 0-3.56.371-5.195 1.07v-26.95l.798-.618a7.219 7.219 0 0 1 4.397-1.503c1.422 0 2.799.417 3.982 1.206 2.57 1.713 5.36 2.619 8.069 2.619H45V40zm-8-11h2v2h-7v-2h2v-6h-2v-2h5v8zm-4-12a2 2 0 1 1 3.999-.001A2 2 0 0 1 33 17z"})))}))};s.displayName="IconConsultInstructionsForUse",s.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};var u=s;t.default=u}}]);