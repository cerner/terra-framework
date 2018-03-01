import React from 'react';
import HeaderUtilityMenu from '../../src/header/_HeaderUtilityMenu';

describe('HeaderUtilityMenu', () => {
  const mockOnChange = jest.fn();
  const mockOnDisclose = jest.fn();
  const mockOnRequestClose = jest.fn();
  const config = [{ key: 'key', title: 'title', contentLocation: 'footer', isSelected: false, childKeys: [] }];

  it('should render with default props', () => {
    const wrapper = shallow(
      <HeaderUtilityMenu
        initialSelectedKey="key"
        menuItems={config}
        onChange={mockOnChange}
        onDisclose={mockOnDisclose}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with isHeightBounded', () => {
    const wrapper = shallow(
      <HeaderUtilityMenu
        initialSelectedKey="key"
        isHeightBounded
        menuItems={config}
        onChange={mockOnChange}
        onDisclose={mockOnDisclose}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with onRequestClose set', () => {
    const wrapper = shallow(
      <HeaderUtilityMenu
        initialSelectedKey="key"
        menuItems={config}
        onChange={mockOnChange}
        onDisclose={mockOnDisclose}
        onRequestClose={mockOnRequestClose}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('it should pass in a custom prop', () => {
    const wrapper = shallow(
      <HeaderUtilityMenu
        initialSelectedKey="key"
        menuItems={config}
        onChange={mockOnChange}
        onDisclose={mockOnDisclose}
        id="test"
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
