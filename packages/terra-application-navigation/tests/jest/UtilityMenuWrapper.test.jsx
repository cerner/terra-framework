import React from 'react';

import UtilityMenuWrapper from '../../src/menu/_UtilityMenuWrapper';

describe('UtilityMenuWrapper', () => {
  it('should render prop data', () => {
    const testWrapper = (
      <UtilityMenuWrapper
        app={{
          dismiss: jest.fn(),
        }}
      >
        <div>Child</div>
      </UtilityMenuWrapper>
    );

    const result = shallow(testWrapper);

    expect(result).toMatchSnapshot();
  });
});
