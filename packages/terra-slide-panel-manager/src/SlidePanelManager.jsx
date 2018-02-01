import React from 'react';
import PropTypes from 'prop-types';
import AppDelegate from 'terra-app-delegate';
import DisclosureManager, { availableDisclosureSizes } from 'terra-disclosure-manager';
import SlideGroup from 'terra-slide-group';
import SlidePanel from 'terra-slide-panel';

const propTypes = {
  /**
   * An AppDelegate instance that will be used in fallback scenarios by the SlidePanelManager. If not provided, the SlidePanelManager
   * will handle any and all disclosure requests it receives.
   */
  app: AppDelegate.propType,
  /**
   * The components to display in the body of the SlidePanel. These components will be provided with an AppDelegate prop (as `app`) that
   * will allow them to disclose content.
   */
  children: PropTypes.node,
  /**
   * The desired panel behavior. Either 'squish' or 'overlay'.
   */
  panelBehavior: PropTypes.oneOf(['overlay', 'squish']),
};

const defaultProps = {
  panelBehavior: 'squish',
};

/**
 * The SlidePanel component does not support the full range of DisclosureManager sizes in its API. The potential sizes are mapped to the
 * SlidePanel's supported sizes.
 */
const disclosureSizeToPanelSize = {
  [availableDisclosureSizes.TINY]: 'small',
  [availableDisclosureSizes.SMALL]: 'small',
  [availableDisclosureSizes.MEDIUM]: 'large',
  [availableDisclosureSizes.LARGE]: 'large',
  [availableDisclosureSizes.HUGE]: 'large',
};

class SlidePanelManager extends React.Component {
  constructor(props) {
    super(props);

    this.renderSlidePanel = this.renderSlidePanel.bind(this);
  }

  renderSlidePanel(manager) {
    const { panelBehavior } = this.props;

    let isFullscreen;
    if (manager.disclosure.size === availableDisclosureSizes.FULLSCREEN || manager.disclosure.isMaximized) {
      isFullscreen = true;
    }

    return (
      <SlidePanel
        fill
        isFullscreen={isFullscreen}
        panelBehavior={panelBehavior}
        panelSize={disclosureSizeToPanelSize[manager.disclosure.size]}
        isOpen={manager.disclosure.isOpen}
        panelContent={(
          <SlideGroup items={manager.disclosure.components} isAnimated />
        )}
        mainContent={manager.children.components}
      />
    );
  }

  render() {
    const { app, children } = this.props;

    return (
      <DisclosureManager
        app={app}
        supportedDisclosureTypes={['panel']}
        render={this.renderSlidePanel}
      >
        {children}
      </DisclosureManager>
    );
  }
}

SlidePanelManager.propTypes = propTypes;
SlidePanelManager.defaultProps = defaultProps;

export default SlidePanelManager;
