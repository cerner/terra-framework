"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[29735],{29735:function(e,t,a){var n=a(64836),l=a(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(56690)),r=n(a(89728)),u=n(a(61655)),i=n(a(94993)),p=n(a(73808)),c=n(a(67294)),s=n(a(45697)),f=a(39711),d=a(25387),m=n(a(86442)),g=n(a(70362)),y=n(a(10027)),h=n(a(55281)),_=n(a(2396)),b=n(a(94809)),v=n(a(50826)),E=n(a(87491)),P=n(a(56657)),x=n(a(41623)),k=n(a(34540)),C=n(a(47166)),U=n(a(87262)),I=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var a=M(t);if(a&&a.has(e))return a.get(e);var n={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var u=o?Object.getOwnPropertyDescriptor(e,r):null;u&&(u.get||u.set)?Object.defineProperty(n,r,u):n[r]=e[r]}return n.default=e,a&&a.set(e,n),n}(a(18428));function M(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(M=function(e){return e?a:t})(e)}function O(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=(0,p.default)(e);if(t){var l=(0,p.default)(this).constructor;a=Reflect.construct(n,arguments,l)}else a=n.apply(this,arguments);return(0,i.default)(this,a)}}var N=C.default.bind(U.default),w=function(e){var t=e.contentName;return c.default.createElement("div",null,"Page Content:"," ",t)};w.propTypes={contentName:s.default.string};var K=function(){return c.default.createElement(h.default,{text:"Extensions"})},R={menu:{"/page_1":{path:"/page_1",component:{default:{componentClass:I.RoutingMenu,props:{title:"Page 1 Menu",menuItems:[{text:"Item 1",path:"/page_1/item_1",hasSubMenu:!0},{text:"Item 2",path:"/page_1/item_2"}]}}}},"/page_1/item_1":{path:"/page_1/item_1",component:{default:{componentClass:I.RoutingMenu,props:{title:"Page 1 Item 1 Menu",menuItems:[{text:"Thing 1",path:"/page_1/item_1/thing_1"},{text:"Thing 2",path:"/page_1/item_1/thing_2"}]}}}}},content:{"/page_1":{path:"/page_1",component:{default:{componentClass:w,props:{contentName:"Page 1"}}}},"/page_2":{path:"/page_2",component:{default:{componentClass:w,props:{contentName:"Page 2"}}}},"/page_3":{path:"/page_3",component:{default:{componentClass:w,props:{contentName:"Page 3"}}}},"/page_4":{path:"/page_4",component:{default:{componentClass:w,props:{contentName:"Page 4"}}}},"/page_5":{path:"/page_5",component:{default:{componentClass:w,props:{contentName:"Page 5"}}}},"/page_6":{path:"/page_6",component:{default:{componentClass:w,props:{contentName:"Page 6"}}}},"/page_7":{path:"/page_7",component:{default:{componentClass:w,props:{contentName:"Page 7"}}}}}},j=[{path:"/page_1",text:"Page 1",icon:c.default.createElement(_.default,null)},{path:"/page_2",text:"Page 2",icon:c.default.createElement(b.default,null)},{path:"/page_3",text:"Page 3",icon:c.default.createElement(v.default,null)},{path:"/page_4",text:"Page 4",icon:c.default.createElement(E.default,null)},{path:"/page_5",text:"Page 5",icon:c.default.createElement(P.default,null)},{path:"/page_6",text:"Page 6",icon:c.default.createElement(x.default,null)},{path:"/page_7",text:"Page 7",icon:c.default.createElement(k.default,null)}],T=c.default.createElement(g.default,{alt:"User, Test",initials:"TU",key:"user_avatar"}),H={name:"User, Test",detail:"User Detail",photo:T},S=Object.freeze({title:"Test Application",accessory:c.default.createElement(m.default,{variant:"rounded",src:"https://github.com/cerner/terra-framework/raw/main/terra.png",alt:"App logo",height:"26px",width:"26px"})}),A=function(e){(0,u.default)(a,e);var t=O(a);function a(e){var n;return(0,o.default)(this,a),(n=t.call(this,e)).state={checkboxItemEnabled:!1},n}return(0,r.default)(a,[{key:"render",value:function(){var e=this.props.intl,t=this.state.checkboxItemEnabled,a=[{key:"additional-1",title:"Drill-in Item",childKeys:["additional-sub-1","additional-sub-2"],parentKey:I.Utils.utilityHelpers.defaultKeys.MENU},{key:"additional-sub-1",title:"Additional Item 1 - Sub 1",parentKey:"additional-1"},{key:"additional-sub-2",title:"Additional Item 1 - Sub 2",parentKey:"additional-1"},{key:"checkbox-item",title:"Custom Checkbox Item",isSelectable:!0,isSelected:t,parentKey:I.Utils.utilityHelpers.defaultKeys.MENU},{key:"read-only-item",title:"Custom Read-Only Item",id:"readonly",isReadOnly:!0,parentKey:I.Utils.utilityHelpers.defaultKeys.MENU},{key:"additional-3",contentLocation:I.Utils.utilityHelpers.locations.FOOTER,title:"Custom Footer",parentKey:I.Utils.utilityHelpers.defaultKeys.MENU}],n=Object.freeze({title:"Test, User",accessory:T,menuItems:I.Utils.utilityHelpers.getDefaultUtilityItems(e,H,a),initialSelectedKey:I.Utils.utilityHelpers.defaultKeys.MENU,onChange:function(){}});return c.default.createElement(y.default,{fill:!0,id:"application-layout-test"},c.default.createElement(I.default,{nameConfig:S,utilityConfig:n,routingConfig:R,navigationItems:j,extensions:c.default.createElement(K,null),indexPath:"/page_1"}))}}]),a}(c.default.Component);A.propTypes={intl:s.default.shape({})};var D=(0,f.withRouter)((0,d.injectIntl)(A));t.default=function(){return c.default.createElement("div",{className:N("app-router")},c.default.createElement(f.MemoryRouter,null,c.default.createElement(D,null)))}},87262:function(e,t,a){a.r(t),t.default={"app-router":"ApplicationLayoutCommon-test-module__app-router___tIBx8"}}}]);