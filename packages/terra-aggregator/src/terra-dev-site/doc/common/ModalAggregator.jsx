import React from 'react';
import PropTypes from 'prop-types';
import ContentContainer from 'terra-content-container';
import ActionHeader from 'terra-action-header';
import { withDisclosureManager } from 'terra-disclosure-manager';

import Aggregator from '../../../Aggregator';
import AggregatorItem from './AggregatorItem';
import SimpleAggregatorItem from './SimpleAggregatorItem';

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

const ModalAggregator = ({ disclosureManager }) => (
  <ContentContainer
    fill
    header={<ActionHeader onClose={disclosureManager.closeDisclosure} onBack={disclosureManager.goBack} />}
  >
    <Aggregator
      items={items}
      disclose={disclosureManager.disclose}
    />
  </ContentContainer>
);

ModalAggregator.propTypes = {
  disclosureManager: PropTypes.object,
};

export default withDisclosureManager(ModalAggregator);
