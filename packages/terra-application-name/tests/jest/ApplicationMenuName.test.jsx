import React from 'react';
import ApplicationMenuName from '../../src/ApplicationMenuName';

describe('ApplicationMenuName', () => {
  it('should render a default component', () => {
    const wrapper = enzyme.shallow(<ApplicationMenuName />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with provided accessory', () => {
    const wrapper = enzyme.shallow(<ApplicationMenuName accessory={<img alt="this is the accessory" />} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with provided size', () => {
    const wrapper = enzyme.shallow(<ApplicationMenuName size="tiny" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with provided title', () => {
    const wrapper = enzyme.shallow(<ApplicationMenuName title="title" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with provided accessory and title', () => {
    const wrapper = enzyme.shallow(<ApplicationMenuName accessory={<img alt="this is the accessory" />} title="title" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should have the class application-header-name', () => {
    const wrapper = enzyme.shallow(<ApplicationMenuName />);
    expect(wrapper.prop('className')).toContain('application-menu-name');
  });

  it('correctly applies the theme context className', () => {
    jest.spyOn(React, 'useContext')
      .mockReturnValue({
        className: 'clinical-lowlight-theme',
      });
    const wrapper = enzyme.shallow(<ApplicationMenuName accessory={<img alt="this is the accessory" />} title="title" />);
    expect(wrapper).toMatchSnapshot();
  });
});
