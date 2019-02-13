import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { injectIntl, intlShape } from 'react-intl';
import IconMenu from 'terra-icon/lib/icon/IconMenu';
import Popup from 'terra-popup';

import ApplicationHeaderLayout from './_ApplicationHeaderLayout';
import ApplicationTabs from './tabs/_ApplicationTabs';
import UtilityButton from './utility/_UtilityButton';
import UtilityMenuLayout from './utility/_UtilityMenuLayout';
import ApplicationLayoutPropTypes from '../utils/propTypes';
import { isSizeCompact } from '../utils/helpers';

import styles from './ApplicationHeader.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * A function to be executed upon selection of the ApplicationHeader's toggle button.
   */
  onMenuToggle: PropTypes.func,
  /**
   * Configuration values for the ApplicationName component.
   */
  nameConfig: ApplicationLayoutPropTypes.nameConfigPropType,
  /**
   * Array of navigation items to render within the ApplicationHeader.
   */
  navigationItems: PropTypes.array,
  /**
   * The string specifying the desired alignment for the navigation items.
   */
  navigationItemAlignment: ApplicationLayoutPropTypes.navigationAlignmentPropType,
  /**
   * The string identifying the currently active navigation item.
   */
  activeNavigationItemKey: PropTypes.string,
  /**
   * A function to be executed upon selection of a navigation item.
   */
  onSelectNavigationItem: PropTypes.func,
  /**
   * The element to be placed within the fit start area for extensions within the layout.
   */
  extensions: PropTypes.element,
  /**
   * The currently active breakpoint.
   */
  activeBreakpoint: PropTypes.string,
  /**
   * @private Internationalization object with translation APIs automatically provided by a Base ancestor.
   */
  intl: intlShape,
  userConfig: PropTypes.object,
  heroConfig: PropTypes.object,
  onSelectSettings: PropTypes.func,
  onSelectHelp: PropTypes.func,
  onSelectLogout: PropTypes.func,
};

const defaultProps = {
  navigationItems: [],
  navigationItemAlignment: 'center',
};

class ApplicationHeader extends React.Component {
  constructor(props) {
    super(props);

    this.handleUtilityPopupCloseRequest = this.handleUtilityPopupCloseRequest.bind(this);
    this.generatePopupClosingCallback = this.generatePopupClosingCallback.bind(this);
    this.renderToggle = this.renderToggle.bind(this);
    this.renderAppName = this.renderAppName.bind(this);
    this.renderNavigationTabs = this.renderNavigationTabs.bind(this);
    this.renderUtilities = this.renderUtilities.bind(this);
    this.renderUtilitiesPopup = this.renderUtilitiesPopup.bind(this);

    this.handleSettingsSelection = this.generatePopupClosingCallback('onSelectSettings');
    this.handleHelpSelection = this.generatePopupClosingCallback('onSelectHelp');
    this.handleLogoutSelection = this.generatePopupClosingCallback('onSelectLogout');

    this.state = { utilityPopupIsOpen: false };
  }

  generatePopupClosingCallback(wrappedFunctionName) {
    return (...args) => {
      const wrappedFunction = this.props[wrappedFunctionName];

      if (!wrappedFunction) {
        return;
      }

      this.setState({
        utilityPopupIsOpen: false,
      }, () => {
        wrappedFunction(...args);
      });
    };
  }

  handleUtilityPopupCloseRequest() {
    this.setState({ utilityPopupIsOpen: false });
  }

  renderToggle() {
    const { onMenuToggle, intl } = this.props;

    if (onMenuToggle) {
      return (
        <div className={cx('toggle-button-container')}>
          <button
            type="button"
            className={cx('toggle-button')}
            aria-label={intl.formatMessage({ id: 'Terra.applicationLayout.applicationHeader.menuToggleLabel' })}
            onClick={onMenuToggle}
            data-application-header-toggle
          >
            <IconMenu />
          </button>
        </div>
      );
    }

    return null;
  }

  renderAppName() {
    const { nameConfig } = this.props;

    if (nameConfig && (nameConfig.accessory || nameConfig.title)) {
      return (
        <div className={cx('application-name-container')}>
          {nameConfig.accessory && <div className={cx('application-name-accessory')}>{nameConfig.accessory}</div>}
          {nameConfig.title && <div className={cx('application-name-title')}>{nameConfig.title}</div>}
        </div>
      );
    }

    return null;
  }

  renderNavigationTabs() {
    const {
      navigationItems, navigationItemAlignment, activeNavigationItemKey, onSelectNavigationItem,
    } = this.props;

    if (navigationItems.length) {
      return (
        <ApplicationTabs
          alignment={navigationItemAlignment}
          tabs={navigationItems}
          activeTabKey={activeNavigationItemKey}
          onTabSelect={onSelectNavigationItem}
        />
      );
    }

    return null;
  }

  renderUtilities() {
    const { userConfig } = this.props;
    return (
      <UtilityButton
        userConfig={userConfig}
        onClick={() => {
          this.setState({
            utilityPopupIsOpen: true,
          });
        }}
        refCallback={(ref) => {
          this.utilityButtonRef = ref;
        }}
      />
    );
  }

  renderUtilitiesPopup() {
    const {
      heroConfig, userConfig, onSelectSettings, onSelectHelp, onSelectLogout,
    } = this.props;
    const { utilityPopupIsOpen } = this.state;

    if (utilityPopupIsOpen) {
      return (
        <Popup
          attachmentBehavior="push"
          contentHeight="auto"
          contentWidth="240"
          isArrowDisplayed
          isHeaderDisabled
          isOpen
          onRequestClose={this.handleUtilityPopupCloseRequest}
          targetRef={() => (this.utilityButtonRef)}
        >
          <UtilityMenuLayout
            heroConfig={heroConfig}
            userConfig={userConfig}
            onSelectSettings={onSelectSettings ? this.handleSettingsSelection : undefined}
            onSelectHelp={onSelectHelp ? this.handleHelpSelection : undefined}
            onSelectLogout={onSelectLogout ? this.handleLogoutSelection : undefined}
          />
        </Popup>
      );
    }

    return null;
  }

  render() {
    const {
      activeBreakpoint,
      extensions,
    } = this.props;

    const isCompact = isSizeCompact(activeBreakpoint);

    let headerLayout;
    if (isCompact) {
      /**
       * When compact, the navigation region of the header renders the application name component instead. At compact
       * sizes, the logo region within the ApplicationHeaderLayout is too small to use, so we instead render within
       * the navigation region which renders with a larger width.
       */
      headerLayout = (
        <ApplicationHeaderLayout
          toggle={this.renderToggle()}
          navigation={this.renderAppName()}
          extensions={extensions}
          skipToContentSelector="[data-terra-application-layout-main]"
        />
      );
    } else {
      headerLayout = (
        <ApplicationHeaderLayout
          logo={this.renderAppName()}
          navigation={this.renderNavigationTabs()}
          extensions={extensions}
          utilities={this.renderUtilities()}
          skipToContentSelector="[data-terra-application-layout-main]"
        />
      );
    }

    return (
      <div className={cx('application-header')}>
        {headerLayout}
        {this.renderUtilitiesPopup()}
      </div>
    );
  }
}

ApplicationHeader.propTypes = propTypes;
ApplicationHeader.defaultProps = defaultProps;

export default injectIntl(ApplicationHeader);
