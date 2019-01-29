import React from 'react';
import DocTemplate from 'terra-doc-template';
import ChangeLog from '../../../../CHANGELOG.md';

const DocPage = () => (
  <DocTemplate
    packageName="terra-collapsible-menu-view"
    srcPath="https://github.com/cerner/terra-framework/tree/master/packages/terra-collapsible-menu-view"
    readme={ChangeLog}
  />
);

export default DocPage;
