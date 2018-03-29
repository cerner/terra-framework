/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import IndexTemplate from 'terra-dev-site/src/IndexPageTemplate';

import ReadMe from '../docs/README.md';
import { version } from '../package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import SlidePanelSrc from '!raw-loader!../src/SlidePanel';
import DefaultSlidePanelSrc from '!raw-loader!./index-examples/DefaultSlidePanel.jsx';
import SlidePanelOverlaySrc from '!raw-loader!./test-examples/SlidePanelOverlay.example.jsx';
import SlidePanelSquishSrc from '!raw-loader!./test-examples/SlidePanelSquish.example.jsx';
import SlidePanelStartSrc from '!raw-loader!./test-examples/SlidePanelStart.example.jsx';
import SlidePanelEndSrc from '!raw-loader!./test-examples/SlidePanelEnd.example.jsx';
import SlidePanelSmallSrc from '!raw-loader!./test-examples/SlidePanelSmall.example.jsx';
import SlidePanelLargeSrc from '!raw-loader!./test-examples/SlidePanelLarge.example.jsx';
import SlidePanelFullscreenSrc from '!raw-loader!./test-examples/SlidePanelFullscreen.example.jsx';
import SlidePanelFillSrc from '!raw-loader!./test-examples/SlidePanelFill.example.jsx';
import SlidePanelNoFillSrc from '!raw-loader!./test-examples/SlidePanelNoFill.example.jsx';

// Example Files
import DefaultSlidePanel from './index-examples/DefaultSlidePanel';
import SlidePanelOverlay from './test-examples/SlidePanelOverlay.example';
import SlidePanelSquish from './test-examples/SlidePanelSquish.example';
import SlidePanelStart from './test-examples/SlidePanelStart.example';
import SlidePanelEnd from './test-examples/SlidePanelEnd.example';
import SlidePanelSmall from './test-examples/SlidePanelSmall.example';
import SlidePanelLarge from './test-examples/SlidePanelLarge.example';
import SlidePanelFullscreen from './test-examples/SlidePanelFullscreen.example';
import SlidePanelFill from './test-examples/SlidePanelFill.example';
import SlidePanelNoFill from './test-examples/SlidePanelNoFill.example';

const SlidePanelExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />

    <h1 style={{ paddingBottom: '0.3em', borderBottom: '1px solid #eaecef' }}>Examples</h1>
    <IndexTemplate
      title="SlidePanel - Controlled Demo"
      example={<DefaultSlidePanel />}
      exampleSrc={DefaultSlidePanelSrc}
    />

    <IndexTemplate
      title="SlidePanel - Behavior - Overlay"
      example={<SlidePanelOverlay />}
      exampleSrc={SlidePanelOverlaySrc}
    />

    <IndexTemplate
      title="SlidePanel - Behavior - Squish"
      example={<SlidePanelSquish />}
      exampleSrc={SlidePanelSquishSrc}
    />

    <IndexTemplate
      title="SlidePanel - Position - Start"
      example={<SlidePanelStart />}
      exampleSrc={SlidePanelStartSrc}
    />

    <IndexTemplate
      title="SlidePanel - Position - End"
      example={<SlidePanelEnd />}
      exampleSrc={SlidePanelEndSrc}
    />

    <IndexTemplate
      title="SlidePanel - Size - Small"
      example={<SlidePanelSmall />}
      exampleSrc={SlidePanelSmallSrc}
    />

    <IndexTemplate
      title="SlidePanel - Size - Large"
      example={<SlidePanelLarge />}
      exampleSrc={SlidePanelLargeSrc}
    />

    <IndexTemplate
      title="SlidePanel - Fullscreen"
      example={<SlidePanelFullscreen />}
      exampleSrc={SlidePanelFullscreenSrc}
    />

    <IndexTemplate
      title="SlidePanel - Fill"
      example={<SlidePanelFill />}
      exampleSrc={SlidePanelFillSrc}
    />

    <IndexTemplate
      title="SlidePanel - Fill Off"
      example={<SlidePanelNoFill />}
      exampleSrc={SlidePanelNoFillSrc}
    />

    <PropsTable id="props" src={SlidePanelSrc} />
  </div>
);

export default SlidePanelExamples;
