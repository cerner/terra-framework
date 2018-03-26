import React from 'react';

import ApplicationMenuWrapper from '../../src/menu/_ApplicationMenuWrapper';

describe('ApplicationMenuWrapper', () => {
  it('should render default', () => {
    const testWrapper = (
      <ApplicationMenuWrapper
        layoutConfig={{
          size: 'small',
        }}
        routingStackDelegate={{
          location: { pathname: '/test-path-name' },
        }}
        applicationMenuWrapperProps={{
          contentComponentClass: jest.fn(),
        }}
      />
    );

    const result = shallow(testWrapper);

    expect(result).toMatchSnapshot();
  });

  it('should render prop data', () => {
    const testWrapper = (
      <ApplicationMenuWrapper
        app={{
          dismiss: jest.fn(),
        }}
        navigationItems={[
          {
            path: 'test-item-path',
            text: 'test-item-text',
          },
        ]}
        layoutConfig={{
          size: 'small',
        }}
        routingStackDelegate={{
          location: { pathname: '/test-path-name' },
        }}
        applicationMenuWrapperProps={{
          contentComponentClass: jest.fn(),
          nameConfig: { title: 'test-title' },
          utilityConfig: {
            title: 'test-utility',
            onChange: jest.fn(),
            menuItems: [],
            initialSelectedKey: 'test-init-key',
          },
          extensions: <div>test-extensions</div>,
        }}
      />
    );

    const result = shallow(testWrapper);

    expect(result).toMatchSnapshot();
  });
});
