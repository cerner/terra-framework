"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[7808],{11416:function(e,t,a){var n=a(22411);t.c=void 0;var l=n(a(11504)),r=n(a(3268)),i=n(a(74824)),o=n(a(58112)),d=i.default.bind(o.default),s={name:r.default.string.isRequired,src:r.default.string,url:r.default.string,version:r.default.string.isRequired},m=function(e){var t=e.src,a=e.name,n=e.url,r=e.version,i=l.default.createElement("a",{className:d("badge"),href:n||"https://www.npmjs.org/package/".concat(a,"/v/").concat(r)},l.default.createElement("span",{className:d("badge-name")},n?"package":"npm"),l.default.createElement("span",{className:d("badge-version")},"v".concat(r))),o=t?l.default.createElement("a",{className:d("badge"),href:t},l.default.createElement("span",{className:d("badge-name")},"github"),l.default.createElement("span",{className:d("badge-version")},"source")):void 0;return l.default.createElement("div",{className:d("badge-container")},i,o)};m.propTypes=s;t.c=m},32560:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=s(a(11504)),l=s(a(3268)),r=s(a(74824)),i=s(a(7804)),o=s(a(48728)),d=["children"];function s(e){return e&&e.__esModule?e:{default:e}}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},m.apply(this,arguments)}function p(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var u=r.default.bind(o.default),c=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},h=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},f={children:l.default.string},b=function(e){var t=e.children,a=p(e,d),l=n.default.useContext(i.default),o=(0,r.default)(u(["button",l.className]),a.className);return n.default.createElement("button",m({},a,{type:"button",className:o,onBlur:c,onMouseDown:h,"data-focus-styles-enabled":!0}),t)};b.propTypes=f;t.default=b},27428:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=d(a(11504)),l=d(a(3268)),r=d(a(74824)),i=d(a(7804)),o=d(a(50987));function d(e){return e&&e.__esModule?e:{default:e}}var s=r.default.bind(o.default),m={ariaLevel:l.default.oneOf(["2","3","4","5","6"]),children:l.default.node,variant:l.default.oneOf(["ux-recommendation","caution","deprecation","maintenance","important","not-supported"])},p=function(e){var t=e.ariaLevel,a=e.variant,l=e.children,r=n.default.useContext(i.default);return n.default.createElement("div",{className:s("notice",a,r.className)},n.default.createElement("div",{className:s("accessory"),"aria-hidden":"true",focusable:"false"}),n.default.createElement("div",{role:"heading",className:s("title"),"aria-level":t},n.default.createElement("span",null,function(e){return"ux-recommendation"===e?"UX Recommendation":"caution"===e?"Caution":"deprecation"===e?"Deprecation Notice":"maintenance"===e?"In Maintenance":"important"===e?"Important":"not-supported"===e?"Hazards for Incorrect Usage":"error"}(a))),n.default.createElement("div",{className:s("children")},function(e){return"not-supported"===e?n.default.createElement(n.default.Fragment,null,n.default.createElement("p",{className:s("paragraph")},"This component was designed and tested according to the documented implementation."),n.default.createElement("p",{className:s("paragraph")},"Using the component incorrectly:",n.default.createElement("ul",{className:s("list")},n.default.createElement("li",null,"will likely result in improper composition and create accessibility issues"),n.default.createElement("li",null,"may cause erratic or broken behaviors and styles"),n.default.createElement("li",null,n.default.createElement("strong",null,"will not be supported "),"or enhanced to allow for incorrect use")))):null}(a),n.default.Children.map(l,(function(e){return"string"==typeof e?n.default.createElement("p",null,e):e}))))};p.propTypes=m,p.defaultProps={ariaLevel:"2",variant:"important"};t.default=p},72936:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=m(a(11504)),l=m(a(3268)),r=m(a(82084)),i=m(a(74824)),o=m(a(7804)),d=m(a(4620)),s=["title"];function m(e){return e&&e.__esModule?e:{default:e}}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},p.apply(this,arguments)}function u(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var c=i.default.bind(d.default),h={title:l.default.string},f=function(e){var t=e.title,a=u(e,s),l=n.default.useContext(o.default),i=(0,r.default)(c(["placeholder",l.className]),a.className),d=c(["inner"]);return n.default.createElement("div",p({},a,{className:i}),n.default.createElement("div",{className:d},n.default.createElement("p",{className:c("title")},t)))};f.propTypes=h,f.defaultProps={title:""};t.default=f},31236:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"Notice",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"Placeholder",{enumerable:!0,get:function(){return l.default}});var n=i(a(27428)),l=i(a(72936)),r=i(a(32560));function i(e){return e&&e.__esModule?e:{default:e}}},7808:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var n=a(45072),l=a(52822),r=(a(11504),a(69788)),i=a(78645),o=a(31236),d=a(336),s=["components"],m={},p="wrapper";function u(e){var t=e.components,a=(0,l.c)(e,s);return(0,r.mdx)(p,(0,n.c)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(i.k,{mdxType:"Badge"}),(0,r.mdx)("h1",{id:"accessibility-guide-for-terra-filter-pills"},"Accessibility Guide for Terra Filter Pills"),(0,r.mdx)(o.Notice,{variant:"important",ariaLevel:"2",mdxType:"Notice"},(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("strong",{parentName:"li"},"Filter Pills have special interactions and construction")," that makes them unique from standard buttons or a list of interactive items."),(0,r.mdx)("li",{parentName:"ol"},"Used as a group of combined elements, the collection of pills ",(0,r.mdx)("strong",{parentName:"li"},"interacts like a single unit")," having one tab focus order sequence for the full group, with arrow keys providing inner-navigation by keyboard between the individual items. "),(0,r.mdx)("li",{parentName:"ol"},"The group of filter pills will ",(0,r.mdx)("strong",{parentName:"li"},"always need to have a label")," in the form of a heading, visible text, or at minimum by providing the aria-label (for reserved circumstances)."))),(0,r.mdx)(d.c,{mdxType:"Whitespace"}),(0,r.mdx)("h2",{id:"accessibility-considerations"},"Accessibility Considerations:"),(0,r.mdx)("h3",{id:"code-considerations"},"Code Considerations"),(0,r.mdx)("p",null,"Each use of Filters Pills is a grouping of interactive elements and will need to have a clear and descriptive label that informs the user of the intent of the pills being shown, separating it from other areas on the page with similar usage.  Filter Pills offers two approaches to providing the correct labelling, using the ",(0,r.mdx)("strong",{parentName:"p"},(0,r.mdx)("inlineCode",{parentName:"strong"},"ariaLabel"))," prop or the ",(0,r.mdx)("strong",{parentName:"p"},(0,r.mdx)("inlineCode",{parentName:"strong"},"ariaLabelledBy"))," prop, each with a specific and intended use."),(0,r.mdx)("hr",null),(0,r.mdx)("h4",{id:"using-aria-label"},"Using aria-label"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Filter Pills includes a required prop called ",(0,r.mdx)("strong",{parentName:"p"},(0,r.mdx)("inlineCode",{parentName:"strong"},"ariaLabel"))," which will add the ",(0,r.mdx)("a",{parentName:"p",href:"https://www.w3.org/TR/wai-aria-1.1/#aria-label"},"aria-label")," html property on the parent ",(0,r.mdx)("inlineCode",{parentName:"p"},"<FilterPills/>")," div element,  satisfying the minimum level of accessibility required to provide an ",(0,r.mdx)("a",{parentName:"p",href:"https://www.w3.org/TR/accname-1.1/#dfn-accessible-name"},"Accessible Name"),". However, the ",(0,r.mdx)("a",{parentName:"p",href:"https://www.w3.org/TR/wai-aria-1.1/#aria-label"},"aria-label")," is not visible to users. However, providing visible text to users is ",(0,r.mdx)("em",{parentName:"p"},"preferred")," for the majority of cases, instead using ",(0,r.mdx)("a",{parentName:"p",href:"https://www.w3.org/TR/wai-aria-1.1/#aria-labelledby"},"aria-labelledby")," to identify the element that labels each use of a filter pills group. ")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Using the ",(0,r.mdx)("inlineCode",{parentName:"p"},"ariaLabel")," prop alone should be reserved for special circumstances to ",(0,r.mdx)("a",{parentName:"p",href:"https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA14"},"provide an invisible label where a visible label cannont be used"),", such as filter pills being composed in a higher-order component where the visible items are purely decorative, the context is clearly understood, and correct use of the ",(0,r.mdx)("a",{parentName:"p",href:"https://www.w3.org/TR/wai-aria-1.1/#aria-label"},"aria-label")," html property is ensured. It is a required prop for the component purely as a method of accessibility minimum standard protection."))),(0,r.mdx)("h4",{id:"using-aria-labelledby-recommended"},"Using aria-labelledby ",(0,r.mdx)("em",{parentName:"h4"},"(recommended)")),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Filter Pills includes an optional prop called ",(0,r.mdx)("strong",{parentName:"p"},(0,r.mdx)("inlineCode",{parentName:"strong"},"ariaLabelled"))," which will add the ",(0,r.mdx)("a",{parentName:"p",href:"https://www.w3.org/TR/wai-aria-1.1/#aria-labelledby"},"aria-labelledby")," html property and accessibly connects a visible heading, text, or elements that labels the filter pills group. Using the ",(0,r.mdx)("strong",{parentName:"p"},(0,r.mdx)("inlineCode",{parentName:"strong"},"ariaLabelled"))," prop is the recommended method to provide an ",(0,r.mdx)("a",{parentName:"p",href:"https://www.w3.org/TR/accname-1.1/#dfn-accessible-name"},"Accessible Name")," in order to ",(0,r.mdx)("a",{parentName:"p",href:"https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA16"},"provide a name for user interface controls"),".")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Note: The visible label referenced by the ",(0,r.mdx)("strong",{parentName:"p"},(0,r.mdx)("inlineCode",{parentName:"strong"},"ariaLabelledBy"))," prop and the ",(0,r.mdx)("strong",{parentName:"p"},(0,r.mdx)("inlineCode",{parentName:"strong"},"ariaLabel"))," prop should be set to the same string values for fallback protection, even though when done properly ariaLabelledBy should override ariaLabel and the ",(0,r.mdx)("inlineCode",{parentName:"p"},'aria-labelledby="id"')," property will replace the ",(0,r.mdx)("inlineCode",{parentName:"p"},'aria-label="string"')," property in the compiled markup."))),(0,r.mdx)(o.Notice,{variant:"important",ariaLevel:"5",mdxType:"Notice"},(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Accessibility Guidance: Adding a Visible Label")),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"As a best practice, the Filter Pills component should be accompanied by a visible label, which may need to be styled and positioned according to a specific usage and should be done so by each consumer. Use the ",(0,r.mdx)("a",{parentName:"p",href:"/terra-framework/pull/2021/components/cerner-terra-framework-docs/pills/filter-pills"},"ariaLabelledBy")," prop in Filter Pills, and provide it the ",(0,r.mdx)("strong",{parentName:"p"},(0,r.mdx)("inlineCode",{parentName:"strong"},"id"))," of the visible label or heading, which will allow for the visible text to be accessibly connected to the pills. ")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"To see a working example of the code sample below, go to ",(0,r.mdx)("a",{parentName:"p",href:"/terra-framework/pull/2021/components/cerner-terra-framework-docs/pills/filter-pills"},"Usage Considerations: Adding a Visible Label"),":"))),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-diff"},"+   const patientEducationSearchTermsLabel = 'Patient Education Search Terms:';\n+   const patientEducationSearchTermsLabelID = 'patient-education-search-terms-label';\n\n    return (\n      <div className={cx('filter-group-panel')}>\n        <Text\n+         id={patientEducationSearchTermsLabelID}\n          className={cx('search-terms-label')}\n        >\n+         {patientEducationSearchTermsLabel}\n        </Text>\n        <FilterPills\n+         ariaLabelledBy={patientEducationSearchTermsLabelID}\n+         ariaLabel={patientEducationSearchTermsLabel}\n          onRemove={handleOnRemove}\n        >\n          {pills.map((pill, index) => (\n            <Pill\n              label={pill.label}\n              labelCategory={pill.labelCategory}\n              id={pill.id}\n              key={pill.id}\n              metaData={{ index }}\n            />\n          ))}\n        </FilterPills>\n      </div>\n    );\n"))),(0,r.mdx)(d.c,{newline:2,mdxType:"Whitespace"}),(0,r.mdx)("h3",{id:"content-considerations"},"Content Considerations"),(0,r.mdx)("p",null,"As authors create text, choosing words and phrases for Filter Pills — the content itself is also a very important factor in ensuring proper accessibility in addition to the coding techniques listed above."),(0,r.mdx)("hr",null),(0,r.mdx)("h4",{id:"filter-pills-group-label"},"Filter Pills group label"),(0,r.mdx)("p",null,"Each use of Filters Pills is a grouping of interactive elements, specifically a list, which ",(0,r.mdx)("a",{parentName:"p",href:"https://fae.disability.illinois.edu/rulesets/LIST_2/"},"requires a list label")," to meet the WCAG Success Criteria for ",(0,r.mdx)("a",{parentName:"p",href:"https://www.w3.org/TR/WCAG21/#headings-and-labels"},"2.4.6 Headings and Labels (Level AA)"),". In order to best meet this criteria, techniques that help to determine how to author appropriate labels are to make them:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},(0,r.mdx)("a",{parentName:"strong",href:"https://www.w3.org/WAI/WCAG21/Techniques/general/G131.html"},"Descriptive"))," = Labels that are descriptive inform the user as to the specific intent of the grouping of filters.")),(0,r.mdx)("blockquote",null,(0,r.mdx)("table",{parentName:"blockquote"},(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},(0,r.mdx)("em",{parentName:"th"},"Bad")),(0,r.mdx)("th",{parentName:"tr",align:null},(0,r.mdx)("em",{parentName:"th"},"Good")))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("strong",{parentName:"td"},"Search Terms:")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("strong",{parentName:"td"},"Patient Education Search Terms:")))))),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},(0,r.mdx)("a",{parentName:"strong",href:"https://fae.disability.illinois.edu/rulesets/CONTROL_10/"},"Unique"))," = Labels that are unique make it possible for people to understand the different purposes of ",(0,r.mdx)("a",{parentName:"li",href:"https://adrianroselli.com/2019/06/group-labels-do-not-guarantee-uniquity.html"},"repeated controls on the same page"),".")),(0,r.mdx)("blockquote",null,(0,r.mdx)("table",{parentName:"blockquote"},(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},(0,r.mdx)("em",{parentName:"th"},"Bad")),(0,r.mdx)("th",{parentName:"tr",align:null},(0,r.mdx)("em",{parentName:"th"},"Good")))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("strong",{parentName:"td"},"Applied Filters:")," ",(0,r.mdx)("sub",null,"(ex.1)")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("strong",{parentName:"td"},"Applied Color Filters:")," ",(0,r.mdx)("sub",null,"(ex.1)"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("strong",{parentName:"td"},"Applied Filters:")," ",(0,r.mdx)("sub",null,"(ex.2)")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("strong",{parentName:"td"},"Applied Size Filters:")," ",(0,r.mdx)("sub",null,"(ex.2)")))))),(0,r.mdx)(d.c,{mdxType:"Whitespace"}),(0,r.mdx)("h4",{id:"pill-label-and-pill-category"},"Pill Label and Pill Category"),(0,r.mdx)("p",null,"Similarly to the group of Filter Pills, each individual Pill also needs to follow similar techniques that make them descriptive and unique. In addition, UX Guidance recommends that:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Pill labels should be concise and contain a minimal number of words.")),(0,r.mdx)("blockquote",null,(0,r.mdx)("table",{parentName:"blockquote"},(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},(0,r.mdx)("em",{parentName:"th"},"Bad")),(0,r.mdx)("th",{parentName:"tr",align:null},(0,r.mdx)("em",{parentName:"th"},"Good")))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Swelling of the Left Arm"),(0,r.mdx)("td",{parentName:"tr",align:null},"Left Arm Swelling"))))),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Pill labels should follow Title Case capitalization rules when applied as filters."),(0,r.mdx)("li",{parentName:"ul"},"When a group of facet terms create unclear context using the attributes alone, include the facet categories for additional clarity, e.g. Department: Radiology"),(0,r.mdx)("li",{parentName:"ul"},"When the same filter label may be used in different categories or groupings, to ensure labels are unique, the Label Category should be added to the pill label display.")),(0,r.mdx)("blockquote",null,(0,r.mdx)("table",{parentName:"blockquote"},(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},(0,r.mdx)("em",{parentName:"th"},"Bad")),(0,r.mdx)("th",{parentName:"tr",align:null},(0,r.mdx)("em",{parentName:"th"},"Good")))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Swelling ",(0,r.mdx)("sub",null,"(ex.1)")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("strong",{parentName:"td"},"Brachial:")," Swelling ",(0,r.mdx)("sub",null,"(ex.1)"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Swelling ",(0,r.mdx)("sub",null,"(ex.2)")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("strong",{parentName:"td"},"Radial:")," Swelling ",(0,r.mdx)("sub",null,"(ex.2)")))))),(0,r.mdx)(d.c,{mdxType:"Whitespace"}),(0,r.mdx)("h4",{id:"additional-writing-resources-and-content-strategies"},"Additional Writing Resources and Content Strategies"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/tips/writing/"},"W3C Web Accessibility Initiative (WAI) » Tips: Writing for Web Accessibility")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://www.deque.com/blog/accessibility-strategies-for-your-content-team/"},"Deque » Blog: Accessibility Strategies for Your Content Team")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://usability.yale.edu/best-practices/organization-and-labeling-0"},"Yale University » Usability Best Practices: Organization and Labeling"))),(0,r.mdx)(d.c,{newline:4,mdxType:"Whitespace"}),(0,r.mdx)("h2",{id:"usability-expectations"},"Usability Expectations:"),(0,r.mdx)("h3",{id:"interaction-details"},"Interaction Details"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Filter Pills receives focus as a group by ",(0,r.mdx)("inlineCode",{parentName:"li"},"tab")," keypress, with arrow keys changing focus between individual pills within the group."),(0,r.mdx)("li",{parentName:"ul"},"Only one pill can be focused per set of Filter Pills."),(0,r.mdx)("li",{parentName:"ul"},"The remove button must not be a focusable element, but can be clickable."),(0,r.mdx)("li",{parentName:"ul"},"Removing a filter pill with a keyboard is performed with the ",(0,r.mdx)("inlineCode",{parentName:"li"},"Backspace")," or ",(0,r.mdx)("inlineCode",{parentName:"li"},"Delete")," key when a pill has focus.")),(0,r.mdx)(d.c,{mdxType:"Whitespace"}),(0,r.mdx)("h3",{id:"keyboard-navigation"},"Keyboard Navigation"),(0,r.mdx)("p",null,"Filter Pills will have the following keyboard navigation expectations:"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Key/Sequence"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("strong",{parentName:"td"},"Tab")),(0,r.mdx)("td",{parentName:"tr",align:null},"Initial focus goes to the first pill in the list, pressing tab again moves focus out of the Filter Pills group and to the next focusable element on the page.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("strong",{parentName:"td"},"Right Arrow")),(0,r.mdx)("td",{parentName:"tr",align:null},"When the Filter Pills group is in focus, pressing the right arrow key will move focus to the next pill in the list. When on the last pill in the list, focus remains on the last pill and does not cycle to the first pill.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("strong",{parentName:"td"},"Left Arrow")),(0,r.mdx)("td",{parentName:"tr",align:null},"When the Filter Pills group is in focus, pressing the left arrow key will move focus to the previous pill in the list. When on the first pill in the list, focus remains on the first pill and does not cycle to the last pill.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("strong",{parentName:"td"},"Backspace")," or ",(0,r.mdx)("strong",{parentName:"td"},"Delete")),(0,r.mdx)("td",{parentName:"tr",align:null},"Removes the pill that currently has focus. After removing, the focus should then be placed on the previous pill in the list. If no pills remain, then the Filter Pills group will be focused until the user navigates away. However, the Filter Pills group cannot be focused on again while no interactive pills remain in the Filter Pills group.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("strong",{parentName:"td"},"Space")," or ",(0,r.mdx)("strong",{parentName:"td"},"Enter")),(0,r.mdx)("td",{parentName:"tr",align:null},"If a pill is selectable via having a truncated label, pressing the Space or Enter key will show the popup to display the full pill label.")))),(0,r.mdx)(d.c,{newline:4,mdxType:"Whitespace"}),(0,r.mdx)("h2",{id:"concerns--hazards"},"Concerns & Hazards:"),(0,r.mdx)("h3",{id:"incorrect-use"},"Incorrect Use"),(0,r.mdx)("p",null,"Terra Filter Pills contains a specific reusable subcomponent ",(0,r.mdx)("inlineCode",{parentName:"p"},"<Pill/>"),". However, the inner 'Pill' subcomponent is not intended to be used alone, or\nindependently without being used properly as children of the ",(0,r.mdx)("inlineCode",{parentName:"p"},"<FilterPills/>")," parent container. If used as standalone, the ",(0,r.mdx)("inlineCode",{parentName:"p"},"<Pill/>")," offers no support for accessibility or correct behaviors."),(0,r.mdx)(o.Notice,{variant:"not-supported",ariaLevel:"4",mdxType:"Notice"},(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"<Pill/>")," subcomponent was created and tested with the express intent of always being used as children of the ",(0,r.mdx)("inlineCode",{parentName:"p"},"<FilterPills/>")," component."),(0,r.mdx)("p",{parentName:"blockquote"},"See ",(0,r.mdx)("a",{parentName:"p",href:"/terra-framework/pull/2021/components/cerner-terra-framework-docs/pills/filter-pills"},"Usage Considerations: Incorrect Use")," for an example of situations consumers should not intentionally create."))),(0,r.mdx)(d.c,{newline:4,mdxType:"Whitespace"}),(0,r.mdx)("h2",{id:"support-compliance"},"Support Compliance:"),(0,r.mdx)("h3",{id:"supported-features--technology"},"Supported Features & Technology"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Keyboard Interactions"),(0,r.mdx)("li",{parentName:"ul"},"JAWS Support with Chrome (PC) ",(0,r.mdx)("sup",null,"1")),(0,r.mdx)("li",{parentName:"ul"},"VoiceOver Support with Chrome, Safari (MAC)")),(0,r.mdx)("h3",{id:"partial-support--requiring-further-enhancement"},"Partial Support & Requiring Further Enhancement"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("sup",null,"[1]")," JAWS: improve tab/focus indication after pill removal"),(0,r.mdx)("li",{parentName:"ul"},"NVDA not tested (PC)"),(0,r.mdx)("li",{parentName:"ul"},"Mobile Touch Interactions with Screen Reader assistive technology"),(0,r.mdx)("li",{parentName:"ul"},"Speech Input Interactions with assistive technology"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://github.com/cerner/terra-framework/issues/new/choose"},"Report a problem with this component on ",(0,r.mdx)("strong",{parentName:"a"},"GitHub")))),(0,r.mdx)("p",null,(0,r.mdx)("em",{parentName:"p"},"For more information about Accessibility Support with Terra — go to ",(0,r.mdx)("a",{parentName:"em",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#accessibility-a11y"},"Component Standards: Accessibility (A11y)"),".")))}u.isMDXComponent=!0},78645:function(e,t,a){a.d(t,{k:function(){return r}});var n=a(11504),l=a(11416),r=function(e){var t=e.url;return n.createElement(l.c,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-pills",name:"@cerner/terra-pills",version:"1.18.0",url:t})}},336:function(e,t,a){var n=a(22411);t.c=void 0;var l=n(a(82048)),r=n(a(97676)),i=n(a(11504)),o=n(a(3268)),d=n(a(82084)),s=n(a(74824)),m=n(a(69552)),p=["newline"],u=s.default.bind(m.default),c={newline:o.default.oneOf([1,2,3,4,5,6,7,8])},h=function(e){var t=e.newline,a=(0,r.default)(e,p),n=(0,d.default)(u("whitespace","newline-".concat(t)),a.className);return i.default.createElement("div",(0,l.default)({},a,{className:n,"aria-hidden":"true"}))};h.propTypes=c,h.defaultProps={newline:1};t.c=h},58112:function(e,t,a){a.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},48728:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"Button-module__clinical-lowlight-theme___TyZWB","orion-fusion-theme":"Button-module__orion-fusion-theme___q-FcQ",button:"Button-module__button___QuCn2","is-active":"Button-module__is-active___Z8AuK"}},50987:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"Notice-module__clinical-lowlight-theme___aa5xV","orion-fusion-theme":"Notice-module__orion-fusion-theme___QAE-T",notice:"Notice-module__notice___GWkPA",children:"Notice-module__children___lDYsm",accessory:"Notice-module__accessory___wkLOG",title:"Notice-module__title___6H5tc","ux-recommendation":"Notice-module__ux-recommendation___N8BuK",caution:"Notice-module__caution___hPrVl",deprecation:"Notice-module__deprecation___g1drA",maintenance:"Notice-module__maintenance___kWLIZ",important:"Notice-module__important___p5DiF","not-supported":"Notice-module__not-supported___34bHd",paragraph:"Notice-module__paragraph___5h-w1",list:"Notice-module__list___M2Kxj"}},4620:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"Placeholder-module__clinical-lowlight-theme___Obm9K","orion-fusion-theme":"Placeholder-module__orion-fusion-theme___svHY+",placeholder:"Placeholder-module__placeholder___ZZDXd",inner:"Placeholder-module__inner___fJq9o",title:"Placeholder-module__title___teBSo"}},69552:function(e,t,a){a.r(t),t.default={whitespace:"Whitespace-module__whitespace___ZHva5","newline-1":"Whitespace-module__newline-1___aPEyq","newline-2":"Whitespace-module__newline-2___G+-sh","newline-3":"Whitespace-module__newline-3___4OJK-","newline-4":"Whitespace-module__newline-4___3Z0jB","newline-5":"Whitespace-module__newline-5___lBkK-","newline-6":"Whitespace-module__newline-6___FT7fE","newline-7":"Whitespace-module__newline-7___OMery","newline-8":"Whitespace-module__newline-8___vvoWz"}},45072:function(e,t,a){function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},n.apply(this,arguments)}a.d(t,{c:function(){return n}})},52822:function(e,t,a){function n(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}a.d(t,{c:function(){return n}})}}]);