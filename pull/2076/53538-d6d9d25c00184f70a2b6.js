"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[53538],{53538:function(e,t,a){var n=a(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(43693)),u=n(a(17383)),r=n(a(34579)),o=n(a(28452)),c=n(a(63072)),d=n(a(12475)),f=n(a(29511)),m=n(a(96540)),h=n(a(61641)),i=n(a(18454));function s(e,t,a){return t=(0,c.default)(t),(0,o.default)(e,v()?Reflect.construct(t,a||[],(0,c.default)(e).constructor):t.apply(e,a))}function v(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(v=function(){return!!e})()}var p=function(e){function t(e){var a;return(0,u.default)(this,t),(a=s(this,t,[e])).state={themeName:""},a.handleSelectChange=a.handleSelectChange.bind((0,d.default)(a)),a}return(0,f.default)(t,e),(0,r.default)(t,[{key:"handleSelectChange",value:function(e){this.setState((0,l.default)({},e.target.name,e.target.value))}},{key:"render",value:function(){return m.default.createElement("div",null,m.default.createElement("form",null,m.default.createElement("label",{htmlFor:"theme"},"Theme Switcher"),m.default.createElement("select",{id:"theme",name:"themeName",value:this.state.themeName,onChange:this.handleSelectChange},m.default.createElement("option",{value:""},"Default Theme"),m.default.createElement("option",{value:"cerner-mock-theme"},"Mock Theme"))),m.default.createElement(h.default,{id:"themeProvider",themeName:this.state.themeName},m.default.createElement(i.default,{id:"themedComponent"},"Theme Provider Test")))}}]),t}(m.default.Component);t.default=p},18454:function(e,t,a){var n=a(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(94634)),u=n(a(91847)),r=n(a(96540)),o=n(a(5556)),c=n(a(67967));a(50046);var d=n(a(10867)),f=["children"],m=c.default.bind(d.default),h={children:o.default.node.isRequired},i=function(e){var t=e.children,a=(0,u.default)(e,f);return r.default.createElement("div",(0,l.default)({},a,{className:m("mock-theme-component",a.className)}),t)};i.propTypes=h;t.default=i},10867:function(e,t,a){a.r(t),t.default={"mock-theme-component":"MockThemeComponent-module__mock-theme-component___iuvBt"}},50046:function(e,t,a){a.r(t),t.default={}}}]);