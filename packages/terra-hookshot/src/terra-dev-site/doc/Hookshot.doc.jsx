/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-duplicates */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import { name } from '../../../package.json';
import ReadMe from '../../../docs/README.md';

// Component Source
import HookshotSrc from '!raw-loader!../../../src/Hookshot';
import HookshotContentSrc from '!raw-loader!../../../src/HookshotContent';
import HookshotExampleSrc from '!raw-loader!../../../src/terra-dev-site/doc/example/HookshotExample.jsx';
import BoundedHookshotExampleSrc from '!raw-loader!../../../src/terra-dev-site/doc/example/BoundedHookshotExample.jsx';

// Example Files
import HookshotExample from './example/HookshotExample';
import BoundedHookshotExample from './example/BoundedHookshotExample';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-framework/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Window Bound Hookshot',
        example: <HookshotExample />,
        source: HookshotExampleSrc,
      },
      {
        title: 'Container Bound Hookshot',
        example: <BoundedHookshotExample />,
        source: BoundedHookshotExampleSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Hookshot',
        componentSrc: HookshotSrc,
      },
      {
        componentName: 'Hookshot Content',
        componentSrc: HookshotContentSrc,
      },
    ]}
  />
);

export default DocPage;
