(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[79552],{4136:function(e,t,r){"use strict";var a=r(22411),n=r(59848);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=a(r(2676)),l=a(r(82048)),d=a(r(97676)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=n(e)&&"function"!=typeof e)return{default:e};var r=v(t);if(r&&r.has(e))return r.get(e);var a={__proto__:null},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var d=s?Object.getOwnPropertyDescriptor(e,l):null;d&&(d.get||d.set)?Object.defineProperty(a,l,d):a[l]=e[l]}return a.default=e,r&&r.set(e,a),a}(r(11504)),u=a(r(3268)),o=r(93627),c=a(r(82084)),f=a(r(74824)),j=a(r(7804)),p=r(65300),m=a(r(91280)),b=a(r(56728)),h=a(r(23448)),g=a(r(93724)),_=a(r(77556)),y=["dayAttributes","disabled","displayFormat","error","help","hideRequired","isIncomplete","isInline","isInvalid","isLegendHidden","intl","legend","legendAttributes","monthAttributes","maxWidth","name","onBlur","onChange","onFocus","required","showOptional","value","yearAttributes","refCallback"];function v(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(v=function(e){return e?r:t})(e)}function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach((function(t){(0,s.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var w=f.default.bind(_.default),I={legend:u.default.string.isRequired,name:u.default.string.isRequired,dayAttributes:u.default.object,disabled:u.default.bool,displayFormat:u.default.string,error:u.default.node,help:u.default.node,hideRequired:u.default.bool,isIncomplete:u.default.bool,isInline:u.default.bool,isInvalid:u.default.bool,isLegendHidden:u.default.bool,intl:u.default.shape({formatMessage:u.default.func}),legendAttributes:u.default.object,monthAttributes:u.default.object,maxWidth:u.default.string,onBlur:u.default.func,onChange:u.default.func,onFocus:u.default.func,required:u.default.bool,showOptional:u.default.bool,value:u.default.string,yearAttributes:u.default.object,refCallback:u.default.func},F={dayAttributes:{},disabled:!1,displayFormat:void 0,error:null,help:null,hideRequired:!1,isIncomplete:!1,isInline:!1,isInvalid:!1,isLegendHidden:!1,legendAttributes:{},monthAttributes:{},maxWidth:void 0,onBlur:void 0,onChange:void 0,onFocus:void 0,required:!1,showOptional:!1,value:"",yearAttributes:{}},z=function(e){var t=e.dayAttributes,r=e.disabled,a=e.displayFormat,n=e.error,s=e.help,u=e.hideRequired,o=e.isIncomplete,f=e.isInline,_=e.isInvalid,v=e.isLegendHidden,k=e.intl,I=e.legend,F=e.legendAttributes,z=e.monthAttributes,D=(e.maxWidth,e.name),E=e.onBlur,q=e.onChange,P=e.onFocus,x=e.required,A=e.showOptional,N=e.value,C=e.yearAttributes,M=e.refCallback,W=(0,d.default)(e,y),L=(0,i.useRef)((0,p.v4)()),R=i.default.useContext(j.default),B=(0,c.default)(w("date-input-field",{"is-inline":f},R.className),W.className),H=(0,c.default)(w("legend",R.className),F.className),S="terra-date-input-field-description-help-".concat(L.current),T="terra-date-input-field-description-error-".concat(L.current),U=S;n&&_&&(U="".concat(T," ").concat(S));var Y=z&&z["aria-describedby"],Q=t&&t["aria-describedby"],V=C&&C["aria-describedby"],Z=Y?"".concat(U," ").concat(Y):U,G=Q?"".concat(U," ").concat(Q):U,J=V?"".concat(U," ").concat(V):U,K=i.default.createElement("legend",{className:w(["legend-group",{"legend-group-hidden":v}])},i.default.createElement("div",(0,l.default)({},F,{className:H}),_&&i.default.createElement("span",{className:w("error-icon")},i.default.createElement(m.default,null)),x&&(_||!u)&&i.default.createElement(i.default.Fragment,null,i.default.createElement("div",{"aria-hidden":"true",className:w("required")},"*"),i.default.createElement(b.default,{text:k.formatMessage({id:"Terra.date.input.required"})})),I,x&&!_&&u&&i.default.createElement("span",{className:w("required-hidden")},"*"),A&&!x&&i.default.createElement("span",{className:w("optional")},k.formatMessage({id:"Terra.date.input.optional"})),!_&&i.default.createElement("span",{className:w("error-icon-hidden")}))),X=g.default.getDateFormat({displayFormat:a,intl:k});return i.default.createElement("fieldset",(0,l.default)({},W,{className:B}),K,s&&i.default.createElement(b.default,{text:s}),i.default.createElement(h.default,{a11yLabel:I,dayAttributes:O(O({},t),{"aria-describedby":G}),disabled:r,displayFormat:a,isA11yControlled:!0,isIncomplete:o,isInvalid:_,monthAttributes:O(O({},z),{"aria-describedby":Z}),name:D,onBlur:E,onChange:q,onFocus:P,required:x,useExternalFormatMask:!0,value:N,yearAttributes:O(O({},C),{"aria-describedby":J}),refCallback:M,error:n,"aria-describedby":T}),_&&n&&i.default.createElement("div",{id:T,className:w("error-text")},n),i.default.createElement("div",{"aria-hidden":!0,className:w("help-text")},s?"(".concat(X,") ").concat(s):"(".concat(X,")")))};z.propTypes=I,z.defaultProps=F;t.default=(0,o.injectIntl)(z)},25944:function(e,t,r){"use strict";var a=r(22411),n=r(59848);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=a(r(97936)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=n(e)&&"function"!=typeof e)return{default:e};var r=i(t);if(r&&r.has(e))return r.get(e);var a={__proto__:null},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var d=s?Object.getOwnPropertyDescriptor(e,l):null;d&&(d.get||d.set)?Object.defineProperty(a,l,d):a[l]=e[l]}return a.default=e,r&&r.set(e,a),a}(r(11504)),d=a(r(4136));function i(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(i=function(e){return e?r:t})(e)}t.default=function(){var e=(0,l.useState)(""),t=(0,s.default)(e,2),r=t[0],a=t[1],n=(0,l.useState)(!1),i=(0,s.default)(n,2),u=i[0],o=i[1];return l.default.createElement("div",null,l.default.createElement(d.default,{legend:"Legend text",name:"date-input",value:r,onChange:function(e,t){return a(t)},displayFormat:"day-month-year",error:"Error message",help:"Help message",isInvalid:u}),l.default.createElement("p",null,"DateInputField Value: ".concat(r)),l.default.createElement("button",{type:"button",onClick:function(){return o((function(e){return!e}))}},"Toggle isInvalid"))}},77556:function(e,t,r){"use strict";r.r(t),t.default={"orion-fusion-theme":"DateInputField-module__orion-fusion-theme___6WeUI","clinical-lowlight-theme":"DateInputField-module__clinical-lowlight-theme___ZPdZB","date-input-field":"DateInputField-module__date-input-field___y3E0d","is-inline":"DateInputField-module__is-inline___Y5zYN","legend-group":"DateInputField-module__legend-group___Y8qQh","legend-group-hidden":"DateInputField-module__legend-group-hidden___NubE+",legend:"DateInputField-module__legend___8v6Uw","error-icon":"DateInputField-module__error-icon___9jalk","error-icon-hidden":"DateInputField-module__error-icon-hidden___7yXqb",required:"DateInputField-module__required___c+zgG","required-hidden":"DateInputField-module__required-hidden___udcsO",optional:"DateInputField-module__optional___Jtg7S","help-text":"DateInputField-module__help-text___zQnVy","error-text":"DateInputField-module__error-text___D5gK6"}},92348:function(e,t,r){var a={"./af":36024,"./af.js":36024,"./ar":27544,"./ar-dz":11736,"./ar-dz.js":11736,"./ar-kw":47888,"./ar-kw.js":47888,"./ar-ly":22892,"./ar-ly.js":22892,"./ar-ma":89688,"./ar-ma.js":89688,"./ar-ps":65280,"./ar-ps.js":65280,"./ar-sa":44948,"./ar-sa.js":44948,"./ar-tn":61992,"./ar-tn.js":61992,"./ar.js":27544,"./az":95777,"./az.js":95777,"./be":69940,"./be.js":69940,"./bg":86107,"./bg.js":86107,"./bm":63544,"./bm.js":63544,"./bn":94952,"./bn-bd":92876,"./bn-bd.js":92876,"./bn.js":94952,"./bo":56576,"./bo.js":56576,"./br":7392,"./br.js":7392,"./bs":43584,"./bs.js":43584,"./ca":17396,"./ca.js":17396,"./cs":36560,"./cs.js":36560,"./cv":67716,"./cv.js":67716,"./cy":70956,"./cy.js":70956,"./da":15188,"./da.js":15188,"./de":78960,"./de-at":52131,"./de-at.js":52131,"./de-ch":46128,"./de-ch.js":46128,"./de.js":78960,"./dv":43284,"./dv.js":43284,"./el":32972,"./el.js":32972,"./en-au":64356,"./en-au.js":64356,"./en-ca":28440,"./en-ca.js":28440,"./en-gb":2448,"./en-gb.js":2448,"./en-ie":16320,"./en-ie.js":16320,"./en-il":74360,"./en-il.js":74360,"./en-in":80632,"./en-in.js":80632,"./en-nz":81140,"./en-nz.js":81140,"./en-sg":63004,"./en-sg.js":63004,"./eo":65620,"./eo.js":65620,"./es":32348,"./es-do":76528,"./es-do.js":76528,"./es-mx":98544,"./es-mx.js":98544,"./es-us":71208,"./es-us.js":71208,"./es.js":32348,"./et":20373,"./et.js":20373,"./eu":69912,"./eu.js":69912,"./fa":74984,"./fa.js":74984,"./fi":52819,"./fi.js":52819,"./fil":72512,"./fil.js":72512,"./fo":18571,"./fo.js":18571,"./fr":8405,"./fr-ca":93220,"./fr-ca.js":93220,"./fr-ch":45720,"./fr-ch.js":45720,"./fr.js":8405,"./fy":58116,"./fy.js":58116,"./ga":9916,"./ga.js":9916,"./gd":86908,"./gd.js":86908,"./gl":54088,"./gl.js":54088,"./gom-deva":15064,"./gom-deva.js":15064,"./gom-latn":96300,"./gom-latn.js":96300,"./gu":51208,"./gu.js":51208,"./he":55910,"./he.js":55910,"./hi":648,"./hi.js":648,"./hr":38864,"./hr.js":38864,"./hu":28164,"./hu.js":28164,"./hy-am":62528,"./hy-am.js":62528,"./id":63400,"./id.js":63400,"./is":23912,"./is.js":23912,"./it":77088,"./it-ch":77988,"./it-ch.js":77988,"./it.js":77088,"./ja":52501,"./ja.js":52501,"./jv":40376,"./jv.js":40376,"./ka":67048,"./ka.js":67048,"./kk":56416,"./kk.js":56416,"./km":58288,"./km.js":58288,"./kn":84833,"./kn.js":84833,"./ko":10972,"./ko.js":10972,"./ku":76376,"./ku-kmr":5192,"./ku-kmr.js":5192,"./ku.js":76376,"./ky":92832,"./ky.js":92832,"./lb":61448,"./lb.js":61448,"./lo":34116,"./lo.js":34116,"./lt":20296,"./lt.js":20296,"./lv":76136,"./lv.js":76136,"./me":28019,"./me.js":28019,"./mi":41320,"./mi.js":41320,"./mk":47720,"./mk.js":47720,"./ml":81228,"./ml.js":81228,"./mn":49564,"./mn.js":49564,"./mr":78496,"./mr.js":78496,"./ms":88512,"./ms-my":69676,"./ms-my.js":69676,"./ms.js":88512,"./mt":29824,"./mt.js":29824,"./my":82792,"./my.js":82792,"./nb":23444,"./nb.js":23444,"./ne":77860,"./ne.js":77860,"./nl":39940,"./nl-be":63760,"./nl-be.js":63760,"./nl.js":39940,"./nn":28888,"./nn.js":28888,"./oc-lnc":18096,"./oc-lnc.js":18096,"./pa-in":78837,"./pa-in.js":78837,"./pl":35904,"./pl.js":35904,"./pt":96840,"./pt-br":11048,"./pt-br.js":11048,"./pt.js":96840,"./ro":88296,"./ro.js":88296,"./ru":3156,"./ru.js":3156,"./sd":96595,"./sd.js":96595,"./se":94560,"./se.js":94560,"./si":38668,"./si.js":38668,"./sk":69500,"./sk.js":69500,"./sl":90024,"./sl.js":90024,"./sq":84192,"./sq.js":84192,"./sr":56832,"./sr-cyrl":58728,"./sr-cyrl.js":58728,"./sr.js":56832,"./ss":28692,"./ss.js":28692,"./sv":63252,"./sv.js":63252,"./sw":98904,"./sw.js":98904,"./ta":71120,"./ta.js":71120,"./te":46688,"./te.js":46688,"./tet":59556,"./tet.js":59556,"./tg":69248,"./tg.js":69248,"./th":27172,"./th.js":27172,"./tk":30208,"./tk.js":30208,"./tl-ph":91744,"./tl-ph.js":91744,"./tlh":331,"./tlh.js":331,"./tr":43920,"./tr.js":43920,"./tzl":84360,"./tzl.js":84360,"./tzm":97524,"./tzm-latn":81732,"./tzm-latn.js":81732,"./tzm.js":97524,"./ug-cn":71124,"./ug-cn.js":71124,"./uk":69328,"./uk.js":69328,"./ur":88968,"./ur.js":88968,"./uz":51516,"./uz-latn":19388,"./uz-latn.js":19388,"./uz.js":51516,"./vi":59664,"./vi.js":59664,"./x-pseudo":68616,"./x-pseudo.js":68616,"./yo":85436,"./yo.js":85436,"./zh-cn":3820,"./zh-cn.js":3820,"./zh-hk":60112,"./zh-hk.js":60112,"./zh-mo":99504,"./zh-mo.js":99504,"./zh-tw":15660,"./zh-tw.js":15660};function n(e){var t=s(e);return r(t)}function s(e){if(!r.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}n.keys=function(){return Object.keys(a)},n.resolve=s,e.exports=n,n.id=92348}}]);