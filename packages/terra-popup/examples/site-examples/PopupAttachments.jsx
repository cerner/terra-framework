import React from 'react';
import Grid from 'terra-grid';

// attachment examples
import PopupBottomCenter from './PopupBottomCenter';
import PopupBottomLeft from './PopupBottomLeft';
import PopupBottomRight from './PopupBottomRight';
import PopupMiddleCenter from './PopupMiddleCenter';
import PopupMiddleLeft from './PopupMiddleLeft';
import PopupMiddleRight from './PopupMiddleRight';
import PopupTopCenter from './PopupTopCenter';
import PopupTopLeft from './PopupTopLeft';
import PopupTopRight from './PopupTopRight';

const PopupAttachements = () => (
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
);

export default PopupAttachements;
