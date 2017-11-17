import React from 'react';
import NavigationLayoutContent from '../../src/NavigationLayoutContent';

describe('NavigationLayoutContent', () => {
  // Snapshot Tests
  it('should render a default NavigationLayoutContent', () => {
    const wrapper = shallow(<NavigationLayoutContent />);
    expect(wrapper).toMatchSnapshot();
  });
});
