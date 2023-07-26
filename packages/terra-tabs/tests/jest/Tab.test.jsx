import React from 'react';
import Tab from '../../src/common-tabs/_Tab';

describe('Tab', () => {
  it('should render a common tab as disabled when indicated', () => {
    const wrapper = shallow(<Tab label="Label" isDisabled variant="framework" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a common tab with custom props', () => {
    const wrapper = shallow(<Tab label="Default" className="customClass" variant="framework" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('correctly applies the theme context className', () => {
    jest.spyOn(React, 'useContext')
      .mockReturnValue({
        className: 'orion-fusion-theme',
      });
    const wrapper = shallow(<Tab label="Default" className="customClass" variant="framework" />);
    expect(wrapper).toMatchSnapshot();
  });
});
