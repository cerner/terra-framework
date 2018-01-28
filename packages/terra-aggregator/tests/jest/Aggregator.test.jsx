import React from 'react';
import Aggregator from '../../src/Aggregator';

describe('Aggregator', () => {
  const defaultRender = <Aggregator />;

  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });
});
