import React from 'react';
import PropTypes from 'prop-types';
import DisclosureManager, { availableDisclosureSizes } from 'terra-disclosure-manager';
import SlideGroup from 'terra-slide-group';
import SlidePanel from 'terra-slide-panel';

const disclosureType = 'panel';
export { disclosureType };

const propTypes = {
  /**
   * The components to be rendered in the body of the SlidePanelManager. These components will receive the
   * disclosure capabilities through the DisclosureManger's context API.
   */
  children: PropTypes.node,
  /**
   * The desired panel behavior. Either 'squish' or 'overlay'.
   */
  panelBehavior: PropTypes.oneOf(['overlay', 'squish']),
};

const defaultProps = {
  panelBehavior: 'overlay',
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

const disclosureDimensionsToPanelSize = (dimensions) => {
  if (dimensions.width > 480 || dimensions.height > 600) {
    return 'large';
  }
  return 'small';
};

class SlidePanelManager extends React.Component {
  constructor(props) {
    super(props);

    this.renderSlidePanel = this.renderSlidePanel.bind(this);
  }

  renderSlidePanel(manager) {
    const {
      children, panelBehavior, ...customProps
    } = this.props;

    let isFullscreen;
    if (manager.disclosure.size === availableDisclosureSizes.FULLSCREEN || manager.disclosure.isMaximized) {
      isFullscreen = true;
    }

    let panelSize;
    if (manager.disclosure.dimensions) {
      panelSize = disclosureDimensionsToPanelSize(manager.disclosure.dimensions);
    } else {
      panelSize = disclosureSizeToPanelSize[manager.disclosure.size];
    }

    return (
      <SlidePanel
        {...customProps}
        fill
        panelBehavior={panelBehavior}
        isFullscreen={isFullscreen}
        panelSize={panelSize}
        isOpen={manager.disclosure.isOpen}
        panelContent={(
          <SlideGroup items={manager.disclosure.components} isAnimated />
        )}
        mainContent={manager.children.components}
      />
    );
  }

  render() {
    const { children } = this.props;

    return (
      <DisclosureManager
        supportedDisclosureTypes={[disclosureType]}
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
