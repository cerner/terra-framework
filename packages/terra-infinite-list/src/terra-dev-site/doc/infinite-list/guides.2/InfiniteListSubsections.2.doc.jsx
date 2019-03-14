import React from 'react';
import DocTemplate from 'terra-doc-template';
import { name } from '../../../../../package.json';
import ReadMe from '../../../../../docs/InfiniteListSubsection.md';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
import InfiniteListSubsection from '../../guides/InfiniteListSubsection';
import InfiniteListSubsectionSrc from '!raw-loader!../../../../../src/terra-dev-site/doc/guides/InfiniteListSubsection.jsx';
/* eslint-enabled import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-framework/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Sections Header Infinite List',
        example: <InfiniteListSubsection />,
        source: InfiniteListSubsectionSrc,
      },
    ]}
  />
);

export default DocPage;
