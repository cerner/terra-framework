import React from 'react';

import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';
import LayoutSlidePanel from '../../src/_LayoutSlidePanel';

describe('LayoutSlidePanel', () => {
  it('should render without optional props', () => {
    const result = enzyme.shallow((
      <LayoutSlidePanel
        size="medium"
      />
    ));
    expect(result).toMatchSnapshot();
  });

  it('should render with provided props', () => {
    const result = enzyme.shallow((
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
    const result = enzyme.shallow((
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
    const result = enzyme.shallow((
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

  it('correctly applies the theme context className', () => {
    const layout = enzyme.mount(
      <ThemeContextProvider theme={{ className: 'orion-fusion-theme' }}>
        <LayoutSlidePanel
          size="medium"
        />
      </ThemeContextProvider>,
    );
    expect(layout).toMatchSnapshot();
  });
});
