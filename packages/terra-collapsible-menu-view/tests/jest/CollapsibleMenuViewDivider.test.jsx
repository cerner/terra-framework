import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl } from 'terra-enzyme-intl';
import CollapsibleMenuViewDivider from '../../src/CollapsibleMenuViewDivider';

describe('CollapsibleMenuViewDivider', () => {
  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallowWithIntl(<CollapsibleMenuViewDivider />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a menu divider in the context of the collapsible menu', () => {
    const context = { isCollapsibleMenuItem: true };
    const wrapper = shallowWithIntl(<CollapsibleMenuViewDivider />, { context });
    expect(wrapper).toMatchSnapshot();
  });
});
