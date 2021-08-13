import React from 'react';

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

class StandaloneAggregatorExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      flip: false,
    };
  }

  render() {
    const body = (
      <div>
        <button type="button" onClick={() => { this.setState(prevState => ({ flip: !prevState.flip })); }}>Flip Section Order</button>
        <button type="button" onClick={() => { this.forceUpdate(); }}>Force Aggregator Render</button>
        <Aggregator
          items={this.state.flip ? Object.assign([], items).reverse() : items}
        />
      </div>
    );

    return body;
  }
}

export default StandaloneAggregatorExample;
