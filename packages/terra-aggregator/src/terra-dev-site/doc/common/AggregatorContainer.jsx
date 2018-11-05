import React from 'react';
import PropTypes from 'prop-types';
import Aggregator from '../../../Aggregator';

const propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    component: PropTypes.element,
  })),
};

const AggregatorContainer = ({ items }) => (
  <Aggregator
    items={items}
  />
);

AggregatorContainer.propTypes = propTypes;

export default AggregatorContainer;
