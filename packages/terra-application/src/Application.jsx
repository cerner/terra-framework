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
  children: PropTypes.node,
  /**
   * The locale name.
   */
  locale: PropTypes.string,
  /**
   * Customized translations provided by consuming application only for current locale.
   */
  customTranslatedMessages: (props, propName, componentName) => {
    if (Object.keys(props[propName]).length !== 0 && props.locale === undefined) {
      return new Error(`Missing locale prop for ${propName} in ${componentName} props`);
    }
  },
  /**
   * The component(s) that will be wrapped by `<Base />` ONLY
   * in the event that translations have not been loaded yet.
   * NOTE: Absolutely no locale-dependent logic should be
   * utilized in this placeholder.
   */
  translationsLoadingPlaceholder: PropTypes.node,
  themeName: PropTypes.string,
  themeIsGlobal: PropTypes.bool,
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
