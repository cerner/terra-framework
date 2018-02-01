import React from 'react';
import SlidePanelManager from '../../src/SlidePanelManager';

describe('SlidePanelManager', () => {
  const defaultRender = (<SlidePanelManager
    render={() => <div />}
  />);

  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  // Prop Tests

  // Structure Tests
});
