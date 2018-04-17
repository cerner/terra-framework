import React from 'react';
import withModal from '../../src/withModal';

const TestContainer = () => (
  <div>Hello World</div>
);

describe('withModal', () => {
  it('should render the component generated by withModal', () => {
    const TestComponent = withModal(TestContainer);

    expect(TestComponent.WrappedComponent).toBe(TestContainer);

    const result = mount(<TestComponent />);
    expect(result).toMatchSnapshot();
  });
});
