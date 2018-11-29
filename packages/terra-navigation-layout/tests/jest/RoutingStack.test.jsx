import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import RoutingStack from '../../src/RoutingStack';

const AComponent = () => (
  <div>A Component</div>
);

const BComponent = () => (
  <div>B Component</div>
);

const CComponent = () => (
  <div>C Component</div>
);

const DComponent = () => (
  <div>D Component</div>
);

describe('RoutingStack', () => {
  // Snapshot Tests
  it('should render a default RoutingStack', () => {
    const wrapper = shallow(<RoutingStack.WrappedComponent />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a RoutingStack with provided routes and nav disabled', () => {
    const testRoutingStack = (
      <RoutingStack.WrappedComponent
        location={{
          pathname: '/a/b/c',
        }}
        ancestorProps={{
          parentProp: 'parent prop value',
        }}
        routes={[{
          path: '/a/b/c',
          parentPaths: ['/a', '/a/b'],
          componentClass: CComponent,
          componentProps: {
            text: 'C',
          },
        }, {
          path: '/a/b',
          parentPaths: ['/a'],
          componentClass: BComponent,
          componentProps: {
            text: 'B',
          },
        }, {
          path: '/a',
          parentPaths: [],
          componentClass: AComponent,
          componentProps: {
            text: 'A',
          },
        }]}
      >
        <div>I AM A CHILD</div>
      </RoutingStack.WrappedComponent>
    );

    const wrapper = shallow(testRoutingStack);
    expect(wrapper).toMatchSnapshot();
  });

  it('should provide stack components with a RoutingStackDelegate prop', () => {
    const testRoutingStack = (
      <MemoryRouter
        initialEntries={['/a/b/c']}
        initialIndex={0}
      >
        <RoutingStack
          navEnabled
          ancestorProps={{
            parentProp: 'parent prop value',
          }}
          routes={[{
            path: '/a/b/c/d',
            parentPaths: ['/a', '/a/b', '/a/b/c'],
            componentClass: DComponent,
            componentProps: {
              text: 'D',
            },
          }, {
            path: '/a/b/c',
            parentPaths: ['/a', '/a/b'],
            componentClass: CComponent,
            componentProps: {
              text: 'C',
            },
          }, {
            path: '/a/b',
            parentPaths: ['/a'],
            componentClass: BComponent,
            componentProps: {
              text: 'B',
            },
          }, {
            path: '/a',
            parentPaths: [],
            componentClass: AComponent,
            componentProps: {
              text: 'A',
            },
          }]}
        />
      </MemoryRouter>
    );

    const mockContext = {
      router: {
        history: jest.fn(),
      },
    };

    const wrapper = mount(testRoutingStack, { context: mockContext });
    wrapper.setContext(mockContext);

    const cComponent = wrapper.find(CComponent).getElements()[0];
    expect(cComponent.props.routingStackDelegate).toBeDefined();
    expect(cComponent.props.routingStackDelegate.location.pathname).toBe('/a/b/c');
    expect(cComponent.props.routingStackDelegate.parentPaths).toEqual(['/a', '/a/b']);
    expect(cComponent.props.routingStackDelegate.show).toBeDefined();
    expect(cComponent.props.routingStackDelegate.showParent).toBeDefined();
    expect(cComponent.props.routingStackDelegate.showRoot).toBeDefined();

    cComponent.props.routingStackDelegate.showParent();

    wrapper.update();

    const bComponent = wrapper.find(BComponent).getElements()[0];
    expect(bComponent.props.routingStackDelegate).toBeDefined();
    expect(bComponent.props.routingStackDelegate.location.pathname).toBe('/a/b');
    expect(bComponent.props.routingStackDelegate.parentPaths).toEqual(['/a']);
    expect(bComponent.props.routingStackDelegate.show).toBeDefined();
    expect(bComponent.props.routingStackDelegate.showParent).toBeDefined();
    expect(bComponent.props.routingStackDelegate.showRoot).toBeUndefined();

    bComponent.props.routingStackDelegate.showParent();

    wrapper.update();

    const aComponent = wrapper.find(AComponent).getElements()[0];
    expect(aComponent.props.routingStackDelegate).toBeDefined();
    expect(aComponent.props.routingStackDelegate.location.pathname).toBe('/a');
    expect(aComponent.props.routingStackDelegate.parentPaths).toBeUndefined();
    expect(aComponent.props.routingStackDelegate.show).toBeDefined();
    expect(aComponent.props.routingStackDelegate.showParent).toBeUndefined();
    expect(aComponent.props.routingStackDelegate.showRoot).toBeUndefined();

    aComponent.props.routingStackDelegate.show({ path: '/a/b/c/d' });

    wrapper.update();

    const dComponent = wrapper.find(DComponent).getElements()[0];
    expect(dComponent.props.routingStackDelegate).toBeDefined();
    expect(dComponent.props.routingStackDelegate.location.pathname).toBe('/a/b/c/d');
    expect(dComponent.props.routingStackDelegate.parentPaths).toEqual(['/a', '/a/b', '/a/b/c']);
    expect(dComponent.props.routingStackDelegate.show).toBeDefined();
    expect(dComponent.props.routingStackDelegate.showParent).toBeDefined();
    expect(dComponent.props.routingStackDelegate.showRoot).toBeDefined();
  });
});
