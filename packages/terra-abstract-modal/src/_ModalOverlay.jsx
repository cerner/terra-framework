import React, { useEffect } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './ModalOverlay.module.scss';

const cx = classNames.bind(styles);

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

  return <div {...customProps} className={cx(['overlay', `layer-${zIndex}`, customProps.className])} />;
};

ModalOverlay.propTypes = propTypes;

export default ModalOverlay;
