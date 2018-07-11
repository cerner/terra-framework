import React from 'react';
import DocTemplate from 'terra-doc-template';
import { name } from '../../../../package.json';
import UtilsDoc from '../../../../docs/utils.md';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={UtilsDoc}
    srcPath={`https://github.com/cerner/terra-framework/tree/master/packages/${name}`}
  />
);

export default DocPage;
