import React from 'react';
import ModalManager from 'terra-modal-manager';
import SlidePanelManager from 'terra-slide-panel-manager';

/* eslint-disable import/no-unresolved, import/extensions */
import AggregatorContainer from 'terra-aggregator/lib/terra-dev-site/doc/common/AggregatorContainer';
import AggregatorItem from 'terra-aggregator/lib/terra-dev-site/doc/common/AggregatorItem';
import SimpleAggregatorItem from 'terra-aggregator/lib/terra-dev-site/doc/common/SimpleAggregatorItem';
/* eslint-enable import/no-unresolved, import/extensions */

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
    <ModalManager>
      <SlidePanelManager>
        <AggregatorContainer
          items={items}
        />
      </SlidePanelManager>
    </ModalManager>
  </div>
);

export default CombinedDisclosureExample;
