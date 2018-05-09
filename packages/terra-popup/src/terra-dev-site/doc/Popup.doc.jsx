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
import PopupStandardSrc from '!raw-loader!./example/PopupStandard.jsx';
import PopupInsideModalSrc from '!raw-loader!./example/PopupInsideModal.jsx';

// Example Files
import PopupStandard from './example/PopupStandard';
import PopupBounded from './example/PopupBounded';
import PopupNoHeader from './example/PopupNoHeader';
import PopupWithArrow from './example/PopupWithArrow';
import PopupClassName from './example/PopupClassName';
import PopupDimensions from './example/PopupDimensions';
import PopupBottomCenter from './example/PopupBottomCenter';
import PopupBottomLeft from './example/PopupBottomLeft';
import PopupBottomRight from './example/PopupBottomRight';
import PopupMiddleCenter from './example/PopupMiddleCenter';
import PopupMiddleLeft from './example/PopupMiddleLeft';
import PopupMiddleRight from './example/PopupMiddleRight';
import PopupTopCenter from './example/PopupTopCenter';
import PopupTopLeft from './example/PopupTopLeft';
import PopupTopRight from './example/PopupTopRight';
import PopupInsideModal from './example/PopupInsideModal';
import PopupAttachmentBehavior from './example/PopupAttachmentBehavior';

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
