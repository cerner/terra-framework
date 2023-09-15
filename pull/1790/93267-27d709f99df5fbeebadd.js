"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[93267],{91347:function(e,t,l){var n=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(l(56690)),u=n(l(89728)),r=n(l(66115)),d=n(l(61655)),i=n(l(94993)),o=n(l(73808)),s=n(l(67294)),c=n(l(29690)),f=n(l(68559)),h=n(l(75852)),g=n(l(66053)),v=n(l(81061));function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var l,n=(0,o.default)(e);if(t){var a=(0,o.default)(this).constructor;l=Reflect.construct(n,arguments,a)}else l=n.apply(this,arguments);return(0,i.default)(this,l)}}var m=function(e){(0,d.default)(l,e);var t=y(l);function l(e){var n;return(0,a.default)(this,l),(n=t.call(this,e)).handleDisplayTypeChange=n.handleDisplayTypeChange.bind((0,r.default)(n)),n.handleToggleOneOnChange=n.handleToggleOneOnChange.bind((0,r.default)(n)),n.handleToggleTwoOnChange=n.handleToggleTwoOnChange.bind((0,r.default)(n)),n.handleToggleThreeOnChange=n.handleToggleThreeOnChange.bind((0,r.default)(n)),n.state={toggle1Selection:!1,toggle2Selection:!1,toggle3Selection:!1,selectedKeys:[]},n}return(0,u.default)(l,[{key:"handleToggleOneOnChange",value:function(e,t){this.setState({toggle1Selection:t})}},{key:"handleToggleTwoOnChange",value:function(e,t){this.setState({toggle2Selection:t})}},{key:"handleToggleThreeOnChange",value:function(e,t){this.setState({toggle3Selection:t})}},{key:"handleDisplayTypeChange",value:function(e,t){var l=this.state.selectedKeys;l.includes(t)?l.splice(l.indexOf(t),1):l.push(t),this.setState({selectedKeys:l})}},{key:"render",value:function(){return s.default.createElement(v.default,null,s.default.createElement(v.default.Toggle,{text:"InDesign",key:"toggle1",shouldCloseOnClick:!1,onChange:this.handleToggleOneOnChange,isSelected:this.state.toggle1Selection}),s.default.createElement(v.default.Toggle,{text:"Photoshop",key:"toggle21",shouldCloseOnClick:!1,isSelected:this.state.toggle2Selection}),s.default.createElement(v.default.Toggle,{text:"Illustrator",key:"toggle3",shouldCloseOnClick:!1,onChange:this.handleToggleThreeOnChange,isSelected:this.state.toggle3Selection}),s.default.createElement(v.default.Divider,{key:"Divider1"}),s.default.createElement(v.default.Item,{text:"Browsers",key:"MenuButton1",shouldCloseOnClick:!1,subMenuItems:[s.default.createElement(v.default.Item,{text:"Edge",key:"defaultItem1"}),s.default.createElement(v.default.Item,{text:"Chrome",key:"defaultItem2"})]}),s.default.createElement(v.default.Divider,{key:"Divider2"}),s.default.createElement(v.default.ItemGroup,{key:"ViewTypeSelection",isMultiSelect:!0,selectedKeys:this.state.selectedKeys,onChange:this.handleDisplayTypeChange},s.default.createElement(v.default.Item,{icon:s.default.createElement(c.default,null),text:"Table View",key:"tableView",id:"tableView",isIconOnly:!0,shouldCloseOnClick:!1,isSelected:this.state.selectedKeys.includes("tableView")}),s.default.createElement(v.default.Item,{icon:s.default.createElement(f.default,null),text:"Expanded View",key:"expandedView",isIconOnly:!0,shouldCloseOnClick:!1,isSelected:this.state.selectedKeys.includes("expandedView")}),s.default.createElement(v.default.Item,{icon:s.default.createElement(h.default,null),text:"Trending View",key:"trendingView",id:"trendingView",isIconOnly:!0,shouldCloseOnClick:!1,isSelected:this.state.selectedKeys.includes("trendingView")})),s.default.createElement(v.default.Divider,{key:"Divider3"}),s.default.createElement(v.default.Item,{icon:s.default.createElement(g.default,null),text:"Send Message",key:"send",isIconOnly:!0}))}}]),l}(s.default.Component);t.default=m},68559:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(l(67294)),a=u(l(99139));function u(e){return e&&e.__esModule?e:{default:e}}function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e},r.apply(this,arguments)}var d=function(e){var t=r({},e);return n.default.createElement(a.default,t,n.default.createElement("path",{d:"M0 0v48h48V0zm45 45H15V3h30z"}))};d.displayName="IconFlowsheet",d.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};var i=d;t.default=i},29690:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(l(67294)),a=u(l(99139));function u(e){return e&&e.__esModule?e:{default:e}}function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e},r.apply(this,arguments)}var d=function(e){var t=r({},e);return n.default.createElement(a.default,t,n.default.createElement("path",{d:"M0 0v48h48V0zm31 9v10H18V9zm0 13v10H18V22zm3 0h11v10H34zm0-3V9h11v10zM3 9h12v10H3zm0 13h12v10H3zm0 23V35h12v10zm15 0V35h13v10zm16 0V35h11v10z"}))};d.displayName="IconTable",d.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};var i=d;t.default=i},75852:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(l(67294)),a=u(l(99139));function u(e){return e&&e.__esModule?e:{default:e}}function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e},r.apply(this,arguments)}var d=function(e){var t=r({},e);return n.default.createElement(a.default,t,n.default.createElement("path",{d:"M48 8v16h-6v-5.7L25.31 35l-4.56-4.56L9.18 42H48v6H0V0h6v36.7l14.75-14.76 4.56 4.56L37.82 14H32V8z"}))};d.displayName="IconVisualization",d.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};var i=d;t.default=i}}]);