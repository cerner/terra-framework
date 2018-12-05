import React from 'react';
import DocTemplate from 'terra-doc-template';
import ChangeLog from '../../../../CHANGELOG.md';

const DocPage = () => (
  <DocTemplate
    packageName="terra-embedded-content-consumer"
    srcPath="https://github.com/cerner/terra-framework/tree/master/packages/terra-embedded-content-consumer"
    readme={ChangeLog}
  />
);

export default DocPage;
