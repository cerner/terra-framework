import React from 'react';
import classNames from 'classnames/bind';
import SlidePanel from 'terra-slide-panel';
import styles from './SlidePanelDocCommon.test.module.scss';

const cx = classNames.bind(styles);

class SlidePanelDemo extends React.Component {
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
          panelContent={(
            <div id="panel-content" className={cx('panel-content')}>
              <button id="focus-button" type="button" className={cx('button')} onClick={this.handlePanelToggle}>Close panel</button>
            </div>
          )}
          panelAriaLabel="Panel content area"
          mainAriaLabel="Main content area"
          panelSize="small"
          panelBehavior="overlay"
          isOpen={this.state.panelIsOpen}
          fill
        />
      </div>
    );
  }
}

export default SlidePanelDemo;
