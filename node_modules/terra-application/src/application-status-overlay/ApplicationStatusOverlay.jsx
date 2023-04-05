import { useRef, useContext, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import Button from 'terra-button';
import uuidv4 from 'uuid/v4';
import ApplicationStatusOverlayContext from './ApplicationStatusOverlayContext';

const propTypes = {
  /**
   * An array of objects containing terra-button properties. A key attribute is required for each object.
   * This array is used to render buttons in the bottom section.
   * Example:`[{ text: 'Refresh Application', key: 1, variant: 'neutral', onClick: myRefreshFunction}]`
   */
  // eslint-disable-next-line react/forbid-foreign-prop-types
  buttonAttrs: PropTypes.arrayOf(PropTypes.shape(Button.propTypes)),
  /**
   * The descriptive text, displayed under the title.
   */
  message: PropTypes.string,
  /**
   * Sets the glyph and title using a pre-baked variant. One of the following: `no-data`,
   * `no-matching-results`, `not-authorized`, or `error`
   */
  variant: PropTypes.oneOf(['no-data', 'no-matching-results', 'not-authorized', 'error']),
};

const defaultProps = {
  buttonAttrs: [],
  message: undefined,
  variant: undefined,
};

const ApplicationStatusOverlay = (props) => {
  const {
    buttonAttrs,
    message,
    variant,
  } = props;
  const idRef = useRef(uuidv4());
  const applicationStatusOverlay = useContext(ApplicationStatusOverlayContext);

  useLayoutEffect(() => {
    applicationStatusOverlay.show(idRef.current, {
      buttonAttrs,
      message,
      variant,
    });
  }, [buttonAttrs, message, variant, idRef, applicationStatusOverlay]);

  useLayoutEffect(() => () => {
    applicationStatusOverlay.hide(idRef.current);
  }, [applicationStatusOverlay]);

  return null;
};

ApplicationStatusOverlay.propTypes = propTypes;
ApplicationStatusOverlay.defaultProps = defaultProps;

export default ApplicationStatusOverlay;
