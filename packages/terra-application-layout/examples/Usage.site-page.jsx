/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Markdown from 'terra-markdown';
import UsageDoc from '../docs/usage.md';
import { version } from '../package.json';

const Usage = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={UsageDoc} />
  </div>
);

export default Usage;
