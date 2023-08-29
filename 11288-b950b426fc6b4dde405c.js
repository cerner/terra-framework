/*! For license information please see 11288-b950b426fc6b4dde405c.js.LICENSE.txt */
(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[11288],{11288:function(e,t,n){"use strict";var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(67294)),i=a(n(47166)),r=a(n(27662)),o=a(n(69967)),s=i.default.bind(o.default),d=function(){return l.default.createElement("div",{className:s("content-wrapper-large")},l.default.createElement(r.default,{mainContent:l.default.createElement("div",{className:s("main-content")}),panelContent:l.default.createElement("div",{className:s("panel-content")}),panelBehavior:"squish",panelSize:"large",isOpen:!0,fill:!0}))};t.default=d},27662:function(e,t,n){"use strict";var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.SlidePanelPositions=void 0;var l=a(n(10434)),i=a(n(70215)),r=a(n(56690)),o=a(n(89728)),s=a(n(66115)),d=a(n(61655)),u=a(n(94993)),c=a(n(73808)),f=a(n(67294)),p=a(n(45697)),m=a(n(94184)),_=a(n(47166)),h=a(n(47341)),v=a(n(23870)),b=n(25387),y=n(55877),g=a(n(1034)),P=["intl","isFullscreen","isOpen","fill","mainAriaLabel","mainContent","panelAriaLabel","panelContent","panelBehavior","panelPosition","panelSize","setSlidePanelRef"];function S(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,c.default)(e);if(t){var l=(0,c.default)(this).constructor;n=Reflect.construct(a,arguments,l)}else n=a.apply(this,arguments);return(0,u.default)(this,n)}}var O=_.default.bind(g.default),C={START:"start",END:"end"};t.SlidePanelPositions=C;var N={panelAriaLabel:p.default.string,mainAriaLabel:p.default.string,mainContent:p.default.node,panelContent:p.default.node,panelBehavior:p.default.oneOf(["overlay","squish"]),panelPosition:p.default.oneOf(["start","end"]),panelSize:p.default.oneOf(["small","large"]),isFullscreen:p.default.bool,isOpen:p.default.bool,fill:p.default.bool,setSlidePanelRef:p.default.func,intl:p.default.shape({formatMessage:p.default.func,locale:p.default.string})},k={panelBehavior:"overlay",panelPosition:C.END,panelSize:"small"},x=function(e){(0,d.default)(n,e);var t=S(n);function n(e){var a;return(0,r.default)(this,n),(a=t.call(this,e)).setPanelNode=a.setPanelNode.bind((0,s.default)(a)),a.mainNode=f.default.createRef(),a.setLastClicked=a.setLastClicked.bind((0,s.default)(a)),a.setDisclosingNode=a.setDisclosingNode.bind((0,s.default)(a)),a.mainAriaDescribedByID="detail-panel-warning-".concat((0,y.v4)()),a}return(0,o.default)(n,[{key:"componentDidUpdate",value:function(e){if(this.props.isOpen&&this.props.isOpen!==e.isOpen)return this.setDisclosingNode(this.lastClicked),void this.panelNode.focus();if(!this.props.isOpen&&this.props.isOpen!==e.isOpen){var t;if(null!==(t=this.disclosingNode)&&void 0!==t&&t.focus)return this.disclosingNode.setAttribute("aria-expanded","false"),void this.disclosingNode.focus();this.mainNode.current.focus()}}},{key:"setPanelNode",value:function(e){this.props.setSlidePanelRef&&this.props.setSlidePanelRef(e),this.panelNode=e}},{key:"setLastClicked",value:function(e){this.lastClicked=e.target}},{key:"setDisclosingNode",value:function(e){e&&(e.setAttribute("aria-expanded","true"),this.disclosingNode=e)}},{key:"render",value:function(){var e=this.props,t=e.intl,n=e.isFullscreen,a=e.isOpen,r=e.fill,o=e.mainAriaLabel,s=e.mainContent,d=e.panelAriaLabel,u=e.panelContent,c=e.panelBehavior,p=e.panelPosition,_=e.panelSize,h=(e.setSlidePanelRef,(0,i.default)(e,P)),b=this.context,y=(0,m.default)(O("slide-panel",{"is-open":a},{"is-fullscreen":n},{fill:r},b.className),h.className),g=f.default.createElement("div",{className:O(["panel"]),key:"panel",tabIndex:"-1","aria-label":d||t.formatMessage({id:"Terra.slidePanel.defaultPanelLabel"}),"aria-hidden":a?"false":"true",role:"region",ref:this.setPanelNode},f.default.createElement(v.default,{text:d||t.formatMessage({id:"Terra.slidePanel.defaultPanelLabel"})}),u),S=f.default.createElement("div",{className:O("main"),key:"main",tabIndex:"-1","aria-label":o,"aria-describedby":this.mainAriaDescribedByID,"aria-hidden":a&&n?"true":"false",ref:this.mainNode,role:"main",onClick:this.setLastClicked,onKeyUp:this.setLastClicked},f.default.createElement(v.default,{tabIndex:"-1",id:this.mainAriaDescribedByID,text:t.formatMessage({id:"Terra.slidePanel.discloseWarning"})}),s),N=p===C.START?f.default.createElement(f.default.Fragment,null,g,S):f.default.createElement(f.default.Fragment,null,S,g);return f.default.createElement("div",(0,l.default)({},h,{className:y,"data-slide-panel-panel-behavior":c,"data-slide-panel-panel-position":p,"data-slide-panel-panel-size":_}),N)}}]),n}(f.default.Component);x.propTypes=N,x.defaultProps=k,x.contextType=h.default;var D=(0,b.injectIntl)(x);t.default=D},69967:function(e,t,n){"use strict";n.r(t),t.default={"content-wrapper":"SlidePanelDocCommon-test-module__content-wrapper___+5Bqw","content-wrapper-large":"SlidePanelDocCommon-test-module__content-wrapper-large___4O5B9","main-content":"SlidePanelDocCommon-test-module__main-content___KgtfP","panel-content":"SlidePanelDocCommon-test-module__panel-content___mRK+i","content-wrapper-toggle":"SlidePanelDocCommon-test-module__content-wrapper-toggle___eOcKz",button:"SlidePanelDocCommon-test-module__button___hxSzl","circle-svg":"SlidePanelDocCommon-test-module__circle-svg___BFboR","p-clickable":"SlidePanelDocCommon-test-module__p-clickable___yicz1"}},1034:function(e,t,n){"use strict";n.r(t),t.default={"clinical-lowlight-theme":"SlidePanel-module__clinical-lowlight-theme___NdNQF","orion-fusion-theme":"SlidePanel-module__orion-fusion-theme___aBPYu","slide-panel":"SlidePanel-module__slide-panel___5vKEK",main:"SlidePanel-module__main___Jq40y",panel:"SlidePanel-module__panel___N9gHx","is-open":"SlidePanel-module__is-open___SU3q3","is-fullscreen":"SlidePanel-module__is-fullscreen___0BQTN",fill:"SlidePanel-module__fill___vHC0f"}},75346:function(e,t,n){"use strict";n.r(t),t.default={"visually-hidden-text":"VisuallyHiddenText-module__visually-hidden-text___lA9vx"}},23870:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=s(n(67294)),l=s(n(65218)),i=s(n(37968)),r=s(n(75346)),o=["refCallback","text"];function s(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},d.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=i.default.bind(r.default),f={refCallback:l.default.func,text:l.default.string},p={text:void 0,refCallback:void 0},m=function(e){var t=e.refCallback,n=e.text,l=u(e,o),i=c(["visually-hidden-text",l.className]);return a.default.createElement("span",d({ref:t},l,{className:i}),n)};m.propTypes=f,m.defaultProps=p;var _=m;t.default=_},37968:function(e,t){var n;!function(){"use strict";var a={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(this&&this[n]||n);else if(Array.isArray(n))e.push(l.apply(this,n));else if("object"===i){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var r in n)a.call(n,r)&&n[r]&&e.push(this&&this[r]||r)}}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0===(n=function(){return l}.apply(t,[]))||(e.exports=n)}()},72399:function(e,t,n){"use strict";var a=n(672);function l(){}function i(){}i.resetWarningCache=l,e.exports=function(){function e(e,t,n,l,i,r){if(r!==a){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:l};return n.PropTypes=n,n}},65218:function(e,t,n){e.exports=n(72399)()},672:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);