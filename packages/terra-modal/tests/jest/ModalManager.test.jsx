import React from 'react';
import Modal from '../../src/Modal';

const TestContainer = () => (
  <div>Hello World</div>
);

describe('Modal', () => {
  it('should render the Modal with defaults', () => {
    const modal = (
      <Modal>
        <TestContainer />
      </Modal>
    );

    const result = mount(modal);
    expect(result).toMatchSnapshot();
  });

  it('should render the ModalManager with custom props', () => {
    const modal = (
      <Modal id="my-modal-manager" className="test">
        <TestContainer />
      </Modal>
    );

    const result = mount(modal);
    expect(result).toMatchSnapshot();
  });

  it('should disclose content in Modal', () => {
    const modal = (
      <Modal>
        <TestContainer />
      </Modal>
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
