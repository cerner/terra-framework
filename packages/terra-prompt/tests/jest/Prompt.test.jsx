import React from 'react';
import Prompt from '../../src/Prompt';

describe('Prompt', () => {
  const defaultRender = <Prompt />;

  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  // Prop Tests
  it('should use the default value when no value is given', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.find('.prompt').text()).toEqual('default');
  });

  // Structure Tests
  it('should have the class prompt', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.prop('className')).toContain('prompt');
  });
});
