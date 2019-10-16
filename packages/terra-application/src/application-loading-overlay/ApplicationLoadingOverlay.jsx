import { useRef, useContext, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';

import ApplicationLoadingOverlayContext from './ApplicationLoadingOverlayContext';

const propTypes = {
  /**
   * A boolean value indicating whether the loading overlay should be visible or not.
   */
  isOpen: PropTypes.bool,
  /**
   * A string indicating the background style for the overlay. One of: `dark`, `light`, `clear`.
   */
  backgroundStyle: PropTypes.oneOf(['dark', 'light', 'clear']),
};

const defaultProps = {
  backgroundStyle: 'clear',
};

const ApplicationLoadingOverlay = ({ isOpen, backgroundStyle }) => {
  const id = useRef(uuidv4());
  const applicationLoadingOverlay = useContext(ApplicationLoadingOverlayContext);

  useLayoutEffect(() => {
    const overlayId = id.current;

    if (isOpen) {
      applicationLoadingOverlay.show(overlayId, { backgroundStyle });
    } else {
      applicationLoadingOverlay.hide(overlayId);
    }

    return () => {
      applicationLoadingOverlay.hide(overlayId);
    };
  }, [isOpen, backgroundStyle, id, applicationLoadingOverlay]);

  return null;
};

ApplicationLoadingOverlay.propTypes = propTypes;
ApplicationLoadingOverlay.defaultProps = defaultProps;

export default ApplicationLoadingOverlay;
