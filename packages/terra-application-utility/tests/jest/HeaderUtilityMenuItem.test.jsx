import React from 'react';
import { UserData } from '../../src/ApplicationUtility';
import HeaderUtilityMenuItem from '../../src/header/_HeaderUtilityMenuItem';

describe('HeaderUtilityMenuItem', () => {
  const mockOnChange = jest.fn();
  const title = 'title';
  const content = (<UserData />);
  const contentLocation = 'footer';

  it('should render a header utility menu item with default props', () => {
    const wrapper = shallow(
      <HeaderUtilityMenuItem
        itemKey="key"
        onChange={mockOnChange}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a header utility menu item with a title', () => {
    const wrapper = shallow(
      <HeaderUtilityMenuItem
        itemKey="key"
        onChange={mockOnChange}
        title={title}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a header utility menu item with content', () => {
    const wrapper = shallow(
      <HeaderUtilityMenuItem
        itemKey="key"
        onChange={mockOnChange}
        content={content}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a header utility menu item with a content location', () => {
    const wrapper = shallow(
      <HeaderUtilityMenuItem
        itemKey="key"
        onChange={mockOnChange}
        contentLocation={contentLocation}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a header utility menu item with isSelected set', () => {
    const wrapper = shallow(
      <HeaderUtilityMenuItem
        itemKey="key"
        onChange={mockOnChange}
        isSelected
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a header utility menu item with isSelectable set', () => {
    const wrapper = shallow(
      <HeaderUtilityMenuItem
        itemKey="key"
        onChange={mockOnChange}
        isSelectable
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a header utility menu item with hasChevron set', () => {
    const wrapper = shallow(
      <HeaderUtilityMenuItem
        itemKey="key"
        onChange={mockOnChange}
        isSelectable
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
