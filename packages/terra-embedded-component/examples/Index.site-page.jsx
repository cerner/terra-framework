/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import IndexTemplate from 'terra-site/src/IndexPageTemplate';

import ReadMe from '../docs/README.md';
import { version } from '../package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import EmbeddedComponentSrc from '!raw-loader!../src/EmbeddedComponent';

// Example Files
import DefaultEmbeddedComponent from './index-examples/DefaultEmbeddedComponent';
import DefaultEmbeddedComponentSrc from '!raw-loader!./index-examples/DefaultEmbeddedComponent.jsx';

const EmbeddedComponentExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />

    <h1 style={{ paddingBottom: '0.3em', borderBottom: '1px solid #eaecef' }}>Examples</h1>
    <IndexTemplate
      title="EmbeddedComponent - Default"
      example={<DefaultEmbeddedComponent />}
      exampleSrc={DefaultEmbeddedComponentSrc}
    />

    <PropsTable id="props" src={EmbeddedComponentSrc} />
  </div>
);

export default EmbeddedComponentExamples;
