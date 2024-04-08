import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import { injectIntl } from 'react-intl';
import styles from './ApplicationHeaderLayout.module.scss';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * Extensions element to be placed before the end of the header.
   * */
  extensions: PropTypes.element,
  /**
   * Logo element to be placed at the start of the header after the toggle element.
   * */
  logo: PropTypes.element,
  /**
   * intl object programmatically imported through injectIntl from react-intl.
   * */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }).isRequired,
  /**
   * Navigation element to be placed within the fill area of the header.
   * */
  navigation: PropTypes.element,
  /**
   * Toggle element to be placed at the start of the header.
   * */
  toggle: PropTypes.element,
  /**
   * Utilities element to be placed at the end of the header.
   * */
  utilities: PropTypes.element,
};

const ApplicationHeaderLayout = ({
  extensions,
  logo,
  navigation,
  intl,
  toggle,
  utilities,
  ...customProps
}) => {
  const theme = React.useContext(ThemeContext);
  const headerClassNames = classNames(cx(
    'header',
    'fill',
    theme.className,
  ),
  customProps.className);

  let logoElement;
  if (logo) {
    logoElement = <div className={cx('fit', 'start', 'logo')}>{logo}</div>;
  }

  let navigationElement;
  if (navigation) {
    navigationElement = <nav role="navigation" className={cx('fill')}>{navigation}</nav>;
  }

  let extensionsElement;
  if (extensions) {
    extensionsElement = <div className={cx('fit', 'end', 'extensions')}>{extensions}</div>;
  }

  let utilitiesElement;
  if (utilities) {
    utilitiesElement = <div className={cx('fit', 'end', 'utilities')}>{utilities}</div>;
  }

  let headerToggle;
  if (toggle) {
    headerToggle = <div className={cx('fit')}>{toggle}</div>;
  }

  const headerInner = (
    <div className={cx('fill', 'header-inner')}>
      {navigationElement}
      {extensionsElement}
    </div>
  );

  const skipToContent = () => {
    const mainContainer = document.querySelector(['[data-terra-layout-main]']);

    if (mainContainer) {
      mainContainer.focus();
    }
  };

  const skipToContentButton = (
    <button type="button" onClick={skipToContent} className={cx('skip-content')}>
      {intl.formatMessage({ id: 'Terra.ApplicationHeaderLayout.SkipToContent' })}
    </button>
  );

  let headerBody;
  if (headerInner || logoElement || utilitiesElement) {
    headerBody = (
      <div className={cx('fill', 'header-body')}>
        {logoElement}
        {headerInner}
        {utilitiesElement}
      </div>
    );
  }

  return (
    <div {...customProps} className={headerClassNames}>
      {skipToContentButton}
      {headerToggle}
      {headerBody}
    </div>
  );
};

ApplicationHeaderLayout.propTypes = propTypes;

export default injectIntl(ApplicationHeaderLayout);
