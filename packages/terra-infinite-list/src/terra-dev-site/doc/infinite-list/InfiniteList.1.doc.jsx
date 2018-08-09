import React from 'react';
import DocTemplate from 'terra-doc-template';
import { name } from '../../../../package.json';
import ReadMe from '../../../../docs/README.md';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import InfiniteListSrc from '!raw-loader!../../../../src/InfiniteList.jsx';
import InfiniteListExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/InfiniteListExample.jsx';

// Example Files
import InfiniteListExample from '../example/InfiniteListExample';
/* eslint-enabled import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

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
