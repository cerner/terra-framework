import React, { useState } from 'react';
import SlidePanel, { SlidePanelPositions } from 'terra-slide-panel';
import classNames from 'classnames/bind';
import styles from './SlidePanelNoMainContent.test.module.scss';

const cx = classNames.bind(styles);

const mainContentForSlidePanel = (togglePanelHandler) => (
  <div>
    <header className={cx('header-content')}>
      <h3>Main Content</h3>
      <button id="mainToggleBtn" type="button" onClick={togglePanelHandler} className={cx('custom-button')}>Toggle Panel 1</button>
      {/* eslint-disable-next-line jsx-a11y/no-interactive-element-to-noninteractive-role */}
      <button id="mainToggleBtnWithWrongRole" type="button" role="presentation" onClick={togglePanelHandler} className={cx('extension-button')}>Toggle Panel 2</button>
      { /* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
      <p id="mainToggleParagraph" onClick={togglePanelHandler} className={cx('extension-button')}>Toggle Panel 3</p>
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

const panelContentForSlidePanel = (togglePanelHandler) => (
  <div>
    <header className={cx('header-content')}>
      <h3 className={cx('heading')}>Panel Content</h3>
      <button id="panelToggleBtn" type="button" onClick={togglePanelHandler} className={cx('extension-button')}>Toggle Panel</button>
    </header>
    <div className={cx('content-wrapper')}>
      <p>This is the panel content area of the slide panel.</p>
      <p>
        {'Focus is moved to the toggle button in the main container when the panel is closed via the componentDidUpdate lifecycle hook in '}
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
        <li>Item 9</li>
        <li>Item 10</li>
        <li>Item 11</li>
        <li>Item 12</li>
        <li>Item 13</li>
        <li>Item 14</li>
        <li>Item 15</li>
      </ul>
    </div>
  </div>
);

const SlidePanelNoMainContent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handlePanelToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={cx('example-container')}>
      {mainContentForSlidePanel(handlePanelToggle)}
      <div className={isOpen ? cx('panel-container') : null}>
        <SlidePanel
          id="test-slide"
          panelContent={panelContentForSlidePanel(handlePanelToggle)}
          panelAriaLabel="Panel content area"
          panelSize="small"
          panelBehavior="overlay"
          panelPosition={SlidePanelPositions.END}
          isOpen={isOpen}
        />
      </div>
    </div>
  );
};

export default SlidePanelNoMainContent;
