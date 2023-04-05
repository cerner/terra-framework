import React, { useState } from 'react';
import ApplicationStatusOverlay from '../../../../lib/application-status-overlay/ApplicationStatusOverlay';
import ApplicationStatusOverlayProvider from '../../../../lib/application-status-overlay/ApplicationStatusOverlayProvider';

const ApplicationStatusOverlayVariant = () => {
  const [variantType1, setVariantType1] = useState('error');
  const [variantType2, setVariantType2] = useState('no-data');
  const [variantType3, setVariantType3] = useState('not-authorized');
  const [showStatusOverlay, setShowStatusOverlay] = useState(false);

  return (
    <>
      <button
        id="show-status"
        type="button"
        onClick={() => {
          setShowStatusOverlay(true);
        }}
      >
        Show Status Views
      </button>
      <button
        id="button1"
        type="button"
        onClick={() => {
          setVariantType1('no-data');
        }}
      >
        Change Status View 1
      </button>
      <button
        id="button2"
        type="button"
        onClick={() => {
          setVariantType2('no-matching-results');
        }}
      >
        Change Status View 1
      </button>
      <button
        id="button3"
        type="button"
        onClick={() => {
          setVariantType3('error');
        }}
      >
        Change Status View 1
      </button>
      <ApplicationStatusOverlayProvider>
        {showStatusOverlay && <ApplicationStatusOverlay variant={variantType1} />}
        {showStatusOverlay && <ApplicationStatusOverlay variant={variantType2} />}
        {showStatusOverlay && <ApplicationStatusOverlay variant={variantType3} />}
      </ApplicationStatusOverlayProvider>
    </>
  );
};

export default ApplicationStatusOverlayVariant;
