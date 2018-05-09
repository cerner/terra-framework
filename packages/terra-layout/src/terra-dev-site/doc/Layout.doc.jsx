/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import IndexTemplate from 'terra-dev-site/src/IndexPageTemplate';

import ReadMe from '../../../docs/README.md';
import { version } from '../../../package.json';

// Component Source
import LayoutSrc from '!raw-loader!../../../src/Layout.jsx';

// Example Files
import LayoutStandard from './example/LayoutStandard';
import LayoutStandardSrc from '!raw-loader!../../../src/terra-dev-site/doc/example/LayoutStandard.jsx';
import LayoutMenuDisabled from './example/LayoutMenuDisabled';
import LayoutMenuDisabledSrc from '!raw-loader!../../../src/terra-dev-site/doc/example/LayoutMenuDisabled.jsx';
import LayoutNoHeader from './example/LayoutNoHeader';
import LayoutNoHeaderSrc from '!raw-loader!../../../src/terra-dev-site/doc/example/LayoutNoHeader.jsx';

const LayoutExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />

    <h1 style={{ paddingBottom: '0.3em', borderBottom: '1px solid #eaecef' }}>Examples</h1>
    <IndexTemplate
      title="Layout - Standard"
      example={<LayoutStandard />}
      exampleSrc={LayoutStandardSrc}
    />
    <IndexTemplate
      title="Layout - No Menu"
      example={<LayoutMenuDisabled />}
      exampleSrc={LayoutMenuDisabledSrc}
    />
    <IndexTemplate
      title="Layout - No Header"
      example={<LayoutNoHeader />}
      exampleSrc={LayoutNoHeaderSrc}
    />

    <PropsTable id="props-table" src={LayoutSrc} />
  </div>
);

export default LayoutExamples;
