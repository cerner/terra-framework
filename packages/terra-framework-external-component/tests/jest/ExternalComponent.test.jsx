import React from 'react';
import ExternalComponent from '../../src/ExternalComponent';

describe('ExternalComponent', () => {
  const defaultRender = <ExternalComponent />;

  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  // Prop Tests
  it('should use the default value when no value is given', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.find('.external-component').text()).toEqual('defualt');
  });

  // Structure Tests
  it('should have the class external-component', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.prop('className')).toContain('external-component');
  });
});
