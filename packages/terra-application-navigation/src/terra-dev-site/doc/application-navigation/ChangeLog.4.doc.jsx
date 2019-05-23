import React from 'react';
import DocTemplate from 'terra-doc-template';
import ChangeLog from '../../../../CHANGELOG.md';

const DocPage = () => (
  <DocTemplate
    packageName="terra-application-navigation"
    srcPath="https://github.com/cerner/terra-framework/tree/master/packages/terra-application-navigation"
    readme={ChangeLog}
  />
);

export default DocPage;
