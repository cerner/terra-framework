import React from 'react';
import ModalManager from '../../src/ModalManager';

const TestContainer = () => (
  <div>Hello World</div>
);

describe('ModalManger', () => {
  it('should render the ModalManager with defaults', () => {
    const modalManager = (
      <ModalManager>
        <TestContainer />
      </ModalManager>
    );

    const result = shallow(modalManager);
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
