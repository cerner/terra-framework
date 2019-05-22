import React from 'react';
import DocTemplate from 'terra-doc-template';
import ChangeLog from '../../../../CHANGELOG.md';

const ChangeLogPage = () => (
  <DocTemplate
    packageName="terra-navigation-prompt"
    srcPath="https://github.com/cerner/terra-framework/tree/master/packages/terra-navigation-prompt"
    readme={ChangeLog}
  />
);

export default ChangeLogPage;
