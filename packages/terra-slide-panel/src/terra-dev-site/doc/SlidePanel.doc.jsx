/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import { name } from '../package.json';
import ReadMe from '../docs/README.md';

// Component Source
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

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-framework/tree/master/packages/${name}`}
    examples={[
      {
        title: 'SlidePanel - Controlled Demo',
        example: <DefaultSlidePanel />,
        source: DefaultSlidePanelSrc,
      },
      {
        title: 'SlidePanel - Behavior - Overlay',
        example: <SlidePanelOverlay />,
        source: SlidePanelOverlaySrc,
      },
      {
        title: 'SlidePanel - Behavior - Squish',
        example: <SlidePanelSquish />,
        source: SlidePanelSquishSrc,
      },
      {
        title: 'SlidePanel - Position - Start',
        example: <SlidePanelStart />,
        source: SlidePanelStartSrc,
      },
      {
        title: 'SlidePanel - Position - End',
        example: <SlidePanelEnd />,
        source: SlidePanelEndSrc,
      },
      {
        title: 'SlidePanel - Size - Small',
        example: <SlidePanelSmall />,
        source: SlidePanelSmallSrc,
      },
      {
        title: 'SlidePanel - Size - Large',
        example: <SlidePanelLarge />,
        source: SlidePanelLargeSrc,
      },
      {
        title: 'SlidePanel - Fullscreen',
        example: <SlidePanelFullscreen />,
        source: SlidePanelFullscreenSrc,
      },
      {
        title: 'SlidePanel - Fill',
        example: <SlidePanelFill />,
        source: SlidePanelFillSrc,
      },
      {
        title: 'SlidePanel - Fill Off',
        example: <SlidePanelNoFill />,
        source: SlidePanelNoFillSrc,
      },
    ]}
    propsTables={[
      {
        componentSrc: SlidePanelSrc,
      },
    ]}
  />
);

export default DocPage;
