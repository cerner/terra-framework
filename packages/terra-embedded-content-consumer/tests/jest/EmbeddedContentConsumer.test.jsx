import React from 'react';
import { Consumer } from 'xfc';
import EmbeddedContentConsumer from '../../lib/EmbeddedContentConsumer';

// Snapshot Tests
it('should render the embedded content consumer container', () => {
  const embeddedContentConsumer = (
    <EmbeddedContentConsumer
      src="https://www.google.com/"
    />
  );

  const wrapper = render(embeddedContentConsumer);
  expect(wrapper).toMatchSnapshot();
});

it('should render the embedded content consumer with custom class names', () => {
  const embeddedContentConsumer = (
    <EmbeddedContentConsumer
      src="https://www.google.com/"
      className="container"
    />
  );

  const wrapper = render(embeddedContentConsumer);
  expect(wrapper).toMatchSnapshot();
});

it('should render the embedded content consumer with options attributes', () => {
  const inlineHtml = '<p><b>Inline HTML Content</b></p><p>This is an inline html content that can be used to render the content into the frame.</p>';
  const frameOptions = {
    iframeAttrs: {
      title: 'inline html content',
      width: '100%',
      height: '100px',
      srcdoc: inlineHtml,
    },
  };
  const embeddedContentConsumer = (
    <div>
      <EmbeddedContentConsumer
        options={frameOptions}
      />
    </div>
  );

  const wrapper = shallow(embeddedContentConsumer);
  expect(wrapper).toMatchSnapshot();
});

it('should validate the inputs', () => {
  const src = 'https://www.google.com/';
  let frame;
  const onMount = (xfcFrame) => { frame = xfcFrame; };
  const onLaunch = () => {};
  const onAuthorize = () => {};
  const resizeConfig = { scrolling: false, fixedHeight: '100%', fixedWidth: '100%' };
  const options = { secret: 'SecretKey', resizeConfig };
  const customEvents = [{ key: 'eventKey', handler: () => {} }];

  const embeddedContentConsumer = (
    <EmbeddedContentConsumer
      src={src}
      onMount={onMount}
      onLaunch={onLaunch}
      onAuthorize={onAuthorize}
      options={options}
      eventHandlers={customEvents}
    />
  );

  Consumer.init();
  const wrapper = mount(embeddedContentConsumer);

  expect(frame).toBeTruthy();
  expect(wrapper.instance().props.src).toBe(src);
  expect(wrapper.instance().props.onMount).toBe(onMount);
  expect(wrapper.instance().props.onLaunch).toBe(onLaunch);
  expect(wrapper.instance().props.onAuthorize).toBe(onAuthorize);
  expect(wrapper.instance().props.options).toBe(options);
  expect(wrapper.instance().props.options.resizeConfig).toBe(resizeConfig);
  expect(wrapper.instance().props.eventHandlers).toBe(customEvents);
});

it('sets appropriate config option when scrolling is true', () => {
  const embeddedContentConsumer = (
    <div>
      <EmbeddedContentConsumer
        src="https://www.google.com/"
        scrolling
      />
    </div>
  );

  const wrapper = shallow(embeddedContentConsumer);
  expect(wrapper).toMatchSnapshot();
});

it('sets appropriate config option when scrolling is false', () => {
  const embeddedContentConsumer = (
    <div>
      <EmbeddedContentConsumer
        src="https://www.google.com/"
        scrolling={false}
      />
    </div>
  );

  const wrapper = shallow(embeddedContentConsumer);
  expect(wrapper).toMatchSnapshot();
});
