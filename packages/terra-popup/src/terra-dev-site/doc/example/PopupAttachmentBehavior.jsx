import React from 'react';
import PopupCommonExample from 'terra-popup/lib/terra-dev-site/doc/common/PopupCommonExample';
import classNames from 'classnames/bind';
import styles from './PopupAttachmentBehavior.module.scss';

const cx = classNames.bind(styles);

class PopupAttachmentBehavior extends React.Component {
  constructor(props) {
    super(props);

    this.state = { behavior: 'auto' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ behavior: event.target.value });
  }

  render() {
    return (
      <div>
        <label htmlFor="popup-behavior">Attachment Behavior</label>
        <select id="popup-behavior" onChange={this.handleChange} value={this.state.behavior} className={cx('selection-list')}>
          <option value="auto">Auto</option>
          <option value="flip">Flip</option>
          <option value="push">Push</option>
        </select>
        <PopupCommonExample title="Open Popup" attachmentBehavior={this.state.behavior} />
      </div>
    );
  }
}

export default PopupAttachmentBehavior;
