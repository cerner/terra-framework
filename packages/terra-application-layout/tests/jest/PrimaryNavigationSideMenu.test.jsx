import React from 'react';
import NavigationSideMenu from 'terra-navigation-side-menu';
import WrappedPrimaryNavigationMenu from '../../src/menu/_PrimaryNavigationSideMenu';

const PrimaryNavigationSideMenu = WrappedPrimaryNavigationMenu.WrappedComponent;

describe('PrimaryNavigationSideMenu', () => {
  describe('buildChildSideNavItems', () => {
    it('should return array of objects adhering to the SideNavMenu API', () => {
      const items = [{
        path: '/1',
        text: '1',
        hasSubMenu: true,
      }, {
        path: '/2',
        text: '2',
        hasSubMenu: false,
      }, {
        path: '/3',
        text: '3',
      }];

      const result = PrimaryNavigationSideMenu.buildChildSideNavItems(items);
      expect(result).toEqual([{
        key: '/1',
        text: '1',
        hasSubMenu: true,
        metaData: {
          url: '/1',
          hasSubMenu: true,
        },
      }, {
        key: '/2',
        text: '2',
        hasSubMenu: false,
        metaData: {
          url: '/2',
          hasSubMenu: false,
        },
      }, {
        key: '/3',
        text: '3',
        hasSubMenu: false,
        metaData: {
          url: '/3',
          hasSubMenu: false,
        },
      }]);
    });
  });

  describe('handleMenuChange', () => {
    const items = [{
      path: '/1',
      text: '1',
      hasSubMenu: true,
    }, {
      path: '/2',
      text: '2',
      hasSubMenu: false,
    }, {
      path: '/3',
      text: '3',
    }];

    it('should toggle the menu closed if no submenu is present for the selected item', () => {
      const mockRoutingStackDelegate = {
        showParent: () => {},
        show: jest.fn(),
      };

      const mockLayoutConfig = {
        toggleMenu: jest.fn().mockReturnValue(Promise.resolve()),
      };

      const primaryNavigationMenu = (
        <PrimaryNavigationSideMenu
          location={{ pathname: '/2' }}
          routingStackDelegate={mockRoutingStackDelegate}
          layoutConfig={mockLayoutConfig}
          navigationItems={items}
        />
      );

      const wrapper = shallow(primaryNavigationMenu);

      expect(wrapper.state('selectedMenuKey')).toBe('navigationMenu');
      expect(wrapper.state('selectedChildKey')).toBe('/2');

      const twoItem = wrapper.find(NavigationSideMenu).getElements()[0];

      return twoItem.props.onChange(undefined, {
        selectedMenuKey: '/2',
        selectedChildKey: undefined,
        metaData: {
          url: '/2',
          hasSubMenu: false,
        },
      }).then(() => {
        wrapper.update();

        expect(wrapper.state('selectedMenuKey')).toBe('/2');
        expect(wrapper.state('selectedChildKey')).toBeUndefined();

        expect(mockLayoutConfig.toggleMenu.mock.calls.length).toBe(1);
      });
    });

    it('should not toggle the menu closed if menu toggling is not enabled', () => {
      const mockRoutingStackDelegate = {
        showParent: () => {},
        show: jest.fn(),
      };

      const mockLayoutConfig = {
        // No toggleMenu implementation included here, as would occur
        // at larger sizes.
      };

      const primaryNavigationMenu = (
        <PrimaryNavigationSideMenu
          location={{ pathname: '/1' }}
          routingStackDelegate={mockRoutingStackDelegate}
          layoutConfig={mockLayoutConfig}
          navigationItems={items}
        />
      );

      const wrapper = shallow(primaryNavigationMenu);

      expect(wrapper.state('selectedMenuKey')).toBe('navigationMenu');
      expect(wrapper.state('selectedChildKey')).toBe('/1');

      const twoItem = wrapper.find(NavigationSideMenu).getElements()[0];

      return twoItem.props.onChange(undefined, {
        selectedMenuKey: '/1',
        selectedChildKey: undefined,
        metaData: {
          url: '/1',
          hasSubMenu: true,
        },
      }).then(() => {
        wrapper.update();

        expect(wrapper.state('selectedMenuKey')).toBe('/1');
        expect(wrapper.state('selectedChildKey')).toBeUndefined();
      });
    });

    it('should not toggle the menu closed if a submenu is present for the selected item', () => {
      const mockRoutingStackDelegate = {
        showParent: () => {},
        show: jest.fn(),
      };

      const mockLayoutConfig = {
        toggleMenu: jest.fn().mockReturnValue(Promise.resolve()),
      };

      const primaryNavigationMenu = (
        <PrimaryNavigationSideMenu
          location={{ pathname: '/1' }}
          routingStackDelegate={mockRoutingStackDelegate}
          layoutConfig={mockLayoutConfig}
          navigationItems={items}
        />
      );

      const wrapper = shallow(primaryNavigationMenu);

      expect(wrapper.state('selectedMenuKey')).toBe('navigationMenu');
      expect(wrapper.state('selectedChildKey')).toBe('/1');

      const oneItem = wrapper.find(NavigationSideMenu).getElements()[0];

      return oneItem.props.onChange(undefined, {
        selectedMenuKey: '/1',
        selectedChildKey: undefined,
        metaData: {
          url: '/1',
          hasSubMenu: true,
        },
      }).then(() => {
        wrapper.update();

        expect(wrapper.state('selectedMenuKey')).toBe('/1');
        expect(wrapper.state('selectedChildKey')).toBeUndefined();

        expect(mockLayoutConfig.toggleMenu.mock.calls.length).toBe(0);
      });
    });
  });
});
