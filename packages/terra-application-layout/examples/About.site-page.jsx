/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import AboutDoc from '../docs/about.md';
import { version } from '../package.json';

// Component Source
/* eslint-disable import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import ApplicationLayoutSrc from '!raw-loader!../src/ApplicationLayout.jsx';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */

const About = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="about" src={AboutDoc} />
    <br />
    <PropsTable id="props-header" src={ApplicationLayoutSrc} componentName="ApplicationLayout" />
  </div>
);

export default About;
