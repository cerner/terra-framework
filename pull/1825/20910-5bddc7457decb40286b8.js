"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[20910],{82457:function(e,t,n){var o=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=o(n(67294)),a=o(n(45697)),r=n(25387),i=o(n(57927)),u={items:a.default.arrayOf(a.default.shape({key:a.default.string,text:a.default.string,title:a.default.string,href:a.default.string,onClick:a.default.func,onBlur:a.default.func,onFocus:a.default.func,onKeyDown:a.default.func,onKeyUp:a.default.func,onMouseDown:a.default.func,variant:a.default.oneOf(["default","external","image","video","audio","document"])})),intl:a.default.shape({formatMessage:a.default.func}).isRequired},f=function(e){var t=e.items,n=e.intl,o=t.slice(0,t.length-1),a=t[t.length-1];return l.default.createElement(i.default,{isReversedChildrenOrder:!0,useHorizontalIcon:!0,isStartAligned:!0,iconText:n.formatMessage({id:"Terra.file-path.icon.text"})},o.map((function(e){return[l.default.createElement(i.default.Divider,{useChevronRightIcon:!0,key:"divider-".concat(e.key)}),l.default.createElement(i.default.Hyperlink,{key:e.key,text:e.text,href:e.href,onClick:e.onClick,onBlur:e.onBlur,onFocus:e.onFocus,onKeyDown:e.onKeyDown,onKeyUp:e.onKeyUp,onMouseDown:e.onMouseDown,variant:e.variant})]})).flat(),l.default.createElement(i.default.Divider,{useChevronRightIcon:!0,key:"divider-".concat(a.key)}),l.default.createElement(i.default.Item,{isTextOnly:!0,text:a.text,key:a.key}))};f.propTypes=u,f.defaultProps={};t.default=(0,r.injectIntl)(f)},20910:function(e,t,n){var o=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=o(n(67294)),a=o(n(82457)),r=[{key:"link-0",text:"Link 0",href:"https://google.com"},{key:"link-1",text:"Link 1",href:"https://google.com"},{key:"link-2",text:"Link 2",href:"https://google.com"},{key:"link-3",text:"Link 3",href:"https://google.com"},{key:"link-4",text:"Link 4",href:"https://google.com"},{key:"link-5",text:"Link 5",href:"https://google.com"},{key:"link-6",text:"Link 6",href:"https://google.com"},{key:"link-7",text:"Link 7",href:"https://google.com"},{key:"link-8",text:"Link 8",href:"https://google.com"}];t.default=function(){return l.default.createElement(a.default,{items:r})}}}]);