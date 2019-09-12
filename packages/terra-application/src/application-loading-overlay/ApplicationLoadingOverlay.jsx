import React, { useRef, useContext, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';

import ApplicationLoadingOverlayContext from './ApplicationLoadingOverlayContext';

const propTypes = {
  isOpen: PropTypes.bool,
  message: PropTypes.string,
};

const ApplicationLoadingOverlay = ({ isOpen, message }) => {
  const id = useRef(uuidv4());
  const loading = useContext(ApplicationLoadingOverlayContext);

  useLayoutEffect(() => {
    if (isOpen) {
      loading.showLoadingIndicator(id.current, message);
    } else {
      loading.hideLoadingIndicator(id.current);
    }

    return () => {
      loading.hideLoadingIndicator(id.current);
    };
  }, [loading, isOpen, message]);

  return null;
};

ApplicationLoadingOverlay.propTypes = propTypes;

export default ApplicationLoadingOverlay;
