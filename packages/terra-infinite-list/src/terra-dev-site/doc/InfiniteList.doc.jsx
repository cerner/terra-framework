/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import { name } from '../package.json';
import ReadMe from '../docs/README.md';

// Component Source
import InfiniteListSrc from '!raw-loader!../src/InfiniteList.jsx';
import InfiniteListExampleSrc from '!raw-loader!./index-examples/InfiniteListExample.jsx';

// Example Files
import InfiniteListExample from './index-examples/InfiniteListExample';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-framework/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Example Infinite List',
        example: <InfiniteListExample />,
        source: InfiniteListExampleSrc,
      },
    ]}
    propsTables={[
      {
        componentSrc: InfiniteListSrc,
      },
    ]}
  />
);

export default DocPage;
