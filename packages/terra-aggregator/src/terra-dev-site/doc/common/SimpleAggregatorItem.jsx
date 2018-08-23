import React from 'react';
import PropTypes from 'prop-types';
import ContentContainer from 'terra-content-container';
import SectionHeader from 'terra-section-header';

const propTypes = {
  aggregatorDelegate: PropTypes.object,
  name: PropTypes.string,
};

const SimpleAggregatorItem = ({ name, aggregatorDelegate, ...customProps }) => (
  <ContentContainer
    {...customProps}
    header={(
      <SectionHeader
        title={name}
      />
    )}
  >
    { aggregatorDelegate.hasFocus
      ? (
        <button
          type="button"
          onClick={() => {
            aggregatorDelegate.releaseFocus();
          }}
        >
        Release Focus
        </button>
      )
      : (
        <button
          type="button"
          onClick={() => {
            aggregatorDelegate.requestFocus();
          }}
        >
        Get Focus
        </button>
      )
    }
    {aggregatorDelegate.hasFocus ? <h4>Section has focus!</h4> : null}
  </ContentContainer>
);

SimpleAggregatorItem.propTypes = propTypes;

export default SimpleAggregatorItem;
