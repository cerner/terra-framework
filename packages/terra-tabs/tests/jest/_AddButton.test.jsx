import React from 'react';
import { IntlProvider } from 'react-intl';

import AddButton from '../../src/common-tabs/_AddButton';

describe('MoreButton', () => {
  test('should render a add button with provided props and selection handling', () => {
    const mockOnSelect = jest.fn();
    const testTabIds = ['tab-1', 'tab-2', 'tab-3', 'addbtn'];

    const wrapper = enzymeIntl.mountWithIntl(
      <IntlProvider>
        <AddButton
          id="addbtn"
          index={testTabIds.length + 1}
          onSelect={mockOnSelect}
          tabIds={testTabIds}
          isSelected={false}
          addAriaLabel="add tab"
        />
      </IntlProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
