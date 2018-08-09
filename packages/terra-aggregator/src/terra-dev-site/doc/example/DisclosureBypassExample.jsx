import React from 'react';
import AppDelegate from 'terra-app-delegate';

import ModalManager from 'terra-modal-manager';
import SlidePanelManager from 'terra-slide-panel-manager';

/* eslint-disable import/no-unresolved, import/extensions */
import AggregatorContainer from 'terra-aggregator/lib/terra-dev-site/doc/common/AggregatorContainer';
import AggregatorItem from 'terra-aggregator/lib/terra-dev-site/doc/common/AggregatorItem';
/* eslint-enable import/no-unresolved, import/extensions */

const items = Object.freeze([{
  key: 'SECTION_0',
  component: <AggregatorItem name="Section 0" disclosureType="panel" />,
}, {
  key: 'SECTION_1',
  component: <AggregatorItem name="Section 1" disclosureType="panel" />,
}]);

const ModalManagerBypass = ({ app }) => {
  const updatedItems = items.map(item => (
    {
      key: item.key,
      component: React.cloneElement(item.component, {
        disclose: app.disclose,
      }),
    }
  ));

  return (
    <SlidePanelManager app={app}>
      <AggregatorContainer
        items={updatedItems}
      />
    </SlidePanelManager>
  );
};

ModalManagerBypass.propTypes = {
  app: AppDelegate.propType,
};

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
