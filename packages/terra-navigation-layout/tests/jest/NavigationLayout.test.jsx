import React from 'react';
import NavigationLayout from '../../src/NavigationLayout';

const Header = () => (
  <div>Header</div>
);

const Menu = () => (
  <div>Menu</div>
);

const Content = () => (
  <div>Content</div>
);

const ConfigComponent = () => (
  <div>Config Component</div>
);

describe('NavigationLayout', () => {
  // Snapshot Tests
  it('should render a default NavigationLayout', () => {
    const wrapper = shallow(<NavigationLayout.WrappedComponent
      location={{
        pathname: '/a/b/c',
      }}
      match={{}}
      history={{}}
      config={{}}
    />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a NavigationLayout with provided menu text', () => {
    const wrapper = shallow(<NavigationLayout.WrappedComponent
      location={{
        pathname: '/a/b/c',
      }}
      match={{}}
      history={{}}
      config={{}}
      menuText="TEST MENU TEXT"
    />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a NavigationLayout with provided components', () => {
    const component = (
      <NavigationLayout.WrappedComponent
        location={{
          pathname: '/a/b/c',
        }}
        match={{}}
        history={{}}
        config={{}}
        header={<Header />}
        menu={<Menu />}
      >
        <Content />
      </NavigationLayout.WrappedComponent>);

    const wrapper = shallow(component);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a NavigationLayout with provided components and forward relevant config', () => {
    const component = (
      <NavigationLayout.WrappedComponent
        location={{
          pathname: '/a/b/c',
        }}
        match={{}}
        history={{}}
        config={{
          header: {
            '/': {
              path: '/',
              component: {
                default: {
                  componentClass: ConfigComponent,
                  props: {
                    type: 'header',
                  },
                },
              },
            },
          },
          menu: {
            '/': {
              path: '/',
              component: {
                default: {
                  componentClass: ConfigComponent,
                  props: {
                    type: 'menu',
                  },
                },
              },
            },
          },
          content: {
            '/': {
              path: '/',
              component: {
                default: {
                  componentClass: ConfigComponent,
                  props: {
                    type: 'content',
                  },
                },
              },
            },
          },
        }}
        header={<Header />}
        menu={<Menu />}
      >
        <Content />
      </NavigationLayout.WrappedComponent>
    );

    const wrapper = shallow(component);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a NavigationLayout with defaulted components and forward relevant config', () => {
    const wrapper = shallow(<NavigationLayout.WrappedComponent
      location={{
        pathname: '/a/b/c',
      }}
      match={{}}
      history={{}}
      indexPath="/"
      config={{
        header: {
          '/': {
            path: '/',
            component: {
              default: {
                componentClass: ConfigComponent,
                props: {
                  type: 'header',
                },
              },
            },
          },
        },
        menu: {
          '/': {
            path: '/',
            component: {
              default: {
                componentClass: ConfigComponent,
                props: {
                  type: 'menu',
                },
              },
            },
          },
        },
        content: {
          '/': {
            path: '/',
            component: {
              default: {
                componentClass: ConfigComponent,
                props: {
                  type: 'content',
                },
              },
            },
          },
        },
      }}
    />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a NavigationLayout without menu if location does not match config entry', () => {
    const wrapper = shallow(<NavigationLayout.WrappedComponent
      location={{
        pathname: '/aa',
      }}
      match={{}}
      history={{}}
      indexPath="/"
      config={{
        header: {
          '/': {
            path: '/',
            component: {
              default: {
                componentClass: ConfigComponent,
                props: {
                  type: 'header',
                },
              },
            },
          },
        },
        menu: {
          '/a': {
            path: '/a',
            component: {
              default: {
                componentClass: ConfigComponent,
                props: {
                  type: 'menu',
                },
              },
            },
          },
        },
        content: {
          '/': {
            path: '/',
            component: {
              default: {
                componentClass: ConfigComponent,
                props: {
                  type: 'content',
                },
              },
            },
          },
        },
      }}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
