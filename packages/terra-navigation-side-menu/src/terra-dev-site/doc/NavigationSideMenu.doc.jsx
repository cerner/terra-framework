/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import { name } from '../package.json';
import ReadMe from '../docs/README.md';

// Component Source
import NavigationSideMenuSrc from '!raw-loader!../src/NavigationSideMenu.jsx';

// Examples
import NavigationSideMenuExample from './index-examples/NavigationSideMenuExample';
import NavigationSideMenuExampleSrc from '!raw-loader!./index-examples/NavigationSideMenuExample.jsx';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-framework/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Navigation Side Menu Example',
        example: <NavigationSideMenuExample />,
        source: NavigationSideMenuExampleSrc,
      },
    ]}
    propsTables={[
      {
        componentSrc: NavigationSideMenuSrc,
      },
    ]}
  />
);

export default DocPage;
