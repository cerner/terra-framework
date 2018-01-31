import React from 'react';
import PropTypes from 'prop-types';
import SlidePanel from 'terra-slide-panel';
import AppDelegate from 'terra-app-delegate';
import SlideGroup from 'terra-slide-group';
import DisclosureManager, { availableDisclosureSizes } from './DisclosureManager';

const propTypes = {
  app: AppDelegate.propType,
  children: PropTypes.node,
};

const disclosureSizeToPanelSize = {
  [availableDisclosureSizes.TINY]: 'small',
  [availableDisclosureSizes.SMALL]: 'small',
  [availableDisclosureSizes.MEDIUM]: 'large',
  [availableDisclosureSizes.LARGE]: 'large',
  [availableDisclosureSizes.HUGE]: 'large',
  [availableDisclosureSizes.FULLSCREEN]: 'fullscreen',
};

class SlidePanelManager extends React.Component {
  static renderSlidePanel(manager) {
    const panelSize = disclosureSizeToPanelSize[manager.disclosure.size];

    return (
      <SlidePanel
        fill
        panelBehavior="squish"
        panelSize={panelSize}
        isOpen={manager.disclosure.isOpen}
        panelContent={(
          <SlideGroup items={manager.disclosure.components} isAnimated />
        )}
        mainContent={manager.content.components}
      />
    );
  }

  render() {
    return (
      <DisclosureManager
        app={this.props.app}
        supportedDisclosureTypes={['panel']}
        render={SlidePanelManager.renderSlidePanel}
      >
        {this.props.children}
      </DisclosureManager>
    );
  }
}

SlidePanelManager.propTypes = propTypes;

export default SlidePanelManager;
