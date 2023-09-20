"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[46009],{49271:function(e,a,t){var l=t(64836),d=t(18698);a.Z=void 0;var n=l(t(27424)),r=function(e,a){if(!a&&e&&e.__esModule)return e;if(null===e||"object"!==d(e)&&"function"!=typeof e)return{default:e};var t=x(a);if(t&&t.has(e))return t.get(e);var l={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var m=n?Object.getOwnPropertyDescriptor(e,r):null;m&&(m.get||m.set)?Object.defineProperty(l,r,m):l[r]=e[r]}l.default=e,t&&t.set(e,l);return l}(t(67294)),m=l(t(45697)),i=l(t(47166)),p=t(21538),o=l(t(33864)),u=l(t(23399)),s=t(51051),c=l(t(53560));function x(e){if("function"!=typeof WeakMap)return null;var a=new WeakMap,t=new WeakMap;return(x=function(e){return e?t:a})(e)}var f=i.default.bind(c.default),y={example:m.default.element,exampleSrc:m.default.element,exampleCssSrc:m.default.element,title:m.default.string,description:m.default.node,isExpanded:m.default.bool},h=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},T=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},g=function(e){var a=e.example,t=e.exampleSrc,l=e.exampleCssSrc,d=e.title,m=e.description,i=e.isExpanded,c=(0,r.useState)(i),x=(0,n.default)(c,2),y=x[0],g=x[1],C=(0,r.useState)(!1),v=(0,n.default)(C,2),N=v[0],b=v[1],D=r.default.useContext(p.ThemeContext),R=void 0!==l,w=function(){b(!N),y&&g(!y)},O=function(){g(!y),N&&b(!N)},k=function(e,a){e.nativeEvent.keyCode!==s.KEY_SPACE&&e.nativeEvent.keyCode!==s.KEY_RETURN||(e.preventDefault(),a())};return r.default.createElement("div",{className:f("template",D.className)},r.default.createElement("div",{className:f("header")},d&&r.default.createElement("h2",{className:f("title")},d)),r.default.createElement("div",{className:f("content")},m&&r.default.createElement("div",{className:f("description")},m),a),r.default.createElement("div",{className:f("footer")},t?r.default.createElement("div",{className:f("button-container")},R&&r.default.createElement("button",{type:"button",className:f("css-toggle","item",{"is-selected":N}),onClick:w,onKeyDown:function(e){return k(e,w)},onBlur:h,onMouseDown:T,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(o.default,{className:f("chevron")}),r.default.createElement("span",null,"CSS"),r.default.createElement(u.default,{className:f("chevron")})),r.default.createElement("button",{type:"button",className:f("code-toggle","item",{"is-selected":y}),onClick:O,onKeyDown:function(e){return k(e,O)},onBlur:h,onMouseDown:T,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(o.default,{className:f("chevron")}),r.default.createElement("span",null,"Code"),r.default.createElement(u.default,{className:f("chevron")}))):null,r.default.createElement("div",null,N&&r.default.createElement("div",{className:f("css")},l),y&&r.default.createElement("div",{className:f("code")},t))))};g.propTypes=y,g.defaultProps={isExpanded:!1};var C=g;a.Z=C},46009:function(e,a,t){t.r(a),t.d(a,{default:function(){return b}});var l=t(87462),d=t(44925),n=t(67294),r=t(81254),m=t(4932),i=t(78530),p=["components"],o={},u="wrapper";function s(e){var a=e.components,t=(0,d.Z)(e,p);return(0,r.mdx)(u,(0,l.Z)({},o,t,{components:a,mdxType:"MDXLayout"}),(0,r.mdx)(i.ZP,{mdxType:"PropsTable"},(0,r.mdx)(i.X2,{key:"ROW1",mdxType:"Row"},(0,r.mdx)(i.O,{mdxType:"PropNameCell"},"datePickerId"),(0,r.mdx)(i.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(i.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,r.mdx)(i.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(i.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The DatePicker identifier. Links the htmlFor of the field to the select identifier."))),(0,r.mdx)(i.X2,{key:"ROW2",mdxType:"Row"},(0,r.mdx)(i.O,{mdxType:"PropNameCell"},"disabled"),(0,r.mdx)(i.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(i.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(i.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,r.mdx)(i.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Whether the date input should be disabled."))),(0,r.mdx)(i.X2,{key:"ROW3",mdxType:"Row"},(0,r.mdx)(i.O,{mdxType:"PropNameCell"},"error"),(0,r.mdx)(i.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,r.mdx)(i.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(i.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"null\n"))),(0,r.mdx)(i.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Error message for when the input is invalid. This will only be displayed if isInvalid is true."))),(0,r.mdx)(i.X2,{key:"ROW4",mdxType:"Row"},(0,r.mdx)(i.O,{mdxType:"PropNameCell"},"errorIcon"),(0,r.mdx)(i.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"element\n"))),(0,r.mdx)(i.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(i.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"<IconError />\n"))),(0,r.mdx)(i.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Error Icon to display when the input is invalid."))),(0,r.mdx)(i.X2,{key:"ROW5",mdxType:"Row"},(0,r.mdx)(i.O,{mdxType:"PropNameCell"},"excludeDates"),(0,r.mdx)(i.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"arrayOf: [{\n  type: 'string',\n}],\n"))),(0,r.mdx)(i.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(i.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,r.mdx)(i.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"An array of ISO 8601 string representation of the dates to disable in the picker."))),(0,r.mdx)(i.X2,{key:"ROW6",mdxType:"Row"},(0,r.mdx)(i.O,{mdxType:"PropNameCell"},"filterDate"),(0,r.mdx)(i.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,r.mdx)(i.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(i.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,r.mdx)(i.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"A function that gets called for each date in the picker to evaluate which date should be disabled.\nA return value of true will be enabled and false will be disabled."))),(0,r.mdx)(i.X2,{key:"ROW7",mdxType:"Row"},(0,r.mdx)(i.O,{mdxType:"PropNameCell"},"help"),(0,r.mdx)(i.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,r.mdx)(i.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(i.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"null\n"))),(0,r.mdx)(i.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Help element to display with the input."))),(0,r.mdx)(i.X2,{key:"ROW8",mdxType:"Row"},(0,r.mdx)(i.O,{mdxType:"PropNameCell"},"hideRequired"),(0,r.mdx)(i.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(i.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(i.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,r.mdx)(i.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Whether or not to hide the required indicator on the label."))),(0,r.mdx)(i.X2,{key:"ROW9",mdxType:"Row"},(0,r.mdx)(i.O,{mdxType:"PropNameCell"},"includeDates"),(0,r.mdx)(i.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"arrayOf: [{\n  type: 'string',\n}],\n"))),(0,r.mdx)(i.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(i.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,r.mdx)(i.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"An array of ISO 8601 string representation of the dates to enable in the picker. All Other dates will be disabled."))),(0,r.mdx)(i.X2,{key:"ROW10",mdxType:"Row"},(0,r.mdx)(i.O,{mdxType:"PropNameCell"},"inputAttributes"),(0,r.mdx)(i.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"object\n"))),(0,r.mdx)(i.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(i.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,r.mdx)(i.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Custom input attributes to apply to the date input. Use the name prop to set the name for the input.\nDo not set the name in inputAttribute as it will be ignored."))),(0,r.mdx)(i.X2,{key:"ROW11",mdxType:"Row"},(0,r.mdx)(i.O,{mdxType:"PropNameCell"},"isIncomplete"),(0,r.mdx)(i.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(i.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(i.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,r.mdx)(i.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Whether the field displays as Incomplete. Use when no value has been provided. ",(0,r.mdx)("em",{parentName:"p"},"(usage note: ",(0,r.mdx)("inlineCode",{parentName:"em"},"required")," must also be set)"),"."))),(0,r.mdx)(i.X2,{key:"ROW12",mdxType:"Row"},(0,r.mdx)(i.O,{mdxType:"PropNameCell"},"isInline"),(0,r.mdx)(i.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(i.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(i.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,r.mdx)(i.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Whether or not the field is an inline field."))),(0,r.mdx)(i.X2,{key:"ROW13",mdxType:"Row"},(0,r.mdx)(i.O,{mdxType:"PropNameCell"},"isInvalid"),(0,r.mdx)(i.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(i.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(i.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,r.mdx)(i.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Whether the field displays as Invalid. Use when value does not meet validation pattern."))),(0,r.mdx)(i.X2,{key:"ROW14",mdxType:"Row"},(0,r.mdx)(i.O,{mdxType:"PropNameCell"},"isLabelHidden"),(0,r.mdx)(i.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(i.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(i.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,r.mdx)(i.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Whether or not the label is visible. Use this props to hide a label while still creating it on the DOM for accessibility."))),(0,r.mdx)(i.X2,{key:"ROW15",mdxType:"Row"},(0,r.mdx)(i.O,{mdxType:"PropNameCell"},"label"),(0,r.mdx)(i.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,r.mdx)(i.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,r.mdx)(i.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(i.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The label of the form control children."))),(0,r.mdx)(i.X2,{key:"ROW16",mdxType:"Row"},(0,r.mdx)(i.O,{mdxType:"PropNameCell"},"labelAttrs"),(0,r.mdx)(i.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"object\n"))),(0,r.mdx)(i.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(i.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"{}\n"))),(0,r.mdx)(i.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Attributes to attach to the label."))),(0,r.mdx)(i.X2,{key:"ROW17",mdxType:"Row"},(0,r.mdx)(i.O,{mdxType:"PropNameCell"},"maxDate"),(0,r.mdx)(i.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(i.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(i.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,r.mdx)(i.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"An ISO 8601 string representation of the maximum date that can be selected. The value must be in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"YYYY-MM-DD")," format. Must be on or before ",(0,r.mdx)("inlineCode",{parentName:"p"},"12/31/2100"),"."))),(0,r.mdx)(i.X2,{key:"ROW18",mdxType:"Row"},(0,r.mdx)(i.O,{mdxType:"PropNameCell"},"minDate"),(0,r.mdx)(i.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(i.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(i.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,r.mdx)(i.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"An ISO 8601 string representation of the minimum date that can be selected. The value must be in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"YYYY-MM-DD")," format. Must be on or after ",(0,r.mdx)("inlineCode",{parentName:"p"},"01/01/1900")))),(0,r.mdx)(i.X2,{key:"ROW19",mdxType:"Row"},(0,r.mdx)(i.O,{mdxType:"PropNameCell"},"name"),(0,r.mdx)(i.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(i.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,r.mdx)(i.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(i.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Name of the date input. The name should be unique."))),(0,r.mdx)(i.X2,{key:"ROW20",mdxType:"Row"},(0,r.mdx)(i.O,{mdxType:"PropNameCell"},"onBlur"),(0,r.mdx)(i.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,r.mdx)(i.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(i.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,r.mdx)(i.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"A callback function triggered when the date picker component loses focus.\nThis event does not get triggered when the focus is moved from the date input to the calendar button since the focus is still within the main date picker component.\nThe first parameter is the event. The second parameter is the metadata to describe the current state of the input value at the time when the onBlur callback is triggered."))),(0,r.mdx)(i.X2,{key:"ROW21",mdxType:"Row"},(0,r.mdx)(i.O,{mdxType:"PropNameCell"},"onChange"),(0,r.mdx)(i.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,r.mdx)(i.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(i.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,r.mdx)(i.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"A callback function to execute when a valid date is selected or entered.\nThe first parameter is the event. The second parameter is the changed date value. The third parameter is the metadata to describe the current state of the input value at the time when the onChange callback is triggered."))),(0,r.mdx)(i.X2,{key:"ROW22",mdxType:"Row"},(0,r.mdx)(i.O,{mdxType:"PropNameCell"},"onChangeRaw"),(0,r.mdx)(i.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,r.mdx)(i.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(i.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,r.mdx)(i.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"A callback function to execute when a change is made in the date input.\nThe first parameter is the event. The second parameter is the changed date value. The third parameter is the metadata to describe the current state of the input value at the time when the onChangeRaw callback is triggered."))),(0,r.mdx)(i.X2,{key:"ROW23",mdxType:"Row"},(0,r.mdx)(i.O,{mdxType:"PropNameCell"},"onClickOutside"),(0,r.mdx)(i.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,r.mdx)(i.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(i.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,r.mdx)(i.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Deprecated"),", A callback function to execute when clicking outside of the picker to dismiss it. Resolves to ",(0,r.mdx)("inlineCode",{parentName:"p"},"onRequestClose"),"."))),(0,r.mdx)(i.X2,{key:"ROW24",mdxType:"Row"},(0,r.mdx)(i.O,{mdxType:"PropNameCell"},"onFocus"),(0,r.mdx)(i.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,r.mdx)(i.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(i.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,r.mdx)(i.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"A callback function triggered when the date picker component receives focus.\nThis event does not get triggered when the focus is moved from the date input to the calendar button since the focus is still within the main date picker component."))),(0,r.mdx)(i.X2,{key:"ROW25",mdxType:"Row"},(0,r.mdx)(i.O,{mdxType:"PropNameCell"},"onRequestClose"),(0,r.mdx)(i.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,r.mdx)(i.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(i.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(i.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"A callback function to execute when picker is dismissed. onRequestClose(event)"))),(0,r.mdx)(i.X2,{key:"ROW26",mdxType:"Row"},(0,r.mdx)(i.O,{mdxType:"PropNameCell"},"onSelect"),(0,r.mdx)(i.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,r.mdx)(i.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(i.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,r.mdx)(i.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"A callback function to execute when a date is selected from within the picker."))),(0,r.mdx)(i.X2,{key:"ROW27",mdxType:"Row"},(0,r.mdx)(i.O,{mdxType:"PropNameCell"},"required"),(0,r.mdx)(i.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(i.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(i.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,r.mdx)(i.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Whether or not the date field is required."))),(0,r.mdx)(i.X2,{key:"ROW28",mdxType:"Row"},(0,r.mdx)(i.O,{mdxType:"PropNameCell"},"maxWidth"),(0,r.mdx)(i.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(i.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(i.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,r.mdx)(i.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Set the max-width of a field using ",(0,r.mdx)("inlineCode",{parentName:"p"},"length")," or ",(0,r.mdx)("inlineCode",{parentName:"p"},"%"),".  Best practice recommendation to never exceed\na rendered value of 1020px. ",(0,r.mdx)("em",{parentName:"p"},"(Note: Providing custom inline styles will take precedence.)")))),(0,r.mdx)(i.X2,{key:"ROW29",mdxType:"Row"},(0,r.mdx)(i.O,{mdxType:"PropNameCell"},"selectedDate"),(0,r.mdx)(i.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(i.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(i.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,r.mdx)(i.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"An ISO 8601 string representation of the initial value to show in the date input.\nThis prop name is derived from react-datepicker but is analogous to value in a form input field."))),(0,r.mdx)(i.X2,{key:"ROW30",mdxType:"Row"},(0,r.mdx)(i.O,{mdxType:"PropNameCell"},"showOptional"),(0,r.mdx)(i.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(i.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(i.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,r.mdx)(i.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Whether or not to append the 'optional' label to a non-required field label."))),(0,r.mdx)(i.X2,{key:"ROW31",mdxType:"Row"},(0,r.mdx)(i.O,{mdxType:"PropNameCell"},"value"),(0,r.mdx)(i.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(i.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(i.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(i.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The date value. This prop should only be used for a controlled date picker field.\nWhen this prop is set a handler is needed for both the ",(0,r.mdx)("inlineCode",{parentName:"p"},"onChange")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"onChangeRaw")," props to manage the date value.\nIf both ",(0,r.mdx)("inlineCode",{parentName:"p"},"selectedDate")," and this prop are set, then ",(0,r.mdx)("inlineCode",{parentName:"p"},"selectedDate")," will have no effect.\nThe value must be in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"YYYY-MM-DD")," format or the all-numeric date format based on the locale.")))))}s.isMDXComponent=!0;var c=t(77266),x=["components"],f={};function y(e){var a=e.components,t=(0,d.Z)(e,x);return(0,r.mdx)("wrapper",(0,l.Z)({},f,t,{components:a,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\nimport classNames from 'classnames/bind';\nimport DatePickerField from 'terra-date-picker/lib/DatePickerField';\nimport styles from './DatePickerExampleCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst DatePickerFieldExample = () => {\n  const [date, setDate] = useState('');\n  const [invalid, setInValid] = useState(false);\n\n  const handleDateChange = (event, dateValue) => {\n    setDate(dateValue);\n    setInValid(false);\n  };\n\n  const handleDateChangeRaw = (event, dateValue, metadata) => {\n    if (!metadata.isValidValue && metadata.inputValue.length === 10) {\n      setDate(null);\n      setInValid(true);\n    }\n  };\n\n  return (\n    <div>\n      <p>\n        Selected ISO Date:\n        <span className={cx('date-wrapper')}>{date}</span>\n      </p>\n      <DatePickerField\n        label=\"Enter Date\"\n        name=\"date-input\"\n        datePickerId=\"default-field\"\n        onChange={handleDateChange}\n        onChangeRaw={handleDateChangeRaw}\n        isInvalid={invalid}\n        error={<p>Enter valid date</p>}\n      />\n    </div>\n  );\n};\n\nexport default DatePickerFieldExample;\n\n")))}y.isMDXComponent=!0;var h=t(49271),T=t(55336),g=function(e){var a=e.title,t=e.description,l=e.isExpanded;return n.createElement(h.Z,{title:a||"Date Picker Field",description:t,example:n.createElement(c.Z,null),exampleCssSrc:n.createElement(T.Z,null),exampleSrc:n.createElement(y,null),isExpanded:l})},C=["components"],v={},N="wrapper";function b(e){var a=e.components,t=(0,d.Z)(e,C);return(0,r.mdx)(N,(0,l.Z)({},v,t,{components:a,mdxType:"MDXLayout"}),(0,r.mdx)(m.C,{mdxType:"Badge"}),(0,r.mdx)("h1",{id:"terra-date-picker-field"},"Terra Date Picker Field"),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"https://github.com/cerner/terra-framework/tree/main/packages/terra-date-picker"},"terra-date-picker")," component that is wrapped inside a\n",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/cerner/terra-core/tree/main/packages/terra-form-field"},"terra-form-field")," component."),(0,r.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Install with ",(0,r.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"npm install terra-date-picker"))))),(0,r.mdx)("h2",{id:"component-features"},"Component Features"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"},"Internationalization Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"},"Localization Support"))),(0,r.mdx)("h2",{id:"examples"},"Examples"),(0,r.mdx)(g,{title:"Date Picker Field",mdxType:"DatePickerFieldExample"}),(0,r.mdx)("h2",{id:"date-picker-field-props-table"},"Date Picker field props table"),(0,r.mdx)(s,{mdxType:"DatePickerFieldPropsTable"}))}b.isMDXComponent=!0},55336:function(e,a,t){t.d(a,{Z:function(){return p}});var l=t(87462),d=t(44925),n=(t(67294),t(81254)),r=["components"],m={},i="wrapper";function p(e){var a=e.components,t=(0,d.Z)(e,r);return(0,n.mdx)(i,(0,l.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-scss"},":local {\n  .date-wrapper {\n    display: inline-block;\n  }\n}\n\n")))}p.isMDXComponent=!0},4932:function(e,a,t){t.d(a,{C:function(){return n}});var l=t(67294),d=t(22863),n=function(e){var a=e.url;return l.createElement(d.Z,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-date-picker",name:"terra-date-picker",version:"4.90.0",url:a})}},64233:function(e,a,t){var l=t(64836);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var d=l(t(10434)),n=l(t(38416)),r=l(t(70215)),m=l(t(67294)),i=l(t(45697)),p=l(t(47717)),o=t(25387),u=l(t(51331)),s=l(t(28411)),c=["datePickerId","disabled","inputAttributes","error","errorIcon","excludeDates","filterDate","help","hideRequired","isIncomplete","isInvalid","isInline","isLabelHidden","includeDates","intl","label","labelAttrs","maxDate","minDate","maxWidth","name","onBlur","onChange","onChangeRaw","onClickOutside","onFocus","onRequestClose","onSelect","required","selectedDate","showOptional","value"];function x(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,l)}return t}function f(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?x(Object(t),!0).forEach((function(a){(0,n.default)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):x(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var y={datePickerId:i.default.string.isRequired,disabled:i.default.bool,error:i.default.node,errorIcon:i.default.element,excludeDates:i.default.arrayOf(i.default.string),filterDate:i.default.func,help:i.default.node,hideRequired:i.default.bool,includeDates:i.default.arrayOf(i.default.string),inputAttributes:i.default.object,intl:i.default.shape({formatMessage:i.default.func,locale:i.default.string}).isRequired,isIncomplete:i.default.bool,isInline:i.default.bool,isInvalid:i.default.bool,isLabelHidden:i.default.bool,label:i.default.node.isRequired,labelAttrs:i.default.object,maxDate:i.default.string,minDate:i.default.string,name:i.default.string.isRequired,onBlur:i.default.func,onChange:i.default.func,onChangeRaw:i.default.func,onClickOutside:i.default.func,onFocus:i.default.func,onRequestClose:i.default.func,onSelect:i.default.func,required:i.default.bool,maxWidth:i.default.string,selectedDate:i.default.string,showOptional:i.default.bool,value:i.default.string},h={disabled:!1,error:null,errorIcon:m.default.createElement(u.default,null),excludeDates:void 0,filterDate:void 0,help:null,hideRequired:!1,includeDates:void 0,inputAttributes:void 0,isIncomplete:!1,isInline:!1,isInvalid:!1,isLabelHidden:!1,labelAttrs:{},maxDate:void 0,maxWidth:void 0,minDate:void 0,onBlur:void 0,onChange:void 0,onChangeRaw:void 0,onClickOutside:void 0,onFocus:void 0,onSelect:void 0,required:!1,selectedDate:void 0,showOptional:!1},T=function(e){var a=e.datePickerId,t=e.disabled,l=e.inputAttributes,n=e.error,i=(e.errorIcon,e.excludeDates),o=e.filterDate,u=e.help,x=e.hideRequired,y=e.isIncomplete,h=e.isInvalid,T=e.isInline,g=e.isLabelHidden,C=e.includeDates,v=e.intl,N=e.label,b=e.labelAttrs,D=e.maxDate,R=e.minDate,w=e.maxWidth,O=e.name,k=e.onBlur,E=e.onChange,_=e.onChangeRaw,j=e.onClickOutside,q=e.onFocus,P=e.onRequestClose,W=e.onSelect,S=e.required,I=e.selectedDate,V=e.showOptional,X=e.value,M=(0,r.default)(e,c),A="".concat(a,"-help");n&&h&&(A="".concat(a,"-error ").concat(a,"-help"));var F=l&&l["aria-describedby"],L=l;A&&(L=f(f({},l),{},{"aria-describedby":F?"".concat(A," ").concat(F):A}));var Z=v.formatMessage({id:"Terra.datePicker.dateFormat"}),B=u?m.default.createElement("div",{"aria-label":"".concat(v.formatMessage({id:"Terra.datePicker.dateFormatLabel"})," ").concat(Z,", ").concat(u)},"(".concat(Z,")")," ",u):m.default.createElement("div",{"aria-label":"".concat(v.formatMessage({id:"Terra.datePicker.dateFormatLabel"})," ").concat(Z)},"(".concat(Z,")"));return m.default.createElement(p.default,(0,d.default)({},M,{label:N,labelAttrs:b,error:n,help:B,hideRequired:x,required:S,showOptional:V,isInvalid:h,isInline:T,isLabelHidden:g,htmlFor:a,maxWidth:w}),m.default.createElement(s.default,{disabled:t,id:a,inputAttributes:L,excludeDates:i,filterDate:o,useExternalFormatMask:!0,includeDates:C,isInvalid:h,isIncomplete:y,maxDate:D,minDate:R,ariaLabel:N,name:O,onBlur:k,onChange:E,onChangeRaw:_,onRequestClose:P,onClickOutside:j,onFocus:q,onSelect:W,required:S,selectedDate:I,value:X}))};T.propTypes=y,T.defaultProps=h;var g=(0,o.injectIntl)(T);a.default=g},77266:function(e,a,t){var l=t(64836),d=t(18698);a.Z=void 0;var n=l(t(27424)),r=function(e,a){if(!a&&e&&e.__esModule)return e;if(null===e||"object"!==d(e)&&"function"!=typeof e)return{default:e};var t=o(a);if(t&&t.has(e))return t.get(e);var l={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var m=n?Object.getOwnPropertyDescriptor(e,r):null;m&&(m.get||m.set)?Object.defineProperty(l,r,m):l[r]=e[r]}l.default=e,t&&t.set(e,l);return l}(t(67294)),m=l(t(47166)),i=l(t(64233)),p=l(t(22529));function o(e){if("function"!=typeof WeakMap)return null;var a=new WeakMap,t=new WeakMap;return(o=function(e){return e?t:a})(e)}var u=m.default.bind(p.default),s=function(){var e=(0,r.useState)(""),a=(0,n.default)(e,2),t=a[0],l=a[1],d=(0,r.useState)(!1),m=(0,n.default)(d,2),p=m[0],o=m[1];return r.default.createElement("div",null,r.default.createElement("p",null,"Selected ISO Date:",r.default.createElement("span",{className:u("date-wrapper")},t)),r.default.createElement(i.default,{label:"Enter Date",name:"date-input",datePickerId:"default-field",onChange:function(e,a){l(a),o(!1)},onChangeRaw:function(e,a,t){t.isValidValue||10!==t.inputValue.length||(l(null),o(!0))},isInvalid:p,error:r.default.createElement("p",null,"Enter valid date")}))};a.Z=s},53560:function(e,a,t){t.r(a),a.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},22529:function(e,a,t){t.r(a),a.default={"date-wrapper":"DatePickerExampleCommon-module__date-wrapper___8UjLh"}},33864:function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var l=n(t(67294)),d=n(t(99139));function n(e){return e&&e.__esModule?e:{default:e}}function r(){return r=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},r.apply(this,arguments)}var m=function(e){var a=r({},e);return l.default.createElement(d.default,a,l.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};m.displayName="IconChevronLeft",m.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};var i=m;a.default=i}}]);