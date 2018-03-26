/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Markdown from 'terra-markdown';
import UtilsDoc from '../docs/utils.md';
import { version } from '../package.json';

const ApplicationExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="utils" src={UtilsDoc} />
  </div>
);

export default ApplicationExamples;
