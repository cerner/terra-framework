import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { IntlProvider } from 'react-intl';
import ApplicationList from '../../src/list/ApplicationList';
import messages from '../../translations/en-US.json';
import testLinkConfig from '../testLinkConfig';

const locale = 'en-US';

// Snapshot tests
it('should render default component', () => {
  const applicationList = (
    <IntlProvider locale={locale} messages={messages}>
      <ApplicationList />
    </IntlProvider>
  );
  const wrapper = shallow(applicationList);
  expect(wrapper).toMatchSnapshot();
});

it('should render ApplicationList with links', () => {
  const applicationList = (
    <IntlProvider locale={locale} messages={messages}>
      <ApplicationList links={testLinkConfig} />
    </IntlProvider>
  );
  const wrapper = shallow(applicationList);
  expect(wrapper).toMatchSnapshot();
});
