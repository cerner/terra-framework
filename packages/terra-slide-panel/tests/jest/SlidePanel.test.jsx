import React from 'react';
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';
import { IntlProvider } from 'react-intl';
import { v4 as uuidv4 } from 'uuid';
import SlidePanel from '../../src/SlidePanel';
import translationsFile from '../../translations/en.json';

describe('When a SlidePanel is rendered', () => {
  let mockSpyUuid;
  beforeAll(() => {
    mockSpyUuid = jest.spyOn(uuidv4, 'v4').mockReturnValue('00000000-0000-0000-0000-000000000000');
  });

  afterAll(() => {
    mockSpyUuid.mockRestore();
  });

  it('should render a default SlidePanel with no props', () => {
    const slidePanel = <SlidePanel />;
    const wrapper = enzymeIntl.shallowWithIntl(slidePanel);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render a SlidePanel with panelBehavior = squish', () => {
    const slidePanel = <SlidePanel panelBehavior="squish" />;
    const wrapper = enzymeIntl.shallowWithIntl(slidePanel).dive();

    expect(wrapper.prop('data-slide-panel-panel-behavior')).toEqual('squish');
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a SlidePanel with panelBehavior = overlay', () => {
    const slidePanel = <SlidePanel panelBehavior="overlay" />;
    const wrapper = enzymeIntl.shallowWithIntl(slidePanel).dive();

    expect(wrapper.prop('data-slide-panel-panel-behavior')).toEqual('overlay');
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a SlidePanel with panelPosition = start', () => {
    const slidePanel = <SlidePanel panelPosition="start" />;
    const wrapper = enzymeIntl.shallowWithIntl(slidePanel).dive();

    expect(wrapper.prop('data-slide-panel-panel-position')).toEqual('start');
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a SlidePanel with panelPosition = end', () => {
    const slidePanel = <SlidePanel panelPosition="end" />;
    const wrapper = enzymeIntl.shallowWithIntl(slidePanel).dive();

    expect(wrapper.prop('data-slide-panel-panel-position')).toEqual('end');
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a SlidePanel with panelSize = small', () => {
    const slidePanel = <SlidePanel panelSize="small" />;
    const wrapper = enzymeIntl.shallowWithIntl(slidePanel).dive();

    expect(wrapper.prop('data-slide-panel-panel-size')).toEqual('small');
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a SlidePanel with panelSize = large', () => {
    const slidePanel = <SlidePanel panelSize="large" />;
    const wrapper = enzymeIntl.shallowWithIntl(slidePanel).dive();

    expect(wrapper.prop('data-slide-panel-panel-size')).toEqual('large');
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a SlidePanel with an open state', () => {
    const slidePanel = <SlidePanel isOpen />;
    const wrapper = enzymeIntl.shallowWithIntl(slidePanel).dive();

    expect(wrapper.prop('className')).toEqual('slide-panel is-open');
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a SlidePanel with a fullscreen state', () => {
    const slidePanel = <SlidePanel isFullscreen />;
    const wrapper = enzymeIntl.shallowWithIntl(slidePanel).dive();

    expect(wrapper.prop('className')).toEqual('slide-panel is-fullscreen');
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a SlidePanel with fill', () => {
    const slidePanel = <SlidePanel fill />;
    const wrapper = enzymeIntl.shallowWithIntl(slidePanel).dive();

    expect(wrapper.prop('className')).toEqual('slide-panel fill');
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a SlidePanel with main content', () => {
    const slidePanel = (
      <SlidePanel
        mainContent={<p>Main Content</p>}
      />
    );
    const wrapper = enzymeIntl.shallowWithIntl(slidePanel).dive();
    const mainContent = wrapper.find('.main').childAt(1);

    expect(mainContent.equals(<p>Main Content</p>)).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a SlidePanel with panel content', () => {
    const slidePanel = (
      <SlidePanel
        panelContent={<p>Panel Content</p>}
      />
    );
    const wrapper = enzymeIntl.shallowWithIntl(slidePanel).dive();
    const panelContent = wrapper.find('.panel').childAt(1);

    expect(panelContent.equals(<p>Panel Content</p>)).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a SlidePanel with main content and panel content', () => {
    const slidePanel = (
      <SlidePanel
        mainContent={<p>Main Content</p>}
        panelContent={<p>Panel Content</p>}
      />
    );
    const wrapper = enzymeIntl.shallowWithIntl(slidePanel).dive();

    const panelContent = wrapper.find('.panel').childAt(1);
    const mainContent = wrapper.find('.main').childAt(1);

    expect(panelContent.equals(<p>Panel Content</p>)).toBeTruthy();
    expect(mainContent.equals(<p>Main Content</p>)).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a SlidePanel with panelAriaLabel and mainAriaLabel specified', () => {
    const slidePanel = <SlidePanel panelAriaLabel="Panel content area" mainAriaLabel="Main content area" />;
    const wrapper = enzymeIntl.shallowWithIntl(slidePanel).dive();

    const panelDiv = wrapper.find('.panel');
    const mainDiv = wrapper.find('.main');

    expect(panelDiv.prop('aria-label')).toEqual('Panel content area');
    expect(mainDiv.prop('aria-label')).toEqual('Main content area');
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a SlidePanel with the given extra attributes', () => {
    const slidePanel = (
      <SlidePanel panelBehavior="overlay" id="my-slide-panel" className="pad-this-slide-panel" data-test-attr="ahoy thar" />
    );
    const wrapper = enzymeIntl.shallowWithIntl(slidePanel).dive();

    expect(wrapper.prop('data-slide-panel-panel-behavior')).toEqual('overlay');
    expect(wrapper.prop('id')).toEqual('my-slide-panel');
    expect(wrapper.prop('className')).toEqual('slide-panel pad-this-slide-panel');
    expect(wrapper.prop('data-test-attr')).toEqual('ahoy thar');
    expect(wrapper).toMatchSnapshot();
  });

  it('should contain a Visually Hidden Text as the aria-describedby target', () => {
    const slidePanel = <SlidePanel />;
    const wrapper = enzymeIntl.shallowWithIntl(slidePanel).dive();

    const mainDiv = wrapper.find('#detail-panel-warning-00000000-0000-0000-0000-000000000000').prop('text');
    expect(mainDiv).toEqual('Terra.slidePanel.discloseWarning');
  });

  it('should set the text property of Visually Hidden Text from ./translations', () => {
    const slidePanel = <IntlProvider locale="en" messages={translationsFile}><SlidePanel /></IntlProvider>;
    const wrapper = enzymeIntl.shallowWithIntl(slidePanel).dive().dive();

    const mainDiv = wrapper.find('#detail-panel-warning-00000000-0000-0000-0000-000000000000').prop('text');
    expect(mainDiv).toEqual(translationsFile['Terra.slidePanel.discloseWarning']);
  });
});

describe('When custom props are used', () => {
  let mockSpyUuid;
  beforeAll(() => {
    mockSpyUuid = jest.spyOn(uuidv4, 'v4').mockReturnValue('00000000-0000-0000-0000-000000000000');
  });

  afterAll(() => {
    mockSpyUuid.mockRestore();
  });

  it('should override user provided attributes that aren\'t className', () => {
    const slidePanel = (
      <SlidePanel panelBehavior="overlay" className="pad-this-slide-panel" data-test-attr="ahoy thar" data-slide-panel-panel-behavior="i am not good with slide panel" />
    );
    const wrapper = enzymeIntl.shallowWithIntl(slidePanel).dive();

    expect(wrapper.prop('data-slide-panel-panel-behavior')).toEqual('overlay');
    expect(wrapper.prop('className')).toEqual('slide-panel pad-this-slide-panel');
    expect(wrapper.prop('data-test-attr')).toEqual('ahoy thar');
    expect(wrapper).toMatchSnapshot();
  });

  it('sets aria-hidden to true on main content div when isOpen and isFullscreen props are both true', () => {
    const slidePanel = <SlidePanel isOpen isFullscreen />;
    const wrapper = enzymeIntl.shallowWithIntl(slidePanel).dive();

    const mainDiv = wrapper.find('.main');

    expect(mainDiv.prop('aria-hidden')).toEqual('true');
    expect(wrapper).toMatchSnapshot();
  });

  it('correctly applies the theme context className', () => {
    const tabs = enzymeIntl.mountWithIntl(
      <ThemeContextProvider theme={{ className: 'orion-fusion-theme' }}>
        <SlidePanel />
      </ThemeContextProvider>,
    );
    expect(tabs).toMatchSnapshot();
  });
});
