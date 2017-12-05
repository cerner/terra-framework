import React from 'react';

import ApplicationHeaderLayout from '../../src/ApplicationHeaderLayout';

describe('ApplicationHeaderLayout', () => {
  it('should render without optional props', () => {
    const result = shallow((
      <ApplicationHeaderLayout />
    ));
    expect(result).toMatchSnapshot();
  });

  it('should render with provided props', () => {
    const result = shallow((
      <ApplicationHeaderLayout
        extensions={<div id="test-extensions">Extensions</div>}
        navigation={<div id="test-navigation">Navigation</div>}
        logo={<div id="test-logo">Logo</div>}
        toggle={<div id="test-toggle">Toggle</div>}
        utilities={<div id="test-utilities">Utilities</div>}
      />
    ));

    expect(result).toMatchSnapshot();
  });
});
