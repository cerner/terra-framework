import React from 'react';
import Grid from 'terra-grid';

import Aggregator from 'terra-aggregator';
import AggregatorItem from '../common/AggregatorItem';

const items = Object.freeze([{
  key: 'SECTION_0',
  component: <AggregatorItem name="Section 0" />,
}, {
  key: 'SECTION_1',
  component: <AggregatorItem name="Section 1" />,
}, {
  key: 'SECTION_2',
  component: <AggregatorItem name="Section 2" />,
}, {
  key: 'SECTION_3',
  component: <AggregatorItem name="Section 3" />,
}]);

const CustomRenderAggregatorExample = () => (
  <div>
    <Aggregator
      items={items}
      render={renderData => (
        <Grid>
          <Grid.Row>
            <Grid.Column tiny={6}>
              {renderData.items[0]}
            </Grid.Column>
            <Grid.Column tiny={6}>
              {renderData.items[1]}
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column tiny={6}>
              {renderData.items[2]}
            </Grid.Column>
            <Grid.Column tiny={6}>
              {renderData.items[3]}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      )}
    />
  </div>
);

export default CustomRenderAggregatorExample;
