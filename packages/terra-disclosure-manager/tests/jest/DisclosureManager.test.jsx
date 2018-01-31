import React from 'react';
import DisclosureManager from '../../src/DisclosureManager';

describe('DisclosureManager', () => {
  const defaultRender = (<DisclosureManager
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
