/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { withDisclosureManager } from 'terra-disclosure-manager';
import SlidePanelManager from '../../src/SlidePanelManager';

const TestContainer = withDisclosureManager(({ id }) => (
  <div id={id}>Hello World</div>
));

describe('SlidePanelManager', () => {
  let mockSpyUuid;
  beforeAll(() => {
    mockSpyUuid = jest.spyOn(uuidv4, 'v4').mockReturnValue('00000000-0000-0000-0000-000000000000');
  });

  afterAll(() => {
    mockSpyUuid.mockRestore();
  });

  it('should render the SlidePanelManager with defaults', () => {
    const slidePanelManager = (
      <SlidePanelManager>
        <TestContainer />
      </SlidePanelManager>
    );

    const wrapper = enzymeIntl.mountWithIntl(slidePanelManager);
    expect(wrapper).toMatchSnapshot();
  });

  it('should set panelBehavior in SlidePanel with squish override', () => {
    const slidePanelManager = (
      <SlidePanelManager panelBehavior="squish">
        <TestContainer />
      </SlidePanelManager>
    );

    const slidePanelWrapper = enzymeIntl.shallowWithIntl(slidePanelManager).dive().dive().dive();
    expect(slidePanelWrapper.prop('panelBehavior')).toEqual('squish');
  });

  it('should render the SlidePanelManager with squish override', () => {
    const slidePanelManager = (
      <SlidePanelManager panelBehavior="squish">
        <TestContainer />
      </SlidePanelManager>
    );

    const wrapper = enzymeIntl.mountWithIntl(slidePanelManager);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the SlidePanelManager with custom props', () => {
    const slidePanelManager = (
      <SlidePanelManager id="my-slide-panel-manager" className="test">
        <TestContainer />
      </SlidePanelManager>
    );

    const wrapper = enzymeIntl.mountWithIntl(slidePanelManager);
    expect(wrapper.prop('id')).toEqual('my-slide-panel-manager');
    expect(wrapper.prop('className')).toEqual('test');
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a SlidePanelManager with level three header element and title', () => {
    const slidePanelManager = (
      <SlidePanelManager id="my-slide-panel-manager" className="test" level={3}>
        <TestContainer />
      </SlidePanelManager>
    );
    const wrapper = enzymeIntl.mountWithIntl(slidePanelManager);
    expect(wrapper).toMatchSnapshot();
  });

  it('should disclose content in SlidePanel', () => {
    const slidePanelManager = (
      <SlidePanelManager>
        <TestContainer id="test" />
      </SlidePanelManager>
    );

    const wrapper = enzymeIntl.mountWithIntl(slidePanelManager);

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

    const wrapper = enzymeIntl.mountWithIntl(slidePanelManager);

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
        expect(wrapper.exists('#disclosure-container')).toBeTruthy();
        expect(wrapper.find('#disclosure-container')).toMatchSnapshot();
      });
  });
});
