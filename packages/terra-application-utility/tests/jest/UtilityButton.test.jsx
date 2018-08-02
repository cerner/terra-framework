import React from 'react';
import { IntlProvider } from 'react-intl';
import messages from '../../translations/en-US.json';
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
  const locale = 'en-US';

  it('should render with default props', () => {
    const component = (
      <IntlProvider locale={locale} messages={messages}>
        <UtilityButton
          menuItems={[]}
          onChange={mockOnChange}
          onDisclose={mockOnDisclose}
          onRequestClose={mockOnRequestClose}
          variant={variant}
          initialSelectedKey={initialSelectedKey}
        />
      </IntlProvider>
    );
    const wrapper = shallow(component);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with a title', () => {
    const component = (
      <IntlProvider locale={locale} messages={messages}>
        <UtilityButton
          menuItems={[]}
          onChange={mockOnChange}
          onDisclose={mockOnDisclose}
          onRequestClose={mockOnRequestClose}
          title={title}
          variant={variant}
          initialSelectedKey={initialSelectedKey}
        />
      </IntlProvider>
    );
    const wrapper = shallow(component);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with an accessory', () => {
    const component = (
      <IntlProvider locale={locale} messages={messages}>
        <UtilityButton
          menuItems={[]}
          onChange={mockOnChange}
          onDisclose={mockOnDisclose}
          onRequestClose={mockOnRequestClose}
          accessory={accessory}
          variant={variant}
          initialSelectedKey={initialSelectedKey}
        />
      </IntlProvider>
    );
    const wrapper = shallow(component);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with menu items', () => {
    const component = (
      <IntlProvider locale={locale} messages={messages}>
        <UtilityButton
          menuItems={MockConfig()}
          onChange={mockOnChange}
          onDisclose={mockOnDisclose}
          onRequestClose={mockOnRequestClose}
          variant={variant}
          initialSelectedKey={initialSelectedKey}
        />
      </IntlProvider>
    );
    const wrapper = shallow(component);
    expect(wrapper).toMatchSnapshot();
  });

  it('it should pass in a custom prop', () => {
    const component = (
      <IntlProvider locale={locale} messages={messages}>
        <UtilityButton
          menuItems={[]}
          onChange={mockOnChange}
          onDisclose={mockOnDisclose}
          onRequestClose={mockOnRequestClose}
          variant={variant}
          initialSelectedKey={initialSelectedKey}
          id="test"
        />
      </IntlProvider>
    );
    const wrapper = shallow(component);
    expect(wrapper).toMatchSnapshot();
  });
});
