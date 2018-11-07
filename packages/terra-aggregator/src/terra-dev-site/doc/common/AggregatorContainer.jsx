import React from 'react';
import PropTypes from 'prop-types';
import { withDisclosureManager } from 'terra-disclosure-manager';
import Aggregator from '../../../Aggregator';

const propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    component: PropTypes.element,
  })),
};

const AggregatorContainer = withDisclosureManager(({ items, disclosureManager }) => (
  <Aggregator
    items={items}
    disclose={disclosureManager.disclose}
  />
));

AggregatorContainer.propTypes = propTypes;

export default AggregatorContainer;
