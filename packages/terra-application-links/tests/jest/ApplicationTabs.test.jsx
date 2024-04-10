import React from 'react';

import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';
import ApplicationTabs from '../../src/tabs/ApplicationTabs';
import testLinkConfig from './testLinkConfig';
import testLinksWithIconsConfig from './testLinksWithIconsConfig';
import { BrowserRouter } from 'react-router-dom';

// Snapshot tests
it('should render ApplicationTabs with links and alignment', () => {
  const wrapper = enzyme.shallow(<div><ApplicationTabs links={testLinkConfig} alignment="start" /></div>);
  expect(wrapper).toMatchSnapshot();
});

it('should trigger onTabClick handler', () => {
  const onTabClickHandler = jest.fn();
  const wrapper = enzymeIntl.mountWithIntl(
    <BrowserRouter>
      <ApplicationTabs links={testLinkConfig} alignment="start" onTabClick={onTabClickHandler} />
    </BrowserRouter>
  );

  wrapper.find('.tab').first().simulate('click');

  expect(onTabClickHandler).toHaveBeenCalled();
});

it('should render ApplicationTabs with icons', () => {
  const subject = (
    <div>
      <ApplicationTabs links={testLinksWithIconsConfig} />
    </div>
  );
  const wrapper = enzyme.shallow(subject);
  expect(wrapper).toMatchSnapshot();
});

it('correctly applies the theme context className', () => {
  const link = enzyme.shallow(
    <ThemeContextProvider theme={{ className: 'orion-fusion-theme' }}>
      <div>
        <ApplicationTabs links={testLinksWithIconsConfig} />
      </div>
    </ThemeContextProvider>,
  );
  expect(link).toMatchSnapshot();
});
