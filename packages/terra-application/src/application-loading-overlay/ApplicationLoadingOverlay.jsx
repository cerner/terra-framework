import { useRef, useContext, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';

import ApplicationLoadingOverlayContext from './ApplicationLoadingOverlayContext';

const propTypes = {
  isOpen: PropTypes.bool,
  message: PropTypes.string,
};

const ApplicationLoadingOverlay = ({ isOpen, message }) => {
  const id = useRef(uuidv4());
  const applicationLoadingOverlay = useContext(ApplicationLoadingOverlayContext);

  useLayoutEffect(() => {
    const overlayId = id.current;

    if (isOpen) {
      applicationLoadingOverlay.show(id.current, message);
    } else {
      applicationLoadingOverlay.hide(id.current);
    }

    return () => {
      applicationLoadingOverlay.hide(overlayId);
    };
  }, [isOpen, message, id, applicationLoadingOverlay]);

  return null;
};

ApplicationLoadingOverlay.propTypes = propTypes;

export default ApplicationLoadingOverlay;
