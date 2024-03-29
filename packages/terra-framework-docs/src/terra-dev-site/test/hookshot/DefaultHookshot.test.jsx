import React from 'react';
import classNames from 'classnames/bind';
import Hookshot from 'terra-hookshot';
import styles from './common/HookshotTestDocCommon.module.scss';

const cx = classNames.bind(styles);

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
        <div className={cx('default-hookshot-wrapper')}>Hookshot</div>
      </Hookshot.Content>
    );

    return (
      <div id="default-bounds" className={cx('content-wrapper')}>
        <Hookshot
          contentAttachment={{ vertical: 'bottom', horizontal: 'center' }}
          isEnabled
          isOpen={this.state.open}
          targetRef={() => document.getElementById('hookshot-standard-button')}
        >
          {hookshotContent}
        </Hookshot>
        <button type="button" id="hookshot-standard-button" onClick={this.handleButtonClick}>Default Hookshot</button>
      </div>
    );
  }
}

export default HookshotStandard;
