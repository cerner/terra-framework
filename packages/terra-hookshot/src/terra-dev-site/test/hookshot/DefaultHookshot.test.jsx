import React from 'react';
import Hookshot from '../../../Hookshot';

class HookshotStandard extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.state = { open: false };
  }

  handleButtonClick() {
    this.setState({ open: true });
  }

  handleRequestClose() {
    this.setState({ open: false });
  }

  render() {
    const hookshotContent = (
      <Hookshot.Content
        onEsc={this.handleRequestClose}
        onOutsideClick={this.handleRequestClose}
        onResize={this.handleRequestClose}
        id="testDefaultContent"
      >
        <div style={{ height: '40px', width: '200px' }}>Hookshot</div>
      </Hookshot.Content>
    );

    return (
      <div
        id="default-bounds"
        style={{
          border: '1px dashed grey', height: '145px', width: '500px', position: 'relative',
        }}
      >
        <Hookshot
          contentAttachment={{ vertical: 'bottom', horizontal: 'center' }}
          isEnabled
          isOpen={this.state.open}
          targetRef={() => document.getElementById('hookshot-standard-button')}
        >
          {hookshotContent}
        </Hookshot>
        <button type="button" style={{ position: 'absolute', left: '210px', top: '50%' }} id="hookshot-standard-button" onClick={this.handleButtonClick}>Default Hookshot</button>
      </div>
    );
  }
}

export default HookshotStandard;
