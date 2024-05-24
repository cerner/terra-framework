"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[94909],{70185:function(e,t,n){var l=n(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(17383)),r=l(n(34579)),i=l(n(28452)),o=l(n(63072)),u=l(n(29511)),c=l(n(96540)),s=n(33049),f=l(n(26714));function d(e,t,n){return t=(0,o.default)(t),(0,i.default)(e,g()?Reflect.construct(t,n||[],(0,o.default)(e).constructor):t.apply(e,n))}function g(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(g=function(){return!!e})()}var h=function(e){function t(e){var n;return(0,a.default)(this,t),(n=d(this,t,[e])).handleDisplayTypeChange=n.handleDisplayTypeChange.bind(n),n.handleToggleOneOnChange=n.handleToggleOneOnChange.bind(n),n.handleToggleTwoOnChange=n.handleToggleTwoOnChange.bind(n),n.handleToggleThreeOnChange=n.handleToggleThreeOnChange.bind(n),n.state={toggle1Selection:!1,toggle2Selection:!1,toggle3Selection:!1,selectedKeys:[]},n}return(0,u.default)(t,e),(0,r.default)(t,[{key:"handleToggleOneOnChange",value:function(e,t){this.setState({toggle1Selection:t})}},{key:"handleToggleTwoOnChange",value:function(e,t){this.setState({toggle2Selection:t})}},{key:"handleToggleThreeOnChange",value:function(e,t){this.setState({toggle3Selection:t})}},{key:"handleDisplayTypeChange",value:function(e,t){var n=this.state.selectedKeys;n.includes(t)?n.splice(n.indexOf(t),1):n.push(t),this.setState({selectedKeys:n})}},{key:"render",value:function(){return c.default.createElement(f.default,null,c.default.createElement(f.default.Toggle,{text:"InDesign",key:"toggle1",shouldCloseOnClick:!1,onChange:this.handleToggleOneOnChange,isSelected:this.state.toggle1Selection}),c.default.createElement(f.default.Toggle,{text:"Photoshop",key:"toggle21",shouldCloseOnClick:!1,isSelected:this.state.toggle2Selection}),c.default.createElement(f.default.Toggle,{text:"Illustrator",key:"toggle3",shouldCloseOnClick:!1,onChange:this.handleToggleThreeOnChange,isSelected:this.state.toggle3Selection}),c.default.createElement(f.default.Divider,{key:"Divider1"}),c.default.createElement(f.default.Item,{text:"Browsers",key:"MenuButton1",shouldCloseOnClick:!1,subMenuItems:[c.default.createElement(f.default.Item,{text:"Edge",key:"defaultItem1"}),c.default.createElement(f.default.Item,{text:"Chrome",key:"defaultItem2"})]}),c.default.createElement(f.default.Divider,{key:"Divider2"}),c.default.createElement(f.default.ItemGroup,{key:"ViewTypeSelection",isMultiSelect:!0,selectedKeys:this.state.selectedKeys,onChange:this.handleDisplayTypeChange},c.default.createElement(f.default.Item,{icon:c.default.createElement(s.IconTable,null),text:"Table View",key:"tableView",id:"tableView",isIconOnly:!0,shouldCloseOnClick:!1,isSelected:this.state.selectedKeys.includes("tableView")}),c.default.createElement(f.default.Item,{icon:c.default.createElement(s.IconFlowsheet,null),text:"Expanded View",key:"expandedView",isIconOnly:!0,shouldCloseOnClick:!1,isSelected:this.state.selectedKeys.includes("expandedView")}),c.default.createElement(f.default.Item,{icon:c.default.createElement(s.IconVisualization,null),text:"Trending View",key:"trendingView",id:"trendingView",isIconOnly:!0,shouldCloseOnClick:!1,isSelected:this.state.selectedKeys.includes("trendingView")})),c.default.createElement(f.default.Divider,{key:"Divider3"}),c.default.createElement(f.default.Item,{icon:c.default.createElement(s.IconSend,null),text:"Send Message",key:"send",isIconOnly:!0}))}}])}(c.default.Component);t.default=h},92420:function(e,t,n){n.r(t),t.default={arrange:"Arrange-module__arrange___hY0Ml",fill:"Arrange-module__fill___m88eq",fit:"Arrange-module__fit___tv8j-",center:"Arrange-module__center___9qfhG",bottom:"Arrange-module__bottom___8beod",stretch:"Arrange-module__stretch___eQF-k",default:"Arrange-module__default___z+O29"}},39496:function(e,t,n){function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.AlignmentTypes=void 0;var a=c(n(96540)),r=c(n(5556)),i=c(n(67967)),o=c(n(92420)),u=["fitStart","fill","fitEnd","align","alignFitStart","alignFill","alignFitEnd","fitStartAttributes","fillAttributes","fitEndAttributes"];function c(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},s.apply(this,arguments)}function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){g(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t,n){var a;return a=function(e,t){if("object"!=l(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!=l(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"==l(a)?a:a+"")in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n={};for(var l in e)if(Object.prototype.hasOwnProperty.call(e,l)){if(t.indexOf(l)>=0)continue;n[l]=e[l]}return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}t.AlignmentTypes={CENTER:"center",BOTTOM:"bottom",STRETCH:"stretch"};var m=i.default.bind(o.default),y={fitStart:r.default.element,fill:r.default.element.isRequired,fitEnd:r.default.element,align:r.default.oneOf(["center","bottom","stretch"]),alignFitStart:r.default.oneOf(["center","bottom","stretch"]),alignFitEnd:r.default.oneOf(["center","bottom","stretch"]),alignFill:r.default.oneOf(["center","bottom","stretch"]),fitStartAttributes:r.default.object,fillAttributes:r.default.object,fitEndAttributes:r.default.object},b=function(e){var t=e.fitStart,n=e.fill,l=e.fitEnd,r=e.align,i=e.alignFitStart,o=e.alignFill,c=e.alignFitEnd,f=e.fitStartAttributes,g=e.fillAttributes,y=e.fitEndAttributes,b=h(e,u),p=d({},f),O=d({},g),v=d({},y);return a.default.createElement("span",s({},b,{className:m("arrange",b.className)}),a.default.createElement("span",s({},p,{className:m("fit",r||i,p.className,"fit-block")}),t),a.default.createElement("span",s({},O,{className:m("fill",r||o,O.className,"fill-block")}),n),a.default.createElement("span",s({},v,{className:m("fit",r||c,v.className)}),l))};b.propTypes=y;t.default=b}}]);