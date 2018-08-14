import React from 'react';
import ModalManager from '../../src/ModalManager';

const TestContainer = () => (
  <button type="button">Hello World</button>
);

describe('ModalManager', () => {
  it('should render the ModalManager with defaults', () => {
    const modalManager = (
      <ModalManager>
        <TestContainer />
      </ModalManager>
    );

    const result = mount(modalManager);
    expect(result).toMatchSnapshot();
  });

  it('should render the ModalManager with custom props', () => {
    const modalManager = (
      <ModalManager id="my-modal-manager" className="test">
        <TestContainer />
      </ModalManager>
    );

    const result = mount(modalManager);
    expect(result).toMatchSnapshot();
  });

  it('should disclose content in Modal', () => {
    const modalManager = (
      <ModalManager>
        <TestContainer />
      </ModalManager>
    );

    const wrapper = mount(modalManager);

    return new Promise((resolve, reject) => {
      const childApp = wrapper.find(TestContainer).getElements()[0].props.app;
      childApp.disclose({
        preferredType: 'modal',
        size: 'large',
        content: {
          key: 'DISCLOSE_KEY',
          component: <TestContainer />,
        },
      }).then(resolve).catch(reject);
    })
      .then(() => {
        wrapper.update();

        expect(wrapper).toMatchSnapshot();
      });
  });
});
