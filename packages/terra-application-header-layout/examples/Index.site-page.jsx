/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import IndexTemplate from 'terra-dev-site/src/IndexPageTemplate';

import ReadMe from '../docs/README.md';
import { version } from '../package.json';

// Component Source
import HeaderLayoutSrc from '!raw-loader!../src/ApplicationHeaderLayout.jsx';

// Example File
import HeaderWireframe from './index-examples/HeaderWireframe';
import HeaderWireframeSrc from '!raw-loader!./index-examples/HeaderWireframe.jsx';

const HeaderLayoutExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />

    <h1 style={{ paddingBottom: '0.3em', borderBottom: '1px solid #eaecef' }}>Examples</h1>
    <IndexTemplate
      title="Header - Wireframe"
      example={<HeaderWireframe />}
      exampleSrc={HeaderWireframeSrc}
    />

    <PropsTable id="props-table" src={HeaderLayoutSrc} />
  </div>
);

export default HeaderLayoutExamples;
