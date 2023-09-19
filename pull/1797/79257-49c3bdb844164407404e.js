"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[79257],{64475:function(e,t,n){var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(38416)),s=a(n(56690)),i=a(n(89728)),o=a(n(66115)),r=a(n(61655)),u=a(n(94993)),d=a(n(73808)),c=a(n(67294)),m=a(n(45697)),f=a(n(81061)),h=a(n(10027)),p=n(56019),g=a(n(47166)),b=a(n(32625));function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,d.default)(e);if(t){var l=(0,d.default)(this).constructor;n=Reflect.construct(a,arguments,l)}else n=a.apply(this,arguments);return(0,u.default)(this,n)}}var y=g.default.bind(b.default),k=Object.keys(p.availableDisclosureHeights),_=Object.keys(p.availableDisclosureWidths),C=function(e){(0,r.default)(n,e);var t=v(n);function n(e){var a;return(0,s.default)(this,n),(a=t.call(this,e)).disclose=a.disclose.bind((0,o.default)(a)),a.dismiss=a.dismiss.bind((0,o.default)(a)),a.closeDisclosure=a.closeDisclosure.bind((0,o.default)(a)),a.goBack=a.goBack.bind((0,o.default)(a)),a.maximize=a.maximize.bind((0,o.default)(a)),a.minimize=a.minimize.bind((0,o.default)(a)),a.generateOptions=a.generateOptions.bind((0,o.default)(a)),a.handleSelectChange=a.handleSelectChange.bind((0,o.default)(a)),a.renderFormButton=a.renderFormButton.bind((0,o.default)(a)),a.renderForm=a.renderForm.bind((0,o.default)(a)),a.getId=a.getId.bind((0,o.default)(a)),a.state={id:"disclosureDimensions",disclosureHeight:k[0],disclosureWidth:_[0]},a}return(0,i.default)(n,[{key:"handleSelectChange",value:function(e){this.setState((0,l.default)({},e.target.name,e.target.value))}},{key:"getId",value:function(e){return"".concat(this.state.id,"-").concat(e,"-").concat(this.props.nestedIndex)}},{key:"generateOptions",value:function(e,t){var n=this;return e.map((function(e,a){var l=a;return c.default.createElement("option",{id:"".concat(t,"-").concat(e,"-").concat(n.props.nestedIndex),key:l,value:e},e)}))}},{key:"disclose",value:function(e,t){var n=this,a=this.props,l=a.disclosureType,s=a.nestedIndex,i=a.renderHeaderAdapter,o=s+1;return function(){n.props.disclosureManager.disclose({preferredType:l,size:e,dimensions:t,content:{key:"DemoContainer-".concat(o),component:c.default.createElement(E,{identifier:"DemoContainer-".concat(o),nestedIndex:o,renderHeaderAdapter:i})}})}}},{key:"dismiss",value:function(){this.props.disclosureManager.dismiss()}},{key:"closeDisclosure",value:function(){this.props.disclosureManager.closeDisclosure()}},{key:"goBack",value:function(){this.props.disclosureManager.goBack()}},{key:"maximize",value:function(){this.props.disclosureManager.maximize()}},{key:"minimize",value:function(){this.props.disclosureManager.minimize()}},{key:"renderFormButton",value:function(){var e="Disclose (".concat(this.state.disclosureHeight,") x (").concat(this.state.disclosureWidth,")");return c.default.createElement("button",{type:"button",id:"disclose-dimension-".concat(this.props.nestedIndex),onClick:this.disclose(void 0,{height:this.state.disclosureHeight,width:this.state.disclosureWidth})},e)}},{key:"renderForm",value:function(){return c.default.createElement("form",null,c.default.createElement("label",{htmlFor:this.getId("height")},"Pop Content Height"),c.default.createElement("select",{id:this.getId("height"),name:"disclosureHeight",value:this.state.disclosureHeight,onChange:this.handleSelectChange},this.generateOptions(k,"height")),c.default.createElement("br",null),c.default.createElement("br",null),c.default.createElement("label",{htmlFor:this.getId("width")},"Pop Content Width"),c.default.createElement("select",{id:this.getId("width"),name:"disclosureWidth",value:this.state.disclosureWidth,onChange:this.handleSelectChange},this.generateOptions(_,"width")),c.default.createElement("br",null),c.default.createElement("br",null))}},{key:"render",value:function(){var e=this.props,t=e.disclosureManager,n=e.identifier,a=e.renderHeaderAdapter;return c.default.createElement(h.default,{id:n,className:"nested-component",fill:!0,header:c.default.createElement("h2",{className:y("header")},"Content Component")},a?c.default.createElement(p.DisclosureManagerHeaderAdapter,{title:"Disclosure - ".concat(n),collapsibleMenuView:c.default.createElement(f.default,null,c.default.createElement(f.default.Item,{text:"Header Button 1",key:"button_1"}),c.default.createElement(f.default.Item,{text:"Header Button 2",key:"button_2"}))}):void 0,c.default.createElement("p",null,"id:"," ",n),c.default.createElement("button",{type:"button",className:"disclose-fusion-small",onClick:this.disclose("fusion-small")},"Disclose Small (Fusion)"),c.default.createElement("button",{type:"button",className:"disclose-fusion-medium",onClick:this.disclose("fusion-medium")},"Disclose Medium (Fusion)"),c.default.createElement("button",{type:"button",className:"disclose-fusion-large",onClick:this.disclose("fusion-large")},"Disclose Large (Fusion)"),c.default.createElement("div",{className:y("content-form")},this.renderForm(),this.renderFormButton()),t&&t.dismiss?c.default.createElement("button",{type:"button",className:"dismiss",onClick:this.dismiss},"Dismiss"):null,t&&t.closeDisclosure?c.default.createElement("button",{type:"button",className:"close-disclosure",onClick:this.closeDisclosure},"Close Disclosure"):null,t&&t.goBack?c.default.createElement("button",{type:"button",className:"go-back",onClick:this.goBack},"Go Back"):null,t&&t.maximize?c.default.createElement("button",{type:"button",className:"maximize",onClick:this.maximize},"Maximize"):null,t&&t.minimize?c.default.createElement("button",{type:"button",className:"minimize",onClick:this.minimize},"Minimize"):null)}}]),n}(c.default.Component);C.propTypes={disclosureManager:p.disclosureManagerShape,identifier:m.default.string,disclosureType:m.default.string,nestedIndex:m.default.number,renderHeaderAdapter:m.default.bool},C.defaultProps={nestedIndex:0};var E=(0,p.withDisclosureManager)(C),M=E;t.default=M},20902:function(e,t,n){var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(67294)),s=a(n(47166)),i=a(n(22266)),o=a(n(64475)),r=a(n(1422)),u=s.default.bind(r.default),d=function(){return l.default.createElement("div",{role:"main",className:u("content-wrapper")},l.default.createElement(i.default,null,l.default.createElement(o.default,{identifier:"root-component",disclosureType:"modal"})))};t.default=d},32625:function(e,t,n){n.r(t),t.default={header:"DisclosureComponentCommon-test-module__header___zA+M6","content-form":"DisclosureComponentCommon-test-module__content-form___ZH5Rj","select-field":"DisclosureComponentCommon-test-module__select-field___eTUIx"}},1422:function(e,t,n){n.r(t),t.default={"content-wrapper":"ModalManagerCommon-test-module__content-wrapper___fnO38","disclosure-accessory":"ModalManagerCommon-test-module__disclosure-accessory___lBCWz","disclosure-container":"ModalManagerCommon-test-module__disclosure-container___GqXUT"}}}]);