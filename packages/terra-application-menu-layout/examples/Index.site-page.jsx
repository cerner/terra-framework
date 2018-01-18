/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import IndexTemplate from 'terra-site/lib/IndexPageTemplate';

import ReadMe from '../docs/README.md';
import { version } from '../package.json';

// Component Source
import MenuLayoutSrc from '!raw-loader!../src/ApplicationMenuLayout.jsx';

// Example File
import MenuWireframe from './index-examples/MenuWireframe';
import MenuWireframeSrc from '!raw-loader!../examples/index-examples/MenuWireframe.jsx';

const NavigationExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />

    <h1 style={{ paddingBottom: '0.3em', borderBottom: '1px solid #eaecef' }}>Examples</h1>
    <IndexTemplate
      title="Menu - Wireframe"
      example={<MenuWireframe />}
      exampleSrc={MenuWireframeSrc}
    />

    <PropsTable id="props-table" src={MenuLayoutSrc} />
  </div>
);

export default NavigationExamples;
