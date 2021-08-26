import React from 'react';
import Pills from '@cerner/terra-pills/lib/index';

const SinglePillTruncatedText = () => (
  <div>
    <Pills ariaLabel="Single Pill Truncated Text">
      <Pills.Pill pillKey="Label" id="longLabelPill" label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu malesuada odio. Nulla id lacus vitae dui fermentum elementum ut vel velit." />
    </Pills>
  </div>
);

export default SinglePillTruncatedText;
