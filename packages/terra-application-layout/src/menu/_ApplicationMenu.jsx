import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ApplicationMenuLayout from 'terra-application-menu-layout';
import { ApplicationMenuName } from 'terra-application-name';
import RoutingStackDelegate from 'terra-navigation-layout/lib/RoutingStackDelegate';
import { ApplicationMenuUtility } from 'terra-application-utility';
import { disclosureType as modalDisclosureType } from 'terra-modal-manager';
import { withDisclosureManager, disclosureManagerShape } from 'terra-disclosure-manager';

import 'terra-base/lib/baseStyles';
import ApplicationLayoutPropTypes from '../utils/propTypes';
import Helpers from '../utils/helpers';

import UtilityMenuWrapper from './_UtilityMenuWrapper';

import styles from './ApplicationMenu.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The element to be placed within the fill flex styled content area.
   * This content is intended to be the user configured content for the menu.
   */
  content: PropTypes.element,
  /**
   * The element to be placed within the fit top area for extensions within the layout.
   */
  extensions: PropTypes.element,
  /**
   * The Object of layout-related APIs provided to the components of the Layout.
   */
  layoutConfig: ApplicationLayoutPropTypes.layoutConfigPropType.isRequired,
  /**
   * Configuration values for the ApplicationName component.
   */
  nameConfig: ApplicationLayoutPropTypes.nameConfigPropType,
  /**
   * Delegate prop that is provided by the NavigationLayout.
   */
  routingStackDelegate: RoutingStackDelegate.propType.isRequired,
  /**
   * Configuration to be provided to the ApplicationUtility component.
   */
  utilityConfig: ApplicationLayoutPropTypes.utilityConfigPropType,
  /**
   * DisclosureManagerDelegate instance automatically provided by a DisclosureManagerProvider.
   */
  disclosureManager: disclosureManagerShape,
};

class ApplicationMenu extends React.Component {
  constructor(props) {
    super(props);

    this.renderHeader = this.renderHeader.bind(this);
    this.renderExtensions = this.renderExtensions.bind(this);
    this.renderFooter = this.renderFooter.bind(this);
    this.handleUtilityDiscloseRequest = this.handleUtilityDiscloseRequest.bind(this);
    this.handleUtilityOnChange = this.handleUtilityOnChange.bind(this);
  }

  handleUtilityDiscloseRequest(utilityMenu) {
    const { disclosureManager, layoutConfig } = this.props;

    if (layoutConfig && layoutConfig.toggleMenu) {
      layoutConfig.toggleMenu();
    }

    if (disclosureManager && utilityMenu) {
      disclosureManager.disclose({
        preferredType: modalDisclosureType,
        dimensions: { height: '420', width: '320' },
        content: {
          component: <UtilityMenuWrapper>{utilityMenu}</UtilityMenuWrapper>,
          key: 'application-menu-utility-menu',
        },
      });
    }
  }

  handleUtilityOnChange(event, itemData) {
    const { utilityConfig, disclosureManager } = this.props;

    utilityConfig.onChange(event, itemData, disclosureManager && disclosureManager.disclose);
  }

  renderHeader(isCompact) {
    const { nameConfig } = this.props;

    if (isCompact && nameConfig && (nameConfig.accessory || nameConfig.title)) {
      return (
        <div className={cx(['menu-header'])}>
          <ApplicationMenuName accessory={nameConfig.accessory} title={nameConfig.title} />
        </div>
      );
    }

    return null;
  }

  renderExtensions(isCompact) {
    const { layoutConfig, extensions } = this.props;

    if (isCompact && extensions) {
      return React.cloneElement(extensions, { layoutConfig });
    }

    return null;
  }

  renderFooter(isCompact) {
    const { utilityConfig } = this.props;

    if (isCompact && utilityConfig) {
      return (
        <ApplicationMenuUtility
          onChange={this.handleUtilityOnChange}
          onDisclose={this.handleUtilityDiscloseRequest}
          title={utilityConfig.title}
          accessory={utilityConfig.accessory}
          menuItems={utilityConfig.menuItems}
          initialSelectedKey={utilityConfig.initialSelectedKey}
          data-application-menu-utility
        />
      );
    }

    return null;
  }

  render() {
    const {
      disclosureManager,
      content,
      extensions,
      layoutConfig,
      nameConfig,
      routingStackDelegate,
      utilityConfig,
      ...customProps
    } = this.props;

    const menuClassNames = cx([
      'application-menu',
      customProps.className,
    ]);

    const isCompact = Helpers.isSizeCompact(layoutConfig.size);

    let clonedContent;
    if (content) {
      clonedContent = React.cloneElement(content, { layoutConfig, routingStackDelegate });
    }

    return (
      <div {...customProps} className={menuClassNames}>
        <ApplicationMenuLayout
          header={this.renderHeader(isCompact)}
          extensions={this.renderExtensions(isCompact)}
          content={clonedContent}
          footer={this.renderFooter(isCompact)}
        />
      </div>
    );
  }
}

ApplicationMenu.propTypes = propTypes;

export default withDisclosureManager(ApplicationMenu);
