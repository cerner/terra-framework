import React from 'react';
import HeaderUtilityMenu from '../../src/header/_HeaderUtilityMenu';

describe('HeaderUtilityMenu', () => {
  const mockOnChange = jest.fn();
  const mockOnDisclose = jest.fn();
  const mockOnRequestClose = jest.fn();
  const config = [{ key: 'key', title: 'title', contentLocation: 'footer', isSelected: false, childKeys: [] }];

  it('should render a header utility menu', () => {
    const wrapper = shallow(
      <HeaderUtilityMenu
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
