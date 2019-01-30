import React from 'react';
import DocTemplate from 'terra-doc-template';
import ChangeLog from '../../../../CHANGELOG.md';

const DocPage = () => (
  <DocTemplate
    packageName="terra-navigation-side-menu"
    srcPath="https://github.com/cerner/terra-framework/tree/master/packages/terra-navigation-side-menu"
    readme={ChangeLog}
  />
);

export default DocPage;
