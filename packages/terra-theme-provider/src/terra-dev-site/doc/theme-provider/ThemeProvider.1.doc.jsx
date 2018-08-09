import React from 'react';
import DocTemplate from 'terra-doc-template';
import { name } from '../../../../package.json';
import ReadMe from '../../../../docs/README.md';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import ThemeProviderSrc from '!raw-loader!../../../../src/ThemeProvider';

// Example Files
import DefaultThemeProvider from '../example/DefaultThemeProvider';
import DefaultThemeProviderSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/DefaultThemeProvider.jsx';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

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
