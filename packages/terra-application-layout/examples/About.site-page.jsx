/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Markdown from 'terra-markdown';
import AboutDoc from '../docs/about.md';
import UsageDoc from '../docs/usage.md';
import { version } from '../package.json';

const About = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="about" src={AboutDoc} />
    <Markdown id="usage" src={UsageDoc} />
  </div>
);

export default About;
