import React from 'react';
import PropTypes from 'prop-types';
import AppDelegate from 'terra-app-delegate';
import Aggregator from '../../../Aggregator';

const propTypes = {
  app: AppDelegate.propType,
  items: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    component: PropTypes.element,
  })),
};

const AggregatorContainer = ({ app, items }) => (
  <Aggregator
    disclose={app.disclose}
    items={items}
  />
);

AggregatorContainer.propTypes = propTypes;

export default AggregatorContainer;
