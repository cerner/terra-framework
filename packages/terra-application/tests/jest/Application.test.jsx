import React from 'react';

import Application from '../../src/Application';

describe('Application', () => {
  it('should render with minimal props', () => {
    const wrapper = shallow((
      <Application locale="en">
        <div>content</div>
      </Application>
    ));
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with all props', () => {
    const wrapper = shallow((
      <Application
        locale="en"
        customTranslatedMessages={{ custom: 'messages' }}
        translationsLoadingPlaceholder={<div>placeholder</div>}
        themeName="test-theme"
        themeIsGlobal
        fitToParentIsDisabled
      >
        <div>content</div>
      </Application>
    ));
    expect(wrapper).toMatchSnapshot();
  });
});
