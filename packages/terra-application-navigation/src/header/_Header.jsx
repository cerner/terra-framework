import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Popup from 'terra-popup';
import { injectIntl, intlShape } from 'react-intl';

import Tab from '../tabs/_Tab';
import Tabs from '../tabs/_Tabs';
import UtilityMenuHeaderButton from '../utility-menu/_UtilityMenuHeaderButton';
import UtilityMenu from '../utility-menu/_UtilityMenu';
import {
  userConfigPropType, navigationConfigPropType, utilityItemsPropType,
} from '../utils/propTypes';

import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  titleConfig: PropTypes.shape({
    title: PropTypes.string.isRequired,
    headline: PropTypes.string,
    subline: PropTypes.string,
    element: PropTypes.element,
  }),
  /**
   * Array of navigation items to render within the Header.
   */
  navigationConfig: navigationConfigPropType,
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
  userConfig: userConfigPropType,
  hero: PropTypes.element,
  utilityItems: utilityItemsPropType,
  onSelectUtilityItem: PropTypes.func,
  onSelectSettings: PropTypes.func,
  onSelectHelp: PropTypes.func,
  onSelectLogout: PropTypes.func,
  onSelectSkipToContent: PropTypes.func,
  intl: intlShape,
};

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.utilityButtonPopupAnchorRef = React.createRef();

    this.handleUtilityPopupCloseRequest = this.handleUtilityPopupCloseRequest.bind(this);
    this.generatePopupClosingCallback = this.generatePopupClosingCallback.bind(this);
    this.renderAppName = this.renderAppName.bind(this);
    this.renderNavigationTabs = this.renderNavigationTabs.bind(this);
    this.renderUtilities = this.renderUtilities.bind(this);
    this.renderUtilitiesPopup = this.renderUtilitiesPopup.bind(this);

    this.handleSettingsSelection = this.generatePopupClosingCallback('onSelectSettings');
    this.handleHelpSelection = this.generatePopupClosingCallback('onSelectHelp');
    this.handleLogoutSelection = this.generatePopupClosingCallback('onSelectLogout');
    this.handleUtilityItemSelection = this.generatePopupClosingCallback('onSelectUtilityItem');

    this.state = { utilityPopupIsOpen: false };
    this.previousNotifications = [];
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

  renderAppName() {
    const { titleConfig } = this.props;

    if (!titleConfig) {
      return null;
    }

    if (titleConfig.element) {
      return (
        <div title={titleConfig.title}>
          {titleConfig.element}
        </div>
      );
    }

    return (
      <React.Fragment>
        {titleConfig.headline ? <div className={cx('headline')} title={titleConfig.headline}>{titleConfig.headline}</div> : null}
        <div className={cx('title')} title={titleConfig.title}>{titleConfig.title}</div>
        {titleConfig.subline ? <div className={cx('subline')} title={titleConfig.subline}>{titleConfig.subline}</div> : null}
      </React.Fragment>
    );
  }

  renderNavigationTabs() {
    const {
      navigationConfig, activeNavigationItemKey, onSelectNavigationItem,
    } = this.props;

    if (!navigationConfig || !navigationConfig.navigationItems || !navigationConfig.navigationItems.length) {
      return <Tab isPlaceholder text="W" tabKey="" aria-hidden="true" />;
    }

    return (
      <Tabs
        navigationConfig={navigationConfig}
        activeTabKey={activeNavigationItemKey}
        onTabSelect={onSelectNavigationItem}
      />
    );
  }

  renderUtilities() {
    const { userConfig } = this.props;
    return (
      <UtilityMenuHeaderButton
        userConfig={userConfig}
        onClick={() => {
          this.setState({
            utilityPopupIsOpen: true,
          });
        }}
        popupAnchorRef={this.utilityButtonPopupAnchorRef}
      />
    );
  }

  renderUtilitiesPopup() {
    const {
      hero, userConfig, onSelectSettings, onSelectHelp, onSelectLogout, utilityItems, onSelectUtilityItem,
    } = this.props;
    const { utilityPopupIsOpen } = this.state;

    if (utilityPopupIsOpen) {
      return (
        <Popup
          attachmentBehavior="push"
          contentAttachment="top right"
          contentHeight="auto"
          contentWidth="320"
          isArrowDisplayed
          isHeaderDisabled
          isOpen
          onRequestClose={this.handleUtilityPopupCloseRequest}
          targetAttachment="bottom center"
          targetRef={() => this.utilityButtonPopupAnchorRef.current}
        >
          <UtilityMenu
            hero={hero}
            userConfig={userConfig}
            onSelectSettings={onSelectSettings ? this.handleSettingsSelection : undefined}
            onSelectHelp={onSelectHelp ? this.handleHelpSelection : undefined}
            onSelectLogout={onSelectLogout ? this.handleLogoutSelection : undefined}
            utilityItems={utilityItems}
            onSelectUtilityItem={onSelectUtilityItem ? this.handleUtilityItemSelection : undefined}
          />
        </Popup>
      );
    }

    return null;
  }

  render() {
    const {
      onSelectSkipToContent,
      extensions,
      intl,
    } = this.props;

    return (
      <div className={cx('application-header')}>
        <button type="button" onClick={onSelectSkipToContent} className={cx('skip-content-button')}>
          {intl.formatMessage({ id: 'Terra.ApplicationHeaderLayout.SkipToContent' })}
        </button>
        <div className={cx('title-container')}>
          {this.renderAppName()}
        </div>
        <div className={cx('main-navigation-container')}>
          {this.renderNavigationTabs()}
        </div>
        <div className={cx('extensions-container')}>
          {extensions}
        </div>
        <div className={cx('utilities-container')}>
          {this.renderUtilities()}
        </div>
        {this.renderUtilitiesPopup()}
      </div>
    );
  }
}

Header.propTypes = propTypes;

export default injectIntl(Header);
