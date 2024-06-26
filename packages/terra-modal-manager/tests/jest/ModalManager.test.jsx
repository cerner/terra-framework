import React from 'react';
import { withDisclosureManager } from 'terra-disclosure-manager';
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';
import ModalManager from '../../src/ModalManager';

const TestContainer = withDisclosureManager(({ id }) => (
  <button id={id} type="button">Hello World</button>
));

describe('ModalManager', () => {
  it('should render the ModalManager with defaults', () => {
    const modalManager = (
      <ModalManager>
        <TestContainer />
      </ModalManager>
    );

    const result = enzymeIntl.mountWithIntl(modalManager);
    expect(result).toMatchSnapshot();
  });

  it('should render the ModalManager with custom props', () => {
    const modalManager = (
      <ModalManager id="my-modal-manager" className="test">
        <TestContainer />
      </ModalManager>
    );

    const result = enzymeIntl.mountWithIntl(modalManager);
    expect(result).toMatchSnapshot();
  });

  it('should disclose content in Modal', () => {
    const modalManager = (
      <ModalManager shouldTrapFocus>
        <TestContainer id="test" />
      </ModalManager>
    );

    const wrapper = enzymeIntl.mountWithIntl(modalManager);

    return new Promise((resolve, reject) => {
      const childDisclosureManager = wrapper.find('#test').getElements()[1].props.disclosureManager;
      childDisclosureManager.disclose({
        preferredType: 'modal',
        size: 'large',
        content: {
          key: 'DISCLOSE_KEY',
          component: <TestContainer id="test-modal" />,
        },
      }).then(resolve).catch(reject);
    })
      .then(() => {
        wrapper.update();

        expect(wrapper).toMatchSnapshot();
      });
  });

  it('should disclose content in Modal wrapped by disclose container', () => {
    const modalManager = (
      <ModalManager shouldTrapFocus withDisclosureContainer={(wrappedContent) => (<div id="disclosure-container">{wrappedContent}</div>)}>
        <TestContainer id="test" />
      </ModalManager>
    );

    const wrapper = enzymeIntl.mountWithIntl(modalManager);

    return new Promise((resolve, reject) => {
      const childDisclosureManager = wrapper.find('#test').getElements()[1].props.disclosureManager;
      childDisclosureManager.disclose({
        preferredType: 'modal',
        size: 'large',
        content: {
          key: 'DISCLOSE_KEY',
          component: <TestContainer id="test-modal" />,
        },
      }).then(resolve).catch(reject);
    })
      .then(() => {
        wrapper.update();
        expect(wrapper.exists('#disclosure-container')).toBe(true);
        expect(wrapper.find('#disclosure-container')).toMatchSnapshot();
      });
  });

  it('correctly applies the theme context className', () => {
    const modalManager = enzyme.mount(
      <ThemeContextProvider theme={{ className: 'orion-fusion-theme' }}>
        <ModalManager>
          <TestContainer />
        </ModalManager>
      </ThemeContextProvider>,
    );
    expect(modalManager).toMatchSnapshot();
  });

  it('should render the ModalManager with custom zIndex', () => {
    const modalManager = (
      <ModalManager zIndex="7000">
        <TestContainer />
      </ModalManager>
    );

    const result = enzymeIntl.mountWithIntl(modalManager);
    expect(result).toMatchSnapshot();
  });
});
