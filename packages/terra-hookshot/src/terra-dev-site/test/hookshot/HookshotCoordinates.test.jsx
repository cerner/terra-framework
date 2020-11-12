import React from 'react';
import classNames from 'classnames/bind';
import Hookshot from '../../../Hookshot';
import HookshotContent from '../common/HookshotContentTestTemplate';
import styles from '../common/HookshotTestDocCommon.module.scss';

const cx = classNames.bind(styles);

class HookshotTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.triggerHookshot = this.triggerHookshot.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.state = { open: false };
  }

  handleRequestClose() {
    this.setState({ open: false });
  }

  triggerHookshot() {
    this.setState({ open: true });
  }

  render() {
    return (
      <div id="coords-test" className={cx('hookshot-wrapper')}>
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
