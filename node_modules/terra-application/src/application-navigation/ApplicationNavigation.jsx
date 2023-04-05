import React, {
  useRef, useCallback, Suspense,
} from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';
import TerraApplicationNavigation from './private/ApplicationNavigation';
import {
  titleConfigPropType, navigationItemsPropType, extensionItemsPropType, utilityItemsPropType, userConfigPropType, userActionConfigPropType,
} from './private/utils/propTypes';

import ApplicationErrorBoundary from '../application-error-boundary';
import ApplicationLoadingOverlay, { ApplicationLoadingOverlayProvider } from '../application-loading-overlay';
import { ApplicationStatusOverlayProvider } from '../application-status-overlay';
import { NavigationPromptCheckpoint, navigationPromptResolutionOptionsShape, getUnsavedChangesPromptOptions } from '../navigation-prompt';
import { ApplicationIntlContext } from '../application-intl';
import ApplicationNavigationWorkspace from './private/workspace-layout/ApplicationNavigationWorkspace';

const propTypes = {
  /**
   * A string key representing the currently active navigation item. This value should match one of the item keys provided in the
   * `navigationItems` array.
   */
  activeNavigationItemKey: PropTypes.string,
  /**
   * A collection of child elements to render within the ApplicationNavigation body.
   */
  children: PropTypes.node,
  /**
   * By default, the ApplicationNavigation component will resolve any registered NavigationPrompts prior to
   * communicating logout selection with `onSelectLogout`. If `disablePromptsForLogout` is provided,
   * no NavigationPrompts are resolved when logout is selected.
   */
  disablePromptsForLogout: PropTypes.bool,
  /**
   * By default, the ApplicationNavigation component will resolve any rendered NavigationPrompts prior to
   * communicating navigation item selections with `onSelectNavigationItem`. If `disablePromptsForNavigationItems`
   * is provided, no NavigationPrompts are resolved when navigation items are selected.
   */
  disablePromptsForNavigationItems: PropTypes.bool,
  /**
   * A configuration object with information specifying the creation of the Extension buttons rendered within the
   * ApplicationNavigation header.
   */
  extensionItems: extensionItemsPropType,
  /**
   * An element to render within the ApplicationNavigation utility menu, shifted to the drawer at the `medium` breakpoint and below.
   */
  hero: PropTypes.element,
  /**
   * The base id used to generate ids of workspace, navigation, utility, and extension items
   */
  id: PropTypes.string,
  /**
   * An array of configuration objects with information specifying the creation of navigation items. These items
   * are rendered within the ApplicationNavigation header at larger breakpoints and within the drawer menu at smaller breakpoints.
   */
  navigationItems: navigationItemsPropType,
  /**
   * The Object (or function that returns an Object) that specifies the messages
   * used to prompt the user when navigation items are selected while NavigationPrompts
   * are rendered by the ApplicationNavigation content.
   */
  navigationPromptResolutionOptions: navigationPromptResolutionOptionsShape,
  /**
   * Key/Value pairs associating a string key entry to a Number notification count. The keys must correspond to a
   * navigationItem or extensionItem key provided through their associated props.
   */
  notifications: PropTypes.object,
  /**
   * Callback function triggered on Drawer Menu state change.
   */
  onDrawerMenuStateChange: PropTypes.func,
  /**
   * A function to be executed upon the selection of an extensions item.
   *
   * Ex: `onSelectExtensionsItem(String selectedUtilityItemKey, Object metaData)`
   */
  onSelectExtensionItem: PropTypes.func,
  /**
   * A function to be executed upon the selection of the Help utility item.
   * If `onSelectHelp` is not provided, the Help utility item will not be rendered.
   *
   * Ex: `onSelectHelp()`
   */
  onSelectHelp: PropTypes.func,
  /**
   * A function to be executed upon the selection of the Logout action button.
   * If `onSelectLogout` is not provided, the Logout action button will not be rendered.
   *
   * Ex: `onSelectLogout()`
   */
  onSelectLogout: PropTypes.func,
  /**
   * A function to be executed upon the selection of a navigation item.
   *
   * Ex: `onSelectNavigationItem(String selectedNavigationItemKey, Object metaData)`
   */
  onSelectNavigationItem: PropTypes.func,
  /**
   * A function to be executed upon the selection of the Settings utility item.
   * If `onSelectSettings` is not provided, the Settings utility item will not be rendered.
   *
   * Ex: `onSelectSettings()`
   */
  onSelectSettings: PropTypes.func,
  /**
   * A function to be executed upon the selection of a custom utility item.
   *
   * Ex: `onSelectUtilityItem(String selectedUtilityItemKey, Object metaData)`
   */
  onSelectUtilityItem: PropTypes.func,
  /**
   * A configuration object that defines the strings rendered within the ApplicationNavigation header.
   */
  titleConfig: titleConfigPropType,
  /**
   * A configuration object to render an action button for user Config.
   */
  userActionConfig: userActionConfigPropType,
  /**
   * A configuration object with information pertaining to the application's user.
   */
  userConfig: userConfigPropType,
  /**
   * An array of configuration objects with information specifying the creation of additional utility menu items.
   * These items are rendered within the popup utility menu at larger breakpoints and within the drawer menu at smaller breakpoints.
   */
  utilityItems: utilityItemsPropType,
  /**
   * An ApplicationNavigationWorkspace element and it's associated ApplicationNavigationWorkspaceItems.
   */
  workspace: PropTypes.element,
};

const ApplicationNavigation = ({
  activeNavigationItemKey,
  children,
  disablePromptsForLogout,
  disablePromptsForNavigationItems,
  extensionItems,
  hero,
  id,
  navigationItems,
  navigationPromptResolutionOptions,
  notifications,
  onDrawerMenuStateChange,
  onSelectExtensionItem,
  onSelectHelp,
  onSelectLogout: propOnSelectLogout,
  onSelectNavigationItem: propOnSelectNavigationItem,
  onSelectSettings,
  onSelectUtilityItem,
  titleConfig,
  userConfig,
  utilityItems,
  workspace,
  userActionConfig,
}) => {
  const applicationIntl = React.useContext(ApplicationIntlContext);
  const navigationPromptCheckpointRef = useRef();
  const idRef = React.useRef(`navigation-${uuidv4()}`);

  const onSelectNavigationItem = useCallback((selectedItemKey) => {
    if (disablePromptsForNavigationItems) {
      propOnSelectNavigationItem(selectedItemKey);
      return;
    }

    navigationPromptCheckpointRef.current.resolvePrompts(navigationPromptResolutionOptions || getUnsavedChangesPromptOptions(applicationIntl)).then(() => {
      propOnSelectNavigationItem(selectedItemKey);
    }).catch((e) => { if (e) throw e; });
  }, [applicationIntl, disablePromptsForNavigationItems, navigationPromptResolutionOptions, propOnSelectNavigationItem]);

  const onSelectLogout = useCallback(() => {
    if (disablePromptsForLogout) {
      propOnSelectLogout();
      return;
    }

    navigationPromptCheckpointRef.current.resolvePrompts(navigationPromptResolutionOptions || getUnsavedChangesPromptOptions(applicationIntl)).then(() => {
      propOnSelectLogout();
    }).catch((e) => { if (e) throw e; });
  }, [applicationIntl, disablePromptsForLogout, navigationPromptResolutionOptions, propOnSelectLogout]);

  return (
    <TerraApplicationNavigation
      id={id || idRef.current}
      hero={hero}
      notifications={notifications}
      titleConfig={titleConfig}
      navigationItems={navigationItems}
      onSelectNavigationItem={propOnSelectNavigationItem && onSelectNavigationItem}
      activeNavigationItemKey={activeNavigationItemKey}
      userConfig={userConfig}
      userActionConfig={userActionConfig}
      extensionItems={extensionItems}
      onSelectExtensionItem={onSelectExtensionItem}
      utilityItems={utilityItems}
      onSelectUtilityItem={onSelectUtilityItem}
      onSelectSettings={onSelectSettings}
      onSelectHelp={onSelectHelp}
      onSelectLogout={propOnSelectLogout && onSelectLogout}
      onDrawerMenuStateChange={onDrawerMenuStateChange}
      workspace={workspace}
    >
      <ApplicationLoadingOverlayProvider>
        <ApplicationStatusOverlayProvider>
          <NavigationPromptCheckpoint
            ref={navigationPromptCheckpointRef}
          >
            <ApplicationErrorBoundary>
              <Suspense fallback={<ApplicationLoadingOverlay isOpen />}>
                {children}
              </Suspense>
            </ApplicationErrorBoundary>
          </NavigationPromptCheckpoint>
        </ApplicationStatusOverlayProvider>
      </ApplicationLoadingOverlayProvider>
    </TerraApplicationNavigation>
  );
};

ApplicationNavigation.propTypes = propTypes;
ApplicationNavigation.Workspace = ApplicationNavigationWorkspace;

export default ApplicationNavigation;
