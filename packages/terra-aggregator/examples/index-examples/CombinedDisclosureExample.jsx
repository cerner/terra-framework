import React from 'react';
import PropTypes from 'prop-types';
import ModalManager from 'terra-modal-manager';
import SlidePanelManager from 'terra-slide-panel-manager';

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
    <ModalManager>
      <SlidePanelManager>
        <AggregatorContainer
          items={items}
        />
      </SlidePanelManager>
    </ModalManager>
  </div>
);

CombinedDisclosureExample.propTypes = propTypes;

export default CombinedDisclosureExample;
