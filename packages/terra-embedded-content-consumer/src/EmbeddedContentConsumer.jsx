import React from 'react';
import PropTypes from 'prop-types';
import { Consumer } from 'xfc';

const propTypes = {
  /**
   * The source URL of the content to load.
   */
  src: PropTypes.string.isRequired,
  /**
   * Indicates whether the content inside of the iframe should be scrollable or not. Scrolling is default to `true`.
   * When set to `false`, scrolling is disabled.
   * When scrolling is enabled, it is possible to use keyboard navigation to scroll the content even when there is no
   * interactable element inside the content.
   */
  isScrollable: PropTypes.bool,
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
   *     srcdoc: 'inline html', // Sets the inline HTML content to render within the iframe
   *     width: '100%', // Width of the iframe
   *     height: '400px', // Height of the iframe, must not be 100%
   *   },
   *   resizeConfig: {
   *     scrolling: true, // true - enable scrolling within the frame, false - disable scrolling within the frame
   *   },
   * }}
   * ```
   *
   * Note: when `srcdoc` is set, this will override the `src` URL.
   * It's important to know that when this option is used,
   * the [xfc](https://github.com/cerner/xfc) library does not manage
   * [auto resizing](https://github.com/cerner/xfc#iframe-resizing-config)
   * of the content of the iframe even if `resizeConfig` option is set. It's
   * important to specify the `width` and `height` of the frame.
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

const defaultProps = {
  isScrollable: true,
};

class EmbeddedContentConsumer extends React.Component {
  componentDidMount() {
    // Merging the iframe options props
    const frameOptions = { ...this.props.options };

    if (frameOptions.iframeAttrs === null
      || frameOptions.iframeAttrs === undefined) {
      frameOptions.iframeAttrs = {};
    }

    if (frameOptions.resizeConfig === null
      || frameOptions.resizeConfig === undefined) {
      frameOptions.resizeConfig = {};
    }

    if (this.props.isScrollable === false) {
      Object.assign(frameOptions.resizeConfig, { scrolling: false });
      Object.assign(frameOptions.iframeAttrs, { scrolling: 'no' });
    } else {
      Object.assign(frameOptions.resizeConfig, { scrolling: true });
      Object.assign(frameOptions.iframeAttrs, { scrolling: 'yes' });
    }

    // Mount the provided source as the application into the content wrapper.
    this.xfcFrame = Consumer.mount(this.embeddedContentWrapper, this.props.src, this.props.options);

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
      isScrollable,
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
EmbeddedContentConsumer.defaultProps = defaultProps;

export default EmbeddedContentConsumer;
