import React from 'react';
import TabCount from '../../../src/tabs/_TabCount';

describe('TabCount', () => {
  it('should render default element', () => {
    const shallowComponent = enzyme.shallow(
      <TabCount.WrappedComponent intl={enzyme.mockIntl} />,
    );

    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render prop data', () => {
    const shallowComponent = enzyme.shallow(
      <TabCount.WrappedComponent
        intl={enzyme.mockIntl}
        value={1}
        isRollup
      />,
    );

    expect(shallowComponent).toMatchSnapshot();
  });
});
