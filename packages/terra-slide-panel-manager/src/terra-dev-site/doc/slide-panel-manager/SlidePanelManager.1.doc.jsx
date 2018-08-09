import React from 'react';
import DocTemplate from 'terra-doc-template';
import { name } from '../../../../package.json';
import ReadMe from '../../../../docs/README.md';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import SlidePanelManagerSrc from '!raw-loader!../../../../src/SlidePanelManager.jsx';

// Examples
import SlidePanelManagerExample from '../example/SlidePanelManagerExample';
import SlidePanelManagerExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/SlidePanelManagerExample.jsx';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-framework/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Overlay Example',
        example: <SlidePanelManagerExample behavior="overlay" />,
        source: SlidePanelManagerExampleSrc,
      },
      {
        title: 'Squish Example',
        example: <SlidePanelManagerExample behavior="squish" />,
        source: SlidePanelManagerExampleSrc,
      },
    ]}
    propsTables={[
      {
        componentSrc: SlidePanelManagerSrc,
        source: SlidePanelManagerExampleSrc,
      },
    ]}
  />
);

export default DocPage;
