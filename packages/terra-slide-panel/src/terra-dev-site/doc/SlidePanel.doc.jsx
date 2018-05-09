/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import IndexTemplate from 'terra-dev-site/src/IndexPageTemplate';

import ReadMe from '../../../docs/README.md';
import { version } from '../../../package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import SlidePanelSrc from '!raw-loader!../../../src/SlidePanel';
import DefaultSlidePanelSrc from '!raw-loader!../../../src/terra-dev-site/doc/example/DefaultSlidePanel.jsx';
import SlidePanelOverlaySrc from '!raw-loader!../../../src/terra-dev-site/test/SlidePanelOverlay.test.jsx';
import SlidePanelSquishSrc from '!raw-loader!../../../src/terra-dev-site/test/SlidePanelSquish.test.jsx';
import SlidePanelStartSrc from '!raw-loader!../../../src/terra-dev-site/test/SlidePanelStart.test.jsx';
import SlidePanelEndSrc from '!raw-loader!../../../src/terra-dev-site/test/SlidePanelEnd.test.jsx';
import SlidePanelSmallSrc from '!raw-loader!../../../src/terra-dev-site/test/SlidePanelSmall.test.jsx';
import SlidePanelLargeSrc from '!raw-loader!../../../src/terra-dev-site/test/SlidePanelLarge.test.jsx';
import SlidePanelFullscreenSrc from '!raw-loader!../../../src/terra-dev-site/test/SlidePanelFullscreen.test.jsx';
import SlidePanelFillSrc from '!raw-loader!../../../src/terra-dev-site/test/SlidePanelFill.test.jsx';
import SlidePanelNoFillSrc from '!raw-loader!../../../src/terra-dev-site/test/SlidePanelNoFill.test.jsx';

// Example Files
import DefaultSlidePanel from '../../../src/terra-dev-site/doc/example/DefaultSlidePanel';
import SlidePanelOverlay from '../../../src/terra-dev-site/test/SlidePanelOverlay.test';
import SlidePanelSquish from '../../../src/terra-dev-site/test/SlidePanelSquish.test';
import SlidePanelStart from '../../../src/terra-dev-site/test/SlidePanelStart.test';
import SlidePanelEnd from '../../../src/terra-dev-site/test/SlidePanelEnd.test';
import SlidePanelSmall from '../../../src/terra-dev-site/test/SlidePanelSmall.test';
import SlidePanelLarge from '../../../src/terra-dev-site/test/SlidePanelLarge.test';
import SlidePanelFullscreen from '../../../src/terra-dev-site/test/SlidePanelFullscreen.test';
import SlidePanelFill from '../../../src/terra-dev-site/test/SlidePanelFill.test';
import SlidePanelNoFill from '../../../src/terra-dev-site/test/SlidePanelNoFill.test';

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
