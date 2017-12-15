/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions  */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import IndexExample from './IndexExampleTemplate';

import ReadMe from '../docs/README.md';
import { version } from '../package.json';

// Component Source
import NavigationLayoutSrc from '!raw-loader!../src/NavigationLayout.jsx';

// Example Files
import NavigationLayoutStandard from './index-examples/NavigationLayoutStandard';
import NavigationLayoutStandardSrc from '!raw-loader!./index-examples/NavigationLayoutStandard.jsx';

const NavigationLayoutExamples = () => (
  <div>
    <div id="version">
      Version: {version}
      <a style={{ float: 'right' }} href={'https://github.com/cerner/terra-framework/blob/master/packages/terra-layout/CHANGELOG.md'}>ChangeLog</a>
    </div>
    <Markdown id="readme" src={ReadMe} />

    <h1 style={{ paddingBottom: '0.3em', borderBottom: '1px solid #eaecef' }}>Examples</h1>
    <IndexExample
      title="Example Navigation Layout"
      example={<NavigationLayoutStandard />}
      exampleSrc={NavigationLayoutStandardSrc}
    />

    <PropsTable id="props-table" src={NavigationLayoutSrc} />
  </div>
);

export default NavigationLayoutExamples;
