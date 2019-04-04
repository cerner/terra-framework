import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl } from 'terra-enzyme-intl';
import HeaderUtilityMenu from '../../src/utility/_UtilityMenu';

describe('UtilityMenu', () => {
  const mockOnChange = jest.fn();
  const mockOnDisclose = jest.fn();
  const mockOnRequestClose = jest.fn();
  const config = [{
    key: 'key', title: 'title', contentLocation: 'footer', isSelected: false, childKeys: [],
  }];
  const variant = 'header';

  it('should render with default props', () => {
    const component = (
      <HeaderUtilityMenu
        initialSelectedKey="key"
        menuItems={config}
        onChange={mockOnChange}
        onDisclose={mockOnDisclose}
        variant={variant}
      />
    );
    const wrapper = shallowWithIntl(component);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with isHeightBounded', () => {
    const component = (
      <HeaderUtilityMenu
        initialSelectedKey="key"
        isHeightBounded
        menuItems={config}
        onChange={mockOnChange}
        onDisclose={mockOnDisclose}
        variant={variant}
      />
    );
    const wrapper = shallowWithIntl(component);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with onRequestClose set', () => {
    const component = (
      <HeaderUtilityMenu
        initialSelectedKey="key"
        menuItems={config}
        onChange={mockOnChange}
        onDisclose={mockOnDisclose}
        onRequestClose={mockOnRequestClose}
        variant={variant}
      />
    );
    const wrapper = shallowWithIntl(component);
    expect(wrapper).toMatchSnapshot();
  });

  it('it should render with a read-only menu item', () => {
    const menuitem = [{
      key: 'key', title: 'title', contentLocation: 'footer', isReadOnly: true, childKeys: [],
    }];
    const component = (
      <HeaderUtilityMenu
        initialSelectedKey="key"
        menuItems={menuitem}
        onChange={mockOnChange}
        onDisclose={mockOnDisclose}
        variant={variant}
        id="test"
      />
    );
    const wrapper = shallowWithIntl(component);
    expect(wrapper).toMatchSnapshot();
  });

  it('it should pass in a custom prop', () => {
    const component = (
      <HeaderUtilityMenu
        initialSelectedKey="key"
        menuItems={config}
        onChange={mockOnChange}
        onDisclose={mockOnDisclose}
        variant={variant}
        id="test"
      />
    );
    const wrapper = shallowWithIntl(component);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with a user specified role', () => {
    const menuRole = 'menu';
    const component = (
      <HeaderUtilityMenu
        initialSelectedKey="key"
        menuItems={config}
        onChange={mockOnChange}
        onDisclose={mockOnDisclose}
        variant={variant}
        menuRole={menuRole}
        id="test"
      />
    );
    const wrapper = shallowWithIntl(component);
    expect(wrapper.prop('menuRole')).toBe(menuRole);
    expect(wrapper).toMatchSnapshot();
  });
});
