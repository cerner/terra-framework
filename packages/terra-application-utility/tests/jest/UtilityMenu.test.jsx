import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { IntlProvider } from 'react-intl';
import messages from '../../translations/en-US.json';
import HeaderUtilityMenu from '../../src/utility/_UtilityMenu';

describe('UtilityMenu', () => {
  const mockOnChange = jest.fn();
  const mockOnDisclose = jest.fn();
  const mockOnRequestClose = jest.fn();
  const config = [{
    key: 'key', title: 'title', contentLocation: 'footer', isSelected: false, childKeys: [],
  }];
  const variant = 'header';
  const locale = 'en-US';

  it('should render with default props', () => {
    const component = (
      <IntlProvider locale={locale} messages={messages}>
        <HeaderUtilityMenu
          initialSelectedKey="key"
          menuItems={config}
          onChange={mockOnChange}
          onDisclose={mockOnDisclose}
          variant={variant}
        />
      </IntlProvider>
    );
    const wrapper = shallow(component);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with isHeightBounded', () => {
    const component = (
      <IntlProvider locale={locale} messages={messages}>
        <HeaderUtilityMenu
          initialSelectedKey="key"
          isHeightBounded
          menuItems={config}
          onChange={mockOnChange}
          onDisclose={mockOnDisclose}
          variant={variant}
        />
      </IntlProvider>);
    const wrapper = shallow(component);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with onRequestClose set', () => {
    const component = (
      <IntlProvider locale={locale} messages={messages}>
        <HeaderUtilityMenu
          initialSelectedKey="key"
          menuItems={config}
          onChange={mockOnChange}
          onDisclose={mockOnDisclose}
          onRequestClose={mockOnRequestClose}
          variant={variant}
        />
      </IntlProvider>);
    const wrapper = shallow(component);
    expect(wrapper).toMatchSnapshot();
  });

  it('it should pass in a custom prop', () => {
    const component = (
      <IntlProvider locale={locale} messages={messages}>
        <HeaderUtilityMenu
          initialSelectedKey="key"
          menuItems={config}
          onChange={mockOnChange}
          onDisclose={mockOnDisclose}
          variant={variant}
          id="test"
        />
      </IntlProvider>);
    const wrapper = shallow(component);
    expect(wrapper).toMatchSnapshot();
  });
});
