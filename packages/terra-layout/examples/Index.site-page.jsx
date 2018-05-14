/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import { name } from '../package.json';
import ReadMe from '../docs/README.md';

// Component Source
import LayoutSrc from '!raw-loader!../src/Layout.jsx';

// Example Files
import LayoutStandard from './index-examples/LayoutStandard';
import LayoutStandardSrc from '!raw-loader!./index-examples/LayoutStandard.jsx';
import LayoutMenuDisabled from './index-examples/LayoutMenuDisabled';
import LayoutMenuDisabledSrc from '!raw-loader!./index-examples/LayoutMenuDisabled.jsx';
import LayoutNoHeader from './index-examples/LayoutNoHeader';
import LayoutNoHeaderSrc from '!raw-loader!./index-examples/LayoutNoHeader.jsx';

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
