import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import AbstractModal from 'terra-abstract-modal';
import ActionHeader from 'terra-action-header';
import ContentContainer from 'terra-content-container';

import OrionDisclosureManager, { availableDisclosureSizes } from './OrionDisclosureManager';
import ApplicationLoadingOverlayProvider from '../application-loading-overlay/ApplicationLoadingOverlayProvider';

import styles from './ApplicationModalProvider.module.scss';

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
  navigationPromptOptions: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
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

class ApplicationModalProvider extends React.Component {
  constructor(props) {
    super(props);

    this.renderModal = this.renderModal.bind(this);
  }

  renderModal(manager) {
    const {
      children, disclosureAccessory, navigationPromptOptions, ...customProps
    } = this.props;

    const containerClassNames = cx([
      'container',
      customProps.className,
    ]);

    return (
      <>
        {manager.wrappedChildren}
        {manager.disclosureComponentData ? (() => {
          const classArray = ['modal-manager'];
          const isFullscreen = manager.disclosureComponentData.size === availableDisclosureSizes.FULLSCREEN;
          if (!isFullscreen) {
            if (typeof manager.disclosureComponentData.size === 'object') {
              classArray.push(`height-${manager.disclosureComponentData.size.height}`, `width-${manager.disclosureComponentData.size.width}`);
            } else if (typeof manager.disclosureComponentData.size === 'string') {
              classArray.push(`height-${heightFromSize[manager.disclosureComponentData.size]}`, `width-${widthFromSize[manager.disclosureComponentData.size]}`);
            }
          }

          const headerDataForPresentedComponent = manager.disclosureComponentData.headerAdapter;

          return (
            <AbstractModal
              isOpen={!!manager.disclosureComponentData}
              isFullscreen={isFullscreen}
              classNameModal={cx(classArray)}
              onRequestClose={() => {
                manager.popDisclosureStack().catch((e) => {
                  if (!e) {
                    console.log('OrionModalProvider: Modal dismissal prevented.');
                    return;
                  }

                  throw e;
                });
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
                        onClose={() => {
                          manager.popDisclosureStack().catch((e) => {
                            if (!e) {
                              console.log('OrionModalProvider: Modal dismissal prevented.');
                              return;
                            }

                            throw e;
                          });
                        }}
                      >
                        {headerDataForPresentedComponent.collapsibleMenuView}
                      </ActionHeader>
                    ) : undefined}
                    {disclosureAccessory}
                  </React.Fragment>
                )}
              >
                <div style={{ height: '100%', backgroundColor: '#fff' }}>
                  <ApplicationLoadingOverlayProvider>
                    {manager.disclosureComponentData.component}
                  </ApplicationLoadingOverlayProvider>
                </div>
              </ContentContainer>
            </AbstractModal>
          );
        })() : undefined}
      </>
    );
  }

  render() {
    const { children } = this.props;

    return (
      <OrionDisclosureManager
        render={this.renderModal}
        navigationPromptOptions={this.props.navigationPromptOptions}
      >
        {children}
      </OrionDisclosureManager>
    );
  }
}

ApplicationModalProvider.propTypes = propTypes;

export default ApplicationModalProvider;
