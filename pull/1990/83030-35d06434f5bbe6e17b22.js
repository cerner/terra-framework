"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[83030],{74725:function(e,t,u){var n=u(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(u(56690)),l=n(u(89728)),s=n(u(94993)),d=n(u(73808)),o=n(u(66115)),c=n(u(61655)),i=n(u(67294)),r=n(u(19845)),f=n(u(40338)),b=n(u(21096));function m(e,t,u){return t=(0,d.default)(t),(0,s.default)(e,h()?Reflect.construct(t,u||[],(0,d.default)(e).constructor):t.apply(e,u))}function h(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(h=function(){return!!e})()}var y=r.default.bind(b.default),k=function(e){function t(e){var u;return(0,a.default)(this,t),(u=m(this,t,[e])).handleOnChange=u.handleOnChange.bind((0,o.default)(u)),u.resetMenuState=u.resetMenuState.bind((0,o.default)(u)),u.fakeRoutingBack=u.fakeRoutingBack.bind((0,o.default)(u)),u.state={selectedMenuKey:"menu",selectedChildKey:void 0},u}return(0,c.default)(t,e),(0,l.default)(t,[{key:"handleOnChange",value:function(e,t){this.setState({selectedMenuKey:t.selectedMenuKey,selectedChildKey:t.selectedChildKey})}},{key:"resetMenuState",value:function(){this.setState({selectedMenuKey:"menu",selectedChildKey:void 0})}},{key:"fakeRoutingBack",value:function(){this.setState({selectedMenuKey:"fake-parent",selectedChildKey:void 0})}},{key:"render",value:function(){var e;return e="fake-parent"===this.state.selectedMenuKey?i.default.createElement("div",{className:y("content")},i.default.createElement("button",{type:"button",onClick:this.resetMenuState},"Child Route"),i.default.createElement("p",null,"Parent Route")):i.default.createElement(f.default,{id:"test-menu",menuItems:[{key:"menu",text:"Menu",childKeys:["submenu1","submenu2","submenu3","submenu4"],isRootMenu:!0},{key:"submenu1",text:"Sub Menu 1",childKeys:["subsubmenu1","subsubmenu2","subsubmenu3"],id:"test-item-1"},{key:"submenu2",text:"Sub Menu 2"},{key:"submenu3",text:"Sub Menu 3"},{key:"submenu4",text:"Sub Menu 4"},{key:"subsubmenu1",text:"Sub-Sub Menu 1",id:"test-item-2"},{key:"subsubmenu2",text:"Sub-Sub Menu 2"},{key:"subsubmenu3",text:"Sub-Sub Menu 3"}],onChange:this.handleOnChange,selectedMenuKey:this.state.selectedMenuKey,selectedChildKey:this.state.selectedChildKey}),i.default.createElement("div",{className:y("content-wrapper")},e)}}]),t}(i.default.Component);t.default=k},21096:function(e,t,u){u.r(t),t.default={content:"NavigationSideMenuDocCommon-module__content___gwhzn","content-wrapper":"NavigationSideMenuDocCommon-module__content-wrapper___hpAXZ",toolbar:"NavigationSideMenuDocCommon-module__toolbar___J8W+i"}}}]);