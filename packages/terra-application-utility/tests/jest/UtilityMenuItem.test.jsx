import React from 'react';
import HeaderUtilityMenuItem from '../../src/utility/_UtilityMenuItem';

describe('UtilityMenuItem', () => {
  const mockOnChange = jest.fn();
  const title = 'title';
  const content = (<div> test</div>);
  const contentLocation = 'footer';
  const variant = 'header';

  it('should render with default props', () => {
    const wrapper = shallow(<HeaderUtilityMenuItem
      itemKey="key"
      onChange={mockOnChange}
      variant={variant}
    />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with a title', () => {
    const wrapper = shallow(<HeaderUtilityMenuItem
      itemKey="key"
      onChange={mockOnChange}
      title={title}
      variant={variant}
    />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with content', () => {
    const wrapper = shallow(<HeaderUtilityMenuItem
      itemKey="key"
      onChange={mockOnChange}
      content={content}
      variant={variant}
    />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with a content location', () => {
    const wrapper = shallow(<HeaderUtilityMenuItem
      itemKey="key"
      onChange={mockOnChange}
      contentLocation={contentLocation}
      variant={variant}
    />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with isActive', () => {
    const wrapper = shallow(<HeaderUtilityMenuItem
      itemKey="key"
      onChange={mockOnChange}
      hasChevron
      variant={variant}
      isActive
    />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with isSelected', () => {
    const wrapper = shallow(<HeaderUtilityMenuItem
      itemKey="key"
      onChange={mockOnChange}
      isSelected
      variant={variant}
    />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with isSelectable', () => {
    const wrapper = shallow(<HeaderUtilityMenuItem
      itemKey="key"
      onChange={mockOnChange}
      isSelectable
      variant={variant}
    />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with hasChevron', () => {
    const wrapper = shallow(<HeaderUtilityMenuItem
      itemKey="key"
      onChange={mockOnChange}
      hasChevron
      variant={variant}
    />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with onKeyDown', () => {
    const wrapper = shallow(<HeaderUtilityMenuItem
      itemKey="key"
      onChange={mockOnChange}
      onKeyDown={jest.fn()}
      variant={variant}
    />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with leftInset', () => {
    const wrapper = shallow(<HeaderUtilityMenuItem
      itemKey="key"
      onChange={mockOnChange}
      hasChevron
      variant={variant}
      leftInset
    />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with rightInset', () => {
    const wrapper = shallow(<HeaderUtilityMenuItem
      itemKey="key"
      onChange={mockOnChange}
      hasChevron
      variant={variant}
      leftInset
    />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should pass in a custom prop', () => {
    const wrapper = shallow(<HeaderUtilityMenuItem
      itemKey="key"
      onChange={mockOnChange}
      variant={variant}
      id="test"
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
