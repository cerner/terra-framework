import React from 'react';
import ModalManager from '../../src/ModalManager';

const TestContainer = () => (
  <div>Hello World</div>
);

describe('Modal', () => {
  it('should render the ModalManager with defaults', () => {
    const modal = (
      <ModalManager>
        <TestContainer />
      </ModalManager>
    );

    const result = mount(modal);
    expect(result).toMatchSnapshot();
  });

  it('should render the ModalManager with custom props', () => {
    const modal = (
      <ModalManager id="my-modal-manager" className="test">
        <TestContainer />
      </ModalManager>
    );

    const result = mount(modal);
    expect(result).toMatchSnapshot();
  });

  it('should disclose content in Modal', () => {
    const modal = (
      <ModalManager>
        <TestContainer />
      </ModalManager>
    );

    const wrapper = mount(modal);

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
