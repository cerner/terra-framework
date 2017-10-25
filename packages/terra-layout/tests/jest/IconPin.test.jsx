import React from 'react';

import IconPin from '../../src/_IconPin';

describe('IconPin', () => {
  it('should render an IconPin', () => {
    const result = shallow((
      <IconPin />
    ));
    expect(result).toMatchSnapshot();
  });
});
