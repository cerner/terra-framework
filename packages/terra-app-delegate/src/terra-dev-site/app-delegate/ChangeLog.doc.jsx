import React from 'react';
import DocTemplate from 'terra-doc-template';
import ChangeLog from '../../../CHANGELOG.md';

const DocPage = () => (
  <DocTemplate
    packageName="terra-app-delegate"
    srcPath="https://github.com/cerner/terra-framework/tree/master/packages/terra-app-delegate"
    readme={ChangeLog}
  />
);

export default DocPage;
