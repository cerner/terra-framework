import React from 'react';
import DocTemplate from 'terra-doc-template';
import UpgradeGuide from '../../../../docs/UPGRADEGUIDE.md';

const DocPage = () => (
  <DocTemplate
    packageName="terra-date-time-picker"
    srcPath="https://github.com/cerner/terra-framework/tree/master/packages/terra-date-time-picker"
    readme={UpgradeGuide}
  />
);

export default DocPage;
