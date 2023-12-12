"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[37618],{73887:function(e,t,n){var l=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=l(n(38416)),a=l(n(56690)),o=l(n(89728)),s=l(n(66115)),r=l(n(61655)),u=l(n(94993)),c=l(n(73808)),d=l(n(67294)),f=l(n(45697)),m=l(n(57927)),b=l(n(10027)),h=n(56019),p=l(n(47166)),g=l(n(5768));function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,l=(0,c.default)(e);if(t){var i=(0,c.default)(this).constructor;n=Reflect.construct(l,arguments,i)}else n=l.apply(this,arguments);return(0,u.default)(this,n)}}var v=p.default.bind(g.default),_=Object.keys(h.availableDisclosureHeights),k=Object.keys(h.availableDisclosureWidths),C=function(e){(0,r.default)(n,e);var t=y(n);function n(e){var l;return(0,a.default)(this,n),(l=t.call(this,e)).disclose=l.disclose.bind((0,s.default)(l)),l.dismiss=l.dismiss.bind((0,s.default)(l)),l.closeDisclosure=l.closeDisclosure.bind((0,s.default)(l)),l.goBack=l.goBack.bind((0,s.default)(l)),l.maximize=l.maximize.bind((0,s.default)(l)),l.minimize=l.minimize.bind((0,s.default)(l)),l.generateOptions=l.generateOptions.bind((0,s.default)(l)),l.handleSelectChange=l.handleSelectChange.bind((0,s.default)(l)),l.renderFormButton=l.renderFormButton.bind((0,s.default)(l)),l.renderForm=l.renderForm.bind((0,s.default)(l)),l.getId=l.getId.bind((0,s.default)(l)),l.state={id:"disclosureDimensions",disclosureHeight:_[0],disclosureWidth:k[0]},l}return(0,o.default)(n,[{key:"handleSelectChange",value:function(e){this.setState((0,i.default)({},e.target.name,e.target.value))}},{key:"getId",value:function(e){return"".concat(this.state.id,"-").concat(e,"-").concat(this.props.nestedIndex)}},{key:"generateOptions",value:function(e,t){var n=this;return e.map((function(e,l){var i=l;return d.default.createElement("option",{id:"".concat(t,"-").concat(e,"-").concat(n.props.nestedIndex),key:i,value:e},e)}))}},{key:"disclose",value:function(e,t){var n=this,l=this.props,i=l.disclosureType,a=l.nestedIndex,o=l.renderHeaderAdapter,s=a+1;return function(){n.props.disclosureManager.disclose({preferredType:i,size:e,dimensions:t,content:{key:"DemoContainer-".concat(s),component:d.default.createElement(x,{identifier:"DemoContainer-".concat(s),nestedIndex:s,disclosureType:i,renderHeaderAdapter:o})}})}}},{key:"dismiss",value:function(){this.props.disclosureManager.dismiss()}},{key:"closeDisclosure",value:function(){this.props.disclosureManager.closeDisclosure()}},{key:"goBack",value:function(){this.props.disclosureManager.goBack()}},{key:"maximize",value:function(){this.props.disclosureManager.maximize()}},{key:"minimize",value:function(){this.props.disclosureManager.minimize()}},{key:"renderFormButton",value:function(){var e="Disclose (".concat(this.state.disclosureHeight,") x (").concat(this.state.disclosureWidth,")");return d.default.createElement("button",{type:"button",id:"disclose-dimension-".concat(this.props.nestedIndex),onClick:this.disclose(void 0,{height:this.state.disclosureHeight,width:this.state.disclosureWidth})},e)}},{key:"renderForm",value:function(){return d.default.createElement("form",null,d.default.createElement("label",{htmlFor:this.getId("height")},"Pop Content Height"),d.default.createElement("select",{id:this.getId("height"),name:"disclosureHeight",value:this.state.disclosureHeight,onChange:this.handleSelectChange},this.generateOptions(_,"height")),d.default.createElement("br",null),d.default.createElement("br",null),d.default.createElement("label",{htmlFor:this.getId("width")},"Pop Content Width"),d.default.createElement("select",{id:this.getId("width"),name:"disclosureWidth",value:this.state.disclosureWidth,onChange:this.handleSelectChange},this.generateOptions(k,"width")),d.default.createElement("br",null),d.default.createElement("br",null))}},{key:"render",value:function(){var e=this.props,t=e.disclosureManager,n=e.identifier,l=e.renderHeaderAdapter;return d.default.createElement(b.default,{id:n,className:"nested-component",fill:!0,header:d.default.createElement("h2",{className:v("content-wrapper")},"Content Component")},l?d.default.createElement(h.DisclosureManagerHeaderAdapter,{title:"Disclosure - ".concat(n),collapsibleMenuView:d.default.createElement(m.default,null,d.default.createElement(m.default.Item,{text:"Header Button 1",key:"button_1"}),d.default.createElement(m.default.Item,{text:"Header Button 2",key:"button_2"}))}):void 0,d.default.createElement("p",null,"id:"," ",n),d.default.createElement("button",{type:"button",className:"disclose",onClick:this.disclose()},"Disclose"),d.default.createElement("button",{type:"button",className:"disclose-tiny",onClick:this.disclose("tiny")},"Disclose Tiny"),d.default.createElement("button",{type:"button",className:"disclose-small",onClick:this.disclose("small")},"Disclose Small"),d.default.createElement("button",{type:"button",className:"disclose-medium",onClick:this.disclose("medium")},"Disclose Medium"),d.default.createElement("button",{type:"button",className:"disclose-large",onClick:this.disclose("large")},"Disclose Large"),d.default.createElement("button",{type:"button",className:"disclose-huge",onClick:this.disclose("huge")},"Disclose Huge"),d.default.createElement("button",{type:"button",className:"disclose-fullscreen",onClick:this.disclose("fullscreen")},"Disclose Fullscreen"),d.default.createElement("div",{className:v("form-wrapper")},this.renderForm(),this.renderFormButton()),t&&t.dismiss?d.default.createElement("button",{type:"button",className:"dismiss",onClick:this.dismiss},"Dismiss"):null,t&&t.closeDisclosure?d.default.createElement("button",{type:"button",className:"close-disclosure",onClick:this.closeDisclosure},"Close Disclosure"):null,t&&t.goBack?d.default.createElement("button",{type:"button",className:"go-back",onClick:this.goBack},"Go Back"):null,t&&t.maximize?d.default.createElement("button",{type:"button",className:"maximize",onClick:this.maximize},"Maximize"):null,t&&t.minimize?d.default.createElement("button",{type:"button",className:"minimize",onClick:this.minimize},"Minimize"):null)}}]),n}(d.default.Component);C.propTypes={disclosureManager:h.disclosureManagerShape,identifier:f.default.string,disclosureType:f.default.string,nestedIndex:f.default.number,renderHeaderAdapter:f.default.bool},C.defaultProps={nestedIndex:0};var x=(0,h.withDisclosureManager)(C);t.default=x},12472:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Checkbox-module__clinical-lowlight-theme___J4i3C","orion-fusion-theme":"Checkbox-module__orion-fusion-theme___ZTiEC",checkbox:"Checkbox-module__checkbox___pLlkO",label:"Checkbox-module__label___96oeA","is-mobile":"Checkbox-module__is-mobile___HQ1Ax","native-input":"Checkbox-module__native-input___9pZ94","label-text":"Checkbox-module__label-text___NBjgG","is-hidden":"Checkbox-module__is-hidden___q9DyW","is-disabled":"Checkbox-module__is-disabled___pimXj","is-inline":"Checkbox-module__is-inline___8-h-C"}},5768:function(e,t,n){n.r(t),t.default={"content-wrapper":"DisclosureComponent-module__content-wrapper___bvpSZ","form-wrapper":"DisclosureComponent-module__form-wrapper___96jEd"}},74787:function(e,t,n){n.r(t),t.default={"content-wrapper":"SlidePanelManagerDefault-test-module__content-wrapper___6BZ9g","disclosure-accessory":"SlidePanelManagerDefault-test-module__disclosure-accessory___OZMgv","disclosure-container":"SlidePanelManagerDefault-test-module__disclosure-container___-QHV0"}},15185:function(e,t,n){function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=f(n(67294)),a=f(n(45697)),o=f(n(94184)),s=f(n(47166)),r=f(n(47341)),u=f(n(12472)),c=f(n(84538)),d=["checked","defaultChecked","inputAttrs","id","disabled","isInline","isLabelHidden","labelText","labelTextAttrs","name","onBlur","onChange","onFocus","value"];function f(e){return e&&e.__esModule?e:{default:e}}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},m.apply(this,arguments)}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function h(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==l(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!==l(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===l(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){if(null==e)return{};var n,l,i=function(e,t){if(null==e)return{};var n,l,i={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var g=s.default.bind(u.default),y={checked:a.default.bool,defaultChecked:a.default.bool,id:a.default.string,inputAttrs:a.default.object,disabled:a.default.bool,isInline:a.default.bool,isLabelHidden:a.default.bool,labelText:a.default.string.isRequired,labelTextAttrs:a.default.object,name:a.default.string,onBlur:a.default.func,onChange:a.default.func,onFocus:a.default.func,value:a.default.string},v={checked:void 0,defaultChecked:void 0,id:void 0,inputAttrs:{},disabled:!1,isInline:!1,isLabelHidden:!1,labelTextAttrs:{},name:null,onBlur:void 0,onChange:void 0,onFocus:void 0,value:void 0},_=function(e){var t=e.checked,n=e.defaultChecked,l=e.inputAttrs,a=e.id,s=e.disabled,u=e.isInline,f=e.isLabelHidden,y=e.labelText,v=e.labelTextAttrs,_=e.name,k=e.onBlur,C=e.onChange,x=e.onFocus,E=e.value,O=p(e,d),w=i.default.useContext(r.default),D=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},l);void 0!==t?D.checked=t:D.defaultChecked=n;var j=(0,o.default)(g("checkbox",{"is-inline":u},w.className),O.className),M=g(["label",{"is-disabled":s},{"is-mobile":c.default.isConsideredMobileDevice()},v.className]),N=g(["native-input",l.className]),P=g(["label-text",{"is-hidden":f},{"is-mobile":c.default.isConsideredMobileDevice()}]),S=null;return f?(D["aria-label"]=y,S=i.default.createElement("span",m({},v,{className:P}))):S=i.default.createElement("span",m({},v,{className:P}),y),i.default.createElement("div",m({},O,{className:j}),i.default.createElement("label",{htmlFor:a,className:M},i.default.createElement("input",m({},D,{type:"checkbox",id:a,disabled:s,name:_,value:E,onChange:C,onFocus:x,onBlur:k,className:N})),S))};_.propTypes=y,_.defaultProps=v,_.isCheckbox=!0;t.default=_},84538:function(e){var t={isConsideredMobileDevice:function(){return window.matchMedia("(max-width: 1024px)").matches&&("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0)}};e.exports=t}}]);