import React from 'react';
import { Consumer } from 'xfc';
import EmbeddedContentConsumer from '../../lib/EmbeddedContentConsumer';

// Snapshot Tests
describe(EmbeddedContentConsumer, () => {
  it('should render the embedded content consumer container', () => {
    const embeddedContentConsumer = (
      <div>
        <EmbeddedContentConsumer
          src="/terra-framework/#/raw/provider/cerner-terra-framework-docs/embedded-content-consumer/providers/basic-provider"
        />
      </div>
    );

    const wrapper = shallow(embeddedContentConsumer);
    expect(wrapper).toMatchSnapshot();
  });

  it('should set title using value from title prop into the frame', () => {
    const embeddedContentConsumer = (
      <div>
        <EmbeddedContentConsumer
          src="https://www.cdc.gov/"
          title="title for the frame content"
        />
      </div>
    );

    const wrapper = shallow(embeddedContentConsumer);
    expect(wrapper).toMatchSnapshot();
  });

  it('should set title using value from options iframeAttrs into the frame', () => {
    const frameOptions = { iframeAttrs: { title: 'title of content set from options.iframeAttrs' } };
    const embeddedContentConsumer = (
      <div>
        <EmbeddedContentConsumer
          src="https://www.cdc.gov/"
          options={frameOptions}
        />
      </div>
    );

    const wrapper = shallow(embeddedContentConsumer);
    expect(wrapper).toMatchSnapshot();
  });

  it('should set title using value from props when both titles are provided', () => {
    const frameOptions = { iframeAttrs: { title: 'title of content set from options.iframeAttrs' } };
    const embeddedContentConsumer = (
      <div>
        <EmbeddedContentConsumer
          src="https://www.cdc.gov/"
          title="title that will be used for the frame content"
          options={frameOptions}
        />
      </div>
    );

    const wrapper = shallow(embeddedContentConsumer);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the embedded content consumer with custom class names', () => {
    const embeddedContentConsumer = (
      <div>
        <EmbeddedContentConsumer
          src="https://www.cdc.gov/"
          className="container"
        />
      </div>
    );

    const wrapper = shallow(embeddedContentConsumer);
    expect(wrapper).toMatchSnapshot();
  });

  it('should validate the inputs', () => {
    const src = 'https://www.cdc.gov/';
    const title = 'frame content title';
    let frame;
    const onMount = (xfcFrame) => { frame = xfcFrame; };
    const onLaunch = () => { };
    const onAuthorize = () => { };
    const resizeConfig = { scrolling: false, fixedHeight: '100%', fixedWidth: '100%' };
    const options = { secret: 'SecretKey', resizeConfig };
    const customEvents = [{ key: 'eventKey', handler: () => { } }];

    const embeddedContentConsumer = (
      <EmbeddedContentConsumer
        src={src}
        title={title}
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
    expect(wrapper.instance().props.title).toEqual(title);
    expect(wrapper.instance().props.onMount).toBe(onMount);
    expect(wrapper.instance().props.onLaunch).toBe(onLaunch);
    expect(wrapper.instance().props.onAuthorize).toBe(onAuthorize);
    expect(wrapper.instance().props.options).toBe(options);
    expect(wrapper.instance().props.options.resizeConfig).toBe(resizeConfig);
    expect(wrapper.instance().props.eventHandlers).toBe(customEvents);
  });
});

it('sets appropriate config option when resizeConfig.scrolling is true', () => {
  const embeddedContentConsumer = (
    <div>
      <EmbeddedContentConsumer
        src="https://www.google.com/"
        options={{ resizeConfig: { scrolling: true } }}
      />
    </div>
  );

  const wrapper = shallow(embeddedContentConsumer);
  expect(wrapper).toMatchSnapshot();
});

it('sets appropriate config option when resizeConfig.scrolling is false', () => {
  const embeddedContentConsumer = (
    <div>
      <EmbeddedContentConsumer
        src="https://www.google.com/"
        options={{ resizeConfig: { scrolling: false } }}
      />
    </div>
  );

  const wrapper = shallow(embeddedContentConsumer);
  expect(wrapper).toMatchSnapshot();
});
