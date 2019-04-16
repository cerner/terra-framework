import React from 'react';
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

const getId = name => `${name}CoordsExample`;

class HookshotStandard extends React.Component {
  constructor(props) {
    super(props);
    this.handleRegionClick = this.handleRegionClick.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.setParentNode = this.setParentNode.bind(this);
    this.getParentNode = this.getParentNode.bind(this);
    this.handleAttachementBehaviorChange = this.handleAttachementBehaviorChange.bind(this);
    this.handleContentAttachmentChange = this.handleContentAttachmentChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      isOpen: false,
      coordinates: undefined,
      hookshotContentAttachment: ATTACHMENT_POSITIONS[1],
      hookshotAttachmentBehavior: Hookshot.attachmentBehaviors[0],
      hookshotAttachmentMargin: 0,
    };
  }

  setParentNode(node) {
    this.parentNode = node;
  }

  getParentNode() {
    return this.parentNode;
  }

  handleRegionClick(event) {
    const coordinates = { x: event.clientX, y: event.clientY };
    this.setState(prevState => ({ isOpen: !prevState.isOpen, coordinates }));
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

  handleInputChange(event) {
    this.setState({ [event.target.name]: Number.parseFloat(event.target.value) });
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
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
        <div
          onClick={this.handleRegionClick}
          style={{
            border: '1px dashed black', backgroundColor: 'aliceblue', height: '300px', width: '100%',
          }}
          ref={this.setParentNode}
        >
          Click Inside
          <Hookshot
            attachmentBehavior={this.state.hookshotAttachmentBehavior}
            attachmentMargin={this.state.hookshotAttachmentMargin}
            boundingRef={this.getParentNode}
            contentAttachment={attachmentValues(this.state.hookshotContentAttachment)}
            isEnabled
            isOpen={this.state.isOpen}
            targetCoordinates={this.state.coordinates}
          >
            {hookshotContent}
          </Hookshot>
        </div>
      </div>
      /* eslint-enable jsx-a11y/no-static-element-interactions */
    );
  }
}

export default HookshotStandard;
