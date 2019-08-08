import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import AbstractModal from 'terra-abstract-modal';
import ActionHeader from 'terra-action-header';
import SlideGroup from 'terra-slide-group';
import DisclosureManager, { availableDisclosureSizes } from 'terra-disclosure-manager';
import ContentContainer from 'terra-content-container';
import styles from './ModalManager.module.scss';

const disclosureType = 'modal';
export { disclosureType };

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The components to be rendered in the body of the ModalManager. These components will receive the
   * disclosure capabilities through the DisclosureManger's context API.
   */
  children: PropTypes.node,
  /**
   * The component to render within the Modal above the disclosed content.
   */
  disclosureAccessory: PropTypes.element,
};

const heightFromSize = {
  tiny: 240,
  small: 420,
  medium: 600,
  large: 870,
  huge: 960,
};

const widthFromSize = {
  tiny: 320,
  small: 640,
  medium: 960,
  large: 1280,
  huge: 1600,
};

class ModalManager extends React.Component {
  constructor(props) {
    super(props);

    this.renderModal = this.renderModal.bind(this);
  }

  renderModal(manager) {
    const { children, disclosureAccessory, ...customProps } = this.props;

    const containerClassNames = cx([
      'container',
      customProps.className,
    ]);

    const classArray = ['modal-manager'];
    const isFullscreen = manager.disclosure.isMaximized || manager.disclosure.size === availableDisclosureSizes.FULLSCREEN;
    if (!isFullscreen) {
      if (manager.disclosure.dimensions) {
        classArray.push(`height-${manager.disclosure.dimensions.height}`, `width-${manager.disclosure.dimensions.width}`);
      } else if (manager.disclosure.size) {
        classArray.push(`height-${heightFromSize[manager.disclosure.size]}`, `width-${widthFromSize[manager.disclosure.size]}`);
      }
    }

    const presentedDisclosureComponentKey = manager.disclosureComponentKeys[manager.disclosureComponentKeys.length - 1];
    const presentedDisclosureComponentData = manager.disclosureComponentData[presentedDisclosureComponentKey] || {};
    const headerDataForPresentedComponent = presentedDisclosureComponentData.headerAdapterData;

    return (
      <div {...customProps} className={containerClassNames}>
        {manager.children.components}
        <AbstractModal
          isOpen={manager.disclosure.isOpen}
          isFullscreen={isFullscreen}
          classNameModal={cx(classArray)}
          onRequestClose={() => {
            manager.closeDisclosure();
          }}
          closeOnEsc
          closeOnOutsideClick={false}
          ariaLabel="Modal"
        >
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
            <SlideGroup items={manager.disclosure.components} isAnimated={!isFullscreen} />
          </ContentContainer>
        </AbstractModal>
      </div>
    );
  }

  render() {
    const { children } = this.props;

    return (
      <DisclosureManager
        supportedDisclosureTypes={[disclosureType]}
        render={this.renderModal}
        trapNestedDisclosureRequests
      >
        {children}
      </DisclosureManager>
    );
  }
}

ModalManager.propTypes = propTypes;

export default ModalManager;
