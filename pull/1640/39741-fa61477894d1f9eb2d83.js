/*! For license information please see 39741-fa61477894d1f9eb2d83.js.LICENSE.txt */
(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[39741],{22199:function(e,t,l){"use strict";var a=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(l(67294)),n=function(){return i.default.createElement("div",null,i.default.createElement("h3",null,"Main Content"),i.default.createElement("p",null,"Lorem ipsum dolor sit amet, mea te odio ludus adipiscing. Cu oporteat temporibus nam, aperiam adipisci mel et, mei no oportere salutatus. Iudico lucilius ei pri. Eleifend philosophia et ius."),i.default.createElement("p",null,"Id elit congue copiosae eam, elitr laboramus mediocritatem nam in, decore propriae et usu. An vix insolens dignissim, novum gloriatur delicatissimi mei ne, ne ancillae tincidunt nec. Iusto expetenda scriptorem mei cu, ne per prima nihil utinam. Cibo ocurreret no nam, nec euismod vivendum te."),i.default.createElement("ul",null,i.default.createElement("li",null,"Item 1"),i.default.createElement("li",null,"Item 2"),i.default.createElement("li",null,"Item 3"),i.default.createElement("li",null,"Item 4"),i.default.createElement("li",null,"Item 5"),i.default.createElement("li",null,"Item 6"),i.default.createElement("li",null,"Item 7"),i.default.createElement("li",null,"Item 8"),i.default.createElement("li",null,"Item 9"),i.default.createElement("li",null,"Item 10"),i.default.createElement("li",null,"Item 11"),i.default.createElement("li",null,"Item 12"),i.default.createElement("li",null,"Item 13"),i.default.createElement("li",null,"Item 14"),i.default.createElement("li",null,"Item 15")))};t.default=n},46868:function(e,t,l){"use strict";var a=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(l(67294)),n=function(){return i.default.createElement("div",null,i.default.createElement("h3",null,"Panel Content"),i.default.createElement("p",null,"Lorem ipsum dolor sit amet, mea te odio ludus adipiscing. Cu oporteat temporibus nam, aperiam adipisci mel et, mei no oportere salutatus. Iudico lucilius ei pri. Eleifend philosophia et ius."),i.default.createElement("p",null,"Id elit congue copiosae eam, elitr laboramus mediocritatem nam in, decore propriae et usu. An vix insolens dignissim, novum gloriatur delicatissimi mei ne, ne ancillae tincidunt nec. Iusto expetenda scriptorem mei cu, ne per prima nihil utinam. Cibo ocurreret no nam, nec euismod vivendum te."),i.default.createElement("ul",null,i.default.createElement("li",null,"Item 1"),i.default.createElement("li",null,"Item 2"),i.default.createElement("li",null,"Item 3"),i.default.createElement("li",null,"Item 4"),i.default.createElement("li",null,"Item 5"),i.default.createElement("li",null,"Item 6"),i.default.createElement("li",null,"Item 7"),i.default.createElement("li",null,"Item 8"),i.default.createElement("li",null,"Item 9"),i.default.createElement("li",null,"Item 10"),i.default.createElement("li",null,"Item 11"),i.default.createElement("li",null,"Item 12"),i.default.createElement("li",null,"Item 13"),i.default.createElement("li",null,"Item 14"),i.default.createElement("li",null,"Item 15")))};t.default=n},27662:function(e,t,l){"use strict";var a=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.SlidePanelPositions=void 0;var i=a(l(10434)),n=a(l(70215)),r=a(l(56690)),u=a(l(89728)),s=a(l(66115)),o=a(l(61655)),d=a(l(94993)),c=a(l(73808)),f=a(l(67294)),m=a(l(45697)),p=a(l(94184)),h=a(l(47166)),b=a(l(47341)),v=a(l(23870)),y=l(25387),_=a(l(1034)),E=["intl","isFullscreen","isOpen","fill","mainAriaDescribedBy","mainAriaLabel","mainContent","panelAriaLabel","panelContent","panelBehavior","panelPosition","panelSize","replaceMainAriaDescribedBy","setSlidePanelRef"];function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var l,a=(0,c.default)(e);if(t){var i=(0,c.default)(this).constructor;l=Reflect.construct(a,arguments,i)}else l=a.apply(this,arguments);return(0,d.default)(this,l)}}var P=h.default.bind(_.default),I={START:"start",END:"end"};t.SlidePanelPositions=I;var O={panelAriaLabel:m.default.string,mainAriaLabel:m.default.string,mainAriaDescribedBy:m.default.string,replaceMainAriaDescribedBy:m.default.bool,mainContent:m.default.node,panelContent:m.default.node,panelBehavior:m.default.oneOf(["overlay","squish"]),panelPosition:m.default.oneOf(["start","end"]),panelSize:m.default.oneOf(["small","large"]),isFullscreen:m.default.bool,isOpen:m.default.bool,fill:m.default.bool,setSlidePanelRef:m.default.func,intl:m.default.shape({formatMessage:m.default.func,locale:m.default.string})},A={panelBehavior:"overlay",panelPosition:I.END,panelSize:"small",replaceMainAriaDescribedBy:!1},x=function(e){(0,o.default)(l,e);var t=g(l);function l(e){var a;return(0,r.default)(this,l),(a=t.call(this,e)).setPanelNode=a.setPanelNode.bind((0,s.default)(a)),a.mainNode=f.default.createRef(),a.setLastClicked=a.setLastClicked.bind((0,s.default)(a)),a.setDisclosingNode=a.setDisclosingNode.bind((0,s.default)(a)),a.defaultMainAriaDescribedByID="detail-panel-warning",a.mainAriaDescribedByList=a.defaultMainAriaDescribedByID,a.props.replaceMainAriaDescribedBy?a.mainAriaDescribedByList=a.props.mainAriaDescribedBy:a.props.mainAriaDescribedBy&&(a.mainAriaDescribedByList=a.mainAriaDescribedByList.concat(" ",a.props.mainAriaDescribedBy)),a}return(0,u.default)(l,[{key:"componentDidUpdate",value:function(e){if(this.props.isOpen&&this.props.isOpen!==e.isOpen)return this.setDisclosingNode(this.lastClicked),void this.panelNode.focus();if(!this.props.isOpen&&this.props.isOpen!==e.isOpen){if(this.disclosingNode)return this.disclosingNode.setAttribute("aria-expanded","false"),void this.disclosingNode.focus();this.mainNode.current.focus()}}},{key:"setPanelNode",value:function(e){this.props.setSlidePanelRef&&this.props.setSlidePanelRef(e),this.panelNode=e}},{key:"setLastClicked",value:function(e){this.lastClicked=e.target}},{key:"setDisclosingNode",value:function(e){e&&(e.setAttribute("aria-expanded","true"),this.disclosingNode=e)}},{key:"render",value:function(){var e=this.props,t=e.intl,l=e.isFullscreen,a=e.isOpen,r=e.fill,u=(e.mainAriaDescribedBy,e.mainAriaLabel),s=e.mainContent,o=e.panelAriaLabel,d=e.panelContent,c=e.panelBehavior,m=e.panelPosition,h=e.panelSize,b=(e.replaceMainAriaDescribedBy,e.setSlidePanelRef,(0,n.default)(e,E)),y=this.context,_=(0,p.default)(P("slide-panel",{"is-open":a},{"is-fullscreen":l},{fill:r},y.className),b.className),g=f.default.createElement("div",{className:P(["panel"]),key:"panel",tabIndex:"-1","aria-label":o||t.formatMessage({id:"Terra.slidePanel.defaultPanelLabel"}),"aria-hidden":a?"false":"true",role:"region",ref:this.setPanelNode},f.default.createElement(v.default,{text:o||t.formatMessage({id:"Terra.slidePanel.defaultPanelLabel"})}),d),O=f.default.createElement("div",{className:P("main"),key:"main",tabIndex:"-1","aria-label":u,"aria-describedby":this.mainAriaDescribedByList,ref:this.mainNode,role:"main",onClick:this.setLastClicked,onKeyUp:this.setLastClicked},f.default.createElement(v.default,{tabIndex:"-1",id:this.defaultMainAriaDescribedByID,text:t.formatMessage({id:"Terra.slidePanel.discloseWarning"})}),s),A=m===I.START?f.default.createElement(f.default.Fragment,null,g,O):f.default.createElement(f.default.Fragment,null,O,g);return f.default.createElement("div",(0,i.default)({},b,{className:_,"data-slide-panel-panel-behavior":c,"data-slide-panel-panel-position":m,"data-slide-panel-panel-size":h}),A)}}]),l}(f.default.Component);x.propTypes=O,x.defaultProps=A,x.contextType=b.default;var S=(0,y.injectIntl)(x);t.default=S},1034:function(e,t,l){"use strict";l.r(t),t.default={"clinical-lowlight-theme":"SlidePanel-module__clinical-lowlight-theme___NdNQF","orion-fusion-theme":"SlidePanel-module__orion-fusion-theme___aBPYu","slide-panel":"SlidePanel-module__slide-panel___5vKEK",main:"SlidePanel-module__main___Jq40y",panel:"SlidePanel-module__panel___N9gHx","is-open":"SlidePanel-module__is-open___SU3q3","is-fullscreen":"SlidePanel-module__is-fullscreen___0BQTN",fill:"SlidePanel-module__fill___vHC0f"}},75346:function(e,t,l){"use strict";l.r(t),t.default={"visually-hidden-text":"VisuallyHiddenText-module__visually-hidden-text___lA9vx"}},23870:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=s(l(67294)),i=s(l(65218)),n=s(l(37968)),r=s(l(75346)),u=["refCallback","text"];function s(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},o.apply(this,arguments)}function d(e,t){if(null==e)return{};var l,a,i=function(e,t){if(null==e)return{};var l,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)l=n[a],t.indexOf(l)>=0||(i[l]=e[l]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)l=n[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(i[l]=e[l])}return i}var c=n.default.bind(r.default),f={refCallback:i.default.func,text:i.default.string},m={text:void 0,refCallback:void 0},p=function(e){var t=e.refCallback,l=e.text,i=d(e,u),n=c(["visually-hidden-text",i.className]);return a.default.createElement("span",o({ref:t},i,{className:n}),l)};p.propTypes=f,p.defaultProps=m;var h=p;t.default=h},37968:function(e,t){var l;!function(){"use strict";var a={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var l=arguments[t];if(l){var n=typeof l;if("string"===n||"number"===n)e.push(this&&this[l]||l);else if(Array.isArray(l))e.push(i.apply(this,l));else if("object"===n){if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]")){e.push(l.toString());continue}for(var r in l)a.call(l,r)&&l[r]&&e.push(this&&this[r]||r)}}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(l=function(){return i}.apply(t,[]))||(e.exports=l)}()},72399:function(e,t,l){"use strict";var a=l(672);function i(){}function n(){}n.resetWarningCache=i,e.exports=function(){function e(e,t,l,i,n,r){if(r!==a){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var l={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:n,resetWarningCache:i};return l.PropTypes=l,l}},65218:function(e,t,l){e.exports=l(72399)()},672:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);