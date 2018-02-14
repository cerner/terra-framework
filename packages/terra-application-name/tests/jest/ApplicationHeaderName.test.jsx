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

  it('should render with provided title', () => {
    const wrapper = shallow(<ApplicationHeaderName title="title" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with provided accessory and title', () => {
    const wrapper = shallow(<ApplicationHeaderName accessory={<img alt="this is the accessory" />} title="title" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should have the class application-header-name', () => {
    const wrapper = shallow(<ApplicationHeaderName />);
    expect(wrapper.prop('className')).toContain('application-header-name');
  });
});
