import React from 'react';
import Hookshot from '../../../Hookshot';
import HookshotContent from '../common/HookshotContentTestTemplate';

class HookshotTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.triggerHookshot = this.triggerHookshot.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.state = { open: false };
  }

  triggerHookshot() {
    this.setState({ open: true });
  }

  handleRequestClose() {
    this.setState({ open: false });
  }

  render() {
    return (
      <div id="coords-test" style={{ border: '1px dashed grey', height: '300px', width: '300px' }}>
        <Hookshot
          contentAttachment={{ vertical: 'top', horizontal: 'start' }}
          targetCoordinates={{ x: 50, y: 132 }}
          isEnabled
          isOpen={this.state.open}
        >
          <HookshotContent
            id="test-coords-content"
            onEsc={this.handleRequestClose}
            onOutsideClick={this.handleRequestClose}
          />
        </Hookshot>
        <button
          type="button"
          id="coords-button"
          onClick={this.triggerHookshot}
        >
          Trigger Hookshot
        </button>
      </div>
    );
  }
}

export default HookshotTemplate;
