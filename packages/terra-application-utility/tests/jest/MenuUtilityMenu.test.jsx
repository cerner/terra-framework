import React from 'react';
import MenuUtilityMenu from '../../src/menu/_MenuUtilityMenu';

describe('MenuUtilityMenu', () => {
  const mockOnChange = jest.fn();
  const mockOnDisclose = jest.fn();
  const mockOnRequestClose = jest.fn();
  const config = [{ key: 'key', title: 'title', contentLocation: 'footer', isSelected: false, childKeys: [] }];

  it('should render a menu utility menu', () => {
    const wrapper = shallow(
      <MenuUtilityMenu
        initialSelectedKey="key"
        isHeightBounded={false}
        menuItems={config}
        onChange={mockOnChange}
        onDisclose={mockOnDisclose}
        onRequestClose={mockOnRequestClose}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
