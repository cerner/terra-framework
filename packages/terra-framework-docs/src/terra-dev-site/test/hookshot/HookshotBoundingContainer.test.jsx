import React from 'react';
import HookshotTemplate from './common/HookshotTestTemplate';

class HookshotBoundingContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handlePositionClick = this.handlePositionClick.bind(this);
    this.state = { position: 'up' };
  }

  handlePositionClick(event) {
    this.setState({ position: event.target.value });
  }

  render() {
    let type = 'up';
    let targetAttachment;
    let contentAttachment;

    if (this.state.position === 'up') {
      type = 'container-up';
    } else if (this.state.position === 'down') {
      type = 'container-down';
    } else if (this.state.position === 'left') {
      type = 'container-left';
      targetAttachment = 'middle end';
      contentAttachment = 'middle start';
    } else if (this.state.position === 'right') {
      type = 'container-right';
    }
    return (
      <div>
        <HookshotTemplate
          isOpen={false}
          type={type}
          targetAttachment={targetAttachment}
          contentAttachment={contentAttachment}
          id="bounding-container"
        />
        <p> Position should be pushed by bounding container </p>
        <p> Choose position behavior </p>
        <button type="button" id="push-up" value="up" onClick={this.handlePositionClick}>Pushed Up</button>
        <button type="button" id="push-down" value="down" onClick={this.handlePositionClick}>Pushed Down</button>
        <button type="button" id="push-left" value="left" onClick={this.handlePositionClick}>Pushed Left</button>
        <button type="button" id="push-right" value="right" onClick={this.handlePositionClick}>Pushed Right</button>
      </div>
    );
  }
}

export default HookshotBoundingContainer;
