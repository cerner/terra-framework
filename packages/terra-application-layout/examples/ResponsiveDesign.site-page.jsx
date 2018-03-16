/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Markdown from 'terra-markdown';
import ResposiveDesignDoc from '../docs/responsiveDesign.md';
import { version } from '../package.json';

const ApplicationExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="responsive-design" src={ResposiveDesignDoc} />
  </div>
);

export default ApplicationExamples;
