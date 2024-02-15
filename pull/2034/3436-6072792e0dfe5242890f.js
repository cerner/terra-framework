"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[3436],{3476:function(e,t,n){var l=n(22411);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=l(n(2676)),r=l(n(94064)),o=l(n(66024)),a=l(n(96284)),s=l(n(63532)),u=l(n(71559)),c=l(n(54216)),d=l(n(11504)),f=l(n(3268)),m=l(n(80328)),b=l(n(87468)),p=n(88940),h=l(n(74824)),g=l(n(13504));function _(e,t,n){return t=(0,s.default)(t),(0,a.default)(e,y()?Reflect.construct(t,n||[],(0,s.default)(e).constructor):t.apply(e,n))}function y(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(y=function(){return!!e})()}var v=h.default.bind(g.default),O=Object.keys(p.availableDisclosureHeights),k=Object.keys(p.availableDisclosureWidths),C=function(e){function t(e){var n;return(0,r.default)(this,t),(n=_(this,t,[e])).disclose=n.disclose.bind((0,u.default)(n)),n.dismiss=n.dismiss.bind((0,u.default)(n)),n.closeDisclosure=n.closeDisclosure.bind((0,u.default)(n)),n.goBack=n.goBack.bind((0,u.default)(n)),n.maximize=n.maximize.bind((0,u.default)(n)),n.minimize=n.minimize.bind((0,u.default)(n)),n.generateOptions=n.generateOptions.bind((0,u.default)(n)),n.handleSelectChange=n.handleSelectChange.bind((0,u.default)(n)),n.renderFormButton=n.renderFormButton.bind((0,u.default)(n)),n.renderForm=n.renderForm.bind((0,u.default)(n)),n.getId=n.getId.bind((0,u.default)(n)),n.state={id:"disclosureDimensions",disclosureHeight:O[0],disclosureWidth:k[0]},n}return(0,c.default)(t,e),(0,o.default)(t,[{key:"handleSelectChange",value:function(e){this.setState((0,i.default)({},e.target.name,e.target.value))}},{key:"getId",value:function(e){return"".concat(this.state.id,"-").concat(e,"-").concat(this.props.nestedIndex)}},{key:"generateOptions",value:function(e,t){var n=this;return e.map((function(e,l){var i=l;return d.default.createElement("option",{id:"".concat(t,"-").concat(e,"-").concat(n.props.nestedIndex),key:i,value:e},e)}))}},{key:"disclose",value:function(e,t){var n=this,l=this.props,i=l.disclosureType,r=l.nestedIndex,o=l.renderHeaderAdapter,a=r+1;return function(){n.props.disclosureManager.disclose({preferredType:i,size:e,dimensions:t,content:{key:"DemoContainer-".concat(a),component:d.default.createElement(E,{identifier:"DemoContainer-".concat(a),nestedIndex:a,renderHeaderAdapter:o})}})}}},{key:"dismiss",value:function(){this.props.disclosureManager.dismiss()}},{key:"closeDisclosure",value:function(){this.props.disclosureManager.closeDisclosure()}},{key:"goBack",value:function(){this.props.disclosureManager.goBack()}},{key:"maximize",value:function(){this.props.disclosureManager.maximize()}},{key:"minimize",value:function(){this.props.disclosureManager.minimize()}},{key:"renderFormButton",value:function(){var e="Disclose (".concat(this.state.disclosureHeight,") x (").concat(this.state.disclosureWidth,")");return d.default.createElement("button",{type:"button",id:"disclose-dimension-".concat(this.props.nestedIndex),onClick:this.disclose(void 0,{height:this.state.disclosureHeight,width:this.state.disclosureWidth})},e)}},{key:"renderForm",value:function(){return d.default.createElement("form",null,d.default.createElement("label",{htmlFor:this.getId("height")},"Pop Content Height"),d.default.createElement("select",{id:this.getId("height"),name:"disclosureHeight",value:this.state.disclosureHeight,onChange:this.handleSelectChange},this.generateOptions(O,"height")),d.default.createElement("br",null),d.default.createElement("br",null),d.default.createElement("label",{htmlFor:this.getId("width")},"Pop Content Width"),d.default.createElement("select",{id:this.getId("width"),name:"disclosureWidth",value:this.state.disclosureWidth,onChange:this.handleSelectChange},this.generateOptions(k,"width")),d.default.createElement("br",null),d.default.createElement("br",null))}},{key:"render",value:function(){var e=this.props,t=e.disclosureManager,n=e.identifier,l=e.renderHeaderAdapter;return d.default.createElement(b.default,{id:n,className:"nested-component",fill:!0,header:d.default.createElement("h2",{className:v("header")},"Content Component")},l?d.default.createElement(p.DisclosureManagerHeaderAdapter,{title:"Disclosure - ".concat(n),collapsibleMenuView:d.default.createElement(m.default,null,d.default.createElement(m.default.Item,{text:"Header Button 1",key:"button_1"}),d.default.createElement(m.default.Item,{text:"Header Button 2",key:"button_2"}))}):void 0,d.default.createElement("p",null,"id:"," ",n),d.default.createElement("button",{type:"button",className:"disclose",onClick:this.disclose()},"Disclose"),d.default.createElement("button",{type:"button",className:"disclose-tiny",onClick:this.disclose("tiny")},"Disclose Tiny"),d.default.createElement("button",{type:"button",className:"disclose-small",onClick:this.disclose("small")},"Disclose Small"),d.default.createElement("button",{type:"button",className:"disclose-medium",onClick:this.disclose("medium")},"Disclose Medium"),d.default.createElement("button",{type:"button",className:"disclose-large",onClick:this.disclose("large")},"Disclose Large"),d.default.createElement("button",{type:"button",className:"disclose-huge",onClick:this.disclose("huge")},"Disclose Huge"),d.default.createElement("button",{type:"button",className:"disclose-fullscreen",onClick:this.disclose("fullscreen")},"Disclose Fullscreen"),d.default.createElement("div",{className:v("content-form")},this.renderForm(),this.renderFormButton()),t&&t.dismiss?d.default.createElement("button",{type:"button",className:"dismiss",onClick:this.dismiss},"Dismiss"):null,t&&t.closeDisclosure?d.default.createElement("button",{type:"button",className:"close-disclosure",onClick:this.closeDisclosure},"Close Disclosure"):null,t&&t.goBack?d.default.createElement("button",{type:"button",className:"go-back",onClick:this.goBack},"Go Back"):null,t&&t.maximize?d.default.createElement("button",{type:"button",className:"maximize",onClick:this.maximize},"Maximize"):null,t&&t.minimize?d.default.createElement("button",{type:"button",className:"minimize",onClick:this.minimize},"Minimize"):null)}}]),t}(d.default.Component);C.propTypes={disclosureManager:p.disclosureManagerShape,identifier:f.default.string,disclosureType:f.default.string,nestedIndex:f.default.number,renderHeaderAdapter:f.default.bool},C.defaultProps={nestedIndex:0};var E=(0,p.withDisclosureManager)(C);t.default=E},28300:function(e,t,n){n.r(t),t.default={arrange:"Arrange-module__arrange___hY0Ml",fill:"Arrange-module__fill___m88eq",fit:"Arrange-module__fit___tv8j-",center:"Arrange-module__center___9qfhG",bottom:"Arrange-module__bottom___8beod",stretch:"Arrange-module__stretch___eQF-k",default:"Arrange-module__default___z+O29"}},20120:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Checkbox-module__clinical-lowlight-theme___J4i3C","orion-fusion-theme":"Checkbox-module__orion-fusion-theme___ZTiEC",checkbox:"Checkbox-module__checkbox___pLlkO",label:"Checkbox-module__label___96oeA","is-mobile":"Checkbox-module__is-mobile___HQ1Ax","native-input":"Checkbox-module__native-input___9pZ94","label-text":"Checkbox-module__label-text___NBjgG","is-hidden":"Checkbox-module__is-hidden___q9DyW","is-disabled":"Checkbox-module__is-disabled___pimXj","is-inline":"Checkbox-module__is-inline___8-h-C"}},13504:function(e,t,n){n.r(t),t.default={header:"DisclosureComponentCommon-test-module__header___zA+M6","content-form":"DisclosureComponentCommon-test-module__content-form___ZH5Rj","select-field":"DisclosureComponentCommon-test-module__select-field___eTUIx"}},32272:function(e,t,n){n.r(t),t.default={"content-wrapper":"ModalManagerCommon-test-module__content-wrapper___fnO38","disclosure-accessory":"ModalManagerCommon-test-module__disclosure-accessory___lBCWz","disclosure-container":"ModalManagerCommon-test-module__disclosure-container___GqXUT"}},94515:function(e,t,n){function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.AlignmentTypes=void 0;var i=u(n(11504)),r=u(n(3268)),o=u(n(74824)),a=u(n(28300)),s=["fitStart","fill","fitEnd","align","alignFitStart","alignFill","alignFitEnd","fitStartAttributes","fillAttributes","fitEndAttributes"];function u(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},c.apply(this,arguments)}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==l(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!==l(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===l(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){if(null==e)return{};var n,l,i=function(e,t){if(null==e)return{};var n,l,i={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}t.AlignmentTypes={CENTER:"center",BOTTOM:"bottom",STRETCH:"stretch"};var p=o.default.bind(a.default),h={fitStart:r.default.element,fill:r.default.element.isRequired,fitEnd:r.default.element,align:r.default.oneOf(["center","bottom","stretch"]),alignFitStart:r.default.oneOf(["center","bottom","stretch"]),alignFitEnd:r.default.oneOf(["center","bottom","stretch"]),alignFill:r.default.oneOf(["center","bottom","stretch"]),fitStartAttributes:r.default.object,fillAttributes:r.default.object,fitEndAttributes:r.default.object},g=function(e){var t=e.fitStart,n=e.fill,l=e.fitEnd,r=e.align,o=e.alignFitStart,a=e.alignFill,u=e.alignFitEnd,d=e.fitStartAttributes,m=e.fillAttributes,h=e.fitEndAttributes,g=b(e,s),_=f({},d),y=f({},m),v=f({},h);return i.default.createElement("span",c({},g,{className:p("arrange",g.className)}),i.default.createElement("span",c({},_,{className:p("fit",r||o,_.className,"fit-block")}),t),i.default.createElement("span",c({},y,{className:p("fill",r||a,y.className,"fill-block")}),n),i.default.createElement("span",c({},v,{className:p("fit",r||u,v.className)}),l))};g.propTypes=h;t.default=g},65928:function(e,t,n){function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=f(n(11504)),r=f(n(3268)),o=f(n(82084)),a=f(n(74824)),s=f(n(7804)),u=f(n(20120)),c=f(n(41672)),d=["checked","defaultChecked","inputAttrs","id","disabled","isInline","isLabelHidden","labelText","labelTextAttrs","name","onBlur","onChange","onFocus","value"];function f(e){return e&&e.__esModule?e:{default:e}}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},m.apply(this,arguments)}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function p(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==l(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!==l(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===l(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e,t){if(null==e)return{};var n,l,i=function(e,t){if(null==e)return{};var n,l,i={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var g=a.default.bind(u.default),_={checked:r.default.bool,defaultChecked:r.default.bool,id:r.default.string,inputAttrs:r.default.object,disabled:r.default.bool,isInline:r.default.bool,isLabelHidden:r.default.bool,labelText:r.default.string.isRequired,labelTextAttrs:r.default.object,name:r.default.string,onBlur:r.default.func,onChange:r.default.func,onFocus:r.default.func,value:r.default.string},y={checked:void 0,defaultChecked:void 0,id:void 0,inputAttrs:{},disabled:!1,isInline:!1,isLabelHidden:!1,labelTextAttrs:{},name:null,onBlur:void 0,onChange:void 0,onFocus:void 0,value:void 0},v=function(e){var t=e.checked,n=e.defaultChecked,l=e.inputAttrs,r=e.id,a=e.disabled,u=e.isInline,f=e.isLabelHidden,_=e.labelText,y=e.labelTextAttrs,v=e.name,O=e.onBlur,k=e.onChange,C=e.onFocus,E=e.value,j=h(e,d),x=i.default.useContext(s.default),w=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},l);void 0!==t?w.checked=t:w.defaultChecked=n;var S=(0,o.default)(g("checkbox",{"is-inline":u},x.className),j.className),D=g(["label",{"is-disabled":a},{"is-mobile":c.default.isConsideredMobileDevice()},y.className]),P=g(["native-input",l.className]),N=g(["label-text",{"is-hidden":f},{"is-mobile":c.default.isConsideredMobileDevice()}]),A=null;return f?(w["aria-label"]=_,A=i.default.createElement("span",m({},y,{className:N}))):A=i.default.createElement("span",m({},y,{className:N}),_),i.default.createElement("div",m({},j,{className:S}),i.default.createElement("label",{htmlFor:r,className:D},i.default.createElement("input",m({},w,{type:"checkbox",id:r,disabled:a,name:v,value:E,onChange:k,onFocus:C,onBlur:O,className:P})),A))};v.propTypes=_,v.defaultProps=y,v.isCheckbox=!0;t.default=v},41672:function(e){var t={isConsideredMobileDevice:function(){return window.matchMedia("(max-width: 1024px)").matches&&("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0)}};e.exports=t}}]);