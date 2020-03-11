import React from 'react';
import classNames from 'classnames/bind';
import SlidePanel from '../../../SlidePanel';
import styles from './SlidePanelDocCommon.test.module.scss';

const cx = classNames.bind(styles);

class ButtonWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: 0 };
    this.increaseCount = this.increaseCount.bind(this);
  }

  increaseCount() {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  }

  render() {
    return (
      <div id="panel-content" className={cx('panel-content')}>
        <button id="focus-button" type="button" className={cx('button')} onClick={this.increaseCount}>Increase Count </button>
        {this.state.count}
      </div>
    );
  }
};


class SlidePanelSideDemo extends React.Component {
  constructor(props) {
    super(props);

    this.state = { panelIsOpen: false };
    this.handlePanelToggle = this.handlePanelToggle.bind(this);
  }

  handlePanelToggle() {
    this.setState(prevState => ({ panelIsOpen: !prevState.panelIsOpen }));
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
          panelPosition={this.state.panelIsOpen ? 'start' : 'end'}
          isOpen={true}
          fill
        />
      </div>
    );
  }
}

export default SlidePanelSideDemo;
