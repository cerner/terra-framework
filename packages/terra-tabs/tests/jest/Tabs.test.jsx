import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { shallowWithIntl, mountWithIntl } from 'terra-enzyme-intl';
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';
import { v4 as uuidv4 } from 'uuid';
import Tabs from '../../src/Tabs';

describe('Tabs', () => {
  let mockSpyUuid;
  beforeAll(() => {
    mockSpyUuid = jest.spyOn(uuidv4, 'v4').mockImplementation(() => '00000000-0000-0000-0000-000000000000');
  });

  afterAll(() => {
    mockSpyUuid.mockRestore();
  });

  it('should render a default component', () => {
    const defaultRender = <Tabs><Tabs.Pane label="Default" key="default" /></Tabs>;
    const wrapper = shallowWithIntl(defaultRender).dive();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with tabs filled when indicated', () => {
    const defaultRender = <Tabs tabFill><Tabs.Pane label="Default" key="default" /></Tabs>;
    const wrapper = shallowWithIntl(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with content filled when indicated', () => {
    const defaultRender = <Tabs fill><Tabs.Pane label="Default" key="default" /></Tabs>;
    const wrapper = shallowWithIntl(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a controlled component when onChange and activeKey are set', () => {
    const defaultRender = <Tabs onChange={() => {}} activeKey="default"><Tabs.Pane label="Default" key="default" /></Tabs>;
    const wrapper = shallowWithIntl(defaultRender).dive();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an uncontrolled component when defaultActiveKey is set', () => {
    const defaultRender = <Tabs defaultActiveKey="default"><Tabs.Pane label="Default" key="default" /></Tabs>;
    const wrapper = shallowWithIntl(defaultRender).dive();
    expect(wrapper).toMatchSnapshot();
  });

  it('should set custom props', () => {
    const defaultRender = <Tabs className="customClass"><Tabs.Pane label="Default" key="default" /></Tabs>;
    const wrapper = shallowWithIntl(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  it('should set custom props for child Tab Pane', () => {
    const defaultRender = <Tabs><Tabs.Pane label="Default" key="default" className="customClass" /></Tabs>;
    const wrapper = shallowWithIntl(defaultRender).dive();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an id based on the Tabs id and the Tab key', () => {
    const defaultRender = <Tabs id="application-id"><Tabs.Pane label="Default" key="default" className="customClass" /></Tabs>;
    const wrapper = shallowWithIntl(defaultRender).dive();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a draggable tabs component', () => {
    const mockCallBack = jest.fn();
    const defaultRender = <Tabs isDraggable onTabOrderChange={mockCallBack}><Tabs.Pane label="Default" key="default" /></Tabs>;
    const wrapper = shallowWithIntl(defaultRender).dive();
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
