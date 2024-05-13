"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[34977],{10518:function(e,t,n){n.r(t),n.d(t,{default:function(){return C}});var l=n(58168),a=n(53986),o=n(96540),i=n(36665),r=n(74647),c=n(98861),u=["components"],s={};function d(e){var t=e.components,n=(0,a.A)(e,u);return(0,i.mdx)("wrapper",(0,l.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React, { useState, useCallback, useRef } from \'react\';\nimport CompactInteractiveList, { alignTypes } from \'terra-compact-interactive-list\';\nimport {\n  IconFeaturedOff, IconFeatured, IconMultipleResultsNormal, IconMultipleResultsNotNormal, IconMultipleResultsCritical,\n} from \'terra-icon\';\nimport Button from \'terra-button\';\nimport Hyperlink from \'terra-hyperlink\';\nimport Checkbox, { CheckboxField } from \'terra-form-checkbox\';\nimport Popup from \'terra-popup\';\nimport BasicMenu from \'../../menu/example/BasicMenu\';\n\n// eslint-disable-next-line no-alert\nconst buttonCell = <Button text="Learn more" onClick={() => alert(\'Learn more button was clicked\')} />;\nconst anchorCell = <Hyperlink href="https://www.cerner.com" text="Documents" />;\nconst iconResultsNormal = <IconMultipleResultsNormal a11yLabel="Results normal" height="1.5em" width="1.5em" />;\nconst iconResultsNotNormal = <IconMultipleResultsNotNormal a11yLabel="Results not normal" height="1.5em" width="1.5em" />;\nconst iconResultsCritical = <IconMultipleResultsCritical a11yLabel="Results critical" height="1.5em" width="1.5em" />;\n\nconst updateRows = (rowsToUpdate, columns, selectionDetails) => {\n  const columnIndex = columns.findIndex(column => selectionDetails?.columnId === column.id);\n  return [...rowsToUpdate.map(row => {\n    const newRow = {\n      ...row,\n      cells: [...row.cells.map((cell, index) => {\n        const isSelectedCell = selectionDetails?.rowId === row.id && index === columnIndex;\n        // eslint-disable-next-line no-nested-ternary\n        const isSelected = isSelectedCell ? !cell.isSelected : false;\n        return { ...cell, isSelected };\n      })],\n    };\n    return newRow;\n  })];\n};\n\nconst FeaturedIcon = () => {\n  const [isFeatured, setIsFeatured] = useState(false);\n  const onButtonClick = () => setIsFeatured(!isFeatured);\n  return (\n    isFeatured\n      ? <Button variant="utility" text="Unfavorite item" icon={<IconFeatured />} onClick={onButtonClick} />\n      : <Button variant="utility" text="Favorite item" icon={<IconFeaturedOff />} onClick={onButtonClick} />\n  );\n};\n\nconst PopupWithInteractiveContent = () => {\n  const [isOpen, setIsOpen] = useState(false);\n  const [selected, setSelected] = useState(null);\n  const buttonRef = useRef(null);\n\n  const setButtonNode = useCallback((node) => { buttonRef.current = node; }, []);\n  const getButtonNode = useCallback(() => buttonRef.current, []);\n  const handleButtonClick = useCallback(() => { setIsOpen(true); }, []);\n  const handleRequestClose = useCallback(() => { setIsOpen(false); }, []);\n  const closeAndSetFocus = useCallback(() => {\n    handleRequestClose();\n    buttonRef.current.focus();\n  }, [handleRequestClose]);\n\n  const handleOnChange = useCallback((e) => {\n    const selectedAnswers = [...selected];\n    if (e.currentTarget.checked) {\n      selectedAnswers.push(e.currentTarget.value);\n    } else {\n      selectedAnswers.splice(selectedAnswers.indexOf(e.currentTarget.value), 1);\n    }\n    setSelected(selectedAnswers);\n  }, [selected]);\n\n  return (\n    <>\n      <Button text="Clinical Suite" onClick={handleButtonClick} refCallback={setButtonNode} />\n      <Popup\n        isOpen={isOpen}\n        targetRef={getButtonNode}\n        onRequestClose={handleRequestClose}\n        contentHeight="auto"\n      >\n        {/* eslint-disable-next-line react/forbid-dom-props */}\n        <div style={{ padding: \'1em\' }}>\n          <CheckboxField legend="Do you want to use any of our clinical applications?">\n            <Checkbox id="drug-database" name="applications[]" labelText="Drug Database" onChange={handleOnChange} value="drug-database" />\n            <Checkbox id="vitals-collection" name="applications[]" labelText="Vitals Collection" onChange={handleOnChange} value="vitals-collection" />\n            <Checkbox id="immunization-manager" name="applications[]" labelText="Immunization Manager" onChange={handleOnChange} value="immunization-manager" />\n          </CheckboxField>\n          <Button text="Submit Request" onClick={closeAndSetFocus} />\n        </div>\n      </Popup>\n    </>\n  );\n};\n\nconst rows = [\n  {\n    id: \'row_1\',\n    cells: [\n      { content: iconResultsNormal },\n      { content: \'Discern Care Set (1)\' },\n      { content: <BasicMenu /> },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n  {\n    id: \'row_2\',\n    cells: [\n      { content: iconResultsNormal },\n      { content: \'Initial Observation Care/Day High Severity 99220 (2)\' },\n      { content: buttonCell },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n  {\n    id: \'row_3\',\n    cells: [\n      { content: iconResultsNotNormal },\n      { content: \'Arterial Sheath Care (3)\' },\n      { content: anchorCell },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n  {\n    id: \'row_4\',\n    cells: [\n      { content: \' \' },\n      { content: \'Sbsq Observation Care/Day High Severity 99226 (4)\' },\n      { content: <PopupWithInteractiveContent /> },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n  {\n    id: \'row_5\',\n    cells: [\n      { content: iconResultsCritical },\n      { content: \'Arterial Sheath Care (5)\' },\n      { content: anchorCell },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n];\n\nconst cols = [\n  {\n    id: \'Column-0\',\n    displayName: \'Status\',\n    width: \'50px\',\n    align: alignTypes.CENTER,\n    isSelectable: true,\n  },\n  {\n    id: \'Column-1\',\n    displayName: \'Service name\',\n    width: \'250px\', // will be used as a css flexBasis\n    flexGrow: true, // makes the column grow or shrink\n    maximumWidth: \'350px\',\n    minimumWidth: \'100px\',\n    isSelectable: true,\n  },\n  {\n    id: \'Column-2\',\n    displayName: \'Details\',\n    width: \'225px\',\n    align: alignTypes.RIGHT,\n    isSelectable: true,\n  },\n  {\n    id: \'Column-3\',\n    displayName: \'Featured\',\n    width: \'50px\',\n    align: alignTypes.CENTER,\n    isSelectable: true,\n  },\n];\n\nconst CellContent = () => {\n  const [displayedRows, setDisplayedRows] = useState(rows);\n\n  const onCellSelect = useCallback(({ rowId, columnId }) => {\n    setDisplayedRows(updateRows(displayedRows, cols, { rowId, columnId }));\n  }, [displayedRows]);\n\n  const onClearSelection = useCallback(() => {\n    setDisplayedRows(updateRows(displayedRows, cols));\n  }, [displayedRows]);\n\n  return (\n    <CompactInteractiveList\n      id="compact-interactive-list-cell-content"\n      ariaLabel="Compact Interactive List"\n      rows={displayedRows}\n      columns={cols}\n      numberOfColumns={2}\n      columnMinimumWidth="234px"\n      onCellSelect={onCellSelect} // a callback function for cell selection\n      onClearSelection={onClearSelection}\n      rowHeaderIndex={1}\n      rowHeight="50px"\n    />\n  );\n};\n\nexport default CellContent;\n\n')))}d.isMDXComponent=!0;var m=n(201),p=function(e){var t=e.title,n=e.description,l=e.isExpanded;return o.createElement(m.A,{title:t||"Cell Content",description:n,example:o.createElement(c.A,null),exampleSrc:o.createElement(d,null),isExpanded:l})},f=["components"],h={},g="wrapper";function C(e){var t=e.components,n=(0,a.A)(e,f);return(0,i.mdx)(g,(0,l.A)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"cell-content-and-cell-selection"},"Cell Content and Cell Selection"),(0,i.mdx)("h3",{id:"cell-content"},"Cell Content"),(0,i.mdx)(r.Notice,{variant:"important",ariaLevel:"3",mdxType:"Notice"},(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Only one interactive element per cell is allowed. Because the Compact Intercative List component is one tab stop and the arrow keys are used to move between cells, these keys are not available to move to multiple interactive elements in a cell. "),(0,i.mdx)("li",{parentName:"ul"},"Interactive elements are limited to ",(0,i.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/components/cerner-terra-core-docs/button/about"},"terra-button"),", ",(0,i.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/components/cerner-terra-core-docs/hyperlink/about"},"terra-hyperlink"),", ",(0,i.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/components/cerner-terra-framework-docs/menu/menu"},"terra-menu"),", and ",(0,i.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/components/cerner-terra-framework-docs/popup/popup"},"terra-popup"),".\nCurrently, the cell does not restrict interaction when active, and all interactive elements keep their native arrow key interactions.\nIf you place a text input, a text area, or select elements in a cell, you are unable to move away from the cell with the arrow keys. "))),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"The ",(0,i.mdx)("a",{parentName:"li",href:"/terra-framework/pull/2160/components/cerner-terra-framework-docs/compact-interactive-list/about"},"content")," of a cell in the ",(0,i.mdx)("a",{parentName:"li",href:"/terra-framework/pull/2160/components/cerner-terra-framework-docs/compact-interactive-list/about"},"Compact Interactive List")," component may be empty, text, numerical, or any combination of widgets, but only one interactive element per cell is allowed."),(0,i.mdx)("li",{parentName:"ul"},"If a cell contains an interactive element, the interactive element becomes active when you select the cell. "),(0,i.mdx)("li",{parentName:"ul"},"If you press an arrow key when a cell is active, the next or previous cell becomes active.")),(0,i.mdx)("h3",{id:"cell-selection"},"Cell Selection"),(0,i.mdx)("p",null,"The example below demonstrates a ",(0,i.mdx)("a",{parentName:"p",href:"/terra-framework/pull/2160/components/cerner-terra-framework-docs/compact-interactive-list/about"},"Compact Interactive List")," component that supports cell selection. "),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"You can click a cell or press the ",(0,i.mdx)("strong",{parentName:"li"},"SPACERBAR")," on the active cell to select it. "),(0,i.mdx)("li",{parentName:"ul"},"A cell is selectable unless it contains an interactive element, in which case the interactive element default controls apply, or ",(0,i.mdx)("strong",{parentName:"li"},(0,i.mdx)("a",{parentName:"strong",href:"/terra-framework/pull/2160/components/cerner-terra-framework-docs/compact-interactive-list/about"},"isSelectable")," prop")," is set to ",(0,i.mdx)("inlineCode",{parentName:"li"},"false")," for the corresponding column.")),(0,i.mdx)("h4",{id:"required-properties"},"Required Properties"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},(0,i.mdx)("a",{parentName:"strong",href:"/terra-framework/pull/2160/components/cerner-terra-framework-docs/compact-interactive-list/about"},"onCellSelect")," callback property:")," When the user selects a cell, this callback requests the object with the rowId and columnId properties of the selected cell. "),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},(0,i.mdx)("a",{parentName:"strong",href:"/terra-framework/pull/2160/components/cerner-terra-framework-docs/compact-interactive-list/about"},"onClearSelectedCells")," callback property:")," When the user presses the ",(0,i.mdx)("strong",{parentName:"li"},"ESC")," key, this callback is requested.")),(0,i.mdx)(p,{mdxType:"CellContent"}))}C.isMDXComponent=!0},98861:function(e,t,n){var l=n(24994),a=n(73738);t.A=void 0;var o=l(n(85715)),i=l(n(43693)),r=l(n(41132)),c=C(n(96540)),u=C(n(79943)),s=n(33049),d=l(n(23986)),m=l(n(19992)),p=C(n(42112)),f=l(n(31056)),h=l(n(31070));function g(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(g=function(e){return e?n:t})(e)}function C(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=g(t);if(n&&n.has(e))return n.get(e);var l={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&{}.hasOwnProperty.call(e,i)){var r=o?Object.getOwnPropertyDescriptor(e,i):null;r&&(r.get||r.set)?Object.defineProperty(l,i,r):l[i]=e[i]}return l.default=e,n&&n.set(e,l),l}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){(0,i.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y=c.default.createElement(d.default,{text:"Learn more",onClick:function(){return alert("Learn more button was clicked")}}),x=c.default.createElement(m.default,{href:"https://www.cerner.com",text:"Documents"}),w=c.default.createElement(s.IconMultipleResultsNormal,{a11yLabel:"Results normal",height:"1.5em",width:"1.5em"}),v=c.default.createElement(s.IconMultipleResultsNotNormal,{a11yLabel:"Results not normal",height:"1.5em",width:"1.5em"}),S=c.default.createElement(s.IconMultipleResultsCritical,{a11yLabel:"Results critical",height:"1.5em",width:"1.5em"}),I=function(e,t,n){var l=t.findIndex((function(e){return(null==n?void 0:n.columnId)===e.id}));return(0,r.default)(e.map((function(e){return k(k({},e),{},{cells:(0,r.default)(e.cells.map((function(t,a){var o=!!((null==n?void 0:n.rowId)===e.id&&a===l)&&!t.isSelected;return k(k({},t),{},{isSelected:o})})))})})))},O=function(){var e=(0,c.useState)(!1),t=(0,o.default)(e,2),n=t[0],l=t[1],a=function(){return l(!n)};return n?c.default.createElement(d.default,{variant:"utility",text:"Unfavorite item",icon:c.default.createElement(s.IconFeatured,null),onClick:a}):c.default.createElement(d.default,{variant:"utility",text:"Favorite item",icon:c.default.createElement(s.IconFeaturedOff,null),onClick:a})},R=function(){var e=(0,c.useState)(!1),t=(0,o.default)(e,2),n=t[0],l=t[1],a=(0,c.useState)(null),i=(0,o.default)(a,2),u=i[0],s=i[1],m=(0,c.useRef)(null),h=(0,c.useCallback)((function(e){m.current=e}),[]),g=(0,c.useCallback)((function(){return m.current}),[]),C=(0,c.useCallback)((function(){l(!0)}),[]),b=(0,c.useCallback)((function(){l(!1)}),[]),k=(0,c.useCallback)((function(){b(),m.current.focus()}),[b]),y=(0,c.useCallback)((function(e){var t=(0,r.default)(u);e.currentTarget.checked?t.push(e.currentTarget.value):t.splice(t.indexOf(e.currentTarget.value),1),s(t)}),[u]);return c.default.createElement(c.default.Fragment,null,c.default.createElement(d.default,{text:"Clinical Suite",onClick:C,refCallback:h}),c.default.createElement(f.default,{isOpen:n,targetRef:g,onRequestClose:b,contentHeight:"auto"},c.default.createElement("div",{style:{padding:"1em"}},c.default.createElement(p.CheckboxField,{legend:"Do you want to use any of our clinical applications?"},c.default.createElement(p.default,{id:"drug-database",name:"applications[]",labelText:"Drug Database",onChange:y,value:"drug-database"}),c.default.createElement(p.default,{id:"vitals-collection",name:"applications[]",labelText:"Vitals Collection",onChange:y,value:"vitals-collection"}),c.default.createElement(p.default,{id:"immunization-manager",name:"applications[]",labelText:"Immunization Manager",onChange:y,value:"immunization-manager"})),c.default.createElement(d.default,{text:"Submit Request",onClick:k}))))},N=[{id:"row_1",cells:[{content:w},{content:"Discern Care Set (1)"},{content:c.default.createElement(h.default,null)},{content:c.default.createElement(O,null)}]},{id:"row_2",cells:[{content:w},{content:"Initial Observation Care/Day High Severity 99220 (2)"},{content:y},{content:c.default.createElement(O,null)}]},{id:"row_3",cells:[{content:v},{content:"Arterial Sheath Care (3)"},{content:x},{content:c.default.createElement(O,null)}]},{id:"row_4",cells:[{content:" "},{content:"Sbsq Observation Care/Day High Severity 99226 (4)"},{content:c.default.createElement(R,null)},{content:c.default.createElement(O,null)}]},{id:"row_5",cells:[{content:S},{content:"Arterial Sheath Care (5)"},{content:x},{content:c.default.createElement(O,null)}]}],E=[{id:"Column-0",displayName:"Status",width:"50px",align:u.alignTypes.CENTER,isSelectable:!0},{id:"Column-1",displayName:"Service name",width:"250px",flexGrow:!0,maximumWidth:"350px",minimumWidth:"100px",isSelectable:!0},{id:"Column-2",displayName:"Details",width:"225px",align:u.alignTypes.RIGHT,isSelectable:!0},{id:"Column-3",displayName:"Featured",width:"50px",align:u.alignTypes.CENTER,isSelectable:!0}];t.A=function(){var e=(0,c.useState)(N),t=(0,o.default)(e,2),n=t[0],l=t[1],a=(0,c.useCallback)((function(e){var t=e.rowId,a=e.columnId;l(I(n,E,{rowId:t,columnId:a}))}),[n]),i=(0,c.useCallback)((function(){l(I(n,E))}),[n]);return c.default.createElement(u.default,{id:"compact-interactive-list-cell-content",ariaLabel:"Compact Interactive List",rows:n,columns:E,numberOfColumns:2,columnMinimumWidth:"234px",onCellSelect:a,onClearSelection:i,rowHeaderIndex:1,rowHeight:"50px"})}},31070:function(e,t,n){var l=n(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(17383)),o=l(n(34579)),i=l(n(28452)),r=l(n(63072)),c=l(n(29511)),u=l(n(43693)),s=l(n(96540)),d=l(n(23986)),m=l(n(5556)),p=l(n(63276)),f=l(n(47479)),h=l(n(67967)),g=l(n(99923));function C(e,t,n){return t=(0,r.default)(t),(0,i.default)(e,b()?Reflect.construct(t,n||[],(0,r.default)(e).constructor):t.apply(e,n))}function b(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(b=function(){return!!e})()}var k=h.default.bind(g.default),y={isArrowDisplayed:m.default.bool,contentWidth:m.default.string,boundingRef:m.default.func},x=function(e){function t(e){var n;return(0,a.default)(this,t),n=C(this,t,[e]),(0,u.default)(n,"handleToggle21OnClick",(function(){n.setState((function(e){return{toggle21Selected:!e.toggle21Selected}}))})),(0,u.default)(n,"handleToggle31OnClick",(function(){n.setState((function(e){return{toggle31Selected:!e.toggle31Selected}}))})),(0,u.default)(n,"handleToggle41OnClick",(function(){n.setState((function(e){return{toggle41Selected:!e.toggle41Selected}}))})),(0,u.default)(n,"handleToggle51OnClick",(function(){n.setState((function(e){return{toggle51Selected:!e.toggle51Selected}}))})),n.handleButtonClick=n.handleButtonClick.bind(n),n.handleRequestClose=n.handleRequestClose.bind(n),n.setButtonNode=n.setButtonNode.bind(n),n.getButtonNode=n.getButtonNode.bind(n),n.handleToggle1OnClick=n.handleToggle1OnClick.bind(n),n.handleToggle2OnClick=n.handleToggle2OnClick.bind(n),n.handleOnChange=n.handleOnChange.bind(n),n.handleAction=n.handleAction.bind(n),n.handleCloseOnClick=n.handleCloseOnClick.bind(n),n.state={open:!1,toggle1Selected:!1,toggle2Selected:!1,toggle21Selected:!1,toggle31Selected:!1,toggle41Selected:!1,toggle51Selected:!1,groupSelectedIndex:void 0,actionClickCount:0},n}return(0,c.default)(t,e),(0,o.default)(t,[{key:"handleButtonClick",value:function(){this.setState({open:!0})}},{key:"handleRequestClose",value:function(){this.setState({open:!1})}},{key:"handleCloseOnClick",value:function(e){e.preventDefault(),this.handleRequestClose()}},{key:"handleToggle1OnClick",value:function(){this.setState((function(e){return{toggle1Selected:!e.toggle1Selected}}))}},{key:"handleToggle2OnClick",value:function(){this.setState((function(e){return{toggle2Selected:!e.toggle2Selected}}))}},{key:"handleOnChange",value:function(e,t){this.setState({groupSelectedIndex:t})}},{key:"handleAction",value:function(e){e.preventDefault();var t=this.state;t.actionClickCount+=1,this.setState(t)}},{key:"setButtonNode",value:function(e){this.buttonNode=e}},{key:"getButtonNode",value:function(){return this.buttonNode}},{key:"render",value:function(){return s.default.createElement("div",null,s.default.createElement("div",{className:k("menu-wrapper")},s.default.createElement(p.default,{isOpen:this.state.open,targetRef:this.getButtonNode,onRequestClose:this.handleRequestClose,contentWidth:this.props.contentWidth,isArrowDisplayed:this.props.isArrowDisplayed,boundingRef:this.props.boundingRef,headerTitle:"Clinical Solution"},s.default.createElement(p.default.Item,{text:"Hospital Details",key:"Toggle1",isSelected:this.state.toggle1Selected,onClick:this.handleToggle1OnClick,isSelectable:!0}),s.default.createElement(p.default.Item,{text:"Hospitals & Health Systems",key:"Toggle2",isSelected:this.state.toggle2Selected,onClick:this.handleToggle2OnClick,isSelectable:!0}),s.default.createElement(p.default.Item,{text:"Health System Operations",key:"Toggle3",isSelected:this.state.toggle1Selected,onClick:this.handleToggle1OnClick,isDisabled:!0}),s.default.createElement(p.default.Divider,{key:"Divider1"}),s.default.createElement(p.default.Item,{text:"Our Offerings",key:"Offers",subMenuItems:[s.default.createElement(p.default.Item,{text:"Policies and Guidelines",key:"Policies",isToggled:this.state.toggle21Selected,onClick:this.handleToggle21OnClick,isToggleable:!0}),s.default.createElement(p.default.Item,{text:"Population Health Management",key:"Population",isToggled:this.state.toggle51Selected,onClick:this.handleToggle51OnClick,isToggleable:!0}),s.default.createElement(p.default.Item,{text:"Clinical Solutions",key:"Clinical",subMenuItems:[s.default.createElement(p.default.Item,{text:"Clinical Communication & Collaboration",key:"Communication",isToggled:this.state.toggle31Selected,onClick:this.handleToggle31OnClick,isToggleable:!0}),s.default.createElement(p.default.Item,{text:"Community, Critical Access & Specialty Hospital",key:"Community",isToggled:this.state.toggle41Selected,onClick:this.handleToggle41OnClick,isToggleable:!0})]})]}),s.default.createElement(p.default.Item,{text:"Community, Critical Access & Specialty Hospital",key:"Nested2 disabled",isDisabled:!0,subMenuItems:[s.default.createElement(p.default.Item,{text:"Default 2.1",key:"2.1"}),s.default.createElement(p.default.Item,{text:"Default 2.2",key:"2.2"}),s.default.createElement(p.default.Item,{text:"Default 2.3",key:"2.3"})]}),s.default.createElement(p.default.Divider,{key:"Divider3"}),s.default.createElement(p.default.ItemGroup,{key:"Group","aria-label":"Health Information",id:"health-info",onChange:this.handleOnChange},s.default.createElement(p.default.Item,{ariaDescribedBy:"health-info",text:"Behavioral Health",key:"GroupItem1",isSelected:0===this.state.groupSelectedIndex}),s.default.createElement(p.default.Item,{ariaDescribedBy:"health-info",text:"Ambulatory Surgery Center",key:"GroupItem2",isSelected:1===this.state.groupSelectedIndex}),s.default.createElement(p.default.Item,{ariaDescribedBy:"health-info",text:"Critical Care",key:"GroupItem3",isSelected:2===this.state.groupSelectedIndex,isDisabled:!0}))),s.default.createElement(d.default,{onClick:this.handleButtonClick,text:"Explore Clinical Solution","aria-haspopup":!0,icon:s.default.createElement(f.default,null),isReversed:!0,refCallback:this.setButtonNode})))}}])}(s.default.Component);x.propTypes=y;t.default=x},99923:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"BasicMenu-module__clinical-lowlight-theme___Csbwp","orion-fusion-theme":"BasicMenu-module__orion-fusion-theme___AWji+","menu-wrapper":"BasicMenu-module__menu-wrapper___UQyp3"}}}]);