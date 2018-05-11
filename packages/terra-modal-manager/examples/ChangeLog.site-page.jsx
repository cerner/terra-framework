/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import { name } from '../package.json';
import ChangeLog from '../CHANGELOG.md';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ChangeLog}
  />
);

export default DocPage;
