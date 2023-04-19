"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[69850],{73887:function(e,t,n){var l=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(38416)),s=l(n(56690)),i=l(n(89728)),r=l(n(66115)),o=l(n(61655)),u=l(n(94993)),c=l(n(73808)),d=l(n(67294)),m=l(n(45697)),f=l(n(81061)),p=l(n(10027)),h=n(56019),g=l(n(47166)),b=l(n(5768));function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,l=(0,c.default)(e);if(t){var a=(0,c.default)(this).constructor;n=Reflect.construct(l,arguments,a)}else n=l.apply(this,arguments);return(0,u.default)(this,n)}}var k=g.default.bind(b.default),v=Object.keys(h.availableDisclosureHeights),E=Object.keys(h.availableDisclosureWidths),_=function(e){(0,o.default)(n,e);var t=y(n);function n(e){var l;return(0,s.default)(this,n),(l=t.call(this,e)).disclose=l.disclose.bind((0,r.default)(l)),l.dismiss=l.dismiss.bind((0,r.default)(l)),l.closeDisclosure=l.closeDisclosure.bind((0,r.default)(l)),l.goBack=l.goBack.bind((0,r.default)(l)),l.maximize=l.maximize.bind((0,r.default)(l)),l.minimize=l.minimize.bind((0,r.default)(l)),l.generateOptions=l.generateOptions.bind((0,r.default)(l)),l.handleSelectChange=l.handleSelectChange.bind((0,r.default)(l)),l.renderFormButton=l.renderFormButton.bind((0,r.default)(l)),l.renderForm=l.renderForm.bind((0,r.default)(l)),l.getId=l.getId.bind((0,r.default)(l)),l.state={id:"disclosureDimensions",disclosureHeight:v[0],disclosureWidth:E[0]},l}return(0,i.default)(n,[{key:"handleSelectChange",value:function(e){this.setState((0,a.default)({},e.target.name,e.target.value))}},{key:"getId",value:function(e){return"".concat(this.state.id,"-").concat(e,"-").concat(this.props.nestedIndex)}},{key:"generateOptions",value:function(e,t){var n=this;return e.map((function(e,l){var a=l;return d.default.createElement("option",{id:"".concat(t,"-").concat(e,"-").concat(n.props.nestedIndex),key:a,value:e},e)}))}},{key:"disclose",value:function(e,t){var n=this,l=this.props,a=l.disclosureType,s=l.nestedIndex,i=l.renderHeaderAdapter,r=s+1;return function(){n.props.disclosureManager.disclose({preferredType:a,size:e,dimensions:t,content:{key:"DemoContainer-".concat(r),component:d.default.createElement(C,{identifier:"DemoContainer-".concat(r),nestedIndex:r,disclosureType:a,renderHeaderAdapter:i})}})}}},{key:"dismiss",value:function(){this.props.disclosureManager.dismiss()}},{key:"closeDisclosure",value:function(){this.props.disclosureManager.closeDisclosure()}},{key:"goBack",value:function(){this.props.disclosureManager.goBack()}},{key:"maximize",value:function(){this.props.disclosureManager.maximize()}},{key:"minimize",value:function(){this.props.disclosureManager.minimize()}},{key:"renderFormButton",value:function(){var e="Disclose (".concat(this.state.disclosureHeight,") x (").concat(this.state.disclosureWidth,")");return d.default.createElement("button",{type:"button",id:"disclose-dimension-".concat(this.props.nestedIndex),onClick:this.disclose(void 0,{height:this.state.disclosureHeight,width:this.state.disclosureWidth})},e)}},{key:"renderForm",value:function(){return d.default.createElement("form",null,d.default.createElement("label",{htmlFor:this.getId("height")},"Pop Content Height"),d.default.createElement("select",{id:this.getId("height"),name:"disclosureHeight",value:this.state.disclosureHeight,onChange:this.handleSelectChange},this.generateOptions(v,"height")),d.default.createElement("br",null),d.default.createElement("br",null),d.default.createElement("label",{htmlFor:this.getId("width")},"Pop Content Width"),d.default.createElement("select",{id:this.getId("width"),name:"disclosureWidth",value:this.state.disclosureWidth,onChange:this.handleSelectChange},this.generateOptions(E,"width")),d.default.createElement("br",null),d.default.createElement("br",null))}},{key:"render",value:function(){var e=this.props,t=e.disclosureManager,n=e.identifier,l=e.renderHeaderAdapter;return d.default.createElement(p.default,{id:n,className:"nested-component",fill:!0,header:d.default.createElement("h2",{className:k("content-wrapper")},"Content Component")},l?d.default.createElement(h.DisclosureManagerHeaderAdapter,{title:"Disclosure - ".concat(n),collapsibleMenuView:d.default.createElement(f.default,null,d.default.createElement(f.default.Item,{text:"Header Button 1",key:"button_1"}),d.default.createElement(f.default.Item,{text:"Header Button 2",key:"button_2"}))}):void 0,d.default.createElement("p",null,"id:"," ",n),d.default.createElement("button",{type:"button",className:"disclose",onClick:this.disclose()},"Disclose"),d.default.createElement("button",{type:"button",className:"disclose-tiny",onClick:this.disclose("tiny")},"Disclose Tiny"),d.default.createElement("button",{type:"button",className:"disclose-small",onClick:this.disclose("small")},"Disclose Small"),d.default.createElement("button",{type:"button",className:"disclose-medium",onClick:this.disclose("medium")},"Disclose Medium"),d.default.createElement("button",{type:"button",className:"disclose-large",onClick:this.disclose("large")},"Disclose Large"),d.default.createElement("button",{type:"button",className:"disclose-huge",onClick:this.disclose("huge")},"Disclose Huge"),d.default.createElement("button",{type:"button",className:"disclose-fullscreen",onClick:this.disclose("fullscreen")},"Disclose Fullscreen"),d.default.createElement("div",{className:k("form-wrapper")},this.renderForm(),this.renderFormButton()),t&&t.dismiss?d.default.createElement("button",{type:"button",className:"dismiss",onClick:this.dismiss},"Dismiss"):null,t&&t.closeDisclosure?d.default.createElement("button",{type:"button",className:"close-disclosure",onClick:this.closeDisclosure},"Close Disclosure"):null,t&&t.goBack?d.default.createElement("button",{type:"button",className:"go-back",onClick:this.goBack},"Go Back"):null,t&&t.maximize?d.default.createElement("button",{type:"button",className:"maximize",onClick:this.maximize},"Maximize"):null,t&&t.minimize?d.default.createElement("button",{type:"button",className:"minimize",onClick:this.minimize},"Minimize"):null)}}]),n}(d.default.Component);_.propTypes={disclosureManager:h.disclosureManagerShape,identifier:m.default.string,disclosureType:m.default.string,nestedIndex:m.default.number,renderHeaderAdapter:m.default.bool},_.defaultProps={nestedIndex:0};var C=(0,h.withDisclosureManager)(_),D=C;t.default=D},70496:function(e,t,n){var l=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(67294)),s=l(n(47166)),i=l(n(34653)),r=l(n(73887)),o=l(n(74787)),u=s.default.bind(o.default),c=function(){return a.default.createElement("div",{role:"main",className:u("content-wrapper")},a.default.createElement(i.default,null,a.default.createElement(r.default,{identifier:"root-component",disclosureType:"panel",renderHeaderAdapter:!0})))};t.default=c},5768:function(e,t,n){n.r(t),t.default={"content-wrapper":"DisclosureComponent-module__content-wrapper___bvpSZ","form-wrapper":"DisclosureComponent-module__form-wrapper___96jEd"}},74787:function(e,t,n){n.r(t),t.default={"content-wrapper":"SlidePanelManagerDefault-test-module__content-wrapper___6BZ9g","disclosure-accessory":"SlidePanelManagerDefault-test-module__disclosure-accessory___OZMgv","disclosure-container":"SlidePanelManagerDefault-test-module__disclosure-container___-QHV0"}}}]);