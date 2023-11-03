"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[11632],{11632:function(e,t,u){var i=u(64836),l=u(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var u=w(t);if(u&&u.has(e))return u.get(e);var i={__proto__:null},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var r=n?Object.getOwnPropertyDescriptor(e,a):null;r&&(r.get||r.set)?Object.defineProperty(i,a,r):i[a]=e[a]}return i.default=e,u&&u.set(e,i),i}(u(67294)),a=i(u(45697)),r=u(25387),d=i(u(47166)),o=i(u(47341)),m=i(u(22031)),f=i(u(75083)),c=i(u(73483)),s=i(u(93897)),h=u(69025),p=u(34711);function w(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,u=new WeakMap;return(w=function(e){return e?u:t})(e)}var _=d.default.bind(m.default),W={id:a.default.string.isRequired,ariaLabelledBy:a.default.string,ariaLabel:a.default.string,columns:a.default.arrayOf(s.default),rows:a.default.arrayOf(f.default),numberOfColumns:a.default.number,width:a.default.string,minimumWidth:a.default.number,maximumWidth:a.default.number,columnMinimumWidth:a.default.number,columnMaximumWidth:a.default.number,widthValue:a.default.oneOf([h.WidthValueTypes.PX,h.WidthValueTypes.EM,h.WidthValueTypes.REM])},M={rows:[],numberOfColumns:1,width:"100%",widthValue:h.WidthValueTypes.PX},b=function(e){var t=e.id,u=e.ariaLabelledBy,i=e.ariaLabel,l=e.columns,a=e.rows,r=e.numberOfColumns,d=e.width,m=e.widthValue,f=e.minimumWidth,s=e.maximumWidth,w=e.columnMinimumWidth,W=e.columnMaximumWidth,M=(0,n.useContext)(o.default),b=f||h.DefaultListValues.minimumWidth[m],v=s||h.DefaultListValues.maximumWidth[m],y=w||h.DefaultListValues.columnMinimumWidth[m],x=W||h.DefaultListValues.columnMaximumWidth[m],O=(0,p.checkIfRowHasFlexColumns)(l),g=O?(0,p.getRowMaximumWidth)(l,x):null,P=O?(0,p.getRowMinimumWidth)(l,y):null,j=(0,p.getListMaximumWidth)(O,r,g,v),V=(0,p.getListMinimumWidth)(O,r,P,b),C=!O&&l.reduce((function(e,t){return e+t.width}),0),R="".concat(C*r).concat(m),k={width:O?d:R,minWidth:"".concat(V).concat(m),maxWidth:"".concat(j).concat(m)};return n.default.createElement("div",{className:_("compact-interactive-list-container",M.className),tabIndex:0},n.default.createElement("div",{id:t,role:"grid","aria-labelledby":u,"aria-label":i,className:_("compact-interactive-list"),style:k},a.map((function(e,t){return n.default.createElement(c.default,{rowIndex:t+1,key:e.id,id:e.id,cells:e.cells,ariaLabel:e.ariaLabel,columns:l,columnMinimumWidth:y,columnMaximumWidth:W,numberOfColumns:r,rowWidth:C,isFlexGrow:O,rowMaximumWidth:g,rowMinimumWidth:P,widthValue:m})}))))};b.propTypes=W,b.defaultProps=M;t.default=(0,r.injectIntl)(b)},77018:function(e,t,u){var i=u(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=i(u(45697)),n=l.default.shape({id:l.default.string.isRequired,content:l.default.node});t.default=n},93897:function(e,t,u){var i=u(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=i(u(45697)),n=l.default.shape({id:l.default.string.isRequired,displayName:l.default.string,width:l.default.number,maximumWidth:l.default.number,flexGrow:l.default.boolean});t.default=n},75083:function(e,t,u){var i=u(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=i(u(45697)),n=i(u(77018)),a=l.default.shape({id:l.default.string.isRequired,cells:l.default.arrayOf(n.default)});t.default=a},57184:function(e,t,u){var i=u(64836),l=u(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var u=s(t);if(u&&u.has(e))return u.get(e);var i={__proto__:null},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var r=n?Object.getOwnPropertyDescriptor(e,a):null;r&&(r.get||r.set)?Object.defineProperty(i,a,r):i[a]=e[a]}return i.default=e,u&&u.set(e,i),i}(u(67294)),a=i(u(45697)),r=i(u(47166)),d=i(u(47341)),o=u(34711),m=i(u(93897)),f=u(69025),c=i(u(24794));function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,u=new WeakMap;return(s=function(e){return e?u:t})(e)}var h=r.default.bind(c.default),p={id:a.default.string.isRequired,children:a.default.node,column:a.default.instanceOf(m.default),columnMinimumWidth:a.default.number,columnMaximumWidth:a.default.number,widthValue:a.default.oneOf([f.WidthValueTypes.PX,f.WidthValueTypes.EM,f.WidthValueTypes.REM])},w=function(e){var t=e.id,u=e.children,i=e.column,l=e.columnMinimumWidth,a=e.columnMaximumWidth,r=e.widthValue,m=(0,n.useContext)(d.default),f=h("cell",m.className),c=i.width,s=i.flexGrow,p=i.alignToCenter,w=i.maximumWidth,_=(0,o.checkIfColumnIsFlex)(s,c),W=w||a,M={flex:_?"1 1 ".concat(c||l).concat(r):null,width:_?null:"".concat(c).concat(r),justifyContent:"".concat(p?"center":"left"),maxWidth:_&&W?"".concat(W).concat(r):null};return n.default.createElement("div",{id:t,role:"gridcell",className:f,tabIndex:-1,style:M},u)};w.propTypes=p;t.default=n.default.memo(w)},73483:function(e,t,u){var i=u(64836),l=u(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var u=h(t);if(u&&u.has(e))return u.get(e);var i={__proto__:null},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var r=n?Object.getOwnPropertyDescriptor(e,a):null;r&&(r.get||r.set)?Object.defineProperty(i,a,r):i[a]=e[a]}return i.default=e,u&&u.set(e,i),i}(u(67294)),a=i(u(45697)),r=i(u(47341)),d=i(u(47166)),o=i(u(9656)),m=i(u(57184)),f=i(u(77018)),c=i(u(93897)),s=u(69025);function h(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,u=new WeakMap;return(h=function(e){return e?u:t})(e)}var p=d.default.bind(o.default),w={id:a.default.string.isRequired,cells:a.default.arrayOf(f.default),columns:a.default.arrayOf(c.default),columnMinimumWidth:a.default.number,columnMaximumWidth:a.default.number,numberOfColumns:a.default.number,isFlexGrow:a.default.bool,rowWidth:a.default.number,rowMaximumWidth:a.default.number,rowMinimumWidth:a.default.number,widthValue:a.default.oneOf([s.WidthValueTypes.PX,s.WidthValueTypes.EM,s.WidthValueTypes.REM])},_=function(e){var t=e.id,u=e.cells,i=e.columns,l=e.columnMinimumWidth,a=e.columnMaximumWidth,d=e.numberOfColumns,o=e.isFlexGrow,f=e.rowMaximumWidth,c=e.rowMinimumWidth,s=e.rowWidth,h=e.widthValue,w=(0,n.useContext)(r.default),_=o?{flex:"1 1 ".concat(Math.min(100/d),"%"),maxWidth:f?"".concat(f).concat(h):null,minWidth:c?"".concat(c).concat(h):null}:{width:"".concat(s).concat(h)};return n.default.createElement("div",{id:t,role:"row",className:p("row",w.className),style:_},u.map((function(e,t){return n.default.createElement(m.default,{key:e.id,column:i[t],columnMinimumWidth:l,columnMaximumWidth:a,widthValue:h},e.content)})))};_.propTypes=w;t.default=n.default.memo(_)},69025:function(e,t,u){var i=u(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.WidthValueTypes=t.DefaultListValues=void 0;var l,n,a,r,d=i(u(38416)),o=t.WidthValueTypes={PX:"px",EM:"em",REM:"rem"};t.DefaultListValues={columnMinimumWidth:(l={},(0,d.default)(l,o.PX,60),(0,d.default)(l,o.EM,10),(0,d.default)(l,o.REM,10),l),minimumWidth:(n={},(0,d.default)(n,o.PX,500),(0,d.default)(n,o.EM,50),(0,d.default)(n,o.REM,50),n),columnMaximumWidth:(a={},(0,d.default)(a,o.PX,1e3),(0,d.default)(a,o.EM,100),(0,d.default)(a,o.REM,100),a),maximumWidth:(r={},(0,d.default)(r,o.PX,5e3),(0,d.default)(r,o.EM,500),(0,d.default)(r,o.REM,500),r)}},34711:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.getRowMinimumWidth=t.getRowMaximumWidth=t.getListMinimumWidth=t.getListMaximumWidth=t.checkIfRowHasFlexColumns=t.checkIfColumnIsFlex=void 0;var u=t.checkIfColumnIsFlex=function(e,t){return e||!(t&&"number"==typeof t)},i=function(e,t){return e||u(t.flexGrow,t.width)};t.checkIfRowHasFlexColumns=function(e){return e.reduce(i,!1)},t.getRowMaximumWidth=function(e,t){for(var i=!1,l=0,n=0;n<e.length;n+=1)if(u(e[n].flexGrow,e[n].width)){if(i=!0,!e[n].maximumWidth&&!t)return null;l+=e[n].maximumWidth||t}else{if(!e[n].width)return null;l+=e[n].width}return i?l:null},t.getRowMinimumWidth=function(e,t){for(var i=!1,l=0,n=0;n<e.length;n+=1)if(u(e[n].flexGrow,e[n].width)){if(i=!0,!e[n].minimumWidth&&!t)return null;l+=e[n].minimumWidth||t}else{if(!e[n].width)return null;l+=e[n].width}return i?l:null},t.getListMaximumWidth=function(e,t,u,i){return e&&u?Math.min(u*t,i):i||null},t.getListMinimumWidth=function(e,t,u,i){return e&&u?Math.max(u*t,i):i||null}},22031:function(e,t,u){u.r(t),t.default={"clinical-lowlight-theme":"CompactInteractiveList-module__clinical-lowlight-theme___DFfiU","orion-fusion-theme":"CompactInteractiveList-module__orion-fusion-theme___btGus","compact-interactive-list-container":"CompactInteractiveList-module__compact-interactive-list-container___4CKB8","compact-interactive-list":"CompactInteractiveList-module__compact-interactive-list___6V8b0"}},24794:function(e,t,u){u.r(t),t.default={"orion-fusion-theme":"Cell-module__orion-fusion-theme___uo8WT","clinical-lowlight-theme":"Cell-module__clinical-lowlight-theme___kP6Ic",cell:"Cell-module__cell___nK0EW"}},9656:function(e,t,u){u.r(t),t.default={"orion-fusion-theme":"Row-module__orion-fusion-theme___XaSgO","clinical-lowlight-theme":"Row-module__clinical-lowlight-theme___g9xrM",row:"Row-module__row___unLq8"}}}]);