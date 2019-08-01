import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { mockIntl } from 'terra-enzyme-intl';
import TabCount from '../../../src/tabs/_TabCount';

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
