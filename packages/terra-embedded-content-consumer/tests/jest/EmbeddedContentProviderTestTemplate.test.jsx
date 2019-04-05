import React from 'react';
import ProviderTestTemplate from '../../lib/EmbeddedContentProviderTestTemplate';

// Snapshot Tests
it('should render the provider test template', () => {
  const providerExample = (
    <ProviderTestTemplate>
      <div>Content to display</div>
    </ProviderTestTemplate>
  );

  const wrapper = render(providerExample);
  expect(wrapper).toMatchSnapshot();
});

it('should render the provider test template with a custom class name', () => {
  const providerExample = (
    <ProviderTestTemplate className="container">
      <div>Content to display</div>
    </ProviderTestTemplate>
  );

  const wrapper = render(providerExample);
  expect(wrapper).toMatchSnapshot();
});
