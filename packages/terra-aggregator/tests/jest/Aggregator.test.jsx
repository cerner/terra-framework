import React from 'react';
import Aggregator from '../../src/Aggregator';

describe('Aggregator', () => {
  const defaultRender = <Aggregator />;

  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  // Prop Tests
  it('should use the default value when no value is given', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.find('.aggregator').text()).toEqual('defualt');
  });

  // Structure Tests
  it('should have the class aggregator', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.prop('className')).toContain('aggregator');
  });
});
