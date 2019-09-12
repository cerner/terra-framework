import React, { useRef, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Base from 'terra-base';
import ThemeProvider from 'terra-theme-provider';
import { ActiveBreakpointProvider } from 'terra-breakpoints';

import ApplicationErrorBoundary from '../application-error-boundary/ApplicationErrorBoundary';
import ApplicationSessionStorageProvider from '../application-session-storage/ApplicationSessionStorageProvider';
import ApplicationIntlContext from '../application-intl/ApplicationIntlContext';
import ApplicationIntlProvider from '../application-intl/ApplicationIntlProvider';
import ApplicationLoadingOverlayProvider from '../application-loading-overlay/ApplicationLoadingOverlayProvider';
import ApplicationModalProvider from '../application-modal/ApplicationModalProvider';
import { NavigationPromptCheckpoint } from '../navigation-prompt';
import ApplicationContext from './ApplicationContext';

import styles from './ApplicationBase.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The components to render within ApplicationBase.
   */
  children: PropTypes.node.isRequired,
  /**
   * The locale name to be used to load translated messages.
   */
  locale: PropTypes.string.isRequired,
  /**
   * Custom translations for the current locale.
   */
  customTranslatedMessages: (props, propName, componentName) => {
    if (!props[propName]) {
      return null;
    }

    if (Object.keys(props[propName]).length !== 0 && props.locale === undefined) {
      return new Error(`Missing locale prop for ${propName} in ${componentName} props`);
    }

    return null;
  },
  /**
   * The component to render while the translation files are being retrieved.
   * NOTE: Absolutely no locale-dependent logic should be
   * utilized in this placeholder.
   */
  translationsLoadingPlaceholder: PropTypes.node,
  /**
   * The name of the theme to apply to the application using terra-theme-provider.
   */
  themeName: PropTypes.string,
  /**
   * If provided, the theme styles are applied to the entire document.
   */
  themeIsGlobal: PropTypes.bool,
  /**
   * By default, the elements rendered by Application are fit to the Application's parent using 100% height.
   * If `fitToParentIsDisabled` is provided, the Application will render at its intrinsic content height and
   * overflow potentially overflow its parent.
   */
  fitToParentIsDisabled: PropTypes.bool,
  appName: PropTypes.string,
  baseUrl: PropTypes.string,
};

const ApplicationBase = ({
  locale, customTranslatedMessages, translationsLoadingPlaceholder, themeName, themeIsGlobal, fitToParentIsDisabled, children, appName, baseUrl,
}) => {
  const registeredPromptsRef = useRef();

  const appContextValue = useMemo(() => ({
    appName, baseUrl,
  }), [appName, baseUrl]);

  /**
   * The user will be prompted before the page is unloaded if any navigation prompts
   * have been registered.
   *
   * TODO: Do we need to be able to disable this for embedded non-nav workflows? If so, would this logic be better suited for the navigation component itself?
   */
  useEffect(() => {
    function onBeforeUnload(event) {
      if (registeredPromptsRef.current && registeredPromptsRef.current.length) {
        event.preventDefault();

        // Chrome requires returnValue to be set
        event.returnValue = ''; // eslint-disable-line no-param-reassign

        // TODO We seem to be limited to browser default messaging here. What are functional expectations for this?

        return '';
      }

      return undefined;
    }

    // TODO: Do we need to add a prop to disable this for embedded workflows?

    window.addEventListener('beforeunload', onBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', onBeforeUnload);
    };
  }, [registeredPromptsRef]);


  return (
    <ThemeProvider
      className={cx('application-theme-provider', { fill: !fitToParentIsDisabled })}
      themeName={themeName}
      isGlobalTheme={themeIsGlobal}
    >
      <Base
        className={cx('application-base', { fill: !fitToParentIsDisabled })}
        customMessages={customTranslatedMessages}
        translationsLoadingPlaceholder={translationsLoadingPlaceholder}
        locale={locale}
      >
        <ApplicationIntlProvider>
          <ActiveBreakpointProvider>
            <ApplicationErrorBoundary>
              <ApplicationSessionStorageProvider id="default">
                <ApplicationContext.Provider value={appContextValue}>
                  <NavigationPromptCheckpoint
                    onPromptChange={(registeredPrompts) => {
                      registeredPromptsRef.current = registeredPrompts;
                    }}
                  >
                    <ApplicationLoadingOverlayProvider>
                      <ApplicationIntlContext.Consumer>
                        {intl => (
                          <ApplicationModalProvider
                            navigationPromptOptions={prompts => ({
                              title: intl.formatMessage({ id: 'terra-application-base.unsaved-changes' }), // TODO Functional wording and i18n
                              message: intl.formatMessage({ id: 'terra-application-base.unsaved-changes-description' }, { prompts: prompts.map(prompt => prompt.description).join(', ') }),
                              rejectButtonText: intl.formatMessage({ id: 'terra-application-base.unsaved-changes-return' }),
                              acceptButtonText: intl.formatMessage({ id: 'terra-application-base.unsaved-changes-continue' }),
                            })}
                          >
                            {children}
                          </ApplicationModalProvider>
                        )}
                      </ApplicationIntlContext.Consumer>
                    </ApplicationLoadingOverlayProvider>
                  </NavigationPromptCheckpoint>
                </ApplicationContext.Provider>
              </ApplicationSessionStorageProvider>
            </ApplicationErrorBoundary>
          </ActiveBreakpointProvider>
        </ApplicationIntlProvider>
      </Base>
    </ThemeProvider>
  );
};

ApplicationBase.propTypes = propTypes;

export default ApplicationBase;
