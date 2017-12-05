import React from 'react';
import AppDelegate from 'terra-app-delegate';
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


describe('RoutingStack', () => {
  // Snapshot Tests
  it('should render a default RoutingStack', () => {
    const wrapper = shallow(<RoutingStack.WrappedComponent />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a RoutingStack with provided routes and nav disabled', () => {
    const testRoutingStack = (
      <RoutingStack.WrappedComponent
        app={AppDelegate.create({})}
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
});
