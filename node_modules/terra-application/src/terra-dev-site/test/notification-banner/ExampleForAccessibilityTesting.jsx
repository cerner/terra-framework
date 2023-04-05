import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import NotificationBanner from '../../../notification-banner';

const Example = ({ id }) => {
  const [showErrorBanner, setShowErrorBanner] = useState(false);
  const [showHazardMediumBanner, setShowHazardMediumBanner] = useState(false);
  const [showUnsatisfiedBanner, setShowUnsatisfiedBanner] = useState(true);
  const [showUnverifiedBanner, setShowUnverifiedBanner] = useState(false);
  const [showHazardLowBanner, setShowHazardLowBanner] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowErrorBanner(true);
    }, 10000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setShowHazardMediumBanner(true);
    }, 30000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setShowUnverifiedBanner(true);
    }, 60000);
  }, []);

  return (
    <>
      {showErrorBanner && <NotificationBanner variant="error" id={`error-banner-${id}`} description="Something happened..." />}
      {showUnsatisfiedBanner && <NotificationBanner variant="unsatisfied" id={`unsatisfied-banner-${id}`} />}
      {showHazardMediumBanner && (
        <NotificationBanner
          variant="hazard-medium"
          id={`hazard-medium-banner-${id}`}
          onRequestClose={() => setShowHazardMediumBanner(false)}
        />
      )}
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
      {showHazardLowBanner && <NotificationBanner variant="hazard-low" id={`hazard-low-banner-${id}`} />}
      <p>The error banner will appear after 10 seconds.</p>
      <button
        onClick={() => setShowErrorBanner(!showErrorBanner)}
        type="button"
        id={`toggle-error-banner-${id}`}
      >
        Show/Hide Error Banner
      </button>
      <p>The hazard-medium banner will appear after 30 seconds.</p>
      <button
        onClick={() => setShowHazardMediumBanner(!showHazardMediumBanner)}
        type="button"
        id={`toggle-hazard-medium-banner-${id}`}
      >
        Show/Hide Hazard Medium Banner
      </button>
      <p>Click to toggle Unsatisfied Banner.</p>
      <button
        onClick={() => setShowUnsatisfiedBanner(!showUnsatisfiedBanner)}
        type="button"
        id={`toggle-unsatisfied-banner-${id}`}
      >
        Show/Hide Unsatisfied Banner
      </button>
      <p>The Unverified banner will appear after 60 seconds.</p>
      <button
        onClick={() => setShowUnverifiedBanner(!showUnverifiedBanner)}
        type="button"
        id={`toggle-unverified-banner-${id}`}
      >
        Show/Hide Unverified Banner
      </button>
      <p>Click to toggle Hazard-Low Banner.</p>
      <button
        onClick={() => setShowHazardLowBanner(!showHazardLowBanner)}
        type="button"
        id={`toggle-hazard-low-banner-${id}`}
      >
        Show/Hide Hazard-Low Banner
      </button>
      <p>This is a bunch of random page content to make the screen reader talk a lot longer. This is to help keep the reader going while we wait for the 60 second timeout to show the unverified banner. This contents does not add value to this example except to add a bunch of words for the voice over screen reader to read out loud. This could be cut-off when an banner is rendered unless the banner is polite and waits for the screen reader to finish so the user can understand what is happening on the page.</p>
    </>
  );
};

Example.propTypes = {
  /**
   * Unique ID to append to the IDs in the example to pass accessibility when multiple
   * are rendered on one page.
   */
  id: PropTypes.string,
};

Example.defaultProps = {
  id: '1',
};

export default Example;
