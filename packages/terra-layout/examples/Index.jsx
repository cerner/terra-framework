/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import IndexExample from './IndexExampleTemplate';

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

const NavigationExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />

    <h1 style={{ paddingBottom: '0.3em', borderBottom: '1px solid #eaecef' }}>Examples</h1>
    <IndexExample
      title="Layout - Standard"
      example={<LayoutStandard />}
      exampleSrc={LayoutStandardSrc}
    />
    <IndexExample
      title="Layout - No Menu"
      example={<LayoutMenuDisabled />}
      exampleSrc={LayoutMenuDisabledSrc}
    />

    <IndexExample
      title="Layout - No Header"
      example={<LayoutNoHeader />}
      exampleSrc={LayoutNoHeaderSrc}
    />

    <IndexExample
      title="Layout -  Long Text"
      example={<LayoutLongText />}
      exampleSrc={LayoutLongTextSrc}
    />

    <PropsTable id="props-table" src={LayoutSrc} />
  </div>
);

export default NavigationExamples;
