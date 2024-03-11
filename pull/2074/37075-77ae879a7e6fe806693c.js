(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[37075],{44745:function(e,t,r){"use strict";var a=r(24994),n=r(73738);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=a(r(43693)),l=a(r(94634)),i=a(r(91847)),d=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=n(e)&&"function"!=typeof e)return{default:e};var r=v(t);if(r&&r.has(e))return r.get(e);var a={__proto__:null},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=s?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(a,l,i):a[l]=e[l]}return a.default=e,r&&r.set(e,a),a}(r(96540)),u=a(r(5556)),o=r(8604),c=a(r(46942)),f=a(r(67967)),j=a(r(23695)),p=r(68414),m=a(r(86438)),b=a(r(16524)),h=a(r(78053)),g=a(r(41417)),_=a(r(95106)),y=["dayAttributes","disabled","displayFormat","error","help","hideRequired","isIncomplete","isInline","isInvalid","isLegendHidden","intl","legend","legendAttributes","monthAttributes","maxWidth","name","onBlur","onChange","onFocus","required","showOptional","value","yearAttributes","refCallback"];function v(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(v=function(e){return e?r:t})(e)}function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach((function(t){(0,s.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var w=f.default.bind(_.default),I={legend:u.default.string.isRequired,name:u.default.string.isRequired,dayAttributes:u.default.object,disabled:u.default.bool,displayFormat:u.default.string,error:u.default.node,help:u.default.node,hideRequired:u.default.bool,isIncomplete:u.default.bool,isInline:u.default.bool,isInvalid:u.default.bool,isLegendHidden:u.default.bool,intl:u.default.shape({formatMessage:u.default.func}),legendAttributes:u.default.object,monthAttributes:u.default.object,maxWidth:u.default.string,onBlur:u.default.func,onChange:u.default.func,onFocus:u.default.func,required:u.default.bool,showOptional:u.default.bool,value:u.default.string,yearAttributes:u.default.object,refCallback:u.default.func},F={dayAttributes:{},disabled:!1,displayFormat:void 0,error:null,help:null,hideRequired:!1,isIncomplete:!1,isInline:!1,isInvalid:!1,isLegendHidden:!1,legendAttributes:{},monthAttributes:{},maxWidth:void 0,onBlur:void 0,onChange:void 0,onFocus:void 0,required:!1,showOptional:!1,value:"",yearAttributes:{}},z=function(e){var t=e.dayAttributes,r=e.disabled,a=e.displayFormat,n=e.error,s=e.help,u=e.hideRequired,o=e.isIncomplete,f=e.isInline,_=e.isInvalid,v=e.isLegendHidden,k=e.intl,I=e.legend,F=e.legendAttributes,z=e.monthAttributes,D=(e.maxWidth,e.name),E=e.onBlur,q=e.onChange,P=e.onFocus,x=e.required,A=e.showOptional,N=e.value,C=e.yearAttributes,M=e.refCallback,W=(0,i.default)(e,y),L=(0,d.useRef)((0,p.v4)()),R=d.default.useContext(j.default),B=(0,c.default)(w("date-input-field",{"is-inline":f},R.className),W.className),H=(0,c.default)(w("legend",R.className),F.className),S="terra-date-input-field-description-help-".concat(L.current),T="terra-date-input-field-description-error-".concat(L.current),U=S;n&&_&&(U="".concat(T," ").concat(S));var Y=z&&z["aria-describedby"],Q=t&&t["aria-describedby"],V=C&&C["aria-describedby"],Z=Y?"".concat(U," ").concat(Y):U,G=Q?"".concat(U," ").concat(Q):U,J=V?"".concat(U," ").concat(V):U,K=d.default.createElement("legend",{className:w(["legend-group",{"legend-group-hidden":v}])},d.default.createElement("div",(0,l.default)({},F,{className:H}),_&&d.default.createElement("span",{className:w("error-icon")},d.default.createElement(m.default,null)),x&&(_||!u)&&d.default.createElement(d.default.Fragment,null,d.default.createElement("div",{"aria-hidden":"true",className:w("required")},"*"),d.default.createElement(b.default,{text:k.formatMessage({id:"Terra.date.input.required"})})),I,x&&!_&&u&&d.default.createElement("span",{className:w("required-hidden")},"*"),A&&!x&&d.default.createElement("span",{className:w("optional")},k.formatMessage({id:"Terra.date.input.optional"})),!_&&d.default.createElement("span",{className:w("error-icon-hidden")}))),X=g.default.getDateFormat({displayFormat:a,intl:k});return d.default.createElement("fieldset",(0,l.default)({},W,{className:B}),K,s&&d.default.createElement(b.default,{text:s}),d.default.createElement(h.default,{a11yLabel:I,dayAttributes:O(O({},t),{"aria-describedby":G}),disabled:r,displayFormat:a,isA11yControlled:!0,isIncomplete:o,isInvalid:_,monthAttributes:O(O({},z),{"aria-describedby":Z}),name:D,onBlur:E,onChange:q,onFocus:P,required:x,useExternalFormatMask:!0,value:N,yearAttributes:O(O({},C),{"aria-describedby":J}),refCallback:M,error:n,"aria-describedby":T}),_&&n&&d.default.createElement("div",{id:T,className:w("error-text")},n),d.default.createElement("div",{"aria-hidden":!0,className:w("help-text")},s?"(".concat(X,") ").concat(s):"(".concat(X,")")))};z.propTypes=I,z.defaultProps=F;t.default=(0,o.injectIntl)(z)},8863:function(e,t,r){"use strict";var a=r(24994),n=r(73738);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=a(r(85715)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=n(e)&&"function"!=typeof e)return{default:e};var r=d(t);if(r&&r.has(e))return r.get(e);var a={__proto__:null},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=s?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(a,l,i):a[l]=e[l]}return a.default=e,r&&r.set(e,a),a}(r(96540)),i=a(r(44745));function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(d=function(e){return e?r:t})(e)}t.default=function(){var e=(0,l.useState)("1999-03-10"),t=(0,s.default)(e,2),r=t[0],a=t[1],n=(0,l.useState)(!1),d=(0,s.default)(n,2),u=d[0],o=d[1];return l.default.createElement("div",null,l.default.createElement(i.default,{legend:"Legend text",name:"date-input",value:r,onChange:function(e,t){return a(t)},required:!0,error:"Error message",help:"Help message",isInvalid:u}),l.default.createElement("p",null,"DateInputField Value: ".concat(r)),l.default.createElement("button",{type:"button",onClick:function(){return o((function(e){return!e}))}},"Toggle isInvalid"))}},95106:function(e,t,r){"use strict";r.r(t),t.default={"orion-fusion-theme":"DateInputField-module__orion-fusion-theme___6WeUI","clinical-lowlight-theme":"DateInputField-module__clinical-lowlight-theme___ZPdZB","date-input-field":"DateInputField-module__date-input-field___y3E0d","is-inline":"DateInputField-module__is-inline___Y5zYN","legend-group":"DateInputField-module__legend-group___Y8qQh","legend-group-hidden":"DateInputField-module__legend-group-hidden___NubE+",legend:"DateInputField-module__legend___8v6Uw","error-icon":"DateInputField-module__error-icon___9jalk","error-icon-hidden":"DateInputField-module__error-icon-hidden___7yXqb",required:"DateInputField-module__required___c+zgG","required-hidden":"DateInputField-module__required-hidden___udcsO",optional:"DateInputField-module__optional___Jtg7S","help-text":"DateInputField-module__help-text___zQnVy","error-text":"DateInputField-module__error-text___D5gK6"}},35358:function(e,t,r){var a={"./af":25177,"./af.js":25177,"./ar":61509,"./ar-dz":41488,"./ar-dz.js":41488,"./ar-kw":58676,"./ar-kw.js":58676,"./ar-ly":42353,"./ar-ly.js":42353,"./ar-ma":24496,"./ar-ma.js":24496,"./ar-ps":6947,"./ar-ps.js":6947,"./ar-sa":82682,"./ar-sa.js":82682,"./ar-tn":89756,"./ar-tn.js":89756,"./ar.js":61509,"./az":95533,"./az.js":95533,"./be":28959,"./be.js":28959,"./bg":47777,"./bg.js":47777,"./bm":54903,"./bm.js":54903,"./bn":61290,"./bn-bd":17357,"./bn-bd.js":17357,"./bn.js":61290,"./bo":31545,"./bo.js":31545,"./br":11470,"./br.js":11470,"./bs":44429,"./bs.js":44429,"./ca":7306,"./ca.js":7306,"./cs":56464,"./cs.js":56464,"./cv":73635,"./cv.js":73635,"./cy":64226,"./cy.js":64226,"./da":93601,"./da.js":93601,"./de":77853,"./de-at":26111,"./de-at.js":26111,"./de-ch":54697,"./de-ch.js":54697,"./de.js":77853,"./dv":60708,"./dv.js":60708,"./el":54691,"./el.js":54691,"./en-au":53872,"./en-au.js":53872,"./en-ca":28298,"./en-ca.js":28298,"./en-gb":56195,"./en-gb.js":56195,"./en-ie":66584,"./en-ie.js":66584,"./en-il":65543,"./en-il.js":65543,"./en-in":9033,"./en-in.js":9033,"./en-nz":79402,"./en-nz.js":79402,"./en-sg":43004,"./en-sg.js":43004,"./eo":10553,"./eo.js":10553,"./es":97650,"./es-do":20838,"./es-do.js":20838,"./es-mx":17730,"./es-mx.js":17730,"./es-us":56575,"./es-us.js":56575,"./es.js":97650,"./et":3035,"./et.js":3035,"./eu":3508,"./eu.js":3508,"./fa":119,"./fa.js":119,"./fi":90527,"./fi.js":90527,"./fil":95995,"./fil.js":95995,"./fo":52477,"./fo.js":52477,"./fr":85498,"./fr-ca":26435,"./fr-ca.js":26435,"./fr-ch":37892,"./fr-ch.js":37892,"./fr.js":85498,"./fy":37071,"./fy.js":37071,"./ga":41734,"./ga.js":41734,"./gd":70217,"./gd.js":70217,"./gl":77329,"./gl.js":77329,"./gom-deva":32124,"./gom-deva.js":32124,"./gom-latn":93383,"./gom-latn.js":93383,"./gu":95050,"./gu.js":95050,"./he":11713,"./he.js":11713,"./hi":43861,"./hi.js":43861,"./hr":26308,"./hr.js":26308,"./hu":90609,"./hu.js":90609,"./hy-am":17160,"./hy-am.js":17160,"./id":74063,"./id.js":74063,"./is":89374,"./is.js":89374,"./it":88383,"./it-ch":21827,"./it-ch.js":21827,"./it.js":88383,"./ja":23827,"./ja.js":23827,"./jv":89722,"./jv.js":89722,"./ka":41794,"./ka.js":41794,"./kk":27088,"./kk.js":27088,"./km":96870,"./km.js":96870,"./kn":84451,"./kn.js":84451,"./ko":63164,"./ko.js":63164,"./ku":98174,"./ku-kmr":6181,"./ku-kmr.js":6181,"./ku.js":98174,"./ky":78474,"./ky.js":78474,"./lb":79680,"./lb.js":79680,"./lo":15867,"./lo.js":15867,"./lt":45766,"./lt.js":45766,"./lv":69532,"./lv.js":69532,"./me":58076,"./me.js":58076,"./mi":41848,"./mi.js":41848,"./mk":30306,"./mk.js":30306,"./ml":73739,"./ml.js":73739,"./mn":99053,"./mn.js":99053,"./mr":86169,"./mr.js":86169,"./ms":73386,"./ms-my":92297,"./ms-my.js":92297,"./ms.js":73386,"./mt":77075,"./mt.js":77075,"./my":72264,"./my.js":72264,"./nb":22274,"./nb.js":22274,"./ne":8235,"./ne.js":8235,"./nl":92572,"./nl-be":43784,"./nl-be.js":43784,"./nl.js":92572,"./nn":54566,"./nn.js":54566,"./oc-lnc":69330,"./oc-lnc.js":69330,"./pa-in":29849,"./pa-in.js":29849,"./pl":94418,"./pl.js":94418,"./pt":79834,"./pt-br":48303,"./pt-br.js":48303,"./pt.js":79834,"./ro":24457,"./ro.js":24457,"./ru":82271,"./ru.js":82271,"./sd":1221,"./sd.js":1221,"./se":33478,"./se.js":33478,"./si":17538,"./si.js":17538,"./sk":5784,"./sk.js":5784,"./sl":46637,"./sl.js":46637,"./sq":86794,"./sq.js":86794,"./sr":45719,"./sr-cyrl":3322,"./sr-cyrl.js":3322,"./sr.js":45719,"./ss":56e3,"./ss.js":56e3,"./sv":41011,"./sv.js":41011,"./sw":40748,"./sw.js":40748,"./ta":11025,"./ta.js":11025,"./te":11885,"./te.js":11885,"./tet":28861,"./tet.js":28861,"./tg":86571,"./tg.js":86571,"./th":55802,"./th.js":55802,"./tk":59527,"./tk.js":59527,"./tl-ph":29231,"./tl-ph.js":29231,"./tlh":31052,"./tlh.js":31052,"./tr":85096,"./tr.js":85096,"./tzl":79846,"./tzl.js":79846,"./tzm":81765,"./tzm-latn":97711,"./tzm-latn.js":97711,"./tzm.js":81765,"./ug-cn":48414,"./ug-cn.js":48414,"./uk":16618,"./uk.js":16618,"./ur":57777,"./ur.js":57777,"./uz":57609,"./uz-latn":72475,"./uz-latn.js":72475,"./uz.js":57609,"./vi":21135,"./vi.js":21135,"./x-pseudo":64051,"./x-pseudo.js":64051,"./yo":82218,"./yo.js":82218,"./zh-cn":52648,"./zh-cn.js":52648,"./zh-hk":1632,"./zh-hk.js":1632,"./zh-mo":31541,"./zh-mo.js":31541,"./zh-tw":50304,"./zh-tw.js":50304};function n(e){var t=s(e);return r(t)}function s(e){if(!r.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}n.keys=function(){return Object.keys(a)},n.resolve=s,e.exports=n,n.id=35358}}]);