import React from 'react';
import Aggregator from '../../../Aggregator';
import AggregatorItem from '../common/AggregatorItem';

const items = Object.freeze([{
  key: 'SECTION_0',
  component: <AggregatorItem name="Section 0" targetId="section0" />,
}, {
  key: 'SECTION_1',
  component: <AggregatorItem name="Section 1" targetId="section1" />,
}, {
  key: 'SECTION_2',
  component: <AggregatorItem name="Section 2" targetId="section2" />,
}, {
  key: 'SECTION_3',
  component: <AggregatorItem name="Section 3" targetId="section3" />,
}]);

const AggregatorStandalone = () => (
  <div id="test-aggregator" role="main">
    <Aggregator
      items={items}
    />
  </div>
);

export default AggregatorStandalone;
