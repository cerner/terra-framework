(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[26516],{4136:function(e,t,a){"use strict";var r=a(22411),n=a(59848);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(a(2676)),s=r(a(82048)),d=r(a(97676)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=n(e)&&"function"!=typeof e)return{default:e};var a=v(t);if(a&&a.has(e))return a.get(e);var r={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if("default"!==s&&Object.prototype.hasOwnProperty.call(e,s)){var d=l?Object.getOwnPropertyDescriptor(e,s):null;d&&(d.get||d.set)?Object.defineProperty(r,s,d):r[s]=e[s]}return r.default=e,a&&a.set(e,r),r}(a(11504)),i=r(a(3268)),o=a(93627),c=r(a(82084)),f=r(a(74824)),j=r(a(7804)),p=a(65300),m=r(a(91280)),b=r(a(56728)),g=r(a(23448)),h=r(a(93724)),_=r(a(77556)),y=["dayAttributes","disabled","displayFormat","error","help","hideRequired","isIncomplete","isInline","isInvalid","isLegendHidden","intl","legend","legendAttributes","monthAttributes","maxWidth","name","onBlur","onChange","onFocus","required","showOptional","value","yearAttributes","refCallback"];function v(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(v=function(e){return e?a:t})(e)}function k(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function O(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?k(Object(a),!0).forEach((function(t){(0,l.default)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):k(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var w=f.default.bind(_.default),I={legend:i.default.string.isRequired,name:i.default.string.isRequired,dayAttributes:i.default.object,disabled:i.default.bool,displayFormat:i.default.string,error:i.default.node,help:i.default.node,hideRequired:i.default.bool,isIncomplete:i.default.bool,isInline:i.default.bool,isInvalid:i.default.bool,isLegendHidden:i.default.bool,intl:i.default.shape({formatMessage:i.default.func}),legendAttributes:i.default.object,monthAttributes:i.default.object,maxWidth:i.default.string,onBlur:i.default.func,onChange:i.default.func,onFocus:i.default.func,required:i.default.bool,showOptional:i.default.bool,value:i.default.string,yearAttributes:i.default.object,refCallback:i.default.func},E={dayAttributes:{},disabled:!1,displayFormat:void 0,error:null,help:null,hideRequired:!1,isIncomplete:!1,isInline:!1,isInvalid:!1,isLegendHidden:!1,legendAttributes:{},monthAttributes:{},maxWidth:void 0,onBlur:void 0,onChange:void 0,onFocus:void 0,required:!1,showOptional:!1,value:"",yearAttributes:{}},F=function(e){var t=e.dayAttributes,a=e.disabled,r=e.displayFormat,n=e.error,l=e.help,i=e.hideRequired,o=e.isIncomplete,f=e.isInline,_=e.isInvalid,v=e.isLegendHidden,k=e.intl,I=e.legend,E=e.legendAttributes,F=e.monthAttributes,D=(e.maxWidth,e.name),z=e.onBlur,q=e.onChange,x=e.onFocus,P=e.required,A=e.showOptional,N=e.value,C=e.yearAttributes,M=e.refCallback,W=(0,d.default)(e,y),L=(0,u.useRef)((0,p.v4)()),H=u.default.useContext(j.default),R=(0,c.default)(w("date-input-field",{"is-inline":f},H.className),W.className),B=(0,c.default)(w("legend",H.className),E.className),S="terra-date-input-field-description-help-".concat(L.current),T="terra-date-input-field-description-error-".concat(L.current),U=S;n&&_&&(U="".concat(T," ").concat(S));var V=F&&F["aria-describedby"],Y=t&&t["aria-describedby"],Q=C&&C["aria-describedby"],Z=V?"".concat(U," ").concat(V):U,G=Y?"".concat(U," ").concat(Y):U,J=Q?"".concat(U," ").concat(Q):U,K=u.default.createElement("legend",{className:w(["legend-group",{"legend-group-hidden":v}])},u.default.createElement("div",(0,s.default)({},E,{className:B}),_&&u.default.createElement("span",{className:w("error-icon")},u.default.createElement(m.default,null)),P&&(_||!i)&&u.default.createElement(u.default.Fragment,null,u.default.createElement("div",{"aria-hidden":"true",className:w("required")},"*"),u.default.createElement(b.default,{text:k.formatMessage({id:"Terra.date.input.required"})})),I,P&&!_&&i&&u.default.createElement("span",{className:w("required-hidden")},"*"),A&&!P&&u.default.createElement("span",{className:w("optional")},k.formatMessage({id:"Terra.date.input.optional"})),!_&&u.default.createElement("span",{className:w("error-icon-hidden")}))),X=h.default.getDateFormat({displayFormat:r,intl:k});return u.default.createElement("fieldset",(0,s.default)({},W,{className:R}),K,l&&u.default.createElement(b.default,{text:l}),u.default.createElement(g.default,{a11yLabel:I,dayAttributes:O(O({},t),{"aria-describedby":G}),disabled:a,displayFormat:r,isA11yControlled:!0,isIncomplete:o,isInvalid:_,monthAttributes:O(O({},F),{"aria-describedby":Z}),name:D,onBlur:z,onChange:q,onFocus:x,required:P,useExternalFormatMask:!0,value:N,yearAttributes:O(O({},C),{"aria-describedby":J}),refCallback:M,error:n,"aria-describedby":T}),_&&n&&u.default.createElement("div",{id:T,className:w("error-text")},n),u.default.createElement("div",{"aria-hidden":!0,className:w("help-text")},l?"(".concat(X,") ").concat(l):"(".concat(X,")")))};F.propTypes=I,F.defaultProps=E;t.default=(0,o.injectIntl)(F)},62732:function(e,t,a){"use strict";var r=a(22411),n=a(59848);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(a(97936)),s=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=n(e)&&"function"!=typeof e)return{default:e};var a=u(t);if(a&&a.has(e))return a.get(e);var r={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if("default"!==s&&Object.prototype.hasOwnProperty.call(e,s)){var d=l?Object.getOwnPropertyDescriptor(e,s):null;d&&(d.get||d.set)?Object.defineProperty(r,s,d):r[s]=e[s]}return r.default=e,a&&a.set(e,r),r}(a(11504)),d=r(a(4136));function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(u=function(e){return e?a:t})(e)}t.default=function(){var e=(0,s.useState)("2000-07-04"),t=(0,l.default)(e,2),a=t[0],r=t[1];return s.default.createElement("div",null,s.default.createElement(d.default,{legend:"Legend text",name:"date-input",value:a,onChange:function(e,t){return r(t)},error:"Error message",help:"Help message",disabled:!0}),s.default.createElement("p",null,"DateInputField Value: ".concat(a)),s.default.createElement(d.default,{legend:"Legend text",name:"date-input",value:a,onChange:function(e,t){return r(t)},error:"Error message",help:"Help message",isInvalid:!0,disabled:!0}),s.default.createElement("p",null,"DateInputField Value: ".concat(a)),s.default.createElement(d.default,{legend:"Legend text",name:"date-input",value:a,onChange:function(e,t){return r(t)},error:"Error message",help:"Help message",isIncomplete:!0,required:!0,disabled:!0}),s.default.createElement("p",null,"DateInputField Value: ".concat(a)))}},77556:function(e,t,a){"use strict";a.r(t),t.default={"orion-fusion-theme":"DateInputField-module__orion-fusion-theme___6WeUI","clinical-lowlight-theme":"DateInputField-module__clinical-lowlight-theme___ZPdZB","date-input-field":"DateInputField-module__date-input-field___y3E0d","is-inline":"DateInputField-module__is-inline___Y5zYN","legend-group":"DateInputField-module__legend-group___Y8qQh","legend-group-hidden":"DateInputField-module__legend-group-hidden___NubE+",legend:"DateInputField-module__legend___8v6Uw","error-icon":"DateInputField-module__error-icon___9jalk","error-icon-hidden":"DateInputField-module__error-icon-hidden___7yXqb",required:"DateInputField-module__required___c+zgG","required-hidden":"DateInputField-module__required-hidden___udcsO",optional:"DateInputField-module__optional___Jtg7S","help-text":"DateInputField-module__help-text___zQnVy","error-text":"DateInputField-module__error-text___D5gK6"}},92348:function(e,t,a){var r={"./af":36024,"./af.js":36024,"./ar":27544,"./ar-dz":11736,"./ar-dz.js":11736,"./ar-kw":47888,"./ar-kw.js":47888,"./ar-ly":22892,"./ar-ly.js":22892,"./ar-ma":89688,"./ar-ma.js":89688,"./ar-ps":65280,"./ar-ps.js":65280,"./ar-sa":44948,"./ar-sa.js":44948,"./ar-tn":61992,"./ar-tn.js":61992,"./ar.js":27544,"./az":95777,"./az.js":95777,"./be":69940,"./be.js":69940,"./bg":86107,"./bg.js":86107,"./bm":63544,"./bm.js":63544,"./bn":94952,"./bn-bd":92876,"./bn-bd.js":92876,"./bn.js":94952,"./bo":56576,"./bo.js":56576,"./br":7392,"./br.js":7392,"./bs":43584,"./bs.js":43584,"./ca":17396,"./ca.js":17396,"./cs":36560,"./cs.js":36560,"./cv":67716,"./cv.js":67716,"./cy":70956,"./cy.js":70956,"./da":15188,"./da.js":15188,"./de":78960,"./de-at":52131,"./de-at.js":52131,"./de-ch":46128,"./de-ch.js":46128,"./de.js":78960,"./dv":43284,"./dv.js":43284,"./el":32972,"./el.js":32972,"./en-au":64356,"./en-au.js":64356,"./en-ca":28440,"./en-ca.js":28440,"./en-gb":2448,"./en-gb.js":2448,"./en-ie":16320,"./en-ie.js":16320,"./en-il":74360,"./en-il.js":74360,"./en-in":80632,"./en-in.js":80632,"./en-nz":81140,"./en-nz.js":81140,"./en-sg":63004,"./en-sg.js":63004,"./eo":65620,"./eo.js":65620,"./es":32348,"./es-do":76528,"./es-do.js":76528,"./es-mx":98544,"./es-mx.js":98544,"./es-us":71208,"./es-us.js":71208,"./es.js":32348,"./et":20373,"./et.js":20373,"./eu":69912,"./eu.js":69912,"./fa":74984,"./fa.js":74984,"./fi":52819,"./fi.js":52819,"./fil":72512,"./fil.js":72512,"./fo":18571,"./fo.js":18571,"./fr":8405,"./fr-ca":93220,"./fr-ca.js":93220,"./fr-ch":45720,"./fr-ch.js":45720,"./fr.js":8405,"./fy":58116,"./fy.js":58116,"./ga":9916,"./ga.js":9916,"./gd":86908,"./gd.js":86908,"./gl":54088,"./gl.js":54088,"./gom-deva":15064,"./gom-deva.js":15064,"./gom-latn":96300,"./gom-latn.js":96300,"./gu":51208,"./gu.js":51208,"./he":55910,"./he.js":55910,"./hi":648,"./hi.js":648,"./hr":38864,"./hr.js":38864,"./hu":28164,"./hu.js":28164,"./hy-am":62528,"./hy-am.js":62528,"./id":63400,"./id.js":63400,"./is":23912,"./is.js":23912,"./it":77088,"./it-ch":77988,"./it-ch.js":77988,"./it.js":77088,"./ja":52501,"./ja.js":52501,"./jv":40376,"./jv.js":40376,"./ka":67048,"./ka.js":67048,"./kk":56416,"./kk.js":56416,"./km":58288,"./km.js":58288,"./kn":84833,"./kn.js":84833,"./ko":10972,"./ko.js":10972,"./ku":76376,"./ku-kmr":5192,"./ku-kmr.js":5192,"./ku.js":76376,"./ky":92832,"./ky.js":92832,"./lb":61448,"./lb.js":61448,"./lo":34116,"./lo.js":34116,"./lt":20296,"./lt.js":20296,"./lv":76136,"./lv.js":76136,"./me":28019,"./me.js":28019,"./mi":41320,"./mi.js":41320,"./mk":47720,"./mk.js":47720,"./ml":81228,"./ml.js":81228,"./mn":49564,"./mn.js":49564,"./mr":78496,"./mr.js":78496,"./ms":88512,"./ms-my":69676,"./ms-my.js":69676,"./ms.js":88512,"./mt":29824,"./mt.js":29824,"./my":82792,"./my.js":82792,"./nb":23444,"./nb.js":23444,"./ne":77860,"./ne.js":77860,"./nl":39940,"./nl-be":63760,"./nl-be.js":63760,"./nl.js":39940,"./nn":28888,"./nn.js":28888,"./oc-lnc":18096,"./oc-lnc.js":18096,"./pa-in":78837,"./pa-in.js":78837,"./pl":35904,"./pl.js":35904,"./pt":96840,"./pt-br":11048,"./pt-br.js":11048,"./pt.js":96840,"./ro":88296,"./ro.js":88296,"./ru":3156,"./ru.js":3156,"./sd":96595,"./sd.js":96595,"./se":94560,"./se.js":94560,"./si":38668,"./si.js":38668,"./sk":69500,"./sk.js":69500,"./sl":90024,"./sl.js":90024,"./sq":84192,"./sq.js":84192,"./sr":56832,"./sr-cyrl":58728,"./sr-cyrl.js":58728,"./sr.js":56832,"./ss":28692,"./ss.js":28692,"./sv":63252,"./sv.js":63252,"./sw":98904,"./sw.js":98904,"./ta":71120,"./ta.js":71120,"./te":46688,"./te.js":46688,"./tet":59556,"./tet.js":59556,"./tg":69248,"./tg.js":69248,"./th":27172,"./th.js":27172,"./tk":30208,"./tk.js":30208,"./tl-ph":91744,"./tl-ph.js":91744,"./tlh":331,"./tlh.js":331,"./tr":43920,"./tr.js":43920,"./tzl":84360,"./tzl.js":84360,"./tzm":97524,"./tzm-latn":81732,"./tzm-latn.js":81732,"./tzm.js":97524,"./ug-cn":71124,"./ug-cn.js":71124,"./uk":69328,"./uk.js":69328,"./ur":88968,"./ur.js":88968,"./uz":51516,"./uz-latn":19388,"./uz-latn.js":19388,"./uz.js":51516,"./vi":59664,"./vi.js":59664,"./x-pseudo":68616,"./x-pseudo.js":68616,"./yo":85436,"./yo.js":85436,"./zh-cn":3820,"./zh-cn.js":3820,"./zh-hk":60112,"./zh-hk.js":60112,"./zh-mo":99504,"./zh-mo.js":99504,"./zh-tw":15660,"./zh-tw.js":15660};function n(e){var t=l(e);return a(t)}function l(e){if(!a.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}n.keys=function(){return Object.keys(r)},n.resolve=l,e.exports=n,n.id=92348}}]);