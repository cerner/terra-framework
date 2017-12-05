import React from 'react';

import ApplicationMenuLayout from '../../src/ApplicationMenuLayout';

describe('ApplicationMenuLayout', () => {
  it('should render without optional props', () => {
    const result = shallow((
      <ApplicationMenuLayout />
    ));
    expect(result).toMatchSnapshot();
  });

  it('should render with provided props', () => {
    const result = shallow((
      <ApplicationMenuLayout
        header={<div id="test-header">Header</div>}
        extensions={<div id="test-extensions">Extensions</div>}
        content={<div id="test-content">Content</div>}
        footer={<div id="test-footer">Footer</div>}
      />
    ));

    expect(result).toMatchSnapshot();
  });
});
