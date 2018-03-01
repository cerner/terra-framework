import React from 'react';
import MenuUtilityMenu from '../../src/menu/_MenuUtilityMenu';

describe('MenuUtilityMenu', () => {
  const mockOnChange = jest.fn();
  const mockOnDisclose = jest.fn();
  const mockOnRequestClose = jest.fn();
  const config = [{ key: 'key', title: 'title', contentLocation: 'footer', isSelected: false, childKeys: [] }];

  it('should render with default props', () => {
    const wrapper = shallow(
      <MenuUtilityMenu
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
      <MenuUtilityMenu
        initialSelectedKey="key"
        menuItems={config}
        onChange={mockOnChange}
        onDisclose={mockOnDisclose}
        isHeightBounded
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with onRequestClose', () => {
    const wrapper = shallow(
      <MenuUtilityMenu
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
      <MenuUtilityMenu
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
