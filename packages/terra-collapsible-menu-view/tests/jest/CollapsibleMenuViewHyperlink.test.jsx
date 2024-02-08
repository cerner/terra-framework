import React from 'react';
import CollapsibleMenuViewHyperlink from '../../src/CollapsibleMenuViewHyperlink';

describe('CollapsibleMenuViewHyperlink', () => {
  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = enzymeIntl.shallowWithIntl(<CollapsibleMenuViewHyperlink text="Testing" href="https://www.oracle.com/" />);
    expect(wrapper).toMatchSnapshot();
  });

  describe('Collapsible Menu Context', () => {
    it('should render a menu item', () => {
      const context = { isCollapsibleMenuItem: true };
      const wrapper = enzymeIntl.shallowWithIntl(<CollapsibleMenuViewHyperlink text="Testing" href="https://www.oracle.com/" />, { context }).dive();
      expect(wrapper).toMatchSnapshot();
    });
  });
});
