import React from 'react';
import ApplicationHeaderName from '../../src/ApplicationHeaderName';

describe('ApplicationHeaderName', () => {
  it('should render a default component', () => {
    const wrapper = enzyme.shallow(<ApplicationHeaderName />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with provided accessory', () => {
    const wrapper = enzyme.shallow(<ApplicationHeaderName accessory={<img alt="this is the accessory" />} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with provided title', () => {
    const wrapper = enzyme.shallow(<ApplicationHeaderName title="title" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with provided accessory and title', () => {
    const wrapper = enzyme.shallow(<ApplicationHeaderName accessory={<img alt="this is the accessory" />} title="title" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should have the class application-header-name', () => {
    const wrapper = enzyme.shallow(<ApplicationHeaderName />);
    expect(wrapper.prop('className')).toContain('application-header-name');
  });

  it('correctly applies the theme context className', () => {
    jest.spyOn(React, 'useContext')
      .mockReturnValue({
        className: 'clinical-lowlight-theme',
      });
    const wrapper = enzyme.shallow(<ApplicationHeaderName accessory={<img alt="this is the accessory" />} title="title" />);
    expect(wrapper).toMatchSnapshot();
  });
});
