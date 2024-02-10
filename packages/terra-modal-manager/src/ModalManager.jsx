import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import AbstractModal from 'terra-abstract-modal';
import ActionHeader from 'terra-action-header';
import SlideGroup from 'terra-slide-group';
import DisclosureManager, { availableDisclosureSizes } from 'terra-disclosure-manager';
import ContentContainer from 'terra-content-container';
import styles from './ModalManager.module.scss';

const disclosureType = 'modal';
export { disclosureType };

const cx = classNamesBind.bind(styles);

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
  /**
   * If set to true, the modal will close when a mouse click is triggered outside the modal.
   */
  closeOnOutsideClick: PropTypes.bool,
  /**
   * @private
   * The container to wrap the disclosed content. This should be provided from the application level.
   */
  withDisclosureContainer: PropTypes.func,
};

const heightFromSize = {
  tiny: 240,
  small: 420,
  medium: 600,
  large: 870,
  huge: 960,
  'fusion-small': 280,
  'fusion-medium': 380,
  'fusion-large': 460,
};

const widthFromSize = {
  tiny: 320,
  small: 640,
  medium: 960,
  large: 1280,
  huge: 1600,
  'fusion-small': 400,
  'fusion-medium': 600,
  'fusion-large': 700,
};

const defaultProps = {
  closeOnOutsideClick: false,
};

class ModalManager extends React.Component {
  constructor(props) {
    super(props);

    this.renderModal = this.renderModal.bind(this);
    this.setModalFocusElementRef = this.setModalFocusElementRef.bind(this);
  }

  setModalFocusElementRef(node) {
    this.modalElementRef = node;
  }

  renderModal(manager) {
    const {
      children, disclosureAccessory, closeOnOutsideClick, withDisclosureContainer, ...customProps
    } = this.props;
    const theme = this.context;

    const containerClassNames = classNames(cx(
      'container',
      theme.className,
    ),
    customProps.className);

    const classArray = ['modal-manager', theme.className];
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
          closeOnOutsideClick={closeOnOutsideClick}
          ariaLabel={headerDataForPresentedComponent?.title || 'Modal'}
          setModalFocusElementRef={this.setModalFocusElementRef}
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
                  >
                    {headerDataForPresentedComponent.collapsibleMenuView}
                  </ActionHeader>
                ) : undefined}
                {disclosureAccessory}
              </React.Fragment>
            )}
          >
            <SlideGroup items={manager.disclosure.components} isAnimated={!isFullscreen} focusRef={this.modalElementRef} />
          </ContentContainer>
        </AbstractModal>
      </div>
    );
  }

  render() {
    const { withDisclosureContainer, children } = this.props;

    return (
      <DisclosureManager
        withDisclosureContainer={withDisclosureContainer}
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
ModalManager.contextType = ThemeContext;
ModalManager.defaultProps = defaultProps;

export default ModalManager;
