"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[71066],{71066:function(e,a,t){var l=t(64836);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=l(t(67294)),d=l(t(47166)),r=l(t(45697)),u=l(t(76414)),f=l(t(50826)),i=l(t(66815)),c=l(t(82967)),o=d.default.bind(c.default),b={id:r.default.string,containerClassName:r.default.string},s=function(e){return n.default.createElement("div",{className:o(e.containerClassName),id:"tabs-container"},n.default.createElement(u.default,{id:e.id,onSelectAddButton:function(){return alert("hi")},ariaLabelAddTab:"Add Tab"},n.default.createElement(u.default.Pane,{label:"Tab 1",key:"Tab1",id:"tab1"},n.default.createElement(i.default,{label:"Tab 1",id:"tab1Content"})),n.default.createElement(u.default.Pane,{label:"Tab 2",key:"Tab2",id:"tab2"},n.default.createElement(i.default,{label:"Tab 2",id:"tab2Content"})),n.default.createElement(u.default.Pane,{label:"Disabled Tab",key:"disabled",id:"disabled",isDisabled:!0}),n.default.createElement(u.default.Pane,{label:"Search",icon:n.default.createElement(f.default,null),isIconOnly:!0,key:"Search",id:"search"},n.default.createElement(i.default,{label:"Search",id:"searchContent"}))))};s.propTypes=b,s.defaultProps={containerClassName:"content-wrapper-default"};var p=s;a.default=p},66815:function(e,a,t){var l=t(64836);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=l(t(67294)),d=l(t(47166)),r=l(t(45697)),u=l(t(82967)),f=d.default.bind(u.default),i={isLabelHidden:r.default.bool,label:r.default.string,id:r.default.string},c=function(e){var a=e.isLabelHidden,t=e.label,l=e.id;return n.default.createElement("div",{className:f("tab-content"),id:l},a?n.default.createElement("h3",{className:"truncationHeader"},t):null,"Content for"," ",n.default.createElement("i",null,t))};c.propTypes=i;var o=c;a.default=o},82967:function(e,a,t){t.r(a),a.default={"content-wrapper-default":"TabsTemplate-module__content-wrapper-default___8tJaQ","content-wrapper-600":"TabsTemplate-module__content-wrapper-600___FFMST","content-wrapper-400":"TabsTemplate-module__content-wrapper-400___+UWwG","tab-content":"TabsTemplate-module__tab-content___oadEx"}}}]);