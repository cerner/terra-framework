/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

const ApplicationHeaderDefault = ({ ...customProps }) => {
  if (customProps.layoutConfig.size !== 'large') {
    return (
      <div style={{ width: '100%', height: '50px' }}>
        Test Extensions Small
      </div>
    );
  }

  return (
    <div style={{ color: '#fff' }}>
      Test Extensions Large
    </div>
  );
};

export default ApplicationHeaderDefault;
