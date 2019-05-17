import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Base from 'terra-base';
import ThemeProvider from 'terra-theme-provider';
import { ActiveBreakpointProvider } from 'terra-breakpoints';

import styles from './Application.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The components to render within the Application.
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
};

const Application = ({
  locale, customTranslatedMessages, translationsLoadingPlaceholder, themeName, themeIsGlobal, fitToParentIsDisabled, children,
}) => (
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
      <ActiveBreakpointProvider>
        {children}
      </ActiveBreakpointProvider>
    </Base>
  </ThemeProvider>
);

Application.propTypes = propTypes;

export default Application;
