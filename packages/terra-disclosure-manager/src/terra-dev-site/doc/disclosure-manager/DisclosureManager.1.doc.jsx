/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import { name } from '../../../../package.json';
import ReadMe from '../../../../docs/README.md';

// Component Source
import DisclosureManagerSrc from '!raw-loader!../../../../src/DisclosureManager.jsx';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-framework/tree/master/packages/${name}`}
    propsTables={[
      {
        componentSrc: DisclosureManagerSrc,
      },
    ]}
  />
);

export default DocPage;
