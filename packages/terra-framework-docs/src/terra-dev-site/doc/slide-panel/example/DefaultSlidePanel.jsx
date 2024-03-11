import React from 'react';
import PropTypes from 'prop-types';
import SlidePanel from 'terra-slide-panel';
import Header from 'terra-clinical-header';
import CollapsibleMenuView from 'terra-collapsible-menu-view';
import classNames from 'classnames/bind';
import styles from './DefaultSlidePanel.module.scss';

const cx = classNames.bind(styles);

const mainContentForSlidePanel = togglePanelHandler => (
  <div>
    <header className={cx('header-content')}>
      <h3>Main Content</h3>
      <button id="mainToggleBtn" type="button" onClick={togglePanelHandler} className={cx('custom-button')}>Main Toggle Panel</button>
    </header>
    <div className={cx('content-wrapper')}>
      <p>
        This is the main content area of the slide panel.
        The overall height of the SlidePanel is determined by
        the intrinsic height of the content in this container.
      </p>
      <p>
        {'Focus is moved to the toggle button in the panel container when the panel is opened via the componentDidUpdate lifecycle hook in '}
        <a href="https://github.com/cerner/terra-framework/blob/main/packages/terra-slide-panel/src/terra-dev-site/doc/example/DefaultSlidePanel.jsx">the example code</a>
        .
      </p>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
        <li>Item 5</li>
        <li>Item 6</li>
        <li>Item 7</li>
        <li>Item 8</li>
      </ul>
    </div>
  </div>
);

const panelContentForSlidePanel = (togglePanelHandler, toggleFullscreenHandler) => {
  const collapseMenu = (
    <CollapsibleMenuView>
      <CollapsibleMenuView.Item text="Print" key="print" />
      <CollapsibleMenuView.Item text="Bookmark" key="bookmark" />
      <CollapsibleMenuView.Item text="Trash" key="trash" />
      <CollapsibleMenuView.Item text="Close" key="Close" />
      <CollapsibleMenuView.Item text="Save" key="Save" />
    </CollapsibleMenuView>
  );
  return (
    <Header
      startContent={collapseMenu}
      level={1}
    />
  );
};

class DefaultSlidePanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      panelIsOpen: props.isOpen || false,
      panelIsFullscreen: props.isFullscreen || false,
    };

    this.handlePanelToggle = this.handlePanelToggle.bind(this);
    this.handleFullscreenToggle = this.handleFullscreenToggle.bind(this);
  }

  handlePanelToggle() {
    this.setState(prevState => ({
      panelIsOpen: !prevState.panelIsOpen,
      panelIsFullscreen: prevState.panelIsOpen,
    }));
  }

  handleFullscreenToggle() {
    const newState = this.state;

    newState.panelIsFullscreen = !this.state.panelIsFullscreen;

    this.setState(newState);
  }

  render() {
    return (
      <div className={cx('container')}>
        <div className={cx('container-attributes')}>
          <SlidePanel
            mainContent={mainContentForSlidePanel(this.handlePanelToggle)}
            panelContent={panelContentForSlidePanel(this.handlePanelToggle, this.handleFullscreenToggle)}
            panelSize={this.props.panelSize}
            panelBehavior={this.props.panelBehavior}
            panelPosition={this.props.panelPosition}
            isOpen={this.state.panelIsOpen}
            isFullscreen={this.state.panelIsFullscreen}
            fill={this.props.fill}
          />
        </div>
      </div>
    );
  }
}

DefaultSlidePanel.propTypes = {
  panelBehavior: PropTypes.oneOf(['overlay', 'squish']),
  panelPosition: PropTypes.oneOf(['start', 'end']),
  panelSize: PropTypes.oneOf(['small', 'large']),
  isFullscreen: PropTypes.bool,
  isOpen: PropTypes.bool,
  fill: PropTypes.bool,
};

export default DefaultSlidePanel;
