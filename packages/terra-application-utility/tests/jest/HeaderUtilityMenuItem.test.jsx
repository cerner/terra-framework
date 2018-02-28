import React from 'react';
import { UserData } from '../../src/ApplicationUtility';
import HeaderUtilityMenuItem from '../../src/header/_HeaderUtilityMenuItem';

describe('HeaderUtilityMenuItem', () => {
  const mockOnChange = jest.fn();

  it('should render a header utility menu item', () => {
    const wrapper = shallow(
      <HeaderUtilityMenuItem
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
