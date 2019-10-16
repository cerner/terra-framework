import React from 'react';
import DocTemplate from 'terra-doc-template';
import { name } from '../../../../package.json';
import ReadMe from '../../../../docs/README.md';

// Component Source
import InfiniteListSrc from '!raw-loader!../../../../src/InfiniteList.jsx';
import InitialLoadingExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/InitialLoadingExample.jsx';
import ProgressiveLoadingExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ProgressiveLoadingExample.jsx';
import VirtualizedExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/VirtualizedExample.jsx';

// Example Files
import InitialLoadingExample from '../example/InitialLoadingExample';
import ProgressiveLoadingExample from '../example/ProgressiveLoadingExample';
import VirtualizedExample from '../example/VirtualizedExample';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-framework/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Example Initial Loading Indicator',
        example: <InitialLoadingExample />,
        source: InitialLoadingExampleSrc,
      },
      {
        title: 'Example Progressive Loading Indicator',
        example: <ProgressiveLoadingExample />,
        source: ProgressiveLoadingExampleSrc,
      },
      {
        title: 'Example Virtualized List',
        example: <VirtualizedExample />,
        source: VirtualizedExampleSrc,
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
