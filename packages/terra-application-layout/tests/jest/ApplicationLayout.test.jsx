import React from 'react';
import ApplicationLayout from '../../src/ApplicationLayout';
import ApplicationMenuWrapper from '../../src/menu/_ApplicationMenuWrapper';
import RoutingMenu from '../../src/menu/RoutingMenu';

const TestComponent = () => (<div className="test">Test</div>);
const ContentComponent = () => (<div>Content</div>);
const MenuComponent = () => (<div>Menu</div>);

describe('ApplicationLayout', () => {
  describe('buildMenuNavigationItems', () => {
    it('should return the given navigation items if no menu routes are present', () => {
      const routingConfig = {
        content: {
          '/test_path': {
            path: '/test_path',
            component: {
              default: {
                componentClass: TestComponent,
              },
            },
          },
        },
      };

      const navigationItems = [{
        path: '/1',
        text: '1',
      }, {
        path: '/2',
        text: '2',
      }];

      const result = ApplicationLayout.buildMenuNavigationItems({ routingConfig, navigationItems });

      expect(result).toEqual(navigationItems);
    });

    it('should return the updated navigation items with submenu data', () => {
      const routingConfig = {
        content: {
          '/test_path': {
            path: '/test_path',
            component: {
              default: {
                componentClass: TestComponent,
              },
            },
          },
        },
        menu: {
          '/1': {
            path: '/1',
            component: {
              default: {
                componentClass: TestComponent,
              },
            },
          },
          '/1/a': {
            path: '/1/a',
            component: {
              default: {
                componentClass: TestComponent,
              },
            },
          },
          '/2': {
            path: '/2',
            component: {
              default: {
                componentClass: TestComponent,
              },
            },
          },
        },
      };

      const navigationItems = [{
        path: '/1',
        text: '1',
      }, {
        path: '/2',
        text: '2',
      }, {
        path: '/3',
        text: '3',
      }];

      const result = ApplicationLayout.buildMenuNavigationItems({ routingConfig, navigationItems });

      expect(result[0].path).toEqual('/1');
      expect(result[0].text).toEqual('1');
      expect(result[0].hasSubMenu).toBeTruthy();

      expect(result[1].path).toEqual('/2');
      expect(result[1].text).toEqual('2');
      expect(result[1].hasSubMenu).toBeTruthy();

      expect(result[2].path).toEqual('/3');
      expect(result[2].text).toEqual('3');
      expect(result[2].hasSubMenu).toBeFalsy();
    });
  });

  describe('buildNavigationMenuConfig', () => {
    let buildMenuNavigationItemsImpl;
    beforeEach(() => {
      buildMenuNavigationItemsImpl = ApplicationLayout.buildMenuNavigationItems;
      ApplicationLayout.buildMenuNavigationItems = jest.fn();
    });

    afterEach(() => {
      ApplicationLayout.buildMenuNavigationItems = buildMenuNavigationItemsImpl;
    });

    it('should return configuration object for primary navigation menu', () => {
      const updatedNavigationItems = [{
        path: '/test',
        text: 'TEST',
        hasSubMenu: true,
      }];

      ApplicationLayout.buildMenuNavigationItems.mockReturnValueOnce(updatedNavigationItems);

      const props = {
        test: 'props',
      };

      const result = ApplicationLayout.buildNavigationMenuConfig(props);

      expect(ApplicationLayout.buildMenuNavigationItems.mock.calls.length).toBe(1);
      expect(ApplicationLayout.buildMenuNavigationItems.mock.calls[0][0]).toBe(props);

      expect(result['/']).toBeDefined();
      expect(Object.keys(result).length).toBe(1);
      expect(result['/'].path).toBe('/');
      expect(result['/'].component.tiny.componentClass).toBe(RoutingMenu);
      expect(result['/'].component.tiny.props).toEqual({ menuItems: updatedNavigationItems });
      expect(result['/'].component.tiny.refuseRoutingStackNavigation).toBeFalsy();
      expect(result['/'].component.small.componentClass).toBe(RoutingMenu);
      expect(result['/'].component.small.props).toEqual({ menuItems: updatedNavigationItems });
      expect(result['/'].component.small.refuseRoutingStackNavigation).toBeFalsy();
      expect(result['/'].component.default).toBeUndefined();
      expect(result['/'].component.medium).toBeUndefined();
      expect(result['/'].component.large).toBeUndefined();
      expect(result['/'].component.huge).toBeUndefined();
    });

    it('should disable stack navigation in menu when no nav items are provided', () => {
      const updatedNavigationItems = [];

      ApplicationLayout.buildMenuNavigationItems.mockReturnValueOnce(updatedNavigationItems);

      const props = {
        test: 'props',
      };

      const result = ApplicationLayout.buildNavigationMenuConfig(props);

      expect(ApplicationLayout.buildMenuNavigationItems.mock.calls.length).toBe(1);
      expect(ApplicationLayout.buildMenuNavigationItems.mock.calls[0][0]).toBe(props);

      expect(result['/']).toBeDefined();
      expect(Object.keys(result).length).toBe(1);
      expect(result['/'].path).toBe('/');
      expect(result['/'].component.tiny.componentClass).toBe(RoutingMenu);
      expect(result['/'].component.tiny.props).toEqual({ menuItems: updatedNavigationItems });
      expect(result['/'].component.tiny.refuseRoutingStackNavigation).toBeTruthy();
      expect(result['/'].component.small.componentClass).toBe(RoutingMenu);
      expect(result['/'].component.small.props).toEqual({ menuItems: updatedNavigationItems });
      expect(result['/'].component.small.refuseRoutingStackNavigation).toBeTruthy();
      expect(result['/'].component.default).toBeUndefined();
      expect(result['/'].component.medium).toBeUndefined();
      expect(result['/'].component.large).toBeUndefined();
      expect(result['/'].component.huge).toBeUndefined();
    });
  });

  describe('buildWrappedMenuConfig', () => {
    it('should update the configuration object for menu routes with components wrapped by the ApplicationMenuWrapper', () => {
      const nameConfig = {
        name: 'config',
      };

      const utilityConfig = {
        utility: 'config',
      };

      const menuConfig = {
        '/test_1': {
          path: '/test_1',
          component: {
            default: {
              componentClass: TestComponent,
              props: {
                test: '1',
              },
            },
          },
        },
        '/test_2': {
          path: '/test_2',
          component: {
            tiny: {
              componentClass: TestComponent,
              props: {
                test: '2',
              },
            },
            small: {
              componentClass: TestComponent,
              props: {
                test: '2',
              },
            },
            medium: {
              componentClass: TestComponent,
              props: {
                test: '2',
              },
            },
            large: {
              componentClass: TestComponent,
              props: {
                test: '2',
              },
            },
            huge: {
              componentClass: TestComponent,
              props: {
                test: '2',
              },
            },
          },
        },
      };

      const result = ApplicationLayout.buildApplicationMenus({ nameConfig, utilityConfig }, menuConfig);

      expect(Object.keys(result).length).toBe(2);
      expect(result['/test_1'].component.default.componentClass).toBe(ApplicationMenuWrapper);
      expect(result['/test_1'].component.default.props.test).toBe('1');
      expect(result['/test_1'].component.default.props.applicationMenuWrapperProps).toEqual({
        contentComponentClass: TestComponent,
        nameConfig,
        utilityConfig,
      });

      ['tiny', 'small', 'medium', 'large', 'huge'].forEach((size) => {
        expect(result['/test_2'].component[size].componentClass).toBe(ApplicationMenuWrapper);
        expect(result['/test_2'].component[size].props.test).toBe('2');
        expect(result['/test_2'].component[size].props.applicationMenuWrapperProps).toEqual({
          contentComponentClass: TestComponent,
          nameConfig,
          utilityConfig,
        });
      });
    });
  });

  describe('buildRoutingConfig', () => {
    let buildNavigationMenuConfigImpl;
    let buildApplicationMenusImpl;

    beforeEach(() => {
      buildNavigationMenuConfigImpl = ApplicationLayout.buildNavigationMenuConfig;
      ApplicationLayout.buildNavigationMenuConfig = jest.fn();

      buildApplicationMenusImpl = ApplicationLayout.buildApplicationMenus;
      ApplicationLayout.buildApplicationMenus = jest.fn();
    });

    afterEach(() => {
      ApplicationLayout.buildNavigationMenuConfig = buildNavigationMenuConfigImpl;
      ApplicationLayout.buildApplicationMenus = buildApplicationMenusImpl;
    });

    it('should return the updated and wrapped configuration', () => {
      const routingConfig = {
        content: {
          test: 'contet config',
        },
        menu: {
          '/test': {
            path: '/test',
            component: {
              default: {
                componentClass: TestComponent,
                props: {
                  test: 'prop',
                },
              },
            },
          },
        },
      };

      const navigationItems = [{
        path: '/test',
        text: 'TEST',
      }];

      const navMenuConfig = {
        '/': {
          path: '/',
          component: {},
        },
      };

      ApplicationLayout.buildNavigationMenuConfig.mockReturnValueOnce(navMenuConfig);
      ApplicationLayout.buildApplicationMenus.mockReturnValueOnce({ new: 'menus' });

      const result = ApplicationLayout.buildRoutingConfig({ routingConfig, navigationItems });

      expect(result.menu).toEqual({ new: 'menus' });
      expect(result.content).toEqual({
        test: 'contet config',
      });

      expect(ApplicationLayout.buildNavigationMenuConfig.mock.calls.length).toBe(1);
      expect(ApplicationLayout.buildNavigationMenuConfig.mock.calls[0][0]).toEqual({ routingConfig, navigationItems });

      expect(ApplicationLayout.buildApplicationMenus.mock.calls.length).toBe(1);
      expect(ApplicationLayout.buildApplicationMenus.mock.calls[0][0]).toEqual({ routingConfig, navigationItems });

      const wrapMenuConfigMenus = ApplicationLayout.buildApplicationMenus.mock.calls[0][1];
      expect(Object.keys(wrapMenuConfigMenus).length).toBe(2);
      expect(wrapMenuConfigMenus['/']).toBeDefined();
      expect(wrapMenuConfigMenus['/test']).toBeDefined();
    });
  });

  describe('Snapshot Tests', () => {
    it('renders the ApplicationLayout with given props', () => {
      const testExtensions = <div>Extensions</div>;
      const testNameConfig = {
        title: 'name config title',
        accessory: <div>accessory</div>,
      };
      const testNavigationItems = [{
        text: 'Item 1',
        path: '/item_1',
      }, {
        text: 'Item 2',
        path: '/item_2',
      }];
      const testRoutingConfig = {
        content: {
          '/item_1': {
            path: '/item_1',
            component: {
              default: {
                componentClass: ContentComponent,
                props: {
                  test: 'content props item 1',
                },
              },
            },
          },
          '/item_2': {
            path: '/item_2',
            component: {
              default: {
                componentClass: ContentComponent,
                props: {
                  test: 'content props item 2',
                },
              },
            },
          },
        },
        menu: {
          '/item_1': {
            path: '/item_1',
            component: {
              default: {
                componentClass: MenuComponent,
                props: {
                  test: 'menu props item 1',
                },
              },
            },
          },
          '/item_2': {
            path: '/item_2',
            component: {
              medium: {
                componentClass: MenuComponent,
                props: {
                  test: 'content props item 2',
                },
              },
            },
          },
        },
      };

      const testUtilityConfig = {
        title: 'Swanson, Henry',
        accessory: <div>Avatar</div>,
        menuItems: [{
          key: 'utility 1',
          title: 'Utility 1',
          childKeys: ['utility 2'],
        }, {
          key: 'utility 2',
          title: 'Utility 2',
        }],
        initialSelectedKey: 'utility 1',
        onChange: () => {},
      };

      const applicationLayout = (
        <ApplicationLayout
          extensions={testExtensions}
          nameConfig={testNameConfig}
          navigationItems={testNavigationItems}
          routingConfig={testRoutingConfig}
          utilityConfig={testUtilityConfig}
          indexPath="/item_1"
        />
      );

      const result = shallow(applicationLayout);

      expect(result).toMatchSnapshot();
    });

    it('renders the ApplicationLayout with only required props', () => {
      const testRoutingConfig = {
        content: {
          '/item_1': {
            path: '/item_1',
            component: {
              default: {
                componentClass: ContentComponent,
                props: {
                  test: 'content props item 1',
                },
              },
            },
          },
          '/item_2': {
            path: '/item_2',
            component: {
              default: {
                componentClass: ContentComponent,
                props: {
                  test: 'content props item 2',
                },
              },
            },
          },
        },
        menu: {
          '/item_1': {
            path: '/item_1',
            component: {
              default: {
                componentClass: MenuComponent,
                props: {
                  test: 'menu props item 1',
                },
              },
            },
          },
          '/item_2': {
            path: '/item_2',
            component: {
              medium: {
                componentClass: MenuComponent,
                props: {
                  test: 'content props item 2',
                },
              },
            },
          },
        },
      };

      const applicationLayout = (
        <ApplicationLayout
          routingConfig={testRoutingConfig}
          indexPath="/item_1"
        />
      );

      const result = shallow(applicationLayout);

      expect(result).toMatchSnapshot();
    });
  });
});
