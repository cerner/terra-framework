/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import { name } from '../../../../package.json';
import UpgradeGuide from '../../../../docs/UPGRADEGUIDE.md';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    srcPath={`https://github.com/cerner/terra-framework/tree/master/packages/${name}`}
    readme={UpgradeGuide}
  />
);

export default DocPage;
