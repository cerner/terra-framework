import React from 'react';

import ApplicationBase from '../../../src/application-base/ApplicationBase';

describe('Application', () => {
  it('should render with minimal props', () => {
    const wrapper = shallow((
      <ApplicationBase locale="en">
        <div>content</div>
      </ApplicationBase>
    ));
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with all props', () => {
    const wrapper = shallow((
      <ApplicationBase
        locale="en"
        customTranslatedMessages={{ custom: 'messages' }}
        translationsLoadingPlaceholder={<div>placeholder</div>}
        themeName="test-theme"
        themeIsGlobal
        fitToParentIsDisabled
      >
        <div>content</div>
      </ApplicationBase>
    ));
    expect(wrapper).toMatchSnapshot();
  });
});
