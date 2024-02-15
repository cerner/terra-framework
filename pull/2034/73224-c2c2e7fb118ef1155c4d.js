"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[73224],{73224:function(e,t,a){var n=a(22411),l=a(59848);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(94064)),u=n(a(66024)),r=n(a(96284)),i=n(a(63532)),p=n(a(54216)),c=n(a(11504)),s=n(a(3268)),d=a(62716),f=a(93627),m=n(a(18216)),g=n(a(4771)),_=n(a(87468)),y=n(a(58848)),h=n(a(83668)),b=n(a(78616)),E=n(a(69448)),P=n(a(86064)),v=n(a(76312)),k=n(a(47968)),x=n(a(62032)),C=n(a(74824)),U=n(a(43940)),I=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var a=M(t);if(a&&a.has(e))return a.get(e);var n={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var r=o?Object.getOwnPropertyDescriptor(e,u):null;r&&(r.get||r.set)?Object.defineProperty(n,u,r):n[u]=e[u]}return n.default=e,a&&a.set(e,n),n}(a(19504));function M(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(M=function(e){return e?a:t})(e)}function O(e,t,a){return t=(0,i.default)(t),(0,r.default)(e,N()?Reflect.construct(t,a||[],(0,i.default)(e).constructor):t.apply(e,a))}function N(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(N=function(){return!!e})()}var w=C.default.bind(U.default),K=function(e){var t=e.contentName;return c.default.createElement("div",null,"Page Content:"," ",t)};K.propTypes={contentName:s.default.string};var j=function(){return c.default.createElement(y.default,{text:"Extensions"})},T={menu:{"/page_1":{path:"/page_1",component:{default:{componentClass:I.RoutingMenu,props:{title:"Page 1 Menu",menuItems:[{text:"Item 1",path:"/page_1/item_1",hasSubMenu:!0},{text:"Item 2",path:"/page_1/item_2"}]}}}},"/page_1/item_1":{path:"/page_1/item_1",component:{default:{componentClass:I.RoutingMenu,props:{title:"Page 1 Item 1 Menu",menuItems:[{text:"Thing 1",path:"/page_1/item_1/thing_1"},{text:"Thing 2",path:"/page_1/item_1/thing_2"}]}}}}},content:{"/page_1":{path:"/page_1",component:{default:{componentClass:K,props:{contentName:"Page 1"}}}},"/page_2":{path:"/page_2",component:{default:{componentClass:K,props:{contentName:"Page 2"}}}},"/page_3":{path:"/page_3",component:{default:{componentClass:K,props:{contentName:"Page 3"}}}},"/page_4":{path:"/page_4",component:{default:{componentClass:K,props:{contentName:"Page 4"}}}},"/page_5":{path:"/page_5",component:{default:{componentClass:K,props:{contentName:"Page 5"}}}},"/page_6":{path:"/page_6",component:{default:{componentClass:K,props:{contentName:"Page 6"}}}},"/page_7":{path:"/page_7",component:{default:{componentClass:K,props:{contentName:"Page 7"}}}}}},R=[{path:"/page_1",text:"Page 1",icon:c.default.createElement(h.default,null)},{path:"/page_2",text:"Page 2",icon:c.default.createElement(b.default,null)},{path:"/page_3",text:"Page 3",icon:c.default.createElement(E.default,null)},{path:"/page_4",text:"Page 4",icon:c.default.createElement(P.default,null)},{path:"/page_5",text:"Page 5",icon:c.default.createElement(v.default,null)},{path:"/page_6",text:"Page 6",icon:c.default.createElement(k.default,null)},{path:"/page_7",text:"Page 7",icon:c.default.createElement(x.default,null)}],H=c.default.createElement(g.default,{alt:"User, Test",initials:"TU",key:"user_avatar"}),S={name:"User, Test",detail:"User Detail",photo:H},A=Object.freeze({title:"Test Application",accessory:c.default.createElement(m.default,{variant:"rounded",src:"https://github.com/cerner/terra-framework/raw/main/terra.png",alt:"App logo",height:"26px",width:"26px"})}),D=function(e){function t(e){var a;return(0,o.default)(this,t),(a=O(this,t,[e])).state={checkboxItemEnabled:!1},a}return(0,p.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props.intl,t=this.state.checkboxItemEnabled,a=[{key:"additional-1",title:"Drill-in Item",childKeys:["additional-sub-1","additional-sub-2"],parentKey:I.Utils.utilityHelpers.defaultKeys.MENU},{key:"additional-sub-1",title:"Additional Item 1 - Sub 1",parentKey:"additional-1"},{key:"additional-sub-2",title:"Additional Item 1 - Sub 2",parentKey:"additional-1"},{key:"checkbox-item",title:"Custom Checkbox Item",isSelectable:!0,isSelected:t,parentKey:I.Utils.utilityHelpers.defaultKeys.MENU},{key:"read-only-item",title:"Custom Read-Only Item",id:"readonly",isReadOnly:!0,parentKey:I.Utils.utilityHelpers.defaultKeys.MENU},{key:"additional-3",contentLocation:I.Utils.utilityHelpers.locations.FOOTER,title:"Custom Footer",parentKey:I.Utils.utilityHelpers.defaultKeys.MENU}],n=Object.freeze({title:"Test, User",accessory:H,menuItems:I.Utils.utilityHelpers.getDefaultUtilityItems(e,S,a),initialSelectedKey:I.Utils.utilityHelpers.defaultKeys.MENU,onChange:function(){}});return c.default.createElement(_.default,{fill:!0,id:"application-layout-test"},c.default.createElement(I.default,{nameConfig:A,utilityConfig:n,routingConfig:T,navigationItems:R,extensions:c.default.createElement(j,null),indexPath:"/page_1"}))}}]),t}(c.default.Component);D.propTypes={intl:s.default.shape({})};var B=(0,d.withRouter)((0,f.injectIntl)(D));t.default=function(){return c.default.createElement("div",{className:w("app-router")},c.default.createElement(d.MemoryRouter,null,c.default.createElement(B,null)))}},43940:function(e,t,a){a.r(t),t.default={"app-router":"ApplicationLayoutCommon-test-module__app-router___tIBx8"}}}]);