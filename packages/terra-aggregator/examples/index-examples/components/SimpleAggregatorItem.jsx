import React from 'react';
import PropTypes from 'prop-types';
import ContentContainer from 'terra-content-container';
import Header from 'terra-clinical-header';

const propTypes = {
  aggregatorDelegate: PropTypes.object,
  name: PropTypes.string,
};

const SimpleAggregatorItem = ({ name, aggregatorDelegate, ...customProps }) => (
  <ContentContainer
    {...customProps}
    header={(
      <Header
        title={name}
      />
    )}
  >
    { aggregatorDelegate.hasFocus ?
      <button
        onClick={() => {
          aggregatorDelegate.releaseFocus();
        }}
      >
        Release Focus
      </button> :
      <button
        onClick={() => {
          aggregatorDelegate.requestFocus();
        }}
      >
        Get Focus
      </button>
    }
    {aggregatorDelegate.hasFocus ? <h4>Section has focus!</h4> : null}
  </ContentContainer>
);

SimpleAggregatorItem.propTypes = propTypes;

export default SimpleAggregatorItem;
