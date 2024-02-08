import React from 'react';
import { IconChevronRight } from 'terra-icon';
import Menu from 'terra-menu';
import CollapsibleMenuViewDivider from '../../src/CollapsibleMenuViewDivider';

describe('CollapsibleMenuViewDivider', () => {
  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = enzymeIntl.shallowWithIntl(<CollapsibleMenuViewDivider />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a menu divider in the context of the collapsible menu', () => {
    const context = { isCollapsibleMenuItem: true };
    const wrapper = enzymeIntl.shallowWithIntl(<CollapsibleMenuViewDivider />, { context });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a chevron right icon', () => {
    const wrapper = enzymeIntl.shallowWithIntl(<CollapsibleMenuViewDivider useChevronRightIcon />);
    expect(wrapper.exists(IconChevronRight)).toBeTruthy;
    expect(wrapper).toMatchSnapshot();
  });

  it('correctly applies the theme context className', () => {
    jest.spyOn(React, 'useContext')
      .mockReturnValue({
        className: 'orion-fusion-theme',
      });
    const wrapper = enzymeIntl.mountWithIntl(<CollapsibleMenuViewDivider />);
    expect(wrapper).toMatchSnapshot();
  });

  describe('Collapsible Menu Context', () => {
    it('should not render a menu item', () => {
      const context = { isCollapsibleMenuItem: true };
      const wrapper = enzymeIntl.shallowWithIntl(<CollapsibleMenuViewDivider />, { context }).dive();
      expect(wrapper.exists(<Menu.Divider />)).toBeFalsy();
      expect(wrapper).toMatchSnapshot();
    });
  });
});
