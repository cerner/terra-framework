import React from 'react';
import RoutingStack from '../../../src/routing/RoutingStack';

describe('RoutingStack', () => {
  // Snapshot Tests
  it('should render a default RoutingStack', () => {
    const wrapper = shallow(<RoutingStack />);
    expect(wrapper).toMatchSnapshot();
  });
});
