import React from 'react';
import HookshotTemplate from '../common/HookshotTestTemplate';

class HookshotAttachmentBehaviorNone extends React.Component {
  constructor(props) {
    super(props);
    this.handlePositionClick = this.handlePositionClick.bind(this);
    this.state = { position: 'primary' };
  }

  handlePositionClick(event) {
    this.setState({ position: event.target.value });
  }

  render() {
    let margin;

    if (this.state.position === 'offset') {
      margin = '50px';
    }
    return (
      <div>
        <HookshotTemplate
          attachmentBehavior="none"
          id="attachment-behavior-none"
          isOpen={false}
          buttonMarginLeft={margin}
        />
        <p> Choose the positioning behavior </p>
        <p> Primary position is on the middle right</p>
        <button type="button" id="position-primary" value="primary" onClick={this.handlePositionClick}>Primary</button>
        <button type="button" id="position-offset" value="offset" onClick={this.handlePositionClick}>Offset</button>
      </div>
    );
  }
}

export default HookshotAttachmentBehaviorNone;
