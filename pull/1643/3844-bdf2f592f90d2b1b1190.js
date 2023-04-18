"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[3844],{3844:function(e,t,n){n.r(t),n.d(t,{default:function(){return E}});var a=n(87462),r=n(44925),o=n(67294),i=n(81254),l=n(75983),s=n(11589),d=n(19326),m=["components"],p={},c="wrapper";function u(e){var t=e.components,n=(0,r.Z)(e,m);return(0,i.mdx)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-jsx"},"/* eslint-disable max-classes-per-file */\nimport React from 'react';\nimport PropTypes from 'prop-types';\nimport classNames from 'classnames/bind';\nimport ActionHeader from 'terra-action-header';\nimport CollapsibleMenuView from 'terra-collapsible-menu-view';\nimport ContentContainer from 'terra-content-container';\nimport {\n  availableDisclosureHeights, availableDisclosureWidths, DisclosureManagerHeaderAdapter, DisclosureManagerContext,\n} from 'terra-disclosure-manager';\n\nimport ModalManager from 'terra-modal-manager';\nimport styles from './example-styles.module.scss';\n\nconst cx = classNames.bind(styles);\n\nclass DisclosureComponent extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.checkLockState = this.checkLockState.bind(this);\n\n    this.state = {\n      text: undefined,\n    };\n  }\n\n  componentDidMount() {\n    const disclosureManager = this.context;\n\n    if (disclosureManager && disclosureManager.registerDismissCheck) {\n      disclosureManager.registerDismissCheck(this.checkLockState);\n    }\n  }\n\n  checkLockState() {\n    if (this.state.text && this.state.text.length) {\n      return new Promise((resolve, reject) => {\n        // eslint-disable-next-line no-restricted-globals\n        if (!confirm(`${this.props.name} has unsaved changes that will be lost. Do you wish to continue?`)) { // eslint-disable-line no-alert\n          reject();\n          return;\n        }\n\n        resolve();\n      });\n    }\n\n    return Promise.resolve();\n  }\n\n  render() {\n    const { name, disclosureType } = this.props;\n    const disclosureManager = this.context;\n\n    return (\n      <ContentContainer fill>\n        <DisclosureManagerHeaderAdapter\n          title={name}\n          collapsibleMenuView={(\n            <CollapsibleMenuView>\n              <CollapsibleMenuView.Item\n                text=\"Button 1\"\n                key=\"button_1\"\n                onClick={() => {\n                  this.setState({\n                    selectedHeaderAction: 'Button 1',\n                  });\n                }}\n              />\n              <CollapsibleMenuView.Item\n                text=\"Button 2\"\n                key=\"button_2\"\n                onClick={() => {\n                  this.setState({\n                    selectedHeaderAction: 'Button 2',\n                  });\n                }}\n              />\n            </CollapsibleMenuView>\n          )}\n        />\n        <div className={cx('content-wrapper')}>\n          <h3>{name}</h3>\n          <p>The disclosed component can disclose content within the same modal.</p>\n          <p>It can also render a header (like above) that implements the various DisclosureManager control functions.</p>\n          <button\n            type=\"button\"\n            onClick={() => {\n              disclosureManager.dismiss()\n                .catch(() => {\n                  console.log('Dismiss failed. A lock must be in place.'); // eslint-disable-line no-console\n                });\n            }}\n          >\n            Dismiss\n          </button>\n          <button\n            type=\"button\"\n            onClick={() => {\n              disclosureManager.disclose({\n                preferredType: disclosureType,\n                size: 'small',\n                content: {\n                  key: `Nested ${name}`,\n                  component: <DisclosureComponent name={`Nested ${name}`} disclosureType={disclosureType} />,\n                },\n              });\n            }}\n          >\n            Disclose Again\n          </button>\n          <br />\n          <br />\n          <p>The disclosed component can register a dismiss check function that can interrupt and prevent dismissal. This component will prompt the user if text is detected in the input field below.</p>\n          <input\n            type=\"text\"\n            onChange={(event) => {\n              this.setState({\n                text: event.target.value,\n              });\n            }}\n            value={this.state.text || ''}\n          />\n          {this.state.text && this.state.text.length ? <p>Component has unsaved changes!</p> : null}\n          <br />\n          <br />\n          <p>\n            Selected Header Action:\n            {' '}\n            <b>{this.state.selectedHeaderAction}</b>\n          </p>\n        </div>\n      </ContentContainer>\n    );\n  }\n}\n\nDisclosureComponent.contextType = DisclosureManagerContext;\nDisclosureComponent.propTypes = {\n  name: PropTypes.string,\n  disclosureType: PropTypes.string,\n};\nDisclosureComponent.defaultProps = {\n  name: 'Disclosure Component',\n};\n\nconst HEIGHT_KEYS = Object.keys(availableDisclosureHeights);\nconst WIDTH_KEYS = Object.keys(availableDisclosureWidths);\n\nconst generateDimensionOptions = values => (\n  values.map((currentValue, index) => {\n    const keyValue = index;\n    return <option key={keyValue} value={currentValue}>{currentValue}</option>;\n  })\n);\n\nclass ContentComponent extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.renderButton = this.renderButton.bind(this);\n    this.handleSelectChange = this.handleSelectChange.bind(this);\n    this.getId = this.getId.bind(this);\n\n    this.state = { id: 'dimensions', disclosureHeight: HEIGHT_KEYS[0], disclosureWidth: WIDTH_KEYS[0] };\n  }\n\n  handleSelectChange(event) {\n    this.setState({ [event.target.name]: event.target.value });\n  }\n\n  getId(name) {\n    return name + this.state.id;\n  }\n\n  renderButton(size) {\n    const { disclosureType } = this.props;\n    const disclosureManager = this.context;\n\n    return (\n      <button\n        type=\"button\"\n        onClick={() => {\n          disclosureManager.disclose({\n            preferredType: disclosureType,\n            size,\n            content: {\n              key: `Content-Disclosure-${size}`,\n              component: <DisclosureComponent name=\"Disclosure Component\" disclosureType={disclosureType} />,\n            },\n          });\n        }}\n      >\n        {`Disclose (${size})`}\n      </button>\n    );\n  }\n\n  renderFormButton() {\n    const { disclosureType } = this.props;\n    const disclosureManager = this.context;\n\n    const name = `Disclose (${this.state.disclosureHeight}) x (${this.state.disclosureWidth})`;\n\n    return (\n      <button\n        type=\"button\"\n        onClick={() => {\n          disclosureManager.disclose({\n            preferredType: disclosureType,\n            dimensions: { height: this.state.disclosureHeight, width: this.state.disclosureWidth },\n            content: {\n              key: 'Content-Disclosure-Dimensions',\n              component: <DisclosureComponent name=\"Disclosure Component\" disclosureType={disclosureType} />,\n            },\n          });\n        }}\n      >\n        {name}\n      </button>\n    );\n  }\n\n  renderForm() {\n    return (\n      <form>\n        <label htmlFor={this.getId('disclosureHeight')}>Pop Content Height</label>\n        <select id={this.getId('disclosureHeight')} name=\"disclosureHeight\" value={this.state.disclosureHeight} onChange={this.handleSelectChange}>\n          {generateDimensionOptions(HEIGHT_KEYS)}\n        </select>\n        <br />\n        <br />\n        <label htmlFor={this.getId('disclosureWidth')}>Pop Content Width</label>\n        <select id={this.getId('disclosureWidth')} name=\"disclosureWidth\" value={this.state.disclosureWidth} onChange={this.handleSelectChange}>\n          {generateDimensionOptions(WIDTH_KEYS)}\n        </select>\n        <br />\n        <br />\n      </form>\n    );\n  }\n\n  render() {\n    return (\n      <ContentContainer\n        header={(\n          <ActionHeader\n            title=\"ModalManager Child Component\"\n          />\n        )}\n      >\n        <div className={cx('content-wrapper')}>\n          {this.renderButton('default')}\n          {this.renderButton('tiny')}\n          {this.renderButton('small')}\n          {this.renderButton('medium')}\n          {this.renderButton('large')}\n          {this.renderButton('huge')}\n          {this.renderButton('fullscreen')}\n          <br />\n          <p>The child components can disclose content in the modal at various sizes.</p>\n        </div>\n        <div className={cx('content-wrapper')}>\n          {this.renderForm()}\n          {this.renderFormButton()}\n        </div>\n      </ContentContainer>\n    );\n  }\n}\n\nContentComponent.contextType = DisclosureManagerContext;\nContentComponent.propTypes = {\n  disclosureType: PropTypes.string,\n};\n\nconst ModalManagerExample = ({ showDisclosureAccessory }) => (\n  <div className={cx('example-wrapper')}>\n    <ModalManager\n      disclosureAccessory={showDisclosureAccessory ? (\n        <div className={cx('disclosure-accessory')}>\n          Disclosure Accessory\n        </div>\n      ) : undefined}\n    >\n      <ContentComponent disclosureType=\"modal\" />\n    </ModalManager>\n  </div>\n);\n\nModalManagerExample.propTypes = {\n  showDisclosureAccessory: PropTypes.bool,\n};\n\nexport default ModalManagerExample;\n/* eslint-enable max-classes-per-file */\n\n")))}u.isMDXComponent=!0;var h=n(49271),x=["components"],g={},f="wrapper";function y(e){var t=e.components,n=(0,r.Z)(e,x);return(0,i.mdx)(f,(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-scss"},":local {\n  .example-wrapper {\n    border: 1px solid #d3d3d3;\n    height: 28rem;\n  }\n\n  .content-wrapper {\n    padding: 0.7rem;\n  }\n\n  .disclosure-accessory {\n    background-color: #add8e6;\n    padding: 1rem;\n  }\n}\n\n")))}y.isMDXComponent=!0;var N=function(e){var t=e.title,n=e.description,a=e.isExpanded;return o.createElement(h.Z,{title:t||"Modal Manager Example",description:n,example:o.createElement(d.Z,null),exampleCssSrc:o.createElement(y,null),exampleSrc:o.createElement(u,null),isExpanded:a})},b=n(78530),w=["components"],C={},v="wrapper";function M(e){var t=e.components,n=(0,r.Z)(e,w);return(0,i.mdx)(v,(0,a.Z)({},C,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)(b.ZP,{mdxType:"PropsTable"},(0,i.mdx)(b.X2,{key:"ROW1",mdxType:"Row"},(0,i.mdx)(b.O,{mdxType:"PropNameCell"},"children"),(0,i.mdx)(b.Di,{mdxType:"TypeCell"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,i.mdx)(b.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,i.mdx)(b.mW,{mdxType:"DefaultValueCell"},(0,i.mdx)("p",null,"none")),(0,i.mdx)(b.Ex,{mdxType:"DescriptionCell"},(0,i.mdx)("p",null,"The components to be rendered in the body of the ModalManager. These components will receive the\ndisclosure capabilities through the DisclosureManger's context API."))),(0,i.mdx)(b.X2,{key:"ROW2",mdxType:"Row"},(0,i.mdx)(b.O,{mdxType:"PropNameCell"},"disclosureAccessory"),(0,i.mdx)(b.Di,{mdxType:"TypeCell"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"element\n"))),(0,i.mdx)(b.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,i.mdx)(b.mW,{mdxType:"DefaultValueCell"},(0,i.mdx)("p",null,"none")),(0,i.mdx)(b.Ex,{mdxType:"DescriptionCell"},(0,i.mdx)("p",null,"The component to render within the Modal above the disclosed content.")))))}M.isMDXComponent=!0;var T=["components"],k={},D="wrapper";function E(e){var t=e.components,n=(0,r.Z)(e,T);return(0,i.mdx)(D,(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)(s.C,{mdxType:"Badge"}),(0,i.mdx)("h1",{id:"terra-modal-manager"},"Terra Modal Manager"),(0,i.mdx)("p",null,"The ModalManager is a DisclosureManager implementation that presents disclosed content using an AbstractModal."),(0,i.mdx)("p",null,"ModalManager provides the ability to handle and navigate stacked disclosures."),(0,i.mdx)(l.Notice,{variant:"important",ariaLevel:"3",mdxType:"Notice"},(0,i.mdx)("p",null," For applications that utilize Terra Application, use the ",(0,i.mdx)("a",{parentName:"p",href:"https://engineering.cerner.com/terra-ui/application/terra-application/components/modal-manager"},"ModelManager")," and ",(0,i.mdx)("a",{parentName:"p",href:"https://engineering.cerner.com/terra-ui/application/terra-application/contexts/disclosure-manager-context"},"DisclosureManagerContext")," provided by terra-application instead of using terra-modal-manager directly.")),(0,i.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Install with ",(0,i.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"npm install terra-modal-manager"))))),(0,i.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,i.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,i.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"react"),(0,i.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,i.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"terra-disclosure-manager"),(0,i.mdx)("td",{parentName:"tr",align:null},"^4.16.0")))),(0,i.mdx)("h2",{id:"usage"},"Usage"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-jsx"},"import ModalManager, { disclosureType } from 'terra-modal-manager';\n")),(0,i.mdx)("h2",{id:"details"},"Details"),(0,i.mdx)("h3",{id:"implementation-requirements"},"Implementation Requirements"),(0,i.mdx)("p",null,"The ModalManager utilizes the DisclosureManager API to manage disclosure requests. The components provided as children to the ModalManager, and the components disclosed within it, must interface with the ModalManager's context using the ",(0,i.mdx)("inlineCode",{parentName:"p"},"withDisclosureManager()")," higher-order component generator provided by the ",(0,i.mdx)("inlineCode",{parentName:"p"},"terra-disclosure-manager")," package. Alternatively, ",(0,i.mdx)("inlineCode",{parentName:"p"},"DisclosureManagerContext")," can be consumed directly using the ",(0,i.mdx)("inlineCode",{parentName:"p"},"useContext")," hook."),(0,i.mdx)("p",null,"The ModalManager responds to ",(0,i.mdx)("inlineCode",{parentName:"p"},'"modal"')," disclosure type requests. Components that wish to disclose content using the ModalManager should provide a preferred type of ",(0,i.mdx)("inlineCode",{parentName:"p"},'"modal"'),". This value is exported from the package as ",(0,i.mdx)("inlineCode",{parentName:"p"},"disclosureType"),". Please see the ",(0,i.mdx)("a",{parentName:"p",href:"https://engineering.cerner.com/terra-ui/components/cerner-terra-framework-docs/discosure-manager/disclosure-manager/disclosure-manager-api"},"DisclosureManager API documentation")," for a full description of the ModalManager's capabilities."),(0,i.mdx)("h3",{id:"disclosuremanagerheaderadapter-support"},"DisclosureManagerHeaderAdapter Support"),(0,i.mdx)("p",null,"If a component disclosed by the ModalManager renders a ",(0,i.mdx)("inlineCode",{parentName:"p"},"DisclosureManagerHeaderAdapter"),", the ModalManager will render an ActionHeader and provide the standard disclosure navigation controls (close, go back, etc.) within it. The disclosed component can use the ",(0,i.mdx)("inlineCode",{parentName:"p"},"DisclosureManagerHeaderAdapter")," to inject its own title and CollapsibleButtonView into the ActionHeader."),(0,i.mdx)("p",null,"If the disclosed component does ",(0,i.mdx)("strong",{parentName:"p"},"not")," render a ",(0,i.mdx)("inlineCode",{parentName:"p"},"DisclosureManagerHeaderAdapter"),", the ModalManager will ",(0,i.mdx)("strong",{parentName:"p"},"not")," render an ActionHeader itself. In this case, it is assumed that the disclosed component is rendering its own header. The disclosed component is responsible for rendering the appropriate controls to navigate the disclosure stack.\ns"),(0,i.mdx)("blockquote",null,(0,i.mdx)("p",{parentName:"blockquote"},"Note: The DisclosureManagerHeaderAdapter is the preferred way to present a header within the ModalManager. In a future major release, the ModalManager will ",(0,i.mdx)("strong",{parentName:"p"},"always")," render the header and navigation controls, regardless of the presence of a DisclosureManagerHeaderAdapter.")),(0,i.mdx)("h3",{id:"disclosure-accessory"},"Disclosure Accessory"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"disclosureAccessory")," prop allows consumers of the ModalManager to render a static component above the disclosed modal content. The provided component will be rendered below the standard ActionHeader and above the disclosed content. This can be used to easily provide additional context to every disclosed component. This component is provided once to the ModalManager instance, not on a per-disclosure basis, and each component in the disclosure stack will be decorated with the same accessory component."),(0,i.mdx)("h3",{id:"static-height-vs-dynamic-height"},"Static Height vs. Dynamic Height"),(0,i.mdx)("p",null,"Terra-Model-Manager was intentionally designed to have static preset heights in order to work in conjunction with Terra content that can adjust responsively using the ",(0,i.mdx)("a",{parentName:"p",href:"https://engineering.cerner.com/terra-ui/components/cerner-terra-core-docs/responsive-element/about"},"terra-responsive-element"),", as well as any conditionally positioned UI elements like a ",(0,i.mdx)("a",{parentName:"p",href:"https://engineering.cerner.com/terra-ui/components/cerner-terra-framework-docs/popup/popup"},"popup"),", ",(0,i.mdx)("a",{parentName:"p",href:"https://engineering.cerner.com/terra-ui/components/cerner-terra-core-docs/form-select/multi-select"},"multi-select dropdown"),", or ",(0,i.mdx)("a",{parentName:"p",href:"https://engineering.cerner.com/terra-ui/components/cerner-terra-framework-docs/date-picker/date-picker"},"date picker"),". Having static preset heights allows for Terra to quickly present modal content without requiring extensive browser multiple-render drawing calculations that results in poor application performance."),(0,i.mdx)("p",null,"Some may be used to other libraries that commonly offer simple modals that can adjust the modal's height dynamically based on the content provided, but those situations only work well for when content is designed for a single presentation (i.e. is not responsive), and ones that have no higher z-index layers that require position calculation relative to the base content (i.e. no popups with pointers)."),(0,i.mdx)("h3",{id:"creating-modal-content"},"Creating Modal Content"),(0,i.mdx)("p",null,"The Modal-Manager is intended for content which has regularly composed & designed layouts, including responsive variations. It is very grid-based, so it comes with standard heights and widths to accommodate the highly-structured assembly of content."),(0,i.mdx)("p",null,"When the preset size of the modal's width or height is ",(0,i.mdx)("em",{parentName:"p"},"larger"),' than the available device-screen or viewport (e.g. if you shrink down your window smaller than what the modal size was set to be), at that point the modal-manager will then "stick" near to the edge of the viewport as it\'s outer size and not flow offscreen. It is recommended to build the inner content with a responsive design, so when the modal is smaller than it’s preset size, the content will then know to adapt and adjust to alternate layouts accordingly to the new maximum available height and/or width as the outer size. If content is not built responsively, or if you intentionally build the content to overflow in one direction, it will then force scrolling inside of the modal. Scrolling is perfectly acceptable, but should be limited to one direction, preferably vertical-only.'),(0,i.mdx)("p",null,'The key thing to remember is that the Modal-Manager, similar to a page layout, works based on the "',(0,i.mdx)("strong",{parentName:"p"},"outside-in"),'" layout principal, which allows the ',(0,i.mdx)("em",{parentName:"p"},"inside")," content to respond when the ",(0,i.mdx)("em",{parentName:"p"},"outside"),' container changes in size.  The Modal-Manager unfortunately cannot simultaneously also follow the "',(0,i.mdx)("strong",{parentName:"p"},"inside-out"),'" layout principal, which would mean the ',(0,i.mdx)("em",{parentName:"p"},"outside")," container height grows or shrinks based on the ",(0,i.mdx)("em",{parentName:"p"},"inside")," content size.  The reason is that the inside content cannot dictate what size it would like to be at the same as as listening for when it no longer has any space remaining, which is required in order to be able to change itself to a new layout, and cannot do both (or at least not without attempting many redraws). Designers are encouraged to create structured and grid based layout designs that work well for the modal layout size options that best utilize space, similar to designing base pages within applications."),(0,i.mdx)("h3",{id:"sizing-height--width-options"},"Sizing: Height & Width Options"),(0,i.mdx)("p",null,"The Terra-Modal-Manager has two methods of setting the preferred modal height & width. The first method is by choosing from a list of easy shorthand size options that combine a predefined height and width pair, which works standard application screen ratios. The second method is more advanced and provides the ability to choose from a list of grid-based dimensions to set the height and width independently. ",(0,i.mdx)("em",{parentName:"p"},"(Note: all values used for Modal-Manager are true pixels and not rem, relative em units.)")),(0,i.mdx)("p",null,"Using the ",(0,i.mdx)("inlineCode",{parentName:"p"},"size")," prop within the ",(0,i.mdx)("a",{parentName:"p",href:"/terra-framework/pull/1643/components/cerner-terra-framework-docs/discosure-manager/disclosure-manager/disclosure-manager-api"},"disclose argument API")," allows the consumer to provide a simpler implementation to set the modal preferred dimension, and typically might be used for common application disclosures of similarly sized content. ",(0,i.mdx)("em",{parentName:"p"},"(Note: ",(0,i.mdx)("inlineCode",{parentName:"em"},"size")," should not be provided if ",(0,i.mdx)("inlineCode",{parentName:"em"},"dimensions")," are specified.)")),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"th"},"size")," prop: Shorthand options"),(0,i.mdx)("th",{parentName:"tr",align:null},"pixel dimensions"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"tiny")),(0,i.mdx)("td",{parentName:"tr",align:null},"w: 320px, h: 240px")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"small")),(0,i.mdx)("td",{parentName:"tr",align:null},"w: 640px, h: 420px")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"medium")),(0,i.mdx)("td",{parentName:"tr",align:null},"w: 960px, h: 600px")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("strong",{parentName:"td"},"default")),(0,i.mdx)("td",{parentName:"tr",align:null},"w: 1120px, h: 690px ",(0,i.mdx)("em",{parentName:"td"},"(modal size if no other details are provided)"))),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"large")),(0,i.mdx)("td",{parentName:"tr",align:null},"w: 1280px, h: 870px")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"huge")),(0,i.mdx)("td",{parentName:"tr",align:null},"w: 1600px, h: 960px")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"fullscreen")),(0,i.mdx)("td",{parentName:"tr",align:null},"w: screen width less ~10px, h: screen height less ~10px")))),(0,i.mdx)("p",null,"For application content that needs more specific dimensional control of modal sizes, using the ",(0,i.mdx)("inlineCode",{parentName:"p"},"dimension")," prop within the ",(0,i.mdx)("a",{parentName:"p",href:"/terra-framework/pull/1643/components/cerner-terra-framework-docs/discosure-manager/disclosure-manager/disclosure-manager-api"},"disclose argument API")," will be the implementation to choose. Consumers supply a simple object that contains both height wand width values: ",(0,i.mdx)("inlineCode",{parentName:"p"},"{ height: '480', width: '600' }"),". ",(0,i.mdx)("em",{parentName:"p"},"(Note: ",(0,i.mdx)("inlineCode",{parentName:"em"},"dimensions")," should not be provided if a ",(0,i.mdx)("inlineCode",{parentName:"em"},"size")," is specified.)")),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"th"},"dimensions")," prop: Width options"),(0,i.mdx)("th",{parentName:"tr",align:null},"pixel dimensions"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"width: '320'")),(0,i.mdx)("td",{parentName:"tr",align:null},"w: 320px, h: --")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"width: '480'")),(0,i.mdx)("td",{parentName:"tr",align:null},"w: 480px, h: --")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"width: '560'")),(0,i.mdx)("td",{parentName:"tr",align:null},"w: 560px, h: --")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"width: '640'")),(0,i.mdx)("td",{parentName:"tr",align:null},"w: 640px, h: --")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"width: '800'")),(0,i.mdx)("td",{parentName:"tr",align:null},"w: 800px, h: --")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"width: '960'")),(0,i.mdx)("td",{parentName:"tr",align:null},"w: 960px, h: --")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"width: '1120'")),(0,i.mdx)("td",{parentName:"tr",align:null},"w: 1120px, h: --")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"width: '1280'")),(0,i.mdx)("td",{parentName:"tr",align:null},"w: 1280px, h: --")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"width: '1440'")),(0,i.mdx)("td",{parentName:"tr",align:null},"w: 1440px, h: --")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"width: '1600'")),(0,i.mdx)("td",{parentName:"tr",align:null},"w: 1600px, h: --")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"width: '1760'")),(0,i.mdx)("td",{parentName:"tr",align:null},"w: 1760px, h: --")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"width: '1920'")),(0,i.mdx)("td",{parentName:"tr",align:null},"w: 1920px, h: --")))),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"th"},"dimensions")," prop: Height options"),(0,i.mdx)("th",{parentName:"tr",align:null},"pixel dimensions"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"height: '240'")),(0,i.mdx)("td",{parentName:"tr",align:null},"w: --, h: 240px")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"height: '420'")),(0,i.mdx)("td",{parentName:"tr",align:null},"w: --, h: 420px")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"height: '600'")),(0,i.mdx)("td",{parentName:"tr",align:null},"w: --, h: 600px")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"height: '690'")),(0,i.mdx)("td",{parentName:"tr",align:null},"w: --, h: 690px")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"height: '780'")),(0,i.mdx)("td",{parentName:"tr",align:null},"w: --, h: 780px")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"height: '870'")),(0,i.mdx)("td",{parentName:"tr",align:null},"w: --, h: 870px")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"height: '960'")),(0,i.mdx)("td",{parentName:"tr",align:null},"w: --, h: 960px")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"height: '1140'")),(0,i.mdx)("td",{parentName:"tr",align:null},"w: --, h: 1140px")))),(0,i.mdx)("h2",{id:"component-features"},"Component Features"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support"))),(0,i.mdx)("h2",{id:"examples"},"Examples"),(0,i.mdx)(N,{title:"Example",mdxType:"ModalManagerExample"}),(0,i.mdx)(N,{showDisclosureAccessory:!0,title:"Disclosure Accessory Example",mdxType:"ModalManagerExample"}),(0,i.mdx)("h2",{id:"modal-manager-props"},"Modal Manager Props"),(0,i.mdx)(M,{mdxType:"ModalManagerPropsTable"}))}E.isMDXComponent=!0},11589:function(e,t,n){n.d(t,{C:function(){return o}});var a=n(67294),r=n(22863),o=function(e){var t=e.url;return a.createElement(r.Z,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-modal-manager",name:"terra-modal-manager",version:"6.60.0",url:t})}},19326:function(e,t,n){var a=n(64836);t.Z=void 0;var r=a(n(38416)),o=a(n(56690)),i=a(n(89728)),l=a(n(66115)),s=a(n(61655)),d=a(n(94993)),m=a(n(73808)),p=a(n(67294)),c=a(n(45697)),u=a(n(47166)),h=a(n(17092)),x=a(n(81061)),g=a(n(10027)),f=n(56019),y=a(n(22266)),N=a(n(72702));function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,m.default)(e);if(t){var r=(0,m.default)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return(0,d.default)(this,n)}}var w=u.default.bind(N.default),C=function(e){(0,s.default)(n,e);var t=b(n);function n(e){var a;return(0,o.default)(this,n),(a=t.call(this,e)).checkLockState=a.checkLockState.bind((0,l.default)(a)),a.state={text:void 0},a}return(0,i.default)(n,[{key:"componentDidMount",value:function(){var e=this.context;e&&e.registerDismissCheck&&e.registerDismissCheck(this.checkLockState)}},{key:"checkLockState",value:function(){var e=this;return this.state.text&&this.state.text.length?new Promise((function(t,n){confirm("".concat(e.props.name," has unsaved changes that will be lost. Do you wish to continue?"))?t():n()})):Promise.resolve()}},{key:"render",value:function(){var e=this,t=this.props,a=t.name,r=t.disclosureType,o=this.context;return p.default.createElement(g.default,{fill:!0},p.default.createElement(f.DisclosureManagerHeaderAdapter,{title:a,collapsibleMenuView:p.default.createElement(x.default,null,p.default.createElement(x.default.Item,{text:"Button 1",key:"button_1",onClick:function(){e.setState({selectedHeaderAction:"Button 1"})}}),p.default.createElement(x.default.Item,{text:"Button 2",key:"button_2",onClick:function(){e.setState({selectedHeaderAction:"Button 2"})}}))}),p.default.createElement("div",{className:w("content-wrapper")},p.default.createElement("h3",null,a),p.default.createElement("p",null,"The disclosed component can disclose content within the same modal."),p.default.createElement("p",null,"It can also render a header (like above) that implements the various DisclosureManager control functions."),p.default.createElement("button",{type:"button",onClick:function(){o.dismiss().catch((function(){console.log("Dismiss failed. A lock must be in place.")}))}},"Dismiss"),p.default.createElement("button",{type:"button",onClick:function(){o.disclose({preferredType:r,size:"small",content:{key:"Nested ".concat(a),component:p.default.createElement(n,{name:"Nested ".concat(a),disclosureType:r})}})}},"Disclose Again"),p.default.createElement("br",null),p.default.createElement("br",null),p.default.createElement("p",null,"The disclosed component can register a dismiss check function that can interrupt and prevent dismissal. This component will prompt the user if text is detected in the input field below."),p.default.createElement("input",{type:"text",onChange:function(t){e.setState({text:t.target.value})},value:this.state.text||""}),this.state.text&&this.state.text.length?p.default.createElement("p",null,"Component has unsaved changes!"):null,p.default.createElement("br",null),p.default.createElement("br",null),p.default.createElement("p",null,"Selected Header Action:"," ",p.default.createElement("b",null,this.state.selectedHeaderAction))))}}]),n}(p.default.Component);C.contextType=f.DisclosureManagerContext,C.propTypes={name:c.default.string,disclosureType:c.default.string},C.defaultProps={name:"Disclosure Component"};var v=Object.keys(f.availableDisclosureHeights),M=Object.keys(f.availableDisclosureWidths),T=function(e){return e.map((function(e,t){var n=t;return p.default.createElement("option",{key:n,value:e},e)}))},k=function(e){(0,s.default)(n,e);var t=b(n);function n(e){var a;return(0,o.default)(this,n),(a=t.call(this,e)).renderButton=a.renderButton.bind((0,l.default)(a)),a.handleSelectChange=a.handleSelectChange.bind((0,l.default)(a)),a.getId=a.getId.bind((0,l.default)(a)),a.state={id:"dimensions",disclosureHeight:v[0],disclosureWidth:M[0]},a}return(0,i.default)(n,[{key:"handleSelectChange",value:function(e){this.setState((0,r.default)({},e.target.name,e.target.value))}},{key:"getId",value:function(e){return e+this.state.id}},{key:"renderButton",value:function(e){var t=this.props.disclosureType,n=this.context;return p.default.createElement("button",{type:"button",onClick:function(){n.disclose({preferredType:t,size:e,content:{key:"Content-Disclosure-".concat(e),component:p.default.createElement(C,{name:"Disclosure Component",disclosureType:t})}})}},"Disclose (".concat(e,")"))}},{key:"renderFormButton",value:function(){var e=this,t=this.props.disclosureType,n=this.context,a="Disclose (".concat(this.state.disclosureHeight,") x (").concat(this.state.disclosureWidth,")");return p.default.createElement("button",{type:"button",onClick:function(){n.disclose({preferredType:t,dimensions:{height:e.state.disclosureHeight,width:e.state.disclosureWidth},content:{key:"Content-Disclosure-Dimensions",component:p.default.createElement(C,{name:"Disclosure Component",disclosureType:t})}})}},a)}},{key:"renderForm",value:function(){return p.default.createElement("form",null,p.default.createElement("label",{htmlFor:this.getId("disclosureHeight")},"Pop Content Height"),p.default.createElement("select",{id:this.getId("disclosureHeight"),name:"disclosureHeight",value:this.state.disclosureHeight,onChange:this.handleSelectChange},T(v)),p.default.createElement("br",null),p.default.createElement("br",null),p.default.createElement("label",{htmlFor:this.getId("disclosureWidth")},"Pop Content Width"),p.default.createElement("select",{id:this.getId("disclosureWidth"),name:"disclosureWidth",value:this.state.disclosureWidth,onChange:this.handleSelectChange},T(M)),p.default.createElement("br",null),p.default.createElement("br",null))}},{key:"render",value:function(){return p.default.createElement(g.default,{header:p.default.createElement(h.default,{title:"ModalManager Child Component"})},p.default.createElement("div",{className:w("content-wrapper")},this.renderButton("default"),this.renderButton("tiny"),this.renderButton("small"),this.renderButton("medium"),this.renderButton("large"),this.renderButton("huge"),this.renderButton("fullscreen"),p.default.createElement("br",null),p.default.createElement("p",null,"The child components can disclose content in the modal at various sizes.")),p.default.createElement("div",{className:w("content-wrapper")},this.renderForm(),this.renderFormButton()))}}]),n}(p.default.Component);k.contextType=f.DisclosureManagerContext,k.propTypes={disclosureType:c.default.string};var D=function(e){var t=e.showDisclosureAccessory;return p.default.createElement("div",{className:w("example-wrapper")},p.default.createElement(y.default,{disclosureAccessory:t?p.default.createElement("div",{className:w("disclosure-accessory")},"Disclosure Accessory"):void 0},p.default.createElement(k,{disclosureType:"modal"})))};D.propTypes={showDisclosureAccessory:c.default.bool};var E=D;t.Z=E},72702:function(e,t,n){n.r(t),t.default={"example-wrapper":"example-styles-module__example-wrapper___Jx-Pe","content-wrapper":"example-styles-module__content-wrapper___MTFJi","disclosure-accessory":"example-styles-module__disclosure-accessory___dEW4w"}}}]);