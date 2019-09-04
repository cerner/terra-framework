import React from 'react';
import DocTemplate from 'terra-doc-template';
import UpgradeGuide from '../../../../docs/UPGRADEGUIDE.md';

const DocPage = () => (
  <DocTemplate
    packageName="terra-date-picker"
    srcPath="https://github.com/cerner/terra-framework/tree/master/packages/terra-date-picker"
    readme={UpgradeGuide}
  />
);

export default DocPage;
