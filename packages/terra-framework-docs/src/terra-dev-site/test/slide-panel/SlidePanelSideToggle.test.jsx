import React, { useState } from 'react';
import classNames from 'classnames/bind';
import SlidePanel from 'terra-slide-panel';
import styles from './SlidePanelDocCommon.test.module.scss';

const cx = classNames.bind(styles);

const ButtonWrapper = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  return (
    <div id="panel-content" className={cx('panel-content')}>
      <button id="focus-button" type="button" className={cx('button')} onClick={increaseCount}>Increase Count </button>
      {count}
    </div>
  );
};

class SlidePanelSideDemo extends React.Component {
  constructor(props) {
    super(props);

    this.state = { panelHasStartPostion: false };
    this.handlePanelToggle = this.handlePanelToggle.bind(this);
  }

  handlePanelToggle() {
    this.setState(prevState => ({ panelHasStartPostion: !prevState.panelHasStartPostion }));
  }

  render() {
    return (
      <div className={cx('content-wrapper-toggle')}>
        <SlidePanel
          id="test-slide"
          mainContent={<div className={cx('main-content')}><button type="button" id="test-toggle" className={cx('button')} onClick={this.handlePanelToggle}>toggle</button></div>}
          panelContent={<ButtonWrapper />}
          panelAriaLabel="Panel content area"
          mainAriaLabel="Main content area"
          panelSize="small"
          panelBehavior="squish"
          panelPosition={this.state.panelHasStartPostion ? 'start' : 'end'}
          isOpen
          fill
        />
      </div>
    );
  }
}

export default SlidePanelSideDemo;
