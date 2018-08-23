import React from 'react';
import HookshotTemplate from '../common/HookshotTestTemplate';

class HookshotAttachmentBehaviorPush extends React.Component {
  constructor(props) {
    super(props);

    this.state = { position: 'primary' };
    this.handlePositionClick = this.handlePositionClick.bind(this);
  }

  handlePositionClick(event) {
    this.setState({ position: event.target.value });
  }

  render() {
    let margin;
    if (this.state.position === 'pushed') {
      margin = '50px';
    }

    return (
      <div>
        <HookshotTemplate
          attachmentBehavior="push"
          id="attachment-behavior-push"
          isOpen={false}
          buttonMarginLeft={margin}
        />
        <p>Choose the positioning behavior</p>
        <p>Primary position is on the middle right</p>
        <button type="button" id="position-primary" value="primary" onClick={this.handlePositionClick}>Primary</button>
        <button type="button" id="position-pushed" value="pushed" onClick={this.handlePositionClick}>Pushed by bounds</button>
      </div>
    );
  }
}

export default HookshotAttachmentBehaviorPush;
