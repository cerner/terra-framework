"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[59361],{59361:function(e,l,a){var t=a(64836);Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var u=t(a(67294)),n=t(a(19270));l.default=function(){return u.default.createElement(n.default,{isDisabled:!0,minimumValue:0,maximumValue:100,labelText:"Label",value:50})}},19270:function(e,l,a){var t=a(64836);Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var u=t(a(56690)),n=t(a(89728)),r=t(a(66115)),i=t(a(61655)),s=t(a(94993)),d=t(a(73808)),o=t(a(67294)),f=t(a(45697)),m=t(a(47166)),c=t(a(47341)),p=t(a(86495));function h(e){var l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,t=(0,d.default)(e);if(l){var u=(0,d.default)(this).constructor;a=Reflect.construct(t,arguments,u)}else a=t.apply(this,arguments);return(0,s.default)(this,a)}}var _=m.default.bind(p.default),b={labelText:f.default.string.isRequired,minimumValue:f.default.number.isRequired,maximumValue:f.default.number.isRequired,value:f.default.number.isRequired,isDisabled:f.default.bool,minimumLabel:f.default.string,maximumLabel:f.default.string,onChange:f.default.func},v=function(e){(0,i.default)(a,e);var l=h(a);function a(e){var t;return(0,u.default)(this,a),(t=l.call(this,e)).state={value:t.props.value},t.handleOnChange=t.handleOnChange.bind((0,r.default)(t)),t.sliderRef=o.default.createRef(),t}return(0,n.default)(a,[{key:"componentDidUpdate",value:function(e){this.props.value!==e.value&&this.setState({value:this.props.value})}},{key:"handleOnChange",value:function(e){this.setState({value:e.currentTarget.value}),this.props.onChange&&this.props.onChange(e)}},{key:"render",value:function(){var e=this.props,l=e.isDisabled,a=e.minimumValue,t=e.maximumValue,u=e.labelText,n=e.minimumLabel,r=e.maximumLabel,i=this.context,s=_(["slider",i.className]),d=n||a,f=r||t;return o.default.createElement("div",{style:{"--terra-slider-progress-status":"".concat(this.state.value,"%")},className:s},o.default.createElement("span",{className:_("label")},u),o.default.createElement("span",{className:_("slider-label")},d),o.default.createElement("input",{className:_("input-range"),type:"range",ref:this.sliderRef,"aria-label":u,value:this.state.value,disabled:l,min:a,max:t,onChange:this.handleOnChange}),o.default.createElement("span",{className:_("slider-label","slider-max-label")},f))}}]),a}(o.default.Component);v.propTypes=b,v.defaultProps={isDisabled:!1,onChange:null},v.contextType=c.default;l.default=v},86495:function(e,l,a){a.r(l),l.default={"orion-fusion-theme":"Slider-module__orion-fusion-theme___8lFzi","clinical-lowlight-theme":"Slider-module__clinical-lowlight-theme___ou4Xa",slider:"Slider-module__slider___p5WX-",label:"Slider-module__label___9ub6Z","slider-label":"Slider-module__slider-label___fdXlu","slider-max-label":"Slider-module__slider-max-label___6gGpy","input-range":"Slider-module__input-range___9Lrsz"}}}]);