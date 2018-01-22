import React from 'react';
import ApplicationName from '../../src/ApplicationName';

describe('ApplicationName', () => {
  const defaultRender = <ApplicationName />;

  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  // Prop Tests
  it('should use the default value when no value is given', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.find('.application-name').text()).toEqual('default');
  });

  // Structure Tests
  it('should have the class application-name', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.prop('className')).toContain('application-name');
  });
});
