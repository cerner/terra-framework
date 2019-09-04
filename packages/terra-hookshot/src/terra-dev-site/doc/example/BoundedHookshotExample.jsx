import React from 'react';
import classNames from 'classnames/bind';
import Button from 'terra-button';
import InputField from 'terra-form-input/lib/InputField';
import Hookshot from 'terra-hookshot/lib/Hookshot';
import styles from './HookshotDocCommon.module.scss';

const cx = classNames.bind(styles);

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

const getId = name => `${name}BoundedExample`;

class HookshotStandard extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleAttachementBehaviorChange = this.handleAttachementBehaviorChange.bind(this);
    this.handleContentAttachmentChange = this.handleContentAttachmentChange.bind(this);
    this.handleTargetAttachmentChange = this.handleTargetAttachmentChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.setParentNode = this.setParentNode.bind(this);
    this.getParentNode = this.getParentNode.bind(this);
    this.state = {
      isOpen: false,
      hookshotContentAttachment: ATTACHMENT_POSITIONS[1],
      hookshotTargetAttachment: ATTACHMENT_POSITIONS[7],
      hookshotAttachmentBehavior: Hookshot.attachmentBehaviors[0],
      hookshotAttachmentMargin: 0,
    };
  }

  componentDidMount() {
    this.parentNode.scrollTop = 225;
    this.parentNode.scrollLeft = 475;
  }

  setParentNode(node) {
    this.parentNode = node;
  }

  getParentNode() {
    return this.parentNode;
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
    this.setState({ [event.target.name]: Number.parseFloat(event.target.value) });
  }

  render() {
    const hookshotContent = (
      <Hookshot.Content
        onEsc={this.handleRequestClose}
        onOutsideClick={this.handleRequestClose}
        onResize={this.handleRequestClose}
      >
        <div className={cx('content-wrapper')}>Hookshot</div>
      </Hookshot.Content>
    );

    return (
      <div>
        <div className={cx('heading-wrapper')}>
          <label htmlFor={getId('hookshotAttachmentBehavior')} className={cx('label')}>Attachment Behavior</label>
        </div>
        <select
          id={getId('hookshotAttachmentBehavior')}
          name="hookshotAttachmentBehavior"
          value={this.state.hookshotAttachmentBehavior}
          onChange={this.handleAttachementBehaviorChange}
          className={cx('select-wrapper')}
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
          className={cx('input-wrapper')}
          onChange={this.handleInputChange}
        />
        <div className={cx('heading-wrapper')}>
          <label htmlFor={getId('hookshotContentAttachment')} className={cx('label')}>Content Attachment</label>
        </div>
        <select
          id={getId('hookshotContentAttachment')}
          name="hookshotContentAttachment"
          value={this.state.hookshotContentAttachment}
          onChange={this.handleContentAttachmentChange}
          className={cx('select-wrapper')}
        >
          {generateOptions(ATTACHMENT_POSITIONS)}
        </select>
        <br />
        <br />
        <div className={cx('heading-wrapper')}>
          <label htmlFor={getId('hookshotTargetAttachment')} className={cx('label')}>Target Attachment</label>
        </div>
        <select
          id={getId('hookshotTargetAttachment')}
          name="hookshotTargetAttachment"
          value={this.state.hookshotTargetAttachment}
          onChange={this.handleTargetAttachmentChange}
          className={cx('select-wrapper')}
        >
          {generateOptions(ATTACHMENT_POSITIONS)}
        </select>
        <br />
        <br />
        <Hookshot
          attachmentBehavior={this.state.hookshotAttachmentBehavior}
          attachmentMargin={this.state.hookshotAttachmentMargin}
          boundingRef={this.getParentNode}
          contentAttachment={attachmentValues(this.state.hookshotContentAttachment)}
          isEnabled
          isOpen={this.state.isOpen}
          targetAttachment={attachmentValues(this.state.hookshotTargetAttachment)}
          targetRef={() => document.getElementById('hookshot-bounded-button')}
        >
          {hookshotContent}
        </Hookshot>
        <div
          className={cx('bounded-parent-node-wrapper')}
          ref={this.setParentNode}
        >
          <div className={cx('button-wrapper')}>
            <Button id="hookshot-bounded-button" text="Hookshot Example" onClick={this.handleButtonClick} className={cx('custom-button')} />
          </div>
        </div>
      </div>
    );
  }
}

export default HookshotStandard;
