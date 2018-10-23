import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import SlidePanel from 'terra-slide-panel/lib/SlidePanel';

const mainContentForSlidePanel = togglePanelHandler => (
  <div>
    <header style={{ backgroundColor: 'lightgrey' }}>
      <h3 style={{ margin: '0px', padding: '5px', display: 'inline-block' }}>Main Content</h3>
      <button id="mainToggleBtn" type="button" onClick={togglePanelHandler} style={{ display: 'inline-block' }}>Main Toggle Panel</button>
    </header>
    <div style={{ margin: '5px' }}>
      <p>
        This is the main content area of the slide panel.
        The overall height of the SlidePanel is determined by
        the intrinsic height of the content in this container.
      </p>
      <p>
        {'Focus is moved to the toggle button in the panel container when the panel is opened via the componentDidUpdate lifecycle hook in '}
        <a href="https://github.com/cerner/terra-framework/blob/master/packages/terra-slide-panel/src/terra-dev-site/doc/example/DefaultSlidePanel.jsx">the example code</a>
        {'.'}
      </p>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
        <li>Item 5</li>
        <li>Item 6</li>
        <li>Item 7</li>
        <li>Item 8</li>
      </ul>
    </div>
  </div>
);

const panelContentForSlidePanel = (togglePanelHandler, toggleFullscreenHandler) => (
  <div>
    <header style={{ backgroundColor: 'lightgrey' }}>
      <h3 style={{ margin: '0px', padding: '5px', display: 'inline-block' }}>Panel Content</h3>
      <button id="panelToggleBtn" type="button" onClick={togglePanelHandler} style={{ display: 'inline-block' }}>Panel Toggle Panel</button>
      <button type="button" onClick={toggleFullscreenHandler} style={{ display: 'inline-block' }}>Toggle Fullscreen</button>
    </header>
    <div style={{ margin: '5px' }}>
      <p>This is the panel content area of the slide panel.</p>
      <p>
        {'Focus is moved to the toggle button in the main container when the panel is closed via the componentDidUpdate lifecycle hook in '}
        <a href="https://github.com/cerner/terra-framework/blob/master/packages/terra-slide-panel/src/terra-dev-site/doc/example/DefaultSlidePanel.jsx">the example code</a>
        {'.'}
      </p>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
        <li>Item 5</li>
        <li>Item 6</li>
        <li>Item 7</li>
        <li>Item 8</li>
        <li>Item 9</li>
        <li>Item 10</li>
        <li>Item 11</li>
        <li>Item 12</li>
        <li>Item 13</li>
        <li>Item 14</li>
        <li>Item 15</li>
      </ul>
    </div>
  </div>
);

class DefaultSlidePanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      panelIsOpen: props.isOpen || false,
      panelIsFullscreen: props.isFullscreen || false,
    };

    this.handlePanelToggle = this.handlePanelToggle.bind(this);
    this.handleFullscreenToggle = this.handleFullscreenToggle.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState && !prevState.panelIsOpen) {
      // Shift focus to button in panel container
      document.getElementById('panelToggleBtn').focus();
    } else {
      // Shift focus to button in main container
      document.getElementById('mainToggleBtn').focus();
    }
  }

  handlePanelToggle() {
    this.setState(prevState => ({
      panelIsOpen: !prevState.panelIsOpen,
      panelIsFullscreen: prevState.panelIsOpen,
    }));
  }

  handleFullscreenToggle() {
    const newState = this.state;

    newState.panelIsFullscreen = !this.state.panelIsFullscreen;

    this.setState(newState);
  }

  render() {
    const containerAttributes = {
      style: { border: '1px lightgrey solid' },
    };

    return (
      <div style={{ padding: '5px' }}>
        <div {...containerAttributes}>
          <SlidePanel
            mainContent={mainContentForSlidePanel(this.handlePanelToggle)}
            panelContent={panelContentForSlidePanel(this.handlePanelToggle, this.handleFullscreenToggle)}
            panelSize={this.props.panelSize}
            panelBehavior={this.props.panelBehavior}
            panelPosition={this.props.panelPosition}
            isOpen={this.state.panelIsOpen}
            isFullscreen={this.state.panelIsFullscreen}
            fill={this.props.fill}
          />
        </div>
      </div>
    );
  }
}

DefaultSlidePanel.propTypes = {
  panelBehavior: PropTypes.oneOf(['overlay', 'squish']),
  panelPosition: PropTypes.oneOf(['start', 'end']),
  panelSize: PropTypes.oneOf(['small', 'large']),
  isFullscreen: PropTypes.bool,
  isOpen: PropTypes.bool,
  fill: PropTypes.bool,
};

export default DefaultSlidePanel;
