import React, { useEffect } from 'react';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import PropTypes from 'prop-types';
import styles from './ModalOverlay.module.scss';

const cx = classNamesBind.bind(styles);

const zIndexes = ['6000', '7000', '8000', '9000'];

const propTypes = {
  /**
   * Z-Index layer to apply to the ModalContent and ModalOverlay.
   */
  zIndex: PropTypes.oneOf(zIndexes),
};

const ModalOverlay = (props) => {
  useEffect(() => {
    const { overflow } = document.documentElement.style;
    // Disable scrolling on the page when Overlay is displayed
    document.documentElement.style.overflow = 'hidden';

    return () => {
      // Enable scrolling on the page since Overlay has gone away
      document.documentElement.style.overflow = overflow;
    };
  }, []);

  const { zIndex, ...customProps } = props;
  const theme = React.useContext(ThemeContext);
  const overlayClassName = classNames(
    cx(
      'overlay',
      `layer-${zIndex}`,
      theme.className,
    ),
    customProps.className,
  );

  return <div {...customProps} className={overlayClassName} />;
};

ModalOverlay.propTypes = propTypes;

export default ModalOverlay;
