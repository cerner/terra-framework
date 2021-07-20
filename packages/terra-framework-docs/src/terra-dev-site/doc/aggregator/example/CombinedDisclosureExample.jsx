import React from 'react';
import ModalManager from 'terra-modal-manager';
import SlidePanelManager from 'terra-slide-panel-manager';
import { withDisclosureManager } from 'terra-disclosure-manager';

import Aggregator from 'terra-aggregator';
import AggregatorItem from '../common/AggregatorItem';
import SimpleAggregatorItem from '../common/SimpleAggregatorItem';

const items = Object.freeze([{
  key: 'SECTION_0',
  component: <AggregatorItem name="Slide Panel Section" disclosureType="panel" discloseOnSelect />,
}, {
  key: 'SECTION_1',
  component: <AggregatorItem name="Modal Section" disclosureType="modal" discloseOnSelect />,
}, {
  key: 'SECTION_2',
  component: <SimpleAggregatorItem name="No Disclosure Section" />,
}]);

const Wrapper = withDisclosureManager(({ disclosureManager }) => (
  <Aggregator
    items={items}
    disclose={disclosureManager.disclose}
  />
));

const CombinedDisclosureExample = () => (
  <div>
    <ModalManager>
      <SlidePanelManager>
        <Wrapper />
      </SlidePanelManager>
    </ModalManager>
  </div>
);

export default CombinedDisclosureExample;
