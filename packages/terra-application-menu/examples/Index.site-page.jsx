/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import IndexTemplate from 'terra-site/src/IndexPageTemplate';

import ReadMe from '../docs/README.md';
import { version } from '../package.json';

// Component Source
import MenuSrc from '!raw-loader!../src/ApplicationMenu.jsx';

// Example File
import MenuExample from './index-examples/ApplicationMenuExample';
import MenuExampleSrc from '!raw-loader!./index-examples/ApplicationMenuExample.jsx';

const MenuExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />

    <h1 style={{ paddingBottom: '0.3em', borderBottom: '1px solid #eaecef' }}>Examples</h1>
    <IndexTemplate
      title="Header - Wireframe"
      example={<MenuExample />}
      exampleSrc={MenuExampleSrc}
    />

    <PropsTable id="props-table" src={MenuSrc} />
  </div>
);

export default MenuExamples;
