"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[73865],{71983:function(e,t,a){var r=a(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(861)),l=r(a(56690)),u=r(a(89728)),c=r(a(66115)),d=r(a(61655)),f=r(a(94993)),o=r(a(73808)),i=r(a(67294)),s=r(a(76414)),p=r(a(66815));function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=(0,o.default)(e);if(t){var n=(0,o.default)(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return(0,f.default)(this,a)}}var v=function(e){(0,d.default)(a,e);var t=b(a);function a(e){var r;return(0,l.default)(this,a),(r=t.call(this,e)).state={tabKeys:(0,n.default)(Array(5).keys())},r.addMoreTabPanes=r.addMoreTabPanes.bind((0,c.default)(r)),r}return(0,u.default)(a,[{key:"createTabPanes",value:function(){return this.state.tabKeys.map((function(e){return i.default.createElement(s.default.Pane,{label:"Tab ".concat(e),key:e,id:e},i.default.createElement(p.default,{label:"Tab ".concat(e),id:"Tab ".concat(e)}))}))}},{key:"addMoreTabPanes",value:function(){this.setState({tabKeys:(0,n.default)(Array(20).keys())})}},{key:"render",value:function(){var e=5===this.state.tabKeys.length?"tabsWrapper-5":20===this.state.tabKeys.length?"tabsWrapper-20":"tabsWrapper";return i.default.createElement("div",null,i.default.createElement("button",{type:"button",onClick:this.addMoreTabPanes},"Add Tabs"),i.default.createElement("div",{id:e},i.default.createElement(s.default,null,this.createTabPanes())))}}]),a}(i.default.Component);t.default=v},66815:function(e,t,a){var r=a(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(67294)),l=r(a(47166)),u=r(a(45697)),c=r(a(82967)),d=l.default.bind(c.default),f={isLabelHidden:u.default.bool,label:u.default.string,id:u.default.string},o=function(e){var t=e.isLabelHidden,a=e.label,r=e.id;return n.default.createElement("div",{className:d("tab-content"),id:r},t?n.default.createElement("h3",{className:"truncationHeader"},a):null,"Content for"," ",n.default.createElement("i",null,a))};o.propTypes=f;var i=o;t.default=i},82967:function(e,t,a){a.r(t),t.default={"content-wrapper-default":"TabsTemplate-module__content-wrapper-default___8tJaQ","content-wrapper-600":"TabsTemplate-module__content-wrapper-600___FFMST","content-wrapper-400":"TabsTemplate-module__content-wrapper-400___+UWwG","tab-content":"TabsTemplate-module__tab-content___oadEx"}},30217:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(a(67294)),n=l(a(99139));function l(e){return e&&e.__esModule?e:{default:e}}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},u.apply(this,arguments)}var c=function(e){var t=u({},e);return r.default.createElement(n.default,t,r.default.createElement("path",{d:"M48 21H27V0h-6v21H0v6h21v21h6V27h21z"}))};c.displayName="IconAdd",c.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};var d=c;t.default=d},66272:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(a(67294)),n=l(a(99139));function l(e){return e&&e.__esModule?e:{default:e}}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},u.apply(this,arguments)}var c=function(e){var t=u({},e);return r.default.createElement(n.default,t,r.default.createElement("g",{"data-name":"48"},r.default.createElement("circle",{cx:"15",cy:"4.632",r:"3.5"}),r.default.createElement("circle",{cx:"15",cy:"17.443",r:"3.5"}),r.default.createElement("circle",{cx:"15",cy:"30.254",r:"3.5"}),r.default.createElement("circle",{cx:"15",cy:"43.066",r:"3.5"}),r.default.createElement("circle",{cx:"33",cy:"4.632",r:"3.5"}),r.default.createElement("circle",{cx:"33",cy:"17.544",r:"3.5"}),r.default.createElement("circle",{cx:"33",cy:"30.456",r:"3.5"}),r.default.createElement("circle",{cx:"33",cy:"43.368",r:"3.5"})))};c.displayName="IconKnurling",c.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};var d=c;t.default=d}}]);