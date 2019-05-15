import React from 'react';
import TabCount from '../../../src/tabs/_TabCount';
import mockIntl from '../mockIntl';

describe('TabCount', () => {
  it('should render default element', () => {
    const shallowComponent = shallow(
      <TabCount.WrappedComponent intl={mockIntl} />,
    );

    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render prop data', () => {
    const shallowComponent = shallow(
      <TabCount.WrappedComponent
        intl={mockIntl}
        value={1}
        isRollup
      />,
    );

    expect(shallowComponent).toMatchSnapshot();
  });
});
