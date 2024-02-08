/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { IntlProvider } from 'react-intl';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import TabDropDown from '../../src/common-tabs/_TabDropDown';
import HiddenTab from '../../src/common-tabs/_HiddenTab';

jest.mock('uuid', () => ({ v4: () => '00000000-0000-0000-0000-000000000000' }));

describe('TabDropDown', () => {
  test('should render the dropdown with provided hidden tabs', () => {
    const mockOnSelect = jest.fn();
    let mockRef;
    render((
      <IntlProvider>
        <TabDropDown
          refCallback={(ref) => { mockRef = ref; }}
        >
          <HiddenTab
            id="tab-1"
            associatedPanelId="panel-1"
            index={0}
            label="Tab 1 Label"
            itemKey="tab-1-key"
            onSelect={mockOnSelect}
            tabIds={['tab-1', 'tab-2']}
            onBlur={() => {}}
            onFocus={() => {}}
          />
          <HiddenTab
            id="tab-2"
            associatedPanelId="panel-2"
            index={0}
            label="Tab 2 Label"
            itemKey="tab-2-key"
            onSelect={mockOnSelect}
            tabIds={['tab-1', 'tab-2']}
            onBlur={() => {}}
            onFocus={() => {}}
          />
        </TabDropDown>
      </IntlProvider>
    ));

    expect(screen.getByRole('none')).toBe(mockRef);
    expect(screen.getByRole('tab', { name: 'Tab 1 Label' })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'Tab 2 Label' })).toBeInTheDocument();

    const wrapper = enzymeIntl.mountWithIntl(
      <IntlProvider>
        <TabDropDown
          refCallback={(ref) => { mockRef = ref; }}
        >
          <HiddenTab
            id="tab-1"
            associatedPanelId="panel-1"
            index={0}
            label="Tab 1 Label"
            itemKey="tab-1-key"
            onSelect={mockOnSelect}
            tabIds={['tab-1', 'tab-2']}
            onBlur={() => {}}
            onFocus={() => {}}
          />
          <HiddenTab
            id="tab-2"
            associatedPanelId="panel-2"
            index={0}
            label="Tab 2 Label"
            itemKey="tab-2-key"
            onSelect={mockOnSelect}
            tabIds={['tab-1', 'tab-2']}
            onBlur={() => {}}
            onFocus={() => {}}
          />
        </TabDropDown>
      </IntlProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
