import React from 'react';
import NavigationLayout from '../../src/NavigationLayout';

describe('NavigationLayout', () => {
  // Snapshot Tests
  it('should render a default NavigationLayout', () => {
    const wrapper = shallow(<NavigationLayout />);
    expect(wrapper).toMatchSnapshot();
  });
});
