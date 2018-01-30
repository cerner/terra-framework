import React from 'react';
import AppDelegate from 'terra-app-delegate';
import ContentContainer from 'terra-content-container';
import ActionHeader from 'terra-clinical-action-header';

import AggregatorContainer from './AggregatorContainer';
import AggregatorItem from './AggregatorItem';
import SimpleAggregatorItem from './SimpleAggregatorItem';

const items = Object.freeze([{
  key: 'SECTION_0',
  component: <AggregatorItem key="1" name="Slide Panel Section" disclosureType="panel" />,
}, {
  key: 'SECTION_1',
  component: <AggregatorItem key="2" name="Modal Section" disclosureType="modal" />,
}, {
  key: 'SECTION_2',
  component: <SimpleAggregatorItem key="3" name="No Disclosure Section" />,
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
