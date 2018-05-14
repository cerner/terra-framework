/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import { name } from '../package.json';
import ReadMe from '../docs/README.md';

// Component Source
import SlidePanelManagerSrc from '!raw-loader!../src/SlidePanelManager.jsx';

// Examples
import SlidePanelManagerExample from './index-examples/SlidePanelManagerExample';
import SlidePanelManagerExampleSrc from '!raw-loader!./index-examples/SlidePanelManagerExample';

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
