import React from 'react';
import PropTypes from 'prop-types';
import SlidePanelManager from 'terra-slide-panel-manager';
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

const AggregatorWrapper = ({ app }) => (
  <Aggregator
    disclose={app.disclose}
    items={items}
  />
);

AggregatorWrapper.propTypes = {
  app: PropTypes.shape({}),
};

const AggregatorWithDisclosure = () => (
  <div id="test-aggregator" role="main" style={{ height: '500px' }}>
    <SlidePanelManager>
      <AggregatorWrapper />
    </SlidePanelManager>
  </div>
);

export default AggregatorWithDisclosure;
