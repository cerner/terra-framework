/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import Grid from 'terra-grid';
import ReadMe from 'terra-popup/docs/README.md';
import { version } from 'terra-popup/package.json';
import IndexTemplate from 'terra-dev-site/src/IndexPageTemplate';

// Component Source
import PopupSrc from '!raw-loader!../../..//src/Popup.jsx';
import PopupStandardSrc from '!raw-loader!./index-examples/PopupStandard.jsx';
import PopupInsideModalSrc from '!raw-loader!./index-examples/PopupInsideModal.jsx';

// Example Files
import PopupStandard from './index-examples/PopupStandard';
import PopupBounded from './index-examples/PopupBounded';
import PopupNoHeader from './index-examples/PopupNoHeader';
import PopupWithArrow from './index-examples/PopupWithArrow';
import PopupClassName from './index-examples/PopupClassName';
import PopupDimensions from './index-examples/PopupDimensions';
import PopupBottomCenter from './index-examples/PopupBottomCenter';
import PopupBottomLeft from './index-examples/PopupBottomLeft';
import PopupBottomRight from './index-examples/PopupBottomRight';
import PopupMiddleCenter from './index-examples/PopupMiddleCenter';
import PopupMiddleLeft from './index-examples/PopupMiddleLeft';
import PopupMiddleRight from './index-examples/PopupMiddleRight';
import PopupTopCenter from './index-examples/PopupTopCenter';
import PopupTopLeft from './index-examples/PopupTopLeft';
import PopupTopRight from './index-examples/PopupTopRight';
import PopupInsideModal from './index-examples/PopupInsideModal';
import PopupAttachmentBehavior from './index-examples/PopupAttachmentBehavior';

const PopupExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <IndexTemplate
      title="Popup Default Props"
      example={<PopupStandard />}
      exampleSrc={PopupStandardSrc}
    />
    <h2 id="arrow-popup" style={{ paddingTop: '20px' }}>Popup Display With Arrow</h2>
    <PopupWithArrow />
    <h2 id="popup-attachment-behaviors" style={{ paddingTop: '20px' }}>Popup Attachment Behavior</h2>
    <PopupAttachmentBehavior />
    <h2 id="alignment-popups" style={{ paddingTop: '20px' }}>Popup Attachments</h2>
    <Grid>
      <Grid.Row>
        <Grid.Column col={3}>
          <PopupBottomLeft />
        </Grid.Column>
        <Grid.Column col={3}>
          <PopupBottomCenter />
        </Grid.Column>
        <Grid.Column col={3}>
          <PopupBottomRight />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column col={3}>
          <PopupMiddleLeft />
        </Grid.Column>
        <Grid.Column col={3}>
          <PopupMiddleCenter />
        </Grid.Column>
        <Grid.Column col={3}>
          <PopupMiddleRight />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column col={3}>
          <PopupTopLeft />
        </Grid.Column>
        <Grid.Column col={3}>
          <PopupTopCenter />
        </Grid.Column>
        <Grid.Column col={3}>
          <PopupTopRight />
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <h2 id="dimension-popup" style={{ paddingTop: '20px' }}>Popup Size Variants</h2>
    <PopupDimensions />
    <h2 id="bounded-popup" style={{ paddingTop: '20px' }}>Popup Bounded</h2>
    <PopupBounded />
    <h2 id="no-header-popup" style={{ paddingTop: '20px' }}>Popup Bounded With No Header</h2>
    <PopupNoHeader />
    <h2 id="class-name-popup" style={{ paddingTop: '20px' }}>Popup Adding Class Styles</h2>
    <PopupClassName />
    <IndexTemplate
      title="Popup Inside Modal"
      example={<PopupInsideModal />}
      exampleSrc={PopupInsideModalSrc}
    />
    <br />
    <PropsTable id="props" src={PopupSrc} />
  </div>
);

export default PopupExamples;
