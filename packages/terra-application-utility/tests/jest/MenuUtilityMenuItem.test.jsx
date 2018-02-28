import React from 'react';
import { UserData } from '../../src/ApplicationUtility';
import MenuUtilityMenuItem from '../../src/header/_HeaderUtilityMenuItem';

describe('MenuUtilityMenuItem', () => {
  const mockOnChange = jest.fn();

  it('should render a menu utility menu item', () => {
    const wrapper = shallow(
      <MenuUtilityMenuItem
        itemKey="key"
        title="title"
        content={<UserData />}
        contentLocation="footer"
        isSelected
        isSelctable
        hasChevron
        onChange={mockOnChange}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
