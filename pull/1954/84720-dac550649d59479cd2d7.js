(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[84720],{76313:function(e,t,n){"use strict";var r=n(64836),a=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=r(n(38416)),l=r(n(10434)),i=r(n(70215)),d=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=v(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=s?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(r,l,i):r[l]=e[l]}return r.default=e,n&&n.set(e,r),r}(n(67294)),u=r(n(45697)),o=n(25387),c=r(n(94184)),j=r(n(47166)),f=r(n(47341)),p=n(55877),m=r(n(51331)),b=r(n(29270)),h=r(n(91986)),g=r(n(91417)),_=r(n(40873)),y=["dayAttributes","disabled","displayFormat","error","help","hideRequired","isIncomplete","isInline","isInvalid","isLegendHidden","intl","legend","legendAttributes","monthAttributes","maxWidth","name","onBlur","onChange","onFocus","required","showOptional","value","yearAttributes"];function v(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(v=function(e){return e?n:t})(e)}function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){(0,s.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var w=j.default.bind(_.default),I={legend:u.default.string.isRequired,name:u.default.string.isRequired,dayAttributes:u.default.object,disabled:u.default.bool,displayFormat:u.default.string,error:u.default.node,help:u.default.node,hideRequired:u.default.bool,isIncomplete:u.default.bool,isInline:u.default.bool,isInvalid:u.default.bool,isLegendHidden:u.default.bool,intl:u.default.shape({formatMessage:u.default.func}),legendAttributes:u.default.object,monthAttributes:u.default.object,maxWidth:u.default.string,onBlur:u.default.func,onChange:u.default.func,onFocus:u.default.func,required:u.default.bool,showOptional:u.default.bool,value:u.default.string,yearAttributes:u.default.object},F={dayAttributes:{},disabled:!1,displayFormat:void 0,error:null,help:null,hideRequired:!1,isIncomplete:!1,isInline:!1,isInvalid:!1,isLegendHidden:!1,legendAttributes:{},monthAttributes:{},maxWidth:void 0,onBlur:void 0,onChange:void 0,onFocus:void 0,required:!1,showOptional:!1,value:"",yearAttributes:{}},z=function(e){var t=e.dayAttributes,n=e.disabled,r=e.displayFormat,a=e.error,s=e.help,u=e.hideRequired,o=e.isIncomplete,j=e.isInline,_=e.isInvalid,v=e.isLegendHidden,k=e.intl,I=e.legend,F=e.legendAttributes,z=e.monthAttributes,D=(e.maxWidth,e.name),E=e.onBlur,q=e.onChange,P=e.onFocus,x=e.required,A=e.showOptional,N=e.value,M=e.yearAttributes,C=(0,i.default)(e,y),W=(0,d.useRef)((0,p.v4)()),L=d.default.useContext(f.default),R=(0,c.default)(w("date-input-field",{"is-inline":j},L.className),C.className),B=(0,c.default)(w("legend",L.className),F.className),H="terra-date-input-field-description-help-".concat(W.current),S="terra-date-input-field-description-error-".concat(W.current),T=H;a&&_&&(T="".concat(S," ").concat(H));var U=z&&z["aria-describedby"],Y=t&&t["aria-describedby"],Q=M&&M["aria-describedby"],V=U?"".concat(T," ").concat(U):T,Z=Y?"".concat(T," ").concat(Y):T,G=Q?"".concat(T," ").concat(Q):T,J=d.default.createElement("legend",{className:w(["legend-group",{"legend-group-hidden":v}])},d.default.createElement("div",(0,l.default)({},F,{className:B}),_&&d.default.createElement("span",{className:w("error-icon")},d.default.createElement(m.default,null)),x&&(_||!u)&&d.default.createElement(d.default.Fragment,null,d.default.createElement("div",{"aria-hidden":"true",className:w("required")},"*"),d.default.createElement(b.default,{text:k.formatMessage({id:"Terra.date.input.required"})})),I,x&&!_&&u&&d.default.createElement("span",{className:w("required-hidden")},"*"),A&&!x&&d.default.createElement("span",{className:w("optional")},k.formatMessage({id:"Terra.date.input.optional"})),!_&&d.default.createElement("span",{className:w("error-icon-hidden")}))),K=g.default.getDateFormat({displayFormat:r,intl:k});return d.default.createElement("fieldset",(0,l.default)({},C,{className:R}),J,s&&d.default.createElement(b.default,{text:s}),d.default.createElement(h.default,{a11yLabel:I,dayAttributes:O(O({},t),{"aria-describedby":Z}),disabled:n,displayFormat:r,isA11yControlled:!0,isIncomplete:o,isInvalid:_,monthAttributes:O(O({},z),{"aria-describedby":V}),name:D,onBlur:E,onChange:q,onFocus:P,required:x,useExternalFormatMask:!0,value:N,yearAttributes:O(O({},M),{"aria-describedby":G})}),_&&a&&d.default.createElement("div",{id:S,className:w("error-text")},a),d.default.createElement("div",{"aria-hidden":!0,className:w("help-text")},s?"".concat(K," ").concat(s):K))};z.propTypes=I,z.defaultProps=F;t.default=(0,o.injectIntl)(z)},61121:function(e,t,n){"use strict";var r=n(64836),a=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=r(n(27424)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=d(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=s?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(r,l,i):r[l]=e[l]}return r.default=e,n&&n.set(e,r),r}(n(67294)),i=r(n(76313));function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(d=function(e){return e?n:t})(e)}t.default=function(){var e=(0,l.useState)("1999-03-10"),t=(0,s.default)(e,2),n=t[0],r=t[1],a=(0,l.useState)(!1),d=(0,s.default)(a,2),u=d[0],o=d[1];return l.default.createElement("div",null,l.default.createElement(i.default,{legend:"Legend text",name:"date-input",value:n,onChange:function(e,t){return r(t)},showOptional:!0,error:"Error message",help:"Help message",isInvalid:u}),l.default.createElement("p",null,"DateInputField Value: ".concat(n)),l.default.createElement("button",{type:"button",onClick:function(){return o((function(e){return!e}))}},"Toggle isInvalid"))}},40873:function(e,t,n){"use strict";n.r(t),t.default={"orion-fusion-theme":"DateInputField-module__orion-fusion-theme___6WeUI","clinical-lowlight-theme":"DateInputField-module__clinical-lowlight-theme___ZPdZB","date-input-field":"DateInputField-module__date-input-field___y3E0d","is-inline":"DateInputField-module__is-inline___Y5zYN","legend-group":"DateInputField-module__legend-group___Y8qQh","legend-group-hidden":"DateInputField-module__legend-group-hidden___NubE+",legend:"DateInputField-module__legend___8v6Uw","error-icon":"DateInputField-module__error-icon___9jalk","error-icon-hidden":"DateInputField-module__error-icon-hidden___7yXqb",required:"DateInputField-module__required___c+zgG","required-hidden":"DateInputField-module__required-hidden___udcsO",optional:"DateInputField-module__optional___Jtg7S","help-text":"DateInputField-module__help-text___zQnVy","error-text":"DateInputField-module__error-text___D5gK6"}},46700:function(e,t,n){var r={"./af":42786,"./af.js":42786,"./ar":30867,"./ar-dz":14130,"./ar-dz.js":14130,"./ar-kw":96135,"./ar-kw.js":96135,"./ar-ly":56440,"./ar-ly.js":56440,"./ar-ma":47702,"./ar-ma.js":47702,"./ar-sa":16040,"./ar-sa.js":16040,"./ar-tn":37100,"./ar-tn.js":37100,"./ar.js":30867,"./az":31083,"./az.js":31083,"./be":9808,"./be.js":9808,"./bg":68338,"./bg.js":68338,"./bm":67438,"./bm.js":67438,"./bn":8905,"./bn-bd":76225,"./bn-bd.js":76225,"./bn.js":8905,"./bo":11560,"./bo.js":11560,"./br":1278,"./br.js":1278,"./bs":80622,"./bs.js":80622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":50877,"./cv.js":50877,"./cy":47373,"./cy.js":47373,"./da":24780,"./da.js":24780,"./de":59740,"./de-at":60217,"./de-at.js":60217,"./de-ch":60894,"./de-ch.js":60894,"./de.js":59740,"./dv":5300,"./dv.js":5300,"./el":50837,"./el.js":50837,"./en-au":78348,"./en-au.js":78348,"./en-ca":77925,"./en-ca.js":77925,"./en-gb":22243,"./en-gb.js":22243,"./en-ie":46436,"./en-ie.js":46436,"./en-il":47207,"./en-il.js":47207,"./en-in":44175,"./en-in.js":44175,"./en-nz":76319,"./en-nz.js":76319,"./en-sg":31662,"./en-sg.js":31662,"./eo":92915,"./eo.js":92915,"./es":55655,"./es-do":55251,"./es-do.js":55251,"./es-mx":96112,"./es-mx.js":96112,"./es-us":71146,"./es-us.js":71146,"./es.js":55655,"./et":5603,"./et.js":5603,"./eu":77763,"./eu.js":77763,"./fa":76959,"./fa.js":76959,"./fi":11897,"./fi.js":11897,"./fil":42549,"./fil.js":42549,"./fo":94694,"./fo.js":94694,"./fr":94470,"./fr-ca":63049,"./fr-ca.js":63049,"./fr-ch":52330,"./fr-ch.js":52330,"./fr.js":94470,"./fy":5044,"./fy.js":5044,"./ga":29295,"./ga.js":29295,"./gd":2101,"./gd.js":2101,"./gl":38794,"./gl.js":38794,"./gom-deva":27884,"./gom-deva.js":27884,"./gom-latn":23168,"./gom-latn.js":23168,"./gu":95349,"./gu.js":95349,"./he":24206,"./he.js":24206,"./hi":30094,"./hi.js":30094,"./hr":30316,"./hr.js":30316,"./hu":22138,"./hu.js":22138,"./hy-am":11423,"./hy-am.js":11423,"./id":29218,"./id.js":29218,"./is":90135,"./is.js":90135,"./it":90626,"./it-ch":10150,"./it-ch.js":10150,"./it.js":90626,"./ja":39183,"./ja.js":39183,"./jv":24286,"./jv.js":24286,"./ka":12105,"./ka.js":12105,"./kk":47772,"./kk.js":47772,"./km":18758,"./km.js":18758,"./kn":79282,"./kn.js":79282,"./ko":33730,"./ko.js":33730,"./ku":1408,"./ku.js":1408,"./ky":33291,"./ky.js":33291,"./lb":36841,"./lb.js":36841,"./lo":55466,"./lo.js":55466,"./lt":57010,"./lt.js":57010,"./lv":37595,"./lv.js":37595,"./me":39861,"./me.js":39861,"./mi":35493,"./mi.js":35493,"./mk":95966,"./mk.js":95966,"./ml":87341,"./ml.js":87341,"./mn":5115,"./mn.js":5115,"./mr":10370,"./mr.js":10370,"./ms":9847,"./ms-my":41237,"./ms-my.js":41237,"./ms.js":9847,"./mt":72126,"./mt.js":72126,"./my":56165,"./my.js":56165,"./nb":64924,"./nb.js":64924,"./ne":16744,"./ne.js":16744,"./nl":93901,"./nl-be":59814,"./nl-be.js":59814,"./nl.js":93901,"./nn":83877,"./nn.js":83877,"./oc-lnc":92135,"./oc-lnc.js":92135,"./pa-in":47762,"./pa-in.js":47762,"./pl":64495,"./pl.js":64495,"./pt":89520,"./pt-br":57971,"./pt-br.js":57971,"./pt.js":89520,"./ro":96459,"./ro.js":96459,"./ru":21793,"./ru.js":21793,"./sd":40950,"./sd.js":40950,"./se":10490,"./se.js":10490,"./si":90124,"./si.js":90124,"./sk":64249,"./sk.js":64249,"./sl":14985,"./sl.js":14985,"./sq":51104,"./sq.js":51104,"./sr":49131,"./sr-cyrl":79915,"./sr-cyrl.js":79915,"./sr.js":49131,"./ss":85893,"./ss.js":85893,"./sv":98760,"./sv.js":98760,"./sw":91172,"./sw.js":91172,"./ta":27333,"./ta.js":27333,"./te":23110,"./te.js":23110,"./tet":52095,"./tet.js":52095,"./tg":27321,"./tg.js":27321,"./th":9041,"./th.js":9041,"./tk":19005,"./tk.js":19005,"./tl-ph":75768,"./tl-ph.js":75768,"./tlh":89444,"./tlh.js":89444,"./tr":72397,"./tr.js":72397,"./tzl":28254,"./tzl.js":28254,"./tzm":51106,"./tzm-latn":30699,"./tzm-latn.js":30699,"./tzm.js":51106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":67691,"./uk.js":67691,"./ur":13795,"./ur.js":13795,"./uz":6791,"./uz-latn":14126,"./uz-latn.js":14126,"./uz.js":6791,"./vi":65666,"./vi.js":65666,"./x-pseudo":14378,"./x-pseudo.js":14378,"./yo":75805,"./yo.js":75805,"./zh-cn":83839,"./zh-cn.js":83839,"./zh-hk":55726,"./zh-hk.js":55726,"./zh-mo":99807,"./zh-mo.js":99807,"./zh-tw":74152,"./zh-tw.js":74152};function a(e){var t=s(e);return n(t)}function s(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=s,e.exports=a,a.id=46700}}]);