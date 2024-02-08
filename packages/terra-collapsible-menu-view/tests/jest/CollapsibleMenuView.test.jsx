import React from 'react';
import CollapsibleMenuView from '../../src/index';

describe('CollapsibleMenuView', () => {
  // Default Collapsible Menu View
  it('should render a default component', () => {
    const wrapper = shallowWithIntl(
      (
        <CollapsibleMenuView>
          <CollapsibleMenuView.Item text="Button 1" className="Button1" key="button1" />
          <CollapsibleMenuView.Item text="Button 2" className="Button2" key="button2" />
          <CollapsibleMenuView.Divider key="Divider" />
          <CollapsibleMenuView.Item text="Button 3" className="Button3" key="button3" />
          <CollapsibleMenuView.Item text="Button 4" className="Button4" key="button4" />
        </CollapsibleMenuView>
      ),
    );
    expect(wrapper).toMatchSnapshot();
  });

  // Props
  it('should render a start aligned component', () => {
    const wrapper = shallowWithIntl(
      (
        <CollapsibleMenuView
          isStartAligned
          alwaysCollapsedMenuItems={[
            <CollapsibleMenuView.Item text="Collapsed Button 3" key="button3" />,
            <CollapsibleMenuView.Divider key="divider2" />,
            <CollapsibleMenuView.Item text="Collapsed Button 4" key="button4" />]}
        >
          <CollapsibleMenuView.Item text="Button 1" className="Button1" key="button1" />
          <CollapsibleMenuView.Divider key="divider1" />
          <CollapsibleMenuView.Item text="Button 2" className="Button2" key="button2" />
        </CollapsibleMenuView>
      ),
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a fixed menu width', () => {
    const wrapper = shallowWithIntl(
      (
        <CollapsibleMenuView
          menuWidth="640"
          alwaysCollapsedMenuItems={[
            <CollapsibleMenuView.Item text="Collapsed Button 3" key="button3" />,
            <CollapsibleMenuView.Item text="Collapsed Button 4" key="button4" />]}
        >
          <CollapsibleMenuView.Item text="Button 1" className="Button1" key="button1" />
          <CollapsibleMenuView.Item text="Button 2" className="Button2" key="button2" />
        </CollapsibleMenuView>
      ),
    );
    expect(wrapper).toMatchSnapshot();
  });
});
