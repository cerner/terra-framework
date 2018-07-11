import React from 'react';
import DocTemplate from 'terra-doc-template';
import { name } from '../../../../package.json';
import ReadMe from '../../../../docs/README.md';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import SlidePanelSrc from '!raw-loader!../../../../src/SlidePanel';
import DefaultSlidePanelSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/DefaultSlidePanel.jsx';
import SlidePanelOverlaySrc from '!raw-loader!../../../../src/terra-dev-site/test/slide-panel/SlidePanelOverlay.test.jsx';
import SlidePanelSquishSrc from '!raw-loader!../../../../src/terra-dev-site/test/slide-panel/SlidePanelSquish.test.jsx';
import SlidePanelStartSrc from '!raw-loader!../../../../src/terra-dev-site/test/slide-panel/SlidePanelStart.test.jsx';
import SlidePanelEndSrc from '!raw-loader!../../../../src/terra-dev-site/test/slide-panel/SlidePanelEnd.test.jsx';
import SlidePanelSmallSrc from '!raw-loader!../../../../src/terra-dev-site/test/slide-panel/SlidePanelSmall.test.jsx';
import SlidePanelLargeSrc from '!raw-loader!../../../../src/terra-dev-site/test/slide-panel/SlidePanelLarge.test.jsx';
import SlidePanelFullscreenSrc from '!raw-loader!../../../../src/terra-dev-site/test/slide-panel/SlidePanelFullscreen.test.jsx';
import SlidePanelFillSrc from '!raw-loader!../../../../src/terra-dev-site/test/slide-panel/SlidePanelFill.test.jsx';
import SlidePanelNoFillSrc from '!raw-loader!../../../../src/terra-dev-site/test/slide-panel/SlidePanelNoFill.test.jsx';

// Example Files
import DefaultSlidePanel from '../example/DefaultSlidePanel';
import SlidePanelOverlay from '../../test/slide-panel/SlidePanelOverlay.test';
import SlidePanelSquish from '../../test/slide-panel/SlidePanelSquish.test';
import SlidePanelStart from '../../test/slide-panel/SlidePanelStart.test';
import SlidePanelEnd from '../../test/slide-panel/SlidePanelEnd.test';
import SlidePanelSmall from '../../test/slide-panel/SlidePanelSmall.test';
import SlidePanelLarge from '../../test/slide-panel/SlidePanelLarge.test';
import SlidePanelFullscreen from '../../test/slide-panel/SlidePanelFullscreen.test';
import SlidePanelFill from '../../test/slide-panel/SlidePanelFill.test';
import SlidePanelNoFill from '../../test/slide-panel/SlidePanelNoFill.test';
/* eslint-enabled import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

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
