import React from 'react';
import HookshotTemplate from './common/HookshotTestTemplate';

class HookshotAttachmentBehaviorAuto extends React.Component {
  constructor(props) {
    super(props);
    this.handlePositionClick = this.handlePositionClick.bind(this);
    this.state = { position: 'primary' };
  }

  handlePositionClick(event) {
    this.setState({ position: event.target.value });
  }

  render() {
    let type = 'primary';
    if (this.state.position === 'flipped') {
      type = 'auto-flipped';
    } else if (this.state.position === '90') {
      type = 'auto-90';
    } else if (this.state.position === '-90') {
      type = 'auto-neg-90';
    } else if (this.state.position === 'pushed') {
      type = 'auto-pushed';
    }
    return (
      <div>
        <HookshotTemplate
          attachmentBehavior="auto"
          id="attachment-behavior-auto"
          isOpen={false}
          type={type}
        />
        <p> Choose the positioning behavior </p>
        <p> Primary position is on the middle right</p>
        <button type="button" id="position-primary" value="primary" onClick={this.handlePositionClick}>Primary</button>
        <button type="button" id="position-flipped" value="flipped" onClick={this.handlePositionClick}>Flipped</button>
        <button type="button" id="position-90-deg" value="90" onClick={this.handlePositionClick}>Rotateed 90 Degrees</button>
        <button type="button" id="position-neg-90-deg" value="-90" onClick={this.handlePositionClick}>Rotateed -90 Degrees</button>
        <button type="button" id="position-pushed" value="pushed" onClick={this.handlePositionClick}>Pushed by bounds</button>
      </div>
    );
  }
}

export default HookshotAttachmentBehaviorAuto;
