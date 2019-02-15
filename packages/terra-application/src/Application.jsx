import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Base from 'terra-base';
import ThemeProvider from 'terra-theme-provider';
import ModalManager from 'terra-modal-manager';
import { ActiveBreakpointProvider } from 'terra-breakpoints';

import styles from './Application.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The components to render within the Application.
   */
  children: PropTypes.node,
  /**
   * The locale name to be used to load translated messages.
   */
  locale: PropTypes.string,
  /**
   * Custom translations for the current locale.
   */
  customTranslatedMessages: (props, propName, componentName) => {
    if (Object.keys(props[propName]).length !== 0 && props.locale === undefined) {
      return new Error(`Missing locale prop for ${propName} in ${componentName} props`);
    }
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
   * If provided, the Application will render with a height determined by its inner content and
   * potentially overflow its parent container.
   */
  parentOverflowIsEnabled: PropTypes.bool,
};

const Application = ({
  locale, customTranslatedMessages, translationsLoadingPlaceholder, themeName, themeIsGlobal, parentOverflowIsEnabled, children,
}) => (
  <Base
    className={cx(['application-base', { fill: !parentOverflowIsEnabled }])}
    customMessages={customTranslatedMessages}
    translationsLoadingPlaceholder={translationsLoadingPlaceholder}
    locale={locale}
  >
    <ThemeProvider
      className={cx(['application-theme-provider', { fill: !parentOverflowIsEnabled }])}
      themeName={themeName}
      isGlobalTheme={themeIsGlobal}
    >
      <ActiveBreakpointProvider>
        <ModalManager className={parentOverflowIsEnabled ? cx('application-modal-manager-overflow') : undefined}>
          {children}
        </ModalManager>
      </ActiveBreakpointProvider>
    </ThemeProvider>
  </Base>
);

Application.propTypes = propTypes;

export default Application;
