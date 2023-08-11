import React from 'react';
import { IntlProvider } from 'react-intl';
import { mountWithIntl } from 'terra-enzyme-intl';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

import HiddenTab from '../../src/common-tabs/_HiddenTab';

import * as TabUtils from '../../src/common-tabs/_TabUtils';

jest.mock('../../src/common-tabs/_TabUtils', () => ({
  handleArrows: jest.fn(),
  enableFocusStyles: jest.fn(),
  disableFocusStyles: jest.fn(),
}));

describe('HiddenTab', () => {
  test('should render a hidden tab with provided props and selection handling', () => {
    const mockOnSelect = jest.fn();

    const testMetaData = { data: 'test' };
    const testTabIds = ['tab-1', 'tab-2'];
    const testIndex = 10;

    render((
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
      </IntlProvider>
    ));

    const tabElement = screen.getByRole('tab', { name: 'Tab 1 Label', selected: false });
    expect(tabElement).toBeInTheDocument();
    expect(tabElement).toHaveAttribute('aria-controls', 'panel-1');
    expect(tabElement).toHaveAttribute('id', 'tab-1');

    userEvent.click(tabElement);

    expect(mockOnSelect).toHaveBeenCalledWith('tab-1-key', testMetaData);
    mockOnSelect.mockClear();

    tabElement.focus();
    userEvent.type(tabElement, '{enter}', { skipClick: true });
    expect(mockOnSelect).toHaveBeenCalledWith('tab-1-key', testMetaData);
    mockOnSelect.mockClear();

    tabElement.focus();
    userEvent.type(tabElement, '{space}', { skipClick: true });
    expect(mockOnSelect).toHaveBeenCalledWith('tab-1-key', testMetaData);
    mockOnSelect.mockClear();

    tabElement.focus();
    userEvent.type(tabElement, '{arrowright}', { skipClick: true });
    expect(mockOnSelect).not.toHaveBeenCalledWith();
    expect(TabUtils.handleArrows).toHaveBeenCalledWith(expect.anything(), testIndex, testTabIds);
    mockOnSelect.mockClear();

    const wrapper = mountWithIntl(
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
