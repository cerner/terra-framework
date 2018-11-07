import React from 'react';
import ModalManager from 'terra-modal-manager';
import SlidePanelManager from 'terra-slide-panel-manager';

/* eslint-disable import/no-unresolved, import/extensions */
import Aggregator from 'terra-aggregator/lib/Aggregator';
import AggregatorItem from 'terra-aggregator/lib/terra-dev-site/doc/common/AggregatorItem';
/* eslint-enable import/no-unresolved, import/extensions */
import { withDisclosureManager } from 'terra-disclosure-manager';

const Wrapper = withDisclosureManager(({ items, disclosureManager }) => (
  <Aggregator
    items={items}
    disclose={disclosureManager.disclose}
  />
));

const ModalManagerBypass = withDisclosureManager(({ disclosureManager }) => {
  const items = Object.freeze([{
    key: 'SECTION_0',
    component: <AggregatorItem name="Section 0" disclosureType="panel" key="SECTION_0" customDisclose={disclosureManager.disclose} discloseOnSelect />,
  }, {
    key: 'SECTION_1',
    component: <AggregatorItem name="Section 1" disclosureType="panel" key="SECTION_1" customDisclose={disclosureManager.disclose} discloseOnSelect />,
  }]);

  return (
    <SlidePanelManager>
      <Wrapper items={items} />
    </SlidePanelManager>
  );
});

const ModalBypassExample = () => (
  <div>
    <p>
      In this example, the Aggregator items are provided with the ModalManager disclosure function directly.
      Calling that function does not require Aggregator focus and will bypass the Aggregator entirely. This can be
      useful for simple Modal workflows that should not impact Aggregator state.
    </p>
    <ModalManager>
      <ModalManagerBypass />
    </ModalManager>
  </div>
);

export default ModalBypassExample;
