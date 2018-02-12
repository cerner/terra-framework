import React from 'react';
import ApplicationMenuName from '../../src/ApplicationMenuName';

describe('ApplicationMenuName', () => {
  it('should render a default component', () => {
    const wrapper = shallow(<ApplicationMenuName />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with provided accessory', () => {
    const wrapper = shallow(<ApplicationMenuName accessory={<img alt="this is the accessory" />} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with provided size', () => {
    const wrapper = shallow(<ApplicationMenuName size="tiny" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with provided title', () => {
    const wrapper = shallow(<ApplicationMenuName title="title" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with provided accessory and title', () => {
    const wrapper = shallow(<ApplicationMenuName accessory={<img alt="this is the accessory" />} title="title" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should have the class application-header-name', () => {
    const wrapper = shallow(<ApplicationMenuName />);
    expect(wrapper.prop('className')).toContain('application-menu-name');
  });
});
