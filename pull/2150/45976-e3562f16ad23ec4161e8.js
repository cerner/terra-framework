"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[45976],{17652:function(e,t,a){var l=a(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=l(a(94634)),o=l(a(91847)),n=l(a(96540)),d=l(a(5556)),u=l(a(46942)),r=l(a(67967)),s=l(a(23695)),_=a(8604),f=l(a(68301)),c=["extensions","logo","navigation","intl","toggle","utilities"],m=r.default.bind(f.default),p={extensions:d.default.element,logo:d.default.element,intl:d.default.shape({formatMessage:d.default.func}).isRequired,navigation:d.default.element,toggle:d.default.element,utilities:d.default.element},g=function(e){var t,a,l,d,r,_=e.extensions,f=e.logo,p=e.navigation,g=e.intl,v=e.toggle,y=e.utilities,h=(0,o.default)(e,c),A=n.default.useContext(s.default),H=(0,u.default)(m("header","fill",A.className),h.className);f&&(t=n.default.createElement("div",{className:m("fit","start","logo")},f)),p&&(a=n.default.createElement("nav",{role:"navigation",className:m("fill")},p)),_&&(l=n.default.createElement("div",{className:m("fit","end","extensions")},_)),y&&(d=n.default.createElement("div",{className:m("fit","end","utilities")},y)),v&&(r=n.default.createElement("div",{className:m("fit")},v));var L,b=n.default.createElement("div",{className:m("fill","header-inner")},a,l),E=n.default.createElement("button",{type:"button",onClick:function(){var e=document.querySelector(["[data-terra-layout-main]"]);e&&e.focus()},className:m("skip-content")},g.formatMessage({id:"Terra.ApplicationHeaderLayout.SkipToContent"}));return(b||t||d)&&(L=n.default.createElement("div",{className:m("fill","header-body")},t,b,d)),n.default.createElement("div",(0,i.default)({},h,{className:H}),E,r,L)};g.propTypes=p;t.default=(0,_.injectIntl)(g)},45976:function(e,t,a){var l=a(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=l(a(96540)),o=l(a(67967)),n=l(a(17652)),d=l(a(1712)),u=o.default.bind(d.default);t.default=function(){return i.default.createElement(n.default,{id:"test-header",className:u("test-header-layout"),logo:i.default.createElement("div",{id:"test-logo"},"Logo "),utilities:i.default.createElement("div",{id:"test-utilities"},"Utilities ")})}},68301:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"ApplicationHeaderLayout-module__clinical-lowlight-theme___-1bgb","orion-fusion-theme":"ApplicationHeaderLayout-module__orion-fusion-theme___ENqi+",fit:"ApplicationHeaderLayout-module__fit___KL7Uq",fill:"ApplicationHeaderLayout-module__fill___PAPf7",start:"ApplicationHeaderLayout-module__start___MX918",end:"ApplicationHeaderLayout-module__end___BgrVv","header-inner":"ApplicationHeaderLayout-module__header-inner___hLyff",logo:"ApplicationHeaderLayout-module__logo___Wzf7u",utilities:"ApplicationHeaderLayout-module__utilities___bkZso",extensions:"ApplicationHeaderLayout-module__extensions___85n-7","header-body":"ApplicationHeaderLayout-module__header-body___HLbvX","skip-content":"ApplicationHeaderLayout-module__skip-content___8eF4z"}},1712:function(e,t,a){a.r(t),t.default={"test-header-layout":"ApplicationHeaderDefault-test-module__test-header-layout___b8cvG","test-navigation":"ApplicationHeaderDefault-test-module__test-navigation___hA0d-","test-toggle":"ApplicationHeaderDefault-test-module__test-toggle___Awr4I"}}}]);