import React from 'react';
import NavigationSecondary from '../../src/NavigationSecondary';

describe('NavigationSecondary', () => {
  
  // Snapshot Tests
  it('should render a default NavigationSecondary', () => {
    const wrapper = shallow(<NavigationSecondary />);
    expect(wrapper).toMatchSnapshot();
  });

});
