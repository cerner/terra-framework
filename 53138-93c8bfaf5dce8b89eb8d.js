"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[53138],{53138:function(e,t,a){var r=a(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(a(56690)),i=r(a(89728)),n=r(a(66115)),l=r(a(61655)),d=r(a(94993)),s=r(a(73808)),c=r(a(67294)),u=r(a(76414));function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=(0,s.default)(e);if(t){var o=(0,s.default)(this).constructor;a=Reflect.construct(r,arguments,o)}else a=r.apply(this,arguments);return(0,d.default)(this,a)}}var h=function(e){(0,l.default)(a,e);var t=f(a);function a(e){var r;return(0,o.default)(this,a),(r=t.call(this,e)).state={activeKey:"Hematology"},r.handleSelection=r.handleSelection.bind((0,n.default)(r)),r}return(0,i.default)(a,[{key:"handleSelection",value:function(e,t){t!==this.state.activeKey&&this.setState({activeKey:t})}},{key:"render",value:function(){var e=c.default.createElement(u.default.Pane,{label:"Radiology",key:"Radiology",id:"tab1"},c.default.createElement("p",{id:"tab1"},"Radiology represents a branch of medicine that deals with radiant energy in the diagnosis and treatment of diseases. This field can be divided into two broad areas - diagnostic radiology and interventional radiology. A physician who specializes in radiology is called radiologist.")),t=c.default.createElement(u.default.Pane,{label:"Hematology",key:"Hematology",id:"tab2"},c.default.createElement("p",{id:"tab2"},"Hematology is the study of blood and blood disorders. Hematologists and hematopathologists are highly trained healthcare providers who specialize in diseases of the blood and blood components. These include blood and bone marrow cells.")),a=c.default.createElement(u.default.Pane,{label:"Cardiology",key:"Cardiology",id:"tab3"},c.default.createElement("p",{id:"tab3"},"The term cardiology is derived from the Greek words “cardia,” which refers to the heart and “logy” meaning “study of.” Cardiology is a branch of medicine that concerns diseases and disorders of the heart. It may range from congenital defects through to acquired heart diseases such as coronary artery disease and congestive heart failure. Physicians who specialize in cardiology are called cardiologists and they are responsible for the medical management of various heart diseases. Cardiac surgeons are the specialist physicians who perform surgical procedures to correct heart disorders."));return c.default.createElement("div",null,c.default.createElement("div",{id:"current-selection"},c.default.createElement("p",null,"Last Triggered Tab:",this.state.activeKey)),c.default.createElement(u.default,{isDraggable:!0,id:"controlledTabs",onChange:this.handleSelection,activeKey:this.state.activeKey},e,t,a))}}]),a}(c.default.Component);t.default=h}}]);