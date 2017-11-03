/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-layout/docs/README.md';
import { version } from 'terra-layout/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import LayoutSrc from '!raw-loader!terra-layout/src/Layout.jsx';

// Example Files
import LayoutStandard from './LayoutStandard';
import LayoutMenuDisabled from './LayoutMenuDisabled';
import LayoutLongText from './LayoutLongText';
import LayoutNoHeader from './LayoutNoHeader';

const NavigationExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props-layout" src={LayoutSrc} />
    <h2 id="layout-standard">Layout</h2>
    <LayoutStandard />
    <h2 id="layout-no-menu">Layout w/ No Menu</h2>
    <LayoutMenuDisabled />
    <h2 id="layout-long-text">Layout w/ Long Menu Text</h2>
    <LayoutLongText />
    <h2 id="layout-no-header">Layout w/ No Header</h2>
    <LayoutNoHeader />
  </div>
);

export default NavigationExamples;
