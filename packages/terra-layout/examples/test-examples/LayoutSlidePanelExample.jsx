import React from 'react';
import LayoutSlidePanel from '../../src/_LayoutSlidePanel';

class LayoutSlidePanelExample extends React.Component {
  constructor(props) {
    super(props);

    this.toggleMenu = this.toggleMenu.bind(this);

    this.state = { isOpen: false };
  }

  toggleMenu() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <div style={{ height: '768px', width: '100%', position: 'relative' }}>
        <LayoutSlidePanel
          panelContent={
            <div style={{ height: '100%', width: '100%', position: 'relative', backgroundColor: 'red' }}>
              <button id="test-toggle-2" onClick={this.toggleMenu}>toggle</button>
            </div>
          }
          panelBehavior="overlay"
          size="medium"
          isOpen={this.state.isOpen}
          isToggleEnabled
          isAnimated
          onToggle={() => {}}
          toggleText="toggle text"
        >
          <div style={{ height: '100%', width: '100%', position: 'relative', backgroundColor: 'blue' }}>
            <button id="test-toggle-1" onClick={this.toggleMenu}>
              toggle
            </button>
          </div>
        </LayoutSlidePanel>
      </div>
    );
  }
}

export default LayoutSlidePanelExample;
