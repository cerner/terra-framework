/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { IntlProvider } from 'react-intl';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import HiddenTab from '../../src/common-tabs/_HiddenTab';

jest.mock('../../src/common-tabs/_TabUtils', () => ({
  handleArrows: jest.fn(),
  enableFocusStyles: jest.fn(),
  disableFocusStyles: jest.fn(),
}));

jest.mock('uuid', () => ({ v4: () => '00000000-0000-0000-0000-000000000000' }));

describe('HiddenTab', () => {
  test('should render a hidden tab with provided props and selection handling', () => {
    const mockOnSelect = jest.fn();

    const testMetaData = { data: 'test' };
    const testTabIds = ['tab-1', 'tab-2'];
    const testIndex = 10;

    const wrapper = enzymeIntl.mountWithIntl(
      <IntlProvider>
        <HiddenTab
          id="tab-1"
          associatedPanelId="panel-1"
          index={testIndex}
          label="Tab 1 Label"
          itemKey="tab-1-key"
          metaData={testMetaData}
          tabIds={testTabIds}
          onSelect={mockOnSelect}
          onBlur={jest.fn()}
          onFocus={jest.fn()}
        />
      </IntlProvider>,
    );
    const tabElement = wrapper.find('#tab-1').at(2);

    // Perform assertions
    expect(tabElement.exists()).toBe(true);
    expect(tabElement.prop('aria-controls')).toBe('panel-1');
    expect(tabElement.prop('id')).toBe('tab-1');

    tabElement.simulate('click');
    expect(mockOnSelect).toHaveBeenCalledWith('tab-1-key', testMetaData);
    mockOnSelect.mockClear();

    // tabElement.simulate('keydown', { key: 'Enter' });
    // expect(mockOnSelect).toHaveBeenCalledWith('tab-1-key', testMetaData);
    // mockOnSelect.mockClear();

    // tabElement.simulate('keydown', { key: ' ' });
    // expect(mockOnSelect).toHaveBeenCalledWith('tab-1-key', testMetaData);
    // mockOnSelect.mockClear();
    expect(wrapper).toMatchSnapshot();
  });

  test('should render a hidden tab as selected', () => {
    const testMetaData = { data: 'test' };
    render((
      <IntlProvider>
        <HiddenTab
          id="tab-1"
          associatedPanelId="panel-1"
          index={0}
          label="Tab 1 Label"
          itemKey="tab-1-key"
          metaData={testMetaData}
          tabIds={['tab-1', 'tab-2']}
          onSelect={jest.fn()}
          onBlur={jest.fn()}
          onFocus={jest.fn()}
          isSelected
        />
      </IntlProvider>
    ));

    const tabElement = screen.getByRole('tab', { name: 'Tab 1 Label', selected: true });
    expect(tabElement).toBeInTheDocument();
  });
});
