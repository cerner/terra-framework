import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { IntlProvider } from 'react-intl';
import ApplicationTabs from '../../src/tabs/ApplicationTabs';
import messages from '../../translations/en-US.json';
import testLinkConfig from './testLinkConfig';

const locale = 'en-US';

// Snapshot tests
it('should render default component', () => {
  const applicationTabs = (
    <IntlProvider locale={locale} messages={messages}>
      <ApplicationTabs />
    </IntlProvider>
  );
  const wrapper = shallow(applicationTabs);
  expect(wrapper).toMatchSnapshot();
});

it('should render ApplicationTabs with links and alignment', () => {
  const applicationTabs = (
    <IntlProvider locale={locale} messages={messages}>
      <ApplicationTabs links={testLinkConfig} alignment="start" />
    </IntlProvider>
  );
  const wrapper = shallow(applicationTabs);
  expect(wrapper).toMatchSnapshot();
});

it('should render ApplicationTabs with links and alignment', () => {
  const applicationTabs = (
    <IntlProvider locale={locale} messages={messages}>
      <ApplicationTabs links={testLinkConfig} alignment="start" />
    </IntlProvider>
  );
  const wrapper = shallow(applicationTabs);
  expect(wrapper).toMatchSnapshot();
});
