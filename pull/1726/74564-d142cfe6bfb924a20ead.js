/*! For license information please see 74564-d142cfe6bfb924a20ead.js.LICENSE.txt */
(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[74564],{74564:function(e,t,n){"use strict";var a=n(64836),l=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(56690)),r=a(n(89728)),o=a(n(66115)),s=a(n(61655)),u=a(n(94993)),c=a(n(73808)),d=a(n(27424)),f=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var n=h(t);if(n&&n.has(e))return n.get(e);var a={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var o=i?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(a,r,o):a[r]=e[r]}a.default=e,n&&n.set(e,a);return a}(n(67294)),p=a(n(47166)),m=a(n(27662)),_=a(n(69967));function h(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(h=function(e){return e?n:t})(e)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,c.default)(e);if(t){var l=(0,c.default)(this).constructor;n=Reflect.construct(a,arguments,l)}else n=a.apply(this,arguments);return(0,u.default)(this,n)}}var y=p.default.bind(_.default),b=function(){var e=(0,f.useState)(0),t=(0,d.default)(e,2),n=t[0],a=t[1];return f.default.createElement("div",{id:"panel-content",className:y("panel-content")},f.default.createElement("button",{id:"focus-button",type:"button",className:y("button"),onClick:function(){a(n+1)}},"Increase Count "),n)},g=function(e){(0,s.default)(n,e);var t=v(n);function n(e){var a;return(0,i.default)(this,n),(a=t.call(this,e)).state={panelHasStartPostion:!1},a.handlePanelToggle=a.handlePanelToggle.bind((0,o.default)(a)),a}return(0,r.default)(n,[{key:"handlePanelToggle",value:function(){this.setState((function(e){return{panelHasStartPostion:!e.panelHasStartPostion}}))}},{key:"render",value:function(){return f.default.createElement("div",{className:y("content-wrapper-toggle")},f.default.createElement(m.default,{id:"test-slide",mainContent:f.default.createElement("div",{className:y("main-content")},f.default.createElement("button",{type:"button",id:"test-toggle",className:y("button"),onClick:this.handlePanelToggle},"toggle")),panelContent:f.default.createElement(b,null),panelAriaLabel:"Panel content area",mainAriaLabel:"Main content area",panelSize:"small",panelBehavior:"squish",panelPosition:this.state.panelHasStartPostion?"start":"end",isOpen:!0,fill:!0}))}}]),n}(f.default.Component);t.default=g},27662:function(e,t,n){"use strict";var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.SlidePanelPositions=void 0;var l=a(n(10434)),i=a(n(70215)),r=a(n(56690)),o=a(n(89728)),s=a(n(66115)),u=a(n(61655)),c=a(n(94993)),d=a(n(73808)),f=a(n(67294)),p=a(n(45697)),m=a(n(94184)),_=a(n(47166)),h=a(n(47341)),v=a(n(23870)),y=n(25387),b=n(55877),g=a(n(1034)),P=["intl","isFullscreen","isOpen","fill","mainAriaLabel","mainContent","panelAriaLabel","panelContent","panelBehavior","panelPosition","panelSize","setSlidePanelRef"];function O(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,d.default)(e);if(t){var l=(0,d.default)(this).constructor;n=Reflect.construct(a,arguments,l)}else n=a.apply(this,arguments);return(0,c.default)(this,n)}}var S=_.default.bind(g.default),C={START:"start",END:"end"};t.SlidePanelPositions=C;var k={panelAriaLabel:p.default.string,mainAriaLabel:p.default.string,mainContent:p.default.node,panelContent:p.default.node,panelBehavior:p.default.oneOf(["overlay","squish"]),panelPosition:p.default.oneOf(["start","end"]),panelSize:p.default.oneOf(["small","large"]),isFullscreen:p.default.bool,isOpen:p.default.bool,fill:p.default.bool,setSlidePanelRef:p.default.func,intl:p.default.shape({formatMessage:p.default.func,locale:p.default.string})},N={panelBehavior:"overlay",panelPosition:C.END,panelSize:"small"},x=function(e){(0,u.default)(n,e);var t=O(n);function n(e){var a;return(0,r.default)(this,n),(a=t.call(this,e)).setPanelNode=a.setPanelNode.bind((0,s.default)(a)),a.mainNode=f.default.createRef(),a.setLastClicked=a.setLastClicked.bind((0,s.default)(a)),a.setDisclosingNode=a.setDisclosingNode.bind((0,s.default)(a)),a.mainAriaDescribedByID="detail-panel-warning-".concat((0,b.v4)()),a}return(0,o.default)(n,[{key:"componentDidUpdate",value:function(e){if(this.props.isOpen&&this.props.isOpen!==e.isOpen)return this.setDisclosingNode(this.lastClicked),void this.panelNode.focus();if(!this.props.isOpen&&this.props.isOpen!==e.isOpen){var t;if(null!==(t=this.disclosingNode)&&void 0!==t&&t.focus)return this.disclosingNode.setAttribute("aria-expanded","false"),void this.disclosingNode.focus();this.mainNode.current.focus()}}},{key:"setPanelNode",value:function(e){this.props.setSlidePanelRef&&this.props.setSlidePanelRef(e),this.panelNode=e}},{key:"setLastClicked",value:function(e){this.lastClicked=e.target}},{key:"setDisclosingNode",value:function(e){e&&(e.setAttribute("aria-expanded","true"),this.disclosingNode=e)}},{key:"render",value:function(){var e=this.props,t=e.intl,n=e.isFullscreen,a=e.isOpen,r=e.fill,o=e.mainAriaLabel,s=e.mainContent,u=e.panelAriaLabel,c=e.panelContent,d=e.panelBehavior,p=e.panelPosition,_=e.panelSize,h=(e.setSlidePanelRef,(0,i.default)(e,P)),y=this.context,b=(0,m.default)(S("slide-panel",{"is-open":a},{"is-fullscreen":n},{fill:r},y.className),h.className),g=f.default.createElement("div",{className:S(["panel"]),key:"panel",tabIndex:"-1","aria-label":u||t.formatMessage({id:"Terra.slidePanel.defaultPanelLabel"}),"aria-hidden":a?"false":"true",role:"region",ref:this.setPanelNode},c),O=f.default.createElement("div",{className:S("main"),key:"main",tabIndex:"-1","aria-label":o,"aria-describedby":this.mainAriaDescribedByID,"aria-hidden":a&&n?"true":"false",ref:this.mainNode,role:"main",onClick:this.setLastClicked,onKeyUp:this.setLastClicked},f.default.createElement(v.default,{tabIndex:"-1",id:this.mainAriaDescribedByID,text:t.formatMessage({id:"Terra.slidePanel.discloseWarning"})}),s),k=p===C.START?f.default.createElement(f.default.Fragment,null,g,O):f.default.createElement(f.default.Fragment,null,O,g);return f.default.createElement("div",(0,l.default)({},h,{className:b,"data-slide-panel-panel-behavior":d,"data-slide-panel-panel-position":p,"data-slide-panel-panel-size":_}),k)}}]),n}(f.default.Component);x.propTypes=k,x.defaultProps=N,x.contextType=h.default;var w=(0,y.injectIntl)(x);t.default=w},69967:function(e,t,n){"use strict";n.r(t),t.default={"content-wrapper":"SlidePanelDocCommon-test-module__content-wrapper___+5Bqw","content-wrapper-large":"SlidePanelDocCommon-test-module__content-wrapper-large___4O5B9","main-content":"SlidePanelDocCommon-test-module__main-content___KgtfP","panel-content":"SlidePanelDocCommon-test-module__panel-content___mRK+i","content-wrapper-toggle":"SlidePanelDocCommon-test-module__content-wrapper-toggle___eOcKz",button:"SlidePanelDocCommon-test-module__button___hxSzl","circle-svg":"SlidePanelDocCommon-test-module__circle-svg___BFboR","p-clickable":"SlidePanelDocCommon-test-module__p-clickable___yicz1"}},1034:function(e,t,n){"use strict";n.r(t),t.default={"clinical-lowlight-theme":"SlidePanel-module__clinical-lowlight-theme___NdNQF","orion-fusion-theme":"SlidePanel-module__orion-fusion-theme___aBPYu","slide-panel":"SlidePanel-module__slide-panel___5vKEK",main:"SlidePanel-module__main___Jq40y",panel:"SlidePanel-module__panel___N9gHx","is-open":"SlidePanel-module__is-open___SU3q3","is-fullscreen":"SlidePanel-module__is-fullscreen___0BQTN",fill:"SlidePanel-module__fill___vHC0f"}},75346:function(e,t,n){"use strict";n.r(t),t.default={"visually-hidden-text":"VisuallyHiddenText-module__visually-hidden-text___lA9vx"}},23870:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=s(n(67294)),l=s(n(65218)),i=s(n(37968)),r=s(n(75346)),o=["refCallback","text"];function s(e){return e&&e.__esModule?e:{default:e}}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},u.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d=i.default.bind(r.default),f={refCallback:l.default.func,text:l.default.string},p={text:void 0,refCallback:void 0},m=function(e){var t=e.refCallback,n=e.text,l=c(e,o),i=d(["visually-hidden-text",l.className]);return a.default.createElement("span",u({ref:t},l,{className:i}),n)};m.propTypes=f,m.defaultProps=p;var _=m;t.default=_},37968:function(e,t){var n;!function(){"use strict";var a={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(this&&this[n]||n);else if(Array.isArray(n))e.push(l.apply(this,n));else if("object"===i){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var r in n)a.call(n,r)&&n[r]&&e.push(this&&this[r]||r)}}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0===(n=function(){return l}.apply(t,[]))||(e.exports=n)}()},72399:function(e,t,n){"use strict";var a=n(672);function l(){}function i(){}i.resetWarningCache=l,e.exports=function(){function e(e,t,n,l,i,r){if(r!==a){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:l};return n.PropTypes=n,n}},65218:function(e,t,n){e.exports=n(72399)()},672:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);