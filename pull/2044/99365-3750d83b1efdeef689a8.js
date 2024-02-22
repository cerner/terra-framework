"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[99365],{201:function(e,t,l){var n=l(24994),a=l(73738);t.A=void 0;var d=n(l(85715)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var l=f(t);if(l&&l.has(e))return l.get(e);var n={__proto__:null},d=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var r=d?Object.getOwnPropertyDescriptor(e,o):null;r&&(r.get||r.set)?Object.defineProperty(n,o,r):n[o]=e[o]}return n.default=e,l&&l.set(e,n),n}(l(96540)),r=n(l(5556)),s=n(l(67967)),m=l(92912),i=n(l(49558)),u=n(l(53665)),c=l(25966),p=n(l(89986));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(f=function(e){return e?l:t})(e)}var x=s.default.bind(p.default),h={example:r.default.element,exampleSrc:r.default.element,exampleCssSrc:r.default.element,title:r.default.string,description:r.default.node,isExpanded:r.default.bool},y=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},C=function(e){var t=e.example,l=e.exampleSrc,n=e.exampleCssSrc,a=e.title,r=e.description,s=e.isExpanded,p=(0,o.useState)(s),f=(0,d.default)(p,2),h=f[0],C=f[1],g=(0,o.useState)(!1),M=(0,d.default)(g,2),v=M[0],N=M[1],T=o.default.useContext(m.ThemeContext),O=void 0!==n,E=function(){N(!v),h&&C(!h)},_=function(){C(!h),v&&N(!v)},k=function(e,t){e.nativeEvent.keyCode!==c.KEY_SPACE&&e.nativeEvent.keyCode!==c.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:x("template",T.className)},o.default.createElement("div",{className:x("header")},a&&o.default.createElement("h2",{className:x("title")},a)),o.default.createElement("div",{className:x("content")},r&&o.default.createElement("div",{className:x("description")},r),t),o.default.createElement("div",{className:x("footer")},l?o.default.createElement("div",{className:x("button-container")},O&&o.default.createElement("button",{type:"button",className:x("css-toggle","item",{"is-selected":v}),onClick:E,onKeyDown:function(e){return k(e,E)},onBlur:y,onMouseDown:b,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(i.default,{className:x("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(u.default,{className:x("chevron")})),o.default.createElement("button",{type:"button",className:x("code-toggle","item",{"is-selected":h}),onClick:_,onKeyDown:function(e){return k(e,_)},onBlur:y,onMouseDown:b,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(i.default,{className:x("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(u.default,{className:x("chevron")}))):null,o.default.createElement("div",null,v&&o.default.createElement("div",{className:x("css")},n),h&&o.default.createElement("div",{className:x("code")},l))))};C.propTypes=h,C.defaultProps={isExpanded:!1};t.A=C},23155:function(e,t,l){l.r(t),l.d(t,{default:function(){return B}});var n=l(58168),a=l(53986),d=l(96540),o=l(36665),r=l(26748),s=l(70361),m=["components"],i={};function u(e){var t=e.components,l=(0,a.A)(e,m);return(0,o.mdx)("wrapper",(0,n.A)({},i,l,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport AbstractModal from 'terra-abstract-modal';\nimport classNames from 'classnames/bind';\nimport styles from './ExampleAbstractSize.module.scss';\nimport generalStyles from './AbstractModalDocCommon.module.scss';\n\nconst cx = classNames.bind(generalStyles);\n\nclass AbstractModalIsOpen extends React.Component {\n  constructor() {\n    super();\n\n    this.state = {\n      isOpen: false,\n    };\n\n    this.handleOpenModal = this.handleOpenModal.bind(this);\n    this.handleCloseModal = this.handleCloseModal.bind(this);\n  }\n\n  handleOpenModal() {\n    this.setState({ isOpen: true });\n  }\n\n  handleCloseModal() {\n    this.setState({ isOpen: false });\n  }\n\n  render() {\n    return (\n      <div>\n        <AbstractModal\n          ariaLabel=\"Default Modal\"\n          isOpen={this.state.isOpen}\n          onRequestClose={this.handleCloseModal}\n          classNameModal={styles['fixed-size']}\n        >\n          <div className={cx('content-wrapper')}>\n            <h1>Default Modal</h1>\n            <br />\n            <p>You can close the modal by:</p>\n            <ul>\n              <li>- Pressing the ESC key</li>\n              <li>- Clicking on the overlay</li>\n              <li>- Clicking on the close button</li>\n            </ul>\n            <br />\n            <p>On smaller screens, the modal will take up the full screen.</p>\n            <p />\n            <br />\n            <button type=\"button\" onClick={this.handleCloseModal}>Close Modal</button>\n          </div>\n        </AbstractModal>\n        <button type=\"button\" onClick={this.handleOpenModal}>Open Modal</button>\n      </div>\n    );\n  }\n}\n\nexport default AbstractModalIsOpen;\n\n")))}u.isMDXComponent=!0;var c=l(201),p=["components"],f={};function x(e){var t=e.components,l=(0,a.A)(e,p);return(0,o.mdx)("wrapper",(0,n.A)({},f,l,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-scss"},":local {\n  .fixed-size {\n    height: 450px;\n    width: 450px;\n  }\n}\n\n")))}x.isMDXComponent=!0;var h=function(e){var t=e.title,l=e.description,n=e.isExpanded;return d.createElement(c.A,{title:t||"Abstract Modal Is Opened",description:l,example:d.createElement(s.A,null),exampleCssSrc:d.createElement(x,null),exampleSrc:d.createElement(u,null),isExpanded:n})},y=l(20914),b=["components"],C={};function g(e){var t=e.components,l=(0,a.A)(e,b);return(0,o.mdx)("wrapper",(0,n.A)({},C,l,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport AbstractModal from 'terra-abstract-modal';\nimport classNames from 'classnames/bind';\nimport styles from './ExampleAbstractSize.module.scss';\nimport generalStyles from './AbstractModalDocCommon.module.scss';\n\nconst cx = classNames.bind(generalStyles);\n\nclass AbstractModalCloseOnOutsideClick extends React.Component {\n  constructor() {\n    super();\n\n    this.state = {\n      isOpen: false,\n    };\n\n    this.handleOpenModal = this.handleOpenModal.bind(this);\n    this.handleCloseModal = this.handleCloseModal.bind(this);\n  }\n\n  handleOpenModal() {\n    this.setState({ isOpen: true });\n  }\n\n  handleCloseModal() {\n    this.setState({ isOpen: false });\n  }\n\n  render() {\n    return (\n      <div>\n        <AbstractModal\n          ariaLabel=\"Modal disable close on outside click\"\n          isOpen={this.state.isOpen}\n          closeOnOutsideClick={false}\n          onRequestClose={this.handleCloseModal}\n          classNameModal={styles['fixed-size']}\n        >\n          <div className={cx('content-wrapper')}>\n            <h1>Modal disable close on outside click</h1>\n            <br />\n            <p>You can close the modal by:</p>\n            <ul>\n              <li>- Pressing the ESC key</li>\n              <li>- Clicking on the close button</li>\n            </ul>\n            <br />\n            <button type=\"button\" onClick={this.handleCloseModal}>Close Modal</button>\n          </div>\n        </AbstractModal>\n        <button type=\"button\" onClick={this.handleOpenModal}>Open Modal</button>\n      </div>\n    );\n  }\n}\n\nexport default AbstractModalCloseOnOutsideClick;\n\n")))}g.isMDXComponent=!0;var M=function(e){var t=e.title,l=e.description,n=e.isExpanded;return d.createElement(c.A,{title:t||"Abstract Modal Close On Outside Click",description:l,example:d.createElement(y.A,null),exampleCssSrc:d.createElement(x,null),exampleSrc:d.createElement(g,null),isExpanded:n})},v=l(1218),N=["components"],T={};function O(e){var t=e.components,l=(0,a.A)(e,N);return(0,o.mdx)("wrapper",(0,n.A)({},T,l,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport AbstractModal from 'terra-abstract-modal';\nimport classNames from 'classnames/bind';\nimport styles from './AbstractModalDocCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nclass AbstractModalIsFullscreen extends React.Component {\n  constructor() {\n    super();\n\n    this.state = {\n      isOpen: false,\n    };\n\n    this.handleOpenModal = this.handleOpenModal.bind(this);\n    this.handleCloseModal = this.handleCloseModal.bind(this);\n  }\n\n  handleOpenModal() {\n    this.setState({ isOpen: true });\n  }\n\n  handleCloseModal() {\n    this.setState({ isOpen: false });\n  }\n\n  render() {\n    return (\n      <div>\n        <AbstractModal\n          ariaLabel=\"Fullscreen Modal\"\n          isOpen={this.state.isOpen}\n          isFullscreen\n          onRequestClose={this.handleCloseModal}\n        >\n          <div className={cx('content-wrapper')}>\n            <h1>Fullscreen Modal</h1>\n            <br />\n            <p>This modal will always take up the full screen.</p>\n            <p />\n            <br />\n            <button type=\"button\" onClick={this.handleCloseModal}>Close Modal</button>\n          </div>\n        </AbstractModal>\n        <button type=\"button\" onClick={this.handleOpenModal}>Open Modal</button>\n      </div>\n    );\n  }\n}\n\nexport default AbstractModalIsFullscreen;\n\n")))}O.isMDXComponent=!0;var E=["components"],_={};function k(e){var t=e.components,l=(0,a.A)(e,E);return(0,o.mdx)("wrapper",(0,n.A)({},_,l,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-scss"},":local {\n  .content-wrapper {\n    background-color: #faebd7;\n    height: 100%;\n    overflow: hidden;\n    width: 100%;\n  }\n}\n\n")))}k.isMDXComponent=!0;var w=function(e){var t=e.title,l=e.description,n=e.isExpanded;return d.createElement(c.A,{title:t||"Abstract Modal Is Fullscreen",description:l,example:d.createElement(v.A,null),exampleCssSrc:d.createElement(k,null),exampleSrc:d.createElement(O,null),isExpanded:n})},R=l(30324),A=["components"],D={};function S(e){var t=e.components,l=(0,a.A)(e,A);return(0,o.mdx)("wrapper",(0,n.A)({},D,l,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useRef, useEffect } from 'react';\nimport AbstractModal from 'terra-abstract-modal';\nimport classNames from 'classnames/bind';\nimport styles from './ExampleAbstractSize.module.scss';\nimport generalStyles from './AbstractModalDocCommon.module.scss';\n\nconst cx = classNames.bind(generalStyles);\n\n/* eslint-disable-next-line react/prop-types */\nconst AlertDialogContent = ({ handleCloseModal }) => {\n  const confirmBtn = useRef(null);\n\n  useEffect(() => {\n    confirmBtn.current.focus();\n  }, []);\n\n  return (\n    <div id=\"alert-dialog-content\" className={cx('content-wrapper')}>\n      <h1>Alert Dialog Modal</h1>\n      <br />\n      <p>\n        The abstract modal can be used to create an alert dialog modal. You can use the role,\n        {' '}\n        <code>alertdialog</code>\n        {' '}\n        , to create a modal dialog that interrupts the users workflow to get a response, usually some sort of confirmation.\n      </p>\n      <button ref={confirmBtn} type=\"button\" onClick={handleCloseModal}>Confirm action</button>\n      <button type=\"button\" onClick={handleCloseModal}>Close Modal</button>\n    </div>\n  );\n};\n\n/* VoiceOver will not read the content of the modal dialog if the role attribute\n is set to `alertdialog` and ariaLabel is defined */\nconst ariaLabel = '';\n\nclass AbstractModalAlertDialog extends React.Component {\n  constructor() {\n    super();\n\n    this.state = {\n      isOpen: false,\n    };\n\n    this.handleOpenModal = this.handleOpenModal.bind(this);\n    this.handleCloseModal = this.handleCloseModal.bind(this);\n  }\n\n  handleOpenModal() {\n    this.setState({ isOpen: true });\n  }\n\n  handleCloseModal() {\n    this.setState({ isOpen: false });\n  }\n\n  render() {\n    return (\n      <div>\n        <AbstractModal\n          ariaLabel={ariaLabel}\n          aria-labelledby=\"alert-dialog-content\"\n          isOpen={this.state.isOpen}\n          onRequestClose={this.handleCloseModal}\n          closeOnOutsideClick={false}\n          classNameModal={styles['fixed-size']}\n          role=\"alertdialog\"\n        >\n          <AlertDialogContent handleCloseModal={this.handleCloseModal} />\n        </AbstractModal>\n        <button type=\"button\" onClick={this.handleOpenModal}>Open Modal</button>\n      </div>\n    );\n  }\n}\n\nexport default AbstractModalAlertDialog;\n\n")))}S.isMDXComponent=!0;var j=function(e){var t=e.title,l=e.description,n=e.isExpanded;return d.createElement(c.A,{title:t||"Abstract Modal Alert Dialog",description:l,example:d.createElement(R.A,null),exampleCssSrc:d.createElement(x,null),exampleSrc:d.createElement(S,null),isExpanded:n})},q=l(12883),P=["components"],I={},Z="wrapper";function L(e){var t=e.components,l=(0,a.A)(e,P);return(0,o.mdx)(Z,(0,n.A)({},I,l,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)(q.Ay,{mdxType:"PropsTable"},(0,o.mdx)(q.fI,{key:"ROW1",mdxType:"Row"},(0,o.mdx)(q.dt,{mdxType:"PropNameCell"},"ariaLabel"),(0,o.mdx)(q.$d,{mdxType:"TypeCell"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,o.mdx)(q.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,o.mdx)(q.NZ,{mdxType:"DefaultValueCell"},(0,o.mdx)("p",null,"none")),(0,o.mdx)(q.Hd,{mdxType:"DescriptionCell"},(0,o.mdx)("p",null,"String that labels the modal for screen readers."))),(0,o.mdx)(q.fI,{key:"ROW2",mdxType:"Row"},(0,o.mdx)(q.dt,{mdxType:"PropNameCell"},"ariaLabelledBy"),(0,o.mdx)(q.$d,{mdxType:"TypeCell"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,o.mdx)(q.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,o.mdx)(q.NZ,{mdxType:"DefaultValueCell"},(0,o.mdx)("p",null,"none")),(0,o.mdx)(q.Hd,{mdxType:"DescriptionCell"},(0,o.mdx)("p",null,"String that labels the modal for screen readers."))),(0,o.mdx)(q.fI,{key:"ROW3",mdxType:"Row"},(0,o.mdx)(q.dt,{mdxType:"PropNameCell"},"ariaDescribedBy"),(0,o.mdx)(q.$d,{mdxType:"TypeCell"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,o.mdx)(q.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,o.mdx)(q.NZ,{mdxType:"DefaultValueCell"},(0,o.mdx)("p",null,"none")),(0,o.mdx)(q.Hd,{mdxType:"DescriptionCell"},(0,o.mdx)("p",null,"String that labels the modal for screen readers."))),(0,o.mdx)(q.fI,{key:"ROW4",mdxType:"Row"},(0,o.mdx)(q.dt,{mdxType:"PropNameCell"},"children"),(0,o.mdx)(q.$d,{mdxType:"TypeCell"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,o.mdx)(q.YZ,{isRequired:!0,mdxType:"RequiredCell"}),(0,o.mdx)(q.NZ,{mdxType:"DefaultValueCell"},(0,o.mdx)("p",null,"none")),(0,o.mdx)(q.Hd,{mdxType:"DescriptionCell"},(0,o.mdx)("p",null,"Content inside the modal dialog."))),(0,o.mdx)(q.fI,{key:"ROW5",mdxType:"Row"},(0,o.mdx)(q.dt,{mdxType:"PropNameCell"},"classNameModal"),(0,o.mdx)(q.$d,{mdxType:"TypeCell"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,o.mdx)(q.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,o.mdx)(q.NZ,{mdxType:"DefaultValueCell"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"null\n"))),(0,o.mdx)(q.Hd,{mdxType:"DescriptionCell"},(0,o.mdx)("p",null,"CSS classnames that are appended to the modal."))),(0,o.mdx)(q.fI,{key:"ROW6",mdxType:"Row"},(0,o.mdx)(q.dt,{mdxType:"PropNameCell"},"classNameOverlay"),(0,o.mdx)(q.$d,{mdxType:"TypeCell"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,o.mdx)(q.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,o.mdx)(q.NZ,{mdxType:"DefaultValueCell"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"null\n"))),(0,o.mdx)(q.Hd,{mdxType:"DescriptionCell"},(0,o.mdx)("p",null,"CSS classnames that are appended to the overlay."))),(0,o.mdx)(q.fI,{key:"ROW7",mdxType:"Row"},(0,o.mdx)(q.dt,{mdxType:"PropNameCell"},"closeOnEsc"),(0,o.mdx)(q.$d,{mdxType:"TypeCell"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,o.mdx)(q.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,o.mdx)(q.NZ,{mdxType:"DefaultValueCell"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"true\n"))),(0,o.mdx)(q.Hd,{mdxType:"DescriptionCell"},(0,o.mdx)("p",null,"If set to true, the modal will close when the esc key is pressed."))),(0,o.mdx)(q.fI,{key:"ROW8",mdxType:"Row"},(0,o.mdx)(q.dt,{mdxType:"PropNameCell"},"closeOnOutsideClick"),(0,o.mdx)(q.$d,{mdxType:"TypeCell"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,o.mdx)(q.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,o.mdx)(q.NZ,{mdxType:"DefaultValueCell"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"true\n"))),(0,o.mdx)(q.Hd,{mdxType:"DescriptionCell"},(0,o.mdx)("p",null,"If set to true, the modal will close when a mouse click is triggered outside the modal."))),(0,o.mdx)(q.fI,{key:"ROW9",mdxType:"Row"},(0,o.mdx)(q.dt,{mdxType:"PropNameCell"},"isFullscreen"),(0,o.mdx)(q.$d,{mdxType:"TypeCell"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,o.mdx)(q.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,o.mdx)(q.NZ,{mdxType:"DefaultValueCell"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,o.mdx)(q.Hd,{mdxType:"DescriptionCell"},(0,o.mdx)("p",null,"If set to true, the modal will be fullscreen on all breakpoint sizes."))),(0,o.mdx)(q.fI,{key:"ROW10",mdxType:"Row"},(0,o.mdx)(q.dt,{mdxType:"PropNameCell"},"isOpen"),(0,o.mdx)(q.$d,{mdxType:"TypeCell"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,o.mdx)(q.YZ,{isRequired:!0,mdxType:"RequiredCell"}),(0,o.mdx)(q.NZ,{mdxType:"DefaultValueCell"},(0,o.mdx)("p",null,"none")),(0,o.mdx)(q.Hd,{mdxType:"DescriptionCell"},(0,o.mdx)("p",null,"If set to true, the modal will rendered as opened."))),(0,o.mdx)(q.fI,{key:"ROW11",mdxType:"Row"},(0,o.mdx)(q.dt,{mdxType:"PropNameCell"},"onRequestClose"),(0,o.mdx)(q.$d,{mdxType:"TypeCell"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,o.mdx)(q.YZ,{isRequired:!0,mdxType:"RequiredCell"}),(0,o.mdx)(q.NZ,{mdxType:"DefaultValueCell"},(0,o.mdx)("p",null,"none")),(0,o.mdx)(q.Hd,{mdxType:"DescriptionCell"},(0,o.mdx)("p",null,"Callback function indicating a close condition was met, should be combined with isOpen for state management."))),(0,o.mdx)(q.fI,{key:"ROW12",mdxType:"Row"},(0,o.mdx)(q.dt,{mdxType:"PropNameCell"},"role"),(0,o.mdx)(q.$d,{mdxType:"TypeCell"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,o.mdx)(q.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,o.mdx)(q.NZ,{mdxType:"DefaultValueCell"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"'dialog'\n"))),(0,o.mdx)(q.Hd,{mdxType:"DescriptionCell"},(0,o.mdx)("p",null,"Role attribute on the modal dialog."))),(0,o.mdx)(q.fI,{key:"ROW13",mdxType:"Row"},(0,o.mdx)(q.dt,{mdxType:"PropNameCell"},"rootSelector"),(0,o.mdx)(q.$d,{mdxType:"TypeCell"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,o.mdx)(q.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,o.mdx)(q.NZ,{mdxType:"DefaultValueCell"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"'#root'\n"))),(0,o.mdx)(q.Hd,{mdxType:"DescriptionCell"},(0,o.mdx)("p",null,"Allows assigning of root element custom data attribute for easy selecting of document base component."))),(0,o.mdx)(q.fI,{key:"ROW14",mdxType:"Row"},(0,o.mdx)(q.dt,{mdxType:"PropNameCell"},"zIndex"),(0,o.mdx)(q.$d,{mdxType:"TypeCell"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  '6000'\n  '7000'\n  '8000'\n  '9000'\n],\n"))),(0,o.mdx)(q.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,o.mdx)(q.NZ,{mdxType:"DefaultValueCell"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"'6000'\n"))),(0,o.mdx)(q.Hd,{mdxType:"DescriptionCell"},(0,o.mdx)("p",null,"Z-Index layer to apply to the ModalContent and ModalOverlay. Valid values are the standard modal layer: '6000', and the max layer: '8000'."))),(0,o.mdx)(q.fI,{key:"ROW15",mdxType:"Row"},(0,o.mdx)(q.dt,{mdxType:"PropNameCell"},"shouldTrapFocus"),(0,o.mdx)(q.$d,{mdxType:"TypeCell"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,o.mdx)(q.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,o.mdx)(q.NZ,{mdxType:"DefaultValueCell"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,o.mdx)(q.Hd,{mdxType:"DescriptionCell"},(0,o.mdx)("p",null,"If set to true, then the focus lock will get enabled.")))))}L.isMDXComponent=!0;var Y=["components"],W={},z="wrapper";function B(e){var t=e.components,l=(0,a.A)(e,Y);return(0,o.mdx)(z,(0,n.A)({},W,l,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)(r.E,{mdxType:"Badge"}),(0,o.mdx)("h1",{id:"terra-abstract-modal"},"Terra Abstract Modal"),(0,o.mdx)("p",null,"The abstract modal is a structural component that provides the ability to display portal'd content in a layer above the app. It consists of an overlay and an unstyled absolute positioned div in which content can be placed. The abstract modal is not intended to be consumed directly, but rather wrapped in a higher order component. Higher order components can provide the abstract modal with sizing, visual styles, and content (e.g; header, body, and actionable buttons). The abstract modals maximum size is constrained by the viewport size, so the content placed inside the modal needs to be responsive."),(0,o.mdx)("p",null,"Our recommendation for HOC is the ",(0,o.mdx)("a",{parentName:"p",href:"https://engineering.cerner.com/terra-framework/components/terra-modal-manager/modal-manager/about"},"terra-modal-manager"),", as it provides sizing, responsive behavior, visual styles, and a disclosure stack."),(0,o.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Install with ",(0,o.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"npm install terra-abstract-modal"))))),(0,o.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,o.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,o.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"react"),(0,o.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,o.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"react-intl"),(0,o.mdx)("td",{parentName:"tr",align:null},"^2.9.0")))),(0,o.mdx)("h2",{id:"component-features"},"Component Features"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support"))),(0,o.mdx)("h2",{id:"examples"},"Examples"),(0,o.mdx)(h,{title:"Default Modal",mdxType:"AbstractModalIsOpened"}),(0,o.mdx)(M,{title:"\nDisable closing the modal when clicking on the overlay",mdxType:"AbstractModalCloseOnOutsideClick"}),(0,o.mdx)(w,{title:"Fullscreen Modal",mdxType:"AbstractModalIsFullscreen"}),(0,o.mdx)(j,{title:"Alert Dialog Modal",mdxType:"AbstractModalAlertDialog"}),(0,o.mdx)("h2",{id:"abstract-modal-props"},"Abstract Modal Props"),(0,o.mdx)(L,{mdxType:"ModalPropsTable"}))}B.isMDXComponent=!0},26748:function(e,t,l){l.d(t,{E:function(){return d}});var n=l(96540),a=l(55713),d=function(e){var t=e.url;return n.createElement(a.A,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-abstract-modal",name:"terra-abstract-modal",version:"3.46.0",url:t})}},30324:function(e,t,l){var n=l(24994),a=l(73738);t.A=void 0;var d=n(l(17383)),o=n(l(34579)),r=n(l(28452)),s=n(l(63072)),m=n(l(12475)),i=n(l(29511)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var l=h(t);if(l&&l.has(e))return l.get(e);var n={__proto__:null},d=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var r=d?Object.getOwnPropertyDescriptor(e,o):null;r&&(r.get||r.set)?Object.defineProperty(n,o,r):n[o]=e[o]}return n.default=e,l&&l.set(e,n),n}(l(96540)),c=n(l(20605)),p=n(l(67967)),f=n(l(82283)),x=n(l(62350));function h(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(h=function(e){return e?l:t})(e)}function y(e,t,l){return t=(0,s.default)(t),(0,r.default)(e,b()?Reflect.construct(t,l||[],(0,s.default)(e).constructor):t.apply(e,l))}function b(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(b=function(){return!!e})()}var C=p.default.bind(x.default),g=function(e){var t=e.handleCloseModal,l=(0,u.useRef)(null);return(0,u.useEffect)((function(){l.current.focus()}),[]),u.default.createElement("div",{id:"alert-dialog-content",className:C("content-wrapper")},u.default.createElement("h1",null,"Alert Dialog Modal"),u.default.createElement("br",null),u.default.createElement("p",null,"The abstract modal can be used to create an alert dialog modal. You can use the role,"," ",u.default.createElement("code",null,"alertdialog")," ",", to create a modal dialog that interrupts the users workflow to get a response, usually some sort of confirmation."),u.default.createElement("button",{ref:l,type:"button",onClick:t},"Confirm action"),u.default.createElement("button",{type:"button",onClick:t},"Close Modal"))},M=function(e){function t(){var e;return(0,d.default)(this,t),(e=y(this,t)).state={isOpen:!1},e.handleOpenModal=e.handleOpenModal.bind((0,m.default)(e)),e.handleCloseModal=e.handleCloseModal.bind((0,m.default)(e)),e}return(0,i.default)(t,e),(0,o.default)(t,[{key:"handleOpenModal",value:function(){this.setState({isOpen:!0})}},{key:"handleCloseModal",value:function(){this.setState({isOpen:!1})}},{key:"render",value:function(){return u.default.createElement("div",null,u.default.createElement(c.default,{ariaLabel:"","aria-labelledby":"alert-dialog-content",isOpen:this.state.isOpen,onRequestClose:this.handleCloseModal,closeOnOutsideClick:!1,classNameModal:f.default["fixed-size"],role:"alertdialog"},u.default.createElement(g,{handleCloseModal:this.handleCloseModal})),u.default.createElement("button",{type:"button",onClick:this.handleOpenModal},"Open Modal"))}}]),t}(u.default.Component);t.A=M},20914:function(e,t,l){var n=l(24994);t.A=void 0;var a=n(l(17383)),d=n(l(34579)),o=n(l(28452)),r=n(l(63072)),s=n(l(12475)),m=n(l(29511)),i=n(l(96540)),u=n(l(20605)),c=n(l(67967)),p=n(l(82283)),f=n(l(62350));function x(e,t,l){return t=(0,r.default)(t),(0,o.default)(e,h()?Reflect.construct(t,l||[],(0,r.default)(e).constructor):t.apply(e,l))}function h(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(h=function(){return!!e})()}var y=c.default.bind(f.default),b=function(e){function t(){var e;return(0,a.default)(this,t),(e=x(this,t)).state={isOpen:!1},e.handleOpenModal=e.handleOpenModal.bind((0,s.default)(e)),e.handleCloseModal=e.handleCloseModal.bind((0,s.default)(e)),e}return(0,m.default)(t,e),(0,d.default)(t,[{key:"handleOpenModal",value:function(){this.setState({isOpen:!0})}},{key:"handleCloseModal",value:function(){this.setState({isOpen:!1})}},{key:"render",value:function(){return i.default.createElement("div",null,i.default.createElement(u.default,{ariaLabel:"Modal disable close on outside click",isOpen:this.state.isOpen,closeOnOutsideClick:!1,onRequestClose:this.handleCloseModal,classNameModal:p.default["fixed-size"]},i.default.createElement("div",{className:y("content-wrapper")},i.default.createElement("h1",null,"Modal disable close on outside click"),i.default.createElement("br",null),i.default.createElement("p",null,"You can close the modal by:"),i.default.createElement("ul",null,i.default.createElement("li",null,"- Pressing the ESC key"),i.default.createElement("li",null,"- Clicking on the close button")),i.default.createElement("br",null),i.default.createElement("button",{type:"button",onClick:this.handleCloseModal},"Close Modal"))),i.default.createElement("button",{type:"button",onClick:this.handleOpenModal},"Open Modal"))}}]),t}(i.default.Component);t.A=b},1218:function(e,t,l){var n=l(24994);t.A=void 0;var a=n(l(17383)),d=n(l(34579)),o=n(l(28452)),r=n(l(63072)),s=n(l(12475)),m=n(l(29511)),i=n(l(96540)),u=n(l(20605)),c=n(l(67967)),p=n(l(62350));function f(e,t,l){return t=(0,r.default)(t),(0,o.default)(e,x()?Reflect.construct(t,l||[],(0,r.default)(e).constructor):t.apply(e,l))}function x(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(x=function(){return!!e})()}var h=c.default.bind(p.default),y=function(e){function t(){var e;return(0,a.default)(this,t),(e=f(this,t)).state={isOpen:!1},e.handleOpenModal=e.handleOpenModal.bind((0,s.default)(e)),e.handleCloseModal=e.handleCloseModal.bind((0,s.default)(e)),e}return(0,m.default)(t,e),(0,d.default)(t,[{key:"handleOpenModal",value:function(){this.setState({isOpen:!0})}},{key:"handleCloseModal",value:function(){this.setState({isOpen:!1})}},{key:"render",value:function(){return i.default.createElement("div",null,i.default.createElement(u.default,{ariaLabel:"Fullscreen Modal",isOpen:this.state.isOpen,isFullscreen:!0,onRequestClose:this.handleCloseModal},i.default.createElement("div",{className:h("content-wrapper")},i.default.createElement("h1",null,"Fullscreen Modal"),i.default.createElement("br",null),i.default.createElement("p",null,"This modal will always take up the full screen."),i.default.createElement("p",null),i.default.createElement("br",null),i.default.createElement("button",{type:"button",onClick:this.handleCloseModal},"Close Modal"))),i.default.createElement("button",{type:"button",onClick:this.handleOpenModal},"Open Modal"))}}]),t}(i.default.Component);t.A=y},70361:function(e,t,l){var n=l(24994);t.A=void 0;var a=n(l(17383)),d=n(l(34579)),o=n(l(28452)),r=n(l(63072)),s=n(l(12475)),m=n(l(29511)),i=n(l(96540)),u=n(l(20605)),c=n(l(67967)),p=n(l(82283)),f=n(l(62350));function x(e,t,l){return t=(0,r.default)(t),(0,o.default)(e,h()?Reflect.construct(t,l||[],(0,r.default)(e).constructor):t.apply(e,l))}function h(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(h=function(){return!!e})()}var y=c.default.bind(f.default),b=function(e){function t(){var e;return(0,a.default)(this,t),(e=x(this,t)).state={isOpen:!1},e.handleOpenModal=e.handleOpenModal.bind((0,s.default)(e)),e.handleCloseModal=e.handleCloseModal.bind((0,s.default)(e)),e}return(0,m.default)(t,e),(0,d.default)(t,[{key:"handleOpenModal",value:function(){this.setState({isOpen:!0})}},{key:"handleCloseModal",value:function(){this.setState({isOpen:!1})}},{key:"render",value:function(){return i.default.createElement("div",null,i.default.createElement(u.default,{ariaLabel:"Default Modal",isOpen:this.state.isOpen,onRequestClose:this.handleCloseModal,classNameModal:p.default["fixed-size"]},i.default.createElement("div",{className:y("content-wrapper")},i.default.createElement("h1",null,"Default Modal"),i.default.createElement("br",null),i.default.createElement("p",null,"You can close the modal by:"),i.default.createElement("ul",null,i.default.createElement("li",null,"- Pressing the ESC key"),i.default.createElement("li",null,"- Clicking on the overlay"),i.default.createElement("li",null,"- Clicking on the close button")),i.default.createElement("br",null),i.default.createElement("p",null,"On smaller screens, the modal will take up the full screen."),i.default.createElement("p",null),i.default.createElement("br",null),i.default.createElement("button",{type:"button",onClick:this.handleCloseModal},"Close Modal"))),i.default.createElement("button",{type:"button",onClick:this.handleOpenModal},"Open Modal"))}}]),t}(i.default.Component);t.A=b},89986:function(e,t,l){l.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},62350:function(e,t,l){l.r(t),t.default={"content-wrapper":"AbstractModalDocCommon-module__content-wrapper___phElL"}},82283:function(e,t,l){l.r(t),t.default={"fixed-size":"ExampleAbstractSize-module__fixed-size___uWh96"}},49558:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=d(l(96540)),a=d(l(25365));function d(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e},o.apply(this,arguments)}var r=function(e){var t=o({},e);return n.default.createElement(a.default,t,n.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};r.displayName="IconChevronLeft",r.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=r}}]);