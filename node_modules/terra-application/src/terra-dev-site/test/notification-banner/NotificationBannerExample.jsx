import React, { useState } from 'react';
import classNamesBind from 'classnames/bind';
import PropTypes from 'prop-types';
import NotificationBanner from '../../../notification-banner';
import styles from './CustomVariant.module.scss';

const cx = classNamesBind.bind(styles);

const Example = ({ isInitiallyClosed, id }) => {
  const [showHazardHighBanner, setShowHazardHighBanner] = useState(!isInitiallyClosed);
  const [showHazardMediumBanner, setShowHazardMediumBanner] = useState(!isInitiallyClosed);
  const [showHazardLowBanner, setShowHazardLowBanner] = useState(!isInitiallyClosed);
  const [showErrorBanner, setShowErrorBanner] = useState(!isInitiallyClosed);
  const [showUnsatisfiedBanner, setShowUnsatisfiedBanner] = useState(!isInitiallyClosed);
  const [showUnverifiedBanner, setShowUnverifiedBanner] = useState(!isInitiallyClosed);
  const [showCustomBanner, setShowCustomBanner] = useState(!isInitiallyClosed);

  return (
    <>
      {showHazardHighBanner && <NotificationBanner variant="hazard-high" id={`hazard-high-banner-${id}`} />}
      {showHazardMediumBanner && (
        <NotificationBanner
          variant="hazard-medium"
          id={`hazard-medium-banner-${id}`}
          onRequestClose={() => setShowHazardMediumBanner(false)}
        />
      )}
      {showHazardLowBanner && <NotificationBanner variant="hazard-low" id={`hazard-low-banner-${id}`} />}
      {showErrorBanner && <NotificationBanner variant="error" id={`error-banner-${id}`} description="Something happened..." />}
      {showUnsatisfiedBanner && <NotificationBanner variant="unsatisfied" id={`unsatisfied-banner-${id}`} />}
      {showUnverifiedBanner && (
        <NotificationBanner
          variant="unverified"
          id={`unverified-banner-${id}`}
          description={<div>There are records that have been included that need to be verified before they are officially added. Please review and ensure they should be included.</div>}
          bannerAction={{
            text: 'Verify Records',
            onClick: () => {
              alert('records verified.'); // eslint-disable-line no-alert
              setShowUnverifiedBanner(false);
            },
          }}
        />
      )}
      {showCustomBanner && (
        <NotificationBanner
          variant="custom"
          id={`custom-banner-${id}`}
          custom={{
            signalWord: 'Check this out!',
            customIconClass: cx('custom-notification-banner-icon'),
          }}
          description="This is a custom banner."
        />
      )}
      <p>Show Banner Options: </p>
      <button
        onClick={() => setShowHazardHighBanner(!showHazardHighBanner)}
        type="button"
        id={`toggle-hazard-high-banner-${id}`}
      >
        Show/Hide Hazard-High Banner
      </button>
      <button
        onClick={() => setShowHazardMediumBanner(!showHazardMediumBanner)}
        type="button"
        id={`toggle-hazard-medium-banner-${id}`}
      >
        Show/Hide Hazard-Medium Banner
      </button>
      <button
        onClick={() => setShowHazardLowBanner(!showHazardLowBanner)}
        type="button"
        id={`toggle-hazard-low-banner-${id}`}
      >
        Show/Hide Hazard-Low Banner
      </button>
      <button
        onClick={() => setShowErrorBanner(!showErrorBanner)}
        type="button"
        id={`toggle-error-banner-${id}`}
      >
        Show/Hide Error Banner
      </button>
      <button
        onClick={() => setShowUnsatisfiedBanner(!showUnsatisfiedBanner)}
        type="button"
        id={`toggle-unsatisfied-banner-${id}`}
      >
        Show/Hide Unsatisfied Banner
      </button>
      <button
        onClick={() => setShowUnverifiedBanner(!showUnverifiedBanner)}
        type="button"
        id={`toggle-unverified-banner-${id}`}
      >
        Show/Hide Unverified Banner
      </button>
      <button
        onClick={() => setShowCustomBanner(!showCustomBanner)}
        type="button"
        id={`toggle-custom-banner-${id}`}
      >
        Show/Hide Custom Banner
      </button>
    </>
  );
};

Example.propTypes = {
  /**
   * Unique ID to append to the IDs in the example to pass accessibility when multiple
   * are rendered on one page.
   */
  id: PropTypes.string,
  /**
   * Whether or not the banner should be closed on mount.
   */
  isInitiallyClosed: PropTypes.bool,
};

Example.defaultProps = {
  id: '1',
  isInitiallyClosed: false,
};

export default Example;
