import React from 'react';
import classNames from 'classnames/bind';
import LayoutSlidePanel from 'terra-layout/lib/_LayoutSlidePanel';
import styles from './TestLayoutCommon.module.scss';

const cx = classNames.bind(styles);

class LayoutSlidePanelExample extends React.Component {
  constructor(props) {
    super(props);

    this.toggleMenu = this.toggleMenu.bind(this);

    this.state = { isOpen: false };
  }

  toggleMenu() {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  }

  render() {
    return (
      <div className={cx('content-wrapper')}>
        <LayoutSlidePanel
          panelContent={(
            <div className={cx('panel-content')}>
              <button type="button" id="test-toggle-2" onClick={this.toggleMenu}>toggle</button>
            </div>
)}
          panelBehavior="overlay"
          size="medium"
          isOpen={this.state.isOpen}
          isToggleEnabled
          isAnimated
          onToggle={() => {}}
          toggleText="toggle text"
        >
          <div className={cx('layout-slide-panel-content')}>
            <button type="button" id="test-toggle-1" onClick={this.toggleMenu}>
              toggle
            </button>
          </div>
        </LayoutSlidePanel>
      </div>
    );
  }
}

export default LayoutSlidePanelExample;
