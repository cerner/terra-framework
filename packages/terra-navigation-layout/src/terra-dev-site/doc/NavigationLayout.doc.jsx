/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions  */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import { name } from '../package.json';
import ReadMe from '../docs/README.md';

// Component Source
import NavigationLayoutSrc from '!raw-loader!../src/NavigationLayout.jsx';

// Example Files
import NavigationLayoutStandard from './index-examples/NavigationLayoutStandard';
import NavigationLayoutStandardSrc from '!raw-loader!./index-examples/NavigationLayoutStandard.jsx';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-framework/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Example Navigation Layout',
        example: <NavigationLayoutStandard />,
        source: NavigationLayoutStandardSrc,
      },
    ]}
    propsTables={[
      {
        componentSrc: NavigationLayoutSrc,
      },
    ]}
  />
);

export default DocPage;
