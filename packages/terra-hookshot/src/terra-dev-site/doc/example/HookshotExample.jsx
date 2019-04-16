import React from 'react';
import Button from 'terra-button';
import InputField from 'terra-form-input/lib/InputField';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Hookshot from 'terra-hookshot/lib/Hookshot';

const ATTACHMENT_POSITIONS = [
  'top start',
  'top center',
  'top end',
  'middle start',
  'middle center',
  'middle end',
  'bottom start',
  'bottom center',
  'bottom end',
];

const generateOptions = values => (
  values.map((currentValue, index) => {
    const keyValue = index;
    return <option key={keyValue} value={currentValue}>{currentValue}</option>;
  })
);

const attachmentValues = (attachment) => {
  if (attachment === 'middle start') {
    return { vertical: 'middle', horizontal: 'start' };
  } if (attachment === 'middle end') {
    return { vertical: 'middle', horizontal: 'end' };
  } if (attachment === 'middle center') {
    return { vertical: 'middle', horizontal: 'center' };
  } if (attachment === 'top start') {
    return { vertical: 'top', horizontal: 'start' };
  } if (attachment === 'top end') {
    return { vertical: 'top', horizontal: 'end' };
  } if (attachment === 'top center') {
    return { vertical: 'top', horizontal: 'center' };
  } if (attachment === 'bottom start') {
    return { vertical: 'bottom', horizontal: 'start' };
  } if (attachment === 'bottom end') {
    return { vertical: 'bottom', horizontal: 'end' };
  }
  return { vertical: 'bottom', horizontal: 'center' };
};

const getId = name => `${name}Example`;

class HookshotStandard extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleAttachementBehaviorChange = this.handleAttachementBehaviorChange.bind(this);
    this.handleContentAttachmentChange = this.handleContentAttachmentChange.bind(this);
    this.handleTargetAttachmentChange = this.handleTargetAttachmentChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      isOpen: false,
      hookshotContentAttachment: ATTACHMENT_POSITIONS[1],
      hookshotTargetAttachment: ATTACHMENT_POSITIONS[7],
      hookshotAttachmentBehavior: Hookshot.attachmentBehaviors[0],
      hookshotAttachmentMargin: 0,
    };
  }

  handleButtonClick() {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  }

  handleRequestClose() {
    this.setState({ isOpen: false });
  }

  handleAttachementBehaviorChange(event) {
    this.setState({ hookshotAttachmentBehavior: event.target.value });
  }

  handleContentAttachmentChange(event) {
    this.setState({ hookshotContentAttachment: event.target.value });
  }

  handleTargetAttachmentChange(event) {
    this.setState({ hookshotTargetAttachment: event.target.value });
  }

  handleInputChange(event) {
    const value = Number.parseFloat(event.target.value);
    this.setState({ [event.target.name]: value });
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
      <div>
        <div style={{ height: '25px' }}>
          <label htmlFor={getId('hookshotAttachmentBehavior')} style={{ fontWeight: 'bold' }}>Attachment Behavior</label>
        </div>
        <select
          id={getId('hookshotAttachmentBehavior')}
          name="hookshotAttachmentBehavior"
          value={this.state.hookshotAttachmentBehavior}
          onChange={this.handleAttachementBehaviorChange}
          style={{ width: '200px', height: '30px' }}
        >
          {generateOptions(Hookshot.attachmentBehaviors)}
        </select>
        <br />
        <br />
        <InputField
          label="Attachment Margin in Px"
          inputId={getId('hookshotAttachmentMargin')}
          inputAttrs={{ name: 'hookshotAttachmentMargin', type: 'number' }}
          defaultValue={this.state.hookshotAttachmentMargin}
          style={{ width: '200px' }}
          onChange={this.handleInputChange}
        />
        <div style={{ height: '25px' }}>
          <label htmlFor={getId('hookshotContentAttachment')} style={{ fontWeight: 'bold' }}>Content Attachment</label>
        </div>
        <select
          id={getId('hookshotContentAttachment')}
          name="hookshotContentAttachment"
          value={this.state.hookshotContentAttachment}
          onChange={this.handleContentAttachmentChange}
          style={{ width: '200px', height: '30px' }}
        >
          {generateOptions(ATTACHMENT_POSITIONS)}
        </select>
        <br />
        <br />
        <div style={{ height: '25px' }}>
          <label htmlFor={getId('hookshotTargetAttachment')} style={{ fontWeight: 'bold' }}>Target Attachment</label>
        </div>
        <select
          id={getId('hookshotTargetAttachment')}
          name="hookshotTargetAttachment"
          value={this.state.hookshotTargetAttachment}
          onChange={this.handleTargetAttachmentChange}
          style={{ width: '200px', height: '30px' }}
        >
          {generateOptions(ATTACHMENT_POSITIONS)}
        </select>
        <br />
        <br />
        <Hookshot
          attachmentBehavior={this.state.hookshotAttachmentBehavior}
          attachmentMargin={this.state.hookshotAttachmentMargin}
          contentAttachment={attachmentValues(this.state.hookshotContentAttachment)}
          isEnabled
          isOpen={this.state.isOpen}
          targetAttachment={attachmentValues(this.state.hookshotTargetAttachment)}
          targetRef={() => document.getElementById('hookshot-standard-button')}
        >
          {hookshotContent}
        </Hookshot>
        <Button id="hookshot-standard-button" text="Hookshot Example" onClick={this.handleButtonClick} />
      </div>
    );
  }
}

export default HookshotStandard;
