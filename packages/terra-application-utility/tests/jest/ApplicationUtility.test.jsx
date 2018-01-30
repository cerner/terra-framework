import React from 'react';
import ApplicationUtility from '../../src/ApplicationUtility';

describe('ApplicationUtility', () => {
  const defaultRender = <ApplicationUtility />;

  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  // Prop Tests
  it('should use the default value when no value is given', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.find('.application-utility').text()).toEqual('default');
  });

  // Structure Tests
  it('should have the class application-utility', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.prop('className')).toContain('application-utility');
  });
});
