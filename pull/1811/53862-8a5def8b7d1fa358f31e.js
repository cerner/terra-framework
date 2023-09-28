"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[53862],{49271:function(e,t,n){var l=n(64836),a=n(18698);t.Z=void 0;var o=l(n(27424)),r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var l={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var d=o?Object.getOwnPropertyDescriptor(e,r):null;d&&(d.get||d.set)?Object.defineProperty(l,r,d):l[r]=e[r]}l.default=e,n&&n.set(e,l);return l}(n(67294)),d=l(n(45697)),s=l(n(47166)),i=n(21538),u=l(n(33864)),m=l(n(23399)),c=n(51051),p=l(n(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var x=s.default.bind(p.default),h={example:d.default.element,exampleSrc:d.default.element,exampleCssSrc:d.default.element,title:d.default.string,description:d.default.node,isExpanded:d.default.bool},y=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},C=function(e){var t=e.example,n=e.exampleSrc,l=e.exampleCssSrc,a=e.title,d=e.description,s=e.isExpanded,p=(0,r.useState)(s),f=(0,o.default)(p,2),h=f[0],C=f[1],v=(0,r.useState)(!1),M=(0,o.default)(v,2),g=M[0],O=M[1],E=r.default.useContext(i.ThemeContext),N=void 0!==l,T=function(){O(!g),h&&C(!h)},_=function(){C(!h),g&&O(!g)},k=function(e,t){e.nativeEvent.keyCode!==c.KEY_SPACE&&e.nativeEvent.keyCode!==c.KEY_RETURN||(e.preventDefault(),t())};return r.default.createElement("div",{className:x("template",E.className)},r.default.createElement("div",{className:x("header")},a&&r.default.createElement("h2",{className:x("title")},a)),r.default.createElement("div",{className:x("content")},d&&r.default.createElement("div",{className:x("description")},d),t),r.default.createElement("div",{className:x("footer")},n?r.default.createElement("div",{className:x("button-container")},N&&r.default.createElement("button",{type:"button",className:x("css-toggle","item",{"is-selected":g}),onClick:T,onKeyDown:function(e){return k(e,T)},onBlur:y,onMouseDown:b,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(u.default,{className:x("chevron")}),r.default.createElement("span",null,"CSS"),r.default.createElement(m.default,{className:x("chevron")})),r.default.createElement("button",{type:"button",className:x("code-toggle","item",{"is-selected":h}),onClick:_,onKeyDown:function(e){return k(e,_)},onBlur:y,onMouseDown:b,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(u.default,{className:x("chevron")}),r.default.createElement("span",null,"Code"),r.default.createElement(m.default,{className:x("chevron")}))):null,r.default.createElement("div",null,g&&r.default.createElement("div",{className:x("css")},l),h&&r.default.createElement("div",{className:x("code")},n))))};C.propTypes=h,C.defaultProps={isExpanded:!1};var v=C;t.Z=v},44160:function(e,t,n){n.r(t),n.d(t,{default:function(){return I}});var l=n(87462),a=n(44925),o=n(67294),r=n(81254),d=n(64835),s=n(40539),i=["components"],u={};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.mdx)("wrapper",(0,l.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport AbstractModal from 'terra-abstract-modal';\nimport classNames from 'classnames/bind';\nimport styles from './ExampleAbstractSize.module.scss';\nimport generalStyles from './AbstractModalDocCommon.module.scss';\n\nconst cx = classNames.bind(generalStyles);\n\nclass AbstractModalIsOpen extends React.Component {\n  constructor() {\n    super();\n\n    this.state = {\n      isOpen: false,\n    };\n\n    this.handleOpenModal = this.handleOpenModal.bind(this);\n    this.handleCloseModal = this.handleCloseModal.bind(this);\n  }\n\n  handleOpenModal() {\n    this.setState({ isOpen: true });\n  }\n\n  handleCloseModal() {\n    this.setState({ isOpen: false });\n  }\n\n  render() {\n    return (\n      <div>\n        <AbstractModal\n          ariaLabel=\"Default Modal\"\n          isOpen={this.state.isOpen}\n          onRequestClose={this.handleCloseModal}\n          classNameModal={styles['fixed-size']}\n        >\n          <div className={cx('content-wrapper')}>\n            <h1>Default Modal</h1>\n            <br />\n            <p>You can close the modal by:</p>\n            <ul>\n              <li>- Pressing the ESC key</li>\n              <li>- Clicking on the overlay</li>\n              <li>- Clicking on the close button</li>\n            </ul>\n            <br />\n            <p>On smaller screens, the modal will take up the full screen.</p>\n            <p />\n            <br />\n            <button type=\"button\" onClick={this.handleCloseModal}>Close Modal</button>\n          </div>\n        </AbstractModal>\n        <button type=\"button\" onClick={this.handleOpenModal}>Open Modal</button>\n      </div>\n    );\n  }\n}\n\nexport default AbstractModalIsOpen;\n\n")))}m.isMDXComponent=!0;var c=n(49271),p=["components"],f={};function x(e){var t=e.components,n=(0,a.Z)(e,p);return(0,r.mdx)("wrapper",(0,l.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-scss"},":local {\n  .fixed-size {\n    height: 450px;\n    width: 450px;\n  }\n}\n\n")))}x.isMDXComponent=!0;var h=function(e){var t=e.title,n=e.description,l=e.isExpanded;return o.createElement(c.Z,{title:t||"Abstract Modal Is Opened",description:n,example:o.createElement(s.Z,null),exampleCssSrc:o.createElement(x,null),exampleSrc:o.createElement(m,null),isExpanded:l})},y=n(37230),b=["components"],C={};function v(e){var t=e.components,n=(0,a.Z)(e,b);return(0,r.mdx)("wrapper",(0,l.Z)({},C,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport AbstractModal from 'terra-abstract-modal';\nimport classNames from 'classnames/bind';\nimport styles from './ExampleAbstractSize.module.scss';\nimport generalStyles from './AbstractModalDocCommon.module.scss';\n\nconst cx = classNames.bind(generalStyles);\n\nclass AbstractModalCloseOnOutsideClick extends React.Component {\n  constructor() {\n    super();\n\n    this.state = {\n      isOpen: false,\n    };\n\n    this.handleOpenModal = this.handleOpenModal.bind(this);\n    this.handleCloseModal = this.handleCloseModal.bind(this);\n  }\n\n  handleOpenModal() {\n    this.setState({ isOpen: true });\n  }\n\n  handleCloseModal() {\n    this.setState({ isOpen: false });\n  }\n\n  render() {\n    return (\n      <div>\n        <AbstractModal\n          ariaLabel=\"Modal disable close on outside click\"\n          isOpen={this.state.isOpen}\n          closeOnOutsideClick={false}\n          onRequestClose={this.handleCloseModal}\n          classNameModal={styles['fixed-size']}\n        >\n          <div className={cx('content-wrapper')}>\n            <h1>Modal disable close on outside click</h1>\n            <br />\n            <p>You can close the modal by:</p>\n            <ul>\n              <li>- Pressing the ESC key</li>\n              <li>- Clicking on the close button</li>\n            </ul>\n            <br />\n            <button type=\"button\" onClick={this.handleCloseModal}>Close Modal</button>\n          </div>\n        </AbstractModal>\n        <button type=\"button\" onClick={this.handleOpenModal}>Open Modal</button>\n      </div>\n    );\n  }\n}\n\nexport default AbstractModalCloseOnOutsideClick;\n\n")))}v.isMDXComponent=!0;var M=function(e){var t=e.title,n=e.description,l=e.isExpanded;return o.createElement(c.Z,{title:t||"Abstract Modal Close On Outside Click",description:n,example:o.createElement(y.Z,null),exampleCssSrc:o.createElement(x,null),exampleSrc:o.createElement(v,null),isExpanded:l})},g=n(31695),O=["components"],E={};function N(e){var t=e.components,n=(0,a.Z)(e,O);return(0,r.mdx)("wrapper",(0,l.Z)({},E,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport AbstractModal from 'terra-abstract-modal';\nimport classNames from 'classnames/bind';\nimport styles from './AbstractModalDocCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nclass AbstractModalIsFullscreen extends React.Component {\n  constructor() {\n    super();\n\n    this.state = {\n      isOpen: false,\n    };\n\n    this.handleOpenModal = this.handleOpenModal.bind(this);\n    this.handleCloseModal = this.handleCloseModal.bind(this);\n  }\n\n  handleOpenModal() {\n    this.setState({ isOpen: true });\n  }\n\n  handleCloseModal() {\n    this.setState({ isOpen: false });\n  }\n\n  render() {\n    return (\n      <div>\n        <AbstractModal\n          ariaLabel=\"Fullscreen Modal\"\n          isOpen={this.state.isOpen}\n          isFullscreen\n          onRequestClose={this.handleCloseModal}\n        >\n          <div className={cx('content-wrapper')}>\n            <h1>Fullscreen Modal</h1>\n            <br />\n            <p>This modal will always take up the full screen.</p>\n            <p />\n            <br />\n            <button type=\"button\" onClick={this.handleCloseModal}>Close Modal</button>\n          </div>\n        </AbstractModal>\n        <button type=\"button\" onClick={this.handleOpenModal}>Open Modal</button>\n      </div>\n    );\n  }\n}\n\nexport default AbstractModalIsFullscreen;\n\n")))}N.isMDXComponent=!0;var T=["components"],_={};function k(e){var t=e.components,n=(0,a.Z)(e,T);return(0,r.mdx)("wrapper",(0,l.Z)({},_,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-scss"},":local {\n  .content-wrapper {\n    background-color: #faebd7;\n    height: 100%;\n    overflow: hidden;\n    width: 100%;\n  }\n}\n\n")))}k.isMDXComponent=!0;var w=function(e){var t=e.title,n=e.description,l=e.isExpanded;return o.createElement(c.Z,{title:t||"Abstract Modal Is Fullscreen",description:n,example:o.createElement(g.Z,null),exampleCssSrc:o.createElement(k,null),exampleSrc:o.createElement(N,null),isExpanded:l})},R=n(77966),D=["components"],S={};function A(e){var t=e.components,n=(0,a.Z)(e,D);return(0,r.mdx)("wrapper",(0,l.Z)({},S,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useRef, useEffect } from 'react';\nimport AbstractModal from 'terra-abstract-modal';\nimport classNames from 'classnames/bind';\nimport styles from './ExampleAbstractSize.module.scss';\nimport generalStyles from './AbstractModalDocCommon.module.scss';\n\nconst cx = classNames.bind(generalStyles);\n\n/* eslint-disable-next-line react/prop-types */\nconst AlertDialogContent = ({ handleCloseModal }) => {\n  const confirmBtn = useRef(null);\n\n  useEffect(() => {\n    confirmBtn.current.focus();\n  }, []);\n\n  return (\n    <div id=\"alert-dialog-content\" className={cx('content-wrapper')}>\n      <h1>Alert Dialog Modal</h1>\n      <br />\n      <p>\n        The abstract modal can be used to create an alert dialog modal. You can use the role,\n        {' '}\n        <code>alertdialog</code>\n        {' '}\n        , to create a modal dialog that interrupts the users workflow to get a response, usually some sort of confirmation.\n      </p>\n      <button ref={confirmBtn} type=\"button\" onClick={handleCloseModal}>Confirm action</button>\n      <button type=\"button\" onClick={handleCloseModal}>Close Modal</button>\n    </div>\n  );\n};\n\n/* VoiceOver will not read the content of the modal dialog if the role attribute\n is set to `alertdialog` and ariaLabel is defined */\nconst ariaLabel = '';\n\nclass AbstractModalAlertDialog extends React.Component {\n  constructor() {\n    super();\n\n    this.state = {\n      isOpen: false,\n    };\n\n    this.handleOpenModal = this.handleOpenModal.bind(this);\n    this.handleCloseModal = this.handleCloseModal.bind(this);\n  }\n\n  handleOpenModal() {\n    this.setState({ isOpen: true });\n  }\n\n  handleCloseModal() {\n    this.setState({ isOpen: false });\n  }\n\n  render() {\n    return (\n      <div>\n        <AbstractModal\n          ariaLabel={ariaLabel}\n          aria-labelledby=\"alert-dialog-content\"\n          isOpen={this.state.isOpen}\n          onRequestClose={this.handleCloseModal}\n          closeOnOutsideClick={false}\n          classNameModal={styles['fixed-size']}\n          role=\"alertdialog\"\n        >\n          <AlertDialogContent handleCloseModal={this.handleCloseModal} />\n        </AbstractModal>\n        <button type=\"button\" onClick={this.handleOpenModal}>Open Modal</button>\n      </div>\n    );\n  }\n}\n\nexport default AbstractModalAlertDialog;\n\n")))}A.isMDXComponent=!0;var j=function(e){var t=e.title,n=e.description,l=e.isExpanded;return o.createElement(c.Z,{title:t||"Abstract Modal Alert Dialog",description:n,example:o.createElement(R.Z,null),exampleCssSrc:o.createElement(x,null),exampleSrc:o.createElement(A,null),isExpanded:l})},P=n(78530),Z=["components"],q={},W="wrapper";function X(e){var t=e.components,n=(0,a.Z)(e,Z);return(0,r.mdx)(W,(0,l.Z)({},q,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(P.ZP,{mdxType:"PropsTable"},(0,r.mdx)(P.X2,{key:"ROW1",mdxType:"Row"},(0,r.mdx)(P.O,{mdxType:"PropNameCell"},"ariaLabel"),(0,r.mdx)(P.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(P.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,r.mdx)(P.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(P.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"String that labels the modal for screen readers."))),(0,r.mdx)(P.X2,{key:"ROW2",mdxType:"Row"},(0,r.mdx)(P.O,{mdxType:"PropNameCell"},"children"),(0,r.mdx)(P.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,r.mdx)(P.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,r.mdx)(P.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(P.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Content inside the modal dialog."))),(0,r.mdx)(P.X2,{key:"ROW3",mdxType:"Row"},(0,r.mdx)(P.O,{mdxType:"PropNameCell"},"classNameModal"),(0,r.mdx)(P.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(P.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(P.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"null\n"))),(0,r.mdx)(P.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"CSS classnames that are appended to the modal."))),(0,r.mdx)(P.X2,{key:"ROW4",mdxType:"Row"},(0,r.mdx)(P.O,{mdxType:"PropNameCell"},"classNameOverlay"),(0,r.mdx)(P.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(P.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(P.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"null\n"))),(0,r.mdx)(P.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"CSS classnames that are appended to the overlay."))),(0,r.mdx)(P.X2,{key:"ROW5",mdxType:"Row"},(0,r.mdx)(P.O,{mdxType:"PropNameCell"},"closeOnEsc"),(0,r.mdx)(P.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(P.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(P.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"true\n"))),(0,r.mdx)(P.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"If set to true, the modal will close when the esc key is pressed."))),(0,r.mdx)(P.X2,{key:"ROW6",mdxType:"Row"},(0,r.mdx)(P.O,{mdxType:"PropNameCell"},"closeOnOutsideClick"),(0,r.mdx)(P.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(P.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(P.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"true\n"))),(0,r.mdx)(P.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"If set to true, the modal will close when a mouse click is triggered outside the modal."))),(0,r.mdx)(P.X2,{key:"ROW7",mdxType:"Row"},(0,r.mdx)(P.O,{mdxType:"PropNameCell"},"isFullscreen"),(0,r.mdx)(P.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(P.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(P.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,r.mdx)(P.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"If set to true, the modal will be fullscreen on all breakpoint sizes."))),(0,r.mdx)(P.X2,{key:"ROW8",mdxType:"Row"},(0,r.mdx)(P.O,{mdxType:"PropNameCell"},"isOpen"),(0,r.mdx)(P.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(P.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,r.mdx)(P.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(P.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"If set to true, the modal will rendered as opened."))),(0,r.mdx)(P.X2,{key:"ROW9",mdxType:"Row"},(0,r.mdx)(P.O,{mdxType:"PropNameCell"},"onRequestClose"),(0,r.mdx)(P.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,r.mdx)(P.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,r.mdx)(P.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(P.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Callback function indicating a close condition was met, should be combined with isOpen for state management."))),(0,r.mdx)(P.X2,{key:"ROW10",mdxType:"Row"},(0,r.mdx)(P.O,{mdxType:"PropNameCell"},"role"),(0,r.mdx)(P.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(P.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(P.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"'dialog'\n"))),(0,r.mdx)(P.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Role attribute on the modal dialog."))),(0,r.mdx)(P.X2,{key:"ROW11",mdxType:"Row"},(0,r.mdx)(P.O,{mdxType:"PropNameCell"},"rootSelector"),(0,r.mdx)(P.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(P.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(P.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"'#root'\n"))),(0,r.mdx)(P.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Allows assigning of root element custom data attribute for easy selecting of document base component."))),(0,r.mdx)(P.X2,{key:"ROW12",mdxType:"Row"},(0,r.mdx)(P.O,{mdxType:"PropNameCell"},"zIndex"),(0,r.mdx)(P.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  '6000'\n  '7000'\n  '8000'\n  '9000'\n],\n"))),(0,r.mdx)(P.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(P.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"'6000'\n"))),(0,r.mdx)(P.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Z-Index layer to apply to the ModalContent and ModalOverlay. Valid values are the standard modal layer: '6000', and the max layer: '8000'.")))))}X.isMDXComponent=!0;var L=["components"],z={},B="wrapper";function I(e){var t=e.components,n=(0,a.Z)(e,L);return(0,r.mdx)(B,(0,l.Z)({},z,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(d.C,{mdxType:"Badge"}),(0,r.mdx)("h1",{id:"terra-abstract-modal"},"Terra Abstract Modal"),(0,r.mdx)("p",null,"The abstract modal is a structural component that provides the ability to display portal'd content in a layer above the app. It consists of an overlay and an unstyled absolute positioned div in which content can be placed. The abstract modal is not intended to be consumed directly, but rather wrapped in a higher order component. Higher order components can provide the abstract modal with sizing, visual styles, and content (e.g; header, body, and actionable buttons). The abstract modals maximum size is constrained by the viewport size, so the content placed inside the modal needs to be responsive."),(0,r.mdx)("p",null,"Our recommendation for HOC is the ",(0,r.mdx)("a",{parentName:"p",href:"https://engineering.cerner.com/terra-framework/components/terra-modal-manager/modal-manager/about"},"terra-modal-manager"),", as it provides sizing, responsive behavior, visual styles, and a disclosure stack."),(0,r.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Install with ",(0,r.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"npm install terra-abstract-modal"))))),(0,r.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,r.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,r.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"react"),(0,r.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,r.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"react-intl"),(0,r.mdx)("td",{parentName:"tr",align:null},"^2.9.0")))),(0,r.mdx)("h2",{id:"component-features"},"Component Features"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support"))),(0,r.mdx)("h2",{id:"examples"},"Examples"),(0,r.mdx)(h,{title:"Default Modal",mdxType:"AbstractModalIsOpened"}),(0,r.mdx)(M,{title:"\nDisable closing the modal when clicking on the overlay",mdxType:"AbstractModalCloseOnOutsideClick"}),(0,r.mdx)(w,{title:"Fullscreen Modal",mdxType:"AbstractModalIsFullscreen"}),(0,r.mdx)(j,{title:"Alert Dialog Modal",mdxType:"AbstractModalAlertDialog"}),(0,r.mdx)("h2",{id:"abstract-modal-props"},"Abstract Modal Props"),(0,r.mdx)(X,{mdxType:"ModalPropsTable"}))}I.isMDXComponent=!0},64835:function(e,t,n){n.d(t,{C:function(){return o}});var l=n(67294),a=n(22863),o=function(e){var t=e.url;return l.createElement(a.Z,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-abstract-modal",name:"terra-abstract-modal",version:"3.43.1",url:t})}},77966:function(e,t,n){var l=n(64836),a=n(18698);t.Z=void 0;var o=l(n(56690)),r=l(n(89728)),d=l(n(66115)),s=l(n(61655)),i=l(n(94993)),u=l(n(73808)),m=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=h(t);if(n&&n.has(e))return n.get(e);var l={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var d=o?Object.getOwnPropertyDescriptor(e,r):null;d&&(d.get||d.set)?Object.defineProperty(l,r,d):l[r]=e[r]}l.default=e,n&&n.set(e,l);return l}(n(67294)),c=l(n(31501)),p=l(n(47166)),f=l(n(39800)),x=l(n(47787));function h(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(h=function(e){return e?n:t})(e)}function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,l=(0,u.default)(e);if(t){var a=(0,u.default)(this).constructor;n=Reflect.construct(l,arguments,a)}else n=l.apply(this,arguments);return(0,i.default)(this,n)}}var b=p.default.bind(x.default),C=function(e){var t=e.handleCloseModal,n=(0,m.useRef)(null);return(0,m.useEffect)((function(){n.current.focus()}),[]),m.default.createElement("div",{id:"alert-dialog-content",className:b("content-wrapper")},m.default.createElement("h1",null,"Alert Dialog Modal"),m.default.createElement("br",null),m.default.createElement("p",null,"The abstract modal can be used to create an alert dialog modal. You can use the role,"," ",m.default.createElement("code",null,"alertdialog")," ",", to create a modal dialog that interrupts the users workflow to get a response, usually some sort of confirmation."),m.default.createElement("button",{ref:n,type:"button",onClick:t},"Confirm action"),m.default.createElement("button",{type:"button",onClick:t},"Close Modal"))},v=function(e){(0,s.default)(n,e);var t=y(n);function n(){var e;return(0,o.default)(this,n),(e=t.call(this)).state={isOpen:!1},e.handleOpenModal=e.handleOpenModal.bind((0,d.default)(e)),e.handleCloseModal=e.handleCloseModal.bind((0,d.default)(e)),e}return(0,r.default)(n,[{key:"handleOpenModal",value:function(){this.setState({isOpen:!0})}},{key:"handleCloseModal",value:function(){this.setState({isOpen:!1})}},{key:"render",value:function(){return m.default.createElement("div",null,m.default.createElement(c.default,{ariaLabel:"","aria-labelledby":"alert-dialog-content",isOpen:this.state.isOpen,onRequestClose:this.handleCloseModal,closeOnOutsideClick:!1,classNameModal:f.default["fixed-size"],role:"alertdialog"},m.default.createElement(C,{handleCloseModal:this.handleCloseModal})),m.default.createElement("button",{type:"button",onClick:this.handleOpenModal},"Open Modal"))}}]),n}(m.default.Component);t.Z=v},37230:function(e,t,n){var l=n(64836);t.Z=void 0;var a=l(n(56690)),o=l(n(89728)),r=l(n(66115)),d=l(n(61655)),s=l(n(94993)),i=l(n(73808)),u=l(n(67294)),m=l(n(31501)),c=l(n(47166)),p=l(n(39800)),f=l(n(47787));function x(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,l=(0,i.default)(e);if(t){var a=(0,i.default)(this).constructor;n=Reflect.construct(l,arguments,a)}else n=l.apply(this,arguments);return(0,s.default)(this,n)}}var h=c.default.bind(f.default),y=function(e){(0,d.default)(n,e);var t=x(n);function n(){var e;return(0,a.default)(this,n),(e=t.call(this)).state={isOpen:!1},e.handleOpenModal=e.handleOpenModal.bind((0,r.default)(e)),e.handleCloseModal=e.handleCloseModal.bind((0,r.default)(e)),e}return(0,o.default)(n,[{key:"handleOpenModal",value:function(){this.setState({isOpen:!0})}},{key:"handleCloseModal",value:function(){this.setState({isOpen:!1})}},{key:"render",value:function(){return u.default.createElement("div",null,u.default.createElement(m.default,{ariaLabel:"Modal disable close on outside click",isOpen:this.state.isOpen,closeOnOutsideClick:!1,onRequestClose:this.handleCloseModal,classNameModal:p.default["fixed-size"]},u.default.createElement("div",{className:h("content-wrapper")},u.default.createElement("h1",null,"Modal disable close on outside click"),u.default.createElement("br",null),u.default.createElement("p",null,"You can close the modal by:"),u.default.createElement("ul",null,u.default.createElement("li",null,"- Pressing the ESC key"),u.default.createElement("li",null,"- Clicking on the close button")),u.default.createElement("br",null),u.default.createElement("button",{type:"button",onClick:this.handleCloseModal},"Close Modal"))),u.default.createElement("button",{type:"button",onClick:this.handleOpenModal},"Open Modal"))}}]),n}(u.default.Component);t.Z=y},31695:function(e,t,n){var l=n(64836);t.Z=void 0;var a=l(n(56690)),o=l(n(89728)),r=l(n(66115)),d=l(n(61655)),s=l(n(94993)),i=l(n(73808)),u=l(n(67294)),m=l(n(31501)),c=l(n(47166)),p=l(n(47787));function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,l=(0,i.default)(e);if(t){var a=(0,i.default)(this).constructor;n=Reflect.construct(l,arguments,a)}else n=l.apply(this,arguments);return(0,s.default)(this,n)}}var x=c.default.bind(p.default),h=function(e){(0,d.default)(n,e);var t=f(n);function n(){var e;return(0,a.default)(this,n),(e=t.call(this)).state={isOpen:!1},e.handleOpenModal=e.handleOpenModal.bind((0,r.default)(e)),e.handleCloseModal=e.handleCloseModal.bind((0,r.default)(e)),e}return(0,o.default)(n,[{key:"handleOpenModal",value:function(){this.setState({isOpen:!0})}},{key:"handleCloseModal",value:function(){this.setState({isOpen:!1})}},{key:"render",value:function(){return u.default.createElement("div",null,u.default.createElement(m.default,{ariaLabel:"Fullscreen Modal",isOpen:this.state.isOpen,isFullscreen:!0,onRequestClose:this.handleCloseModal},u.default.createElement("div",{className:x("content-wrapper")},u.default.createElement("h1",null,"Fullscreen Modal"),u.default.createElement("br",null),u.default.createElement("p",null,"This modal will always take up the full screen."),u.default.createElement("p",null),u.default.createElement("br",null),u.default.createElement("button",{type:"button",onClick:this.handleCloseModal},"Close Modal"))),u.default.createElement("button",{type:"button",onClick:this.handleOpenModal},"Open Modal"))}}]),n}(u.default.Component);t.Z=h},40539:function(e,t,n){var l=n(64836);t.Z=void 0;var a=l(n(56690)),o=l(n(89728)),r=l(n(66115)),d=l(n(61655)),s=l(n(94993)),i=l(n(73808)),u=l(n(67294)),m=l(n(31501)),c=l(n(47166)),p=l(n(39800)),f=l(n(47787));function x(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,l=(0,i.default)(e);if(t){var a=(0,i.default)(this).constructor;n=Reflect.construct(l,arguments,a)}else n=l.apply(this,arguments);return(0,s.default)(this,n)}}var h=c.default.bind(f.default),y=function(e){(0,d.default)(n,e);var t=x(n);function n(){var e;return(0,a.default)(this,n),(e=t.call(this)).state={isOpen:!1},e.handleOpenModal=e.handleOpenModal.bind((0,r.default)(e)),e.handleCloseModal=e.handleCloseModal.bind((0,r.default)(e)),e}return(0,o.default)(n,[{key:"handleOpenModal",value:function(){this.setState({isOpen:!0})}},{key:"handleCloseModal",value:function(){this.setState({isOpen:!1})}},{key:"render",value:function(){return u.default.createElement("div",null,u.default.createElement(m.default,{ariaLabel:"Default Modal",isOpen:this.state.isOpen,onRequestClose:this.handleCloseModal,classNameModal:p.default["fixed-size"]},u.default.createElement("div",{className:h("content-wrapper")},u.default.createElement("h1",null,"Default Modal"),u.default.createElement("br",null),u.default.createElement("p",null,"You can close the modal by:"),u.default.createElement("ul",null,u.default.createElement("li",null,"- Pressing the ESC key"),u.default.createElement("li",null,"- Clicking on the overlay"),u.default.createElement("li",null,"- Clicking on the close button")),u.default.createElement("br",null),u.default.createElement("p",null,"On smaller screens, the modal will take up the full screen."),u.default.createElement("p",null),u.default.createElement("br",null),u.default.createElement("button",{type:"button",onClick:this.handleCloseModal},"Close Modal"))),u.default.createElement("button",{type:"button",onClick:this.handleOpenModal},"Open Modal"))}}]),n}(u.default.Component);t.Z=y},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},47787:function(e,t,n){n.r(t),t.default={"content-wrapper":"AbstractModalDocCommon-module__content-wrapper___phElL"}},39800:function(e,t,n){n.r(t),t.default={"fixed-size":"ExampleAbstractSize-module__fixed-size___uWh96"}},33864:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=o(n(67294)),a=o(n(99139));function o(e){return e&&e.__esModule?e:{default:e}}function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},r.apply(this,arguments)}var d=function(e){var t=r({},e);return l.default.createElement(a.default,t,l.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};d.displayName="IconChevronLeft",d.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};var s=d;t.default=s}}]);