import React from 'react';
import CollapsibleMenuViewToggle from '../../src/CollapsibleMenuViewToggle';

describe('CollapsibleMenuViewToggle', () => {
  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = enzymeIntl.shallowWithIntl(<CollapsibleMenuViewToggle text="Testing" />);
    expect(wrapper).toMatchSnapshot();
  });

  // Props
  it('should merge custom props', () => {
    const wrapper = enzymeIntl.shallowWithIntl(<CollapsibleMenuViewToggle text="Testing" className="Testing" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should set defaultChecked prop', () => {
    const wrapper = enzymeIntl.shallowWithIntl(<CollapsibleMenuViewToggle text="Testing" isSelected />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should disable checkbox when isSelectable is false', () => {
    const wrapper = enzymeIntl.shallowWithIntl(<CollapsibleMenuViewToggle text="Testing" isSelectable={false} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should set isDisabled prop', () => {
    const wrapper = enzymeIntl.shallowWithIntl(<CollapsibleMenuViewToggle text="Testing" isDisabled />);
    expect(wrapper).toMatchSnapshot();
  });

  describe('Collapsible Menu Context', () => {
    it('should render a selectable menu item', () => {
      const context = { isCollapsibleMenuItem: true };
      const wrapper = enzymeIntl.shallowWithIntl(<CollapsibleMenuViewToggle text="Testing" />, { context }).dive();
      expect(wrapper).toMatchSnapshot();
    });
    it('should set selected prop on menu item', () => {
      const context = { isCollapsibleMenuItem: true };
      const wrapper = enzymeIntl.shallowWithIntl(<CollapsibleMenuViewToggle text="Testing" isSelected />, { context }).dive();
      expect(wrapper).toMatchSnapshot();
    });
    it('should disable menu item when isSelectable is false', () => {
      const context = { isCollapsibleMenuItem: true };
      const wrapper = enzymeIntl.shallowWithIntl(<CollapsibleMenuViewToggle text="Testing" isSelectable={false} />, { context }).dive();
      expect(wrapper).toMatchSnapshot();
    });
    it('should set isDisabled prop on menu item', () => {
      const context = { isCollapsibleMenuItem: true };
      const wrapper = enzymeIntl.shallowWithIntl(<CollapsibleMenuViewToggle text="Testing" isDisabled />, { context }).dive();
      expect(wrapper).toMatchSnapshot();
    });
  });
});
