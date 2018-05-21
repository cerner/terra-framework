import React from 'react';
import Grid from 'terra-grid';

/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
// attachment examples
import PopupBottomCenter from 'terra-popup/lib/terra-dev-site/doc/example/PopupBottomCenter';
import PopupBottomLeft from 'terra-popup/lib/terra-dev-site/doc/example/PopupBottomLeft';
import PopupBottomRight from 'terra-popup/lib/terra-dev-site/doc/example/PopupBottomRight';
import PopupMiddleCenter from 'terra-popup/lib/terra-dev-site/doc/example/PopupMiddleCenter';
import PopupMiddleLeft from 'terra-popup/lib/terra-dev-site/doc/example/PopupMiddleLeft';
import PopupMiddleRight from 'terra-popup/lib/terra-dev-site/doc/example/PopupMiddleRight';
import PopupTopCenter from 'terra-popup/lib/terra-dev-site/doc/example/PopupTopCenter';
import PopupTopLeft from 'terra-popup/lib/terra-dev-site/doc/example/PopupTopLeft';
import PopupTopRight from 'terra-popup/lib/terra-dev-site/doc/example/PopupTopRight';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

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
