import React from 'react';

import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';
import ApplicationMenu from '../../src/menu/_ApplicationMenu';
import ExtensionsExample from '../../src/terra-dev-site/test/common/ExtensionsExample';
import ContentExample from '../../src/terra-dev-site/test/common/ContentExample';

describe('ApplicationHeader', () => {
  it('should render default component', () => {
    const testHeader = (
      <ApplicationMenu
        routingStackDelegate={{}}
        layoutConfig={{ size: 'small' }}
      />
    );

    const result = shallow(testHeader);

    expect(result).toMatchSnapshot();
  });

  it('should render props', () => {
    const testHeader = (
      <ApplicationMenu
        id="test-menu"
        layoutConfig={{ size: 'small' }}
        nameConfig={{ title: 'app-test-title' }}
        routingStackDelegate={{}}
        utilityConfig={{
          title: 'test-util-title',
          initialSelectedKey: 'test-menu',
          onChange: () => {},
          onBlur: () => {},
          menuItems: [
            {
              key: 'test-menu',
              contentLocation: 'body',
              title: 'test-menu-title',
            },
          ],
        }}
        extensions={<ExtensionsExample layoutConfig={{ size: 'small' }} />}
        content={<ContentExample />}
      />
    );

    const result = shallow(testHeader);

    expect(result).toMatchSnapshot();
  });

  it('correctly applies the theme context className', () => {
    const testHeader = mount(
      <ThemeContextProvider theme={{ className: 'orion-fusion-theme' }}>
        <ApplicationMenu
          routingStackDelegate={{}}
          layoutConfig={{ size: 'small' }}
        />
      </ThemeContextProvider>,
    );
    expect(testHeader).toMatchSnapshot();
  });
});
