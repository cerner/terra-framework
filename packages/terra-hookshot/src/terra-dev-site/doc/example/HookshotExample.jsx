import React from 'react';
import Button from 'terra-button';
import InputField from 'terra-form-input/lib/InputField';
import SelectField from 'terra-form-select/lib/SelectField';
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
    return <SelectField.Option key={keyValue} value={currentValue} display={currentValue} />;
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

  handleAttachementBehaviorChange(value) {
    this.setState({ hookshotAttachmentBehavior: value });
  }

  handleContentAttachmentChange(value) {
    this.setState({ hookshotContentAttachment: value });
  }

  handleTargetAttachmentChange(value) {
    this.setState({ hookshotTargetAttachment: value });
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
        <SelectField
          label="Attachment Behavior"
          selectId={getId('hookshotAttachmentBehavior')}
          selectAttrs={{ name: 'hookshotAttachmentBehavior' }}
          value={this.state.hookshotAttachmentBehavior}
          onChange={this.handleAttachementBehaviorChange}
        >
          {generateOptions(Hookshot.attachmentBehaviors)}
        </SelectField>
        <InputField
          label="Attachment Margin in Px"
          inputId={getId('hookshotAttachmentMargin')}
          inputAttrs={{ name: 'hookshotAttachmentMargin', type: 'number' }}
          defaultValue={this.state.hookshotAttachmentMargin}
          style={{ width: '200px' }}
          onChange={this.handleInputChange}
        />
        <SelectField
          label="Content Attachment"
          selectId={getId('hookshotContentAttachment')}
          selectAttrs={{ name: 'hookshotContentAttachment' }}
          value={this.state.hookshotContentAttachment}
          onChange={this.handleContentAttachmentChange}
        >
          {generateOptions(ATTACHMENT_POSITIONS)}
        </SelectField>
        <SelectField
          label="Target Attachment"
          selectId={getId('hookshotTargetAttachment')}
          selectAttrs={{ name: 'hookshotTargetAttachment' }}
          value={this.state.hookshotTargetAttachment}
          onChange={this.handleTargetAttachmentChange}
        >
          {generateOptions(ATTACHMENT_POSITIONS)}
        </SelectField>
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
