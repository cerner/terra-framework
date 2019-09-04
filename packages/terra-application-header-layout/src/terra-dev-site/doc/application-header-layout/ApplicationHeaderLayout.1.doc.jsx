import React from 'react';
import DocTemplate from 'terra-doc-template';
import { name } from '../../../../package.json';
import ReadMe from '../../../../docs/README.md';

// Component Source
import HeaderLayoutSrc from '!raw-loader!../../../../src/ApplicationHeaderLayout.jsx';

// Example File
import HeaderWireframe from '../example/HeaderWireframe';
import HeaderWireframeSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/HeaderWireframe.jsx';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-framework/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Header - Wireframe',
        example: <HeaderWireframe />,
        source: HeaderWireframeSrc,
      },
    ]}
    propsTables={[
      {
        componentSrc: HeaderLayoutSrc,
      },
    ]}
  />
);

export default DocPage;
