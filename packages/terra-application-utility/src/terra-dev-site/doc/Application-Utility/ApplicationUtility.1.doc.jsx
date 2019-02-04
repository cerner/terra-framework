import React from 'react';
import DocTemplate from 'terra-doc-template';
import { name } from '../../../../package.json';
import ReadMe from '../../../../docs/README.md';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import ApplicationHeaderUtilitySrc from '!raw-loader!../../../../src/ApplicationHeaderUtility.jsx';

// Example File
import ApplicationHeaderUtilityExample from '../example/ApplicationHeaderUtilityExample';
import ApplicationMenuUtilityExample from '../example/ApplicationMenuUtilityExample';
import MenuUtilityMenuExample from '../example/MenuUtilityMenuExample';
import ApplicationHeaderUtilityExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ApplicationHeaderUtilityExample.jsx';
import MenuUtilityMenuExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/MenuUtilityMenuExample.jsx';
import ApplicationMenuUtilityExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ApplicationMenuUtilityExample.jsx';
/* eslint-enabled import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-framework/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Header: Utility',
        example: <ApplicationHeaderUtilityExample />,
        source: ApplicationHeaderUtilityExampleSrc,
      },
      {
        title: 'Menu: Utility',
        example: <ApplicationMenuUtilityExample />,
        source: ApplicationMenuUtilityExampleSrc,
      },
      {
        title: 'Utility Menu',
        example: <MenuUtilityMenuExample />,
        source: MenuUtilityMenuExampleSrc,
      },
    ]}
    propsTables={[
      {
        componentSrc: ApplicationHeaderUtilitySrc,
      },
    ]}
  />
);

export default DocPage;
