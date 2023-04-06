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
   * Sets the heading level of the disclosed panel. One of `1`, `2`, `3`, `4`, `5`, `6`. This helps screen readers to announce appropriate heading levels.
   * Changing 'level' will not visually change the style of the content.
   */
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
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
  /**
    * The aria label for the panel region. This should be provided if the header does not contain a title
    * to make the panel more accessible to assistive technologies.
    */
  panelAriaLabel: PropTypes.string,
  /**
    * The aria label for the main region.
    */
  mainAriaLabel: PropTypes.string,
  /**
   * An ID or space-separated string of IDs that describe the Main content area for screen readers.
   * Example: "patient-details" or "patient-details-1 patient-details-2 patient-details-3" are valid.
   */
  mainAriaDescribedBy: PropTypes.string,
  /**
   * Whether the mainAriaDescribedBy should replace the default or be appended to it.
   */
  replaceMainAriaDescribedBy: PropTypes.bool,
};

const defaultProps = {
  level: 2,
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
    this.setSlidePanel = this.setSlidePanel.bind(this);
  }

  setSlidePanel(node) {
    this.slidePanel = node;
  }

  renderSlidePanel(manager) {
    const {
      children,
      level,
      disclosureAccessory,
      withDisclosureContainer,
      mainAriaLabel,
      panelAriaLabel,
      mainAriaDescribedBy,
      replaceMainAriaDescribedBy,
      ...customProps
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
        setSlidePanelRef={this.setSlidePanel}
        panelContent={(
          <ContentContainer
            fill
            header={(
              <React.Fragment>
                {headerDataForPresentedComponent ? (
                  <ActionHeader
                    text={headerDataForPresentedComponent.title}
                    onClose={manager.closeDisclosure}
                    level={level}
                    onBack={manager.disclosureComponentKeys.length > 1 ? manager.dismissPresentedComponent : undefined}
                  >
                    {headerDataForPresentedComponent.collapsibleMenuView}
                  </ActionHeader>
                ) : undefined}
                {disclosureAccessory}
              </React.Fragment>
            )}
          >
            <SlideGroup items={manager.disclosure.components} isAnimated focusRef={this.slidePanel} slideAriaLabel={headerDataForPresentedComponent?.title || panelAriaLabel} />
          </ContentContainer>
        )}
        panelAriaLabel={headerDataForPresentedComponent?.title || panelAriaLabel}
        mainAriaLabel={mainAriaLabel}
        mainAriaDescribedBy={mainAriaDescribedBy}
        replaceMainAriaDescribedBy={replaceMainAriaDescribedBy}
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
