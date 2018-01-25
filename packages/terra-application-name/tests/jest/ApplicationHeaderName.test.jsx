import React from 'react';
import ApplicationHeaderName from '../../src/ApplicationHeaderName';

describe('ApplicationHeaderName', () => {
  it('should render a default component', () => {
    const wrapper = shallow(<ApplicationHeaderName />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with provided accessory', () => {
    const wrapper = shallow(<ApplicationHeaderName accessory={<img alt="this is the accessory" />} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with provided size', () => {
    const wrapper = shallow(<ApplicationHeaderName size="tiny" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with provided title', () => {
    const wrapper = shallow(<ApplicationHeaderName subtitle="subtitle" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with provided accessory, size, and title', () => {
    const wrapper = shallow(<ApplicationHeaderName accessory={<img alt="this is the accessory" />} size="tiny" title="title" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should have the class application-header-name', () => {
    const wrapper = shallow(<ApplicationHeaderName />);
    expect(wrapper.prop('className')).toContain('application-header-name');
  });
});
