import React from 'react';
import OutlineView from '../../src/OutlineView';

describe('OutlineView', () => {
  const defaultRender = <OutlineView />;

  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  // Prop Tests
  it('should use the default value when no value is given', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.find('.outline-view').text()).toEqual('default');
  });

  // Structure Tests
  it('should have the class outline-view', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.prop('className')).toContain('outline-view');
  });
});
