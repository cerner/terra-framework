/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';

import ReadMe from '../../../docs/README.md';
import { version } from '../../../package.json';

// Component Source
import DisclosureManagerSrc from '!raw-loader!../../../src/DisclosureManager.jsx';

const DisclosureManagerExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />

    <h1 style={{ paddingBottom: '0.3em', borderBottom: '1px solid #eaecef' }}>Examples</h1>

    <PropsTable id="props-table" src={DisclosureManagerSrc} />
  </div>
);

export default DisclosureManagerExamples;
