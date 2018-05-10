import React from 'react';

import ApplicationHeader from '../../src/header/_ApplicationHeader';
import ExtensionsExample from '../../src/terra-dev-site/test/common/ExtensionsExample';

const mockIntl = {
  formatDate: () => 'mock-date',
  formatTime: () => 'mock-time',
  formatRelative: () => 'mock-relative',
  formatNumber: () => 'mock-relative',
  formatPlural: () => 'mock-plural',
  formatMessage: () => 'mock-message',
  formatHTMLMessage: () => 'mock-html-message',
  now: () => 'mock-now',
};

describe('ApplicationHeader', () => {
  it('should render default component', () => {
    const testHeader = (
      <ApplicationHeader.WrappedComponent
        intl={mockIntl}
        layoutConfig={{ size: 'large' }}
      />
    );

    const result = shallow(testHeader);

    expect(result).toMatchSnapshot();
  });

  it('should render props', () => {
    const testHeader = (
      <ApplicationHeader.WrappedComponent
        intl={mockIntl}
        id="test-header"
        layoutConfig={{ size: 'large' }}
        nameConfig={{ title: 'app-test-title' }}
        utilityConfig={{
          title: 'test-util-title',
          initialSelectedKey: 'test-menu',
          onChange: () => {},
          menuItems: [
            {
              key: 'test-menu',
              contentLocation: 'body',
              title: 'test-menu-title',
            },
          ],
        }}
        extensions={<ExtensionsExample layoutConfig={{ size: 'large' }} />}
        applicationLinks={{
          links: [
            {
              id: '123',
              path: '/something1',
              text: 'item 1',
            },
            {
              id: '234',
              path: '/something2',
              text: 'item 2',
            },
            {
              id: '345',
              path: '/something3',
              text: 'item 3',
            },
          ],
        }}
      />
    );

    const result = shallow(testHeader);

    expect(result).toMatchSnapshot();
  });
});
