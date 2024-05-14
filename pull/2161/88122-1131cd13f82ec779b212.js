"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[88122],{1960:function(e,t,l){var n=l(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(l(17383)),u=n(l(34579)),r=n(l(28452)),o=n(l(63072)),i=n(l(29511)),c=n(l(96540)),f=n(l(74136)),d=n(l(6787)),s=n(l(86952)),m=n(l(59944)),g=n(l(38008)),y=n(l(47194)),h=n(l(31042)),b=n(l(26714));function p(e,t,l){return t=(0,o.default)(t),(0,r.default)(e,O()?Reflect.construct(t,l||[],(0,o.default)(e).constructor):t.apply(e,l))}function O(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(O=function(){return!!e})()}var k=function(e){function t(e){var l;return(0,a.default)(this,t),(l=p(this,t,[e])).handleDisplayTypeChange=l.handleDisplayTypeChange.bind(l),l.handleToggleOneOnChange=l.handleToggleOneOnChange.bind(l),l.handleToggleTwoOnChange=l.handleToggleTwoOnChange.bind(l),l.handleToggleThreeOnChange=l.handleToggleThreeOnChange.bind(l),l.handleMenuButtonClick=l.handleMenuButtonClick.bind(l),l.state={toggle1Selection:!1,toggle2Selection:!1,toggle3Selection:!1,displayType:"tableView",buttonClickCount:0},l}return(0,i.default)(t,e),(0,u.default)(t,[{key:"handleMenuButtonClick",value:function(){this.setState((function(e){return{buttonClickCount:e.buttonClickCount+1}}))}},{key:"handleToggleOneOnChange",value:function(e,t){this.setState({toggle1Selection:t})}},{key:"handleToggleTwoOnChange",value:function(e,t){this.setState({toggle2Selection:t})}},{key:"handleToggleThreeOnChange",value:function(e,t){this.setState({toggle3Selection:t})}},{key:"handleDisplayTypeChange",value:function(e,t){this.setState({displayType:t})}},{key:"render",value:function(){return c.default.createElement(b.default,{isStartAligned:!0},c.default.createElement(b.default.Toggle,{text:"Toggle Item 1",className:"ToggleItem1",key:"toggle1",shouldCloseOnClick:!1,onChange:this.handleToggleOneOnChange,isSelected:this.state.toggle1Selection}),c.default.createElement(b.default.Toggle,{text:"Toggle Item 2",className:"ToggleItem2",key:"toggle2",shouldCloseOnClick:!1,onChange:this.handleToggleTwoOnChange,isSelected:this.state.toggle2Selection}),c.default.createElement(b.default.Toggle,{text:"Toggle Item 3",className:"ToggleItem3",key:"toggle3",shouldCloseOnClick:!1,onChange:this.handleToggleThreeOnChange,isSelected:this.state.toggle3Selection}),c.default.createElement(b.default.Divider,{key:"Divider1"}),c.default.createElement(b.default.Item,{text:"Menu Button 1",key:"MenuButton1",className:"MenuButton1",onClick:this.handleMenuButtonClick,shouldCloseOnClick:!1,subMenuItems:[c.default.createElement(b.default.Item,{text:"Default Item 1",key:"defaultItem1"}),c.default.createElement(b.default.Item,{text:"Default Item 2",key:"defaultItem2"})]}),c.default.createElement(b.default.Item,{text:"MenuButton 2",key:"MenuButton2",className:"MenuButton2",shouldCloseOnClick:!1,subMenuItems:[c.default.createElement(b.default.Item,{text:"Default Item 1",key:"defaultItem1"}),c.default.createElement(b.default.Item,{text:"Default Item 2",key:"defaultItem2"})]}),c.default.createElement(b.default.Item,{text:"MenuButton 3",key:"MenuButton3",className:"MenuButton3",shouldCloseOnClick:!1,subMenuItems:[c.default.createElement(b.default.Item,{text:"Default Item 1",key:"defaultItem1"}),c.default.createElement(b.default.Item,{text:"Default Item 2",key:"defaultItem2"})]}),c.default.createElement(b.default.Divider,{key:"Divider2"}),c.default.createElement(b.default.ItemGroup,{key:"ViewTypeSelection",className:"ViewTypeGroup",selectedKeys:[this.state.displayType],onChange:this.handleDisplayTypeChange},c.default.createElement(b.default.Item,{icon:c.default.createElement(f.default,null),text:"Table View",className:"TableView",key:"tableView",isIconOnly:!0,shouldCloseOnClick:!1,isSelected:"tableView"===this.state.displayType}),c.default.createElement(b.default.Item,{icon:c.default.createElement(d.default,null),text:"Expanded View",className:"ExpandedView",key:"expandedView",isIconOnly:!0,shouldCloseOnClick:!1,isSelected:"expandedView"===this.state.displayType}),c.default.createElement(b.default.Item,{icon:c.default.createElement(s.default,null),text:"Trending View",className:"TendingView",key:"trendingView",isIconOnly:!0,shouldCloseOnClick:!1,isSelected:"trendingView"===this.state.displayType})),c.default.createElement(b.default.Divider,{key:"Divider3"}),c.default.createElement(b.default.Item,{icon:c.default.createElement(m.default,null),text:"Send Message",className:"SendMessage",key:"send",isIconOnly:!0}),c.default.createElement(b.default.ItemGroup,{className:"MessageActionGroup",key:"messageActionGroup"},c.default.createElement(b.default.Item,{icon:c.default.createElement(g.default,null),text:"Print Message",className:"Print",key:"print",isIconOnly:!0}),c.default.createElement(b.default.Item,{icon:c.default.createElement(y.default,null),text:"Move Message to Folder...",className:"Move",key:"move",isIconOnly:!0}),c.default.createElement(b.default.Item,{icon:c.default.createElement(h.default,null),text:"Trash Message",key:"trash",className:"Trash",isIconOnly:!0})),c.default.createElement(b.default.Divider,{key:"Divider4"}),c.default.createElement(b.default.Item,{text:"Button 1",className:"Button1",key:"button1"}),c.default.createElement(b.default.Item,{text:"Button 2",className:"Button2",key:"button2"}),c.default.createElement(b.default.Item,{text:"Button 3",className:"Button3",key:"button3"}),c.default.createElement(b.default.Item,{text:"Button 4",className:"Button4",key:"button4"}),c.default.createElement(b.default.Item,{text:"Button 5",className:"Button5",key:"button5"}),c.default.createElement(b.default.Item,{text:"Button 6",className:"Button6",key:"button6"}),c.default.createElement(b.default.Item,{text:"Button 7",className:"Button7",key:"button7"}),c.default.createElement(b.default.Item,{text:"Button 8",className:"Button8",key:"button8"}))}}])}(c.default.Component);t.default=k},92420:function(e,t,l){l.r(t),t.default={arrange:"Arrange-module__arrange___hY0Ml",fill:"Arrange-module__fill___m88eq",fit:"Arrange-module__fit___tv8j-",center:"Arrange-module__center___9qfhG",bottom:"Arrange-module__bottom___8beod",stretch:"Arrange-module__stretch___eQF-k",default:"Arrange-module__default___z+O29"}},39496:function(e,t,l){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.AlignmentTypes=void 0;var a=c(l(96540)),u=c(l(5556)),r=c(l(67967)),o=c(l(92420)),i=["fitStart","fill","fitEnd","align","alignFitStart","alignFill","alignFitEnd","fitStartAttributes","fillAttributes","fitEndAttributes"];function c(e){return e&&e.__esModule?e:{default:e}}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e},f.apply(this,arguments)}function d(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function s(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?d(Object(l),!0).forEach((function(t){m(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):d(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function m(e,t,l){var a;return a=function(e,t){if("object"!=n(e)||!e)return e;var l=e[Symbol.toPrimitive];if(void 0!==l){var a=l.call(e,t||"default");if("object"!=n(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"==n(a)?a:a+"")in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function g(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},u=Object.keys(e);for(n=0;n<u.length;n++)l=u[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)l=u[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}t.AlignmentTypes={CENTER:"center",BOTTOM:"bottom",STRETCH:"stretch"};var y=r.default.bind(o.default),h={fitStart:u.default.element,fill:u.default.element.isRequired,fitEnd:u.default.element,align:u.default.oneOf(["center","bottom","stretch"]),alignFitStart:u.default.oneOf(["center","bottom","stretch"]),alignFitEnd:u.default.oneOf(["center","bottom","stretch"]),alignFill:u.default.oneOf(["center","bottom","stretch"]),fitStartAttributes:u.default.object,fillAttributes:u.default.object,fitEndAttributes:u.default.object},b=function(e){var t=e.fitStart,l=e.fill,n=e.fitEnd,u=e.align,r=e.alignFitStart,o=e.alignFill,c=e.alignFitEnd,d=e.fitStartAttributes,m=e.fillAttributes,h=e.fitEndAttributes,b=g(e,i),p=s({},d),O=s({},m),k=s({},h);return a.default.createElement("span",f({},b,{className:y("arrange",b.className)}),a.default.createElement("span",f({},p,{className:y("fit",u||r,p.className,"fit-block")}),t),a.default.createElement("span",f({},O,{className:y("fill",u||o,O.className,"fill-block")}),l),a.default.createElement("span",f({},k,{className:y("fit",u||c,k.className)}),n))};b.propTypes=h;t.default=b}}]);