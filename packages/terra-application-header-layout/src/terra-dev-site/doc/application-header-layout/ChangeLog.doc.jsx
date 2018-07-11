import React from 'react';
import DocTemplate from 'terra-doc-template';
import ChangeLog from '../../../../CHANGELOG.md';

const DocPage = () => (
  <DocTemplate
    packageName="terra-application-header-layout"
    srcPath="https://github.com/cerner/terra-framework/tree/master/packages/terra-application-header-layout"
    readme={ChangeLog}
  />
);

export default DocPage;
