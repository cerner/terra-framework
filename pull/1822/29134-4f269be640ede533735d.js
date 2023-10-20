"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[29134],{29134:function(e,t,a){var l=a(64836),n=a(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(a(27424)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=n(e)&&"function"!=typeof e)return{default:e};var a=d(t);if(a&&a.has(e))return a.get(e);var l={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=r?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(l,u,i):l[u]=e[u]}return l.default=e,a&&a.set(e,l),l}(a(67294)),i=l(a(19270));function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(d=function(e){return e?a:t})(e)}t.default=function(){var e=(0,u.useState)(""),t=(0,r.default)(e,2),a=t[0],l=t[1],n=a?"Updated Slider value is: ".concat(a):"Change the value of Slider to trigger callback";return u.default.createElement(u.default.Fragment,null,u.default.createElement(i.default,{minimumValue:0,maximumValue:100,label:"Zoom",value:20,onChange:function(e){l(e.target.value)}}),u.default.createElement("p",null,n))}},19270:function(e,t,a){var l=a(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(56690)),r=l(a(89728)),u=l(a(66115)),i=l(a(61655)),d=l(a(94993)),o=l(a(73808)),s=l(a(67294)),f=l(a(45697)),c=l(a(47166)),m=l(a(47341)),p=l(a(86495)),_=l(a(29270)),h=a(55877);function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,l=(0,o.default)(e);if(t){var n=(0,o.default)(this).constructor;a=Reflect.construct(l,arguments,n)}else a=l.apply(this,arguments);return(0,d.default)(this,a)}}var v=c.default.bind(p.default),g={label:f.default.string.isRequired,minimumValue:f.default.number.isRequired,maximumValue:f.default.number.isRequired,value:f.default.number.isRequired,isDisabled:f.default.bool,minimumLabel:f.default.string,maximumLabel:f.default.string,onChange:f.default.func},y=function(e){(0,i.default)(a,e);var t=b(a);function a(e){var l;return(0,n.default)(this,a),(l=t.call(this,e)).state={value:l.props.value},l.handleOnChange=l.handleOnChange.bind((0,u.default)(l)),l.sliderRef=s.default.createRef(),l}return(0,r.default)(a,[{key:"componentDidUpdate",value:function(e){this.props.value!==e.value&&this.setState({value:this.props.value})}},{key:"handleOnChange",value:function(e){this.setState({value:e.currentTarget.value}),this.props.onChange&&this.props.onChange(e)}},{key:"render",value:function(){var e=this.props,t=e.isDisabled,a=e.minimumValue,l=e.maximumValue,n=e.label,r=e.minimumLabel,u=e.maximumLabel,i=this.context,d=v(["slider",i.className]),o=r||a,f=u||l,c=r||u?"Adjust slider to select a value between ".concat(r," (").concat(a,") and ").concat(u," (").concat(l,")"):"Adjust slider to select a value between ".concat(a," and ").concat(l),m=(0,h.v4)();return s.default.createElement("div",{style:{"--terra-slider-progress-status":"".concat(this.state.value,"%")},className:d},s.default.createElement("span",{className:v("label"),"aria-hidden":"true"},n),s.default.createElement("span",{className:v("slider-label","slider-min-label"),"aria-hidden":"true"},o),s.default.createElement("input",{className:v("input-range"),type:"range",ref:this.sliderRef,"aria-label":n,"aria-describedby":m,value:this.state.value,disabled:t,min:a,max:l,onChange:this.handleOnChange}),s.default.createElement("span",{className:v("slider-label","slider-max-label"),"aria-hidden":"true"},f),s.default.createElement(_.default,{id:m,text:c}))}}]),a}(s.default.Component);y.propTypes=g,y.defaultProps={isDisabled:!1,onChange:null},y.contextType=m.default;t.default=y},86495:function(e,t,a){a.r(t),t.default={"orion-fusion-theme":"Slider-module__orion-fusion-theme___8lFzi","clinical-lowlight-theme":"Slider-module__clinical-lowlight-theme___ou4Xa",slider:"Slider-module__slider___p5WX-",label:"Slider-module__label___9ub6Z","slider-label":"Slider-module__slider-label___fdXlu","slider-min-label":"Slider-module__slider-min-label___zedNZ","slider-max-label":"Slider-module__slider-max-label___6gGpy","input-range":"Slider-module__input-range___9Lrsz"}}}]);