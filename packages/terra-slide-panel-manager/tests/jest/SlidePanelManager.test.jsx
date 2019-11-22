import React from 'react';
import { withDisclosureManager } from 'terra-disclosure-manager';
import SlidePanelManager from '../../src/SlidePanelManager';

const TestContainer = withDisclosureManager(({ id }) => (
  <div id={id}>Hello World</div>
));

describe('SlidePanelManager', () => {
  it('should render the SlidePanelManager with defaults', () => {
    const slidePanelManager = (
      <SlidePanelManager>
        <TestContainer />
      </SlidePanelManager>
    );

    const result = mount(slidePanelManager);
    expect(result).toMatchSnapshot();
  });

  it('should render the SlidePanelManager with squish override', () => {
    const slidePanelManager = (
      <SlidePanelManager panelBehavior="squish">
        <TestContainer />
      </SlidePanelManager>
    );

    const result = mount(slidePanelManager);
    expect(result).toMatchSnapshot();
  });

  it('should render the SlidePanelManager with custom props', () => {
    const slidePanelManager = (
      <SlidePanelManager id="my-slide-panel-manager" className="test">
        <TestContainer />
      </SlidePanelManager>
    );

    const result = mount(slidePanelManager);
    expect(result).toMatchSnapshot();
  });

  it('should disclose content in SlidePanel', () => {
    const slidePanelManager = (
      <SlidePanelManager>
        <TestContainer id="test" />
      </SlidePanelManager>
    );

    const wrapper = mount(slidePanelManager);

    return new Promise((resolve, reject) => {
      const childDisclosureManager = wrapper.find('#test').getElements()[1].props.disclosureManager;
      childDisclosureManager.disclose({
        preferredType: 'panel',
        size: 'large',
        content: {
          key: 'DISCLOSE_KEY',
          component: <TestContainer id="test-panel" />,
        },
      }).then(resolve).catch(reject);
    })
      .then(() => {
        wrapper.update();

        expect(wrapper).toMatchSnapshot();
      });
  });

  it('should disclose content in Modal wrapped by disclose container', () => {
    const slidePanelManager = (
      <SlidePanelManager withDisclosureContainer={(wrappedContent) => (<div id="disclosure-container">{wrappedContent}</div>)}>
        <TestContainer id="test" />
      </SlidePanelManager>
    );

    const wrapper = mount(slidePanelManager);

    return new Promise((resolve, reject) => {
      const childDisclosureManager = wrapper.find('#test').getElements()[1].props.disclosureManager;
      childDisclosureManager.disclose({
        preferredType: 'panel',
        size: 'large',
        content: {
          key: 'DISCLOSE_KEY',
          component: <TestContainer id="test-panel" />,
        },
      }).then(resolve).catch(reject);
    })
      .then(() => {
        wrapper.update();
        expect(wrapper.exists('#disclosure-container')).toBe(true);
        expect(wrapper.find('#disclosure-container')).toMatchSnapshot();
      });
  });
});
