/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import { name } from '../../../package.json';
import ReadMe from '../../../docs/README.md';

// Component Source
import ThemeProviderSrc from '!raw-loader!../../../src/ThemeProvider';

// Example Files
import DefaultThemeProvider from './example/DefaultThemeProvider';
import DefaultThemeProviderSrc from '!raw-loader!./example/DefaultThemeProvider.jsx';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-framework/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Example Theme Provider',
        example: <DefaultThemeProvider />,
        source: DefaultThemeProviderSrc,
      },
    ]}
    propsTables={[
      {
        componentSrc: ThemeProviderSrc,
      },
    ]}
  />
);

export default DocPage;
