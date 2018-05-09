/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-hookshot/docs/README.md';
import { version } from 'terra-hookshot/package.json';
import IndexTemplate from 'terra-dev-site/src/IndexPageTemplate';

// Component Source
/* eslint-disable import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import HookshotSrc from '!raw-loader!terra-hookshot/src/Hookshot';
import HookshotContentSrc from '!raw-loader!terra-hookshot/src/HookshotContent';
import HookshotExampleSrc from '!raw-loader!./index-examples/HookshotExample';
import BoundedHookshotExampleSrc from '!raw-loader!./index-examples/BoundedHookshotExample';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */


// Example Files
import HookshotExample from './example/HookshotExample';
import BoundedHookshotExample from './example/BoundedHookshotExample';

const HookshotExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <h1 style={{ paddingBottom: '0.3em', borderBottom: '1px solid #eaecef' }}>Examples</h1>

    <IndexTemplate
      title="Window Bound Hookshot"
      example={<HookshotExample />}
      exampleSrc={HookshotExampleSrc}
    />

    <IndexTemplate
      title="Container Bound Hookshot"
      example={<BoundedHookshotExample />}
      exampleSrc={BoundedHookshotExampleSrc}
    />

    <PropsTable id="props-hookshot" src={HookshotSrc} componentName="Hookshot" />
    <PropsTable id="props-hookshot-content" src={HookshotContentSrc} componentName="Hookshot Content" />
  </div>
);

export default HookshotExamples;
