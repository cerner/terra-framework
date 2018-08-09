import React from 'react';
import DocTemplate from 'terra-doc-template';
import { name } from '../../../../package.json';
import ReadMe from '../../../../docs/README.md';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import MenuLayoutSrc from '!raw-loader!../../../../src/ApplicationMenuLayout.jsx';

// Example File
import MenuWireframe from '../example/MenuWireframe';
import MenuWireframeSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/MenuWireframe.jsx';
/* eslint-enabled import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-framework/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Menu - Wireframe',
        example: <MenuWireframe />,
        source: MenuWireframeSrc,
      },
    ]}
    propsTables={[
      {
        componentSrc: MenuLayoutSrc,
      },
    ]}
  />
);

export default DocPage;
