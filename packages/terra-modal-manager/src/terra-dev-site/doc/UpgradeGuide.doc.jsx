/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import Markdown from 'terra-markdown';

import UpgradeGuide from '../../../docs/UPGRADEGUIDE.md';
import { version } from '../../../package.json';

const ModalExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="upgrade" src={UpgradeGuide} />
  </div>
);

export default ModalExamples;
