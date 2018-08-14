import React from 'react';
import LayoutSlidePanel from '../../../_LayoutSlidePanel';

class LayoutSlidePanelExample extends React.Component {
  constructor(props) {
    super(props);

    this.toggleMenu = this.toggleMenu.bind(this);

    this.state = { isOpen: false };
  }

  toggleMenu() {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  }

  render() {
    return (
      <div style={{ height: '768px', width: '100%', position: 'relative' }}>
        <LayoutSlidePanel
          panelContent={(
            <div style={{
              height: '100%', width: '100%', position: 'relative', backgroundColor: 'red',
            }}
            >
              <button type="button" id="test-toggle-2" onClick={this.toggleMenu}>toggle</button>
            </div>
)}
          panelBehavior="overlay"
          size="medium"
          isOpen={this.state.isOpen}
          isToggleEnabled
          isAnimated
          onToggle={() => {}}
          toggleText="toggle text"
        >
          <div style={{
            height: '100%', width: '100%', position: 'relative', backgroundColor: 'blue',
          }}
          >
            <button type="button" id="test-toggle-1" onClick={this.toggleMenu}>
              toggle
            </button>
          </div>
        </LayoutSlidePanel>
      </div>
    );
  }
}

export default LayoutSlidePanelExample;
