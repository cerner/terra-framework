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

it('should accept onMount and onUnmount props', () => {
  const onMount = () => 'example mounted';
  const onUnmount = () => 'example will unmount';

  const providerExample = (
    <ProviderTestTemplate onMount={onMount} onUnmount={onUnmount}>
      <div>Content to display</div>
    </ProviderTestTemplate>
  );

  const wrapper = mount(providerExample);

  expect(wrapper.instance().props.onMount).toBe(onMount);
  expect(wrapper.instance().props.onUnmount).toBe(onUnmount);
  expect(wrapper).toMatchSnapshot();
});
