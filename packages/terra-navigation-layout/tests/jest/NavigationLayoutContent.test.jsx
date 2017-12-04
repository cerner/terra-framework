import React from 'react';
import AppDelegate from 'terra-app-delegate';
import NavigationLayoutContent from '../../src/NavigationLayoutContent';

describe('NavigationLayoutContent', () => {
  // Snapshot Tests
  it('should render a default NavigationLayoutContent', () => {
    const wrapper = shallow(<NavigationLayoutContent />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a NavigationLayoutContent with provided props', () => {
    const wrapper = shallow(<NavigationLayoutContent
      app={AppDelegate.create({})}
      navigationLayoutRoutes={[]}
      redirectPath="/"
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
