import React from 'react';
import PropTypes from 'prop-types';
import NewModalManager from './tmp/NewModalManager';
import SlidePanelManager from './tmp/SlidePanelManager';

import AggregatorContainer from './components/AggregatorContainer';
import AggregatorItem from './components/AggregatorItem';
import SimpleAggregatorItem from './components/SimpleAggregatorItem';

const propTypes = {
  size: PropTypes.string,
};

const items = Object.freeze([{
  key: 'SECTION_0',
  component: <AggregatorItem name="Slide Panel Section" disclosureType="panel" />,
}, {
  key: 'SECTION_1',
  component: <AggregatorItem name="Modal Section" disclosureType="modal" />,
}, {
  key: 'SECTION_2',
  component: <SimpleAggregatorItem name="No Disclosure Section" />,
}]);

const CombinedDisclosureExample = () => (
  <div>
    <h3>Aggregator with disclosure</h3>
    <NewModalManager>
      <SlidePanelManager>
        <AggregatorContainer
          items={items}
        />
      </SlidePanelManager>
    </NewModalManager>
  </div>
);

CombinedDisclosureExample.propTypes = propTypes;

export default CombinedDisclosureExample;
