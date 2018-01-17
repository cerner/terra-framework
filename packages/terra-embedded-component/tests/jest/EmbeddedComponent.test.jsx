import React from 'react';
import EmbeddedComponent from '../../src/EmbeddedComponent';

describe('EmbeddedComponent', () => {
  const defaultRender = <EmbeddedComponent />;

  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  // Prop Tests
  it('should use the default value when no value is given', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.find('.embedded-component').text()).toEqual('default');
  });

  // Structure Tests
  it('should have the class embedded-component', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.prop('className')).toContain('embedded-component');
  });
});
