import React from 'react';
import PropTypes from 'prop-types';
import ActionHeader from 'terra-action-header';
import ContentContainer from 'terra-content-container';
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
  /**
   * The component to render within the panel above the disclosed content.
   */
  disclosureAccessory: PropTypes.element,
  /**
   * @private
   * The container to wrap the disclosed content. This should be provided from the application level.
   */
  withDisclosureContainer: PropTypes.func,
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
      children, disclosureAccessory, withDisclosureContainer, ...customProps
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

    const panelBehavior = manager?.disclosure?.typeConfig?.panelBehavior ? manager.disclosure.typeConfig.panelBehavior : customProps.panelBehavior;

    const presentedDisclosureComponentKey = manager.disclosureComponentKeys[manager.disclosureComponentKeys.length - 1];
    const presentedDisclosureComponentData = manager.disclosureComponentData[presentedDisclosureComponentKey] || {};
    const headerDataForPresentedComponent = presentedDisclosureComponentData.headerAdapterData;

    return (
      <SlidePanel
        {...customProps}
        fill
        panelBehavior={panelBehavior}
        isFullscreen={isFullscreen}
        panelSize={panelSize}
        isOpen={manager.disclosure.isOpen}
        panelContent={(
          <ContentContainer
            fill
            header={(
              <React.Fragment>
                {headerDataForPresentedComponent ? (
                  <ActionHeader
                    title={headerDataForPresentedComponent.title}
                    onClose={manager.closeDisclosure}
                    onBack={manager.disclosureComponentKeys.length > 1 ? manager.dismissPresentedComponent : undefined}
                    onMaximize={manager.maximizeDisclosure}
                    onMinimize={manager.minimizeDisclosure}
                  >
                    {headerDataForPresentedComponent.collapsibleMenuView}
                  </ActionHeader>
                ) : undefined}
                {disclosureAccessory}
              </React.Fragment>
          )}
          >
            <SlideGroup items={manager.disclosure.components} isAnimated />
          </ContentContainer>
        )}
        mainContent={manager.children.components}
      />
    );
  }

  render() {
    const { withDisclosureContainer, children } = this.props;

    return (
      <DisclosureManager
        withDisclosureContainer={withDisclosureContainer}
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
