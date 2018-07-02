import React from 'react';
import DocTemplate from 'terra-doc-template';
import ChangeLog from '../../../../CHANGELOG.md';

const DocPage = () => (
  <DocTemplate
    packageName="terra-theme-provider"
    srcPath="https://github.com/cerner/terra-framework/tree/master/packages/terra-theme-provider"
    readme={ChangeLog}
  />
);

export default DocPage;
