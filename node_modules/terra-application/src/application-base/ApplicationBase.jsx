/* global TERRA_THEME_CONFIG */

import React, {
  useRef, useEffect, Suspense, useMemo,
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Base from 'terra-base';
import ThemeProvider from 'terra-theme-provider';
import { ActiveBreakpointProvider } from 'terra-breakpoints';
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';

import ApplicationErrorBoundary from '../application-error-boundary';
import { ApplicationIntlProvider } from '../application-intl';
import ApplicationLoadingOverlay, { ApplicationLoadingOverlayProvider } from '../application-loading-overlay';
import { ApplicationStatusOverlayProvider } from '../application-status-overlay';
import { NavigationPromptCheckpoint } from '../navigation-prompt';
import getBrowserLocale from './private/getBrowserLocale';
import useTestOverrides from './private/useTestOverrides';

import './private/initializeInert';

import styles from './ApplicationBase.module.scss';

const cx = classNames.bind(styles);

const browserLocale = getBrowserLocale();

// We only need to retrieve the root theme and root theme name once for the life of the application.
const themeConfig = (typeof (TERRA_THEME_CONFIG) !== 'undefined') ? TERRA_THEME_CONFIG : undefined;
const rootThemeName = themeConfig?.theme ? themeConfig.theme : 'terra-default-theme';

const propTypes = {
  /**
   * The components to render within ApplicationBase.
   */
  children: PropTypes.node.isRequired,
  /**
   * The locale name to be used to load translated messages.
   * If the `locale` prop is not provided, the preferred language from the browser will be used.
   */
  locale: PropTypes.string,
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
   * By default, the elements rendered by ApplicationBase are fit to the Application's parent using 100% height.
   * If `fitToParentIsDisabled` is provided, the Application will render at its intrinsic content height and
   * potentially overflow its parent.
   */
  fitToParentIsDisabled: PropTypes.bool,
  /**
   * By default, NavigationPrompts rendered within ApplicationBase will cause the user to be prompted during
   * the window's beforeUnload event. If `unloadPromptIsDisabled` is provided, the user will **not** be prompted
   * before continuing with the unload event, even if NavigationPrompts are present.
   */
  unloadPromptIsDisabled: PropTypes.bool,
};

const ApplicationBase = ({
  locale, customTranslatedMessages, translationsLoadingPlaceholder, themeName, fitToParentIsDisabled, children, unloadPromptIsDisabled,
}) => {
  const registeredPromptsRef = useRef();

  useEffect(() => {
    if (unloadPromptIsDisabled) {
      return undefined;
    }

    function onBeforeUnload(event) {
      if (registeredPromptsRef.current && registeredPromptsRef.current.length) {
        event.preventDefault();

        // Chrome requires returnValue to be set to present the confirmation dialog
        event.returnValue = ''; // eslint-disable-line no-param-reassign

        // For this prompt, ApplicationBase is limited to browser-defaulted messaging.
        return '';
      }

      return undefined;
    }

    window.addEventListener('beforeunload', onBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', onBeforeUnload);
    };
  }, [unloadPromptIsDisabled, registeredPromptsRef]);

  const { localeOverride, themeOverride } = useTestOverrides(); // Allows us to test deployed applications in different locales.

  const theme = useMemo(() => ({
    // If the theme class name is undefined or an empty string, that indicates we have the root theme and should apply the root theme name.
    name: themeOverride || themeName || rootThemeName,
    className: themeOverride || themeName,
  }), [themeOverride, themeName]);

  return (
    <div data-terra-application-base className={cx('application-base', { fill: !fitToParentIsDisabled })}>
      <ThemeProvider themeName={themeName}>
        <ThemeContextProvider theme={theme}>
          <Base
            customMessages={customTranslatedMessages}
            throwOnI18nLoadError
            translationsLoadingPlaceholder={translationsLoadingPlaceholder}
            locale={localeOverride || locale || browserLocale}
          >
            <ApplicationErrorBoundary>
              <ApplicationIntlProvider>
                <ActiveBreakpointProvider>
                  <NavigationPromptCheckpoint
                    onPromptChange={(registeredPrompts) => {
                      registeredPromptsRef.current = registeredPrompts;
                    }}
                  >
                    <ApplicationLoadingOverlayProvider>
                      <ApplicationStatusOverlayProvider>
                        <Suspense fallback={<ApplicationLoadingOverlay isOpen />}>
                          {children}
                        </Suspense>
                      </ApplicationStatusOverlayProvider>
                    </ApplicationLoadingOverlayProvider>
                  </NavigationPromptCheckpoint>
                </ActiveBreakpointProvider>
              </ApplicationIntlProvider>
            </ApplicationErrorBoundary>
          </Base>
        </ThemeContextProvider>
      </ThemeProvider>
    </div>
  );
};

ApplicationBase.propTypes = propTypes;

export default ApplicationBase;
