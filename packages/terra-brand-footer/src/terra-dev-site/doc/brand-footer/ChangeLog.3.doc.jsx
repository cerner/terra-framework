import React from 'react';
import DocTemplate from 'terra-doc-template';
import ChangeLog from '../../../../CHANGELOG.md';

const DocPage = () => (
  <DocTemplate
    packageName="terra-brand-footer"
    srcPath="https://github.com/cerner/terra-framework/tree/master/packages/terra-brand-footer"
    readme={ChangeLog}
  />
);

export default DocPage;
