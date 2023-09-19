"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[77607],{63959:function(e,t,a){var l=a(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(56690)),u=l(a(89728)),r=l(a(66115)),o=l(a(61655)),d=l(a(94993)),c=l(a(73808)),i=l(a(67294)),s=l(a(29690)),f=l(a(68559)),m=l(a(75852)),h=l(a(66053)),g=l(a(87491)),v=l(a(94809)),y=l(a(2396)),p=l(a(81061));function O(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,l=(0,c.default)(e);if(t){var n=(0,c.default)(this).constructor;a=Reflect.construct(l,arguments,n)}else a=l.apply(this,arguments);return(0,d.default)(this,a)}}var w=function(e){(0,o.default)(a,e);var t=O(a);function a(e){var l;return(0,n.default)(this,a),(l=t.call(this,e)).handleDisplayTypeChange=l.handleDisplayTypeChange.bind((0,r.default)(l)),l.handleToggleOneOnChange=l.handleToggleOneOnChange.bind((0,r.default)(l)),l.handleToggleTwoOnChange=l.handleToggleTwoOnChange.bind((0,r.default)(l)),l.handleToggleThreeOnChange=l.handleToggleThreeOnChange.bind((0,r.default)(l)),l.handleMenuButtonClick=l.handleMenuButtonClick.bind((0,r.default)(l)),l.state={toggle1Selection:!1,toggle2Selection:!1,toggle3Selection:!1,displayType:"tableView",buttonClickCount:0},l}return(0,u.default)(a,[{key:"handleMenuButtonClick",value:function(){this.setState((function(e){return{buttonClickCount:e.buttonClickCount+1}}))}},{key:"handleToggleOneOnChange",value:function(e,t){this.setState({toggle1Selection:t})}},{key:"handleToggleTwoOnChange",value:function(e,t){this.setState({toggle2Selection:t})}},{key:"handleToggleThreeOnChange",value:function(e,t){this.setState({toggle3Selection:t})}},{key:"handleDisplayTypeChange",value:function(e,t){this.setState({displayType:t})}},{key:"render",value:function(){return i.default.createElement(p.default,null,i.default.createElement(p.default.Toggle,{text:"Toggle Item 1",className:"ToggleItem1",key:"toggle1",shouldCloseOnClick:!1,onChange:this.handleToggleOneOnChange,isSelected:this.state.toggle1Selection,isSelectable:!1}),i.default.createElement(p.default.Toggle,{text:"Toggle Item 2",className:"ToggleItem2",key:"toggle2",shouldCloseOnClick:!1,onChange:this.handleToggleTwoOnChange,isSelected:this.state.toggle2Selection}),i.default.createElement(p.default.Toggle,{text:"Toggle Item 3",className:"ToggleItem3",key:"toggle3",shouldCloseOnClick:!1,onChange:this.handleToggleThreeOnChange,isSelected:this.state.toggle3Selection}),i.default.createElement(p.default.Divider,{key:"Divider1"}),i.default.createElement(p.default.Item,{text:"Menu Button 1",key:"MenuButton1",className:"MenuButton1",onClick:this.handleMenuButtonClick,shouldCloseOnClick:!1,subMenuItems:[i.default.createElement(p.default.Item,{text:"Default Item 1",key:"defaultItem1"}),i.default.createElement(p.default.Item,{text:"Default Item 2",key:"defaultItem2"})]}),i.default.createElement(p.default.Item,{text:"MenuButton 2",key:"MenuButton2",className:"MenuButton2",shouldCloseOnClick:!1,subMenuItems:[i.default.createElement(p.default.Item,{text:"Default Item 1",key:"defaultItem1"}),i.default.createElement(p.default.Item,{text:"Default Item 2",key:"defaultItem2"})]}),i.default.createElement(p.default.Item,{text:"MenuButton 3",key:"MenuButton3",className:"MenuButton3",shouldCloseOnClick:!1,subMenuItems:[i.default.createElement(p.default.Item,{text:"Default Item 1",key:"defaultItem1"}),i.default.createElement(p.default.Item,{text:"Default Item 2",key:"defaultItem2"})]}),i.default.createElement(p.default.Divider,{key:"Divider2"}),i.default.createElement(p.default.ItemGroup,{key:"ViewTypeSelection",className:"ViewTypeGroup",selectedKeys:[this.state.displayType],onChange:this.handleDisplayTypeChange},i.default.createElement(p.default.Item,{icon:i.default.createElement(s.default,null),text:"Table View",className:"TableView",key:"tableView",isIconOnly:!0,shouldCloseOnClick:!1,isSelected:"tableView"===this.state.displayType}),i.default.createElement(p.default.Item,{icon:i.default.createElement(f.default,null),text:"Expanded View",className:"ExpandedView",key:"expandedView",isIconOnly:!0,shouldCloseOnClick:!1,isSelected:"expandedView"===this.state.displayType}),i.default.createElement(p.default.Item,{icon:i.default.createElement(m.default,null),text:"Trending View",className:"TendingView",key:"trendingView",isIconOnly:!0,shouldCloseOnClick:!1,isSelected:"trendingView"===this.state.displayType})),i.default.createElement(p.default.Divider,{key:"Divider3"}),i.default.createElement(p.default.Item,{icon:i.default.createElement(h.default,null),text:"Send Message",className:"SendMessage",key:"send",isIconOnly:!0}),i.default.createElement(p.default.ItemGroup,{className:"MessageActionGroup",key:"messageActionGroup"},i.default.createElement(p.default.Item,{icon:i.default.createElement(g.default,null),text:"Print Message",className:"Print",key:"print",isIconOnly:!0}),i.default.createElement(p.default.Item,{icon:i.default.createElement(v.default,null),text:"Move Message to Folder...",className:"Move",key:"move",isIconOnly:!0}),i.default.createElement(p.default.Item,{icon:i.default.createElement(y.default,null),text:"Trash Message",key:"trash",className:"Trash",isIconOnly:!0})),i.default.createElement(p.default.Divider,{key:"Divider4"}),i.default.createElement(p.default.Item,{text:"Button 1",className:"Button1",key:"button1"}),i.default.createElement(p.default.Item,{text:"Button 2",className:"Button2",key:"button2"}),i.default.createElement(p.default.Item,{text:"Button 3",className:"Button3",key:"button3"}),i.default.createElement(p.default.Item,{text:"Button 4",className:"Button4",key:"button4"}),i.default.createElement(p.default.Item,{text:"Button 5",className:"Button5",key:"button5"}),i.default.createElement(p.default.Item,{text:"Button 6",className:"Button6",key:"button6"}),i.default.createElement(p.default.Item,{text:"Button 7",className:"Button7",key:"button7"}),i.default.createElement(p.default.Item,{text:"Button 8",className:"Button8",key:"button8"}))}}]),a}(i.default.Component);t.default=w},68559:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=u(a(67294)),n=u(a(99139));function u(e){return e&&e.__esModule?e:{default:e}}function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},r.apply(this,arguments)}var o=function(e){var t=r({},e);return l.default.createElement(n.default,t,l.default.createElement("path",{d:"M0 0v48h48V0zm45 45H15V3h30z"}))};o.displayName="IconFlowsheet",o.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};var d=o;t.default=d},94809:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=u(a(67294)),n=u(a(99139));function u(e){return e&&e.__esModule?e:{default:e}}function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},r.apply(this,arguments)}var o=function(e){var t=r({},e);return l.default.createElement(n.default,t,l.default.createElement("path",{d:"M45.8 12c1.2 0 2.2 1 2.2 2.2v26.7c0 1.2-1 2.2-2.2 2.2H2.2C1 43 0 42 0 40.8V7.2C0 6 1 5 2.2 5H15c1.4.1 2.7.6 3.7 1.6l3.8 3.9c1 1 2.3 1.5 3.7 1.6l19.4-.1h.2z"}))};o.displayName="IconFolder",o.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};var d=o;t.default=d},87491:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=u(a(67294)),n=u(a(99139));function u(e){return e&&e.__esModule?e:{default:e}}function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},r.apply(this,arguments)}var o=function(e){var t=r({},e);return l.default.createElement(n.default,t,l.default.createElement("path",{d:"M39.8 12H35V1.7c0-.9-.8-1.7-1.7-1.7H8.7C7.8 0 7 .8 7 1.7V12H2.2C1 12 0 13 0 14.2v19.7C.1 35.1 1 36 2.2 36H7v10.3c0 .9.8 1.7 1.7 1.7h24.6c.9 0 1.7-.8 1.7-1.7V36h4.8c1.2 0 2.2-1 2.2-2.2V14.2c0-1.2-1-2.2-2.2-2.2zM10 3h22v9H10V3zm22 42H10V29.9h22V45zm3.2-24C34 21 33 20 33 18.8s1-2.2 2.2-2.2 2.2 1 2.2 2.2c0 1.2-1 2.2-2.2 2.2z"}))};o.displayName="IconPrinter",o.defaultProps={viewBox:"0 0 42 48",xmlns:"http://www.w3.org/2000/svg"};var d=o;t.default=d},66053:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=u(a(67294)),n=u(a(99139));function u(e){return e&&e.__esModule?e:{default:e}}function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},r.apply(this,arguments)}var o=function(e){var t=r({},e);return l.default.createElement(n.default,t,l.default.createElement("path",{d:"M47.2 24.9c1-.5 1-1.3 0-1.8L28 13.5 25 12c-.7-.3-2.9-1.5-3.9-2L1.9.4C.8-.1 0 .4 0 1.5V19c0 1.2.9 2.2 2.1 2.3L30.3 24c1.1.1 1.1.3 0 .4L2.1 27C.9 27.1 0 28 0 29.2v17.2c-.1.6.3 1.2.9 1.3.3 0 .6 0 .9-.2L21.1 38l3-1.5c.7-.3 2.9-1.5 3.9-2l19.2-9.6z"}))};o.displayName="IconSend",o.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};var d=o;t.default=d},29690:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=u(a(67294)),n=u(a(99139));function u(e){return e&&e.__esModule?e:{default:e}}function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},r.apply(this,arguments)}var o=function(e){var t=r({},e);return l.default.createElement(n.default,t,l.default.createElement("path",{d:"M0 0v48h48V0zm31 9v10H18V9zm0 13v10H18V22zm3 0h11v10H34zm0-3V9h11v10zM3 9h12v10H3zm0 13h12v10H3zm0 23V35h12v10zm15 0V35h13v10zm16 0V35h11v10z"}))};o.displayName="IconTable",o.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};var d=o;t.default=d},2396:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=u(a(67294)),n=u(a(99139));function u(e){return e&&e.__esModule?e:{default:e}}function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},r.apply(this,arguments)}var o=function(e){var t=r({},e);return l.default.createElement(n.default,t,l.default.createElement("path",{d:"M42.1 4H28V2a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2H5.9L5 11h38zM38 14H8.1l3.7 32a2.26 2.26 0 0 0 2.2 2h20a2.26 2.26 0 0 0 2.2-2l3.7-32z"}))};o.displayName="IconTrash",o.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};var d=o;t.default=d},75852:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=u(a(67294)),n=u(a(99139));function u(e){return e&&e.__esModule?e:{default:e}}function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},r.apply(this,arguments)}var o=function(e){var t=r({},e);return l.default.createElement(n.default,t,l.default.createElement("path",{d:"M48 8v16h-6v-5.7L25.31 35l-4.56-4.56L9.18 42H48v6H0V0h6v36.7l14.75-14.76 4.56 4.56L37.82 14H32V8z"}))};o.displayName="IconVisualization",o.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};var d=o;t.default=d}}]);