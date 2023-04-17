import React from 'react';
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl, renderWithIntl, mountWithIntl } from 'terra-enzyme-intl';
import SlidePanel from '../../src/SlidePanel';

describe('When a SlidePanel is rendered', () => {
  it('should render a default SlidePanel with no props', () => {
    const slidePanel = <SlidePanel />;
    const wrapper = renderWithIntl(slidePanel);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render a SlidePanel with panelBehavior = squish', () => {
    const slidePanel = <SlidePanel panelBehavior="squish" />;
    const wrapper = renderWithIntl(slidePanel);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render a SlidePanel with panelBehavior = overlay', () => {
    const slidePanel = <SlidePanel panelBehavior="overlay" />;
    const wrapper = renderWithIntl(slidePanel);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render a SlidePanel with panelPosition = start', () => {
    const slidePanel = <SlidePanel panelPosition="start" />;
    const wrapper = renderWithIntl(slidePanel);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render a SlidePanel with panelPosition = end', () => {
    const slidePanel = <SlidePanel panelPosition="end" />;
    const wrapper = renderWithIntl(slidePanel);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render a SlidePanel with panelSize = small', () => {
    const slidePanel = <SlidePanel panelSize="small" />;
    const wrapper = renderWithIntl(slidePanel);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render a SlidePanel with panelSize = large', () => {
    const slidePanel = <SlidePanel panelSize="large" />;
    const wrapper = renderWithIntl(slidePanel);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render a SlidePanel with an open state', () => {
    const slidePanel = <SlidePanel isOpen />;
    const wrapper = renderWithIntl(slidePanel);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render a SlidePanel with a fullscreen state', () => {
    const slidePanel = <SlidePanel isFullscreen />;
    const wrapper = renderWithIntl(slidePanel);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render a SlidePanel with fill', () => {
    const slidePanel = <SlidePanel fill />;
    const wrapper = renderWithIntl(slidePanel);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render a SlidePanel with main content', () => {
    const slidePanel = (
      <SlidePanel
        mainContent={<p>Main Content</p>}
      />
    );
    const wrapper = renderWithIntl(slidePanel);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render a SlidePanel with panel content', () => {
    const slidePanel = (
      <SlidePanel
        panelContent={<p>Panel Content</p>}
      />
    );
    const wrapper = renderWithIntl(slidePanel);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render a SlidePanel with panelAriaLabel and mainAriaLabel specified', () => {
    const slidePanel = <SlidePanel panelAriaLabel="Panel content area" mainAriaLabel="Main content area" />;
    const wrapper = renderWithIntl(slidePanel);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render a SlidePanel with the given extra attributes', () => {
    const slidePanel = (
      <SlidePanel panelBehavior="overlay" id="my-slide-panel" className="pad-this-slide-panel" data-test-attr="ahoy thar" />
    );
    const wrapper = renderWithIntl(slidePanel);
  
    expect(wrapper).toMatchSnapshot();
  });
});

describe('When mainAriaDescribedBy and replaceMainAriaDescribedBy are set', () => {
  it('should construct aria-describedby when mainAriaDescribedBy has a single ID and replaceMainAriaDescribedBy is false', () => {
    const slidePanel = <SlidePanel mainAriaDescribedBy="patient-list" replaceMainAriaDescribedBy={false} />;
    const wrapper = shallowWithIntl(slidePanel).dive();
  
    const mainDiv = wrapper.find('.main').prop('aria-describedby');
    expect(mainDiv).toEqual('detail-panel-warning patient-list');
  });
  
  it('should construct aria-describedby when mainAriaDescribedBy has multiple IDs and replaceMainAriaDescribedBy is false', () => {
    const slidePanel = <SlidePanel mainAriaDescribedBy="patient-list-1 patient-list-2" replaceMainAriaDescribedBy={false} />;
    const wrapper = shallowWithIntl(slidePanel).dive();
  
    const mainDiv = wrapper.find('.main').prop('aria-describedby');
    expect(mainDiv).toEqual('detail-panel-warning patient-list-1 patient-list-2');
  });
  
  it('should construct aria-describedby when mainAriaDescribedBy has a single ID and replaceMainAriaDescribedBy is true', () => {
    const slidePanel = <SlidePanel mainAriaDescribedBy="patient-list" replaceMainAriaDescribedBy />;
    const wrapper = shallowWithIntl(slidePanel).dive();
  
    const mainDiv = wrapper.find('.main').prop('aria-describedby');
    expect(mainDiv).toEqual('patient-list');
  });
  
  it('should construct aria-describedby when mainAriaDescribedBy has multiple IDs and replaceMainAriaDescribedBy is true', () => {
    const slidePanel = <SlidePanel mainAriaDescribedBy="patient-list-1 patient-list-2" replaceMainAriaDescribedBy />;
    const wrapper = shallowWithIntl(slidePanel).dive();
  
    const mainDiv = wrapper.find('.main').prop('aria-describedby');
    expect(mainDiv).toEqual('patient-list-1 patient-list-2');
  });

  it('should construct aria-describedby when mainAriaDescribedBy is undefined', () => {
    const slidePanel = <SlidePanel />;
    const wrapper = shallowWithIntl(slidePanel).dive();
  
    const mainDiv = wrapper.find('.main').prop('aria-describedby');
    expect(mainDiv).toEqual('detail-panel-warning');
  });
});

describe('When custom props are used', () => {
  
  it('should override user provided attributes that aren\'t className', () => {
    const slidePanel = (
      <SlidePanel panelBehavior="overlay" className="pad-this-slide-panel" data-test-attr="ahoy thar" data-slide-panel-panel-behavior="i am not good with slide panel" />
    );
    const wrapper = renderWithIntl(slidePanel);
  
    expect(wrapper).toMatchSnapshot();
  });
  
  it('correctly applies the theme context className', () => {
    const tabs = mountWithIntl(
      <ThemeContextProvider theme={{ className: 'orion-fusion-theme' }}>
        <SlidePanel />
      </ThemeContextProvider>,
    );
    expect(tabs).toMatchSnapshot();
  });
  
});
