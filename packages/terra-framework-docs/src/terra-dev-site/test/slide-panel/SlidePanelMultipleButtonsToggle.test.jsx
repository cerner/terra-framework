import React from 'react';
import classNames from 'classnames/bind';
import SlidePanel from 'terra-slide-panel';
import Button from 'terra-button';
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
              <Button text="Other Button 1" id="other-button-1" onClick={SlidePanelDemo.handleOtherButton} />
              <Button text="Toggle" id="test-toggle" onClick={this.handlePanelToggle} />
              <Button text="Another Button" id="another-button" onClick={SlidePanelDemo.handleOtherButton} />
            </div>
          )}
          panelContent={(
            <div id="panel-content" className={cx('panel-content')}>
              <Button text="Other Button 2" id="other-button-2" onClick={SlidePanelDemo.handleOtherButton} />
              <Button text="Close panel" id="focus-button" onClick={this.handlePanelToggle} />
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
