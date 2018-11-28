import React from 'react';
import NavigationLayoutContent from '../../src/NavigationLayoutContent';

describe('NavigationLayoutContent', () => {
  // Snapshot Tests
  it('should render a default NavigationLayoutContent', () => {
    const wrapper = shallow(<NavigationLayoutContent />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a NavigationLayoutContent with provided props', () => {
    const wrapper = shallow(<NavigationLayoutContent
      navigationLayoutRoutes={[]}
      redirectPath="/"
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
