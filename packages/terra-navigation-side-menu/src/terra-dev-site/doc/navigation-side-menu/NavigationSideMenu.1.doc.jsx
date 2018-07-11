import React from 'react';
import DocTemplate from 'terra-doc-template';
import { name } from '../../../../package.json';
import ReadMe from '../../../../docs/README.md';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import NavigationSideMenuSrc from '!raw-loader!../../../../src/NavigationSideMenu.jsx';

// Examples
import NavigationSideMenuExample from '../example/NavigationSideMenuExample';
import NavigationSideMenuExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/NavigationSideMenuExample.jsx';
/* eslint-enabled import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

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
