/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import { name } from '../../../../package.json';
import ChangeLog from '../../../../CHANGELOG.md';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ChangeLog}
  />
);

export default DocPage;
