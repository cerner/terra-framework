import React from 'react';
import DocTemplate from 'terra-doc-template';
import ChangeLog from '../../../../CHANGELOG.md';

const DocPage = () => (
  <DocTemplate
    packageName="terra-infinite-list"
    srcPath="https://github.com/cerner/terra-framework/tree/master/packages/terra-infinite-list"
    readme={ChangeLog}
  />
);

export default DocPage;
