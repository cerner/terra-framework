import React from 'react';
/* eslint-disable import/no-extraneous-dependencies, import/no-extraneous-dependencies */
import { shallowWithIntl } from 'terra-enzyme-intl';
import IconTrash from 'terra-icon/lib/icon/IconTrash';
/* eslint-enable import/no-extraneous-dependencies, import/no-extraneous-dependencies */
import CollapsibleMenuViewItem from '../../src/CollapsibleMenuViewItem';

describe('CollapsibleMenuViewItem', () => {
  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallowWithIntl(<CollapsibleMenuViewItem text="Testing" />);
    expect(wrapper).toMatchSnapshot();
  });

  // Props
  it('should merge custom props', () => {
    const wrapper = shallowWithIntl(<CollapsibleMenuViewItem text="Testing" className="Testing" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should not set isSelected on button outside of an item group', () => {
    const wrapper = shallowWithIntl(<CollapsibleMenuViewItem text="Testing" isSelected />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a button group button when in an item group', () => {
    const context = { isCollapsibleGroupItem: true };
    const wrapper = shallowWithIntl(<CollapsibleMenuViewItem text="Testing" />, { context });
    expect(wrapper).toMatchSnapshot();
  });

  it('should set isSelected on button that is inside item group', () => {
    const context = { isCollapsibleGroupItem: true };
    const wrapper = shallowWithIntl(<CollapsibleMenuViewItem text="Testing" isSelected />, { context });
    expect(wrapper).toMatchSnapshot();
  });

  it('should set icon prop on button', () => {
    const wrapper = shallowWithIntl(<CollapsibleMenuViewItem text="Testing" icon={<IconTrash />} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should set isReversed prop on button', () => {
    const wrapper = shallowWithIntl(<CollapsibleMenuViewItem text="Testing" icon={<IconTrash />} isReversed />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a button with icon and text when isIconOnly and text is set', () => {
    const wrapper = shallowWithIntl(<CollapsibleMenuViewItem text="Testing" icon={<IconTrash />} isIconOnly />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a menu when subMenuItems are given', () => {
    const wrapper = shallowWithIntl(<CollapsibleMenuViewItem text="Testing" subMenuItems={[<CollapsibleMenuViewItem text="Menu Item" key="1" />]} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a disabled button when isDisabled is set', () => {
    const wrapper = shallowWithIntl(<CollapsibleMenuViewItem text="Testing" isDisabled />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a disabled button group button that is inside a button group when isDisabled is set', () => {
    const context = { isCollapsibleGroupItem: true };
    const wrapper = shallowWithIntl(<CollapsibleMenuViewItem text="Testing" isDisabled />, { context });
    expect(wrapper).toMatchSnapshot();
  });

  describe('Collapsible Menu Context', () => {
    it('should render a menu item', () => {
      const context = { isCollapsibleMenuItem: true };
      const wrapper = shallowWithIntl(<CollapsibleMenuViewItem text="Testing" />, { context });
      expect(wrapper).toMatchSnapshot();
    });

    it('should not set selected prop on menu item outside of item group', () => {
      const context = { isCollapsibleMenuItem: true };
      const wrapper = shallowWithIntl(<CollapsibleMenuViewItem text="Testing" isSelected />, { context });
      expect(wrapper).toMatchSnapshot();
    });

    it('should set selected prop on menu item when inside item group', () => {
      const context = { isCollapsibleMenuItem: true, isCollapsibleGroupItem: true };
      const wrapper = shallowWithIntl(<CollapsibleMenuViewItem text="Testing" isSelected />, { context });
      expect(wrapper).toMatchSnapshot();
    });

    it('should not set icon prop menu item, but should render text', () => {
      const context = { isCollapsibleMenuItem: true };
      const wrapper = shallowWithIntl(<CollapsibleMenuViewItem text="Testing" icon={<IconTrash />} />, { context });
      expect(wrapper).toMatchSnapshot();
    });

    it('should not set isReversed prop on menu item', () => {
      const context = { isCollapsibleMenuItem: true };
      const wrapper = shallowWithIntl(<CollapsibleMenuViewItem text="Testing" icon={<IconTrash />} isReversed />, { context });
      expect(wrapper).toMatchSnapshot();
    });

    it('should not set icon on menu item when isIconOnly is set, but should set the text', () => {
      const context = { isCollapsibleMenuItem: true };
      const wrapper = shallowWithIntl(<CollapsibleMenuViewItem text="Testing" icon={<IconTrash />} isIconOnly />, { context });
      expect(wrapper).toMatchSnapshot();
    });

    it('should render a menu item when subMenuItems are given', () => {
      const context = { isCollapsibleMenuItem: true };
      const wrapper = shallowWithIntl(
        (
          <CollapsibleMenuViewItem
            text="Testing"
            subMenuItems={[<CollapsibleMenuViewItem text="Menu Item" key="1" />]}
          />
        ), { context },
      );
      expect(wrapper).toMatchSnapshot();
    });

    it('should render a disabled menu item when isDisabled is set', () => {
      const context = { isCollapsibleMenuItem: true };
      const wrapper = shallowWithIntl(<CollapsibleMenuViewItem text="Testing" isDisabled />, { context });
      expect(wrapper).toMatchSnapshot();
    });
  });
});
