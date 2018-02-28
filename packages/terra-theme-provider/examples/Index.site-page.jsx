/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import IndexTemplate from 'terra-dev-site/src/IndexPageTemplate';

import ReadMe from '../docs/README.md';
import { version } from '../package.json';

// Component Source
import ThemeProviderSrc from '!raw-loader!../src/ThemeProvider';

// Example Files
import DefaultThemeProvider from './index-examples/DefaultThemeProvider';
import DefaultThemeProviderSrc from '!raw-loader!./index-examples/DefaultThemeProvider.jsx';

const ThemeProviderExample = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <h1 style={{ paddingBottom: '0.3em', borderBottom: '1px solid #eaecef' }}>Examples</h1>
    <IndexTemplate
      title="Example Theme Provider"
      example={<DefaultThemeProvider />}
      exampleSrc={DefaultThemeProviderSrc}
    />

    <PropsTable id="props-table" src={ThemeProviderSrc} />
  </div>
);

export default ThemeProviderExample;
