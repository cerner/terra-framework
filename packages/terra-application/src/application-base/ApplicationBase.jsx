import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Base from 'terra-base';
import ThemeProvider from 'terra-theme-provider';
import { ActiveBreakpointProvider } from 'terra-breakpoints';

import ApplicationErrorBoundary from '../application-error-boundary';
import { ApplicationLoadingOverlayProvider } from '../application-loading-overlay';
import { NavigationPromptCheckpoint } from '../navigation-prompt';

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
   * By default, the elements rendered by ApplicationBase are fit to the Application's parent using 100% height.
   * If `fitToParentIsDisabled` is provided, the Application will render at its intrinsic content height and
   * overflow potentially overflow its parent.
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
  locale, customTranslatedMessages, translationsLoadingPlaceholder, themeName, themeIsGlobal, fitToParentIsDisabled, children, unloadPromptIsDisabled,
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

  return (
    <ThemeProvider
      className={cx('application-theme-provider', { fill: !fitToParentIsDisabled })}
      themeName={themeName}
      isGlobalTheme={themeIsGlobal}
    >
      <Base
        customMessages={customTranslatedMessages}
        translationsLoadingPlaceholder={translationsLoadingPlaceholder}
        locale={locale}
      >
        <ActiveBreakpointProvider>
          <ApplicationErrorBoundary>
            <NavigationPromptCheckpoint
              onPromptChange={(registeredPrompts) => {
                registeredPromptsRef.current = registeredPrompts;
              }}
            >
              <ApplicationLoadingOverlayProvider>
                {children}
              </ApplicationLoadingOverlayProvider>
            </NavigationPromptCheckpoint>
          </ApplicationErrorBoundary>
        </ActiveBreakpointProvider>
      </Base>
    </ThemeProvider>
  );
};

ApplicationBase.propTypes = propTypes;

export default ApplicationBase;
