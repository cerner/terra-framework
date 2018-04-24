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
import CompletePrompt from './index-examples/CompletePrompt';
import CompletePromptSrc from '!raw-loader!./index-examples/CompletePrompt.jsx';
import CompletePromptWithLongMessage from './index-examples/CompletePromptWithLongMessage';
import CompletePromptWithLongMessageSrc from '!raw-loader!./index-examples/CompletePromptWithLongMessage.jsx';

const PromptExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />

    <h1 style={{ paddingBottom: '0.3em', borderBottom: '1px solid #eaecef' }}>Examples</h1>
    <IndexTemplate
      title="Prompt - Complete"
      example={<CompletePrompt />}
      exampleSrc={CompletePromptSrc}
    />
    <IndexTemplate
      title="Prompt - Complete with Long Message"
      example={<CompletePromptWithLongMessage />}
      exampleSrc={CompletePromptWithLongMessageSrc}
    />

    <PropsTable id="props" src={PromptSrc} />
  </div>
);

export default PromptExamples;
