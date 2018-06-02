import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Hookshot from 'terra-hookshot/lib/Hookshot';

class HookshotStandard extends React.Component {
  constructor(props) {
    super(props);
    this.handleRegionClick = this.handleRegionClick.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.setParentNode = this.setParentNode.bind(this);
    this.getParentNode = this.getParentNode.bind(this);
    this.state = {
      isOpen: false,
      coordinates: undefined,
    };
  }

  setParentNode(node) {
    this.parentNode = node;
  }

  getParentNode() {
    return this.parentNode;
  }

  handleRegionClick(event) {
    this.setState({ isOpen: !this.state.isOpen, coordinates: { x: event.clientX, y: event.clientY } });
  }

  handleRequestClose() {
    this.setState({ isOpen: false });
  }

  render() {
    const hookshotContent = (
      <Hookshot.Content
        onEsc={this.handleRequestClose}
        onOutsideClick={this.handleRequestClose}
        onResize={this.handleRequestClose}
      >
        <div style={{ height: '40px', width: '200px', backgroundColor: 'red' }}>Hookshot</div>
      </Hookshot.Content>
    );

    return (
      /* eslint-disable jsx-a11y/no-static-element-interactions */
      <div onClick={this.handleRegionClick} style={{ border: '1px dashed black', backgroundColor: 'aliceblue', height: '300px', width: '100%' }} ref={this.setParentNode}>
        Click Inside
        <Hookshot
          boundingRef={this.getParentNode}
          contentAttachment={{ vertical: 'top', horizontal: 'center' }}
          isEnabled
          isOpen={this.state.isOpen}
          targetCoordinates={this.state.coordinates}
        >
          {hookshotContent}
        </Hookshot>
      </div>
      /* eslint-enable jsx-a11y/no-static-element-interactions */
    );
  }
}

export default HookshotStandard;
