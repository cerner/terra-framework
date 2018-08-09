import React from 'react';
import DocTemplate from 'terra-doc-template';
import { name } from '../../../../package.json';
import ReadMe from '../../../../docs/README.md';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import LayoutSrc from '!raw-loader!../../../../src/Layout.jsx';

// Example Files
import LayoutStandard from '../example/LayoutStandard';
import LayoutStandardSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/LayoutStandard.jsx';
import LayoutMenuDisabled from '../example/LayoutMenuDisabled';
import LayoutMenuDisabledSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/LayoutMenuDisabled.jsx';
import LayoutNoHeader from '../example/LayoutNoHeader';
import LayoutNoHeaderSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/LayoutNoHeader.jsx';
/* eslint-enabled import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-framework/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Layout - Standard',
        example: <LayoutStandard />,
        source: LayoutStandardSrc,
      },
      {
        title: 'Layout - No Menu',
        example: <LayoutMenuDisabled />,
        source: LayoutMenuDisabledSrc,
      },
      {
        title: 'Layout - No Header',
        example: <LayoutNoHeader />,
        source: LayoutNoHeaderSrc,
      },
    ]}
    propsTables={[
      {
        componentSrc: LayoutSrc,
      },
    ]}
  />
);

export default DocPage;
