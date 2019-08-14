import React from 'react';
import DocTemplate from 'terra-doc-template';
import ChangeLog from '../../../../CHANGELOG.md';

const DocPage = () => (
  <DocTemplate
    packageName="date-input"
    srcPath="https://github.com/cerner/terra-framework/tree/master/packages/date-input"
    readme={ChangeLog}
  />
);

export default DocPage;
