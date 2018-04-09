/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import IndexTemplate from 'terra-dev-site/src/IndexPageTemplate';

import ReadMe from '../docs/README.md';
import { version } from '../package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import PromptSrc from '!raw-loader!../src/Prompt';

// Example Files
import DefaultPrompt from './index-examples/DefaultPrompt';
import DefaultPromptSrc from '!raw-loader!./index-examples/DefaultPrompt.jsx';

const PromptExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />

    <h1 style={{ paddingBottom: '0.3em', borderBottom: '1px solid #eaecef' }}>Examples</h1>
    <IndexTemplate
      title="Prompt - Default"
      example={<DefaultPrompt />}
      exampleSrc={DefaultPromptSrc}
    />

    <PropsTable id="props" src={PromptSrc} />
  </div>
);

export default PromptExamples;
