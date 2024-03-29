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

  static handleOtherButton() {
    // eslint-disable-next-line no-console
    console.log('Other button pressed');
  }

  handlePanelToggle() {
    this.setState(prevState => ({ panelIsOpen: !prevState.panelIsOpen }));
  }

  render() {
    return (
      <div className={cx('content-wrapper-toggle')}>
        <SlidePanel
          id="test-slide"
          mainContent={(
            <div className={cx('main-content')}>
              <button type="button" id="other-button-1" className={cx('button')} onClick={SlidePanelDemo.handleOtherButton}>Other Button 1</button>
              <button type="button" id="test-toggle" className={cx('button')} onClick={this.handlePanelToggle}>toggle</button>
              <button type="button" id="another-button" className={cx('button')} onClick={SlidePanelDemo.handleOtherButton}>Another Button</button>
            </div>
          )}
          panelContent={(
            <div id="panel-content" className={cx('panel-content')}>
              <button type="button" id="other-button-2" className={cx('button')} onClick={SlidePanelDemo.handleOtherButton}>Other Button 2</button>
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
