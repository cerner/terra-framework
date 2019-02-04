import React from 'react';
import DocTemplate from 'terra-doc-template';
import { MemoryRouter } from 'react-router-dom';
import { name } from '../../../../package.json';
import ReadMe from '../../../../docs/README.md';
import ApplicationLinkConfig from '../common/ApplicationLinkConfig';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import TabsSrc from '!raw-loader!../../../../src/tabs/ApplicationTabs.jsx';
import TabExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ApplicationTabsExample.jsx';

// Example Files
import ApplicationTabsExample from '../example/ApplicationTabsExample';
/* eslint-enabled import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <MemoryRouter
    initialEntries={ApplicationLinkConfig.map(link => link.path)}
    initialIndex={0}
  >
    <DocTemplate
      packageName={name}
      readme={ReadMe}
      srcPath={`https://github.com/cerner/terra-framework/tree/master/packages/${name}`}
      examples={[
        {
          title: 'Tabs Example',
          example: <ApplicationTabsExample />,
          source: TabExampleSrc,
        },
      ]}
      propsTables={[
        {
          componentName: 'Appliation Tabs',
          componentSrc: TabsSrc,
        },
      ]}
    />
  </MemoryRouter>
);

export default DocPage;
