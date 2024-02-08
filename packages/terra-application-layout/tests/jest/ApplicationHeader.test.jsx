import React from 'react';
import Icon from 'terra-icon/lib/icon/IconFeatured';

import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';
import ApplicationHeader from '../../src/header/_ApplicationHeader';
import ExtensionsExample from '../../src/terra-dev-site/test/common/ExtensionsExample';

describe('ApplicationHeader', () => {
  it('should render default component', () => {
    const testHeader = (
      <ApplicationHeader.WrappedComponent
        intl={enzyme.mockIntl}
        layoutConfig={{ size: 'large' }}
      />
    );

    const result = enzyme.shallow(testHeader);

    expect(result).toMatchSnapshot();
  });

  it('should render props', () => {
    const testHeader = (
      <ApplicationHeader.WrappedComponent
        intl={enzyme.mockIntl}
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

    const result = enzyme.shallow(testHeader);

    expect(result).toMatchSnapshot();
  });

  describe('with icons', () => {
    const subject = (
      <ApplicationHeader.WrappedComponent
        intl={enzyme.mockIntl}
        layoutConfig={{ size: 'large' }}
        applicationLinks={{
          links: [
            {
              id: '123',
              path: '/something1',
              text: 'item 1',
              icon: <Icon />,
            },
            {
              id: '234',
              path: '/something2',
              text: 'item 2',
              icon: <Icon />,
            },
            {
              id: '345',
              path: '/something3',
              text: 'item 3',
              icon: <Icon />,
            },
          ],
        }}
      />
    );
    const wrapper = enzyme.shallow(subject);

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('correctly applies the theme context className', () => {
      const testHeader = enzyme.shallow(
        <ThemeContextProvider theme={{ className: 'orion-fusion-theme' }}>
          <ApplicationHeader.WrappedComponent
            intl={enzyme.mockIntl}
            layoutConfig={{ size: 'large' }}
          />
        </ThemeContextProvider>,
      );
      expect(testHeader).toMatchSnapshot();
    });
  });
});
