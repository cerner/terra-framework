import React from 'react';

import ApplicationTabs from '../../src/tabs/ApplicationTabs';
import testLinkConfig from './testLinkConfig';

// Snapshot tests
it('should render ApplicationTabs with links and alignment', () => {
  const wrapper = shallow(<div><ApplicationTabs links={testLinkConfig} alignment="start" /></div>);
  expect(wrapper).toMatchSnapshot();
});
