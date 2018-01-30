import React from 'react';
import PropTypes from 'prop-types';
import SlidePanel from 'terra-slide-panel';
import AppDelegate from 'terra-app-delegate';
import SlideGroup from 'terra-slide-group';
import DisclosureManager from './DisclosureManager';

const propTypes = {
  app: AppDelegate.propType,
  children: PropTypes.node,
};

class SlidePanelManager extends React.Component {
  static renderSlidePanel(manager) {
    return (
      <SlidePanel
        fill
        panelBehavior="squish"
        panelSize={manager.disclosure.size}
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
