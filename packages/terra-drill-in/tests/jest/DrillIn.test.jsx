import React from 'react';
import DrillIn from '../../src/DrillIn';

describe('DrillIn', () => {
  const defaultRender = <DrillIn />;

  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  // Prop Tests
  it('should use the default value when no value is given', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.find('.drill-in').text()).toEqual('default');
  });

  // Structure Tests
  it('should have the class drill-in', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.prop('className')).toContain('drill-in');
  });
});
