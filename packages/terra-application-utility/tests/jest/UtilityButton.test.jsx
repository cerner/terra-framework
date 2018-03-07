import React from 'react';
import UtilityButton from '../../src/utility/_UtilityButton';
import MockConfig from '../../examples/index-examples/MockConfig';

describe('UtilityButton', () => {
  const mockOnChange = jest.fn();
  const mockOnDisclose = jest.fn();
  const mockOnRequestClose = jest.fn();
  const accessory = <Image />;
  const selectedKey = 'menu';
  const title = 'name';
  const variant = 'header';

  it('should render with default props', () => {
    const wrapper = shallow(
      <UtilityButton
        menuItems={[]}
        onChange={mockOnChange}
        onDisclose={mockOnDisclose}
        onRequestClose={mockOnRequestClose}
        variant={variant}
        selectedKey={selectedKey}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with a title', () => {
    const wrapper = shallow(
      <UtilityButton
        menuItems={[]}
        onChange={mockOnChange}
        onDisclose={mockOnDisclose}
        onRequestClose={mockOnRequestClose}
        title={title}
        variant={variant}
        selectedKey={selectedKey}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with an accessory', () => {
    const wrapper = shallow(
      <UtilityButton
        menuItems={[]}
        onChange={mockOnChange}
        onDisclose={mockOnDisclose}
        onRequestClose={mockOnRequestClose}
        accessory={accessory}
        variant={variant}
        selectedKey={selectedKey}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with menu items', () => {
    const wrapper = shallow(
      <UtilityButton
        menuItems={MockConfig()}
        onChange={mockOnChange}
        onDisclose={mockOnDisclose}
        onRequestClose={mockOnRequestClose}
        variant={variant}
        selectedKey={selectedKey}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('it should pass in a custom prop', () => {
    const wrapper = shallow(
      <UtilityButton
        menuItems={[]}
        onChange={mockOnChange}
        onDisclose={mockOnDisclose}
        onRequestClose={mockOnRequestClose}
        variant={variant}
        selectedKey={selectedKey}
        id="test"
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
