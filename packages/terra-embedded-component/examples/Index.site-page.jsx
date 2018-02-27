/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
// import IndexTemplate from 'terra-dev-site/lib/IndexPageTemplate';

import ReadMe from '../docs/README.md';
import { version } from '../package.json';

// Component Source
import EmbeddedComponentSrc from '!raw-loader!../src/EmbeddedComponent.jsx';

// Example File

const EmbeddedComponentExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />

    <h1 style={{ paddingBottom: '0.3em', borderBottom: '1px solid #eaecef' }}>Examples</h1>

    <PropsTable id="props-table" src={EmbeddedComponentSrc} />
  </div>
);

export default EmbeddedComponentExamples;
