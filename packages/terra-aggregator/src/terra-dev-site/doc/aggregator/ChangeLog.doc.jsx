import React from 'react';
import DocTemplate from 'terra-doc-template';
import ChangeLog from '../../../../CHANGELOG.md';

const DocPage = () => (
  <DocTemplate
    packageName="terra-aggregator"
    srcPath="https://github.com/cerner/terra-framework/tree/master/packages/terra-aggregator"
    readme={ChangeLog}
  />
);

export default DocPage;
