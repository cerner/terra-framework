/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';

import ReadMe from '../docs/README.md';
import { version } from '../package.json';
import IndexTemplate from 'terra-dev-site/src/IndexPageTemplate';

// Component Source
import NavigationSideMenuSrc from '!raw-loader!../src/NavigationSideMenu.jsx';

// Examples
import NavigationSideMenuExample from './index-examples/NavigationSideMenuExample';
import NavigationSideMenuExampleSrc from '!raw-loader!./index-examples/NavigationSideMenuExample.jsx';

const NavigationSideMenuExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <h1 style={{ paddingBottom: '0.3em', borderBottom: '1px solid #eaecef' }}>Examples</h1>
    <IndexTemplate
      title="Navigation Side Menu Example"
      example={<NavigationSideMenuExample />}
      exampleSrc={NavigationSideMenuExampleSrc}
    />
    <br />
    <PropsTable id="props-table" src={NavigationSideMenuSrc} />
  </div>
);

export default NavigationSideMenuExamples;
