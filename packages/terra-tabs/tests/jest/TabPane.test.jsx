import React from 'react';
import Pane from '../../src/TabPane';

describe('TabPane', () => {
  it('should render a default component with label', () => {
    const wrapper = shallow(<Pane label="Default" />).dive();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with icon and label', () => {
    const wrapper = shallow(<Pane label="Label" icon={<div>Fake icon</div>} />).dive();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with icon only when indicated', () => {
    const wrapper = shallow(<Pane label="Label" icon={<div>Fake icon</div>} isIconOnly />).dive();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with a custom display when provided', () => {
    const wrapper = shallow(<Pane label="Label" customDisplay={<div>Custom Display</div>} />).dive();
    expect(wrapper).toMatchSnapshot();
  });

  it('correctly applies the theme context className', () => {
    jest.spyOn(React, 'useContext')
      .mockReturnValue({
        className: 'orion-fusion-theme',
      });
    const wrapper = shallow(<Pane label="Default" className="customClass" />).dive();
    expect(wrapper).toMatchSnapshot();
  });
});
