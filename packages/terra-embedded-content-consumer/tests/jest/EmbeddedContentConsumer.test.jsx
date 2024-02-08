import React from 'react';
import { Consumer } from 'xfc';
import EmbeddedContentConsumer from '../../lib/EmbeddedContentConsumer';

beforeAll(() => {
  jest.spyOn(console, 'warn').mockImplementation();
});

afterAll(() => {
  console.warn.mockRestore(); // eslint-disable-line no-console
});

// Snapshot Tests
describe(EmbeddedContentConsumer, () => {
  it('should render the embedded content consumer container', () => {
    let frame;
    const onMount = (xfcFrame) => { frame = xfcFrame; };

    const embeddedContentConsumer = (
      <div>
        <EmbeddedContentConsumer
          title="basic provider"
          src="/terra-framework/#/raw/provider/cerner-terra-framework-docs/embedded-content-consumer/providers/basic-provider"
          onMount={onMount}
        />
      </div>
    );

    Consumer.init();
    const wrapper = mountWithIntl(embeddedContentConsumer);
    expect(wrapper).toMatchSnapshot();

    frame.unmount();
  });

  it('should render the embedded content consumer with options attributes', () => {
    let frame;
    const onMount = (xfcFrame) => { frame = xfcFrame; };

    const inlineHtml = '<p><b>Inline HTML Content</b></p><p>This is an inline html content that can be used to render the content into the frame.</p>';
    const frameOptions = {
      iframeAttrs: {
        id: 'iframe-srcdoc-id',
        srcdoc: inlineHtml,
        width: '100%',
        height: '100px',
      },
    };

    const embeddedContentConsumer = (
      <div>
        <EmbeddedContentConsumer
          src=""
          title="inline html content"
          options={frameOptions}
          onMount={onMount}
        />
      </div>
    );

    Consumer.init();
    const wrapper = mountWithIntl(embeddedContentConsumer);
    expect(wrapper).toMatchSnapshot();

    frame.unmount();
  });

  it('should render the embedded content consumer with title prop', () => {
    let frame;
    const onMount = (xfcFrame) => { frame = xfcFrame; };

    const embeddedContentConsumer = (
      <div>
        <EmbeddedContentConsumer
          src="https://www.cdc.gov/"
          title="title for the frame content"
          onMount={onMount}
        />
      </div>
    );

    Consumer.init();
    const wrapper = mountWithIntl(embeddedContentConsumer);
    expect(wrapper).toMatchSnapshot();

    frame.unmount();
  });

  it('should render the embedded content consumer with title prop and options prop', () => {
    let frame;
    const onMount = (xfcFrame) => { frame = xfcFrame; };

    const frameOptions = { iframeAttrs: { title: 'title of content set from options.iframeAttrs' } };
    const embeddedContentConsumer = (
      <div>
        <EmbeddedContentConsumer
          src="https://www.cdc.gov/"
          title="title that will be used for the frame content"
          options={frameOptions}
          onMount={onMount}
        />
      </div>
    );

    Consumer.init();
    const wrapper = mountWithIntl(embeddedContentConsumer);
    expect(wrapper).toMatchSnapshot();

    frame.unmount();
  });

  it('should render the embedded content consumer with custom class names', () => {
    let frame;
    const onMount = (xfcFrame) => { frame = xfcFrame; };

    const embeddedContentConsumer = (
      <div>
        <EmbeddedContentConsumer
          src="https://www.cdc.gov/"
          title="custom class name"
          className="container"
          onMount={onMount}
        />
      </div>
    );

    Consumer.init();
    const wrapper = mountWithIntl(embeddedContentConsumer);
    expect(wrapper).toMatchSnapshot();

    frame.unmount();
  });

  it('should validate the inputs', () => {
    const src = 'https://www.cdc.gov/';
    const title = 'frame content title';
    let frame;
    const onMount = (xfcFrame) => { frame = xfcFrame; };
    const onLaunch = () => { };
    const onAuthorize = () => { };
    const resizeConfig = { scrolling: false, fixedHeight: '100%', fixedWidth: '100%' };
    const options = { secret: 'SecretKey', resizeConfig, iframeAttrs: { title: 'frame content title' } };
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
    const wrapper = mountWithIntl(embeddedContentConsumer);

    expect(frame).toBeTruthy();
    expect(wrapper.instance().props.src).toBe(src);
    expect(wrapper.instance().props.title).toEqual(title);
    expect(frame.iframe.title).toEqual(title);
    expect(wrapper.instance().props.onMount).toBe(onMount);
    expect(wrapper.instance().props.onLaunch).toBe(onLaunch);
    expect(wrapper.instance().props.onAuthorize).toBe(onAuthorize);
    expect(wrapper.instance().props.options).toBe(options);
    expect(wrapper.instance().props.options.resizeConfig).toBe(resizeConfig);
    expect(wrapper.instance().props.eventHandlers).toBe(customEvents);

    frame.unmount();
  });

  it('should render visually hidden text before and after the embedded content consumer container', () => {
    const embeddedContentConsumer = (
      <EmbeddedContentConsumer
        src="https://www.google.com/"
        title="frame content title"
      />
    );

    Consumer.init();
    const wrapper = mountWithIntl(embeddedContentConsumer);

    expect(wrapper.find('VisuallyHiddenText').at(0).prop('text')).toEqual('Terra.embeddedContentConsumer.beginEmbeddedContent');
    expect(wrapper.find('VisuallyHiddenText').at(1).prop('text')).toEqual('Terra.embeddedContentConsumer.endEmbeddedContent');
    expect(wrapper).toMatchSnapshot();
  });

  describe('scrolling', () => {
    it('sets appropriate config option when resizeConfig.scrolling is true', () => {
      const embeddedContentConsumer = (
        <div>
          <EmbeddedContentConsumer
            src="https://www.google.com/"
            options={{ resizeConfig: { scrolling: true } }}
          />
        </div>
      );

      const wrapper = shallowWithIntl(embeddedContentConsumer);
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

      const wrapper = shallowWithIntl(embeddedContentConsumer);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
