import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl } from 'terra-enzyme-intl';
import CollapsibleMenuViewItemGroup from '../../src/CollapsibleMenuViewItemGroup';
import CollapsibleMenuViewItem from '../../src/CollapsibleMenuViewItem';

describe('CollapsibleMenuViewItemGroup', () => {
  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallowWithIntl(
      (
        <CollapsibleMenuViewItemGroup>
          <CollapsibleMenuViewItem text="Testing" />
          <CollapsibleMenuViewItem text="Testing" />
        </CollapsibleMenuViewItemGroup>
      ),
    );
    expect(wrapper).toMatchSnapshot();
  });

  // Props
  it('should merge custom props', () => {
    const wrapper = shallowWithIntl(
      (
        <CollapsibleMenuViewItemGroup className="Testing">
          <CollapsibleMenuViewItem text="Testing" />
          <CollapsibleMenuViewItem text="Testing" />
        </CollapsibleMenuViewItemGroup>
      ),
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a selectable button group', () => {
    const wrapper = shallowWithIntl(
      (
        <CollapsibleMenuViewItemGroup selectedKeys={['key1']}>
          <CollapsibleMenuViewItem text="Testing" key="key1" />
          <CollapsibleMenuViewItem text="Testing" key="key2" />
        </CollapsibleMenuViewItemGroup>
      ),
    );
    expect(wrapper).toMatchSnapshot();
  });

  describe('Collapsible Menu Context', () => {
    it('should render a menu item group when selectable', () => {
      const context = { isCollapsibleMenuItem: true };
      const wrapper = shallowWithIntl(
        (
          <CollapsibleMenuViewItemGroup selectedKeys={['key1']}>
            <CollapsibleMenuViewItem text="Testing" key="key1" />
            <CollapsibleMenuViewItem text="Testing" key="key2" />
          </CollapsibleMenuViewItemGroup>
        ), { context },
      );
      expect(wrapper).toMatchSnapshot();
    });

    it('should merge custom props', () => {
      const context = { isCollapsibleMenuItem: true };
      const wrapper = shallowWithIntl(
        (
          <CollapsibleMenuViewItemGroup className="Testing">
            <CollapsibleMenuViewItem text="Testing" />
            <CollapsibleMenuViewItem text="Testing" />
          </CollapsibleMenuViewItemGroup>
        ), { context },
      );
      expect(wrapper).toMatchSnapshot();
    });

    it('should merge custom props when selectable', () => {
      const context = { isCollapsibleMenuItem: true };
      const wrapper = shallowWithIntl(
        (
          <CollapsibleMenuViewItemGroup className="Testing" selectedKeys={['key1']}>
            <CollapsibleMenuViewItem text="Testing" key="key1" />
            <CollapsibleMenuViewItem text="Testing" key="key2" />
          </CollapsibleMenuViewItemGroup>
        ), { context },
      );
      expect(wrapper).toMatchSnapshot();
    });

    it('should render menu items when selectedKeys is not set', () => {
      const context = { isCollapsibleMenuItem: true };
      const wrapper = shallowWithIntl(
        (
          <CollapsibleMenuViewItemGroup>
            <CollapsibleMenuViewItem text="Testing" />
            <CollapsibleMenuViewItem text="Testing" />
          </CollapsibleMenuViewItemGroup>
        ), { context },
      );
      expect(wrapper).toMatchSnapshot();
    });
  });
});
