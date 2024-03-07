"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[99365],{201:function(e,t,n){var l=n(24994),a=n(73738);t.A=void 0;var d=l(n(85715)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var l={__proto__:null},d=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var r=d?Object.getOwnPropertyDescriptor(e,o):null;r&&(r.get||r.set)?Object.defineProperty(l,o,r):l[o]=e[o]}return l.default=e,n&&n.set(e,l),l}(n(96540)),r=l(n(5556)),s=l(n(67967)),i=n(92912),m=l(n(49558)),u=l(n(53665)),c=n(25966),p=l(n(89986));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var x=s.default.bind(p.default),h={example:r.default.element,exampleSrc:r.default.element,exampleCssSrc:r.default.element,title:r.default.string,description:r.default.node,isExpanded:r.default.bool},y=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},C=function(e){var t=e.example,n=e.exampleSrc,l=e.exampleCssSrc,a=e.title,r=e.description,s=e.isExpanded,p=(0,o.useState)(s),f=(0,d.default)(p,2),h=f[0],C=f[1],M=(0,o.useState)(!1),g=(0,d.default)(M,2),v=g[0],N=g[1],O=o.default.useContext(i.ThemeContext),T=void 0!==l,E=function(){N(!v),h&&C(!h)},_=function(){C(!h),v&&N(!v)},k=function(e,t){e.nativeEvent.keyCode!==c.KEY_SPACE&&e.nativeEvent.keyCode!==c.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:x("template",O.className)},o.default.createElement("div",{className:x("header")},a&&o.default.createElement("h2",{className:x("title")},a)),o.default.createElement("div",{className:x("content")},r&&o.default.createElement("div",{className:x("description")},r),t),o.default.createElement("div",{className:x("footer")},n?o.default.createElement("div",{className:x("button-container")},T&&o.default.createElement("button",{type:"button",className:x("css-toggle","item",{"is-selected":v}),onClick:E,onKeyDown:function(e){return k(e,E)},onBlur:y,onMouseDown:b,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(m.default,{className:x("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(u.default,{className:x("chevron")})),o.default.createElement("button",{type:"button",className:x("code-toggle","item",{"is-selected":h}),onClick:_,onKeyDown:function(e){return k(e,_)},onBlur:y,onMouseDown:b,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(m.default,{className:x("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(u.default,{className:x("chevron")}))):null,o.default.createElement("div",null,v&&o.default.createElement("div",{className:x("css")},l),h&&o.default.createElement("div",{className:x("code")},n))))};C.propTypes=h,C.defaultProps={isExpanded:!1};t.A=C},23155:function(e,t,n){n.r(t),n.d(t,{default:function(){return W}});var l=n(58168),a=n(53986),d=n(96540),o=n(36665),r=n(26748),s=n(70361),i=["components"],m={};function u(e){var t=e.components,n=(0,a.A)(e,i);return(0,o.mdx)("wrapper",(0,l.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport AbstractModal from 'terra-abstract-modal';\nimport classNames from 'classnames/bind';\nimport styles from './ExampleAbstractSize.module.scss';\nimport generalStyles from './AbstractModalDocCommon.module.scss';\n\nconst cx = classNames.bind(generalStyles);\n\nclass AbstractModalIsOpen extends React.Component {\n  constructor() {\n    super();\n\n    this.state = {\n      isOpen: false,\n    };\n\n    this.handleOpenModal = this.handleOpenModal.bind(this);\n    this.handleCloseModal = this.handleCloseModal.bind(this);\n  }\n\n  handleOpenModal() {\n    this.setState({ isOpen: true });\n  }\n\n  handleCloseModal() {\n    this.setState({ isOpen: false });\n  }\n\n  render() {\n    return (\n      <div>\n        <AbstractModal\n          ariaLabel=\"Default Modal\"\n          isOpen={this.state.isOpen}\n          onRequestClose={this.handleCloseModal}\n          classNameModal={styles['fixed-size']}\n        >\n          <div className={cx('content-wrapper')}>\n            <h1>Default Modal</h1>\n            <br />\n            <p>You can close the modal by:</p>\n            <ul>\n              <li>- Pressing the ESC key</li>\n              <li>- Clicking on the overlay</li>\n              <li>- Clicking on the close button</li>\n            </ul>\n            <br />\n            <p>On smaller screens, the modal will take up the full screen.</p>\n            <p />\n            <br />\n            <button type=\"button\" onClick={this.handleCloseModal}>Close Modal</button>\n          </div>\n        </AbstractModal>\n        <button type=\"button\" onClick={this.handleOpenModal}>Open Modal</button>\n      </div>\n    );\n  }\n}\n\nexport default AbstractModalIsOpen;\n\n")))}u.isMDXComponent=!0;var c=n(201),p=["components"],f={};function x(e){var t=e.components,n=(0,a.A)(e,p);return(0,o.mdx)("wrapper",(0,l.A)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-scss"},":local {\n  .fixed-size {\n    height: 450px;\n    width: 450px;\n  }\n}\n\n")))}x.isMDXComponent=!0;var h=function(e){var t=e.title,n=e.description,l=e.isExpanded;return d.createElement(c.A,{title:t||"Abstract Modal Is Opened",description:n,example:d.createElement(s.A,null),exampleCssSrc:d.createElement(x,null),exampleSrc:d.createElement(u,null),isExpanded:l})},y=n(20914),b=["components"],C={};function M(e){var t=e.components,n=(0,a.A)(e,b);return(0,o.mdx)("wrapper",(0,l.A)({},C,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport AbstractModal from 'terra-abstract-modal';\nimport classNames from 'classnames/bind';\nimport styles from './ExampleAbstractSize.module.scss';\nimport generalStyles from './AbstractModalDocCommon.module.scss';\n\nconst cx = classNames.bind(generalStyles);\n\nclass AbstractModalCloseOnOutsideClick extends React.Component {\n  constructor() {\n    super();\n\n    this.state = {\n      isOpen: false,\n    };\n\n    this.handleOpenModal = this.handleOpenModal.bind(this);\n    this.handleCloseModal = this.handleCloseModal.bind(this);\n  }\n\n  handleOpenModal() {\n    this.setState({ isOpen: true });\n  }\n\n  handleCloseModal() {\n    this.setState({ isOpen: false });\n  }\n\n  render() {\n    return (\n      <div>\n        <AbstractModal\n          ariaLabel=\"Modal disable close on outside click\"\n          isOpen={this.state.isOpen}\n          closeOnOutsideClick={false}\n          onRequestClose={this.handleCloseModal}\n          classNameModal={styles['fixed-size']}\n        >\n          <div className={cx('content-wrapper')}>\n            <h1>Modal disable close on outside click</h1>\n            <br />\n            <p>You can close the modal by:</p>\n            <ul>\n              <li>- Pressing the ESC key</li>\n              <li>- Clicking on the close button</li>\n            </ul>\n            <br />\n            <button type=\"button\" onClick={this.handleCloseModal}>Close Modal</button>\n          </div>\n        </AbstractModal>\n        <button type=\"button\" onClick={this.handleOpenModal}>Open Modal</button>\n      </div>\n    );\n  }\n}\n\nexport default AbstractModalCloseOnOutsideClick;\n\n")))}M.isMDXComponent=!0;var g=function(e){var t=e.title,n=e.description,l=e.isExpanded;return d.createElement(c.A,{title:t||"Abstract Modal Close On Outside Click",description:n,example:d.createElement(y.A,null),exampleCssSrc:d.createElement(x,null),exampleSrc:d.createElement(M,null),isExpanded:l})},v=n(1218),N=["components"],O={};function T(e){var t=e.components,n=(0,a.A)(e,N);return(0,o.mdx)("wrapper",(0,l.A)({},O,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport AbstractModal from 'terra-abstract-modal';\nimport classNames from 'classnames/bind';\nimport styles from './AbstractModalDocCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nclass AbstractModalIsFullscreen extends React.Component {\n  constructor() {\n    super();\n\n    this.state = {\n      isOpen: false,\n    };\n\n    this.handleOpenModal = this.handleOpenModal.bind(this);\n    this.handleCloseModal = this.handleCloseModal.bind(this);\n  }\n\n  handleOpenModal() {\n    this.setState({ isOpen: true });\n  }\n\n  handleCloseModal() {\n    this.setState({ isOpen: false });\n  }\n\n  render() {\n    return (\n      <div>\n        <AbstractModal\n          ariaLabel=\"Fullscreen Modal\"\n          isOpen={this.state.isOpen}\n          isFullscreen\n          onRequestClose={this.handleCloseModal}\n        >\n          <div className={cx('content-wrapper')}>\n            <h1>Fullscreen Modal</h1>\n            <br />\n            <p>This modal will always take up the full screen.</p>\n            <p />\n            <br />\n            <button type=\"button\" onClick={this.handleCloseModal}>Close Modal</button>\n          </div>\n        </AbstractModal>\n        <button type=\"button\" onClick={this.handleOpenModal}>Open Modal</button>\n      </div>\n    );\n  }\n}\n\nexport default AbstractModalIsFullscreen;\n\n")))}T.isMDXComponent=!0;var E=["components"],_={};function k(e){var t=e.components,n=(0,a.A)(e,E);return(0,o.mdx)("wrapper",(0,l.A)({},_,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-scss"},":local {\n  .content-wrapper {\n    background-color: #faebd7;\n    height: 100%;\n    overflow: hidden;\n    width: 100%;\n  }\n}\n\n")))}k.isMDXComponent=!0;var w=function(e){var t=e.title,n=e.description,l=e.isExpanded;return d.createElement(c.A,{title:t||"Abstract Modal Is Fullscreen",description:n,example:d.createElement(v.A,null),exampleCssSrc:d.createElement(k,null),exampleSrc:d.createElement(T,null),isExpanded:l})},A=n(30324),R=["components"],D={};function S(e){var t=e.components,n=(0,a.A)(e,R);return(0,o.mdx)("wrapper",(0,l.A)({},D,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useRef, useEffect } from 'react';\nimport AbstractModal from 'terra-abstract-modal';\nimport classNames from 'classnames/bind';\nimport styles from './ExampleAbstractSize.module.scss';\nimport generalStyles from './AbstractModalDocCommon.module.scss';\n\nconst cx = classNames.bind(generalStyles);\n\n/* eslint-disable-next-line react/prop-types */\nconst AlertDialogContent = ({ handleCloseModal }) => {\n  const confirmBtn = useRef(null);\n\n  useEffect(() => {\n    confirmBtn.current.focus();\n  }, []);\n\n  return (\n    <div id=\"alert-dialog-content\" className={cx('content-wrapper')}>\n      <h1>Alert Dialog Modal</h1>\n      <br />\n      <p>\n        The abstract modal can be used to create an alert dialog modal. You can use the role,\n        {' '}\n        <code>alertdialog</code>\n        {' '}\n        , to create a modal dialog that interrupts the users workflow to get a response, usually some sort of confirmation.\n      </p>\n      <button ref={confirmBtn} type=\"button\" onClick={handleCloseModal}>Confirm action</button>\n      <button type=\"button\" onClick={handleCloseModal}>Close Modal</button>\n    </div>\n  );\n};\n\n/* VoiceOver will not read the content of the modal dialog if the role attribute\n is set to `alertdialog` and ariaLabel is defined */\nconst ariaLabel = '';\n\nclass AbstractModalAlertDialog extends React.Component {\n  constructor() {\n    super();\n\n    this.state = {\n      isOpen: false,\n    };\n\n    this.handleOpenModal = this.handleOpenModal.bind(this);\n    this.handleCloseModal = this.handleCloseModal.bind(this);\n  }\n\n  handleOpenModal() {\n    this.setState({ isOpen: true });\n  }\n\n  handleCloseModal() {\n    this.setState({ isOpen: false });\n  }\n\n  render() {\n    return (\n      <div>\n        <AbstractModal\n          ariaLabel={ariaLabel}\n          aria-labelledby=\"alert-dialog-content\"\n          isOpen={this.state.isOpen}\n          onRequestClose={this.handleCloseModal}\n          closeOnOutsideClick={false}\n          classNameModal={styles['fixed-size']}\n          role=\"alertdialog\"\n        >\n          <AlertDialogContent handleCloseModal={this.handleCloseModal} />\n        </AbstractModal>\n        <button type=\"button\" onClick={this.handleOpenModal}>Open Modal</button>\n      </div>\n    );\n  }\n}\n\nexport default AbstractModalAlertDialog;\n\n")))}S.isMDXComponent=!0;var j=function(e){var t=e.title,n=e.description,l=e.isExpanded;return d.createElement(c.A,{title:t||"Abstract Modal Alert Dialog",description:n,example:d.createElement(A.A,null),exampleCssSrc:d.createElement(x,null),exampleSrc:d.createElement(S,null),isExpanded:l})},q=n(12883),P=["components"],I={},Z="wrapper";function L(e){var t=e.components,n=(0,a.A)(e,P);return(0,o.mdx)(Z,(0,l.A)({},I,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)(q.Ay,{mdxType:"PropsTable"},(0,o.mdx)(q.fI,{key:"ROW1",mdxType:"Row"},(0,o.mdx)(q.dt,{mdxType:"PropNameCell"},"ariaLabel"),(0,o.mdx)(q.$d,{mdxType:"TypeCell"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,o.mdx)(q.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,o.mdx)(q.NZ,{mdxType:"DefaultValueCell"},(0,o.mdx)("p",null,"none")),(0,o.mdx)(q.Hd,{mdxType:"DescriptionCell"},(0,o.mdx)("p",null,"String that labels the modal for screen readers."))),(0,o.mdx)(q.fI,{key:"ROW2",mdxType:"Row"},(0,o.mdx)(q.dt,{mdxType:"PropNameCell"},"ariaLabelledBy"),(0,o.mdx)(q.$d,{mdxType:"TypeCell"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,o.mdx)(q.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,o.mdx)(q.NZ,{mdxType:"DefaultValueCell"},(0,o.mdx)("p",null,"none")),(0,o.mdx)(q.Hd,{mdxType:"DescriptionCell"},(0,o.mdx)("p",null,"String that labels the modal for screen readers."))),(0,o.mdx)(q.fI,{key:"ROW3",mdxType:"Row"},(0,o.mdx)(q.dt,{mdxType:"PropNameCell"},"ariaDescribedBy"),(0,o.mdx)(q.$d,{mdxType:"TypeCell"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,o.mdx)(q.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,o.mdx)(q.NZ,{mdxType:"DefaultValueCell"},(0,o.mdx)("p",null,"none")),(0,o.mdx)(q.Hd,{mdxType:"DescriptionCell"},(0,o.mdx)("p",null,"String that labels the modal for screen readers."))),(0,o.mdx)(q.fI,{key:"ROW4",mdxType:"Row"},(0,o.mdx)(q.dt,{mdxType:"PropNameCell"},"children"),(0,o.mdx)(q.$d,{mdxType:"TypeCell"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,o.mdx)(q.YZ,{isRequired:!0,mdxType:"RequiredCell"}),(0,o.mdx)(q.NZ,{mdxType:"DefaultValueCell"},(0,o.mdx)("p",null,"none")),(0,o.mdx)(q.Hd,{mdxType:"DescriptionCell"},(0,o.mdx)("p",null,"Content inside the modal dialog."))),(0,o.mdx)(q.fI,{key:"ROW5",mdxType:"Row"},(0,o.mdx)(q.dt,{mdxType:"PropNameCell"},"classNameModal"),(0,o.mdx)(q.$d,{mdxType:"TypeCell"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,o.mdx)(q.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,o.mdx)(q.NZ,{mdxType:"DefaultValueCell"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"null\n"))),(0,o.mdx)(q.Hd,{mdxType:"DescriptionCell"},(0,o.mdx)("p",null,"CSS classnames that are appended to the modal."))),(0,o.mdx)(q.fI,{key:"ROW6",mdxType:"Row"},(0,o.mdx)(q.dt,{mdxType:"PropNameCell"},"classNameOverlay"),(0,o.mdx)(q.$d,{mdxType:"TypeCell"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,o.mdx)(q.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,o.mdx)(q.NZ,{mdxType:"DefaultValueCell"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"null\n"))),(0,o.mdx)(q.Hd,{mdxType:"DescriptionCell"},(0,o.mdx)("p",null,"CSS classnames that are appended to the overlay."))),(0,o.mdx)(q.fI,{key:"ROW7",mdxType:"Row"},(0,o.mdx)(q.dt,{mdxType:"PropNameCell"},"closeOnEsc"),(0,o.mdx)(q.$d,{mdxType:"TypeCell"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,o.mdx)(q.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,o.mdx)(q.NZ,{mdxType:"DefaultValueCell"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"true\n"))),(0,o.mdx)(q.Hd,{mdxType:"DescriptionCell"},(0,o.mdx)("p",null,"If set to true, the modal will close when the esc key is pressed."))),(0,o.mdx)(q.fI,{key:"ROW8",mdxType:"Row"},(0,o.mdx)(q.dt,{mdxType:"PropNameCell"},"closeOnOutsideClick"),(0,o.mdx)(q.$d,{mdxType:"TypeCell"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,o.mdx)(q.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,o.mdx)(q.NZ,{mdxType:"DefaultValueCell"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"true\n"))),(0,o.mdx)(q.Hd,{mdxType:"DescriptionCell"},(0,o.mdx)("p",null,"If set to true, the modal will close when a mouse click is triggered outside the modal."))),(0,o.mdx)(q.fI,{key:"ROW9",mdxType:"Row"},(0,o.mdx)(q.dt,{mdxType:"PropNameCell"},"isFullscreen"),(0,o.mdx)(q.$d,{mdxType:"TypeCell"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,o.mdx)(q.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,o.mdx)(q.NZ,{mdxType:"DefaultValueCell"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,o.mdx)(q.Hd,{mdxType:"DescriptionCell"},(0,o.mdx)("p",null,"If set to true, the modal will be fullscreen on all breakpoint sizes."))),(0,o.mdx)(q.fI,{key:"ROW10",mdxType:"Row"},(0,o.mdx)(q.dt,{mdxType:"PropNameCell"},"isOpen"),(0,o.mdx)(q.$d,{mdxType:"TypeCell"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,o.mdx)(q.YZ,{isRequired:!0,mdxType:"RequiredCell"}),(0,o.mdx)(q.NZ,{mdxType:"DefaultValueCell"},(0,o.mdx)("p",null,"none")),(0,o.mdx)(q.Hd,{mdxType:"DescriptionCell"},(0,o.mdx)("p",null,"If set to true, the modal will rendered as opened."))),(0,o.mdx)(q.fI,{key:"ROW11",mdxType:"Row"},(0,o.mdx)(q.dt,{mdxType:"PropNameCell"},"onRequestClose"),(0,o.mdx)(q.$d,{mdxType:"TypeCell"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,o.mdx)(q.YZ,{isRequired:!0,mdxType:"RequiredCell"}),(0,o.mdx)(q.NZ,{mdxType:"DefaultValueCell"},(0,o.mdx)("p",null,"none")),(0,o.mdx)(q.Hd,{mdxType:"DescriptionCell"},(0,o.mdx)("p",null,"Callback function indicating a close condition was met, should be combined with isOpen for state management."))),(0,o.mdx)(q.fI,{key:"ROW12",mdxType:"Row"},(0,o.mdx)(q.dt,{mdxType:"PropNameCell"},"role"),(0,o.mdx)(q.$d,{mdxType:"TypeCell"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,o.mdx)(q.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,o.mdx)(q.NZ,{mdxType:"DefaultValueCell"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"'dialog'\n"))),(0,o.mdx)(q.Hd,{mdxType:"DescriptionCell"},(0,o.mdx)("p",null,"Role attribute on the modal dialog."))),(0,o.mdx)(q.fI,{key:"ROW13",mdxType:"Row"},(0,o.mdx)(q.dt,{mdxType:"PropNameCell"},"rootSelector"),(0,o.mdx)(q.$d,{mdxType:"TypeCell"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,o.mdx)(q.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,o.mdx)(q.NZ,{mdxType:"DefaultValueCell"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"'#root'\n"))),(0,o.mdx)(q.Hd,{mdxType:"DescriptionCell"},(0,o.mdx)("p",null,"Allows assigning of root element custom data attribute for easy selecting of document base component."))),(0,o.mdx)(q.fI,{key:"ROW14",mdxType:"Row"},(0,o.mdx)(q.dt,{mdxType:"PropNameCell"},"zIndex"),(0,o.mdx)(q.$d,{mdxType:"TypeCell"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  '6000'\n  '7000'\n  '8000'\n  '9000'\n],\n"))),(0,o.mdx)(q.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,o.mdx)(q.NZ,{mdxType:"DefaultValueCell"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"'6000'\n"))),(0,o.mdx)(q.Hd,{mdxType:"DescriptionCell"},(0,o.mdx)("p",null,"Z-Index layer to apply to the ModalContent and ModalOverlay. Valid values are the standard modal layer: '6000', and the max layer: '8000'.")))))}L.isMDXComponent=!0;var Y=["components"],z={},B="wrapper";function W(e){var t=e.components,n=(0,a.A)(e,Y);return(0,o.mdx)(B,(0,l.A)({},z,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)(r.E,{mdxType:"Badge"}),(0,o.mdx)("h1",{id:"terra-abstract-modal"},"Terra Abstract Modal"),(0,o.mdx)("p",null,"The abstract modal is a structural component that provides the ability to display portal'd content in a layer above the app. It consists of an overlay and an unstyled absolute positioned div in which content can be placed. The abstract modal is not intended to be consumed directly, but rather wrapped in a higher order component. Higher order components can provide the abstract modal with sizing, visual styles, and content (e.g; header, body, and actionable buttons). The abstract modals maximum size is constrained by the viewport size, so the content placed inside the modal needs to be responsive."),(0,o.mdx)("p",null,"Our recommendation for HOC is the ",(0,o.mdx)("a",{parentName:"p",href:"https://engineering.cerner.com/terra-framework/components/terra-modal-manager/modal-manager/about"},"terra-modal-manager"),", as it provides sizing, responsive behavior, visual styles, and a disclosure stack."),(0,o.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Install with ",(0,o.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"npm install terra-abstract-modal"))))),(0,o.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,o.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,o.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"react"),(0,o.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,o.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"react-intl"),(0,o.mdx)("td",{parentName:"tr",align:null},"^2.9.0")))),(0,o.mdx)("h2",{id:"component-features"},"Component Features"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support"))),(0,o.mdx)("h2",{id:"examples"},"Examples"),(0,o.mdx)(h,{title:"Default Modal",mdxType:"AbstractModalIsOpened"}),(0,o.mdx)(g,{title:"\nDisable closing the modal when clicking on the overlay",mdxType:"AbstractModalCloseOnOutsideClick"}),(0,o.mdx)(w,{title:"Fullscreen Modal",mdxType:"AbstractModalIsFullscreen"}),(0,o.mdx)(j,{title:"Alert Dialog Modal",mdxType:"AbstractModalAlertDialog"}),(0,o.mdx)("h2",{id:"abstract-modal-props"},"Abstract Modal Props"),(0,o.mdx)(L,{mdxType:"ModalPropsTable"}))}W.isMDXComponent=!0},26748:function(e,t,n){n.d(t,{E:function(){return d}});var l=n(96540),a=n(55713),d=function(e){var t=e.url;return l.createElement(a.A,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-abstract-modal",name:"terra-abstract-modal",version:"3.48.0",url:t})}},30324:function(e,t,n){var l=n(24994),a=n(73738);t.A=void 0;var d=l(n(17383)),o=l(n(34579)),r=l(n(28452)),s=l(n(63072)),i=l(n(12475)),m=l(n(29511)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=h(t);if(n&&n.has(e))return n.get(e);var l={__proto__:null},d=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var r=d?Object.getOwnPropertyDescriptor(e,o):null;r&&(r.get||r.set)?Object.defineProperty(l,o,r):l[o]=e[o]}return l.default=e,n&&n.set(e,l),l}(n(96540)),c=l(n(20605)),p=l(n(67967)),f=l(n(82283)),x=l(n(62350));function h(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(h=function(e){return e?n:t})(e)}function y(e,t,n){return t=(0,s.default)(t),(0,r.default)(e,b()?Reflect.construct(t,n||[],(0,s.default)(e).constructor):t.apply(e,n))}function b(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(b=function(){return!!e})()}var C=p.default.bind(x.default),M=function(e){var t=e.handleCloseModal,n=(0,u.useRef)(null);return(0,u.useEffect)((function(){n.current.focus()}),[]),u.default.createElement("div",{id:"alert-dialog-content",className:C("content-wrapper")},u.default.createElement("h1",null,"Alert Dialog Modal"),u.default.createElement("br",null),u.default.createElement("p",null,"The abstract modal can be used to create an alert dialog modal. You can use the role,"," ",u.default.createElement("code",null,"alertdialog")," ",", to create a modal dialog that interrupts the users workflow to get a response, usually some sort of confirmation."),u.default.createElement("button",{ref:n,type:"button",onClick:t},"Confirm action"),u.default.createElement("button",{type:"button",onClick:t},"Close Modal"))},g=function(e){function t(){var e;return(0,d.default)(this,t),(e=y(this,t)).state={isOpen:!1},e.handleOpenModal=e.handleOpenModal.bind((0,i.default)(e)),e.handleCloseModal=e.handleCloseModal.bind((0,i.default)(e)),e}return(0,m.default)(t,e),(0,o.default)(t,[{key:"handleOpenModal",value:function(){this.setState({isOpen:!0})}},{key:"handleCloseModal",value:function(){this.setState({isOpen:!1})}},{key:"render",value:function(){return u.default.createElement("div",null,u.default.createElement(c.default,{ariaLabel:"","aria-labelledby":"alert-dialog-content",isOpen:this.state.isOpen,onRequestClose:this.handleCloseModal,closeOnOutsideClick:!1,classNameModal:f.default["fixed-size"],role:"alertdialog"},u.default.createElement(M,{handleCloseModal:this.handleCloseModal})),u.default.createElement("button",{type:"button",onClick:this.handleOpenModal},"Open Modal"))}}]),t}(u.default.Component);t.A=g},20914:function(e,t,n){var l=n(24994);t.A=void 0;var a=l(n(17383)),d=l(n(34579)),o=l(n(28452)),r=l(n(63072)),s=l(n(12475)),i=l(n(29511)),m=l(n(96540)),u=l(n(20605)),c=l(n(67967)),p=l(n(82283)),f=l(n(62350));function x(e,t,n){return t=(0,r.default)(t),(0,o.default)(e,h()?Reflect.construct(t,n||[],(0,r.default)(e).constructor):t.apply(e,n))}function h(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(h=function(){return!!e})()}var y=c.default.bind(f.default),b=function(e){function t(){var e;return(0,a.default)(this,t),(e=x(this,t)).state={isOpen:!1},e.handleOpenModal=e.handleOpenModal.bind((0,s.default)(e)),e.handleCloseModal=e.handleCloseModal.bind((0,s.default)(e)),e}return(0,i.default)(t,e),(0,d.default)(t,[{key:"handleOpenModal",value:function(){this.setState({isOpen:!0})}},{key:"handleCloseModal",value:function(){this.setState({isOpen:!1})}},{key:"render",value:function(){return m.default.createElement("div",null,m.default.createElement(u.default,{ariaLabel:"Modal disable close on outside click",isOpen:this.state.isOpen,closeOnOutsideClick:!1,onRequestClose:this.handleCloseModal,classNameModal:p.default["fixed-size"]},m.default.createElement("div",{className:y("content-wrapper")},m.default.createElement("h1",null,"Modal disable close on outside click"),m.default.createElement("br",null),m.default.createElement("p",null,"You can close the modal by:"),m.default.createElement("ul",null,m.default.createElement("li",null,"- Pressing the ESC key"),m.default.createElement("li",null,"- Clicking on the close button")),m.default.createElement("br",null),m.default.createElement("button",{type:"button",onClick:this.handleCloseModal},"Close Modal"))),m.default.createElement("button",{type:"button",onClick:this.handleOpenModal},"Open Modal"))}}]),t}(m.default.Component);t.A=b},1218:function(e,t,n){var l=n(24994);t.A=void 0;var a=l(n(17383)),d=l(n(34579)),o=l(n(28452)),r=l(n(63072)),s=l(n(12475)),i=l(n(29511)),m=l(n(96540)),u=l(n(20605)),c=l(n(67967)),p=l(n(62350));function f(e,t,n){return t=(0,r.default)(t),(0,o.default)(e,x()?Reflect.construct(t,n||[],(0,r.default)(e).constructor):t.apply(e,n))}function x(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(x=function(){return!!e})()}var h=c.default.bind(p.default),y=function(e){function t(){var e;return(0,a.default)(this,t),(e=f(this,t)).state={isOpen:!1},e.handleOpenModal=e.handleOpenModal.bind((0,s.default)(e)),e.handleCloseModal=e.handleCloseModal.bind((0,s.default)(e)),e}return(0,i.default)(t,e),(0,d.default)(t,[{key:"handleOpenModal",value:function(){this.setState({isOpen:!0})}},{key:"handleCloseModal",value:function(){this.setState({isOpen:!1})}},{key:"render",value:function(){return m.default.createElement("div",null,m.default.createElement(u.default,{ariaLabel:"Fullscreen Modal",isOpen:this.state.isOpen,isFullscreen:!0,onRequestClose:this.handleCloseModal},m.default.createElement("div",{className:h("content-wrapper")},m.default.createElement("h1",null,"Fullscreen Modal"),m.default.createElement("br",null),m.default.createElement("p",null,"This modal will always take up the full screen."),m.default.createElement("p",null),m.default.createElement("br",null),m.default.createElement("button",{type:"button",onClick:this.handleCloseModal},"Close Modal"))),m.default.createElement("button",{type:"button",onClick:this.handleOpenModal},"Open Modal"))}}]),t}(m.default.Component);t.A=y},70361:function(e,t,n){var l=n(24994);t.A=void 0;var a=l(n(17383)),d=l(n(34579)),o=l(n(28452)),r=l(n(63072)),s=l(n(12475)),i=l(n(29511)),m=l(n(96540)),u=l(n(20605)),c=l(n(67967)),p=l(n(82283)),f=l(n(62350));function x(e,t,n){return t=(0,r.default)(t),(0,o.default)(e,h()?Reflect.construct(t,n||[],(0,r.default)(e).constructor):t.apply(e,n))}function h(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(h=function(){return!!e})()}var y=c.default.bind(f.default),b=function(e){function t(){var e;return(0,a.default)(this,t),(e=x(this,t)).state={isOpen:!1},e.handleOpenModal=e.handleOpenModal.bind((0,s.default)(e)),e.handleCloseModal=e.handleCloseModal.bind((0,s.default)(e)),e}return(0,i.default)(t,e),(0,d.default)(t,[{key:"handleOpenModal",value:function(){this.setState({isOpen:!0})}},{key:"handleCloseModal",value:function(){this.setState({isOpen:!1})}},{key:"render",value:function(){return m.default.createElement("div",null,m.default.createElement(u.default,{ariaLabel:"Default Modal",isOpen:this.state.isOpen,onRequestClose:this.handleCloseModal,classNameModal:p.default["fixed-size"]},m.default.createElement("div",{className:y("content-wrapper")},m.default.createElement("h1",null,"Default Modal"),m.default.createElement("br",null),m.default.createElement("p",null,"You can close the modal by:"),m.default.createElement("ul",null,m.default.createElement("li",null,"- Pressing the ESC key"),m.default.createElement("li",null,"- Clicking on the overlay"),m.default.createElement("li",null,"- Clicking on the close button")),m.default.createElement("br",null),m.default.createElement("p",null,"On smaller screens, the modal will take up the full screen."),m.default.createElement("p",null),m.default.createElement("br",null),m.default.createElement("button",{type:"button",onClick:this.handleCloseModal},"Close Modal"))),m.default.createElement("button",{type:"button",onClick:this.handleOpenModal},"Open Modal"))}}]),t}(m.default.Component);t.A=b},89986:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},62350:function(e,t,n){n.r(t),t.default={"content-wrapper":"AbstractModalDocCommon-module__content-wrapper___phElL"}},82283:function(e,t,n){n.r(t),t.default={"fixed-size":"ExampleAbstractSize-module__fixed-size___uWh96"}},49558:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=d(n(96540)),a=d(n(25365));function d(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},o.apply(this,arguments)}var r=function(e){var t=o({},e);return l.default.createElement(a.default,t,l.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};r.displayName="IconChevronLeft",r.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=r}}]);