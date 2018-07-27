import React from 'react';
import AppDelegate from 'terra-app-delegate';
import ContentContainer from 'terra-content-container';
import ActionHeader from 'terra-action-header';

import AggregatorContainer from './AggregatorContainer';
import AggregatorItem from './AggregatorItem';
import SimpleAggregatorItem from './SimpleAggregatorItem';

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

const ModalAggregator = ({ app }) => (
  <ContentContainer
    fill
    header={<ActionHeader onClose={app.closeDisclosure} onBack={app.goBack} />}
  >
    <AggregatorContainer
      app={app}
      items={items}
    />
  </ContentContainer>
);

ModalAggregator.propTypes = {
  app: AppDelegate.propType,
};

export default ModalAggregator;
