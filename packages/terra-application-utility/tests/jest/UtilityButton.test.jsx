import React from 'react';
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';
import UtilityButton from '../../src/utility/_UtilityButton';
import MockConfig from '../../src/terra-dev-site/doc/common/MockConfig';

describe('UtilityButton', () => {
  const mockOnChange = jest.fn();
  const mockOnDisclose = jest.fn();
  const mockOnRequestClose = jest.fn();
  const accessory = <image />;
  const initialSelectedKey = 'menu';
  const title = 'name';
  const variant = 'header';

  it('should render with default props', () => {
    const component = (
      <UtilityButton
        menuItems={[]}
        onChange={mockOnChange}
        onDisclose={mockOnDisclose}
        onRequestClose={mockOnRequestClose}
        variant={variant}
        initialSelectedKey={initialSelectedKey}
      />
    );
    const wrapper = enzymeIntl.shallowWithIntl(component);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with a title', () => {
    const component = (
      <UtilityButton
        menuItems={[]}
        onChange={mockOnChange}
        onDisclose={mockOnDisclose}
        onRequestClose={mockOnRequestClose}
        title={title}
        variant={variant}
        initialSelectedKey={initialSelectedKey}
      />
    );
    const wrapper = enzymeIntl.shallowWithIntl(component);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with an accessory', () => {
    const component = (
      <UtilityButton
        menuItems={[]}
        onChange={mockOnChange}
        onDisclose={mockOnDisclose}
        onRequestClose={mockOnRequestClose}
        accessory={accessory}
        variant={variant}
        initialSelectedKey={initialSelectedKey}
      />
    );
    const wrapper = enzymeIntl.shallowWithIntl(component);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with menu items', () => {
    const component = (
      <UtilityButton
        menuItems={MockConfig()}
        onChange={mockOnChange}
        onDisclose={mockOnDisclose}
        onRequestClose={mockOnRequestClose}
        variant={variant}
        initialSelectedKey={initialSelectedKey}
      />
    );
    const wrapper = enzymeIntl.shallowWithIntl(component);
    expect(wrapper).toMatchSnapshot();
  });

  it('it should pass in a custom prop', () => {
    const component = (
      <UtilityButton
        menuItems={[]}
        onChange={mockOnChange}
        onDisclose={mockOnDisclose}
        onRequestClose={mockOnRequestClose}
        variant={variant}
        initialSelectedKey={initialSelectedKey}
        id="test"
      />
    );
    const wrapper = enzymeIntl.shallowWithIntl(component);
    expect(wrapper).toMatchSnapshot();
  });

  it('correctly applies the theme context className', () => {
    const component = enzymeIntl.shallowWithIntl(
      <ThemeContextProvider theme={{ className: 'orion-fusion-theme' }}>
        <UtilityButton
          menuItems={[]}
          onChange={mockOnChange}
          onDisclose={mockOnDisclose}
          onRequestClose={mockOnRequestClose}
          variant={variant}
          initialSelectedKey={initialSelectedKey}
        />
      </ThemeContextProvider>,
    );
    expect(component).toMatchSnapshot();
  });
});
