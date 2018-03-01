import React from 'react';
import { UserData } from '../../src/ApplicationUtility';
import MenuUtilityMenuItem from '../../src/header/_HeaderUtilityMenuItem';

describe('MenuUtilityMenuItem', () => {
  const mockOnChange = jest.fn();
  const title = 'title';
  const content = (<UserData />);
  const contentLocation = 'footer';

  it('should render with default props', () => {
    const wrapper = shallow(
      <MenuUtilityMenuItem
        itemKey="key"
        onChange={mockOnChange}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with a title', () => {
    const wrapper = shallow(
      <MenuUtilityMenuItem
        itemKey="key"
        onChange={mockOnChange}
        title={title}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with content', () => {
    const wrapper = shallow(
      <MenuUtilityMenuItem
        itemKey="key"
        onChange={mockOnChange}
        content={content}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with a content location', () => {
    const wrapper = shallow(
      <MenuUtilityMenuItem
        itemKey="key"
        onChange={mockOnChange}
        contentLocation={contentLocation}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with isSelected set', () => {
    const wrapper = shallow(
      <MenuUtilityMenuItem
        itemKey="key"
        onChange={mockOnChange}
        isSelected
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with isSelectable set', () => {
    const wrapper = shallow(
      <MenuUtilityMenuItem
        itemKey="key"
        onChange={mockOnChange}
        isSelectable
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with hasChevron set', () => {
    const wrapper = shallow(
      <MenuUtilityMenuItem
        itemKey="key"
        onChange={mockOnChange}
        isSelectable
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should pass in a custom prop', () => {
    const wrapper = shallow(
      <MenuUtilityMenuItem
        itemKey="key"
        onChange={mockOnChange}
        id="test"
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
