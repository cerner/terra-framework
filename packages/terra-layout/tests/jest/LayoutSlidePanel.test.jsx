import React from 'react';

import LayoutSlidePanel from '../../src/_LayoutSlidePanel';

describe('LayoutSlidePanel', () => {
  it('should render without optional props', () => {
    const result = shallow((
      <LayoutSlidePanel
        size="medium"
      />
    ));
    expect(result).toMatchSnapshot();
  });

  it('should render with provided props', () => {
    const result = shallow((
      <LayoutSlidePanel
        isAnimated
        isOpen
        isToggleEnabled
        panelBehavior="overlay"
        panelContent={(
          <div>Panel Content</div>
        )}
        size="medium"
        onToggle={() => {}}
        toggleText="Test Text"
      >
        <div>Child</div>
      </LayoutSlidePanel>
    ));

    expect(result).toMatchSnapshot();
  });

  it('should render when small', () => {
    const result = shallow((
      <LayoutSlidePanel
        isAnimated
        isOpen
        isToggleEnabled
        panelBehavior="overlay"
        panelContent={(
          <div>Panel Content</div>
        )}
        size="small"
        onToggle={() => {}}
        toggleText="Test Text"
      >
        <div>Child</div>
      </LayoutSlidePanel>
    ));

    expect(result).toMatchSnapshot();
  });

  it('should render when tiny', () => {
    const result = shallow((
      <LayoutSlidePanel
        isAnimated
        isOpen
        isToggleEnabled
        panelBehavior="overlay"
        panelContent={(
          <div>Panel Content</div>
        )}
        size="tiny"
        onToggle={() => {}}
        toggleText="Test Text"
      >
        <div>Child</div>
      </LayoutSlidePanel>
    ));

    expect(result).toMatchSnapshot();
  });
});
