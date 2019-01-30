import React from 'react';
import DocTemplate from 'terra-doc-template';
import ChangeLog from '../../../../CHANGELOG.md';

const DocPage = () => (
  <DocTemplate
    packageName="terra-tabs"
    srcPath="https://github.com/cerner/terra-framework/tree/master/packages/terra-tabs"
    readme={ChangeLog}
  />
);

export default DocPage;
