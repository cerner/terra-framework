import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { shallowWithIntl, mountWithIntl } from 'terra-enzyme-intl';
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';
import Tabs from '../../src/Tabs';

jest.mock('uuid/v4', () => () => '00000000-0000-0000-0000-000000000000');

describe('Tabs', () => {
  it('should render a default component', () => {
    const defaultRender = <Tabs><Tabs.Pane label="Default" key="default" /></Tabs>;
    const wrapper = shallowWithIntl(defaultRender);
    wrapper.update();
    expect(wrapper).toMatchSnapshot();
  });

  describe('Variants', () => {
    it('should render modular-left-aligned tabs', () => {
      const defaultRender = <Tabs variant="modular-left-aligned"><Tabs.Pane label="Default" key="default" /></Tabs>;
      const wrapper = shallowWithIntl(defaultRender);
      wrapper.setState({ showCollapsedTabs: true });
      wrapper.update();
      expect(wrapper).toMatchSnapshot();
    });

    it('should render modular-centered tabs', () => {
      const defaultRender = <Tabs variant="modular-centered"><Tabs.Pane label="Default" key="default" /></Tabs>;
      const wrapper = shallowWithIntl(defaultRender);
      wrapper.update();
      expect(wrapper).toMatchSnapshot();
    });

    it('should render structural tabs', () => {
      const defaultRender = <Tabs variant="structural"><Tabs.Pane label="Default" key="default" /></Tabs>;
      const wrapper = shallowWithIntl(defaultRender);
      wrapper.setState({ showCollapsedTabs: true });
      wrapper.update();
      expect(wrapper).toMatchSnapshot();
    });
  });

  it('should render with tabs filled when indicated', () => {
    const defaultRender = <Tabs tabsFill><Tabs.Pane label="Default" key="default" /></Tabs>;
    const wrapper = shallowWithIntl(defaultRender);
    wrapper.setState({ showCollapsedTabs: true });
    wrapper.update();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with content filled when indicated', () => {
    const defaultRender = <Tabs fill><Tabs.Pane label="Default" key="default" /></Tabs>;
    const wrapper = shallowWithIntl(defaultRender);
    wrapper.setState({ showCollapsedTabs: true });
    wrapper.update();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a controlled component when onChange and activeKey are set', () => {
    const defaultRender = <Tabs onChange={() => {}} activeKey="default"><Tabs.Pane label="Default" key="default" /></Tabs>;
    const wrapper = shallowWithIntl(defaultRender);
    wrapper.update();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an uncontrolled component when defaultActiveKey is set', () => {
    const defaultRender = <Tabs defaultKey="default"><Tabs.Pane label="Default" key="default" /></Tabs>;
    const wrapper = shallowWithIntl(defaultRender);
    wrapper.setState({ showCollapsedTabs: true });
    wrapper.update();
    expect(wrapper).toMatchSnapshot();
  });

  it('should set custom props', () => {
    const defaultRender = <Tabs className="customClass"><Tabs.Pane label="Default" key="default" /></Tabs>;
    const wrapper = shallowWithIntl(defaultRender);
    wrapper.setState({ showCollapsedTabs: true });
    wrapper.update();
    expect(wrapper).toMatchSnapshot();
  });

  it('should set custom props for child Tab Pane', () => {
    const defaultRender = <Tabs><Tabs.Pane label="Default" key="default" className="customClass" /></Tabs>;
    const wrapper = shallowWithIntl(defaultRender);
    wrapper.setState({ showCollapsedTabs: true });
    wrapper.update();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an id based on the Tabs id and the Tab key', () => {
    const defaultRender = <Tabs id="application-id"><Tabs.Pane label="Default" key="default" className="customClass" /></Tabs>;
    const wrapper = shallowWithIntl(defaultRender);
    wrapper.setState({ showCollapsedTabs: true });
    wrapper.update();
    expect(wrapper).toMatchSnapshot();
  });

  describe('Responsiveness', () => {
    it('should render tabs that are responsive to the parent node viewport by default', () => {
      const defaultRender = <Tabs><Tabs.Pane label="Default" key="default" /></Tabs>;
      const wrapper = shallowWithIntl(defaultRender);
      expect(wrapper).toMatchSnapshot();
    });

    it('should render tabs that are responsive to the window viewport', () => {
      const tabs = <Tabs responsiveTo="window"><Tabs.Pane label="Default" key="default" /></Tabs>;
      const wrapper = shallowWithIntl(tabs);
      expect(wrapper).toMatchSnapshot();
    });

    it('should render tabs that do not completely collapse into a menu', () => {
      const tabs = <Tabs responsiveTo="none"><Tabs.Pane label="Default" key="default" /></Tabs>;
      const wrapper = shallowWithIntl(tabs);
      expect(wrapper).toMatchSnapshot();
    });

    it('correctly applies the theme context className', () => {
      const tabs = mountWithIntl(
        <ThemeContextProvider theme={{ className: 'orion-fusion-theme' }}>
          <Tabs variant="modular-left-aligned"><Tabs.Pane label="Default" key="default" /></Tabs>
        </ThemeContextProvider>,
      );
      expect(tabs).toMatchSnapshot();
    });
  });
});
