"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[8762],{22863:function(e,a,l){var m=l(64836);a.Z=void 0;var d=m(l(67294)),n=m(l(45697)),t=m(l(47166)),r=m(l(17422)),i=t.default.bind(r.default),u={name:n.default.string.isRequired,src:n.default.string,url:n.default.string,version:n.default.string.isRequired},p=function(e){var a=e.src,l=e.name,m=e.url,n=e.version,t=d.default.createElement("a",{className:i("badge"),href:m||"https://www.npmjs.org/package/".concat(l,"/v/").concat(n)},d.default.createElement("span",{className:i("badge-name")},m?"package":"npm"),d.default.createElement("span",{className:i("badge-version")},"v".concat(n))),r=a?d.default.createElement("a",{className:i("badge"),href:a},d.default.createElement("span",{className:i("badge-name")},"github"),d.default.createElement("span",{className:i("badge-version")},"source")):void 0;return d.default.createElement("div",{className:i("badge-container")},t,r)};p.propTypes=u;var x=p;a.Z=x},8762:function(e,a,l){l.r(a),l.d(a,{default:function(){return s}});var m=l(87462),d=l(44925),n=(l(67294),l(81254)),t=l(63865),r=["components"],i={},u="wrapper";function p(e){var a=e.components,l=(0,d.Z)(e,r);return(0,n.mdx)(u,(0,m.Z)({},i,l,{components:a,mdxType:"MDXLayout"}),(0,n.mdx)("h1",{id:"changelog"},"Changelog"),(0,n.mdx)("h2",{id:"unreleased"},"Unreleased"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Changed",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Locked ",(0,n.mdx)("inlineCode",{parentName:"li"},"uuid")," version to ",(0,n.mdx)("inlineCode",{parentName:"li"},"8.2.0"),".")))),(0,n.mdx)("h2",{id:"3400---june-5-2023"},"3.40.0 - (June 5, 2023)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},"Added"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Added missing translations."))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},"Fixed"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Fixed a11y bug where multiple slide panels shared same ID for visually hidden text. (This fix requires updates to Jest snapshots and requires UUID to be mocked on consuming applications)"))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},"Changed"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Updated ",(0,n.mdx)("inlineCode",{parentName:"li"},"uuid")," to ",(0,n.mdx)("inlineCode",{parentName:"li"},"v8")," for consistency with other components.")))),(0,n.mdx)("h2",{id:"3390---april-27-2023"},"3.39.0 - (April 27, 2023)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},"Added"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Added roles and visually hidden text to slide panel."),(0,n.mdx)("li",{parentName:"ul"},"Added built-in text for screen readers to communicate that a slide panel may be present and interactable."),(0,n.mdx)("li",{parentName:"ul"},"Added internationalization for built-in ",(0,n.mdx)("inlineCode",{parentName:"li"},"aria-describedby")," text."))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},"Changed"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Updated main content to not be focusable when panel content is fullscreen.")))),(0,n.mdx)("h2",{id:"3381---april-12-2023"},"3.38.1 - (April 12, 2023)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Fixed",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Fixed bug where ",(0,n.mdx)("inlineCode",{parentName:"li"},"terra-slide-panel")," crashes when open by default on load.")))),(0,n.mdx)("h2",{id:"3380---march-29-2023"},"3.38.0 - (March 29, 2023)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Changed",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Updated to focus originating element when slide panel is closed.")))),(0,n.mdx)("h2",{id:"3370---february-14-2023"},"3.37.0 - (February 14, 2023)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Changed",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Updated WDIO screenshots due to webpack-config-terra and\nterra-functional-testing upgrade.")))),(0,n.mdx)("h2",{id:"3360---march-15-2022"},"3.36.0 - (March 15, 2022)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Added",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Migrate docs to terra-framework-docs.")))),(0,n.mdx)("h2",{id:"3350---september-20-2021"},"3.35.0 - (September 20, 2021)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Changed",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Updated WDIO screenshots due to webpack-config-terra sass upgrade."),(0,n.mdx)("li",{parentName:"ul"},"Updated WDIO snapshots due to terra-functional-testing v2 upgrade.")))),(0,n.mdx)("h2",{id:"3340---june-8-2021"},"3.34.0 - (June 8, 2021)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Changed",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),(0,n.mdx)("h2",{id:"3330---april-6-2021"},"3.33.0 - (April 6, 2021)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Changed",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Updated Jest command")))),(0,n.mdx)("h2",{id:"3320---march-9-2021"},"3.32.0 - (March 9, 2021)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Changed",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Updated to terra-functional-testing")))),(0,n.mdx)("h2",{id:"3310---january-5-2021"},"3.31.0 - (January 5, 2021)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Fixed",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Fixed broken links in documentation.")))),(0,n.mdx)("h2",{id:"3300---december-8-2020"},"3.30.0 - (December 8, 2020)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Changed",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Update wdio tests to remove deprecated Terra.it helpers")))),(0,n.mdx)("h2",{id:"3290---august-4-2020"},"3.29.0 - (August 4, 2020)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Changed",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Updated Changelog format")))),(0,n.mdx)("h2",{id:"3280---july-14-2020"},"3.28.0 - (July 14, 2020)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Changed",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"updated ",(0,n.mdx)("inlineCode",{parentName:"li"},"master")," references to ",(0,n.mdx)("inlineCode",{parentName:"li"},"main"),"."),(0,n.mdx)("li",{parentName:"ul"},"Minor file changes to comply with eslint config")))),(0,n.mdx)("h2",{id:"3270---june-2-2020"},"3.27.0 - (June 2, 2020)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Changed",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Apply themes by context and directly include packaged themes.")))),(0,n.mdx)("h2",{id:"3260---april-28-2020"},"3.26.0 - (April 28, 2020)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},"Added"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Added ",(0,n.mdx)("inlineCode",{parentName:"li"},"directory")," as a sub attribute to the ",(0,n.mdx)("inlineCode",{parentName:"li"},"repository")," attribute in package.json"))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},"Changed"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Update wdio test configuration to use root wdio config"))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},"Removed"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},'Removed "View Component Source Code" from docs in favour of source code badge')))),(0,n.mdx)("h2",{id:"3250---march-31-2020"},"3.25.0 - (March 31, 2020)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Added",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Added clinical-lowlight-theme wdio screenshots")))),(0,n.mdx)("h2",{id:"3240---march-17-2020"},"3.24.0 - (March 17, 2020)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},"Changed"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Update docs to use MDX syntax"))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},"Fixed"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Added key to main content and panel content to prevent unmounting when changing panel position")))),(0,n.mdx)("h2",{id:"3230---february-18-2020"},"3.23.0 - (February 18, 2020)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Added",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Added clinical-lowlight-theme theming files")))),(0,n.mdx)("h2",{id:"3220---january-28-2020"},"3.22.0 - (January 28, 2020)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Changed",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Update copyright to include 2020")))),(0,n.mdx)("h2",{id:"3210---december-10-2019"},"3.21.0 - (December 10, 2019)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Added",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Added orion-fusion-theme and generated the respective reference wdio screenshots.")))),(0,n.mdx)("h2",{id:"3200---november-7-2019"},"3.20.0 - (November 7, 2019)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Changed",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Resolved lint warnings for multiple empty lines")))),(0,n.mdx)("h2",{id:"3190---october-30-2019"},"3.19.0 - (October 30, 2019)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Added",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Added ",(0,n.mdx)("inlineCode",{parentName:"li"},"aria-label"),' to the "Main" and "Panel" containers.'),(0,n.mdx)("li",{parentName:"ul"},"Added ",(0,n.mdx)("inlineCode",{parentName:"li"},"mainAriaLabel")," and ",(0,n.mdx)("inlineCode",{parentName:"li"},"panelAriaLabel")," as optional props.")))),(0,n.mdx)("h2",{id:"3180---october-16-2019"},"3.18.0 - (October 16, 2019)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Changed",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Minor dependency updates")))),(0,n.mdx)("h2",{id:"3170---october-3-2019"},"3.17.0 - (October 3, 2019)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Changed",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Minor dependency updates")))),(0,n.mdx)("h2",{id:"3160---september-26-2019"},"3.16.0 - (September 26, 2019)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Changed",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Minor dependency updates")))),(0,n.mdx)("h2",{id:"3150---september-19-2019"},"3.15.0 - (September 19, 2019)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Changed",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Removed ",(0,n.mdx)("inlineCode",{parentName:"li"},"details")," tag from doc-site."),(0,n.mdx)("li",{parentName:"ul"},"Doc site example module import syntax modified to use package.json name resolution")))),(0,n.mdx)("h2",{id:"3140---september-6-2019"},"3.14.0 - (September 6, 2019)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Changed",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Cleaned up imports in examples and test files")))),(0,n.mdx)("h2",{id:"3130---august-21-2019"},"3.13.0 - (August 21, 2019)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Changed",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Cleaned up ESLint comments")))),(0,n.mdx)("h2",{id:"3120---august-14-2019"},"3.12.0 - (August 14, 2019)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Changed",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"updated package.json test scripts")))),(0,n.mdx)("h2",{id:"3110---july-30-2019"},"3.11.0 - (July 30, 2019)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Removed",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Removed DEPENDENCIES.md file")))),(0,n.mdx)("h2",{id:"3100---july-16-2019"},"3.10.0 - (July 16, 2019)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Added",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Added documentation on required peerDependencies")))),(0,n.mdx)("h2",{id:"390---july-10-2019"},"3.9.0 - (July 10, 2019)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Changed",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),(0,n.mdx)("h2",{id:"380---july-2-2019"},"3.8.0 - (July 2, 2019)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Changed",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Renamed test and example SCSS files to end with ",(0,n.mdx)("inlineCode",{parentName:"li"},".module.scss")," extension")))),(0,n.mdx)("h2",{id:"370---june-19-2019"},"3.7.0 - (June 19, 2019)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},"Removed"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Removed '-ms-overflow-style' style"))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},"Fixed"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Corrected to allow Slide Panel's DOM order to flex based on the 'panelPosition' prop.")))),(0,n.mdx)("h2",{id:"360---june-12-2019"},"3.6.0 - (June 12, 2019)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},"Removed"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Removed node_modules from .npmignore"))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},"Changed"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Removed all inline styles and implemented the same styles using external css."))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},"Changed"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Update tests for terra-toolkit v5 and terra-dev-site v5 changes"),(0,n.mdx)("li",{parentName:"ul"},"Update wdio specs to use Terra.describeViewports")))),(0,n.mdx)("h2",{id:"350---april-24-2019"},"3.5.0 - (April 24, 2019)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Changed",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Moved packages we use solely in doc examples and tests to devDependencies")))),(0,n.mdx)("h2",{id:"340---april-18-2019"},"3.4.0 - (April 18, 2019)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},"Changed"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Remove transition listener logic. Replace with componentDidUpdate comparison."))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},"Fixed"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Set outline to none on main + panel.")))),(0,n.mdx)("h2",{id:"330---april-9-2019"},"3.3.0 - (April 9, 2019)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Fixed",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Setting Focus to slide panel's panel content on open.")))),(0,n.mdx)("h2",{id:"320---march-26-2019"},"3.2.0 - (March 26, 2019)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},"Changed"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Update react/react-dom peer-dependency to latest stable minor release"))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},"Removed"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Removed peer dependency on terra-base"),(0,n.mdx)("li",{parentName:"ul"},"Removed baseStyles import from terra-base"))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},"Removed"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Removed peer dependency on terra-base"),(0,n.mdx)("li",{parentName:"ul"},"Removed baseStyles import from terra-base")))),(0,n.mdx)("h2",{id:"310---february-5-2019"},"3.1.0 - (February 5, 2019)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Changed",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Minor dependency update")))),(0,n.mdx)("h2",{id:"300---january-25-2019"},"3.0.0 - (January 25, 2019)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Breaking Change",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Updated variable names to match new naming standard"),(0,n.mdx)("li",{parentName:"ul"},"Added new variables for css theming"),(0,n.mdx)("li",{parentName:"ul"},"Removed variables for css theming"),(0,n.mdx)("li",{parentName:"ul"},"Updated terra-core dependencies")))),(0,n.mdx)("h2",{id:"2250---january-5-2019"},"2.25.0 - (January 5, 2019)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Changed",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Minor dependency update")))),(0,n.mdx)("h2",{id:"2240---january-2-2019"},"2.24.0 - (January 2, 2019)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Changed",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Minor dependency update")))),(0,n.mdx)("h2",{id:"2230---december-5-2018"},"2.23.0 - (December 5, 2018)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Changed",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Minor dependency update")))),(0,n.mdx)("h2",{id:"2220---december-3-2018"},"2.22.0 - (December 3, 2018)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},"Changed"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Wdio tests changed to use themeCombinationOfCustomProperties"))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},"Fixed"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Slide panel's aria-hidden value when the panel is toggled")))),(0,n.mdx)("h2",{id:"2210---november-15-2018"},"2.21.0 - (November 15, 2018)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Changed",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Minor dependency update")))),(0,n.mdx)("h2",{id:"2200---october-24-2018"},"2.20.0 - (October 24, 2018)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Changed",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Updated the controlled slidepanel example's focus management")))),(0,n.mdx)("h2",{id:"2190---october-16-2018"},"2.19.0 - (October 16, 2018)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Changed",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Reordered DOM structure to change tab order")))),(0,n.mdx)("h2",{id:"2180---october-8-2018"},"2.18.0 - (October 8, 2018)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Changed",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Upgrade focus-trap-react version to ^4.0.1")))),(0,n.mdx)("h2",{id:"2170---september-25-2018"},"2.17.0 - (September 25, 2018)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Changed",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Minor dependency bump")))),(0,n.mdx)("h2",{id:"2160---september-5-2018"},"2.16.0 - (September 5, 2018)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Changed",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Bumped minimum react peerDependency version from ^16.2.0 to ^16.4.2"),(0,n.mdx)("li",{parentName:"ul"},"Bumped minimum react-dom peerDependency version from ^16.2.0 to ^16.4.2")))),(0,n.mdx)("h2",{id:"2150---august-30-2018"},"2.15.0 - (August 30, 2018)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Changed",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Formatting changes per eslint v5 update")))),(0,n.mdx)("h2",{id:"2140---august-13-2018"},"2.14.0 - (August 13, 2018)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},"Changed"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Formatting changes per eslint v4 update"))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},"Fixed"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Lint errors regarding file path resolution")))),(0,n.mdx)("h2",{id:"2130---july-25-2018"},"2.13.0 - (July 25, 2018)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Changed",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Add .module extension to SCSS file(s)")))),(0,n.mdx)("h2",{id:"2120---july-10-2018"},"2.12.0 - (July 10, 2018)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Changed",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Clean up dependencies")))),(0,n.mdx)("h2",{id:"2110---july-3-2018"},"2.11.0 - (July 3, 2018)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Added",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Change logs to documentation on terra-dev-site")))),(0,n.mdx)("h2",{id:"2100---june-29-2018"},"2.10.0 - (June 29, 2018)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Changed",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Minor dependency updates")))),(0,n.mdx)("h2",{id:"290---june-12-2018"},"2.9.0 - (June 12, 2018)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Changed",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Minor dependency updates")))),(0,n.mdx)("h2",{id:"280---may-30-2018"},"2.8.0 - (May 30, 2018)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Changed",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Moved examples to src")))),(0,n.mdx)("h2",{id:"270---may-22-2018"},"2.7.0 - (May 22, 2018)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Changed",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Minor dependency updates")))),(0,n.mdx)("h2",{id:"260---april-30-2018"},"2.6.0 - (April 30, 2018)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Changed",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Minor dependency updates"),(0,n.mdx)("li",{parentName:"ul"},"Do not release snapshots to npm")))),(0,n.mdx)("h2",{id:"250---april-13-2018"},"2.5.0 - (April 13, 2018)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Changed",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Minor dependency updates")))),(0,n.mdx)("h2",{id:"240---april-10-2018"},"2.4.0 - (April 10, 2018)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Changed",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Allow Slide Panel Background Color to be Themeable")))),(0,n.mdx)("h2",{id:"230---april-3-2018"},"2.3.0 - (April 3, 2018)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Changed",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Miragte package to terra-framework")))),(0,n.mdx)("h2",{id:"220---march-6-2018"},"2.2.0 - (March 6, 2018)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Removed",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Removed props-table script from package.json")))),(0,n.mdx)("h2",{id:"210---february-26-2018"},"2.1.0 - (February 26, 2018)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},"Fixed"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Offscreen tab access in the panel removed"))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},"Changed"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Updated aria hidden to use the string entry")))),(0,n.mdx)("h2",{id:"201---february-13-2018"},"2.0.1 - (February 13, 2018)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Changed",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Updated peerDependencies")))),(0,n.mdx)("h2",{id:"200---february-12-2018"},"2.0.0 - (February 12, 2018)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},"Changed"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Updated to use React 16"))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},"Fixed"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"CSS bug in calculated squish behavior")))),(0,n.mdx)("h2",{id:"1160---february-1-2018"},"1.16.0 - (February 1, 2018)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Changed",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Minor version bump")))),(0,n.mdx)("h2",{id:"1150---january-18-2018"},"1.15.0 - (January 18, 2018)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Changed",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Minor version bump")))),(0,n.mdx)("h2",{id:"1140---january-5-2018"},"1.14.0 - (January 5, 2018)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Changed",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Minor version bump")))),(0,n.mdx)("h2",{id:"1130---november-28-2017"},"1.13.0 - (November 28, 2017)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Changed",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Minor version bump")))),(0,n.mdx)("h2",{id:"1120---november-16-2017"},"1.12.0 - (November 16, 2017)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Changed",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Minor version bump")))),(0,n.mdx)("h2",{id:"1110---october-6-2017"},"1.11.0 - (October 6, 2017)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Changed",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Minor version bump")))),(0,n.mdx)("h2",{id:"1100---september-26-2017"},"1.10.0 - (September 26, 2017)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Changed",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Minor version bump")))),(0,n.mdx)("h2",{id:"190---september-19-2017"},"1.9.0 - (September 19, 2017)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Changed",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Minor version bump")))),(0,n.mdx)("h2",{id:"180---september-12-2017"},"1.8.0 - (September 12, 2017)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Changed",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Minor version bump")))),(0,n.mdx)("h2",{id:"170---september-7-2017"},"1.7.0 - (September 7, 2017)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Changed",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Minor version bump")))),(0,n.mdx)("h2",{id:"160---september-5-2017"},"1.6.0 - (September 5, 2017)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Changed",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Update nightwatch tests and test scripts.")))),(0,n.mdx)("h2",{id:"150---august-31-2017"},"1.5.0 - (August 31, 2017)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Changed",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Minor version bump")))),(0,n.mdx)("h2",{id:"140---august-15-2017"},"1.4.0 - (August 15, 2017)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Changed",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Switched CSS custom properties usage to inline fallback syntax")))),(0,n.mdx)("h2",{id:"130---august-8-2017"},"1.3.0 - (August 8, 2017)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Changed",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Minor version bump")))),(0,n.mdx)("h2",{id:"120---august-1-2017"},"1.2.0 - (August 1, 2017)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Changed",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Converted component to use CSS modules")))),(0,n.mdx)("h2",{id:"110---july-18-2017"},"1.1.0 - (July 18, 2017)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},"Changed"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Updated nightwatch test scripts"))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},"Removed"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Removed nightwatch.config file")))),(0,n.mdx)("h2",{id:"100---june-28-2017"},"1.0.0 - (June 28, 2017)"),(0,n.mdx)("p",null,"Initial stable release"))}p.isMDXComponent=!0;var x=["components"],o={},N="wrapper";function s(e){var a=e.components,l=(0,d.Z)(e,x);return(0,n.mdx)(N,(0,m.Z)({},o,l,{components:a,mdxType:"MDXLayout"}),(0,n.mdx)(t.C,{mdxType:"Badge"}),(0,n.mdx)(p,{mdxType:"ChangeLog"}))}s.isMDXComponent=!0},63865:function(e,a,l){l.d(a,{C:function(){return n}});var m=l(67294),d=l(22863),n=function(e){var a=e.url;return m.createElement(d.Z,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-slide-panel",name:"terra-slide-panel",version:"3.40.0",url:a})}},17422:function(e,a,l){l.r(a),a.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},87462:function(e,a,l){function m(){return m=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var l=arguments[a];for(var m in l)Object.prototype.hasOwnProperty.call(l,m)&&(e[m]=l[m])}return e},m.apply(this,arguments)}l.d(a,{Z:function(){return m}})},44925:function(e,a,l){function m(e,a){if(null==e)return{};var l,m,d=function(e,a){if(null==e)return{};var l,m,d={},n=Object.keys(e);for(m=0;m<n.length;m++)l=n[m],a.indexOf(l)>=0||(d[l]=e[l]);return d}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(m=0;m<n.length;m++)l=n[m],a.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(d[l]=e[l])}return d}l.d(a,{Z:function(){return m}})}}]);