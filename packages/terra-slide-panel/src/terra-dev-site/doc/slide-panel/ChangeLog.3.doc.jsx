import React from 'react';
import DocTemplate from 'terra-doc-template';
import ChangeLog from '../../../../CHANGELOG.md';

const DocPage = () => (
  <DocTemplate
    packageName="terra-slide-panel"
    srcPath="https://github.com/cerner/terra-framework/tree/master/packages/terra-slide-panel"
    readme={ChangeLog}
  />
);

export default DocPage;
