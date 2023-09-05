import React from 'react';
import PropTypes from 'prop-types';
import { Consumer } from 'xfc';

const propTypes = {
  /**
   * The source URL of the content to load.
   */
  src: PropTypes.string.isRequired,
  /**
   * The inline HTML content to render within the iframe.
   *
   * When `srcdoc` prop is set, this will override the `src` URL.
   * It's important to know that when this option is used,
   * the [xfc](https://github.com/cerner/xfc) library does not manage
   * [auto resizing](https://github.com/cerner/xfc#iframe-resizing-config)
   * of the content of the iframe even if `resizeConfig` option is set. It's
   * important to specify the width and height of the content.
   *
   * To set the width and height of the iframe, use the `iframeAttrs` config.
   *
   * ```
   *  options={{
   *     iframeAttrs:
   *     {
   *       width: '100%', // width of the iframe
   *       height: '400px', // height of the iframe
   *     },
   *   }}
   * ```
   */
  srcdoc: PropTypes.string,
  /**
   * Notifies the component that the container has been mounted. Provides a reference
   * to this component to allow triggering messages on the embedded application.
   */
  onMount: PropTypes.func,
  /**
   * Notifies the component that the container has been launched.
   */
  onLaunch: PropTypes.func,
  /**
   * Notifies the component that the container has been authorized.
   */
  onAuthorize: PropTypes.func,
  /**
   * The component can be configured with consumer frame options.
   *
   * Example `options` object:
   *
   * ```
   * options = {{
   *   iframeAttrs: {
   *     id: 'iframe-id', // Sets iframe id
   *     width: '100%', // Optional - Sets the width to 100%
   *     height: '400px', // Optional - Sets the height to 400px; must not be 100%
   *     frameborder: '0', // Optional - '0' Disable frame border, '1' Sets frame border
   *   },
   * }}
   * ```
   *
   * See xfc consumer configuration for details: https://github.com/cerner/xfc
   *
   */
  options: PropTypes.object,
  /**
  * A set of event handlers keyed by the event name.
  * Note: Binding the event handler is necessary to make `this` work in the callback.
  */
  eventHandlers: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    handler: PropTypes.func,
  })),
};

class EmbeddedContentConsumer extends React.Component {
  componentDidMount() {
    // Merging the iframe options props
    const frameOptions = { ...this.props.options };
    if (frameOptions.iframeAttrs == null) {
      frameOptions.iframeAttrs = {};
    }

    if (this.props.srcdoc) {
      Object.assign(frameOptions.iframeAttrs, { srcdoc: this.props.srcdoc });
      Object.keys(frameOptions.iframeAttrs).forEach(key => {
        if (frameOptions.iframeAttrs[key] == null) {
          delete frameOptions.iframeAttrs[key];
        }
      });
    }

    // Mount the provided source as the application into the content wrapper.
    this.xfcFrame = Consumer.mount(this.embeddedContentWrapper, this.props.src, frameOptions);

    // Notify that the consumer frame has mounted.
    if (this.props.onMount) {
      this.props.onMount(this.xfcFrame);
    }

    // Attach the event handlers to the xfc frame.
    this.addEventListener('xfc.launched', this.props.onLaunch);
    this.addEventListener('xfc.authorized', this.props.onAuthorize);

    // Attach custom event handlers to the xfc frame.
    this.addEventListeners(this.props.eventHandlers);
  }

  addEventListener(eventName, eventHandler) {
    if (eventName && eventHandler) {
      this.xfcFrame.on(eventName, eventHandler);
    }
  }

  addEventListeners(customEvents) {
    (customEvents || []).forEach(e => this.addEventListener(e.key, e.handler));
  }

  render() {
    const {
      src,
      srcdoc,
      onMount,
      onLaunch,
      onAuthorize,
      options,
      eventHandlers,
      ...customProps
    } = this.props;

    return (
      <div
        {...customProps}
        ref={(element) => { this.embeddedContentWrapper = element; }}
      />
    );
  }
}

EmbeddedContentConsumer.propTypes = propTypes;

export default EmbeddedContentConsumer;
