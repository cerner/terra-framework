import React from 'react';
import DocTemplate from 'terra-doc-template';
import UpgradeGuide from '../../../../docs/UpgradeGuide.md';
import { name } from '../../../../package.json';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    srcPath={`https://github.com/cerner/terra-framework/tree/master/packages/${name}`}
    readme={UpgradeGuide}
  />
);

export default DocPage;
