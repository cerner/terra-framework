import React from 'react';
import ProviderTestTemplate from '../../../../EmbeddedContentProviderTestTemplate';

const Provider = () => (
  <ProviderTestTemplate>
    <div style={{ padding: '1.25rem' }}>
      <h1>Basic Content</h1>
      <p>This example demonstrates that the embedded content consumer will display the providers web content within an iframe.</p>
    </div>
  </ProviderTestTemplate>
);

export default Provider;
