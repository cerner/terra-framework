import React from 'react';
import SlidePanelManager from '../../src/SlidePanelManager';

const TestContainer = () => (
  <div>Hello World</div>
);

describe('SlidePanelManager', () => {
  it('should render the SlidePanelManager with defaults', () => {
    const slidePanelManager = (
      <SlidePanelManager>
        <TestContainer />
      </SlidePanelManager>
    );

    const result = shallow(slidePanelManager);
    expect(result).toMatchSnapshot();
  });

  it('should disclose content in SlidePanel', () => {
    const slidePanelManager = (
      <SlidePanelManager>
        <TestContainer />
      </SlidePanelManager>
    );

    const wrapper = mount(slidePanelManager);

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
