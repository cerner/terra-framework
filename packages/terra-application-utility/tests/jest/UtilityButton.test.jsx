import React from 'react';
import { IntlProvider } from 'react-intl';
import messages from '../../translations/en-US.json';
import UtilityButton from '../../src/utility/_UtilityButton';
import MockConfig from '../../examples/index-examples/MockConfig';

describe('UtilityButton', () => {
  const mockOnChange = jest.fn();
  const mockOnDisclose = jest.fn();
  const mockOnRequestClose = jest.fn();
  const accessory = <Image />;
  const initialSelectedKey = 'menu';
  const title = 'name';
  const variant = 'header';
  const locale = 'en-US';

  it('should render with default props', () => {
    const wrapper = shallow(
      <IntlProvider locale={locale} messages={messages}>
        <UtilityButton
          menuItems={[]}
          onChange={mockOnChange}
          onDisclose={mockOnDisclose}
          onRequestClose={mockOnRequestClose}
          variant={variant}
          initialSelectedKey={initialSelectedKey}
        />
      </IntlProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with a title', () => {
    const wrapper = shallow(
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
      </IntlProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with an accessory', () => {
    const wrapper = shallow(
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
      </IntlProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with menu items', () => {
    const wrapper = shallow(
      <IntlProvider locale={locale} messages={messages}>
        <UtilityButton
          menuItems={MockConfig()}
          onChange={mockOnChange}
          onDisclose={mockOnDisclose}
          onRequestClose={mockOnRequestClose}
          variant={variant}
          initialSelectedKey={initialSelectedKey}
        />
      </IntlProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('it should pass in a custom prop', () => {
    const wrapper = shallow(
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
      </IntlProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
