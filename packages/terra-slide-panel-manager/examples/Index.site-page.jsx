/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import IndexTemplate from 'terra-site/src/IndexPageTemplate';

import ReadMe from '../docs/README.md';
import { version } from '../package.json';

// Component Source
import SlidePanelManagerSrc from '!raw-loader!../src/SlidePanelManager.jsx';

// Examples
import SlidePanelManagerExample from './index-examples/SlidePanelManagerExample';

const SlidePanelManagerExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <h1 style={{ paddingBottom: '0.3em', borderBottom: '1px solid #eaecef' }}>Examples</h1>
    <h3>Squish Example</h3>
    <SlidePanelManagerExample behavior="squish" />
    <br />
    <h3>Overlay Example</h3>
    <SlidePanelManagerExample behavior="overlay" />
    <br />
    <PropsTable id="props-table" src={SlidePanelManagerSrc} />
  </div>
);

export default SlidePanelManagerExamples;
