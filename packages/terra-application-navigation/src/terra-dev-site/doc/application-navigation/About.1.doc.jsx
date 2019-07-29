import React from 'react';
import DocTemplate from 'terra-doc-template';
import { name } from '../../../../package.json';
import AboutDoc from '../../../../docs/README.md';
import UsageDoc from '../../../../docs/usage.md';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={`${AboutDoc}\n${UsageDoc}`}
    srcPath={`https://github.com/cerner/terra-framework/tree/master/packages/${name}`}
  />
);

export default DocPage;
