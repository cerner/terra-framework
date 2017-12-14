/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';

import ReadMe from '../docs/README.md';
import { version } from '../package.json';

// Component Source
import LayoutSrc from '!raw-loader!../src/Layout.jsx';

// Example Files
import LayoutStandard from './index-examples/LayoutStandard';
import LayoutStandardSrc from '!raw-loader!./index-examples/LayoutStandard.jsx';
import LayoutMenuDisabled from './index-examples/LayoutMenuDisabled';
import LayoutMenuDisabledSrc from '!raw-loader!./index-examples/LayoutMenuDisabled.jsx';
import LayoutLongText from './index-examples/LayoutLongText';
import LayoutLongTextSrc from '!raw-loader!./index-examples/LayoutLongText.jsx';
import LayoutNoHeader from './index-examples/LayoutNoHeader';
import LayoutNoHeaderSrc from '!raw-loader!./index-examples/LayoutNoHeader.jsx';

const codeIndicator = '```';

const NavigationExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <h2>Layout - Standard</h2>
    <LayoutStandard id="standard-example" />
    <Markdown id="standard-code" src={`${codeIndicator}jsx\n${LayoutStandardSrc}${codeIndicator}`} />
    <h2>Layout - No Menu</h2>
    <LayoutMenuDisabled id="no-menu-example" />
    <Markdown id="no-menu-code" src={`${codeIndicator}jsx\n${LayoutMenuDisabledSrc}${codeIndicator}`} />
    <h2>Layout - No Header</h2>
    <LayoutNoHeader id="no-header-example" />
    <Markdown id="no-header-code" src={`${codeIndicator}jsx\n${LayoutNoHeaderSrc}${codeIndicator}`} />
    <h2>Layout - Long Text</h2>
    <LayoutLongText id="long-text-example" />
    <Markdown id="long-text-code" src={`${codeIndicator}jsx\n${LayoutLongTextSrc}${codeIndicator}`} />
    <PropsTable id="props-layout" src={LayoutSrc} />
  </div>
);

export default NavigationExamples;
