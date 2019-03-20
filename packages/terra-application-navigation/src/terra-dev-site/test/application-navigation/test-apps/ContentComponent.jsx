import React from 'react';

import ContentContainer from 'terra-content-container';

const ContentComponent = ({
  contentName, children, numberOfParagraphs,
}) => (
  <ContentContainer
    fill
  >
    {children || (
      <div style={{ paddingLeft: '0.714rem', paddingRight: '0.714rem' }}>
        <h2>{contentName}</h2>
        {Array.from({ length: numberOfParagraphs }).map((_, index) => (
          <p
            key={`paragraph-${index}`} // eslint-disable-line react/no-array-index-key
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet ultrices commodo.
          </p>
        ))}
        <br />
      </div>
    )}
  </ContentContainer>
);

export default ContentComponent;
