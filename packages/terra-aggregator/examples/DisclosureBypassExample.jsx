import React from 'react';
import PropTypes from 'prop-types';
import AppDelegate from 'terra-app-delegate';

import NewModalManager from './tmp/NewModalManager';
import SlidePanelManager from './tmp/SlidePanelManager';

import AggregatorContainer from './components/AggregatorContainer';
import AggregatorItem from './components/AggregatorItem';

const propTypes = {
  size: PropTypes.string,
};

const items = Object.freeze([{
  key: 'SECTION_0',
  component: <AggregatorItem key="0" name="Section 0" disclosureType="panel" />,
}, {
  key: 'SECTION_1',
  component: <AggregatorItem key="1" name="Section 1" disclosureType="panel" />,
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
    <h3>Aggregator with disclosure bypass</h3>
    <p>
      In this example, the Aggregator items are provided with the ModalManager disclosure function directly.
      Calling that function does not require Aggregator focus and will bypass the Aggregator entirely. This can be
      useful for simple Modal workflows that should not impact Aggregator state.
    </p>
    <NewModalManager>
      <ModalManagerBypass />
    </NewModalManager>
  </div>
);

ModalBypassExample.propTypes = propTypes;

export default ModalBypassExample;
