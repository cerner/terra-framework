"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[34167],{64475:function(e,t,n){var l=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(38416)),i=l(n(56690)),o=l(n(89728)),a=l(n(66115)),u=l(n(61655)),s=l(n(94993)),c=l(n(73808)),d=l(n(67294)),f=l(n(45697)),m=l(n(57927)),b=l(n(10027)),p=n(56019),h=l(n(47166)),g=l(n(32625));function _(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,l=(0,c.default)(e);if(t){var r=(0,c.default)(this).constructor;n=Reflect.construct(l,arguments,r)}else n=l.apply(this,arguments);return(0,s.default)(this,n)}}var y=h.default.bind(g.default),v=Object.keys(p.availableDisclosureHeights),O=Object.keys(p.availableDisclosureWidths),k=function(e){(0,u.default)(n,e);var t=_(n);function n(e){var l;return(0,i.default)(this,n),(l=t.call(this,e)).disclose=l.disclose.bind((0,a.default)(l)),l.dismiss=l.dismiss.bind((0,a.default)(l)),l.closeDisclosure=l.closeDisclosure.bind((0,a.default)(l)),l.goBack=l.goBack.bind((0,a.default)(l)),l.maximize=l.maximize.bind((0,a.default)(l)),l.minimize=l.minimize.bind((0,a.default)(l)),l.generateOptions=l.generateOptions.bind((0,a.default)(l)),l.handleSelectChange=l.handleSelectChange.bind((0,a.default)(l)),l.renderFormButton=l.renderFormButton.bind((0,a.default)(l)),l.renderForm=l.renderForm.bind((0,a.default)(l)),l.getId=l.getId.bind((0,a.default)(l)),l.state={id:"disclosureDimensions",disclosureHeight:v[0],disclosureWidth:O[0]},l}return(0,o.default)(n,[{key:"handleSelectChange",value:function(e){this.setState((0,r.default)({},e.target.name,e.target.value))}},{key:"getId",value:function(e){return"".concat(this.state.id,"-").concat(e,"-").concat(this.props.nestedIndex)}},{key:"generateOptions",value:function(e,t){var n=this;return e.map((function(e,l){var r=l;return d.default.createElement("option",{id:"".concat(t,"-").concat(e,"-").concat(n.props.nestedIndex),key:r,value:e},e)}))}},{key:"disclose",value:function(e,t){var n=this,l=this.props,r=l.disclosureType,i=l.nestedIndex,o=l.renderHeaderAdapter,a=i+1;return function(){n.props.disclosureManager.disclose({preferredType:r,size:e,dimensions:t,content:{key:"DemoContainer-".concat(a),component:d.default.createElement(C,{identifier:"DemoContainer-".concat(a),nestedIndex:a,renderHeaderAdapter:o})}})}}},{key:"dismiss",value:function(){this.props.disclosureManager.dismiss()}},{key:"closeDisclosure",value:function(){this.props.disclosureManager.closeDisclosure()}},{key:"goBack",value:function(){this.props.disclosureManager.goBack()}},{key:"maximize",value:function(){this.props.disclosureManager.maximize()}},{key:"minimize",value:function(){this.props.disclosureManager.minimize()}},{key:"renderFormButton",value:function(){var e="Disclose (".concat(this.state.disclosureHeight,") x (").concat(this.state.disclosureWidth,")");return d.default.createElement("button",{type:"button",id:"disclose-dimension-".concat(this.props.nestedIndex),onClick:this.disclose(void 0,{height:this.state.disclosureHeight,width:this.state.disclosureWidth})},e)}},{key:"renderForm",value:function(){return d.default.createElement("form",null,d.default.createElement("label",{htmlFor:this.getId("height")},"Pop Content Height"),d.default.createElement("select",{id:this.getId("height"),name:"disclosureHeight",value:this.state.disclosureHeight,onChange:this.handleSelectChange},this.generateOptions(v,"height")),d.default.createElement("br",null),d.default.createElement("br",null),d.default.createElement("label",{htmlFor:this.getId("width")},"Pop Content Width"),d.default.createElement("select",{id:this.getId("width"),name:"disclosureWidth",value:this.state.disclosureWidth,onChange:this.handleSelectChange},this.generateOptions(O,"width")),d.default.createElement("br",null),d.default.createElement("br",null))}},{key:"render",value:function(){var e=this.props,t=e.disclosureManager,n=e.identifier,l=e.renderHeaderAdapter;return d.default.createElement(b.default,{id:n,className:"nested-component",fill:!0,header:d.default.createElement("h2",{className:y("header")},"Content Component")},l?d.default.createElement(p.DisclosureManagerHeaderAdapter,{title:"Disclosure - ".concat(n),collapsibleMenuView:d.default.createElement(m.default,null,d.default.createElement(m.default.Item,{text:"Header Button 1",key:"button_1"}),d.default.createElement(m.default.Item,{text:"Header Button 2",key:"button_2"}))}):void 0,d.default.createElement("p",null,"id:"," ",n),d.default.createElement("button",{type:"button",className:"disclose-fusion-small",onClick:this.disclose("fusion-small")},"Disclose Small (Fusion)"),d.default.createElement("button",{type:"button",className:"disclose-fusion-medium",onClick:this.disclose("fusion-medium")},"Disclose Medium (Fusion)"),d.default.createElement("button",{type:"button",className:"disclose-fusion-large",onClick:this.disclose("fusion-large")},"Disclose Large (Fusion)"),d.default.createElement("div",{className:y("content-form")},this.renderForm(),this.renderFormButton()),t&&t.dismiss?d.default.createElement("button",{type:"button",className:"dismiss",onClick:this.dismiss},"Dismiss"):null,t&&t.closeDisclosure?d.default.createElement("button",{type:"button",className:"close-disclosure",onClick:this.closeDisclosure},"Close Disclosure"):null,t&&t.goBack?d.default.createElement("button",{type:"button",className:"go-back",onClick:this.goBack},"Go Back"):null,t&&t.maximize?d.default.createElement("button",{type:"button",className:"maximize",onClick:this.maximize},"Maximize"):null,t&&t.minimize?d.default.createElement("button",{type:"button",className:"minimize",onClick:this.minimize},"Minimize"):null)}}]),n}(d.default.Component);k.propTypes={disclosureManager:p.disclosureManagerShape,identifier:f.default.string,disclosureType:f.default.string,nestedIndex:f.default.number,renderHeaderAdapter:f.default.bool},k.defaultProps={nestedIndex:0};var C=(0,p.withDisclosureManager)(k);t.default=C},20902:function(e,t,n){var l=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(67294)),i=l(n(47166)),o=l(n(22266)),a=l(n(64475)),u=l(n(1422)),s=i.default.bind(u.default);t.default=function(){return r.default.createElement("div",{role:"main",className:s("content-wrapper")},r.default.createElement(o.default,null,r.default.createElement(a.default,{identifier:"root-component",disclosureType:"modal"})))}},66633:function(e,t,n){n.r(t),t.default={arrange:"Arrange-module__arrange___hY0Ml",fill:"Arrange-module__fill___m88eq",fit:"Arrange-module__fit___tv8j-",center:"Arrange-module__center___9qfhG",bottom:"Arrange-module__bottom___8beod",stretch:"Arrange-module__stretch___eQF-k",default:"Arrange-module__default___z+O29"}},12472:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Checkbox-module__clinical-lowlight-theme___J4i3C","orion-fusion-theme":"Checkbox-module__orion-fusion-theme___ZTiEC",checkbox:"Checkbox-module__checkbox___pLlkO",label:"Checkbox-module__label___96oeA","is-mobile":"Checkbox-module__is-mobile___HQ1Ax","native-input":"Checkbox-module__native-input___9pZ94","label-text":"Checkbox-module__label-text___NBjgG","is-hidden":"Checkbox-module__is-hidden___q9DyW","is-disabled":"Checkbox-module__is-disabled___pimXj","is-inline":"Checkbox-module__is-inline___8-h-C"}},32625:function(e,t,n){n.r(t),t.default={header:"DisclosureComponentCommon-test-module__header___zA+M6","content-form":"DisclosureComponentCommon-test-module__content-form___ZH5Rj","select-field":"DisclosureComponentCommon-test-module__select-field___eTUIx"}},1422:function(e,t,n){n.r(t),t.default={"content-wrapper":"ModalManagerCommon-test-module__content-wrapper___fnO38","disclosure-accessory":"ModalManagerCommon-test-module__disclosure-accessory___lBCWz","disclosure-container":"ModalManagerCommon-test-module__disclosure-container___GqXUT"}},78490:function(e,t,n){function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.AlignmentTypes=void 0;var r=s(n(67294)),i=s(n(45697)),o=s(n(47166)),a=s(n(66633)),u=["fitStart","fill","fitEnd","align","alignFitStart","alignFill","alignFitEnd","fitStartAttributes","fillAttributes","fitEndAttributes"];function s(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},c.apply(this,arguments)}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==l(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===l(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}t.AlignmentTypes={CENTER:"center",BOTTOM:"bottom",STRETCH:"stretch"};var p=o.default.bind(a.default),h={fitStart:i.default.element,fill:i.default.element.isRequired,fitEnd:i.default.element,align:i.default.oneOf(["center","bottom","stretch"]),alignFitStart:i.default.oneOf(["center","bottom","stretch"]),alignFitEnd:i.default.oneOf(["center","bottom","stretch"]),alignFill:i.default.oneOf(["center","bottom","stretch"]),fitStartAttributes:i.default.object,fillAttributes:i.default.object,fitEndAttributes:i.default.object},g=function(e){var t=e.fitStart,n=e.fill,l=e.fitEnd,i=e.align,o=e.alignFitStart,a=e.alignFill,s=e.alignFitEnd,d=e.fitStartAttributes,m=e.fillAttributes,h=e.fitEndAttributes,g=b(e,u),_=f({},d),y=f({},m),v=f({},h);return r.default.createElement("span",c({},g,{className:p("arrange",g.className)}),r.default.createElement("span",c({},_,{className:p("fit",i||o,_.className,"fit-block")}),t),r.default.createElement("span",c({},y,{className:p("fill",i||a,y.className,"fill-block")}),n),r.default.createElement("span",c({},v,{className:p("fit",i||s,v.className)}),l))};g.propTypes=h;t.default=g},15185:function(e,t,n){function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=f(n(67294)),i=f(n(45697)),o=f(n(94184)),a=f(n(47166)),u=f(n(47341)),s=f(n(12472)),c=f(n(84538)),d=["checked","defaultChecked","inputAttrs","id","disabled","isInline","isLabelHidden","labelText","labelTextAttrs","name","onBlur","onChange","onFocus","value"];function f(e){return e&&e.__esModule?e:{default:e}}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},m.apply(this,arguments)}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function p(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==l(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===l(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var g=a.default.bind(s.default),_={checked:i.default.bool,defaultChecked:i.default.bool,id:i.default.string,inputAttrs:i.default.object,disabled:i.default.bool,isInline:i.default.bool,isLabelHidden:i.default.bool,labelText:i.default.string.isRequired,labelTextAttrs:i.default.object,name:i.default.string,onBlur:i.default.func,onChange:i.default.func,onFocus:i.default.func,value:i.default.string},y={checked:void 0,defaultChecked:void 0,id:void 0,inputAttrs:{},disabled:!1,isInline:!1,isLabelHidden:!1,labelTextAttrs:{},name:null,onBlur:void 0,onChange:void 0,onFocus:void 0,value:void 0},v=function(e){var t=e.checked,n=e.defaultChecked,l=e.inputAttrs,i=e.id,a=e.disabled,s=e.isInline,f=e.isLabelHidden,_=e.labelText,y=e.labelTextAttrs,v=e.name,O=e.onBlur,k=e.onChange,C=e.onFocus,E=e.value,j=h(e,d),x=r.default.useContext(u.default),w=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},l);void 0!==t?w.checked=t:w.defaultChecked=n;var S=(0,o.default)(g("checkbox",{"is-inline":s},x.className),j.className),P=g(["label",{"is-disabled":a},{"is-mobile":c.default.isConsideredMobileDevice()},y.className]),D=g(["native-input",l.className]),M=g(["label-text",{"is-hidden":f},{"is-mobile":c.default.isConsideredMobileDevice()}]),A=null;return f?(w["aria-label"]=_,A=r.default.createElement("span",m({},y,{className:M}))):A=r.default.createElement("span",m({},y,{className:M}),_),r.default.createElement("div",m({},j,{className:S}),r.default.createElement("label",{htmlFor:i,className:P},r.default.createElement("input",m({},w,{type:"checkbox",id:i,disabled:a,name:v,value:E,onChange:k,onFocus:C,onBlur:O,className:D})),A))};v.propTypes=_,v.defaultProps=y,v.isCheckbox=!0;var O=v;t.default=O},84538:function(e){var t={isConsideredMobileDevice:function(){return window.matchMedia("(max-width: 1024px)").matches&&("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0)}};e.exports=t}}]);