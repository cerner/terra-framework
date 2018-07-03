import React from 'react';
import DocTemplate from 'terra-doc-template';
import ChangeLog from '../../../../CHANGELOG.md';

const DocPage = () => (
  <DocTemplate
    packageName="terra-application-links"
    srcPath="https://github.com/cerner/terra-framework/tree/master/packages/terra-application-links"
    readme={ChangeLog}
  />
);

export default DocPage;
