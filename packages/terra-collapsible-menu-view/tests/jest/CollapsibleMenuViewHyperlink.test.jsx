import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl } from 'terra-enzyme-intl';
import CollapsibleMenuViewHyperlink from '../../src/CollapsibleMenuViewHyperlink';

describe('CollapsibleMenuViewHyperlink', () => {
  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallowWithIntl(<CollapsibleMenuViewHyperlink text="Testing" href="https://www.oracle.com/" />);
    expect(wrapper).toMatchSnapshot();
  });

  describe('Collapsible Menu Context', () => {
    it('should render a menu item', () => {
      const context = { isCollapsibleMenuItem: true };
      const wrapper = shallowWithIntl(<CollapsibleMenuViewHyperlink text="Testing" href="https://www.oracle.com/" />, { context }).dive();
      expect(wrapper).toMatchSnapshot();
    });
  });
});
