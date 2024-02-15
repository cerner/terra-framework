"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[53500],{73836:function(e,t,a){var l=a(22411);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(11504)),d=l(a(74824)),u=l(a(3268)),r=l(a(57960)),f=d.default.bind(r.default),o={isLabelHidden:u.default.bool,label:u.default.string,children:u.default.node,id:u.default.string},i=function(e){var t=e.isLabelHidden,a=e.label,l=e.id,d=e.children;return n.default.createElement("div",{className:f("tab-content"),id:l},t?n.default.createElement("h3",{className:"truncationHeader"},a):null,d||n.default.createElement("div",null,"Content for"," ",n.default.createElement("i",null,a)))};i.propTypes=o;t.default=i},51712:function(e,t,a){var l=a(22411);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(94064)),d=l(a(66024)),u=l(a(96284)),r=l(a(63532)),f=l(a(71559)),o=l(a(54216)),i=l(a(11504)),c=l(a(36408));function b(e,t,a){return t=(0,r.default)(t),(0,u.default)(e,s()?Reflect.construct(t,a||[],(0,r.default)(e).constructor):t.apply(e,a))}function s(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(s=function(){return!!e})()}var m=function(e){function t(e){var a;return(0,n.default)(this,t),(a=b(this,t,[e])).handleOnButtonClick=a.handleOnButtonClick.bind((0,f.default)(a)),a.state={containerClassName:"content-wrapper"},a}return(0,o.default)(t,e),(0,d.default)(t,[{key:"handleOnButtonClick",value:function(){this.setState({containerClassName:"content-wrapper-600"})}},{key:"render",value:function(){return i.default.createElement("div",{id:"responsiveToParent"},i.default.createElement("button",{type:"button",onClick:this.handleOnButtonClick},"Set Container Width to 600 px"),i.default.createElement(c.default,{containerClassName:this.state.containerClassName}))}}]),t}(i.default.Component);t.default=m},36408:function(e,t,a){var l=a(22411);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(11504)),d=l(a(74824)),u=l(a(3268)),r=l(a(98528)),f=l(a(73836)),o=l(a(57960)),i=d.default.bind(o.default),c={id:u.default.string,containerClassName:u.default.string},b=function(e){return n.default.createElement("div",{className:i(e.containerClassName),id:"tabs-container"},n.default.createElement(r.default,{setFocusOnContent:!0,id:e.id},n.default.createElement(r.default.Pane,{label:"Tab 1",key:"Tab1",id:"tab1"},n.default.createElement(f.default,{label:"Tab 1",id:"tab1Content"})),n.default.createElement(r.default.Pane,{label:"Tab 2",key:"Tab2",id:"tab2"},n.default.createElement(f.default,{label:"Tab 2",id:"tab2Content"})),n.default.createElement(r.default.Pane,{label:"Disabled Tab",key:"disabled",id:"disabled",isDisabled:!0}),n.default.createElement(r.default.Pane,{label:"Tab 4",key:"Tab4",id:"tab4"},n.default.createElement(f.default,{label:"Tab 4",id:"tab4Content"})),n.default.createElement(r.default.Pane,{label:"Tab 5",key:"Tab5",id:"tab5"},n.default.createElement(f.default,{label:"Tab 5",id:"tab5Content"})),n.default.createElement(r.default.Pane,{label:"Tab 6",key:"Tab6",id:"tab6"},n.default.createElement(f.default,{label:"Tab 6",id:"tab6Content"})),n.default.createElement(r.default.Pane,{label:"Tab 7",key:"Tab7",id:"tab7"},n.default.createElement(f.default,{label:"Tab 7",id:"tab7Content"})),n.default.createElement(r.default.Pane,{label:"Tab 8 with longer text that should truncate",key:"Tab8",id:"tab8"},n.default.createElement(f.default,{label:"Tab 8",id:"tab8Content"})),n.default.createElement(r.default.Pane,{label:"Tab 9",key:"Tab9",id:"tab9"},n.default.createElement(f.default,{label:"Tab 9",id:"tab9Content"})),n.default.createElement(r.default.Pane,{label:"Tab 10",key:"Tab10",id:"tab10"},n.default.createElement(f.default,{label:"Tab 10",id:"tab10Content"})),n.default.createElement(r.default.Pane,{label:"Tab 11",key:"Tab11",id:"tab11"},n.default.createElement(f.default,{label:"Tab 11",id:"tab11Content"})),n.default.createElement(r.default.Pane,{label:"Tab 12",key:"Tab12",id:"tab12"},n.default.createElement(f.default,{label:"Tab 12",id:"tab12Content"}))))};b.propTypes=c,b.defaultProps={containerClassName:"content-wrapper-default"};t.default=b},57960:function(e,t,a){a.r(t),t.default={"content-wrapper-default":"TabsTemplate-module__content-wrapper-default___8tJaQ","content-wrapper-600":"TabsTemplate-module__content-wrapper-600___FFMST","content-wrapper-400":"TabsTemplate-module__content-wrapper-400___+UWwG","tab-content":"TabsTemplate-module__tab-content___oadEx","content-container-vertical":"TabsTemplate-module__content-container-vertical___LIDez","custom-display":"TabsTemplate-module__custom-display___7q4FS"}},94124:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=d(a(11504)),n=d(a(22728));function d(e){return e&&e.__esModule?e:{default:e}}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},u.apply(this,arguments)}var r=function(e){var t=u({},e);return l.default.createElement(n.default,t,l.default.createElement("path",{d:"M48 21H27V0h-6v21H0v6h21v21h6V27h21z"}))};r.displayName="IconAdd",r.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=r}}]);